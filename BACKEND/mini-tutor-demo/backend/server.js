// ============================================
// 练习目标：把所有技术整合进一个服务器
//
// 这个文件做了4件事：
//   1. Express HTTP 服务器（普通接口）
//   2. Socket.io WebSocket 服务器（实时聊天）
//   3. WebRTC 信令服务器（视频通话中间人）
//   4. 整合 MySQL + Redis
// ============================================

const express = require("express");
const http = require("http"); //Node.js内置的HTTP模块
const { Server } = require("socket.io");
const cors = require("cors");
const pool = require("./db/mysql");

// ─── 1. 创建 Express 应用 ─────────────────────────────
const app = express();

//中间件：解析请求体+跨域
app.use(cors()); //允许所有来源跨域(练习用，生产要限制)
app.use(express.json()); //解析Content-Type:application/json
app.use(express.static("../frontend")); //把frontend文件夹作为静态文件服务

//挂载路由
app.use("/api/auth", require("./routes/auth"));
app.use("/api/tutors", require("./routes/tutors"));

//健康检查
app.get("/api/health", (req, res) => {
  res.json({ success: true, message: "服务运行正常", time: new Date() });
});

// ─── 2. 创建 HTTP 服务器（让WebSocket和HTTP共用同一个端口）
// 关键：Socket.io 需要附着在 http.Server 上，而不是 express 上
const httpServer = http.createServer(app);

// ─── 3. 创建 Socket.io WebSocket 服务器 ───────────────
const io = new Server(httpServer, {
  cors: {
    origin: "*", //练习用，生产环境要限制域名
    methods: ["GET", "POST"],
  },
});

// ─────────────────────────────────────────────────────
// WebSocket 事件处理
//
// 核心概念：
//   io.on('connection')  = 监听新客户端连接
//   socket               = 代表一个客户端连接
//   socket.on('事件名')   = 监听该客户端发来的消息
//   socket.emit('事件')  = 向该客户端发消息
//   io.emit('事件')      = 向所有客户端广播
//   socket.to(room).emit = 向某个房间里的其他人发消息
// ─────────────────────────────────────────────────────

// 记录在线用户：Map<socketId, username>
const onlineUsers = new Map();

io.on("connection", (socket) => {
  console.log(`🔌 新的 WebSocket 连接：${socket.id}`);

  // ─── 事件：用户加入聊天室 ──────────────────────────
  // 前端触发：socket.emit('join', { username, room })
  socket.on("join", async ({ username, room = "general" }) => {
    //把这个socket加入指定"房间"（逻辑分组）
    socket.join(room);

    // 记录用户信息
    onlineUsers.set(socket.id, { username, room });
    socket.data.username = username; //也存在socket对象上方便后续使用
    socket.data.room = room;

    console.log(`👤 ${username} 加入了 ${room} 房间`);

    // 广播"某人进入聊天室"给房间内其他人
    // socket.to(room) = 房间内除了自己以外的所有人
    socket.to(room).emit("system-message", {
      content: "${username} 加入了聊天室",
      time: new Date().toLocaleTimeString(),
    });

    //给自己发一条欢迎消息
    socket.emit("system-message", {
      content: "欢迎来到 ${room}聊天室!",
      time: new Date().toLocaleTimeString(),
    });

    // 发送最近20条历史消息（从MySQL读）
    try {
      const [history] = await pool.query(
        "SELECT * FROM messages WHERE room = ? ORDER BY created_at DESC LIMIT 20",
        [room],
      );
      // 发给刚加入的人（只发给自己）
      socket.emit("history", history.reverse()); //reverse让最旧的在最前
    } catch (err) {
      console.error("读取历史消息失败：", err.message);
    }

    //更新在线人数，广播给房间所有人
    const roomSockets = await io.in(room).fetchSockets();
    io.to(room).emit("online-count", roomSockets.length);
  });

  // ─── 事件：发送聊天消息 ────────────────────────────
  // 前端触发：socket.emit('chat-message', { content })
  socket.on("chat-message", async ({ content }) => {
    const username = socket.data.username || "匿名";
    const room = socket.data.room || "general";

    const messageData = {
      from_user: username,
      content,
      room,
      time: new Date().toLocaleTimeString(),
    };

    // 广播给房间内所有人（包括自己）
    // io.to(room) = 发给房间里的所有人
    io.to(room).emit("chat-message", messageData);

    // 同时把消息存入 MySQL（持久化）
    try {
      await pool.query(
        "INSERT INTO messages (from_user, content, room) VALUES (?, ?, ?)",
        [username, content, room],
      );
    } catch (err) {
      console.error("消息存储失败：", err.message);
    }
  });

  // ─── WebRTC 信令事件（视频通话用）────────────────────
  //
  // 信令服务器的作用：
  //   A 和 B 想直接视频通话，但他们不知道彼此的网络地址
  //   信令服务器帮他们"互换名片"（交换SDP和ICE候选者）
  //   名片交换完成后，A和B就能直接连接，信令服务器退出
  // ──────────────────────────────────────────────────

  // A 向 B 发起通话邀请（offer）
  socket.on("webrtc-offer", ({ targetSocketId, offer }) => {
    console.log(`📹 WebRTC offer: ${socket.id} → ${targetSocketId}`);
    // 把 offer 转发给目标用户
    // socket.to(id) = 发给指定 socketId 的用户
    io.to(targetSocketId).emit("webrtc-offer", {
      offer,
      fromSocketId: socket.id,
      fromUsername: socket.data.username,
    });
  });

  // B 回应 A 的邀请（answer）
  socket.on("webrtc-answer", ({ targetSocketId, answer }) => {
    console.log(`📹 WebRTC answer: ${socket.id} → ${targetSocketId}`);
    io.to(targetSocketId).emit("webrtc-answer", { answer });
  });

  // 交换网络候选者（ICE candidate，用于打通NAT）
  socket.on("webrtc-ice-candidate", ({ targetSocketId, candidate }) => {
    io.to(targetSocketId).emit("webrtc-ice-candidate", { candidate });
  });

  // 挂断通话
  socket.on("webrtc-hangup", ({ targetSocketId }) => {
    io.to(targetSocketId).emit("webrtc-hangup");
  });

  // 请求在线用户列表（用于发起视频通话时选择对方）
  socket.on("get-online-users", () => {
    const users = [];
    onlineUsers.forEach((info, socketId) => {
      if (socketId !== socket.id) {
        // 不包含自己
        users.push({ socketId, username: info.username });
      }
    });
    socket.emit("online-users", users);
  });

  // ─── 事件：断开连接 ────────────────────────────────
  socket.on("disconnect", async () => {
    const user = onlineUsers.get(socket.id);
    if (user) {
      // 通知房间内其他人
      socket.to(user.room).emit("system-message", {
        content: `${user.username} 离开了聊天室`,
        time: new Date().toLocaleTimeString(),
      });
      onlineUsers.delete(socket.id);

      // 更新在线人数
      const roomSockets = await io.in(user.room).fetchSockets();
      io.to(user.room).emit("online-count", roomSockets.length);
    }
    console.log(`🔌 断开连接：${socket.id}`);
  });
});

// ─── 启动服务器 ────────────────────────────────────────
const PORT = 3001;
httpServer.listen(PORT, () => {
  console.log(`\n🚀 服务器启动成功！`);
  console.log(`   HTTP  接口: http://localhost:${PORT}/api`);
  console.log(`   静态文件:   http://localhost:${PORT}`);
  console.log(`   WebSocket:  ws://localhost:${PORT}\n`);
});
