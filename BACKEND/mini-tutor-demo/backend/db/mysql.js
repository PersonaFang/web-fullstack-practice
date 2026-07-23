// ============================================
// 练习目标：理解 MySQL 连接池的概念和用法
//
// 连接池 = 预先建好一批数据库连接放着
// 需要时取一个用，用完放回去，避免频繁建立/断开连接
// ============================================

const mysql = require('mysql2/promise'); //promise版本，支持 async/await

//创建连接池(不是单个连接，是一组连接)
const pool = mysql.createPool(
    {
        host: 'localhost',
        port: 3306,
        user: 'root',
        password: 'root1234',
        database: 'mini_tutor_demo',
        waitForConnections: true, //连接池满时排队等待，而不是报错
        connectionLimit: 10,      //池里最多保持10个连接
        queueLimit: 0,            //等待队列无限制

        charset:'utf8mb4'         //字符集，支持中文
    }
)

//测试连接是否成功
async function testConnection(){
    try{
        //pool.getConnection() 从池里借一个连接
        const connection = await pool.getConnection();
        console.log('✅ MySQL 连接成功！');
        connection.release(); //用完必须归还，否则连接池会被耗尽
    }catch(err){
        console.error('❌ MySQL连接失败', err.message);
    }
}

testConnection();

// 导出pool，其他文件通过 pool.query() 执行SQL
module.exports = pool;