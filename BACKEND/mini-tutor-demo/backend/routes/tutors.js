JavaScript;

// ============================================
// 练习目标：HTTP GET接口 + Redis缓存策略
//
// 缓存流程（Cache-Aside Pattern）：
//   请求进来 → 查Redis → 命中? 直接返回
//                      → 未命中? 查MySQL → 存Redis → 返回
// ============================================

const express = require("express");
const pool = require("../db/mysql");
const { getCache, setCacche, delCache } = require("../db/redis");

const router = express.Router();

// ─── GET /api/tutors ──────────────────────────────────
// 获取导师列表（有Redis缓存）

router.get("/", async (req, res) => {
  const CACHE_KEY = "tutors:list"; //缓存的键名，自己起一个有意义的名字
  try {
    // ① 先查 Redis 缓存
    const cached = await getCache(CACHE_KEY);
    if (cached) {
      console.log("🟢 Redis缓存命中！返回缓存数据");
      return res.json({
        success: true,
        message: "获取成功(来自缓存)",
        fromCache: true, // ← 加这个字段方便前端调试时看出来是否走了缓存
        data: cached,
      });
    }
    // ② 缓存没有，查 MySQL
    console.log("🔴 缓存未命中，查询 MySQL...");
    const [rows] = await pool.query(
      "SELECT t.id,t.name,t.subject,t.bio,t.rating,u.username FROM tutors t JOIN users u ON t.user_id = u.id ORDER BY t.rating DESC",
    );
    // ③ 把结果存入 Redis，设置30秒过期
    //    （生产环境可以设更长，比如10分钟=600秒）
    await setCache(CACHE_KEY, rows, 30);
    console.log("💾 已将结果写入 Redis 缓存（30秒）");

    res.json({
      success: true,
      message: "获取成功(来自数据库)",
      fromCache: false,
      data: rows,
    });
  } catch (err) {
    console.error("获取导师列表失败：", err);
    res.status(500).json({ success: false, message: "服务器错误" });
  }
});

// ─── GET /api/tutors/:id ──────────────────────────────
// 获取单个导师详情（也有缓存）

router.get('/:id', async(req, res)=>{
    const{id} = req.params; // URL 参数，比如 /api/tutors/1 中的 1
    const CACHE_KEY = 'tutors:detail:${id}';//每个导师单独一个缓存键

    try{
        //先查缓存
        const cached = await getCache(CACHE_KEY);
        if(cached){
            return res.json({success:true, fromCache:true, data:cached});
        }

        // 查MySQL
        const [rows] = await pool.query(
            "SELECT t.*, u.username FROM tutors t JOIN users u ON t.user_id = u.id WHERE t.id=?",[id]
        )
        if(rows.length === 0){
            return res.status(404).json({success:false, message:'导师不存在'});
        }

        // 写缓存（60秒）
        await setCache(CACHE_KEY, rows[0], 60);
        res.json({success:true, fromCache:false, data:rows[0]});
    }catch (err){
      res.status(500).json({success:false, message:'服务器错误'});
    }
});

module.exports = router;