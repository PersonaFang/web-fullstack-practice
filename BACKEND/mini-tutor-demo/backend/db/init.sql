-- ============================================
-- 练习目标：理解 MySQL 建表、字段类型、外键
-- ============================================
-- 1.创建数据库
CREATE DATABASE IF NOT EXISTS mini_tutor_demo CHARACTER
SET
    utf8mb4 --支持中文和emoji
    COLLATE utf8mb4_unicode_ci;

USE mini_tutor_demo;

-- 2.用户表(学员和导师共用)
CREATE TABLE
    IF NOT EXISTS users (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(50) NOT NULL UNIQUE, -- 登录账号，唯一
        password VARCHAR(255) NOT NULL, -- bcrypt哈希后的密码
        role ENUM ('student', 'tutor') DEFAULT 'student',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 3.导师详情表
CREATE TABLE
    IF NOT EXISTS TUTORS (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        user_id INT UNSIGNED NOT NULL UNIQUE,
        NAME VARCHAR(100) NOT NULL,
        SUBJECT VARCHAR(100) NOT NULL,
        bio TEXT,
        rating DECIMAL(2, 1) DEFAULT 5.0,
        FOREIGN KEY (user_id) REFERENCES users (id) --外键约束
    );

-- 4.聊天消息表(WebSocket消息持久化)
CREATE TABLE
    IF NOT EXISTS messages (
        id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
        from_user VARCHAR(50) NOT NULL,
        content TEXT NOT NULL,
        room VARCHAR(50) NOT NULL DEFAULT 'general', --聊天室名称
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

-- 5.插入测试数据
-- 密码明文:password123(bcrypt哈希值)
INSERT INTO
    users (username, password, role)
VALUES
    (
        'student1',
        '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
        'student'
    ),
    (
        'tutor1',
        '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
        'tutor'
    ),
    (
        'tutor2',
        '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
        'tutor'
    );

INSERT INTO
    tutors (user_id, name, subject, bio, rating)
VALUES
    (2, '张老师', '数学', '10年高中数学教学经验，擅长解题技巧', 4.9),
    (3, '李老师', '英语', '英语专业八级，留学归来', 4.7);