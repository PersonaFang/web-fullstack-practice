// ============================================
// 练习目标：理解 HTTP POST 请求处理
// 登录 = 接收账号密码 → 查数据库 → 返回JWT
// ============================================

const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const pool = require("../db/mysql");

const router = express.Router();
const JWT_SECRET = "demo_secret_key_change_in_production";

// ─── POST /api/auth/login ──────────────────────────────
// 练习：接收 JSON body → 查 MySQL → 验证密码 → 返回 JWT
router.post("/login", async (req, res) => {
  //req.body 就是前端发来的 JSON 数据
  const { username, password } = req.body;

  // ① 参数校验
  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "用户名和密码不能为空",
    });
  }
  try {
    // ② 查 MySQL：用占位符 ? 防止SQL注入！
    //    永远不要用字符串拼接来构建SQL！
    const [rows] = await pool.query(
        'SELECT * FROM users WHERE username = ?',
        [username] //用数组传参数，mysql2自动转义特殊字符
    );

    // ③ 判断用户是否存在
    if(rows.length === 0){
        return res.status(401).json({success:false, message:'账号或密码错误'});
    }

    // ④ bcrypt 对比密码（不能直接比较，因为存的是哈希）
    const user = rows[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(401).json({success:false, message:'账号或密码'});
    }

    // ⑤ 生成 JWT Token
    //jwt.sign(payload, secret, options)
    //payload = 存进token里的信息（不要存密码！）
    const token = jwt.sign(
        {id:user.id, username:user.username, role:user.role},
        JWT_SECRET,
        {expiresIn: '20h'} //24小时过期
    )

    // ⑥ 返回成功响应
    res.json({
        success: true,
        message: '登陆成功',
        data:{
            token,
            user:{id:user.id, username:user.username, role:user.role}
        }
    })
  } catch (err) {
    console.error("登录错误：", err);
    res.status(500).json({ success: false, message: "服务器内部错误" });
  }
});


// ─── POST /api/auth/register ──────────────────────────
router.post('/register', async(req, res) => {
    const{username, password, role='student'} = req.body;

    if(!username || !password){
        return res.status(400).json({success:false, message:'参数不完整'});
    }

    try{
        // ① 检查用户名是否已存在
        const [exist] = await pool.query("SELECT id FROM users WHERE username = ?", [username]);
        if(exist.length > 0){
            return res.status(409).json({success:false, message:'用户名已被占用'});
        }

        // ② bcrypt 哈希密码（第二个参数10是"盐轮数"，越大越安全但越慢）
        const hashedPassword = await bcrypt.hash(password, 10);

        // ③ 插入数据库
        const [result] = await pool.query('INSERT INTO users (username, password, role) VALUES(?, ?, ?)', [username, hashedPassword, role]);

        res.status(201).json({
            success:true,
            message:'注册成功',
            data:{id:result.insertId, username, role}
        });
    }catch(err){
        console.error('注册错误', err);
        res.status(500).json({success:false, message:'服务器内部错误'});
    }
})

module.exports = router;