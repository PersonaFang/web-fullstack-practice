// ============================================
// 练习目标：理解 Redis 作为缓存的使用方式
//
// 核心思想：
//   1. 先查Redis（快，毫秒级）
//   2. 没有再查MySQL（慢，几十毫秒）
//   3. 把MySQL结果写入Redis（设置过期时间）
//   4. 下次直接从Redis取，不用再查MySQL
// ============================================

const Redis = require("ioredis");

const redis = new Redis({
  host: "localhost",
  port: 6379,
  password: "", //如果Redis设置了密码才填，默认为空
  db: 0, //Redis有16个数据库(0-15)，默认用0号

  //连接失败时自动重试
  retryStrategi(times) {
    // times = 已重试次数
    // 返回下次重试的等待毫秒数，返回null则停止重试
    if (times > 3) return null; //超过3次就放弃
    return Math.min(times * 500, 2000); //每次多等500ms，最多等2秒
  },
});

//监听连接事件
redis.on('connect', ()=>console.log('✅ Redis 连接成功！'));
redis.on('error', (err)=>console.error('❌ Redis 错误：', err.message));

// ─── 封装常用操作，方便其他文件调用 ───────────────────

/**
 * 从缓存获取数据（自动反序列化JSON）
 * @param {string} key -缓存的键名
 * @returns {any|null} -有缓存返回对象，没有返回null
 */
async function getCache(key){
    const value = await redis.get(key);
    if(!value) return null;
    return JSON.parse(value); //Redis只存字符串，需要还原成对象
}

/**
 * 写入缓存（自动序列化JSON）
 * @param {string} key --键名
 * @param {any} value --要存的数据（对象/数组都行）
 * @param {number} ttlSec --过期秒数，默认60秒
 */
async function setCache(key, value, ttlSec=60){
    // EX = 设置过期时间（秒），时间到自动删除
    await redis.set(key, JSON.stringify(value), 'EX', ttlSec);
}

/**
 * 删除缓存（数据更新时调用，让旧缓存失效）
 * @param {string} key -要删除的键名
 */
async function delCache(key){
    await redis.del(key);
}

module.exports = {redis, getCache, setCache, delCache};