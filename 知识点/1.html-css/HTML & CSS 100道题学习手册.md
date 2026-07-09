📚 HTML & CSS 面试题通俗理解学习手册（100题）
使用方式：先看"通俗理解"建立直觉，再看"技术要点"记忆答案，最后看"一句话记忆法"应对面试。

🏠 一、HTML 基础（1-25题）

# 第1题：`<!DOCTYPE html>` 的作用是什么？不写会怎样？

## 🍽️ 生活类比：餐厅的服务模式说明

想象你走进一家餐厅，门口挂着一个牌子：

text



```
"本店采用现代服务标准（Standards Mode）"
```

这块牌子就是 `<!DOCTYPE html>`——它告诉浏览器："请用现代标准来解析这个页面"。

如果你不挂牌子，服务员（浏览器）就会说：

> "不知道这家是什么档次，我就按照 20 年前的老规矩来吧……"

这就叫**怪异模式（Quirks Mode）**——按老旧标准渲染，会出现各种奇怪的布局问题。

## 🔍 技术解释

HTML



```
<!DOCTYPE html>  ← 这一行必须是 HTML 文件的第一行
<html>
  <head>...</head>
  <body>...</body>
</html>
```

| 情况                   | 模式       | 效果                                   |
| ---------------------- | ---------- | -------------------------------------- |
| 写了 `<!DOCTYPE html>` | 标准模式 ✅ | 按 W3C 现代标准渲染                    |
| 没写                   | 怪异模式 ❌ | 按老 IE 规则渲染，盒模型计算等都不一样 |

## ⚠️ 不写会出什么问题？

最典型的问题是**盒模型计算不同**：

text



```
标准模式：
  div { width: 100px; padding: 10px; }
  → 元素实际占用宽度 = 100 + 10×2 = 120px

怪异模式（老IE方式）：
  div { width: 100px; padding: 10px; }
  → 元素实际占用宽度 = 100px（padding 被算进去了！内容区缩小）
```

## 💡 记忆口诀

> `<!DOCTYPE html>` = "我是现代网页，请用现代规则渲染我"

------

# 第2题：什么是 HTML 语义化？

## 🏗️ 生活类比：建筑蓝图上的标注

想象你看到两张建筑平面图：

**图一（没有语义化）**：

text



```
┌─────┐ ┌────────────┐ ┌─────┐
│ 盒子 │ │    盒子     │ │ 盒子│
└─────┘ └────────────┘ └─────┘
```

**图二（有语义化）**：

text



```
┌─────┐ ┌────────────┐ ┌─────┐
│厨房  │ │   客厅      │ │卧室  │
└─────┘ └────────────┘ └─────┘
```

第二张图一眼就知道每个区域是干什么的，不用猜！

HTML 语义化就是：**用有明确含义的标签，而不是到处用 `<div>`**。

## 📝 语义化 vs 非语义化对比

HTML



```
<!-- ❌ 没有语义化（全是 div，不知道哪块是什么）-->
<div>
  <div>我是网站标志</div>
  <div>
    <div>首页</div>
    <div>关于</div>
  </div>
</div>
<div>
  <div>这是一篇文章</div>
  <div>文章正文内容...</div>
</div>
<div>版权所有 2025</div>


<!-- ✅ 有语义化（一看就懂结构）-->
<header>          ← 明确：这是页头
  <h1>我是网站标志</h1>
  <nav>           ← 明确：这是导航
    <a>首页</a>
    <a>关于</a>
  </nav>
</header>
<main>            ← 明确：这是主体内容
  <article>       ← 明确：这是一篇独立文章
    <h2>文章标题</h2>
    <p>文章正文...</p>
  </article>
</main>
<footer>版权所有 2025</footer>  ← 明确：这是页脚
```

## 🌟 常见语义化标签速查

| 标签        | 含义                         | 类比             |
| ----------- | ---------------------------- | ---------------- |
| `<header>`  | 页面/区块的头部              | 书的封面         |
| `<nav>`     | 导航链接区域                 | 书的目录         |
| `<main>`    | 页面主要内容（每页只有一个） | 书的正文         |
| `<article>` | 独立完整的内容（如一篇博文） | 书里的一个章节   |
| `<section>` | 内容的一个章节/分组          | 章节里的一个小节 |
| `<aside>`   | 侧边栏/附属信息              | 书页旁边的批注   |
| `<footer>`  | 页面/区块的底部              | 书的版权页       |

## 🎯 语义化的好处（3个记住就够）

1. **利于 SEO**：搜索引擎能看懂页面结构，`<h1>` 里的内容被认为是重要标题
2. **利于可访问性**：盲人用的屏幕阅读器能正确朗读页面结构（"导航区域"、"主要内容"）
3. **利于维护**：三个月后看自己写的代码，也能快速看懂

------

# 第3题：HTML5 相比 HTML4 新增了哪些主要特性？

## 📱 生活类比：手机的更新换代

HTML4 = 诺基亚时代的手机（只能打电话发短信） HTML5 = 智能手机（能拍照、导航、上网、装 APP……）

## 🆕 HTML5 新增内容分类记忆

### 一、新标签（不用再全靠 div 了）

HTML



```
语义化：<header> <footer> <nav> <main> <article> <section> <aside>
多媒体：<video> <audio>（不再需要 Flash！）
图形：  <canvas>（用 JS 画图）
```

### 二、增强的表单（input 新增了很多类型）

HTML



```
<!-- HTML4 只有 text、password、radio 等几种 -->
<!-- HTML5 新增了很多实用的 type -->
<input type="email">       <!-- 自动校验邮箱格式 -->
<input type="tel">         <!-- 手机会弹出数字键盘 -->
<input type="number">      <!-- 只能输数字 -->
<input type="date">        <!-- 弹出日期选择器 -->
<input type="range">       <!-- 滑动条 -->
<input type="color">       <!-- 颜色选择器 -->
<input type="search">      <!-- 搜索框（带清除按钮）-->

<!-- 新属性 -->
<input placeholder="请输入用户名">  <!-- 提示文字 -->
<input required>                    <!-- 必填校验 -->
<input autofocus>                   <!-- 自动聚焦 -->
```

### 三、本地存储（数据存在浏览器里）

JavaScript



```
// Cookie 只有 4KB，localStorage 有 5MB！
localStorage.setItem('username', '张三');   // 永久保存
sessionStorage.setItem('token', 'abc123'); // 关标签页就删
```

### 四、其他重要 API

text



```
Web Worker  → 后台线程，做复杂计算不卡界面
WebSocket   → 浏览器和服务器实时双向通信（聊天、游戏）
Geolocation → 获取用户地理位置（地图导航）
Drag & Drop → 原生拖放功能（文件拖到浏览器上传）
Canvas      → JS 绘图（游戏、数据可视化）
```

## 💡 记忆口诀

> HTML5 = 语义标签 + 多媒体 + 增强表单 + 本地存储 + 新 API

------

# 第4题：`<meta>` 标签有哪些常见属性？

## 📋 生活类比：书籍的版权页

翻到一本书的第一页，你会看到：

- 书名、作者、出版社
- 版次、印刷日期
- ISBN 号
- "版权所有，翻印必究"

这些信息**不是给读者看内容用的**，而是**描述这本书自身的信息**。

<meta> 标签就是网页的"版权页"——描述网页自身的元数据（Metadata）。

## 💻 常用 meta 标签详解

### 1. 字符编码（最重要，必须写！）

HTML



```
<meta charset="UTF-8">
```

**为什么要写**：告诉浏览器用 UTF-8 编码解析文字，否则中文会显示乱码。

text



```
类比：告诉翻译官"这本书用中文写的，请用中文字典翻译"
不写的话：页面显示"?????? ????" 一堆乱码
```

### 2. 移动端视口（做移动端必须写）

HTML



```
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

text



```
类比：告诉手机"请用你真实的屏幕宽度显示网页，不要缩小"

不写的话：手机会把网页缩成一个小小的版本（像在手机上看一张报纸缩略图）
写了之后：网页按手机屏幕宽度正常显示
```

参数说明：

text



```
width=device-width  → 视口宽度 = 设备屏幕宽度
initial-scale=1.0   → 初始缩放比例为 1（不缩放）
```

### 3. SEO 相关

HTML



```
<!-- 网页描述（显示在搜索结果摘要里）-->
<meta name="description" content="这是一个学习前端开发的网站，提供HTML、CSS、JavaScript教程">

<!-- 关键词（现在搜索引擎基本不看了，但可以写）-->
<meta name="keywords" content="前端,HTML,CSS,JavaScript,教程">
```

text



```
类比：
description = 书的内容简介（封底那段介绍）
keywords    = 书的分类标签（图书馆的索引卡）
```

### 4. http-equiv（模拟 HTTP 头）

HTML



```
<!-- 禁止缓存 -->
<meta http-equiv="Cache-Control" content="no-cache">

<!-- 5秒后跳转到另一个页面 -->
<meta http-equiv="refresh" content="5;url=https://example.com">

<!-- 指定 IE 用最新版渲染 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
```

## 📌 记住这三个就够应付大部分面试

HTML



```
<head>
  <meta charset="UTF-8">                                          <!-- 必写！防乱码 -->
  <meta name="viewport" content="width=device-width, initial-scale=1.0"> <!-- 移动端必写 -->
  <meta name="description" content="页面描述">                   <!-- SEO 用 -->
</head>
```

------

# 第5题：`<script>` 标签中 `defer` 和 `async` 有什么区别？

## 🚌 生活类比：公交车上下客

想象浏览器是一辆公交车，正在沿途（解析 HTML）接送乘客：

**没有 async/defer（普通 script）**：

text



```
公交行驶中... 遇到了一个大客人（script）
→ 公交停下来，等大客人上车、坐好（下载并执行JS）
→ 其他乘客在后面等，谁也上不了
→ 大客人搞定了，公交继续开
```

**结果**：如果 JS 文件很大，页面会卡住不动，用户看到白屏。

------

**async（异步）**：

text



```
公交行驶中... 叫了一辆顺风车来接大客人（异步下载JS）
→ 公交不等，继续开（HTML继续解析）
→ 顺风车把大客人送到了（JS下载完了）
→ 公交立刻停下，让大客人上来（立刻执行）
→ 继续开
```

**结果**：HTML 解析不被阻塞，但 JS 执行时机不确定（随时可能打断）。

------

**defer（延迟）**：

text



```
公交行驶中... 叫了一辆顺风车接大客人（异步下载JS）
→ 公交不等，继续开（HTML继续解析）
→ 公交到站了（HTML解析完毕）
→ 这时大客人统一上车（所有defer的JS按顺序执行）
```

**结果**：HTML 解析不阻塞，JS 等 HTML 解析完才执行，且保证顺序。

## 📊 三者对比表

|          | 普通 `<script>`  | `async`                | `defer`           |
| -------- | ---------------- | ---------------------- | ----------------- |
| 下载方式 | 同步（阻塞页面） | 异步（不阻塞）         | 异步（不阻塞）    |
| 执行时机 | 立即（边下边停） | 下载完立即执行         | HTML 解析完后执行 |
| 保证顺序 | ✅                | ❌（谁先下完谁先执行）  | ✅（按顺序）       |
| 适合场景 | 几乎不用         | 独立脚本（如百度统计） | 有依赖顺序的脚本  |

## 💻 代码示例

HTML



```
<head>
  <!-- ❌ 放在 head 里没有 defer/async：页面会白屏等 JS 下载 -->
  <script src="heavy.js"></script>

  <!-- ✅ 加 defer：异步下载，HTML 解析完才执行，有顺序保证 -->
  <script src="jquery.js" defer></script>
  <script src="main.js" defer></script>  <!-- main.js 一定在 jquery.js 之后执行 -->

  <!-- ✅ 加 async：异步下载，下载完立刻执行，适合独立脚本 -->
  <script src="analytics.js" async></script>  <!-- 统计脚本，不依赖其他JS -->
</head>
```

## 💡 面试一句话总结

> **`async`**：下载和我无关，下完立刻跑，适合"独行侠"脚本 **`defer`**：下载和我无关，但等大家（HTML）都准备好了我再跑，按顺序

------

# 第6题：`alt` 和 `title` 属性有什么区别？

## 🖼️ 生活类比：博物馆的画

想象博物馆里的一幅画：

- **`alt`** = 画旁边的**备用说明牌**：如果画被搬走了（图片加载失败），还能知道这里本来有什么
- **`title`** = 解说员凑近告诉你的**额外介绍**：鼠标悬停时才出现的提示

HTML



```
<img 
  src="cat.jpg" 
  alt="一只橘色小猫坐在窗台上"    ← 图片挂掉时显示这段文字
  title="这是我家养的猫，叫旺财"   ← 鼠标悬停时弹出这个提示
>
```

## 🎯 关键区别速记

|            | `alt`                           | `title`                 |
| ---------- | ------------------------------- | ----------------------- |
| 显示时机   | 图片**加载失败**时显示          | **鼠标悬停**时显示      |
| 重要性     | **必须写**（可访问性、SEO）     | 可选（补充说明）        |
| 屏幕阅读器 | **会读出来**（帮助盲人）        | 不一定读                |
| 为空时含义 | `alt=""` 表示装饰图，阅读器忽略 | `title=""` 就是没有提示 |

## ⚠️ 重要的 `alt` 使用规范

HTML



```
<!-- ✅ 有意义的图片：写有意义的 alt -->
<img src="product.jpg" alt="iPhone 15 Pro 钛金属 256G 手机正面图">

<!-- ✅ 装饰性图片（如背景花纹）：alt 写空字符串，让屏幕阅读器忽略 -->
<img src="decoration.png" alt="">

<!-- ❌ 错误：alt 写"图片"、"image"这种无意义内容 -->
<img src="product.jpg" alt="图片">        <!-- 废话，当然是图片 -->
<img src="product.jpg" alt="product.jpg"> <!-- 把文件名写进去，毫无意义 -->
```

------

# 第7题：`<link>` 和 `@import` 引入 CSS 有什么区别？

## 🚚 生活类比：搬家公司的两种模式

你要把新家的家具（CSS 文件）都搬进来：

**`<link>` 模式（并行搬运）**：

text



```
你同时雇了 5 辆搬家车，大家一起出发去拿家具
→ 家具很快就都到了（CSS 并行加载）
→ 你可以快点住进去（页面快速渲染）
```

**`@import` 模式（串行搬运）**：

text



```
你先派一辆车去取 A 家具（下载主 CSS）
A 取回来了，才看到里面说"还需要 B 家具"
→ 再派车去取 B（下载 @import 的 CSS）
→ B 取回来了，才看到还需要 C...
→ 一辆接一辆，慢死了（串行加载，阻塞渲染）
```

## 💻 代码对比

HTML



```
<!-- ✅ 推荐：link 标签，并行加载 -->
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="layout.css">
<link rel="stylesheet" href="theme.css">
```

CSS



```
/* ❌ 不推荐：@import 串行加载，性能差 */
@import url('reset.css');
@import url('layout.css');
@import url('theme.css');
```

## 📊 完整对比表

| 对比项   | `<link>`                                 | `@import`                |
| -------- | ---------------------------------------- | ------------------------ |
| 写在哪里 | HTML 的 `<head>` 里                      | CSS 文件内，必须在最顶部 |
| 加载方式 | **并行**加载（快）                       | **串行**加载（慢）       |
| 加载时机 | 页面一开始就加载                         | 等主 CSS 下载后才开始    |
| JS 控制  | 可以（`document.createElement('link')`） | 不可以                   |
| 兼容性   | 所有浏览器                               | IE5+                     |

## 💡 结论

> 开发中 **永远用 `<link>`**，`@import` 基本已经淘汰。

------

# 第8题：`<a>` 标签的 `target` 属性有哪些取值？

## 🚪 生活类比：超链接是一扇门

`target` 属性决定了：**点击链接后，在哪里打开这扇门？**

HTML



```
<a href="https://example.com" target="???">点我</a>
```

| 取值            | 效果           | 类比                         |
| --------------- | -------------- | ---------------------------- |
| `_self`（默认） | 当前标签页打开 | 在原来的房间里换了个背景     |
| `_blank`        | 新标签页打开   | 开了另一个新房间，原来的还在 |
| `_parent`       | 在父框架中打开 | 嵌套页面中返回上一层         |
| `_top`          | 在顶层窗口打开 | 直接回到最外面的窗口         |

## 🔒 `_blank` 安全问题！

HTML



```
<!-- ❌ 有安全漏洞：新开的页面可以通过 window.opener 访问原页面 -->
<a href="https://恶意网站.com" target="_blank">点我</a>

<!-- ✅ 安全写法：加上 rel="noopener noreferrer" -->
<a href="https://example.com" target="_blank" rel="noopener noreferrer">点我</a>
```

**安全漏洞解释**：

text



```
如果你点击一个恶意网站的链接（_blank 打开）
恶意网站可以通过 window.opener 控制你原来的页面
把原来的页面替换成钓鱼页面！

rel="noopener" 就是告诉浏览器：
"新开的页面和我没有任何关系，不能访问我"
```

## 💡 实际开发建议

HTML



```
<!-- 站内链接：用默认的 _self，不用写 target -->
<a href="/about">关于我们</a>

<!-- 站外链接（跳出你的网站）：用 _blank，加安全属性 -->
<a href="https://github.com" target="_blank" rel="noopener noreferrer">
  我的 GitHub
</a>
```

------

# 第9题：行内元素和块级元素有什么区别？

## 📦 生活类比：盒子和标签贴

**块级元素 = 大纸箱**：

- 独占一整排货架（独占一行）
- 可以调整大小（可设置宽高）
- 例子：`<div>`、`<p>`、`<h1>`

**行内元素 = 标签贴纸**：

- 多张贴纸可以并排贴在一起（不独占一行）
- 大小由内容决定（不能随意设置宽高）
- 例子：`<span>`、`<a>`、`<strong>`

## 🎯 视觉对比

HTML



```
<!-- 块级元素：每个自己占一行 -->
<div style="background:lightblue">我是div，独占一行</div>
<div style="background:lightgreen">我是第二个div，也独占一行</div>
<p style="background:lightyellow">我是段落，也独占一行</p>

<!-- 行内元素：多个排在一行 -->
<span style="background:pink">我是span，</span>
<span style="background:orange">我和上一个在同一行，</span>
<a href="#">我也在同一行</a>
```

效果：

text



```
┌──────────────────────────────────────┐
│ 我是div，独占一行                      │  ← 蓝色，占满整行
└──────────────────────────────────────┘
┌──────────────────────────────────────┐
│ 我是第二个div，也独占一行               │  ← 绿色，占满整行
└──────────────────────────────────────┘
┌───────────┐┌──────────────┐┌────────┐
│我是span   ││我和上一个同行  ││我也在  │  ← 三个在同一行
└───────────┘└──────────────┘└────────┘
```

## 📋 详细对比表

| 特性               | 块级元素   | 行内元素                  |
| ------------------ | ---------- | ------------------------- |
| 是否独占一行       | ✅ 独占一行 | ❌ 不独占，并排显示        |
| 可设置宽高         | ✅ 可以     | ❌ 不能（由内容决定）      |
| `margin` 四个方向  | ✅ 都有效   | ❌ 上下 margin 无效        |
| `padding` 四个方向 | ✅ 都有效   | ⚠️ 上下 padding 不影响布局 |
| 默认宽度           | 撑满父容器 | 由内容宽度决定            |

## 📝 记住这些常见例子

text



```
块级元素（记住6个）：div、p、h1~h6、ul、li、section

行内元素（记住6个）：span、a、img、input、strong、em

特殊——行内块（inline-block）：
  像行内元素一样不独占行，
  但像块级元素一样可以设置宽高
  例：<img>、<input>、设了 display:inline-block 的元素
```

## 🔄 互相转换

CSS



```
/* 把行内元素变成块级 */
span { display: block; }

/* 把块级元素变成行内 */
div { display: inline; }

/* 变成行内块（既能并排，又能设宽高）*/
span { display: inline-block; width: 100px; height: 50px; }
```

------

# 第10题：`<iframe>` 有哪些优缺点？

## 🖼️ 生活类比：墙上挂的电视

你的客厅（主页面）里挂了一台电视（`<iframe>`）：

- 电视里播放的是另一个频道的内容（另一个网页）
- 电视里发生的事情不影响你家客厅（样式隔离）
- 但这台电视很耗电（性能开销），信号不好还会卡顿

## 💻 基本用法

HTML



```
<!-- 在页面中嵌入另一个网页 -->
<iframe 
  src="https://www.example.com" 
  width="600" 
  height="400"
  title="嵌入的页面"
></iframe>
```

## ✅ 优点

text



```
1. 嵌入第三方内容
   → 地图（高德地图嵌入、百度地图嵌入）
   → 视频（B站视频嵌入到博客）
   → 第三方支付页面

2. 样式/脚本完全隔离
   → iframe 内的 CSS 不会影响外面
   → 外面的 JS 也不能随意访问里面（跨域保护）

3. 沙箱安全
   → 设置 sandbox 属性可以限制 iframe 内的权限
```

## ❌ 缺点

text



```
1. 性能开销大
   → 每个 iframe 都是独立的浏览上下文
   → 相当于在页面里再开一个小浏览器，很耗资源

2. SEO 不友好
   → 搜索引擎爬虫通常不抓取 iframe 内的内容

3. 安全风险：点击劫持（Clickjacking）
   → 恶意网站可以把你的网站放进 iframe，
     让用户以为在点自己的东西，实际操作的是恶意按钮

4. 跨域通信麻烦
   → 主页面和 iframe 不同源时，只能用 postMessage 通信

5. 移动端适配困难
   → iframe 的固定宽高在小屏幕上很难适配
```

## 🔒 安全设置：防止别人把你的页面放进 iframe

HTML



```
<!-- 服务器响应头设置（开发时让后端配合）-->
X-Frame-Options: DENY              ← 禁止任何 iframe 嵌入
X-Frame-Options: SAMEORIGIN        ← 只允许同源嵌入
```

HTML



```
<!-- 安全沙箱（限制 iframe 的权限）-->
<iframe 
  src="https://example.com"
  sandbox="allow-scripts allow-same-origin"
  <!--  sandbox 属性让 iframe 在沙箱里运行，限制了各种权限 -->
></iframe>
```

------

# 第11题：`data-*` 自定义属性的作用是什么？如何获取？

## 🏷️ 生活类比：超市商品的价格标签

超市里每件商品都有标签，标签上写了：

- 商品名（已有的 HTML 属性）
- 但有时候我们还想额外记录：活动编号、库存数量、供应商代码……

这些"额外信息"不影响商品展示，但需要存在某个地方。

`data-*` 就是你可以自定义的"附加标签"！

## 💻 使用示例

HTML



```
<!-- 商品列表 -->
<div class="product"
  data-product-id="SKU-001"       ← 自定义：商品ID
  data-price="299"                ← 自定义：价格
  data-stock="15"                 ← 自定义：库存
  data-category="electronics"    ← 自定义：分类
>
  iPhone 手机壳
</div>
```

JavaScript



```
const product = document.querySelector('.product');

// 方式一：getAttribute（通用方法）
product.getAttribute('data-product-id');  // "SKU-001"
product.getAttribute('data-price');       // "299"

// 方式二：dataset（推荐！自动转换命名格式）
product.dataset.productId;   // "SKU-001"（连字符变驼峰）
product.dataset.price;        // "299"
product.dataset.stock;        // "15"
product.dataset.category;     // "electronics"
```

## 🔄 命名规则：连字符 ↔ 驼峰自动转换

JavaScript



```
// HTML 里写连字符格式
data-user-name  → JS里用  dataset.userName   （小驼峰）
data-order-id   → JS里用  dataset.orderId
data-max-count  → JS里用  dataset.maxCount
```

## 🎯 实际用途举例

HTML



```
<!-- 用于 CSS 选择 -->
<button data-type="primary">主要按钮</button>
<button data-type="danger">危险按钮</button>
```

CSS



```
button[data-type="primary"] { background: blue; }
button[data-type="danger"]  { background: red; }
```

HTML



```
<!-- 存储额外信息供 JS 使用 -->
<li class="contact-item" data-user-id="123" data-phone="13800138000">
  张三
</li>
```

JavaScript



```
document.querySelector('.contact-item').addEventListener('click', function() {
  const userId = this.dataset.userId;    // "123"
  const phone = this.dataset.phone;      // "13800138000"
  // 根据这些数据发起请求或执行操作
});
```

------

# 第12题：`<form>` 的 `enctype` 属性有哪几种值？

## 📬 生活类比：快递包裹的打包方式

发快递（提交表单数据）时，有不同的打包方式：

| `enctype` 值                                | 打包方式类比         | 适用场景         |
| ------------------------------------------- | -------------------- | ---------------- |
| `application/x-www-form-urlencoded`（默认） | 把东西压扁装信封     | 普通文字表单     |
| `multipart/form-data`                       | 分多个包裹分别打包   | 含文件上传的表单 |
| `text/plain`                                | 直接扔进袋子，不封口 | 调试用，基本不用 |

## 💻 代码示例

### 默认情况（文字表单）

HTML



```
<form action="/login" method="POST">
  <!-- 默认 enctype="application/x-www-form-urlencoded" -->
  <input type="text" name="username" value="张三">
  <input type="password" name="password" value="123456">
  <button type="submit">登录</button>
</form>

<!-- 发送的数据格式：username=%E5%BC%A0%E4%B8%89&password=123456 -->
<!-- 类比：把姓名和密码用 & 连接，压缩成一行发送 -->
```

### 文件上传（必须用 multipart/form-data）

HTML



```
<form action="/upload" method="POST" enctype="multipart/form-data">
  <input type="text" name="description" value="我的头像">
  <input type="file" name="avatar">   ← 上传文件
  <button type="submit">上传</button>
</form>

<!-- 
  为什么文件上传必须用 multipart/form-data？
  因为文件是二进制数据，不能像文字一样"压扁"发送
  multipart 会把表单分成多个部分，每部分单独打包：
    - Part 1：description = "我的头像"
    - Part 2：avatar = [二进制文件数据]
-->
```

## ⚠️ 面试必考点

text



```
记住这句话：
"做文件上传，form 必须设置 enctype='multipart/form-data'，
 否则服务器只会收到文件名，收不到文件内容！"
```

------

# 第13题：`<input>` 在 HTML5 中新增了哪些 `type` 类型？

## 📱 生活类比：不同的表单控件 = 不同的专业工具

以前（HTML4）只有几种：文本框、密码框、单选、多选、按钮。

HTML5 大幅扩充，就像原来只有锤子、螺丝刀，现在多了电钻、扳手、锯子……

## 🆕 新增 type 类型速览

HTML



```
<!-- 1. email：自动校验邮箱格式，手机会弹出带@的键盘 -->
<input type="email" placeholder="请输入邮箱">
<!-- 提交时浏览器自动检测格式，无需 JS -->

<!-- 2. tel：手机端弹出数字键盘 -->
<input type="tel" placeholder="请输入手机号">

<!-- 3. number：只能输数字，可以设范围 -->
<input type="number" min="0" max="100" step="5">
<!-- min=最小值，max=最大值，step=每次增减的幅度 -->

<!-- 4. range：滑动条 -->
<input type="range" min="0" max="100" value="50">
<!-- 常见于音量调节、价格区间筛选 -->

<!-- 5. date：日期选择器 -->
<input type="date">
<!-- 浏览器弹出日历，用户点击选择，不用自己写日历组件！ -->

<!-- 6. time：时间选择器 -->
<input type="time">

<!-- 7. datetime-local：日期+时间 -->
<input type="datetime-local">

<!-- 8. month：年月选择 -->
<input type="month">

<!-- 9. week：年周选择 -->
<input type="week">

<!-- 10. color：颜色选择器 -->
<input type="color" value="#1677ff">
<!-- 浏览器弹出取色盘 -->

<!-- 11. search：搜索框（有清除按钮×）-->
<input type="search" placeholder="搜索...">

<!-- 12. url：校验 URL 格式 -->
<input type="url" placeholder="https://...">
```

## 🎯 为什么要用正确的 type？

text



```
好处1：浏览器自动校验，减少 JS 代码量
  type="email" → 不是邮箱格式，表单无法提交，自动提示

好处2：手机键盘优化
  type="tel"    → 弹出数字+电话符号键盘
  type="email"  → 弹出含 @ 和 . 的键盘
  type="number" → 弹出纯数字键盘

好处3：原生 UI 控件
  type="date"  → 不用引入第三方日历库
  type="color" → 不用引入第三方取色器
```

------

# 第14题：`<canvas>` 和 `<svg>` 有什么区别？

## 🎨 生活类比：两种绘画方式

**Canvas = 水彩画**：

- 用画笔在纸上涂色（用 JS 绘制像素）
- 画完之后，纸上就是颜色，没有"每朵花"的概念了
- 放大会模糊（位图）

**SVG = 矢量图（AI/Illustrator 格式）**：

- 图形由数学公式描述（"在坐标(10,20)画一个半径50的圆"）
- 每个形状都是独立的对象，可以单独操作
- 无限放大不失真（矢量）

## 💻 代码对比

HTML



```
<!-- Canvas：用 JS 命令式绘制 -->
<canvas id="myCanvas" width="200" height="200"></canvas>
<script>
  const ctx = document.getElementById('myCanvas').getContext('2d');
  
  // 画一个红色圆圈
  ctx.beginPath();
  ctx.arc(100, 100, 50, 0, Math.PI * 2);
  ctx.fillStyle = 'red';
  ctx.fill();
  
  // 注意：画完后，这个圆圈就是一堆像素点了
  // 没有"圆圈对象"，不能单独给它绑事件
</script>
```

HTML



```
<!-- SVG：声明式，每个形状是独立元素 -->
<svg width="200" height="200">
  <!-- 一个红色圆圈，它是一个独立的 DOM 元素！ -->
  <circle 
    cx="100" cy="100" r="50" 
    fill="red"
    onclick="alert('点击了圆圈！')"  ← 可以直接绑事件
  />
</svg>
```

## 📊 对比表

| 对比项       | Canvas                          | SVG                        |
| ------------ | ------------------------------- | -------------------------- |
| 渲染类型     | **位图**（像素点）              | **矢量**（数学公式）       |
| 放大效果     | 会模糊失真                      | 永远清晰                   |
| 操作方式     | JS 命令式绘制                   | DOM 操作，CSS 样式         |
| 事件绑定     | ❌ 不能直接绑定形状              | ✅ 每个形状都是元素         |
| 元素数量多时 | ✅ 性能好（就是画面）            | ❌ DOM 节点多，渲染慢       |
| 适合场景     | 游戏、视频处理、图表（ECharts） | 图标、Logo、地图、少量图形 |
| SEO          | ❌ 搜索引擎看不懂                | ✅ 内容可被检索             |

## 🎯 一句话选择建议

text



```
图标/Logo/地图/小量可交互图形 → 用 SVG
游戏/大量动态图形/图像处理    → 用 Canvas
数据可视化图表（ECharts 等）  → 底层用 Canvas，但库已封装好
```

------

# 第15题：DOM 和 BOM 有什么区别？

## 🏠 生活类比：房子和小区

**DOM（Document Object Model）= 房子内部**：

- 你家客厅的沙发、电视、茶几——这些是**页面里的元素**
- 你可以重新摆放（修改 DOM），换个壁纸（改样式）
- `document` 对象就是你家的总户型图

**BOM（Browser Object Model）= 小区环境**：

- 小区大门（浏览器地址栏）、小区公告板（历史记录）、小区周边地图（navigator）
- 这些是**浏览器本身**提供的功能
- `window` 对象就是整个小区的管理中心

## 💻 代码类比

JavaScript



```
// ===== DOM：操作页面内的元素 =====
document.getElementById('title');        // 找到页面里的某个元素
document.createElement('div');           // 创建新元素
document.body.innerHTML = '<p>你好</p>'; // 修改页面内容

// DOM 的核心就是 document 对象
// document 代表整个 HTML 文档（你家户型图）


// ===== BOM：操作浏览器本身 =====
window.location.href = 'https://baidu.com';  // 跳转网址
window.location.reload();                     // 刷新页面
window.history.back();                        // 后退
window.history.forward();                     // 前进
window.navigator.userAgent;                   // 获取浏览器信息
window.screen.width;                          // 获取屏幕宽度

setTimeout(() => {}, 1000);   // 这其实是 window.setTimeout
alert('你好');                 // 这其实是 window.alert

// BOM 的核心是 window 对象（整个浏览器环境）
// window 是全局对象，所以写 alert() 就等于 window.alert()
```

## 🗂️ DOM 的树状结构

text



```
document（整棵树的根）
├── html
│   ├── head
│   │   ├── meta
│   │   ├── title
│   │   └── link
│   └── body
│       ├── header
│       │   └── h1（"网站标题"）
│       ├── main
│       │   ├── article
│       │   │   ├── h2（"文章标题"）
│       │   │   └── p（"正文"）
│       └── footer
```

每个节点都是一个 DOM 对象，可以用 JS 操作。

## 📝 一句话区别

> **DOM** 管的是页面里的"家具"（HTML 元素） **BOM** 管的是浏览器这个"房子"本身（地址栏、历史、窗口大小）

------

# 第16题：`<script>` 为什么建议放在 `<body>` 底部？

## ⏳ 生活类比：看书时被打断

你正在看一本书（浏览器解析 HTML），读到第 3 页时：

**情况1（script 在 head 里）**：

text



```
你读到第3页，突然有人叫你去搬一个大柜子（下载执行JS）
→ 你必须停下来，跑去搬柜子（阻塞 HTML 解析）
→ 搬完柜子才能继续看书
→ 读者（用户）一直等，什么都看不到（白屏！）
```

**情况2（script 在 body 底部）**：

text



```
你先把书读完（HTML 解析完，页面展示出来）
用户已经能看到内容了 ✅
→ 读完书再去搬柜子（执行 JS）
→ 用户体验好很多
```

## 💻 实际代码示例

HTML



```
<!-- ❌ 不好的做法：script 在 head 里 -->
<html>
  <head>
    <script src="jquery.js"></script>   <!-- 下载这个文件可能要500ms -->
    <script src="main.js"></script>     <!-- 再等200ms -->
  </head>
  <body>
    <!-- 在 JS 加载完之前，用户看到空白页！-->
    <h1>欢迎光临</h1>
  </body>
</html>


<!-- ✅ 好的做法：script 放在 body 结束标签之前 -->
<html>
  <head>
    <!-- 这里只放 CSS 和 meta，不放 script -->
  </head>
  <body>
    <h1>欢迎光临</h1>      <!-- 用户立刻能看到内容 -->
    <p>网站内容...</p>
    
    <!-- JS 放最后，等 DOM 都渲染完了再加载 -->
    <script src="jquery.js"></script>
    <script src="main.js"></script>
  </body>
</html>
```

## 🔑 现代替代方案：`defer` 属性

HTML



```
<!-- 现代更好的做法：用 defer，可以放在 head 里 -->
<head>
  <script src="main.js" defer></script>  <!-- 不阻塞解析，解析完再执行 -->
</head>
<body>
  <!-- 页面正常加载，不白屏 -->
</body>
```

## 💡 另一个重要原因：确保 DOM 已存在

HTML



```
<!-- ❌ 在 head 里执行，此时 #btn 还不存在！-->
<head>
  <script>
    document.getElementById('btn').onclick = function() {}; 
    // 报错！找不到 #btn，因为 body 还没解析呢
  </script>
</head>
<body>
  <button id="btn">点我</button>  <!-- 这时才存在 -->
</body>


<!-- ✅ 放 body 底部，#btn 已经在 DOM 里了 -->
<body>
  <button id="btn">点我</button>
  <script>
    document.getElementById('btn').onclick = function() {
      alert('找到了！'); // 正常执行
    };
  </script>
</body>
```

------

# 第17题：`src` 和 `href` 有什么区别？

## 🔗 生活类比：两种"引用"方式

**`src`（source）= 快递到付**：

text



```
你在网上买了一台电视（资源）
快递来了，你必须停下手头的事，先签收并安装好电视
才能继续干其他事

→ 浏览器遇到 src，必须下载并嵌入资源后，才继续解析后面的 HTML
```

**`href`（hypertext reference）= 给你一张地图**：

text



```
地图上标了"5公里外有个超市"（关联了一个外部资源）
你不需要停下来，只是知道了那里有个超市
可以继续干自己的事，有需要了再去

→ 浏览器遇到 href，建立关联，但不阻塞解析
```

## 💻 代码举例

HTML



```
<!-- src：嵌入资源，会阻塞（等下载完才继续）-->
<img src="photo.jpg">          ← 图片：下载图片并嵌入到这里
<script src="main.js"></script> ← 脚本：下载并执行（会暂停HTML解析！）
<iframe src="page.html"></iframe> ← 嵌入另一个页面

<!-- href：建立关联，不阻塞 -->
<link rel="stylesheet" href="style.css">  ← 关联CSS（并行加载，不阻塞）
<a href="https://baidu.com">百度</a>       ← 超链接（只是关联，点了才跳转）
```

## 🎯 核心区别一句话

text



```
src  → "把这个东西下载进来，替换我这个位置"（嵌入，阻塞）
href → "这里有个相关的东西，需要时去那里找"（关联，不阻塞）
```

## ⚠️ 常见面试陷阱

HTML



```
<!-- 问：为什么 link 引入 CSS 不阻塞，script 引入 JS 会阻塞？ -->

<link rel="stylesheet" href="style.css">  ← 不阻塞（href，并行下载）
<script src="main.js"></script>           ← 阻塞（src，必须等待）

<!-- 
答：因为 link 用 href（关联），不影响 HTML 解析；
    script 用 src（嵌入），必须等 JS 下载执行完才能继续
    
解决：给 script 加 defer 或 async
-->
```

------

# 第18题：HTML 中如何实现图片懒加载？

## 🦥 生活类比：按需取货的仓库

想象一个超大仓库（网页），里面有 100 件商品（图片）：

**不懒加载（全部提前搬出来）**：

text



```
仓库里所有商品一次性搬到展示区
→ 用户进门就能看到所有东西
→ 但搬货要花很长时间（100张图全部下载）
→ 用户等很久才能看到第一件商品
```

**懒加载（按需取货）**：

text



```
先只展示用户能看到的商品（首屏图片）
用户往里走（往下滚动）时，才去仓库搬新商品
→ 用户进门立刻能看到东西
→ 节省了大量流量（没滚动到的图片根本不下载）
```

## 💻 三种实现方式

### 方式一：原生 `loading="lazy"`（推荐，最简单）

HTML



```
<!-- 只需要加一个属性！浏览器自动处理 -->
<img 
  src="real-image.jpg" 
  loading="lazy"         ← 就这一个属性
  alt="图片描述"
  width="400"            ← 建议写宽高，防止布局抖动
  height="300"
>
```

**效果**：图片离视口还有一段距离时，浏览器自动开始加载；在视口很远外的图片不加载。

**兼容性**：Chrome 77+、Firefox 75+、Edge 79+ 支持，Safari 15.4+ 支持。

### 方式二：IntersectionObserver API（兼容性好，推荐）

HTML



```
<!-- 先用 data-src 存真实地址，src 用占位图 -->
<img 
  src="placeholder.jpg"        ← 先显示小占位图（很小，加载快）
  data-src="real-image.jpg"    ← 真实图片地址存在 data-src
  class="lazy-img"
  alt="图片描述"
>
```

JavaScript



```
// 创建"观察器"：监视图片是否进入视口
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {          // 图片进入视口了！
      const img = entry.target;
      img.src = img.dataset.src;         // 把真实地址赋给 src，开始加载
      img.classList.remove('lazy-img');  // 移除懒加载标记
      observer.unobserve(img);           // 停止观察（已经加载了，不用再盯着）
    }
  });
});

// 观察所有懒加载图片
document.querySelectorAll('img.lazy-img').forEach(img => {
  observer.observe(img);
});
```

### 方式三：监听 scroll 事件（旧方案，了解即可）

JavaScript



```
// ❌ 不推荐（性能差，每次滚动都触发计算）
window.addEventListener('scroll', () => {
  document.querySelectorAll('img[data-src]').forEach(img => {
    const rect = img.getBoundingClientRect();
    if (rect.top < window.innerHeight) {  // 进入视口了
      img.src = img.dataset.src;
    }
  });
});
```

## 📌 为什么图片要设置宽高？

HTML



```
<!-- ❌ 没有宽高：图片加载前高度为0，加载后高度突变，页面抖动（CLS问题）-->
<img src="image.jpg" loading="lazy" alt="...">

<!-- ✅ 有宽高：浏览器提前预留空间，图片加载不影响布局 -->
<img src="image.jpg" loading="lazy" width="400" height="300" alt="...">

<!-- 或用 CSS aspect-ratio -->
<style>
.img-container { aspect-ratio: 4 / 3; }  /* 预留4:3比例空间 */
</style>
```

------

# 第19题：`<table>` 布局有哪些弊端？

## 🏗️ 生活类比：用搭积木方式建摩天大楼

<table> 是一种表格结构，用来展示行列数据（比如成绩表、账单）。

但有些早期开发者用它来做整个网页的布局，就像"用搭积木的方式建摩天大楼"——

能建起来，但：

- 不该用这种工具
- 很麻烦、不灵活
- 地震（屏幕大小变化）来了就塌了

## ❌ 不该这样做

HTML



```
<!-- ❌ 用 table 做布局（20年前常见的写法）-->
<table width="100%" cellpadding="0" cellspacing="0">
  <tr>
    <td colspan="3"><header>导航栏</header></td>
  </tr>
  <tr>
    <td width="200">左侧菜单</td>
    <td>主内容区</td>
    <td width="150">右侧栏</td>
  </tr>
  <tr>
    <td colspan="3"><footer>页脚</footer></td>
  </tr>
</table>

<!-- ✅ 现代写法：用 CSS Flexbox 或 Grid 做布局 -->
<div class="layout">
  <header>导航栏</header>
  <div class="body">
    <nav>左侧菜单</nav>
    <main>主内容区</main>
    <aside>右侧栏</aside>
  </div>
  <footer>页脚</footer>
</div>
```

## 📋 Table 布局的 5 大弊端

### 1. 语义错误（最重要）

HTML



```
<!-- table 的语义是"数据表格"，不是"布局容器" -->
<!-- 用 table 做布局，就像用"档案柜"当"餐桌"——功能用错了 -->
```

### 2. 渲染性能差

text



```
普通布局：浏览器可以边下载边渲染（流式渲染）
Table 布局：浏览器必须把整个表格下载完，
           计算好所有单元格的宽高，才开始渲染
           → 页面白屏更久
```

### 3. 响应式适配困难

CSS



```
/* Flex/Grid 布局，移动端适配一句话 */
@media (max-width: 768px) {
  .body { flex-direction: column; }  /* 改为竖向排列，完成！*/
}

/* Table 布局，移动端适配？噩梦！
   表格的行列结构完全不适合窄屏幕 */
```

### 4. 代码冗余、难维护

HTML



```
<!-- table 布局需要大量嵌套标签 -->
<table><tbody><tr><td><table><tbody><tr><td>
  实际内容就这一点点
</td></tr></tbody></table></td></tr></tbody></table>

<!-- div + CSS，清爽多了 -->
<div class="container">实际内容</div>
```

### 5. SEO 不友好

text



```
搜索引擎看到 table，会认为这是数据表格
如果整个页面都是 table，爬虫很难理解页面的内容层级
导致搜索排名下降
```

## ✅ Table 应该用在哪里？

HTML



```
<!-- ✅ 正确：用 table 展示真正的表格数据 -->
<table>
  <caption>2025年销售数据</caption>
  <thead>
    <tr>
      <th>月份</th>
      <th>销售额</th>
      <th>增长率</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1月</td>
      <td>¥100万</td>
      <td>+15%</td>
    </tr>
  </tbody>
</table>
```

------

# 第20题：HTML 全局属性有哪些？

## 🌍 什么是"全局属性"？

全局属性 = **每一个 HTML 标签都能用的属性**，不管是 `<div>` 还是 `<p>` 还是 `<button>`，都能加。

**类比**：就像每个员工无论什么职位，都能有的通用属性：姓名、工号、部门、联系方式……

## 📋 常见全局属性详解

### 1. `id` - 唯一身份证号

HTML



```
<!-- 全页面唯一，像身份证号，不能重复 -->
<div id="main-header">主标题</div>
<p id="intro-text">介绍文字</p>

<!-- 用途：CSS 选择、JS 获取、页面内跳转 -->
<a href="#main-header">跳到标题位置</a>    ← 页面内锚点
document.getElementById('main-header')   ← JS 获取
#main-header { color: red; }              ← CSS 选择
```

### 2. `class` - 分组标签

HTML



```
<!-- 可以有多个值，用空格分隔 -->
<button class="btn btn-primary large">大号主要按钮</button>
<button class="btn btn-danger">危险按钮</button>
<p class="text highlight important">这段文字同时有3个类</p>

<!-- 类比：给物品贴标签，一件物品可以贴多个标签 -->
```

### 3. `style` - 行内样式

HTML



```
<!-- 直接在元素上写 CSS -->
<p style="color: red; font-size: 18px;">这段文字是红色18号字</p>

<!-- ⚠️ 不推荐大量使用，难维护，优先级最高容易出问题 -->
```

### 4. `title` - 悬停提示

HTML



```
<!-- 鼠标悬停时显示提示 -->
<abbr title="Cascading Style Sheets">CSS</abbr>
<button title="点击保存当前进度">💾 保存</button>
<img src="chart.png" title="2025年第一季度销售数据折线图" alt="...">
```

### 5. `hidden` - 隐藏元素

HTML



```
<!-- 隐藏元素（和 display:none 效果相同）-->
<div hidden>这段内容被隐藏，用户看不到</div>

<!-- JS 控制显示/隐藏 -->
<script>
  document.querySelector('#tip').hidden = false;  // 显示
  document.querySelector('#tip').hidden = true;   // 隐藏
</script>
```

### 6. `data-*` - 自定义数据（第11题详细讲过）

HTML



```
<button data-action="delete" data-item-id="42">删除</button>
```

### 7. `contenteditable` - 让元素可编辑

HTML



```
<!-- 让用户直接在网页上编辑文字 -->
<p contenteditable="true">点我可以编辑这段文字</p>
<div contenteditable="true">这个区域也可以编辑</div>

<!-- 应用场景：在线编辑器、富文本输入框 -->
```

### 8. `tabindex` - 键盘 Tab 顺序

HTML



```
<!-- 控制 Tab 键的跳转顺序 -->
<input tabindex="1">   ← 第一个被 Tab 选中
<input tabindex="3">   ← 第三个
<input tabindex="2">   ← 第二个

<div tabindex="0">     ← 加入 Tab 顺序（div 默认不能被 Tab 选中）
<div tabindex="-1">    ← 可以被 JS focus()，但不在 Tab 顺序中
```

### 9. `draggable` - 是否可拖动

HTML



```
<img src="photo.jpg" draggable="true">   ← 可以被拖动
<p draggable="false">这段文字不能拖动</p>
```

### 10. `lang` - 语言声明

HTML



```
<!-- 通常设置在 html 根元素上 -->
<html lang="zh-CN">    ← 简体中文页面
<html lang="en">       ← 英文页面

<!-- 也可以局部设置 -->
<p>这是中文段落</p>
<p lang="en">This is English paragraph</p>

<!-- 作用：屏幕阅读器用正确发音，搜索引擎了解语言 -->
```

## 📌 全局属性速记表

| 属性              | 作用        | 常用程度 |
| ----------------- | ----------- | -------- |
| `id`              | 唯一标识符  | ⭐⭐⭐⭐⭐    |
| `class`           | 分组/打标签 | ⭐⭐⭐⭐⭐    |
| `style`           | 行内样式    | ⭐⭐⭐      |
| `title`           | 悬停提示    | ⭐⭐⭐      |
| `hidden`          | 隐藏元素    | ⭐⭐⭐      |
| `data-*`          | 自定义数据  | ⭐⭐⭐⭐     |
| `contenteditable` | 可编辑      | ⭐⭐       |
| `tabindex`        | Tab 顺序    | ⭐⭐       |
| `draggable`       | 可拖动      | ⭐⭐       |
| `lang`            | 语言声明    | ⭐⭐⭐⭐     |

------

## 📚 第1-20题学习总结

| 题号 | 考点            | 核心关键词                            |
| ---- | --------------- | ------------------------------------- |
| 1    | DOCTYPE         | 标准模式 vs 怪异模式                  |
| 2    | 语义化          | header/nav/main/article/footer        |
| 3    | HTML5新特性     | 语义标签+多媒体+表单+存储+API         |
| 4    | meta 标签       | charset / viewport / description      |
| 5    | script 加载     | defer=有序延迟 / async=无序立即       |
| 6    | alt vs title    | alt=失败替代 / title=悬停提示         |
| 7    | link vs @import | link并行快 / @import串行慢            |
| 8    | a target        | _self/_blank + noopener安全           |
| 9    | 行内 vs 块级    | 块级独占行可设宽高 / 行内不独占       |
| 10   | iframe          | 嵌入隔离但性能差SEO差                 |
| 11   | data-*          | 自定义数据 / dataset.驼峰读取         |
| 12   | enctype         | 文件上传必须 multipart/form-data      |
| 13   | input type      | email/tel/number/date/range/color     |
| 14   | canvas vs svg   | 位图像素 vs 矢量DOM                   |
| 15   | DOM vs BOM      | document操作页面 / window操作浏览器   |
| 16   | script位置      | 放底部防白屏 / 或用defer              |
| 17   | src vs href     | src嵌入阻塞 / href关联不阻塞          |
| 18   | 图片懒加载      | loading="lazy" / IntersectionObserver |
| 19   | table弊端       | 语义错/渲染慢/响应式难                |
| 20   | 全局属性        | id/class/style/title/data-*           |

> 💡 **最佳学习方式**：
>
> 1. 看完每道题后，**合上笔记**，用自己的话解释一遍
> 2. 打开浏览器，**亲手敲代码**验证你的理解
> 3. 把你不确定的题，**搜索更多例子**加深印象
> 4. 定期**回顾复习**，间隔重复是记忆的关键



# 🧠 HTML & CSS 面试题通俗学习卷（第21-40题）

> 用大白话 + 生活比喻，彻底搞懂每一个知识点

------

## 📌 第21题：什么是 Web Worker？它解决了什么问题？

### 🤔 先理解问题背景

JavaScript 是**单线程**的，意思是它同一时间只能做一件事。

> 🏪 **生活比喻**：你开了一家奶茶店，只有你一个员工（主线程）。 你既要接单、又要打奶茶、又要收钱。 如果某个客人点了一杯要搅拌10分钟的饮料，**整个店就卡住了**，后面的客人没人接待。

这就是 JS 单线程的问题：**一旦执行耗时任务（如大量数据计算），页面就会卡死，用户无法操作。**

### ✅ Web Worker 的解决方案

Web Worker 相当于**雇了一个后台员工**，专门处理耗时任务，不影响主线程（前台接待）。

text



```
主线程（前台）：负责 UI 渲染、用户交互
Worker线程（后台）：负责大量计算、数据处理
两者通过 postMessage 传递消息
```

### 💻 代码示例

JavaScript



```
// 主线程 main.js
const worker = new Worker('worker.js');

// 主线程发消息给 Worker
worker.postMessage({ data: [1, 2, 3, ...100000个数字] });

// 主线程接收 Worker 的结果
worker.onmessage = function(e) {
  console.log('计算结果：', e.data);  // 页面不会卡
};
```

JavaScript



```
// worker.js（后台线程，独立文件）
onmessage = function(e) {
  const result = e.data.reduce((a, b) => a + b, 0); // 耗时计算
  postMessage(result); // 把结果发回主线程
};
```

### ⚠️ 注意事项

| 限制         | 说明                                     |
| ------------ | ---------------------------------------- |
| 不能访问 DOM | Worker 是后台线程，不能直接操作页面元素  |
| 通过消息通信 | 只能用 `postMessage` 和 `onmessage` 通信 |
| 适合场景     | 大文件处理、图像计算、数据加密、复杂排序 |

> 📝 **一句话记忆**：Web Worker = 给 JS 雇了个"后台助理"，耗时工作交给它，主线程继续流畅响应用户。

------

## 📌 第22题：localStorage、sessionStorage 和 Cookie 三者有什么区别？

### 🤔 先理解为什么需要它们

HTTP 是**无状态协议**，每次请求服务器都不记得你是谁。所以需要在**浏览器端存储数据**，记住用户信息。

> 🏨 **生活比喻**：
>
> - **Cookie** = 酒店给你的**房卡**（可以带出去，服务器每次都能看到）
> - **localStorage** = 酒店房间里的**保险箱**（永久存储，除非你自己清空）
> - **sessionStorage** = 酒店大堂的**临时寄存柜**（你退房（关标签页）就自动清空）

### 📊 三者对比表

| 特性                     | Cookie 🍪                    | localStorage 📦           | sessionStorage 🗂️     |
| ------------------------ | --------------------------- | ------------------------ | -------------------- |
| **存储大小**             | ~4KB                        | ~5-10MB                  | ~5-10MB              |
| **过期时间**             | 可手动设置                  | **永久**（手动删才消失） | **关闭标签页就消失** |
| **是否随请求发给服务器** | ✅ 自动携带                  | ❌ 不会                   | ❌ 不会               |
| **作用域**               | 可跨域名设置                | 同源页面共享             | 仅当前标签页         |
| **安全性**               | 可设 HttpOnly（JS无法读取） | JS可读                   | JS可读               |

### 💻 代码示例

JavaScript



```
// ====== Cookie ======
document.cookie = "username=张三; expires=Fri, 31 Dec 2025 23:59:59 GMT; path=/";

// ====== localStorage ======
localStorage.setItem('token', 'abc123');        // 存储
localStorage.getItem('token');                  // 读取 → 'abc123'
localStorage.removeItem('token');               // 删除
localStorage.clear();                           // 清空全部

// ====== sessionStorage ======
sessionStorage.setItem('tempData', '临时数据');  // 关闭标签页自动消失
sessionStorage.getItem('tempData');
```

### 🎯 使用场景选择

text



```
用户登录 Token（长期）     → localStorage
购物车数据（长期）         → localStorage
当前页表单草稿（临时）     → sessionStorage
用户身份验证（需服务端读） → Cookie（设 HttpOnly 更安全）
```

> 📝 **一句话记忆**：Cookie是"带出门的饭盒（服务器能看到）"，localStorage是"家里冰箱（永久）"，sessionStorage是"上班带的保温杯（下班就空了）"。

------

## 📌 第23题：什么是 HTML 可访问性（Accessibility）？ARIA 属性的作用是什么？

### 🤔 什么是可访问性？

可访问性（a11y，Accessibility 的缩写）是指让**所有人**，包括视觉障碍、听觉障碍、运动障碍的用户，都能正常使用网页。

> 🦽 **生活比喻**： 一栋楼如果只有楼梯没有无障碍坡道，坐轮椅的人就进不去。 网站的可访问性就是"给网页装无障碍坡道"。

### 👁️ 谁需要可访问性？

- **视觉障碍者**：使用屏幕阅读器（如 VoiceOver、NVDA）朗读网页内容
- **运动障碍者**：只能用键盘操作，不能用鼠标
- **认知障碍者**：需要清晰、简单的内容结构

### 🏷️ ARIA 属性是什么？

ARIA（Accessible Rich Internet Applications）是一套**额外的语义属性**，为辅助技术提供更多信息。

> 🎙️ **比喻**：你做了一个漂亮的图标按钮，视觉上看起来像"关闭"按钮，但屏幕阅读器只会说"按钮"，不知道它是干什么的。ARIA 就是给屏幕阅读器的"备注说明"。

### 💻 代码示例

HTML



```
<!-- ❌ 没有可访问性的写法 -->
<div onclick="closeModal()">×</div>

<!-- ✅ 有可访问性的写法 -->
<button 
  aria-label="关闭弹窗"     <!-- 给屏幕阅读器一个描述 -->
  onclick="closeModal()"
>×</button>

<!-- aria-hidden：装饰性元素，让屏幕阅读器忽略它 -->
<span aria-hidden="true">🎉</span>

<!-- role：声明元素的角色 -->
<div role="button" tabindex="0">自定义按钮</div>

<!-- aria-expanded：告知用户下拉菜单是否展开 -->
<button aria-expanded="false" aria-controls="menu">菜单</button>
<ul id="menu" hidden>...</ul>

<!-- aria-live：动态内容更新时通知屏幕阅读器 -->
<div aria-live="polite">正在加载...</div>
```

### 🎯 常用 ARIA 属性速查

| ARIA 属性       | 作用               | 例子                   |
| --------------- | ------------------ | ---------------------- |
| `aria-label`    | 给元素一个文字标签 | `aria-label="搜索"`    |
| `aria-hidden`   | 对辅助技术隐藏元素 | `aria-hidden="true"`   |
| `role`          | 声明元素角色       | `role="button"`        |
| `aria-expanded` | 折叠/展开状态      | `aria-expanded="true"` |
| `aria-disabled` | 禁用状态           | `aria-disabled="true"` |
| `aria-live`     | 动态内容播报       | `aria-live="polite"`   |

> 📝 **一句话记忆**：ARIA 是给"看不见屏幕的用户"的说明书，告诉辅助技术每个元素是什么、状态如何。

------

## 📌 第24题：`<picture>` 标签和 `<img>` 的 `srcset` 有什么区别？

### 🤔 为什么需要响应式图片？

不同设备有不同屏幕：手机小屏幕、电脑大屏幕、Retina 高清屏...
给所有设备都加载大图 = 浪费流量；都用小图 = 大屏上模糊。

> 📺 **比喻**：点外卖，手机屏幕小，给你看缩略图就够了；电脑上就要看高清大图。

### 🖼️ `<img srcset>` —— 同一张图的不同分辨率

`srcset` 用于提供**同一内容、不同尺寸**的图片，让浏览器自动选择最合适的。

HTML



```
<img
  src="photo-small.jpg"              <!-- 默认/降级图 -->
  srcset="
    photo-small.jpg  480w,           <!-- 图片实际宽480px -->
    photo-medium.jpg 768w,           <!-- 图片实际宽768px -->
    photo-large.jpg  1200w           <!-- 图片实际宽1200px -->
  "
  sizes="
    (max-width: 480px) 100vw,        <!-- 手机：图片占满整个视口宽 -->
    (max-width: 768px) 50vw,         <!-- 平板：图片占视口宽50% -->
    33vw                             <!-- 桌面：图片占视口宽33% -->
  "
  alt="响应式图片"
>
```

> 🤖 **浏览器的选择逻辑**：我的屏幕是 375px 宽，根据 sizes 知道图片显示 100vw（375px），然后去 srcset 里找最接近的，选 `photo-small.jpg`。

### 🎨 `<picture>` —— 完全不同的图片（格式/构图）

`<picture>` 更强大，可以根据条件提供**完全不同**的图片（不仅仅是大小，还可以是不同格式、不同裁切方式）。

HTML



```
<picture>
  <!-- 条件1：支持 WebP 格式 → 用 WebP（体积更小）-->
  <source type="image/webp" srcset="photo.webp">

  <!-- 条件2：屏幕宽 > 768px → 用横版大图 -->
  <source media="(min-width: 768px)" srcset="photo-landscape.jpg">

  <!-- 条件3：默认 / 降级 → 竖版小图 -->
  <img src="photo-portrait.jpg" alt="响应式图片">
</picture>
```

### 📊 两者对比

|              | `<img srcset>`       | `<picture>`                               |
| ------------ | -------------------- | ----------------------------------------- |
| **用途**     | 同一图片，不同分辨率 | 完全不同图片（格式、裁切）                |
| **控制权**   | 浏览器自主选择       | 开发者精确控制条件                        |
| **常见场景** | 普通响应式图片       | WebP降级、艺术指导（移动端竖图/PC端横图） |

> 📝 **一句话记忆**：`srcset` = "同一张照片的不同尺寸让浏览器挑"；`<picture>` = "我来指定什么情况下用哪张完全不同的图"。

------

## 📌 第25题：浏览器是如何渲染 HTML 页面的？（关键渲染路径）

### 🏗️ 用盖房子来理解

浏览器渲染页面就像盖房子，分 6 个步骤：

text



```
HTML原材料 → 设计图纸 → 合并方案 → 测量定位 → 粉刷外观 → 拍照展示
```

### 📋 6大步骤详解

**步骤①：解析 HTML → 构建 DOM 树**

text



```
HTML文本 ──解析──> DOM树（内存中的树形结构）

<html>
  <body>
    <h1>标题</h1>     →    html
    <p>段落</p>              └── body
  </body>                        ├── h1（"标题"）
</html>                          └── p（"段落"）
```

> 🧱 **比喻**：DOM 树就像房子的钢筋骨架，知道每个房间在哪儿，但还没装修。

**步骤②：解析 CSS → 构建 CSSOM 树**

text



```
CSS文本 ──解析──> CSSOM树（样式规则树）
```

> 🎨 **比喻**：CSSOM 就是装修设计图，规定每个房间用什么颜色、什么材料。

**步骤③：DOM + CSSOM → 渲染树（Render Tree）**

text



```
DOM树 + CSSOM树 = 渲染树（只包含可见元素）

注意：display:none 的元素不出现在渲染树中！
      visibility:hidden 的元素出现在渲染树中（占位置但不可见）
```

**步骤④：布局（Layout / Reflow）**

text



```
计算每个元素的位置和大小（x, y, width, height）
```

> 📐 **比喻**：工人拿着设计图，到现场量每块砖放哪里、占多大地方。

**步骤⑤：绘制（Paint）**

text



```
将渲染树的每个节点转换成屏幕上的像素点
```

> 🖌️ **比喻**：开始刷漆、贴瓷砖，把每个元素画出来。

**步骤⑥：合成（Composite）**

text



```
将各个图层合并，最终显示在屏幕上
```

> 📸 **比喻**：把各楼层照片叠在一起，拍一张完整的房子全景图。

### ⚡ 优化关键渲染路径

HTML



```
<!-- 1. CSS 放 <head>，避免阻塞渲染 -->
<head>
  <link rel="stylesheet" href="style.css">
</head>

<!-- 2. JS 用 defer，不阻塞 HTML 解析 -->
<script src="app.js" defer></script>

<!-- 3. 内联关键 CSS，首屏无需等待 CSS 文件 -->
<style>/* 首屏最少必要样式 */</style>
```

> 📝 **一句话记忆**：HTML→DOM→+CSS→渲染树→量位置→画出来→合并显示，CSS/JS会阻塞这个流程，所以要异步加载。

------

## 📌 第26题：CSS 盒模型？标准盒模型 vs IE 盒模型？

### 📦 什么是盒模型？

网页中**每一个元素都是一个盒子**，这个盒子由4层组成：

text



```
┌─────────────────────────────────┐
│            margin（外边距）      │  ← 盒子和外界的距离
│  ┌───────────────────────────┐  │
│  │        border（边框）      │  │  ← 盒子的边框/墙壁
│  │  ┌─────────────────────┐  │  │
│  │  │    padding（内边距）  │  │  │  ← 内容和边框的距离
│  │  │  ┌───────────────┐  │  │  │
│  │  │  │  content（内容）│  │  │  │  ← 实际内容区域
│  │  │  └───────────────┘  │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

> 🎁 **比喻**：content=礼物本身，padding=填充泡沫，border=包装盒，margin=礼物盒与其他物品的距离

### 🆚 标准盒模型 vs IE 盒模型

**标准盒模型（`box-sizing: content-box`，浏览器默认）**

> 你说 `width: 200px`，这200px只是**内容区域**的宽度。
> 实际占用宽度 = 200px (content) + 20px (padding左右各10) + 4px (border左右各2) = **224px**

**IE 盒模型（`box-sizing: border-box`，推荐使用！）**

> 你说 `width: 200px`，这200px是**content + padding + border**的总和。
> 实际占用宽度就是 **200px**，内容区自动缩小。

CSS



```
/* 🌰 举例对比 */
.box {
  width: 200px;
  padding: 10px;
  border: 2px solid black;
}

/* content-box（默认）：实际宽 = 200 + 10*2 + 2*2 = 224px  😰 */
/* border-box：       实际宽 = 200px，content = 176px  😊 */
```

CSS



```
/* 全局推荐：所有元素用 border-box，更好算尺寸 */
*, *::before, *::after {
  box-sizing: border-box;
}
```

> 📝 **一句话记忆**：`content-box` = 说的宽度不含边框，实际更宽；`border-box` = 说多少就是多少（含边框），开发更爽。

------

## 📌 第27题：CSS 选择器优先级（权重）如何计算？

### 🏆 优先级比赛规则

CSS 有多条规则作用在同一元素时，谁赢谁说了算？用 **4位数（a, b, c, d）** 比大小：

text



```
a = 内联样式(style="")      权重: 1,0,0,0
b = ID选择器(#id)           权重: 0,1,0,0
c = 类/伪类/属性选择器       权重: 0,0,1,0
d = 标签/伪元素选择器        权重: 0,0,0,1
```

> 🎖️ **军衔比喻**：
> `!important` = 司令（谁都不鸟）
> `style=""` = 将军
> `#id` = 校官
> `.class` = 士官
> `div` = 士兵
> 高军衔永远压制低军衔，不管低军衔有多少个！

### 💻 计算示例

CSS



```
div                      /* 0,0,0,1 */
.box                     /* 0,0,1,0 */
#header                  /* 0,1,0,0 */
div.box                  /* 0,0,1,1 */
#header .nav a           /* 0,1,1,1 */
style="color:red"        /* 1,0,0,0 */
```

CSS



```
/* 谁赢了？ */
#box { color: red; }       /* 0,1,0,0 */
.box .item { color: blue;} /* 0,0,2,0 */

/* → #box 赢！ID权重(0,1,0,0) > 两个类(0,0,2,0) */
/* ⚠️ 10个类也打不过1个ID！ */
```

### ⚠️ `!important` 的问题

CSS



```
.btn { color: red !important; }  /* 强制最高优先级 */
```

**为什么不推荐用 `!important`？**

- 破坏正常优先级规则，像"规则外开小灶"
- 一旦滥用，后续覆盖只能用更多 `!important`，陷入"军备竞赛"
- 调试困难，不知道样式从哪来的

> 📝 **一句话记忆**：优先级比武：`!important` > 内联 > ID > 类 > 标签；同级别数量多的赢，但高一级永远压制低一级无数个。

------

## 📌 第28题：请列举所有 CSS 选择器类型（至少10种）

### 🗂️ 选择器大全（配例子）

CSS



```
/* 1️⃣ 标签选择器 */
p { color: red; }           /* 选中所有 <p> */

/* 2️⃣ 类选择器 */
.btn { color: blue; }       /* 选中 class="btn" 的元素 */

/* 3️⃣ ID 选择器 */
#header { height: 60px; }   /* 选中 id="header" 的元素 */

/* 4️⃣ 通配符选择器 */
* { box-sizing: border-box; } /* 选中所有元素（慎用，性能差）*/

/* 5️⃣ 属性选择器 */
input[type="text"] { border: 1px solid; }  /* 选中 type=text 的 input */
a[href^="https"] { color: green; }         /* href 以 https 开头的 a */
a[href$=".pdf"] { color: red; }            /* href 以 .pdf 结尾的 a */

/* 6️⃣ 后代选择器（空格）*/
.nav a { text-decoration: none; }  /* .nav 内所有 a（不管多深）*/

/* 7️⃣ 子元素选择器（>）*/
ul > li { list-style: none; }    /* ul 的直接子 li（只找亲儿子）*/

/* 8️⃣ 相邻兄弟选择器（+）*/
h1 + p { margin-top: 0; }        /* h1 后面紧接着的第一个 p */

/* 9️⃣ 通用兄弟选择器（~）*/
h1 ~ p { color: gray; }          /* h1 后面所有的兄弟 p */

/* 🔟 伪类选择器 */
a:hover { color: red; }           /* 鼠标悬停时 */
li:first-child { font-weight: bold; }  /* 第一个子元素 */
li:last-child { border: none; }        /* 最后一个子元素 */
li:nth-child(2n) { background: #eee; } /* 偶数行 */
input:focus { outline: 2px solid blue; }/* 聚焦时 */
:not(.active) { opacity: 0.5; }        /* 不是 .active 的元素 */

/* 1️⃣1️⃣ 伪元素选择器 */
p::before { content: "→ "; }      /* 在 p 内容前插入 */
p::after  { content: " ←"; }      /* 在 p 内容后插入 */
p::first-line { font-weight: bold; }  /* 第一行文字 */
input::placeholder { color: #999; }   /* 占位符文字 */

/* 1️⃣2️⃣ 群组选择器（逗号）*/
h1, h2, h3 { font-family: serif; }  /* 同时选中多个 */
```

------

## 📌 第29题：`display` 属性有哪些常见取值？

### 🎭 用角色扮演来理解

CSS



```
/* block：霸道总裁型——独占整行，可设宽高 */
div { display: block; }
/* 例：div, p, h1, section，默认独占一行 */

/* inline：谦逊小弟型——和别人挤在一行，不能设宽高 */
span { display: inline; }
/* 例：span, a, strong，内容多宽就多宽 */

/* inline-block：两全其美型——在行内排列，但能设宽高 */
button { display: inline-block; }
/* 例：按钮，既能和文字同行，又有固定大小 */

/* none：隐身术——从页面消失，不占空间 */
.hidden { display: none; }

/* flex：弹性布局容器——子元素按弹性规则排列 */
.container { display: flex; }

/* grid：网格布局容器——子元素按网格排列 */
.layout { display: grid; }

/* inline-flex：行内弹性容器 */
.tag { display: inline-flex; align-items: center; }

/* table：模拟表格布局（已过时，了解即可） */
.table { display: table; }

/* contents：容器本身不渲染，只保留子元素 */
.wrapper { display: contents; }
```

### 📊 常用三兄弟对比

text



```
display: block        display: inline        display: inline-block
┌─────────────┐      ←文字文字→             ←┌───┐┌───┐→
│  独占一行    │      文字和我同行             │可设││宽高│
│  可设宽高    │      不可设宽高               └───┘└───┘
└─────────────┘      宽度由内容决定           行内排列+可设宽高
```

------

## 📌 第30题：`position` 有哪几种取值？

### 🗺️ 定位就像"找位置"的方式

> 想象每个元素都是一个员工，`position` 决定了这个员工是按照公司规则（文档流）坐着，还是可以自由移动。

CSS



```
/* static（默认值）：老实员工，按文档流坐着，不能用 top/left 移动 */
div { position: static; }

/* relative：相对自己原来位置偏移，原位置还占着（像椅子还在，人挪了）*/
.box {
  position: relative;
  top: 20px;    /* 相对原位置向下移20px */
  left: 10px;   /* 相对原位置向右移10px */
}

/* absolute：完全脱离文档流，相对最近非static祖先定位 */
/* 像"离职员工"，原来的位置空出来了，飘在页面上 */
.tooltip {
  position: absolute;
  top: 0;
  right: 0;
}

/* fixed：相对浏览器视口定位，滚动页面也不动（像吸在屏幕上）*/
/* 常见：固定导航栏、回到顶部按钮、悬浮客服 */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
}

/* sticky：粘性定位（relative + fixed的结合体）*/
/* 平时像 relative 正常流，滚动超过阈值后像 fixed 吸住 */
/* 常见：表格固定表头、滚动时吸顶的标题 */
.table-header {
  position: sticky;
  top: 0;  /* 距离顶部0px时开始吸附 */
}
```

### 🧭 定位参照物总结

| position | 参照物               | 脱离文档流      |
| -------- | -------------------- | --------------- |
| static   | 无                   | ❌               |
| relative | **自身**原始位置     | ❌（原位置保留） |
| absolute | 最近非static**祖先** | ✅               |
| fixed    | **浏览器视口**       | ✅               |
| sticky   | 滚动容器             | ❌               |

> 📝 **记忆技巧**：`absolute` 找"最近的有定位的老大"，没有就找 body。所以使用 `absolute` 时，父元素要加 `position: relative`。

------

## 📌 第31题：`float` 浮动的问题及清除方法

### 🤿 浮动是什么？

`float` 最初是为了实现"**图文混排**"（图片旁边绕着文字），后来被滥用做布局。

> 🛸 **比喻**：浮动元素像飘在空中的飞碟，从文档流中"飞"出去了，但还会影响旁边的文字（文字会绕着它排）。父元素看不到它的高度（因为它飞起来了）。

### 💥 浮动带来的主要问题：高度塌陷

HTML



```
<div class="parent">   <!-- 想象：父元素是一个盒子 -->
  <div class="child" style="float:left; height:100px;">子元素浮动了</div>
</div>
<!-- 结果：父元素高度变成 0！因为子元素飘走了，父元素感知不到它 -->
```

text



```
正常情况：           浮动后：
┌──────────┐        ┌──────────┐  ← 父元素高度为0（塌陷！）
│ ┌──────┐ │        └──────────┘
│ │ 子元素│ │        ┌──────┐  ← 子元素飘到这里
│ └──────┘ │        │浮动的│
└──────────┘        └──────┘
```

### 🔧 清除浮动的4种方法

**方法1：给父元素加 `overflow: hidden`（最简单）**

CSS



```
.parent {
  overflow: hidden;  /* 触发BFC，父元素重新计算高度 */
}
```

**方法2：在浮动元素后加空 div（不推荐，污染HTML）**

HTML



```
<div class="parent">
  <div style="float:left">浮动内容</div>
  <div style="clear:both"></div>  <!-- 清除浮动的空div -->
</div>
```

**方法3：伪元素清除浮动（推荐⭐）**

CSS



```
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
```

HTML



```
<div class="parent clearfix">
  <div style="float:left">浮动内容</div>
</div>
```

**方法4：`display: flow-root`（现代方案⭐）**

CSS



```
.parent {
  display: flow-root;  /* 专门为创建BFC设计，无副作用 */
}
```

> 📝 **一句话记忆**：浮动会让父元素"看不见"子元素高度（塌陷），解决方法就是让父元素"睁眼"——触发BFC。

------

## 📌 第32题：什么是 BFC？

### 🏠 BFC 是什么？

BFC（Block Formatting Context，块级格式化上下文）是一个**独立的渲染区域**，像一个结界，内部布局不受外部影响，外部也不受内部影响。

> 🏡 **比喻**：BFC 就像一个独立的小区，小区里的规则和外面不互通：
>
> - 外面的浮动影响不到小区内部
> - 小区内部的 margin 不会跑到小区外面

### ✨ 如何触发 BFC？

CSS



```
/* 以下任意一种都能触发 BFC */
overflow: hidden;      /* 最常用 */
overflow: auto;
display: flex;         /* flex容器自动是BFC */
display: grid;         /* grid容器自动是BFC */
display: inline-block;
display: flow-root;    /* 最干净，专门触发BFC */
position: absolute;
position: fixed;
float: left;           /* 浮动元素自身是BFC */
```

### 🎯 BFC 的3大作用

**作用1：清除浮动（防止高度塌陷）**

CSS



```
.parent {
  overflow: hidden;  /* 触发BFC → 父元素能感知到浮动子元素的高度 */
}
```

**作用2：防止外边距合并（Margin Collapse）**

HTML



```
<div class="bfc-container">   <!-- 触发BFC的容器 -->
  <div style="margin:20px">内容A</div>
</div>
<div style="margin:20px">内容B</div>
<!-- 两个margin不会合并！因为A在BFC里，B在外面 -->
```

**作用3：阻止元素被浮动覆盖（实现两栏布局）**

CSS



```
.left  { float: left; width: 200px; }
.right { overflow: hidden; } /* 触发BFC，不会被左边浮动元素覆盖 */
```

text



```
┌──────────┬─────────────────┐
│  float   │  overflow:hidden │
│  左侧栏  │  右侧自适应      │
└──────────┴─────────────────┘
```

------

## 📌 第33题：`visibility:hidden` vs `display:none` vs `opacity:0`

### 👻 三种"隐藏"的区别

> 🎭 **比喻**：三种不同的"不见了"方式：
>
> - `display: none` = **人消失了，座位也撤走了**（不占空间，不能点击）
> - `visibility: hidden` = **人隐身了，但座位还在**（占空间，不能点击）
> - `opacity: 0` = **人穿了透明斗篷，座位也在**（占空间，**还能点击！**）

CSS



```
.box-a { display: none; }        /* 页面中彻底消失，不占位 */
.box-b { visibility: hidden; }   /* 看不见但占位，不可点击 */
.box-c { opacity: 0; }           /* 看不见但占位，可以点击！⚠️ */
```

### 📊 详细对比

| 属性                 | 是否占空间 | 是否响应点击事件 | 是否触发重排           | 子元素能否显示                   |
| -------------------- | ---------- | ---------------- | ---------------------- | -------------------------------- |
| `display: none`      | ❌ 不占     | ❌                | ✅ 触发重排（代价最大） | ❌                                |
| `visibility: hidden` | ✅ 占       | ❌                | ❌ 只触发重绘           | ✅ 可设 `visibility:visible` 显示 |
| `opacity: 0`         | ✅ 占       | ✅ **能点击！**   | ❌ 只走合成层           | ❌（子元素一起透明）              |

### 🎯 使用场景

CSS



```
/* 做动画过渡：用 opacity（可平滑过渡）*/
.modal {
  opacity: 0;
  transition: opacity 0.3s;
  pointer-events: none; /* 配合这个防止透明时被点击 */
}
.modal.show { opacity: 1; pointer-events: auto; }

/* 完全不需要：用 display:none */
.dropdown { display: none; }
.dropdown.open { display: block; }

/* 保留位置但隐藏：用 visibility:hidden */
.placeholder { visibility: hidden; }
```

------

## 📌 第34题：外边距合并（Margin Collapse）

### 💥 什么是外边距合并？

当两个块级元素的**垂直方向 margin** 相遇时，它们不会相加，而是**取较大值**（合并成一个）。

> 🧲 **比喻**：两块磁铁靠近，它们各自的磁场（margin）不会叠加，而是取最强的那个。

### 📋 发生合并的3种情况

**情况1：相邻兄弟元素（最常见）**

HTML



```
<p style="margin-bottom: 20px">段落A</p>
<p style="margin-top: 30px">段落B</p>
<!-- 实际间距 = max(20, 30) = 30px，不是50px！ -->
```

**情况2：父子元素（父元素没有 border/padding 隔离）**

HTML



```
<div class="parent"> <!-- 没有padding/border -->
  <p style="margin-top: 20px">子元素</p>
</div>
<!-- 子元素的 margin-top 会"穿透"父元素，跑到父元素外面！ -->
```

**情况3：空块元素自身合并**

HTML



```
<div style="margin-top: 20px; margin-bottom: 30px"></div>
<!-- 空元素上下margin合并，实际margin = 30px -->
```

### 🛡️ 如何避免外边距合并？

CSS



```
/* 方法1：给父元素触发 BFC */
.parent { overflow: hidden; }
.parent { display: flex; }
.parent { display: flow-root; }

/* 方法2：给父元素加 border 或 padding（隔离margin） */
.parent { padding-top: 1px; }
.parent { border-top: 1px solid transparent; }

/* 方法3：使用 flex/grid 布局（不存在margin合并问题）*/
.parent { display: flex; flex-direction: column; }
```

> 📝 **一句话记忆**：Margin合并只发生在垂直方向的块级元素之间，取最大值不相加；触发BFC或加border/padding可以解决。

------

## 📌 第35题：伪类和伪元素有什么区别？

### 🎭 用演员来比喻

> - **伪类**：演员本人换了一套服装（元素的特殊**状态**）
> - **伪元素**：舞台上多了一个替身演员（DOM中**不存在**的虚拟元素）

### 🔵 伪类（Pseudo-class）—— 元素的状态

CSS



```
/* 用单冒号 : */

a:hover   { color: red; }      /* 鼠标悬停时 */
a:active  { color: blue; }     /* 鼠标按下时 */
a:visited { color: purple; }   /* 已访问过的链接 */
input:focus { outline: 2px solid blue; }  /* 获得焦点时 */
input:disabled { opacity: 0.5; }          /* 禁用状态 */
input:checked { /* 复选框选中 */ }

li:first-child  { font-weight: bold; }    /* 第一个子元素 */
li:last-child   { border: none; }         /* 最后一个子元素 */
li:nth-child(2) { background: #eee; }     /* 第2个子元素 */
li:nth-child(odd)  { background: #f5f5f5; } /* 奇数行 */
li:nth-child(even) { background: #fff; }    /* 偶数行 */

:not(.active) { opacity: 0.5; }           /* 非 .active 的元素 */
```

### 🔴 伪元素（Pseudo-element）—— 虚拟元素

CSS



```
/* 用双冒号 :: （CSS3规范，但单冒号也兼容）*/

/* ::before 和 ::after —— 在元素内容前/后插入虚拟内容 */
.btn::before {
  content: "🚀 ";   /* content 是必须的，可以为空 "" */
}
.price::after {
  content: " 元";
}

/* 实际应用：清除浮动 */
.clearfix::after {
  content: "";
  display: block;
  clear: both;
}

/* ::first-line —— 选中元素的第一行文字 */
p::first-line { font-weight: bold; }

/* ::first-letter —— 选中第一个字母/字 */
p::first-letter { font-size: 2em; float: left; }

/* ::placeholder —— 输入框占位符 */
input::placeholder { color: #999; font-style: italic; }

/* ::selection —— 用户选中的文字 */
::selection { background: yellow; color: black; }
```

### 📊 关键区别

|                   | 伪类                  | 伪元素                               |
| ----------------- | --------------------- | ------------------------------------ |
| **语法**          | 单冒号 `:`            | 双冒号 `::`                          |
| **作用**          | 描述元素**状态**      | 创建**虚拟元素**                     |
| **DOM中是否存在** | 元素本身存在          | ❌ DOM中不存在                        |
| **能否多个**      | 可叠加 `:hover:focus` | 每个元素只有 `::before` 和 `::after` |

------

## 📌 第36题：CSS 水平居中（4种方法）

CSS



```
/* ===== 方法1：text-align（适合行内/行内块元素）=====*/
.parent {
  text-align: center;  /* 让父元素内的行内内容居中 */
}
/* 适用：文字、图片、inline-block 元素 */


/* ===== 方法2：margin: auto（适合块级元素，需知道宽度）=====*/
.child {
  width: 300px;        /* 必须有宽度 */
  margin: 0 auto;      /* 左右auto自动分配剩余空间 */
}


/* ===== 方法3：Flexbox（最推荐）=====*/
.parent {
  display: flex;
  justify-content: center;  /* 主轴（水平）居中 */
}


/* ===== 方法4：Grid =====*/
.parent {
  display: grid;
  justify-items: center;  /* 或 place-items: center */
}


/* ===== 方法5：绝对定位 + transform（不需要知道宽度）=====*/
.parent { position: relative; }
.child {
  position: absolute;
  left: 50%;                      /* 元素左边到父元素50%处 */
  transform: translateX(-50%);    /* 向左移动自身宽度的50% */
}
```

> 📝 **记忆口诀**：行内用`text-align`，块级用`margin:auto`，万能用`flex`，飘出来用`absolute+transform`。

------

## 📌 第37题：CSS 垂直居中（4种方法）

CSS



```
/* ===== 方法1：line-height = height（仅适合单行文字）=====*/
.btn {
  height: 50px;
  line-height: 50px;  /* 行高 = 容器高度 → 文字自动垂直居中 */
}


/* ===== 方法2：Flexbox（最推荐）=====*/
.parent {
  display: flex;
  align-items: center;  /* 交叉轴（垂直）居中 */
  height: 300px;
}


/* ===== 方法3：Grid =====*/
.parent {
  display: grid;
  align-items: center;  /* 或 place-items: center */
  height: 300px;
}


/* ===== 方法4：绝对定位 + transform =====*/
.parent { position: relative; height: 300px; }
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}


/* ===== 方法5：display:table-cell（旧方法，了解即可）=====*/
.parent {
  display: table-cell;
  vertical-align: middle;
  height: 300px;
}
```

------

## 📌 第38题：水平垂直都居中（3种方案）

CSS



```
/* ===== 方案1：Flexbox（日常首选 ⭐⭐⭐）=====*/
.parent {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
  height: 100vh;
}


/* ===== 方案2：Grid（最简洁 ⭐⭐⭐）=====*/
.parent {
  display: grid;
  place-items: center;   /* place-items = align-items + justify-items 简写 */
  height: 100vh;
}


/* ===== 方案3：绝对定位 + transform（适合弹窗/浮层）=====*/
.parent { position: relative; }
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);  /* 同时向上和向左移动自身50% */
}
```

> 💡 **实际应用场景**：
>
> - 页面整体内容居中 → Flexbox 或 Grid
> - 弹窗/Modal 居中 → 绝对定位 + transform
> - 全屏加载页 → Grid + `place-items:center`

------

## 📌 第39题：CSS 各种单位的区别

### 📏 单位家族一览

CSS



```
/* ===== 绝对单位 =====*/
px    /* 像素（最常用，1px在普通屏=1个像素点）*/


/* ===== 相对字体大小 =====*/
em    /* 相对当前元素的font-size */
rem   /* 相对根元素（html）的font-size */


/* ===== 相对视口 =====*/
vw    /* 视口宽度的1%（100vw = 整个视口宽）*/
vh    /* 视口高度的1%（100vh = 整个视口高）*/
vmin  /* vw和vh中较小的那个 */
vmax  /* vw和vh中较大的那个 */


/* ===== 百分比 =====*/
%     /* 相对父元素的对应属性 */
```

### 🔍 em vs rem 的关键区别

CSS



```
/* em 的陷阱：会层层叠加！ */
html { font-size: 16px; }
.parent { font-size: 1.5em; }   /* = 16 × 1.5 = 24px */
.child  { font-size: 1.5em; }   /* = 24 × 1.5 = 36px ⚠️ 越来越大！ */

/* rem 的优势：永远基于根元素，不叠加 */
html { font-size: 16px; }
.parent { font-size: 1.5rem; }  /* = 16 × 1.5 = 24px */
.child  { font-size: 1.5rem; }  /* = 16 × 1.5 = 24px ✅ 稳定！ */
```

### 📱 移动端适配方案（rem + vw）

CSS



```
/* 方案1：rem 方案（老方法）*/
/* 用 JS 根据屏幕宽动态设置 html 的 font-size */
html { font-size: 37.5px; }   /* 设计稿750px，1rem=37.5px */
.box { width: 5.33rem; }      /* 200px ÷ 37.5 = 5.33rem */

/* 方案2：vw 方案（现代推荐）*/
/* 100vw = 屏幕宽，直接用比例 */
.box { width: 26.67vw; }      /* 200 ÷ 750 × 100 = 26.67vw */

/* 方案3：clamp() 流体字体（最现代）*/
h1 { font-size: clamp(1.5rem, 4vw, 3rem); }
/* 最小1.5rem，最大3rem，中间随视口宽度线性变化 */
```

### 📊 单位选择指南

| 场景        | 推荐单位               |
| ----------- | ---------------------- |
| 边框、1px线 | `px`                   |
| 字体大小    | `rem`（不受嵌套影响）  |
| 行高        | 无单位数值（如 `1.5`） |
| 全屏布局    | `vw` / `vh`            |
| 组件内间距  | `em`（随字体缩放）     |
| 响应式间距  | `%` 或 `vw`            |

------

## 📌 第40题：响应式布局 & `@media` 媒体查询

### 📱 什么是响应式？

响应式设计（Responsive Design）让网页能自动适配不同屏幕尺寸：手机、平板、桌面电脑，一套代码搞定。

> 🦎 **比喻**：响应式网页就像变色龙，自动根据环境（屏幕大小）改变外观。

### 🎯 `@media` 媒体查询语法

CSS



```
/* 基本语法：@media 媒体类型 and (条件) { 样式 } */

/* 屏幕宽度 ≤ 768px 时（手机）*/
@media screen and (max-width: 768px) {
  .container { width: 100%; padding: 0 15px; }
  .sidebar { display: none; } /* 手机隐藏侧边栏 */
}

/* 屏幕宽度 ≥ 769px 时（平板+桌面）*/
@media screen and (min-width: 769px) {
  .container { width: 750px; margin: 0 auto; }
}

/* 多条件组合 */
@media screen and (min-width: 768px) and (max-width: 1199px) {
  /* 只在平板范围生效 */
}

/* 打印时的样式 */
@media print {
  .nav, .footer { display: none; }
  body { font-size: 12pt; }
}
```

### 📐 两种开发策略

CSS



```
/* ===== 策略1：移动优先（Mobile First，推荐⭐）=====*/
/* 先写手机样式，再用 min-width 向上覆盖 */

/* 基础样式（手机）*/
.columns { display: block; }

/* 平板 (≥768px) */
@media (min-width: 768px) {
  .columns { display: flex; }
}

/* 桌面 (≥1200px) */
@media (min-width: 1200px) {
  .columns { max-width: 1200px; margin: 0 auto; }
}


/* ===== 策略2：桌面优先（Desktop First）=====*/
/* 先写桌面样式，再用 max-width 向下覆盖 */
.columns { display: flex; max-width: 1200px; }

@media (max-width: 768px) {
  .columns { display: block; }
}
```

### 📏 常用断点参考（Bootstrap 5）

CSS



```
/* 小手机：< 576px（默认，无需媒体查询）*/
/* 手机横屏：≥ 576px */
@media (min-width: 576px)  { /* sm */ }
/* 平板：≥ 768px */
@media (min-width: 768px)  { /* md */ }
/* 桌面：≥ 992px */
@media (min-width: 992px)  { /* lg */ }
/* 大屏：≥ 1200px */
@media (min-width: 1200px) { /* xl */ }
/* 超大屏：≥ 1400px */
@media (min-width: 1400px) { /* xxl */ }
```

### 💡 响应式综合实战示例

CSS



```
/* 响应式导航栏 */
.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.nav-menu { display: flex; gap: 20px; }
.hamburger { display: none; }  /* 桌面隐藏汉堡菜单 */

/* 手机端 */
@media (max-width: 768px) {
  .nav-menu {
    display: none;             /* 默认隐藏菜单 */
    flex-direction: column;    /* 改为垂直排列 */
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background: white;
  }
  .nav-menu.open { display: flex; }  /* 点击汉堡后显示 */
  .hamburger { display: block; }     /* 手机显示汉堡按钮 */
}
```

------

## 🎯 第21-40题 知识点速记卡

| 题号 | 知识点         | 一句话核心                                                   |
| ---- | -------------- | ------------------------------------------------------------ |
| 21   | Web Worker     | JS的"后台助手"，解决单线程卡顿                               |
| 22   | 存储三兄弟     | Cookie随请求发送；localStorage永久；sessionStorage关标签消失 |
| 23   | ARIA可访问性   | 给屏幕阅读器的"说明书"                                       |
| 24   | picture/srcset | srcset=同图不同尺寸；picture=完全不同图片                    |
| 25   | 关键渲染路径   | HTML→DOM→+CSS→渲染树→布局→绘制→合成                          |
| 26   | 盒模型         | border-box更好用，宽度包含边框                               |
| 27   | 优先级权重     | !important>内联>ID>类>标签，高级碾压低级                     |
| 28   | 选择器类型     | 12种：标签/类/ID/通配/属性/后代/子/兄弟/伪类/伪元素/群组     |
| 29   | display取值    | block独占行；inline行内；inline-block两全；none消失          |
| 30   | position       | static正常流；relative自身偏移；absolute祖先定位；fixed视口固定；sticky粘性 |
| 31   | 浮动清除       | 高度塌陷→触发BFC或::after伪元素清除                          |
| 32   | BFC            | 独立渲染区域，解决浮动/margin合并/被浮动覆盖                 |
| 33   | 三种隐藏       | none不占位；hidden占位不可点；opacity占位**可点击**          |
| 34   | margin合并     | 垂直margin取最大值不相加，BFC可防止                          |
| 35   | 伪类/伪元素    | 伪类=元素状态(`:`)；伪元素=虚拟元素(`::`)                    |
| 36   | 水平居中       | text-align/margin:auto/flex/absolute+transform               |
| 37   | 垂直居中       | line-height/flex/grid/absolute+transform                     |
| 38   | 水平垂直居中   | flex两属性/grid place-items/absolute+translate(-50%,-50%)    |
| 39   | CSS单位        | px绝对；em相对自身；rem相对根；vw/vh相对视口                 |
| 40   | 响应式/@media  | 移动优先+min-width断点，一套代码适配所有屏幕                 |

------

> 💪 **学习建议**：
>
> 1. 先把"一句话核心"背熟，面试时不慌
> 2. 每个知识点亲手写一遍代码验证
> 3. 把"生活比喻"讲给别人听，能讲清楚才是真理解了



# 🧠 HTML & CSS 面试题通俗学习卷（第41-60题）

> 用大白话 + 生活比喻，彻底搞懂每一个知识点

------

## 📌 第41题：CSS 变量（Custom Properties）是什么？如何定义和使用？

### 🤔 为什么需要 CSS 变量？

想象你做了一个网站，主题色是蓝色 `#007bff`，这个颜色在 CSS 里出现了 50 次。
有一天老板说："把主题色改成红色！"
你要一个个改 50 处…… 😱

CSS 变量就是为了解决这个问题诞生的。

> 🎨 **比喻**：CSS 变量就像"调色板上的颜料标签"，你给颜色取个名字，以后只需要改一处，所有用到这个名字的地方全部自动更新。

### 💻 基本语法

CSS



```
/* ===== 第一步：定义变量 =====*/
/* 通常在 :root（相当于全局）上定义，所有子元素都能用 */
:root {
  --primary-color: #007bff;    /* 主题色 */
  --secondary-color: #6c757d;  /* 次要色 */
  --font-size-base: 16px;      /* 基础字号 */
  --spacing-md: 16px;          /* 中等间距 */
  --border-radius: 8px;        /* 圆角大小 */
}

/* ===== 第二步：使用变量 =====*/
/* 用 var(变量名) 引用 */
.button {
  background-color: var(--primary-color);   /* 用主题色 */
  font-size: var(--font-size-base);
  padding: var(--spacing-md);
  border-radius: var(--border-radius);
}

.link {
  color: var(--primary-color);  /* 同一个变量，改一处全变 */
}

/* ===== 第三步：设置默认值（兜底值）=====*/
/* var(变量名, 默认值) — 变量不存在时用默认值 */
.text {
  color: var(--text-color, #333);   /* 没有--text-color就用#333 */
}
```

### 🌟 CSS 变量的强大特性

**特性1：可以被 JavaScript 动态修改（实现主题切换！）**

JavaScript



```
// JS 动态修改 CSS 变量 → 页面实时变化
document.documentElement.style.setProperty('--primary-color', '#ff4757');

// 读取 CSS 变量的值
const color = getComputedStyle(document.documentElement)
              .getPropertyValue('--primary-color');
console.log(color); // '#ff4757'
```

**特性2：支持继承（子元素自动获得父元素的变量）**

CSS



```
/* 局部变量：只在某个组件内有效 */
.card {
  --card-bg: white;
  --card-shadow: 0 2px 8px rgba(0,0,0,0.1);
  background: var(--card-bg);
  box-shadow: var(--card-shadow);
}

/* 暗色卡片：覆盖局部变量 */
.card.dark {
  --card-bg: #1a1a1a;     /* 只改这里，card内所有用--card-bg的地方都变 */
  --card-shadow: none;
}
```

**特性3：实现主题切换（暗黑模式）**

CSS



```
/* 亮色主题（默认）*/
:root {
  --bg-color: #ffffff;
  --text-color: #333333;
  --border-color: #e0e0e0;
}

/* 暗色主题：给 html 加 data-theme="dark" 属性切换 */
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #f0f0f0;
  --border-color: #444444;
}

body {
  background: var(--bg-color);
  color: var(--text-color);
}
```

JavaScript



```
// 点击按钮切换主题
document.querySelector('#toggle-theme').addEventListener('click', () => {
  const html = document.documentElement;
  const current = html.getAttribute('data-theme');
  html.setAttribute('data-theme', current === 'dark' ? 'light' : 'dark');
});
```

### 📊 CSS 变量 vs Sass/Less 变量对比

| 特性         | CSS 变量 `--xxx`       | Sass 变量 `$xxx`       |
| ------------ | ---------------------- | ---------------------- |
| 运行时机     | 运行时（浏览器中生效） | 编译时（构建阶段处理） |
| JS 能否修改  | ✅ 可以实时修改         | ❌ 编译后变成固定值     |
| 支持继承     | ✅ 天然支持             | ❌ 不支持               |
| 需要构建工具 | ❌ 原生支持             | ✅ 需要 Sass 编译器     |

> 📝 **一句话记忆**：CSS 变量 = 给样式值取名字，改一处全更新，还能被 JS 动态控制，是实现主题切换的利器。

------

## 📌 第42题：`z-index` 的工作原理？什么情况下会失效？

### 🗼 什么是 z-index？

网页是一个三维空间，除了水平 x 轴和垂直 y 轴，还有一个**深度 z 轴**（从屏幕穿向你的方向）。

`z-index` 控制元素在 z 轴上的顺序，值越大越靠近你（显示在最前面）。

> 🃏 **比喻**：把网页想象成一叠扑克牌，z-index 就是牌的编号，数字大的牌压在上面。

CSS



```
.card-A { position: relative; z-index: 1; }  /* 最底层 */
.card-B { position: relative; z-index: 2; }  /* 中间层 */
.card-C { position: relative; z-index: 3; }  /* 最顶层 */

/* 视觉效果：C 压着 B，B 压着 A */
```

### ⚠️ z-index 什么时候失效？

**失效原因1：元素没有设置 position（最常见！）**

CSS



```
/* ❌ z-index 不生效！ */
.box {
  /* position 是默认的 static */
  z-index: 999;  /* 无效！！ */
}

/* ✅ 必须配合非 static 的 position 使用 */
.box {
  position: relative;  /* 或 absolute / fixed / sticky */
  z-index: 999;        /* 这样才有效 */
}
```

**失效原因2：父元素创建了新的层叠上下文（最难理解的！）**

> 🏢 **比喻**：层叠上下文就像不同的楼栋。
> 楼栋A里的最高楼层，永远不可能"高于"楼栋B的任意楼层——因为它们在不同楼栋里。
> z-index 只在同一楼栋（同一层叠上下文）里比较大小！

HTML



```
<div class="parent-a" style="position:relative; z-index:1">
  <div class="child-a" style="position:relative; z-index:999">
    我的z-index是999！
  </div>
</div>

<div class="parent-b" style="position:relative; z-index:2">
  <div class="child-b" style="position:relative; z-index:1">
    我的z-index只有1
  </div>
</div>

<!-- 结果：child-b 压在 child-a 上面！ -->
<!-- 因为 parent-b(z-index:2) > parent-a(z-index:1) -->
<!-- child 的 z-index 只在各自父元素内部比较 -->
```

### 🔍 哪些属性会创建新的层叠上下文？

CSS



```
/* 以下任意一种都会创建新层叠上下文 */
position: relative/absolute/fixed/sticky + z-index 不为 auto;
opacity: 0.99;          /* 任何小于1的值 */
transform: rotate(0);   /* 任何 transform 值（包括 translate(0,0)）*/
filter: blur(0);        /* 任何 filter 值 */
will-change: transform;
isolation: isolate;     /* 专门用来创建层叠上下文 */
```

CSS



```
/* 🌰 实际问题场景 */
.modal-backdrop {
  position: fixed;
  z-index: 100;
}
.modal {
  position: fixed;
  z-index: 200;
}

/* 问题：如果 .modal 的父元素有 transform，modal 可能显示异常！ */
.parent {
  transform: translateX(0); /* ⚠️ 这会创建新层叠上下文，把 modal 困在里面 */
}
```

### 🎯 z-index 最佳实践

CSS



```
/* 用 CSS 变量统一管理 z-index，避免随手写999 */
:root {
  --z-dropdown:  100;
  --z-sticky:    200;
  --z-overlay:   300;
  --z-modal:     400;
  --z-toast:     500;
}

.dropdown { z-index: var(--z-dropdown); }
.modal    { z-index: var(--z-modal); }
```

> 📝 **一句话记忆**：z-index 要生效必须有 position；层叠上下文像"独立楼栋"，不同楼栋的楼层不能直接比较。

------

## 📌 第43题：`overflow` 属性有哪些取值？

### 🚰 什么是 overflow？

当子元素的内容超出父元素的边界时，`overflow` 决定怎么处理溢出的部分。

> 🫙 **比喻**：overflow 就像一个装水的杯子策略：
>
> - `visible`：水溢出了，让它流出来（默认）
> - `hidden`：水溢出了，直接截断，多余的不要
> - `scroll`：杯子加个盖子+吸管（始终有滚动条）
> - `auto`：水溢出才加吸管，不溢出不加（按需滚动条）

### 💻 各取值详解

CSS



```
/* ===== visible（默认值）=====*/
.box {
  overflow: visible;   /* 溢出内容正常显示，超出边界也显示 */
  width: 200px;
  height: 100px;
}
/* 用途：绝大多数情况，让内容自然溢出（如下拉菜单超出父容器）*/


/* ===== hidden =====*/
.box {
  overflow: hidden;
  width: 200px;
  height: 100px;
}
/* 用途1：裁剪溢出内容（图片裁剪、文字截断）*/
/* 用途2：触发 BFC，清除浮动 */
/* 用途3：隐藏滚动条但仍可通过 JS 滚动 */


/* ===== scroll =====*/
.box {
  overflow: scroll;    /* 始终显示滚动条（即使内容没有溢出！）*/
  width: 200px;
  height: 100px;
}
/* 缺点：即使内容很少，滚动条也一直在，占位且难看 */


/* ===== auto（推荐）=====*/
.box {
  overflow: auto;      /* 有溢出才显示滚动条，没有就不显示 */
  width: 200px;
  height: 100px;
}
/* 最智能的选择，按需出现 */


/* ===== clip（较新）=====*/
.box {
  overflow: clip;      /* 类似 hidden，但不触发 BFC */
}
```

### 🎯 分轴控制（overflow-x / overflow-y）

CSS



```
/* 只允许水平滚动（横向滚动列表）*/
.scroll-x {
  overflow-x: auto;
  overflow-y: hidden;
  white-space: nowrap;  /* 防止换行，强制横向排列 */
}

/* 只允许垂直滚动（固定高度列表）*/
.scroll-y {
  overflow-x: hidden;
  overflow-y: auto;
  height: 300px;
}
```

### 🌟 overflow 的隐藏技能

CSS



```
/* 技能1：配合 border-radius 裁剪子元素（如圆形头像）*/
.avatar {
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;    /* 把超出圆形的图片裁掉 */
}
.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 技能2：触发 BFC 清除浮动 */
.parent { overflow: hidden; }  /* 子元素浮动后父元素不塌陷 */

/* 技能3：隐藏系统滚动条样式（自定义滚动条）*/
.custom-scroll {
  overflow-y: auto;
}
.custom-scroll::-webkit-scrollbar { width: 6px; }
.custom-scroll::-webkit-scrollbar-thumb {
  background: #ccc;
  border-radius: 3px;
}
```

> 📝 **一句话记忆**：`hidden`=裁剪+BFC，`auto`=按需滚动条（推荐），`scroll`=强制滚动条，`visible`=默认随便溢出。

------

## 📌 第44题：`line-height` 的作用？如何实现单行文字垂直居中？

### 📏 line-height 是什么？

`line-height` 定义了一行文字所占的**总高度**（行盒高度）。

> 📓 **比喻**：就像在田字格本上写字，`line-height` 是每一格的高度。文字本身的高度（字号大小）固定，多出来的空间会**平均分配在文字的上下**，形成行距。

text



```
line-height: 40px，font-size: 16px

┌──────────────────────────────┐  ←─ 行盒顶部
│         12px 上半行距         │
├──────────────────────────────┤
│    文字内容（16px字体大小）    │
├──────────────────────────────┤
│         12px 下半行距         │
└──────────────────────────────┘  ←─ 行盒底部
   总高度 = 40px = 12+16+12
```

### 🎯 用 line-height 实现单行文字垂直居中

**原理**：当 `line-height` = 容器 `height` 时，文字上下的半行距相等，文字自动垂直居中！

CSS



```
/* 经典按钮垂直居中 */
.btn {
  height: 48px;
  line-height: 48px;  /* 等于 height，文字自动垂直居中 */
  padding: 0 20px;
  text-align: center; /* 水平居中 */
}

/* 导航栏文字居中 */
.nav-item {
  height: 60px;
  line-height: 60px;
}
```

### ⚠️ line-height 的不同取值方式

CSS



```
/* 方式1：无单位数值（推荐✅）*/
/* 意思是：当前字号 × 1.5 = 行高 */
p { line-height: 1.5; }
/* 优点：子元素继承的是比例，各自乘以自己的字号，不会出bug */

/* 方式2：px（绝对值）*/
p { line-height: 24px; }
/* 缺点：子元素改了字号，行高不跟着变 */

/* 方式3：em（相对当前字号）*/
p { line-height: 1.5em; }
/* 和无单位类似，但继承的是计算后的值（有坑）*/

/* 方式4：百分比 */
p { line-height: 150%; }
/* 和 em 一样，有继承问题 */
```

CSS



```
/* 🌰 无单位 vs px 的继承区别 */
.parent {
  font-size: 16px;
  line-height: 1.5;   /* 推荐：子元素继承1.5这个比例 */
}
.child {
  font-size: 24px;
  /* 继承了 1.5，所以 line-height = 24 × 1.5 = 36px ✅ */
}

.parent-bad {
  font-size: 16px;
  line-height: 24px;  /* 不推荐：子元素继承24px这个固定值 */
}
.child-bad {
  font-size: 24px;
  /* 继承了 24px，但字号是24px，行高 = 字号，行距为0 ⚠️ */
}
```

> 📝 **一句话记忆**：单行文字垂直居中 = `height` 和 `line-height` 设为同一个值；`line-height` 推荐用无单位数值如 `1.5`，继承不出bug。

------

## 📌 第45题：单行/多行文本溢出显示省略号

### 📝 为什么需要文本溢出处理？

> 🏷️ **比喻**：商品标题很长，但卡片宽度有限，超出的部分要用"..."代替，保持界面整洁。

### ✂️ 单行文本溢出

CSS



```
/* 三行缺一不可！ */
.single-line {
  white-space: nowrap;       /* 第1步：不允许换行（强制单行）*/
  overflow: hidden;          /* 第2步：超出部分隐藏 */
  text-overflow: ellipsis;   /* 第3步：隐藏处显示省略号 */

  /* 必须有宽度限制，否则文字一直延伸不会溢出 */
  width: 200px;  /* 或 max-width */
}
```

text



```
效果展示：
┌────────────────────────┐
│ 这是一段很长的商品标题… │
└────────────────────────┘
```

### ✂️ 多行文本溢出（显示N行后截断）

CSS



```
/* 方案1：WebKit 内核（Chrome/Safari/移动端，目前已足够用）*/
.multi-line {
  display: -webkit-box;           /* 必须：弹性伸缩盒子模型 */
  -webkit-line-clamp: 3;          /* 控制显示几行 */
  -webkit-box-orient: vertical;   /* 必须：垂直方向排列 */
  overflow: hidden;               /* 必须：超出隐藏 */
  /* 注意：不需要设置固定高度！ */
}
```

text



```
效果展示（-webkit-line-clamp: 2）：
┌────────────────────────┐
│ 这是第一行内容，内容很多│
│ 这是第二行内容，截断后… │
└────────────────────────┘
（第三行及以后被隐藏）
```

### 🎯 实际应用场景

CSS



```
/* 商品卡片标题（常见需求）*/
.product-title {
  /* 移动端：显示2行 */
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  font-size: 14px;
  line-height: 1.5;
  /* 2行 × 14px × 1.5 = 42px，可以设置 min-height: 42px 保证空白卡片高度一致 */
}

/* 文章摘要（显示3行）*/
.article-summary {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

/* 单行标签/标题 */
.tag {
  max-width: 120px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

### 🔧 方案对比

| 方案                      | 单行 | 多行 | 兼容性             |
| ------------------------- | ---- | ---- | ------------------ |
| `text-overflow: ellipsis` | ✅    | ❌    | 所有浏览器         |
| `-webkit-line-clamp`      | ✅    | ✅    | 现代浏览器（可用） |
| JS 计算截断               | ✅    | ✅    | 所有，但性能差     |

> 📝 **一句话记忆**：单行三件套（`nowrap` + `overflow:hidden` + `text-overflow:ellipsis`）；多行用 `-webkit-line-clamp: N`。

------

## 📌 第46题：`transition` 和 `animation` 有什么区别？

### 🎬 两种动画的本质区别

> 🚗 **比喻**：
>
> - `transition` = **油门踩下去，车自动平滑加速**（需要触发条件，只有起点和终点）
> - `animation` = **提前规划好的自动驾驶路线**（自动播放，可以有很多个中间路径点）

### 🔄 transition —— 过渡动画

**特点**：需要一个"触发器"（如 hover、class 切换），只有开始状态和结束状态两个关键帧。

CSS



```
/* 基本语法 */
/* transition: 属性名  持续时间  缓动函数  延迟时间 */
.btn {
  background-color: blue;
  transform: scale(1);

  /* 单个属性过渡 */
  transition: background-color 0.3s ease;

  /* 多个属性过渡 */
  transition: background-color 0.3s ease,
              transform 0.2s ease-out;

  /* 所有属性过渡（慎用，性能差）*/
  transition: all 0.3s ease;
}

/* hover 触发过渡 */
.btn:hover {
  background-color: darkblue;  /* 从 blue 平滑过渡到 darkblue */
  transform: scale(1.05);
}
```

CSS



```
/* ===== 缓动函数（transition-timing-function）=====*/
transition: all 0.3s ease;          /* 先快后慢（默认）*/
transition: all 0.3s linear;        /* 匀速 */
transition: all 0.3s ease-in;       /* 先慢后快（加速）*/
transition: all 0.3s ease-out;      /* 先快后慢（减速，最自然）*/
transition: all 0.3s ease-in-out;   /* 两端慢中间快 */
transition: all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55); /* 自定义弹性 */
```

### 🎞️ animation —— 关键帧动画

**特点**：自动播放，不需要触发器，可以定义任意多个中间状态（关键帧）。

CSS



```
/* 第一步：用 @keyframes 定义动画 */
@keyframes slideIn {
  0%   { transform: translateX(-100%); opacity: 0; }  /* 起始状态 */
  60%  { transform: translateX(10%); }                /* 中间弹跳 */
  100% { transform: translateX(0);    opacity: 1; }   /* 结束状态 */
}

@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

/* 第二步：使用动画 */
.card {
  animation-name: slideIn;           /* 动画名（对应@keyframes）*/
  animation-duration: 0.5s;          /* 持续时间 */
  animation-timing-function: ease;   /* 缓动函数 */
  animation-delay: 0.2s;             /* 延迟开始 */
  animation-iteration-count: 1;      /* 播放次数（infinite = 无限）*/
  animation-direction: normal;       /* 方向（alternate = 来回播放）*/
  animation-fill-mode: forwards;     /* 结束后保持最终状态 */
  animation-play-state: running;     /* running | paused（可用JS控制暂停）*/

  /* 简写 */
  animation: slideIn 0.5s ease 0.2s 1 normal forwards;
}

.loading-icon {
  animation: spin 1s linear infinite;  /* 无限旋转 */
}
```

### 📊 transition vs animation 对比表

| 对比项         | `transition`                | `animation`               |
| -------------- | --------------------------- | ------------------------- |
| **触发方式**   | 需要状态变化（hover/class） | 自动播放                  |
| **关键帧数量** | 只有起点和终点              | 可以有无数个中间帧        |
| **循环播放**   | ❌ 不支持                    | ✅ `infinite`              |
| **往返播放**   | ❌                           | ✅ `alternate`             |
| **暂停控制**   | ❌                           | ✅ `animation-play-state`  |
| **适用场景**   | 简单的状态切换（hover效果） | 复杂动画（loading、轮播） |

CSS



```
/* 🌰 实际选择场景 */

/* 用 transition：按钮hover效果 */
.btn { transition: transform 0.2s ease; }
.btn:hover { transform: scale(1.05); }

/* 用 animation：加载动画（不需要用户操作，自动转）*/
.spinner {
  animation: spin 1s linear infinite;
}

/* 用 animation：页面入场动画 */
.hero-title {
  animation: fadeInUp 0.8s ease-out both;
}
```

> 📝 **一句话记忆**：`transition` = 被动响应（需触发），只有AB两状态；`animation` = 主动表演（自动播放），可以有ABCDE...N个状态。

------

## 📌 第47题：`transform` 属性有哪些常见变换函数？

### 🔧 transform 是什么？

`transform` 让你可以对元素进行**位移、旋转、缩放、倾斜**变换，而且**不触发重排**（直接走 GPU 合成层），性能极好。

> 🪄 **比喻**：transform 就像是 Photoshop 里的"自由变换"工具，可以拉伸、旋转、移动图层，而不会影响其他图层的布局。

### 💻 所有常见变换函数

CSS



```
/* ===== 1. translate —— 位移 =====*/
.box {
  transform: translate(50px, 20px);    /* 右移50px，下移20px */
  transform: translateX(50px);         /* 只水平移动 */
  transform: translateY(-20px);        /* 只垂直移动（负数=向上）*/
  transform: translateZ(100px);        /* 沿z轴移动（3D，需配合perspective）*/
  transform: translate3d(50px, 20px, 100px); /* 3D位移简写 */

  /* 💡 百分比相对自身尺寸：水平垂直居中神器！ */
  transform: translate(-50%, -50%);    /* 向左上方移动自身宽高的50% */
}


/* ===== 2. rotate —— 旋转 =====*/
.box {
  transform: rotate(45deg);            /* 顺时针旋转45度 */
  transform: rotate(-90deg);           /* 逆时针旋转90度 */
  transform: rotateX(45deg);           /* 沿X轴翻转（3D）*/
  transform: rotateY(180deg);          /* 沿Y轴翻转（3D，做翻牌效果）*/
  transform: rotateZ(45deg);           /* 等同 rotate(45deg) */
}


/* ===== 3. scale —— 缩放 =====*/
.box {
  transform: scale(1.5);              /* 等比放大1.5倍 */
  transform: scale(0.5);              /* 等比缩小到50% */
  transform: scaleX(2);               /* 只水平拉伸 */
  transform: scaleY(0.5);             /* 只垂直压缩 */
  transform: scale(2, 0.5);           /* 水平x2，垂直x0.5 */
  transform: scale(-1);               /* 镜像翻转！ */
}


/* ===== 4. skew —— 倾斜/扭曲 =====*/
.box {
  transform: skew(30deg);             /* 水平倾斜30度 */
  transform: skewX(20deg);            /* 只水平倾斜 */
  transform: skewY(10deg);            /* 只垂直倾斜 */
  transform: skew(20deg, 10deg);      /* 水平垂直都倾斜 */
}


/* ===== 5. 组合变换（从右到左执行！）=====*/
.box {
  /* 先旋转45度，再位移100px（注意顺序很重要！）*/
  transform: translateX(100px) rotate(45deg);

  /* 按钮hover效果：位移+缩放 */
  transform: translateY(-3px) scale(1.02);
}
```

### 🌟 transform-origin —— 变换原点

CSS



```
/* transform-origin 设置变换的中心点，默认是元素中心(50% 50%) */
.box {
  transform-origin: top left;      /* 以左上角为原点旋转 */
  transform-origin: 0 0;           /* 同上 */
  transform-origin: center;        /* 默认，以中心旋转 */
  transform-origin: right bottom;  /* 以右下角为原点 */
  transform-origin: 20px 30px;     /* 精确位置 */
}

/* 🌰 实际应用：折叠动画从顶部展开 */
.panel {
  transform-origin: top;
  transform: scaleY(0);
  transition: transform 0.3s;
}
.panel.open {
  transform: scaleY(1);
}
```

### 🎯 实际应用场景

CSS



```
/* 1. 鼠标悬浮上浮效果 */
.card {
  transition: transform 0.3s ease;
}
.card:hover {
  transform: translateY(-8px);
}

/* 2. 点击按钮下沉效果 */
.btn:active {
  transform: scale(0.95) translateY(2px);
}

/* 3. 图标旋转（展开/收起箭头）*/
.arrow {
  transition: transform 0.3s;
}
.arrow.open {
  transform: rotate(180deg);
}

/* 4. 翻牌效果（3D）*/
.card-inner {
  transition: transform 0.6s;
  transform-style: preserve-3d;
}
.card:hover .card-inner {
  transform: rotateY(180deg);
}

/* 5. 水平垂直居中（经典用法）*/
.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
```

> 📝 **一句话记忆**：`translate`=移动，`rotate`=旋转，`scale`=缩放，`skew`=倾斜；transform 不触发重排，性能好，动画首选。

------

## 📌 第48题：什么是 CSS 层叠（Cascading）？

### 🌊 什么是"层叠"？

CSS 的全名是 **Cascading Style Sheets**（层叠样式表），"层叠"是它最核心的机制。

> 🏔️ **比喻**：层叠就像地质层，多层岩石叠在一起，最上面的覆盖最下面的。当多条 CSS 规则同时作用于一个元素，就需要"层叠"规则来决定谁最终生效。

### 📚 样式的4个来源（从低到高）

text



```
优先级由低到高：

┌────────────────────────────┐
│  4. 浏览器默认样式          │  最低（如 h1 默认有大字号）
├────────────────────────────┤
│  3. 用户自定义样式          │  用户在浏览器设置的字体/颜色
├────────────────────────────┤
│  2. 开发者（作者）样式      │  我们写的 CSS
├────────────────────────────┤
│  1. !important 声明        │  最高（覆盖一切）
└────────────────────────────┘
```

### 🏆 层叠算法（决定谁赢）

当多条规则冲突时，按以下顺序判断：

text



```
第1步：比较样式来源（!important > 作者 > 用户 > 浏览器默认）
    ↓ 来源相同时
第2步：比较选择器优先级权重（ID > 类 > 标签）
    ↓ 权重相同时
第3步：比较书写顺序（后写的覆盖先写的）
```

CSS



```
/* 🌰 层叠示例 */
/* 样式1：浏览器默认 */
/* h1 { font-size: 2em; }  ← 浏览器内置 */

/* 样式2：开发者CSS（覆盖浏览器默认）*/
h1 { font-size: 24px; }       /* 0,0,0,1 */

/* 样式3：更高权重选择器（覆盖样式2）*/
.title { font-size: 32px; }   /* 0,0,1,0 */

/* 样式4：ID选择器（覆盖样式3）*/
#main-title { font-size: 40px; }  /* 0,1,0,0 */

/* 样式5：!important（覆盖一切）*/
h1 { font-size: 14px !important; }  /* 最终生效 */
```

### 🔍 书写顺序的影响

CSS



```
/* 权重相同时，后写的覆盖先写的 */
.btn { color: red; }    /* 先写 */
.btn { color: blue; }   /* 后写 → 最终 color 是 blue */

/* 外部样式表加载顺序也影响层叠 */
<link rel="stylesheet" href="reset.css">    /* 先加载 */
<link rel="stylesheet" href="theme.css">    /* 后加载，权重相同时覆盖reset.css */
<link rel="stylesheet" href="component.css"> /* 最后加载，最高优先 */
```

> 📝 **一句话记忆**：层叠 = 多条规则冲突时的裁判规则，按来源 → 权重 → 顺序 三步裁判，后来者居上（权重相同时）。

------

## 📌 第49题：`inherit`、`initial`、`unset`、`revert` 有什么区别？

### 🔑 四个 CSS 关键字

这四个关键字都是用来**重置/控制属性继承**的，可以用在任何 CSS 属性的值上。

> 🧬 **比喻**：CSS 属性就像基因，有些会遗传（颜色、字体），有些不会（宽度、边距）。这四个关键字控制"遗传"行为。

### 💻 逐个详解

CSS



```
/* ===== inherit：强制继承父元素的值 =====*/

/* 背景：有些属性天然不继承（如 border、background）*/
/* inherit 强制让它继承父元素的值 */

.parent {
  border: 2px solid red;
  background: yellow;
  color: blue;
}
.child {
  border: inherit;      /* 继承父元素的 border（天然不继承的属性）*/
  background: inherit;  /* 继承父元素的 background */
  color: inherit;       /* 即使这个属性天然就继承，写出来也没错 */
}

/* 实际用途：让 a 标签继承父元素颜色（不显示默认蓝色链接）*/
a { color: inherit; }
```

CSS



```
/* ===== initial：重置为 CSS 规范的初始默认值 =====*/

/* 注意：initial 不是浏览器默认值，是 CSS 规范定义的初始值 */
/* 例如：color 的 initial 值是 black（不是浏览器给的蓝色链接色）*/

.box {
  color: initial;       /* 重置为 black（CSS规范初始值）*/
  display: initial;     /* 重置为 inline（所有元素的规范初始值）*/
  font-size: initial;   /* 重置为 medium（规范初始值）*/
}
```

CSS



```
/* ===== unset：智能重置（最常用！）=====*/

/* 规则：
   - 如果该属性天然可继承（color, font-size等）→ 行为等同 inherit
   - 如果该属性天然不继承（border, padding等） → 行为等同 initial
*/

.reset-all {
  color: unset;       /* color 可继承 → 等于 inherit（继承父元素颜色）*/
  border: unset;      /* border 不可继承 → 等于 initial（无边框）*/
  padding: unset;     /* padding 不可继承 → 等于 initial（0）*/
}

/* 实际用途：全局重置（比 * { ... } 更智能）*/
.component * {
  all: unset;  /* 重置所有属性！然后重新设置需要的样式 */
}
```

CSS



```
/* ===== revert：回滚到浏览器默认样式 =====*/

/* 比 initial 更接近我们预期，因为它回到浏览器默认，而不是CSS规范初始值 */
/* 例如：display 的 initial 是 inline，但浏览器默认 div 是 block */

button {
  all: revert;  /* 把按钮样式完全重置到浏览器默认 */
}

h1 {
  font-size: revert;  /* 恢复浏览器给 h1 的默认大字号 */
}
```

### 📊 四者对比总结

| 关键字    | 行为                             | 记忆方法           |
| --------- | -------------------------------- | ------------------ |
| `inherit` | 强制继承父元素的值               | "遗传"             |
| `initial` | 重置为 CSS 规范初始值            | "归零（规范标准）" |
| `unset`   | 可继承→inherit，不可继承→initial | "智能归位"         |
| `revert`  | 回滚到浏览器默认样式             | "穿越回浏览器默认" |

> 📝 **一句话记忆**：`inherit`=跟父亲学；`initial`=回到CSS规范初始；`unset`=能遗传就遗传，不能就归零；`revert`=回到浏览器默认。

------

## 📌 第50题：如何用 CSS 画一个三角形？

### 🔺 原理揭秘

这是一道超经典的面试题！原理很巧妙：

> 🎩 **原理**：把元素的宽高都设为 0，然后利用 `border` 的特性。当元素没有宽高时，四条 border 在角落处相交，每条 border 各占一个三角形！

CSS



```
/* 先看一个有宽高的元素的 border 是怎么交接的 */
.demo {
  width: 40px;
  height: 40px;
  border-top:    20px solid red;
  border-right:  20px solid blue;
  border-bottom: 20px solid green;
  border-left:   20px solid yellow;
}
/* 看起来像4个梯形拼成的正方形 */

/* 现在把宽高变成 0 */
.demo-zero {
  width: 0;
  height: 0;
  border-top:    20px solid red;
  border-right:  20px solid blue;
  border-bottom: 20px solid green;
  border-left:   20px solid yellow;
}
/* 4个梯形变成了4个三角形！ */
```

### 💻 各方向三角形代码

CSS



```
/* ===== 向下的三角形（▼）=====*/
/* 保留 top border（显示），左右 border 透明（形成两条斜边），去掉 bottom */
.triangle-down {
  width: 0;
  height: 0;
  border-left:   50px solid transparent;   /* 左斜边透明 */
  border-right:  50px solid transparent;   /* 右斜边透明 */
  border-top:    50px solid red;           /* 顶部=三角形可见边 */
  /* 不写 border-bottom，或设为 0 */
}


/* ===== 向上的三角形（▲）=====*/
.triangle-up {
  width: 0;
  height: 0;
  border-left:   50px solid transparent;
  border-right:  50px solid transparent;
  border-bottom: 50px solid red;           /* 底部=三角形可见边 */
}


/* ===== 向右的三角形（▶）=====*/
.triangle-right {
  width: 0;
  height: 0;
  border-top:    50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left:   50px solid red;           /* 左边=三角形可见边 */
}


/* ===== 向左的三角形（◀）=====*/
.triangle-left {
  width: 0;
  height: 0;
  border-top:    50px solid transparent;
  border-bottom: 50px solid transparent;
  border-right:  50px solid red;
}


/* ===== 直角三角形（右上角）=====*/
.triangle-corner {
  width: 0;
  height: 0;
  border-top:   100px solid red;
  border-right: 100px solid transparent;
  /* 只有两条border，形成直角三角形 */
}
```

### 🌟 实际应用：对话气泡

CSS



```
/* 带小三角的对话气泡 */
.bubble {
  position: relative;
  background: #007bff;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  display: inline-block;
}

/* 用 ::after 伪元素画小三角 */
.bubble::after {
  content: "";
  position: absolute;
  bottom: -10px;          /* 放在气泡底部 */
  left: 20px;
  width: 0;
  height: 0;
  border-left:   8px solid transparent;
  border-right:  8px solid transparent;
  border-top:    10px solid #007bff;  /* 三角颜色=气泡颜色 */
}
```

### 🆕 现代替代方案

CSS



```
/* 方案2：clip-path（更直观，现代浏览器支持）*/
.triangle {
  width: 100px;
  height: 100px;
  background: red;
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);  /* 三个顶点坐标 */
}

/* 方案3：transform rotate + overflow:hidden */
```

> 📝 **一句话记忆**：三角形原理 = 宽高为0 + border有颜色的方向就是三角形尖朝那个方向 + 两侧border设transparent；记口诀：**"想要哪个方向的三角，就保留那个方向对面的border"**。向下三角保留 border-top！

------

## 📌 第51题：什么是 CSS Sprite（雪碧图）？

### 🎮 什么是雪碧图？

> 🎮 **来历**：名字来自游戏开发，游戏里把所有角色动作图拼在一张大图里，用时取对应位置显示，CSS 雪碧图借鉴了这个思路。

CSS Sprite 是把**多个小图标/图片合并到一张大图**里，然后通过 `background-position` 精确定位，只显示需要的那一部分。

text



```
大图（sprite.png）：
┌───────┬───────┬───────┐
│ 🏠首页│ 👤用户│ ⚙️设置 │
├───────┼───────┼───────┤
│ ❤️收藏│ 💬消息│ 🔍搜索 │
└───────┴───────┴───────┘

只发一次 HTTP 请求就加载了所有图标！
```

### 💻 代码实现

CSS



```
/* 所有图标共用同一张背景图 */
.icon {
  background-image: url('sprite.png');
  display: inline-block;
}

/* 通过 background-position 定位到对应图标 */
.icon-home {
  width: 32px;
  height: 32px;
  background-position: 0 0;        /* 第一行第一列 */
}

.icon-user {
  width: 32px;
  height: 32px;
  background-position: -32px 0;    /* 向左偏移32px（第二个）*/
}

.icon-settings {
  width: 32px;
  height: 32px;
  background-position: -64px 0;    /* 向左偏移64px（第三个）*/
}
```

### ⚖️ 优缺点分析

| 优点                                 | 缺点                                       |
| ------------------------------------ | ------------------------------------------ |
| ✅ 减少 HTTP 请求数（n张图→1张图）    | ❌ 维护困难（改一个图标要重新合并整张大图） |
| ✅ 加载速度快（一次加载所有图标）     | ❌ Retina屏适配麻烦（需要@2x版本）          |
| ✅ 减少图片总体积（HTTP头部开销减少） | ❌ 定位计算繁琐（需要精确像素值）           |
|                                      | ❌ 不灵活（图标颜色无法用CSS改）            |

### 🔄 现代替代方案

HTML



```
<!-- 方案1：SVG Sprite（最推荐）-->
<!-- 把所有 SVG 图标合并成一个 SVG 文件 -->
<svg style="display:none">
  <symbol id="icon-home" viewBox="0 0 24 24">
    <path d="M10 20v-6h4v6..."/>
  </symbol>
</svg>

<!-- 使用时引用 -->
<svg class="icon"><use href="#icon-home"></use></svg>

<!-- 好处：可用CSS改颜色、可缩放不失真、维护方便 -->


<!-- 方案2：iconfont（字体图标）-->
<link href="//at.alicdn.com/t/font_xxx.css" rel="stylesheet">
<span class="iconfont icon-home"></span>

<!-- 方案3：直接内嵌 SVG -->
<svg viewBox="0 0 24 24" width="24" height="24">...</svg>
```

> 📝 **一句话记忆**：雪碧图 = 把所有小图拼一张大图 + 用background-position取用，减少请求但维护难。现代项目推荐用 SVG Sprite 或 iconfont 替代。

------

## 📌 第52题：`@font-face` 的作用？使用自定义字体注意什么？

### 🔤 为什么需要 @font-face？

网页默认只能用用户电脑上安装的字体，如果用户没装你指定的字体，就会显示降级字体，导致和设计稿不一致。

> 📦 **比喻**：`@font-face` 就像让网站"自带字体包"，不管用户电脑有没有装这个字体，浏览器都能从服务器下载字体文件来使用。

### 💻 基本用法

CSS



```
/* 第一步：声明字体 */
@font-face {
  font-family: 'MyCustomFont';           /* 给字体起名字（随便取）*/
  src: url('./fonts/myfont.woff2') format('woff2'),  /* 首选：最小格式 */
       url('./fonts/myfont.woff')  format('woff'),   /* 备用 */
       url('./fonts/myfont.ttf')   format('truetype'); /* 兜底 */
  font-weight: normal;                   /* 字重：normal | bold | 400 | 700 */
  font-style: normal;                    /* 样式：normal | italic */
  font-display: swap;                    /* 字体加载策略（重要！）*/
}

/* 第二步：使用字体 */
body {
  font-family: 'MyCustomFont', 'PingFang SC', sans-serif;
  /* 'MyCustomFont' 加载失败时降级用 PingFang SC，再不行用无衬线字体 */
}
```

### 📁 字体格式选择

| 格式     | 兼容性     | 文件大小     | 推荐度   |
| -------- | ---------- | ------------ | -------- |
| `.woff2` | 现代浏览器 | 最小（推荐） | ⭐⭐⭐      |
| `.woff`  | IE9+       | 较小         | ⭐⭐       |
| `.ttf`   | 所有       | 较大         | ⭐        |
| `.eot`   | IE only    | 较大         | ❌ 已废弃 |

### ⚠️ font-display 加载策略（重要！）

CSS



```
@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2');

  /* font-display 控制字体加载期间的显示行为 */
  font-display: swap;     /* 推荐！先显示系统字体，字体加载完后替换 */
  font-display: block;    /* 字体加载完前不显示文字（FOIT，不推荐）*/
  font-display: fallback; /* 等待短时间，超时就用系统字体不再替换 */
  font-display: optional; /* 网速差就放弃自定义字体 */
}
```

text



```
font-display: swap 的效果：

0ms           100ms         500ms
│  加载自定义字体中...        │  加载完成  │
│  → 先显示系统字体（用户能看到内容）     │
                                     │ → 替换为自定义字体
```

### ⚠️ 注意事项清单

text



```
1. 字体版权：商业使用需购买授权（思源黑体、Noto 等是免费的）
2. 文件大小：中文字体动辄几MB，按需加载（字体子集化）
3. 跨域问题：字体文件需要配置 CORS 允许跨域
4. font-display: swap：避免文字不可见（FOIT问题）
5. 降级字体：始终提供系统字体作为备选
6. 预加载：关键字体用 preload 提前加载
```

HTML



```
<!-- 预加载字体（提升性能）-->
<link rel="preload" href="myfont.woff2" as="font" type="font/woff2" crossorigin>
```

> 📝 **一句话记忆**：`@font-face` = 网站自带字体包；优先用 woff2 格式；必须写 `font-display: swap` 防止字体加载期间文字消失。

------

## 📌 第53题：`white-space`、`word-break`、`overflow-wrap` 有什么区别？

### 🤯 三者都和文字换行有关，但控制的维度不同

> 📜 **比喻**：
>
> - `white-space` = 控制**整体换行规则**（要不要换行，空格怎么处理）
> - `word-break` = 控制**单词内部**如何断开
> - `overflow-wrap` = 控制**一个超长词**是否允许被强制截断

### 🔤 white-space —— 空白符与换行控制

CSS



```
/* normal（默认）：合并空白，自动换行 */
p { white-space: normal; }
/* "  你  好  " → "你 好"（多个空格合并为一个，自动换行）*/

/* nowrap：不换行（超出容器也不换）*/
p { white-space: nowrap; }
/* 单行文本溢出省略号的必备属性！ */

/* pre：保留所有空白和换行（像 <pre> 标签）*/
p { white-space: pre; }
/* 适合展示代码 */

/* pre-wrap：保留空白和换行，但也自动换行 */
p { white-space: pre-wrap; }
/* 适合展示用户输入内容（保留用户的换行和空格）*/

/* pre-line：合并空白，但保留换行符 */
p { white-space: pre-line; }
```

CSS



```
/* 🌰 常见应用场景 */

/* 代码展示 */
.code-block { white-space: pre; font-family: monospace; }

/* 聊天消息（保留用户输入的换行）*/
.message { white-space: pre-wrap; }

/* 强制单行（配合overflow:hidden使用）*/
.tag { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
```

### ✂️ word-break —— 单词断行规则

CSS



```
/* normal（默认）：CJK字符（中日韩）可在任意字符间断行，英文单词不断 */
p { word-break: normal; }
/* "Hello World" 不会在 Hell-o 处断开，会移到下一行整体显示 */

/* break-all：所有字符都可以在任意位置断开（包括英文单词中间）*/
p { word-break: break-all; }
/* "Hello" 可能变成 "Hell" + "o"（在单词中间断！）*/
/* 适合：有大量英文字母的中文页面，防止英文撑破容器 */

/* keep-all：CJK字符也不断行（中文整词不断）*/
p { word-break: keep-all; }
/* 中文只在标点符号处换行，不在汉字间断开 */
```

### 🔗 overflow-wrap —— 长单词强制断行

CSS



```
/* normal（默认）：如果一个单词太长，宁可溢出也不断词 */
p { overflow-wrap: normal; }

/* break-word：只有在万不得已（单词太长实在放不下）时才断词 */
p { overflow-wrap: break-word; }
/* 比 word-break:break-all 更温柔，优先尝试整词换行，实在放不下才断 */

/* anywhere：更激进，任何位置都可以断 */
p { overflow-wrap: anywhere; }
```

### 📊 三者对比与选择

text



```
问题：容器里有一个超长的 URL 或英文单词，撑破了布局

URL: https://www.verylongwebsite.com/path/to/some/deep/resource

解决方案：
overflow-wrap: break-word;  ← 首选，最温和
word-break: break-all;      ← 更激进，英文单词也从中间断
```

CSS



```
/* 🌰 实际最佳实践：防止用户输入内容撑破布局 */
.user-content {
  word-break: break-word;      /* 兼容性写法 */
  overflow-wrap: break-word;   /* 标准写法（word-wrap的新名字）*/
  white-space: pre-wrap;       /* 保留用户的换行和空格 */
}
```

> 📝 **一句话记忆**：`white-space` 控制"要不要换行/空格怎么处理"；`word-break` 控制"中英文单词在哪里断"；`overflow-wrap` 控制"超长单词实在放不下时要不要强制截断"。

------

## 📌 第54题：什么是 CSS 预处理器？Sass/Less 有哪些优势？

### 🤔 为什么需要 CSS 预处理器？

原生 CSS 有很多局限：

- 没有变量（同一颜色要写很多次）
- 没有嵌套（选择器要反复写父元素）
- 没有函数和逻辑（无法复用样式片段）

> 🏭 **比喻**：原生 CSS 就像用记事本写代码，而 Sass/Less 就像是 VS Code——更强大的工具，但最终还是生成普通的 CSS 文件交给浏览器。

### ✨ Sass 的6大核心功能

**功能1：变量（解决颜色/数值复用）**

SCSS



```
// Sass 变量用 $ 开头
$primary: #007bff;
$border-radius: 8px;
$spacing-md: 16px;

.button {
  background: $primary;
  border-radius: $border-radius;
  padding: $spacing-md;
}

// 改一处，全部更新！
```

**功能2：嵌套（减少重复书写父选择器）**

SCSS



```
// Sass 写法
.nav {
  display: flex;
  background: #333;

  ul {                      // 编译成 .nav ul
    list-style: none;
  }

  li {                      // 编译成 .nav li
    display: inline-block;
  }

  a {                       // 编译成 .nav a
    color: white;

    &:hover {               // & 代表父选择器，编译成 .nav a:hover
      color: yellow;
    }

    &.active {              // 编译成 .nav a.active
      font-weight: bold;
    }
  }
}
```

CSS



```
/* 编译后的 CSS */
.nav { display: flex; background: #333; }
.nav ul { list-style: none; }
.nav li { display: inline-block; }
.nav a { color: white; }
.nav a:hover { color: yellow; }
.nav a.active { font-weight: bold; }
```

**功能3：Mixin（可复用的样式模板/函数）**

SCSS



```
// 定义 Mixin（类似函数，可传参数）
@mixin flex-center($direction: row) {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: $direction;
}

@mixin ellipsis {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

// 使用 Mixin
.hero {
  @include flex-center;        // 水平flex居中
}

.sidebar {
  @include flex-center(column); // 垂直flex居中（传参）
}

.title {
  @include ellipsis;            // 文字溢出省略
  max-width: 200px;
}
```

**功能4：继承（extend）**

SCSS



```
// 定义基础样式
%btn-base {
  display: inline-block;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  border: none;
}

// 继承基础样式，只写差异部分
.btn-primary {
  @extend %btn-base;
  background: $primary;
  color: white;
}

.btn-secondary {
  @extend %btn-base;
  background: transparent;
  border: 1px solid $primary;
}
```

**功能5：运算**

SCSS



```
$base: 16px;

.container {
  width: 100% / 3;       // 33.33%
  margin: $base * 2;     // 32px
  font-size: $base + 2;  // 18px
  padding: $base / 2;    // 8px
}
```

**功能6：模块化 @use / @import**

SCSS



```
// _variables.scss（下划线开头=私有文件，不单独编译）
$primary: #007bff;

// _mixins.scss
@mixin flex-center { ... }

// main.scss
@use 'variables';    // 引入变量
@use 'mixins';       // 引入mixins
@use 'components/button'; // 引入组件样式

.hero {
  color: variables.$primary;
  @include mixins.flex-center;
}
```

### ⚖️ Sass vs Less 选择

| 对比      | Sass（SCSS）               | Less                |
| --------- | -------------------------- | ------------------- |
| 语法风格  | 更接近编程语言             | 更接近原生CSS       |
| 功能      | 更强大（循环、条件、函数） | 较简单              |
| 社区/生态 | 更大，Vue/React主流        | 曾经是Bootstrap选择 |
| 学习曲线  | 稍陡                       | 更平缓              |
| 推荐      | ✅ 现代项目首选             | 了解即可            |

> 📝 **一句话记忆**：预处理器 = 给 CSS 加上编程语言的超能力（变量/嵌套/函数/模块化），写完编译成普通 CSS；Sass 是现代项目首选。

------

## 📌 第55题：`pointer-events` 属性有什么作用？

### 🖱️ 什么是 pointer-events？

`pointer-events` 控制元素是否能成为**鼠标/触摸事件的目标**。

> 🕵️ **比喻**：pointer-events 就像给元素穿上"隐形衣"——
>
> - `auto`（默认）：正常人，鼠标能感知你，能点你
> - `none`：穿了隐形衣，鼠标感知不到你，直接穿透点击下面的元素

### 💻 用法详解

CSS



```
/* auto（默认）：正常响应所有鼠标事件 */
.normal { pointer-events: auto; }

/* none：完全不响应鼠标事件（点击穿透）*/
.ghost { pointer-events: none; }

/* SVG 专属值（了解即可）*/
.svg-el { pointer-events: fill; }      /* 只在填充区域响应 */
.svg-el { pointer-events: stroke; }    /* 只在描边区域响应 */
.svg-el { pointer-events: all; }       /* 填充+描边都响应 */
```

### 🎯 实际使用场景

**场景1：禁用按钮不响应鼠标（但不改变外观）**

CSS



```
.btn[disabled] {
  pointer-events: none;   /* 点击没有任何反应 */
  opacity: 0.5;
  cursor: not-allowed;    /* 注意：配合 pointer-events:none 时，cursor可能无效 */
}

/* 更好的方案：在父元素加 cursor */
.btn-wrapper[disabled] {
  cursor: not-allowed;
}
.btn-wrapper[disabled] .btn {
  pointer-events: none;
}
```

**场景2：遮罩层上的装饰元素不影响点击**

CSS



```
/* 场景：图片上有水印文字，但不影响图片的点击事件 */
.watermark {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  pointer-events: none;   /* 水印层不拦截点击，点击穿透到图片 */
  opacity: 0.3;
  user-select: none;      /* 也禁止文字选中 */
}
```

**场景3：动画期间禁止点击**

CSS



```
/* 防止动画过程中被重复点击 */
.animating {
  pointer-events: none;
  animation: slideIn 0.5s ease forwards;
}
```

**场景4：opacity:0 的元素禁止点击**

CSS



```
/* opacity:0 的元素默认还能点击，加 pointer-events:none 禁止 */
.invisible {
  opacity: 0;
  pointer-events: none;    /* 彻底不可交互 */
  transition: opacity 0.3s;
}
.invisible.show {
  opacity: 1;
  pointer-events: auto;
}
```

**场景5：自定义光标不遮挡底层点击**

CSS



```
/* 自定义鼠标跟随特效，不影响页面正常点击 */
.cursor-follower {
  position: fixed;
  pointer-events: none;  /* 鼠标跟随元素不拦截任何点击 */
  z-index: 9999;
  width: 20px; height: 20px;
  border-radius: 50%;
  background: rgba(0,0,0,0.2);
}
```

### 📊 pointer-events vs visibility:hidden vs display:none

| 方式                                | 占空间 | 可见 | 可点击 |
| ----------------------------------- | ------ | ---- | ------ |
| `display:none`                      | ❌      | ❌    | ❌      |
| `visibility:hidden`                 | ✅      | ❌    | ❌      |
| `opacity:0`                         | ✅      | ❌    | ✅ 可以 |
| `opacity:0` + `pointer-events:none` | ✅      | ❌    | ❌      |
| `pointer-events:none`（可见元素）   | ✅      | ✅    | ❌      |

> 📝 **一句话记忆**：`pointer-events: none` = 给元素穿隐形衣，视觉上还在，但鼠标感知不到它，所有点击都穿透到下面的元素。

------

## 📌 第56题：什么是 Flexbox？它解决了哪些传统布局的痛点？

### 🤔 传统布局的痛点

在 Flexbox 出现之前，前端布局是这样的：

text



```
实现垂直居中：    需要用 position + margin 负值 + 知道高度 → 极其麻烦
等高列布局：      用 table 模拟 → 语义错误
元素固定在右边：  用 float + margin → 容易坍塌
动态分配空间：    根本做不到
```

> 🧙‍♂️ **比喻**：传统布局（float/table）就像只有锤子、凿子的工匠，做什么都很费劲。Flexbox 就像电动工具，现代、高效、专为布局而生。

### ✨ Flexbox 的核心概念

text



```
┌──────────────────────────────────────────┐
│         Flex 容器 (display: flex)         │
│                                          │
│  ←─────────── 主轴 (main axis) ──────────→│
│  ↑  ┌──────┐ ┌──────┐ ┌──────┐          │
│  │  │ 子项1│ │ 子项2│ │ 子项3│          │ ↕ 交叉轴
│  │  └──────┘ └──────┘ └──────┘          │   (cross axis)
│  ↓                                       │
└──────────────────────────────────────────┘

• flex-direction: row（默认）→ 主轴水平，交叉轴垂直
• flex-direction: column     → 主轴垂直，交叉轴水平
```

### 🎯 Flexbox 解决的痛点（举例对比）

CSS



```
/* ===== 痛点1：垂直居中 =====*/

/* 传统写法（噩梦）*/
.parent {
  position: relative;
  height: 300px;
}
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* 还要知道子元素大小 */
}

/* Flexbox（一秒搞定）*/
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}


/* ===== 痛点2：等高列（无论哪列内容多，所有列等高）=====*/

/* 传统写法：需要用 table 布局或 padding 骗局 */

/* Flexbox（天然等高！）*/
.container {
  display: flex;          /* 子元素默认 align-items: stretch，自动等高 */
}
.left, .right { flex: 1; }


/* ===== 痛点3：最后一个元素靠右 =====*/

/* 传统：float:right（影响文档流，可能塌陷）*/

/* Flexbox（一行搞定）*/
.nav { display: flex; }
.nav .logo { /* 靠左 */ }
.nav .btn-login { margin-left: auto; }  /* 自动吃掉所有剩余空间，靠右！ */


/* ===== 痛点4：弹性分配空间 =====*/

/* 左边固定200px，右边占满剩余 */
.layout { display: flex; }
.sidebar { width: 200px; flex-shrink: 0; }  /* 固定不缩小 */
.main { flex: 1; }  /* 占满所有剩余空间 */
```

> 📝 **一句话记忆**：Flexbox = 一维弹性布局神器，天生解决垂直居中、等高列、剩余空间分配等传统布局的老大难问题。

------

## 📌 第57题：Flex 容器（container）上有哪些主要属性？

> 💡 **记忆方法**：Flex 容器属性分两组——主轴相关 和 交叉轴相关。

### 🔑 容器属性全览

CSS



```
.container {
  /* 第一步：声明为 Flex 容器 */
  display: flex;           /* 块级flex */
  display: inline-flex;    /* 行内flex（容器本身行内排列）*/


  /* ===== 主轴方向 =====*/
  flex-direction: row;          /* 默认：水平从左到右 → */
  flex-direction: row-reverse;  /* 水平从右到左 ← */
  flex-direction: column;       /* 垂直从上到下 ↓ */
  flex-direction: column-reverse; /* 垂直从下到上 ↑ */


  /* ===== 换行控制 =====*/
  flex-wrap: nowrap;        /* 默认：不换行（子项可能被压缩）*/
  flex-wrap: wrap;          /* 换行，第一行在上方 */
  flex-wrap: wrap-reverse;  /* 换行，第一行在下方 */


  /* ===== 简写（方向 + 换行）=====*/
  flex-flow: row nowrap;          /* 默认值 */
  flex-flow: column wrap;         /* 垂直排列+允许换行 */


  /* ===== 主轴对齐（justify-content）=====*/
  justify-content: flex-start;    /* 默认：向主轴起点聚集 */
  justify-content: flex-end;      /* 向主轴终点聚集 */
  justify-content: center;        /* 居中 */
  justify-content: space-between; /* 两端对齐，中间均分（常用！）*/
  justify-content: space-around;  /* 每个子项两侧间距相等 */
  justify-content: space-evenly;  /* 所有间距完全相等 */


  /* ===== 交叉轴对齐（单行）=====*/
  align-items: stretch;     /* 默认：拉伸填满交叉轴（等高！）*/
  align-items: flex-start;  /* 向交叉轴起点对齐 */
  align-items: flex-end;    /* 向交叉轴终点对齐 */
  align-items: center;      /* 交叉轴居中 */
  align-items: baseline;    /* 文字基线对齐 */


  /* ===== 交叉轴对齐（多行，需 flex-wrap: wrap）=====*/
  align-content: flex-start;
  align-content: flex-end;
  align-content: center;
  align-content: space-between;
  align-content: space-around;
  align-content: stretch;   /* 默认 */


  /* ===== 间距 =====*/
  gap: 16px;               /* 行列间距都是16px */
  gap: 10px 20px;          /* 行间距10px，列间距20px */
  row-gap: 10px;           /* 只设行间距 */
  column-gap: 20px;        /* 只设列间距 */
}
```

### 🖼️ 图解 justify-content

text



```
justify-content: flex-start
[A][B][C]                  （全部靠左）

justify-content: center
         [A][B][C]         （居中）

justify-content: flex-end
                  [A][B][C]（靠右）

justify-content: space-between
[A]      [B]      [C]      （两端顶格，中间均分）

justify-content: space-around
 [A]   [B]   [C]           （每个两侧间距相等，所以边缘间距是中间的一半）

justify-content: space-evenly
  [A]   [B]   [C]          （所有间距完全相等）
```

------

## 📌 第58题：Flex 子项（item）上有哪些主要属性？

CSS



```
.item {
  /* ===== flex-grow：放大比例 =====*/
  /* 当容器有剩余空间时，子项按比例分配 */
  flex-grow: 0;   /* 默认：不放大，剩余空间空着 */
  flex-grow: 1;   /* 按比例吃掉剩余空间 */

  /* 🌰 例子：三个子项 flex-grow: 1 2 1 */
  /* 剩余空间按 1:2:1 分配 */


  /* ===== flex-shrink：缩小比例 =====*/
  /* 当容器空间不足时，子项按比例收缩 */
  flex-shrink: 1;  /* 默认：按比例收缩 */
  flex-shrink: 0;  /* 不收缩（固定宽度元素用这个！）*/


  /* ===== flex-basis：主轴初始大小 =====*/
  /* 比 width/height 优先级更高 */
  flex-basis: auto;    /* 默认：由 width 或内容决定 */
  flex-basis: 200px;   /* 初始大小固定200px */
  flex-basis: 0;       /* 初始大小为0，完全由 flex-grow 决定 */
  flex-basis: 50%;     /* 占父容器50% */


  /* ===== flex：简写（最常用！）=====*/
  flex: 0 1 auto;   /* 默认值（不放大，可缩小，自动大小）*/
  flex: 1;          /* = flex: 1 1 0%（放大缩小，0为基础）*/
  flex: auto;       /* = flex: 1 1 auto */
  flex: none;       /* = flex: 0 0 auto（固定大小，不放大不缩小）*/
  flex: 200px;      /* = flex: 1 1 200px */


  /* ===== align-self：单独设置交叉轴对齐（覆盖容器的 align-items）=====*/
  align-self: auto;       /* 默认：继承容器的 align-items */
  align-self: flex-start; /* 独自靠顶部 */
  align-self: flex-end;   /* 独自靠底部 */
  align-self: center;     /* 独自居中 */
  align-self: stretch;    /* 独自拉伸 */


  /* ===== order：排列顺序 =====*/
  order: 0;    /* 默认值，越小越靠前，支持负数 */
  order: -1;   /* 排到最前面 */
  order: 1;    /* 排到后面 */
}
```

### 🌰 完整实战示例：导航栏布局

HTML



```
<nav class="navbar">
  <div class="logo">LOGO</div>
  <div class="nav-links">
    <a>首页</a><a>产品</a><a>关于</a>
  </div>
  <button class="login-btn">登录</button>
</nav>
```

CSS



```
.navbar {
  display: flex;
  align-items: center;      /* 垂直居中 */
  padding: 0 20px;
  height: 60px;
}

.logo {
  font-size: 24px;
  flex-shrink: 0;           /* logo不缩小 */
}

.nav-links {
  flex: 1;                  /* 占满中间所有空间 */
  text-align: center;
}

.login-btn {
  flex-shrink: 0;           /* 登录按钮不缩小 */
  /* 自动靠右（因为.nav-links已经 flex:1 占满了中间）*/
}
```

------

## 📌 第59题：`flex: 1` 是什么意思？

### 🔍 拆解 flex: 1

CSS



```
/* flex: 1 等价于 */
flex-grow: 1;      /* 按比例吃掉剩余空间 */
flex-shrink: 1;    /* 按比例缩小 */
flex-basis: 0%;    /* 初始大小从0开始计算 */
```

> 🍕 **比喻**：三个孩子 `flex: 1` = 把剩下的披萨**平均分成三份**，每人一份。
> 如果是 `1 2 1`，就按这个比例分：第一个孩子1份，第二个2份，第三个1份。

CSS



```
/* 🌰 三栏等宽布局 */
.container { display: flex; }
.col { flex: 1; }  /* 三列平分容器宽度 */


/* 🌰 左右固定，中间自适应 */
.container { display: flex; }
.left  { width: 200px; flex-shrink: 0; }  /* 固定200px，不缩小 */
.main  { flex: 1; }                        /* 占满中间所有空间 */
.right { width: 150px; flex-shrink: 0; }   /* 固定150px，不缩小 */


/* 🌰 flex:1 vs flex:auto 的区别 */
/* flex: 1 → flex-basis: 0%，不考虑内容大小，纯按比例分 */
/* flex: auto → flex-basis: auto，先根据内容大小分配，再按比例分剩余 */

.item-a { flex: 1; content: "短"; }     /* 按比例：1/3 */
.item-b { flex: 1; content: "很长很长的内容"; } /* 按比例：1/3 */
/* flex:1时 → 两者宽度相等（不管内容多少）*/

.item-a { flex: auto; }  /* 短内容 */
.item-b { flex: auto; }  /* 长内容 */
/* flex:auto时 → 内容多的更宽（考虑了内容初始大小）*/
```

### 📊 常用 flex 速记

CSS



```
flex: 1        /* = 1 1 0%  → 自由分配，最常用 */
flex: auto     /* = 1 1 auto → 先按内容，再分剩余 */
flex: none     /* = 0 0 auto → 固定大小，不参与分配 */
flex: 0        /* = 0 1 0%  → 不放大但可缩小 */
```

> 📝 **一句话记忆**：`flex: 1` = 告诉浏览器"把容器剩余空间按比例分给我"，三个元素都是 `flex:1` 就是三等分。

------

## 📌 第60题：`flex-direction` 有哪几种取值？

### 🧭 flex-direction 控制主轴方向

CSS



```
/* flex-direction 决定子项的排列方向 */

/* row（默认）：水平排列，从左到右 */
.container { flex-direction: row; }
/* [A][B][C]  →  */

/* row-reverse：水平排列，从右到左 */
.container { flex-direction: row-reverse; }
/* [C][B][A]  ←  */

/* column：垂直排列，从上到下 */
.container { flex-direction: column; }
/* [A]
   [B]  ↓
   [C] */

/* column-reverse：垂直排列，从下到上 */
.container { flex-direction: column-reverse; }
/* [C]
   [B]  ↑
   [A] */
```

### ⚠️ 方向改变会影响所有轴相关属性！

CSS



```
/* 重要：flex-direction 改变后，主轴和交叉轴互换！ */

/* row 时：justify-content 控制水平，align-items 控制垂直 */
.row-container {
  flex-direction: row;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
}

/* column 时：justify-content 控制垂直，align-items 控制水平 */
.col-container {
  flex-direction: column;
  justify-content: center;  /* 垂直居中 */
  align-items: center;      /* 水平居中 */
}
```

### 🎯 实际使用场景

CSS



```
/* 场景1：导航横排（默认 row）*/
.navbar {
  display: flex;
  flex-direction: row;  /* 可省略，这是默认值 */
  align-items: center;
}

/* 场景2：侧边导航竖排 */
.sidebar-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

/* 场景3：聊天消息（用 column-reverse 让新消息在下面，从下往上加载）*/
.chat-list {
  display: flex;
  flex-direction: column-reverse;  /* 新消息自动排在底部 */
  overflow-y: auto;
}

/* 场景4：响应式切换方向 */
.cards {
  display: flex;
  flex-direction: column;  /* 手机：垂直排列 */
}
@media (min-width: 768px) {
  .cards {
    flex-direction: row;   /* 平板+桌面：水平排列 */
  }
}
```

------

## 🎯 第41-60题 知识点速记卡

| 题号 | 知识点               | 一句话核心                                                   |
| ---- | -------------------- | ------------------------------------------------------------ |
| 41   | CSS变量              | `--名字: 值` 定义，`var(--名字)` 使用，JS可动态修改，主题切换神器 |
| 42   | z-index              | 需有position才生效；层叠上下文像独立楼栋，只能内部比较       |
| 43   | overflow             | `hidden`裁剪+BFC；`auto`按需滚动条；`scroll`强制滚动条       |
| 44   | line-height          | 行高=字号+上下间距；单行居中让line-height=height；推荐无单位值如1.5 |
| 45   | 文字溢出             | 单行三件套(nowrap+hidden+ellipsis)；多行用-webkit-line-clamp |
| 46   | transition/animation | transition=被动触发只有AB；animation=主动播放可有N个关键帧   |
| 47   | transform            | translate移动/rotate旋转/scale缩放/skew倾斜；不触发重排性能好 |
| 48   | CSS层叠              | 来源→权重→顺序三步裁判，后来者居上（权重相同时）             |
| 49   | 四个关键字           | inherit跟父亲；initial归零(规范)；unset智能归位；revert回浏览器默认 |
| 50   | CSS三角形            | 宽高为0+border；保留哪面就显示哪面的三角，对面border设transparent |
| 51   | 雪碧图               | 多图合一减请求；background-position定位；现代用SVG Sprite替代 |
| 52   | @font-face           | 网站自带字体；优先woff2；必写font-display:swap防文字消失     |
| 53   | 三个换行属性         | white-space控制换不换行；word-break控制哪里断词；overflow-wrap控制超长词 |
| 54   | CSS预处理器          | Sass=给CSS加变量/嵌套/函数/模块化；写完编译成普通CSS         |
| 55   | pointer-events       | none=穿隐形衣鼠标穿透；用于禁用交互/遮罩层/水印              |
| 56   | Flexbox              | 一维弹性布局；天生解决垂直居中/等高列/弹性分配空间           |
| 57   | Flex容器属性         | direction主轴方向/wrap换行/justify-content主轴/align-items交叉轴/gap间距 |
| 58   | Flex子项属性         | grow放大/shrink缩小/basis初始大小/flex简写/align-self单独对齐/order顺序 |
| 59   | flex:1               | =flex: 1 1 0%；按比例平分剩余空间；三个flex:1就是三等分      |
| 60   | flex-direction       | row(默→)/row-reverse(←)/column(↓)/column-reverse(↑)；改变主交叉轴 |

------

> 💪 **学习建议**：
>
> 1. **动手验证**：每道题的代码都打开浏览器跑一跑，眼过千遍不如手过一遍
> 2. **画图理解**：Flex 的容器属性和子项属性建议画出来，主轴/交叉轴方向要搞清楚
> 3. **联系实战**：想想你见过的网页哪些地方用了这些技术（导航栏/商品卡片/弹窗...）
> 4. **口述练习**：遮住答案，用自己的话把每个知识点说出来，说得清楚才是真理解



# 📚 HTML & CSS 面试题通俗理解学习卷（第61~80题）

> 用生活化比喻 + 代码示例，帮你真正"懂"而不是"背"

------

## 🧩 第61题：`justify-content` 和 `align-items` 有什么区别？

### 🌟 通俗解释

想象你是一个**火车站调度员**，站台上停着一列横向排列的火车车厢（Flex 子项）。

- **`justify-content`**：控制车厢在**铁轨方向（主轴）**上如何排列——是全部靠左、全部靠右、还是均匀分散？
- **`align-items`**：控制车厢在**垂直于铁轨方向（交叉轴）**上如何对齐——是靠上、靠下、还是居中？

> 🚂 记忆口诀：**justify = 主轴（横向）**，**align = 交叉轴（纵向）**

### 📐 图示理解

text



```
flex-direction: row（默认，主轴→水平）时：

justify-content 控制 ← 这个方向 →
┌────────────────────────────────┐
│  [A]    [B]    [C]             │  justify-content: flex-start
│         [A]    [B]    [C]      │  justify-content: flex-end
│     [A]    [B]    [C]          │  justify-content: center
│  [A]       [B]        [C]      │  justify-content: space-between
│    [A]     [B]     [C]         │  justify-content: space-around
└────────────────────────────────┘

align-items 控制 ↑ 这个方向 ↓
┌──────┐  ┌──────────┐  ┌────┐
│  A   │  │          │  │    │   align-items: flex-start（顶部对齐）
│      │  │    B     │  │ C  │
└──────┘  └──────────┘  └────┘

┌──────┐  ┌──────────┐  ┌────┐
│      │  │          │  │    │   align-items: flex-end（底部对齐）
│  A   │  │    B     │  │    │
└──────┘  └──────────┘  │ C  │
                        └────┘
```

### 💻 代码示例

CSS



```
.container {
  display: flex;

  /* 主轴（水平）对齐方式 */
  justify-content: center;       /* 水平居中 */
  justify-content: space-between; /* 两端对齐，中间均匀分散 */
  justify-content: space-around;  /* 每个子项两侧间距相等 */
  justify-content: space-evenly;  /* 所有间距完全相等 */
  
  /* 交叉轴（垂直）对齐方式 */
  align-items: center;    /* 垂直居中 */
  align-items: flex-start; /* 顶部对齐 */
  align-items: stretch;   /* 拉伸填满容器高度（默认值） */
  align-items: baseline;  /* 文字基线对齐 */
}
```

### 🎯 实战记忆

CSS



```
/* 最经典用法：水平垂直居中 */
.container {
  display: flex;
  justify-content: center;  /* 水平居中 */
  align-items: center;      /* 垂直居中 */
}
/* 就这两行，完美居中！以前用 float 写半天都搞不定的事 */
```

------

## 🧩 第62题：`align-content` 和 `align-items` 有什么区别？

### 🌟 通俗解释

继续用**火车站**的比喻，现在假设站台上有**多排**铁轨（多行 Flex 子项）：

- **`align-items`**：管的是**每一排**车厢内部怎么垂直对齐（单行控制）
- **`align-content`**：管的是**所有排**整体在站台上怎么分布（多行整体控制）

> ⚠️ 关键：**`align-content` 只有在 `flex-wrap: wrap` 且有多行时才生效！** 如果只有一行，`align-content` 无效！

### 📐 图示理解

text



```
flex-wrap: wrap 时，出现了多行：

align-items: center（每行内部垂直居中）：
┌────────────────────────────────┐  ← 行1
│  [A 高]  [B矮]  [C高]          │    每行内 B 居中对齐
├────────────────────────────────┤  ← 行2
│  [D]  [E]  [F]                 │    每行内元素各自居中
└────────────────────────────────┘

align-content: space-between（多行整体在容器内分布）：
┌────────────────────────────────┐
│  [A]  [B]  [C]                 │  ← 行1 靠顶部
│                                │
│                                │  ← 空白撑开
│                                │
│  [D]  [E]  [F]                 │  ← 行2 靠底部
└────────────────────────────────┘
```

### 💻 代码示例

CSS



```
.container {
  display: flex;
  flex-wrap: wrap;       /* 必须允许换行！ */
  height: 400px;         /* 容器要有足够高度才能看出效果 */
  
  /* align-content 才会生效 */
  align-content: center;          /* 所有行整体垂直居中 */
  align-content: space-between;   /* 第一行顶部，最后行底部，中间均分 */
  align-content: space-around;    /* 每行上下间距相等 */
  align-content: flex-start;      /* 所有行靠顶部 */
  align-content: flex-end;        /* 所有行靠底部 */
  align-content: stretch;         /* 拉伸填满（默认值） */
}
```

### 🎯 总结对比表

| 属性            | 控制对象                 | 生效条件                        |
| --------------- | ------------------------ | ------------------------------- |
| `align-items`   | 每一行内子项的交叉轴对齐 | 有 Flex 容器即可                |
| `align-content` | 所有行整体的交叉轴分布   | 必须 `flex-wrap: wrap` 且有多行 |

------

## 🧩 第63题：`flex-wrap` 有什么作用？默认值是什么？

### 🌟 通俗解释

想象你往**行李架**上塞行李箱：

- `flex-wrap: nowrap`（默认）：所有箱子**必须挤在同一层**，箱子会被压扁缩小
- `flex-wrap: wrap`：放不下就**换一层放**，保持箱子原来大小
- `flex-wrap: wrap-reverse`：换层放，但从**下往上**堆

### 💻 代码示例

CSS



```
.container {
  display: flex;
  flex-wrap: nowrap;      /* 默认：不换行，子项可能被压缩 */
  flex-wrap: wrap;        /* 换行，从上到下 */
  flex-wrap: wrap-reverse; /* 换行，从下到上 */
}
```

HTML



```
<!-- 实际效果对比 -->
<!-- nowrap：5个200px的盒子，容器只有600px，每个被压成120px -->
<!-- wrap：前3个在第一行，后2个换到第二行，每个保持200px -->
```

### 🎯 何时用 `wrap`？

CSS



```
/* 响应式卡片列表，屏幕窄时自动换行 */
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
}
.card {
  width: 300px;  /* 固定宽度，放不下自动换行 */
}
```

------

## 🧩 第64题：`flex-grow`、`flex-shrink`、`flex-basis` 分别代表什么？

### 🌟 通俗解释

把 Flex 容器想象成一辆**大巴车**，子项是乘客：

- **`flex-basis`**：每位乘客**"标准座位宽度"**（初始占用空间）
- **`flex-grow`**：大巴还有**剩余空位**时，乘客愿意扩展占多少（扩张系数）
- **`flex-shrink`**：大巴**超员**时，乘客愿意压缩多少（收缩系数）

### 📐 图示理解

text



```
容器宽度 = 600px
A: flex-basis: 100px, flex-grow: 1
B: flex-basis: 100px, flex-grow: 2
C: flex-basis: 100px, flex-grow: 1

已用空间 = 300px，剩余 = 300px
flex-grow 总份数 = 1+2+1 = 4
A 扩展 = 300 × (1/4) = 75px → 最终 175px
B 扩展 = 300 × (2/4) = 150px → 最终 250px
C 扩展 = 300 × (1/4) = 75px → 最终 175px

│◄─175px─►│◄──────250px──────►│◄─175px─►│
│    A     │         B          │    C     │
```

### 💻 代码示例

CSS



```
/* flex-grow：有剩余空间时如何分配 */
.item-a { flex-grow: 0; }  /* 不扩展（默认） */
.item-b { flex-grow: 1; }  /* 占1份剩余空间 */
.item-c { flex-grow: 2; }  /* 占2份剩余空间（是B的2倍宽） */

/* flex-shrink：空间不足时如何收缩 */
.item-a { flex-shrink: 1; }  /* 正常收缩（默认） */
.item-b { flex-shrink: 0; }  /* 不收缩，宽度保持不变（常用于固定侧边栏！） */
.item-c { flex-shrink: 2; }  /* 收缩更多（是A的2倍） */

/* flex-basis：初始大小 */
.item { flex-basis: auto; }   /* 由内容决定（默认） */
.item { flex-basis: 200px; }  /* 固定初始宽度 */
.item { flex-basis: 0; }      /* 初始为0，完全按 flex-grow 分配 */
```

### 🎯 最常用场景

CSS



```
/* 经典三列布局：左右固定，中间自适应 */
.left  { flex-basis: 200px; flex-shrink: 0; }  /* 固定200px，不压缩 */
.main  { flex-grow: 1; }                        /* 占满剩余空间 */
.right { flex-basis: 150px; flex-shrink: 0; }  /* 固定150px，不压缩 */
```

------

## 🧩 第65题：如何用 Flexbox 实现"圣杯布局"？

### 🌟 通俗解释

"圣杯布局"是网页中最经典的布局之一：**顶部 Header + 底部 Footer 固定，中间三列（左侧边栏固定 + 右侧边栏固定 + 中间主内容自适应）**。

就像一栋房子：**顶楼（Header）+ 底楼（Footer）固定，中间层左右是承重墙（固定宽），中间是可变的大厅（自适应）**。

### 💻 完整代码

HTML



```
<div class="holy-grail">
  <header>🏠 Header</header>
  <div class="body">
    <nav>📌 左导航（固定200px）</nav>
    <main>📄 主内容（自适应）</main>
    <aside>🗂️ 右侧栏（固定150px）</aside>
  </div>
  <footer>📋 Footer</footer>
</div>
```

CSS



```
/* 整体：垂直方向的Flex，让header/body/footer上下排列 */
.holy-grail {
  display: flex;
  flex-direction: column;
  min-height: 100vh;  /* 至少占满整个屏幕高度 */
}

header, footer {
  background: #333;
  color: white;
  padding: 20px;
}

/* 中间区域：水平方向的Flex，让三列左右排列 */
.body {
  display: flex;
  flex: 1;  /* 关键！撑满header和footer之间的所有高度 */
}

nav {
  width: 200px;
  flex-shrink: 0;  /* 固定宽度，不压缩 */
  background: #f0f0f0;
}

main {
  flex: 1;  /* 关键！占满剩余空间 */
  padding: 20px;
}

aside {
  width: 150px;
  flex-shrink: 0;  /* 固定宽度，不压缩 */
  background: #f9f9f9;
}
```

### 📐 布局结构图

text



```
┌─────────────────────────────────────┐
│           Header（固定高）           │
├──────────┬──────────────┬───────────┤
│          │              │           │
│  Nav     │    Main      │   Aside   │
│ 200px    │   flex:1     │   150px   │
│ (固定)   │  (自适应)    │  (固定)   │
│          │              │           │
├──────────┴──────────────┴───────────┤
│           Footer（固定高）           │
└─────────────────────────────────────┘
```

------

## 🧩 第66题：Flex 布局中，子元素的 `float`、`clear`、`vertical-align` 为什么会失效？

### 🌟 通俗解释

这就像**足球队换了一套全新的比赛规则**：

- 原来的规则（普通文档流）：球员（元素）可以用 `float`（踢边路）、`clear`（防守站位）
- 新规则（Flex 格式化上下文）：**所有球员只听 Flex 教练的指挥**，之前的规则全作废

具体原因：

| 属性             | 为何失效                                                     |
| ---------------- | ------------------------------------------------------------ |
| `float`          | 浮动基于文档流，Flex 子项不在普通文档流中，浮动无意义        |
| `clear`          | clear 是用来清除浮动的，浮动都没了，clear 自然无用           |
| `vertical-align` | vertical-align 只对**行内/行内块**元素有效，Flex 子项本质上是块级盒子 |

### 💻 代码验证

CSS



```
/* ❌ 在 Flex 子项上用这些属性都没效果 */
.flex-container {
  display: flex;
}

.flex-item {
  float: left;          /* ❌ 完全被忽略 */
  clear: both;          /* ❌ 完全被忽略 */
  vertical-align: middle; /* ❌ 完全被忽略 */
}

/* ✅ 正确做法：用 Flex 的方式控制对齐 */
.flex-container {
  display: flex;
  align-items: center;  /* ✅ 用这个替代 vertical-align */
}
```

### 🎯 记忆方法

> 进入 Flex 世界，就像进了**高铁专用轨道**——普通公路规则（float/clear/vertical-align）在高铁上完全不适用。

------

## 🧩 第67题：`order` 属性的作用是什么？默认值是多少？

### 🌟 通俗解释

就像给**参赛选手**编号，号码小的先出场，号码大的后出场。`order` 不改变 HTML 的实际顺序，只是改变**视觉上的显示顺序**。

> 默认值：`order: 0`（所有子项默认都是0，按 HTML 顺序排列）

### 💻 代码示例

HTML



```
<div class="container">
  <div class="item" style="order: 3">A（HTML第1个，但排第3位显示）</div>
  <div class="item" style="order: 1">B（HTML第2个，但排第1位显示）</div>
  <div class="item" style="order: 2">C（HTML第3个，但排第2位显示）</div>
</div>
```

text



```
HTML顺序：A B C
显示顺序：B C A  （因为 order: 1 < 2 < 3）
```

### 🎯 实战应用

CSS



```
/* 移动端优先：在手机上让主内容先显示，侧边栏后显示 */
@media (max-width: 768px) {
  .sidebar { order: 2; }  /* 手机上侧边栏排后面 */
  .main    { order: 1; }  /* 手机上主内容排前面 */
}

/* 支持负数，让某个元素永远排第一 */
.important-item { order: -1; }  /* 排在所有 order:0 的元素前面 */
```

------

## 🧩 第68题：如何用 Flexbox 让最后一个子元素靠右对齐？

### 🌟 通俗解释

就像**导航栏**：左边是 Logo + 菜单，右边是登录按钮。用 `margin-left: auto` 可以让最后一个元素"吸"到最右边。

原理：`margin: auto` 在 Flex 中会**吸收所有剩余空间**，把元素推到对面。

### 💻 代码示例

HTML



```
<nav class="navbar">
  <span>🏠 Logo</span>
  <a href="#">首页</a>
  <a href="#">产品</a>
  <a href="#">关于</a>
  <button class="login-btn">登录</button>  <!-- 希望这个靠右 -->
</nav>
```

CSS



```
.navbar {
  display: flex;
  align-items: center;
  gap: 20px;
}

/* 方法1：给最后一个元素加 margin-left: auto（最优雅✅）*/
.login-btn {
  margin-left: auto;  /* 吸收所有剩余空间，把按钮推到最右边 */
}
```

text



```
效果：
[Logo] [首页] [产品] [关于] ←─────────── 剩余空间 ───────────→ [登录]
```

CSS



```
/* 方法2：在需要靠右的元素前加一个弹性间隔 */
.spacer {
  flex: 1;  /* 占满剩余空间，把后面的元素推到右边 */
}
```

HTML



```
<nav class="navbar">
  <span>Logo</span>
  <a>首页</a>
  <div class="spacer"></div>  <!-- 弹性间隔 -->
  <button>登录</button>
</nav>
```

------

## 🧩 第69题：CSS Grid 布局是什么？和 Flexbox 有什么本质区别？

### 🌟 通俗解释

|              | Flexbox                   | Grid                        |
| ------------ | ------------------------- | --------------------------- |
| **比喻**     | 一排书架（只管一行/一列） | 象棋棋盘（同时管行和列）    |
| **维度**     | **一维**（主轴方向）      | **二维**（行 + 列同时控制） |
| **适合**     | 导航栏、按钮组、小组件    | 整页布局、复杂网格          |
| **控制粒度** | 以子项为主                | 以格子为主                  |

### 📐 图示对比

text



```
Flexbox（一维）：
[1] [2] [3] [4] [5]  ← 只能控制这一个方向
     ↑ 只管一条线上的排列

Grid（二维）：
[1] [2] [3]
[4] [5] [6]   ← 行和列同时精确控制
[7] [8] [9]
```

### 💻 基础使用

CSS



```
/* 开启 Grid */
.container {
  display: grid;
  
  /* 定义3列：左固定200px，中间自适应，右固定200px */
  grid-template-columns: 200px 1fr 200px;
  
  /* 定义3行：顶部80px，中间自适应，底部60px */
  grid-template-rows: 80px 1fr 60px;
  
  /* 间距 */
  gap: 16px;
  
  /* 最小高度铺满屏幕 */
  min-height: 100vh;
}
```

### 🎯 选择建议

text



```
导航栏、工具栏、flex卡片 → 用 Flexbox（一维搞定）
整页布局、仪表盘、相册网格 → 用 Grid（二维更强大）

口诀：一维用 Flex，二维用 Grid
```

------

## 🧩 第70题：`grid-template-columns`/`rows` 如何使用？`fr` 单位是什么？

### 🌟 通俗解释

把 Grid 容器想象成**切蛋糕**：

- `grid-template-columns` = 横向怎么切（切几刀，每块多宽）
- `grid-template-rows` = 纵向怎么切（切几刀，每块多高）
- `fr`（fraction = 分数/份） = "剩下的空间我要几份" — 就像分蛋糕说"我要2份，你要1份"

### 💻 代码示例

CSS



```
.grid {
  display: grid;
  
  /* 固定像素：三列都是固定宽度 */
  grid-template-columns: 200px 300px 100px;
  
  /* fr单位：平均分成3份 */
  grid-template-columns: 1fr 1fr 1fr;
  
  /* 混合：左固定，中间占剩余的2份，右占1份 */
  grid-template-columns: 200px 2fr 1fr;
  /*
     假设容器宽900px
     减去200px固定列，剩余700px
     中间 = 700 × 2/3 ≈ 467px
     右边 = 700 × 1/3 ≈ 233px
  */
  
  /* 百分比 */
  grid-template-columns: 25% 50% 25%;
  
  /* 行高定义 */
  grid-template-rows: 80px 1fr 60px;  /* 顶部80px，中间自适应，底部60px */
}
```

### 📐 fr 单位图示

text



```
容器宽度 = 900px
grid-template-columns: 1fr 2fr 1fr;

│◄──225px──►│◄────450px────►│◄──225px──►│
│    1fr    │      2fr       │    1fr    │
  (1份=225px) (2份=450px)    (1份=225px)

总份数 = 4，每份 = 900/4 = 225px
```

------

## 🧩 第71题：`gap` 属性的作用是什么？

### 🌟 通俗解释

`gap` 就是**格子之间的走道宽度**，类似于房子里走廊的宽度，让格子之间保持间距，内容不会贴在一起。

> 💡 `gap` 在 Flexbox 中也可以用！现代推荐用 `gap` 替代旧的 `margin` 方式。

### 💻 代码示例

CSS



```
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  gap: 20px;           /* 行间距和列间距都是20px（最常用）*/
  gap: 10px 20px;      /* 行间距10px，列间距20px */
  row-gap: 10px;       /* 只设行间距 */
  column-gap: 20px;    /* 只设列间距 */
}
```

text



```
gap: 20px 效果：

┌──────┐  ←20px→  ┌──────┐  ←20px→  ┌──────┐
│  1   │          │  2   │          │  3   │
└──────┘          └──────┘          └──────┘
   ↕20px
┌──────┐          ┌──────┐          ┌──────┐
│  4   │          │  5   │          │  6   │
└──────┘          └──────┘          └──────┘
```

------

## 🧩 第72题：`grid-column` 和 `grid-row` 如何控制元素跨列/跨行？

### 🌟 通俗解释

Grid 布局把容器分成了很多格子，每条**格线**都有编号（从1开始）。`grid-column` 和 `grid-row` 就是告诉浏览器：**"我这个元素从第几条线开始，到第几条线结束"**。

就像**酒店订房**：我要从1号房间到3号房间打通（跨2间）。

### 📐 网格线编号图

text



```
列线编号：  1    2    3    4
           │    │    │    │
行线 1 →  ┌────┬────┬────┐
          │ A  │ B  │ C  │
行线 2 →  ├────┼────┼────┤
          │ D  │ E  │ F  │
行线 3 →  └────┴────┴────┘
```

### 💻 代码示例

CSS



```
/* A 元素跨越第1-3列（占2个格子宽）*/
.a {
  grid-column: 1 / 3;    /* 从第1条列线到第3条列线 */
  /* 等价于 grid-column: 1 / span 2; 从第1列开始，跨2列 */
}

/* B 元素跨越第1-3行（占2个格子高）*/
.b {
  grid-row: 1 / 3;       /* 从第1条行线到第3条行线 */
}

/* 铺满整行（-1 代表最后一条线）*/
.header {
  grid-column: 1 / -1;   /* 从第1条线到最后一条线，整行 */
}

/* 跨2行2列 */
.big-card {
  grid-column: span 2;   /* 跨2列 */
  grid-row: span 2;      /* 跨2行 */
}
```

### 📐 跨列效果图示

text



```
.header { grid-column: 1 / -1 } → 占满整行
.sidebar { grid-row: 2 / 4 } → 跨2行

┌─────────────────────┐
│       Header        │ ← 占满整行
├──────┬──────────────┤
│      │    Main      │
│ Side │──────────────┤
│ bar  │    Footer    │
└──────┴──────────────┘
```

------

## 🧩 第73题：`repeat()` 和 `minmax()` 在 Grid 中如何使用？

### 🌟 通俗解释

- **`repeat()`**：避免重复写，就像"复制粘贴"——"我要3列，每列1fr" 不用写三次
- **`minmax(最小值, 最大值)`**：设置格子大小的"弹性范围"——"最小200px，最大撑满"

### 💻 代码示例

CSS



```
/* repeat() 基本用法 */
/* 不用 repeat：*/
grid-template-columns: 1fr 1fr 1fr 1fr;  /* 啰嗦 */
/* 用 repeat：*/
grid-template-columns: repeat(4, 1fr);  /* 简洁 ✅ */

/* repeat 的第一个参数可以是特殊值 */
grid-template-columns: repeat(auto-fill, 200px);
/* auto-fill：容器能放几列就放几列，每列固定200px */
/* 屏幕宽600px → 3列；屏幕宽800px → 4列（自动！）*/

/* minmax() 用法 */
grid-template-rows: minmax(100px, auto);
/* 每行最小100px高，内容多时自动撑高 */

/* 终极组合：响应式卡片（不需要媒体查询！）*/
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
/*
  解读：
  - 自动填充列数（auto-fill）
  - 每列最小200px，最大平均分配（1fr）
  - 屏幕宽时多列，屏幕窄时自动减少列数
  - 这一行代码 = 响应式布局！
*/
```

### 📐 auto-fill + minmax 效果

text



```
宽屏（1200px）：
┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐
│ 200px│ │ 200px│ │ 200px│ │ 200px│ │ 200px│
└──────┘ └──────┘ └──────┘ └──────┘ └──────┘

窄屏（500px）：
┌──────────┐ ┌──────────┐
│  250px   │ │  250px   │
└──────────┘ └──────────┘

超窄（250px）：
┌──────────────┐
│    250px     │
└──────────────┘
```

------

## 🧩 第74题：什么是隐式网格？`grid-auto-rows` 有什么作用？

### 🌟 通俗解释

你只定义了3行，但往里放了10个元素。多出来的元素去哪了？浏览器会**自动创建额外的行**——这些自动创建的行就叫**隐式网格行**。

`grid-auto-rows` 就是**预设这些"临时工行"的高度**，不然浏览器会默认给很小的高度。

### 💻 代码示例

CSS



```
.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);  /* 定义3列 */
  grid-template-rows: 100px 100px;        /* 只定义了2行 */
  /* 当内容超过2行时，浏览器自动创建第3、4...行 */
  grid-auto-rows: 150px;    /* 所有自动创建的行高度都是150px */
  grid-auto-rows: minmax(100px, auto); /* 最小100px，内容多时自动撑高（更好！）*/
  
  /* 还可以控制自动放置方向 */
  grid-auto-flow: row;     /* 默认，先填满行再换下一行 */
  grid-auto-flow: column;  /* 先填满列再换下一列 */
  grid-auto-flow: dense;   /* 密集模式，填补空格（适合瀑布流）*/
}
```

text



```
grid-template 定义了前6个格子：
┌────┐ ┌────┐ ┌────┐
│ 1  │ │ 2  │ │ 3  │  ← 显式行1（100px）
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ 4  │ │ 5  │ │ 6  │  ← 显式行2（100px）
└────┘ └────┘ └────┘
┌────┐ ┌────┐ ┌────┐
│ 7  │ │ 8  │ │ 9  │  ← 隐式行3（grid-auto-rows: 150px）
└────┘ └────┘ └────┘
```

------

## 🧩 第75题：如何用 Grid 实现自适应多列卡片布局（不使用媒体查询）？

### 🌟 通俗解释

传统响应式需要写很多媒体查询："手机1列、平板2列、电脑4列"。 用 Grid 的 **`auto-fill` + `minmax`** 黄金组合，**一行代码搞定所有屏幕**！

### 💻 完整代码

HTML



```
<div class="card-grid">
  <div class="card">卡片1</div>
  <div class="card">卡片2</div>
  <div class="card">卡片3</div>
  <div class="card">卡片4</div>
  <div class="card">卡片5</div>
  <div class="card">卡片6</div>
</div>
```

CSS



```
.card-grid {
  display: grid;
  /* ✨ 魔法一行 */
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
  padding: 16px;
}

.card {
  background: white;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  /* 不需要设置任何宽度！Grid 自动分配 */
}
```

### 📐 各屏幕下效果

text



```
手机（320px）：  1列，每列320px
│──────────────│

平板（768px）：  3列，每列≈244px
│───────│───────│───────│

桌面（1200px）： 4列，每列≈285px
│──────│──────│──────│──────│

宽屏（1600px）： 6列，每列≈250px
│────│────│────│────│────│────│
```

------

## 🧩 第76题：CSS3 新增了哪些主要特性？

### 🌟 通俗解释

CSS3 就像给 CSS 升级了**豪华装备包**，以前要用 JS 或图片实现的效果，现在纯 CSS 就能搞定！

### 🎁 CSS3 新特性全景图

text



```
CSS3 新特性

视觉效果类：
  ├── border-radius      → 圆角（不需要切图了！）
  ├── box-shadow         → 阴影
  ├── text-shadow        → 文字阴影
  ├── gradient           → 渐变背景
  ├── opacity            → 透明度
  ├── filter             → 滤镜（模糊、灰度等）
  └── mix-blend-mode     → 混合模式（PS效果）

动画类：
  ├── transition         → 过渡动画
  ├── animation          → 关键帧动画
  └── transform          → 2D/3D变换

布局类：
  ├── Flexbox            → 弹性布局
  ├── Grid               → 网格布局
  └── multi-column       → 多列布局

响应式类：
  └── @media             → 媒体查询

字体类：
  └── @font-face         → 自定义字体

其他：
  ├── CSS变量 var()      → 动态变量
  ├── calc()             → 计算值
  ├── clip-path          → 裁剪路径
  └── will-change        → 性能优化提示
```

### 💻 快速体验

CSS



```
/* 以前：需要切图才有圆角 */
.old { background: url(round-corner.png); }

/* CSS3：一行搞定 */
.new { border-radius: 8px; }

/* 以前：渐变背景要用图片 */
.old-bg { background: url(gradient.jpg); }

/* CSS3：动态生成 */
.new-bg { background: linear-gradient(135deg, #667eea, #764ba2); }
```

------

## 🧩 第77题：`border-radius` 如何实现圆形和椭圆形？

### 🌟 通俗解释

`border-radius` 就是**打磨元素的四个角**，打磨越多，角越圆。

- 设成 `50%`：正方形 → 圆形；长方形 → 椭圆形
- 设成超大值（如 `9999px`）：长方形 → 胶囊形

### 💻 代码示例

CSS



```
/* 圆形 = 宽高相等 + border-radius: 50% */
.circle {
  width: 100px;
  height: 100px;   /* 必须和宽度相等 */
  border-radius: 50%;
  background: tomato;
}

/* 椭圆 = 宽高不等 + border-radius: 50% */
.ellipse {
  width: 200px;
  height: 100px;
  border-radius: 50%;  /* 宽高不等时自动变椭圆 */
  background: skyblue;
}

/* 胶囊形 */
.pill {
  width: 200px;
  height: 50px;
  border-radius: 9999px;  /* 足够大的值，两端半圆 */
  background: mediumseagreen;
}

/* 单独设置每个角 */
.custom {
  border-radius: 10px 20px 30px 40px;
  /* 顺序：左上 右上 右下 左下 */
}

/* 高级：椭圆角（水平半径/垂直半径）*/
.leaf {
  border-radius: 0 100% 0 100%;  /* 叶子形状 */
}
```

------

## 🧩 第78题：`box-shadow` 和 `text-shadow` 的语法是什么？

### 🌟 通俗解释

两个属性都是给元素加**阴影效果**，就像灯光照在物体上产生的影子：

- `box-shadow`：给整个**盒子**加阴影（含边框和内容区域）
- `text-shadow`：给**文字**加阴影

参数记忆口诀：**"右 下 模糊 扩散 颜色"**（box-shadow 比 text-shadow 多一个扩散半径）

### 💻 语法详解

CSS



```
/* box-shadow 完整语法 */
/* box-shadow: 水平偏移 垂直偏移 模糊半径 扩散半径 颜色 inset */
/*            （正=右）（正=下）（越大越模糊）（正=向外扩）       （内阴影）*/

/* 最常用：卡片阴影 */
.card {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  /*          ↑   ↑    ↑        ↑
           水平  向下  模糊   半透明黑色  */
}

/* 向右偏移 */
.right-shadow { box-shadow: 10px 0 10px rgba(0,0,0,0.2); }

/* 内阴影（inset，像凹进去的效果）*/
.inner { box-shadow: inset 0 2px 4px rgba(0,0,0,0.2); }

/* 多个阴影叠加（用逗号分隔）*/
.multi {
  box-shadow:
    0 2px 4px rgba(0,0,0,0.1),   /* 近距离小阴影 */
    0 8px 24px rgba(0,0,0,0.08); /* 远距离大阴影（更自然）*/
}

/* text-shadow 语法（比box-shadow少一个扩散半径）*/
/* text-shadow: 水平偏移 垂直偏移 模糊半径 颜色 */

.title {
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

/* 发光文字效果 */
.glow {
  color: white;
  text-shadow:
    0 0 10px rgba(255,255,255,0.8),
    0 0 20px rgba(255,255,255,0.4);
}

/* 文字描边效果（四个方向各一个阴影）*/
.stroke {
  text-shadow:
    1px 1px 0 black,
   -1px 1px 0 black,
    1px -1px 0 black,
   -1px -1px 0 black;
}
```

------

## 🧩 第79题：CSS3 渐变有哪几种？如何使用？

### 🌟 通俗解释

CSS 渐变就像**调颜料**，让颜色平滑地从一种过渡到另一种，无需任何图片！

- **线性渐变（linear-gradient）**：颜色沿直线方向渐变，像**日落彩霞**
- **径向渐变（radial-gradient）**：颜色从中心向外扩散，像**聚光灯**
- **锥形渐变（conic-gradient）**：颜色沿角度旋转，像**饼图**

### 💻 代码示例

CSS



```
/* ── 线性渐变 ── */

/* 从上到下（默认）*/
.gradient-1 {
  background: linear-gradient(red, blue);
}

/* 从左到右 */
.gradient-2 {
  background: linear-gradient(to right, red, blue);
}

/* 角度渐变（135度 = 左上到右下）*/
.gradient-3 {
  background: linear-gradient(135deg, #f093fb, #f5576c);
}

/* 多色渐变（彩虹）*/
.rainbow {
  background: linear-gradient(
    to right,
    red, orange, yellow, green, blue, indigo, violet
  );
}

/* 控制色标位置（0%处红，30%处还是红，100%处蓝 → 大部分是红色）*/
.custom {
  background: linear-gradient(to right, red 30%, blue 100%);
}

/* ── 径向渐变 ── */

/* 从中心向外（默认）*/
.radial-1 {
  background: radial-gradient(circle, yellow, orange, red);
}

/* 椭圆渐变 */
.radial-2 {
  background: radial-gradient(ellipse, #fff 0%, #000 100%);
}

/* 改变中心点位置 */
.radial-3 {
  background: radial-gradient(circle at top left, yellow, blue);
}

/* ── 锥形渐变（现代浏览器）── */

/* 饼图效果 */
.pie {
  border-radius: 50%;
  background: conic-gradient(
    red 0% 25%,
    blue 25% 50%,
    green 50% 75%,
    yellow 75% 100%
  );
}

/* ── 重复渐变（条纹效果）── */

/* 斜条纹 */
.stripes {
  background: repeating-linear-gradient(
    45deg,
    #f00,
    #f00 10px,   /* 红色10px */
    #fff 10px,
    #fff 20px    /* 白色10px */
  );
}
```

### 🎨 常用渐变代码（直接复用）

CSS



```
/* 蓝紫渐变（最流行）*/
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

/* 橙红渐变 */
background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);

/* 绿色渐变 */
background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);

/* 黑色蒙层（常用于图片文字叠加）*/
background: linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 100%);
```

------

## 🧩 第80题：`transition` 完整语法是什么？`timing-function` 有哪些取值？

### 🌟 通俗解释

`transition` 就是给 CSS 属性变化加上**"慢动作回放"**——没有它，属性变化是瞬间的"闪变"；有了它，变化会平滑过渡。

就像开关灯：

- 没有 transition：**啪**，立刻亮 / 立刻灭
- 有 transition：灯光慢慢变亮 / 慢慢变暗

### 💻 完整语法

CSS



```
/* transition: 属性名  持续时间  速度曲线  延迟时间 */
/*              ↓        ↓        ↓         ↓        */
.btn { transition: background 0.3s  ease    0s; }

/* 监听所有属性变化 */
.box { transition: all 0.3s ease; }

/* 分别给不同属性设置不同的过渡 */
.card {
  transition:
    transform  0.3s  ease-out  0s,    /* 位移动画 */
    box-shadow 0.3s  ease      0s,    /* 阴影动画 */
    opacity    0.2s  linear    0.1s;  /* 透明度（延迟0.1s开始）*/
}

/* 实战：悬浮卡片效果 */
.hover-card {
  transform: translateY(0);
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}
.hover-card:hover {
  transform: translateY(-8px);           /* 上移8px */
  box-shadow: 0 12px 30px rgba(0,0,0,0.2); /* 阴影加深 */
}
```

### 🎢 timing-function 速度曲线详解

CSS



```
/* timing-function 常用值 */

transition-timing-function: ease;        /* 默认：慢→快→慢（最自然）*/
transition-timing-function: linear;      /* 匀速（像机器人，不自然）*/
transition-timing-function: ease-in;     /* 慢→快（加速冲入）*/
transition-timing-function: ease-out;    /* 快→慢（减速停止，最常用！）*/
transition-timing-function: ease-in-out; /* 慢→快→慢（对称）*/
transition-timing-function: step-start;  /* 瞬间跳到结束状态 */
transition-timing-function: steps(4);    /* 分4步跳跃（帧动画效果）*/

/* 自定义贝塞尔曲线（可在 cubic-bezier.com 可视化调节）*/
transition-timing-function: cubic-bezier(0.34, 1.56, 0.64, 1); /* 弹跳效果 */
```

### 📊 速度曲线可视化

text



```
时间 →

linear（匀速）：
速度 |━━━━━━━━━━━━━━━|
     0              1

ease（默认）：
速度 |  ╭──────╮     |
     0              1  先加速后减速

ease-in（加速）：
速度 |        ╭──────|
     0              1  越来越快

ease-out（减速）：★ 最推荐，最像真实世界物理规律
速度 |──────╮        |
     0              1  越来越慢
```

### 🎯 完整悬浮按钮实战

CSS



```
/* 完整的按钮过渡效果示例 */
.btn {
  background: #007bff;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  /* 注意：不要用 all，指定具体属性更高效 */
  transition:
    background-color 0.2s ease-out,
    transform        0.2s ease-out,
    box-shadow       0.2s ease-out;
}

.btn:hover {
  background-color: #0056b3;    /* 颜色加深 */
  transform: translateY(-2px);  /* 微微上浮 */
  box-shadow: 0 6px 16px rgba(0, 123, 255, 0.4); /* 发光阴影 */
}

.btn:active {
  transform: translateY(0);     /* 按下去恢复 */
  box-shadow: none;
}
```

------

## 📋 第61~80题 核心知识点速查表

| 题号 | 考点                           | 一句话记忆                            |
| ---- | ------------------------------ | ------------------------------------- |
| 61   | justify-content vs align-items | justify=主轴，align=交叉轴            |
| 62   | align-content vs align-items   | content管多行整体，items管单行内部    |
| 63   | flex-wrap                      | 子项放不下时要不要换行                |
| 64   | grow/shrink/basis              | 扩张比例 / 收缩比例 / 初始大小        |
| 65   | 圣杯布局                       | 两层Flex嵌套，中间flex:1              |
| 66   | float等失效                    | Flex上下文中没有浮动                  |
| 67   | order                          | 改变视觉顺序，不改DOM                 |
| 68   | 最后元素靠右                   | margin-left: auto吸收剩余空间         |
| 69   | Grid vs Flexbox                | Flex=一维，Grid=二维                  |
| 70   | fr单位                         | 剩余空间按份数分配                    |
| 71   | gap                            | 格子之间的间距                        |
| 72   | grid-column/row                | 从第几条线到第几条线                  |
| 73   | repeat+minmax                  | auto-fill+minmax=响应式神器           |
| 74   | 隐式网格                       | 超出定义的格子自动创建                |
| 75   | 自适应卡片                     | repeat(auto-fill, minmax(240px,1fr))  |
| 76   | CSS3新特性                     | 圆角/阴影/渐变/动画/Flex/Grid等       |
| 77   | border-radius                  | 50%=圆/椭圆，9999px=胶囊              |
| 78   | box/text-shadow                | "右下模糊扩散颜色"，inset=内阴影      |
| 79   | gradient渐变                   | linear直线/radial圆形/conic锥形       |
| 80   | transition过渡                 | "属性 时长 曲线 延迟"，ease-out最自然 |

------

> 💡 **学习建议**：这20道题涵盖了 Flexbox（61-68）、Grid（69-75）和 CSS3 核心视觉特性（76-80），建议在浏览器 DevTools 中边改代码边看效果，理解会快10倍！



# 📚 HTML & CSS 面试题通俗理解学习卷（第81~90题）

> 用生活化比喻 + 代码示例，帮你真正"懂"而不是"背"

------

## 🧩 第81题：CSS3 动画 `@keyframes` + `animation` 如何定义和使用？

### 🌟 通俗解释

`transition` 是**两点之间的平滑过渡**（只有起点和终点）。

`animation` 是一段**完整的剧本**——你可以定义第0帧、第30帧、第60帧……每一帧的状态，像画**逐帧动画**一样。

> 🎬 类比：
>
> - `transition` = 电灯开关（只有开和关两个状态之间的过渡）
> - `animation` = 电影（可以有无数个画面，循环播放，还能倒放）

### 📋 两步走：先定义剧本，再表演

#### 第一步：用 `@keyframes` 写"剧本"

CSS



```
/* 语法：@keyframes 动画名称 { 关键帧 } */

/* 写法1：用 from / to（只有两帧，等同于 0% / 100%）*/
@keyframes fadeIn {
  from { opacity: 0; }
  to   { opacity: 1; }
}

/* 写法2：用百分比（可以定义任意多帧）*/
@keyframes bounce {
  0%   { transform: translateY(0);    }   /* 起始：原位 */
  30%  { transform: translateY(-40px); }  /* 30%时：弹起 */
  60%  { transform: translateY(-20px); }  /* 60%时：再弹小一点 */
  80%  { transform: translateY(-10px); }  /* 80%时：更小 */
  100% { transform: translateY(0);    }   /* 结束：回原位 */
}

/* 多属性同时变化 */
@keyframes slideInLeft {
  0% {
    transform: translateX(-100%);
    opacity: 0;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}
```

#### 第二步：用 `animation` 属性"开演"

CSS



```
/* 完整语法（8个子属性）*/
.box {
  animation-name:            bounce;      /* 1. 动画名称（对应@keyframes名） */
  animation-duration:        1s;          /* 2. 持续时间（必须设置！）*/
  animation-timing-function: ease;        /* 3. 速度曲线 */
  animation-delay:           0.2s;        /* 4. 延迟多久开始 */
  animation-iteration-count: infinite;    /* 5. 播放次数（infinite=无限循环）*/
  animation-direction:       normal;      /* 6. 播放方向 */
  animation-fill-mode:       forwards;    /* 7. 动画结束后的状态 */
  animation-play-state:      running;     /* 8. 播放/暂停 */
}

/* 简写（推荐）: name duration timing-function delay iteration-count direction fill-mode */
.box {
  animation: bounce 1s ease 0.2s infinite normal forwards;
}
```

### 🔍 8个子属性逐一详解

CSS



```
/* ① animation-name：动画名称 */
animation-name: bounce;      /* 对应 @keyframes bounce */
animation-name: none;        /* 不播放动画（可用来停止）*/

/* ② animation-duration：持续时间 */
animation-duration: 0.5s;    /* 0.5秒 */
animation-duration: 2000ms;  /* 2000毫秒 = 2秒 */
/* ⚠️ 默认值是0s，不设置就看不到动画！*/

/* ③ animation-timing-function：速度曲线（同transition）*/
animation-timing-function: ease;        /* 默认：先快后慢 */
animation-timing-function: linear;      /* 匀速 */
animation-timing-function: ease-in-out; /* 两端慢中间快 */
animation-timing-function: steps(4);    /* 分4步跳跃（帧动画！）*/

/* ④ animation-delay：延迟时间 */
animation-delay: 0s;     /* 默认：立即开始 */
animation-delay: 1s;     /* 1秒后开始 */
animation-delay: -1s;    /* ⭐ 负值！动画直接从第1秒处开始（跳过开头）*/

/* ⑤ animation-iteration-count：播放次数 */
animation-iteration-count: 1;        /* 默认：播放1次 */
animation-iteration-count: 3;        /* 播放3次 */
animation-iteration-count: infinite; /* ♾️ 无限循环 */

/* ⑥ animation-direction：播放方向 */
animation-direction: normal;            /* 默认：正向播放 0%→100% */
animation-direction: reverse;           /* 反向播放 100%→0% */
animation-direction: alternate;         /* 正→反→正→反（来回播放）*/
animation-direction: alternate-reverse; /* 反→正→反→正 */

/* ⑦ animation-fill-mode：动画结束后的状态 */
animation-fill-mode: none;      /* 默认：动画结束回到原始状态 */
animation-fill-mode: forwards;  /* ⭐ 保持最后一帧的状态（最常用！）*/
animation-fill-mode: backwards; /* 动画未开始时就应用第一帧 */
animation-fill-mode: both;      /* forwards + backwards 都应用 */

/* ⑧ animation-play-state：播放/暂停 */
animation-play-state: running;  /* 播放（默认）*/
animation-play-state: paused;   /* 暂停（可用JS控制）*/
```

### 💻 实战案例

#### 案例1：页面进入淡入动画

CSS



```
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px); /* 从下方30px处开始 */
  }
  to {
    opacity: 1;
    transform: translateY(0);    /* 移到原位 */
  }
}

.page-content {
  animation: fadeInUp 0.6s ease-out forwards;
  /* 0.6秒内从下方淡入，结束后保持最终状态 */
}
```

#### 案例2：无限旋转 Loading

CSS



```
@keyframes spin {
  from { transform: rotate(0deg); }
  to   { transform: rotate(360deg); }
}

.loading-icon {
  animation: spin 1s linear infinite;
  /* linear 保证匀速旋转，infinite 无限循环 */
}
```

#### 案例3：心跳效果（多帧）

CSS



```
@keyframes heartbeat {
  0%   { transform: scale(1); }
  14%  { transform: scale(1.3); }
  28%  { transform: scale(1); }
  42%  { transform: scale(1.3); }
  70%  { transform: scale(1); }
  100% { transform: scale(1); }
}

.heart {
  animation: heartbeat 1.5s ease-in-out infinite;
}
```

#### 案例4：逐帧动画（雪碧图切换）

CSS



```
/* steps() 实现逐帧：像翻页书一样 */
@keyframes sprite-walk {
  from { background-position: 0 0; }
  to   { background-position: -800px 0; } /* 8帧，每帧100px */
}

.character {
  width: 100px;
  height: 100px;
  background: url('sprite.png');
  animation: sprite-walk 0.8s steps(8) infinite;
  /* steps(8) = 分8步跳跃，不平滑过渡，完美模拟逐帧！*/
}
```

#### 案例5：JS 控制动画暂停/播放

JavaScript



```
// 鼠标悬停时暂停动画
const ball = document.querySelector('.ball');
ball.addEventListener('mouseenter', () => {
  ball.style.animationPlayState = 'paused';
});
ball.addEventListener('mouseleave', () => {
  ball.style.animationPlayState = 'running';
});
```

### 🎯 animation vs transition 对比

| 对比项     | transition              | animation                 |
| ---------- | ----------------------- | ------------------------- |
| 触发方式   | 需要状态变化（hover等） | 自动播放，无需触发        |
| 关键帧数量 | 只有起点和终点          | 可定义任意多帧            |
| 循环播放   | ❌ 不支持                | ✅ 支持                    |
| 控制粒度   | 较少                    | 非常丰富（8个子属性）     |
| 使用场景   | 按钮hover、菜单展开     | loading、走马灯、页面动效 |

------

## 🧩 第82题：CSS3 滤镜 `filter` 属性有哪些常见函数？

### 🌟 通俗解释

`filter` 就是给元素套上各种**Instagram 滤镜**——模糊、变灰、调亮度、加对比度……纯 CSS 实现 PS 效果！

> 📷 以前：这些效果只能靠 PS 处理图片后再导出 现在：CSS 一行代码，实时动态效果！

### 💻 所有常用滤镜函数

CSS



```
img {
  /* 1. blur - 高斯模糊（单位：px，数值越大越模糊）*/
  filter: blur(4px);
  /* 应用场景：背景虚化、毛玻璃效果 */

  /* 2. brightness - 亮度（1=原始，>1变亮，<1变暗，0=纯黑）*/
  filter: brightness(1.5);   /* 亮50% */
  filter: brightness(0.7);   /* 暗30% */
  filter: brightness(0);     /* 全黑 */

  /* 3. contrast - 对比度（1=原始，>1对比更强烈，0=全灰）*/
  filter: contrast(200%);   /* 对比度翻倍 */
  filter: contrast(0.5);    /* 对比度减半（朦胧感）*/

  /* 4. grayscale - 灰度（0=彩色，100%=完全黑白）*/
  filter: grayscale(100%);  /* 黑白老照片效果 */
  filter: grayscale(50%);   /* 半灰效果 */

  /* 5. sepia - 复古棕褐色调（0=无，100%=完全复古）*/
  filter: sepia(80%);       /* 复古照片效果 */

  /* 6. hue-rotate - 色相旋转（0deg=原色，360deg转一圈回来）*/
  filter: hue-rotate(90deg);   /* 颜色偏转90度 */
  filter: hue-rotate(180deg);  /* 颜色偏转180度（互补色）*/

  /* 7. invert - 颜色反转（0=原色，100%=完全反色，像底片）*/
  filter: invert(100%);    /* 相片底片效果 */

  /* 8. opacity - 透明度（同 CSS opacity 属性）*/
  filter: opacity(50%);    /* 50%透明度 */

  /* 9. saturate - 饱和度（1=原始，>1更鲜艳，<1更灰淡）*/
  filter: saturate(300%);  /* 颜色超鲜艳 */
  filter: saturate(0%);    /* 等同 grayscale(100%) */

  /* 10. drop-shadow - 投影（类似 box-shadow，但更强大！）*/
  filter: drop-shadow(4px 4px 8px rgba(0,0,0,0.3));
  /* ⭐ 与 box-shadow 的区别：
     box-shadow = 给矩形盒子加阴影（忽略透明区域）
     drop-shadow = 给元素实际形状加阴影（含透明PNG的真实轮廓！）*/
}
```

### 🔗 多个滤镜叠加使用

CSS



```
/* 多个滤镜用空格分隔，按顺序叠加 */
.instagram-filter {
  filter: brightness(1.1) contrast(1.2) saturate(1.3) sepia(20%);
  /* 亮一点 + 对比强一点 + 更鲜艳 + 微复古 = 网红滤镜！*/
}

/* 黑白老照片 */
.old-photo {
  filter: grayscale(100%) sepia(30%) contrast(1.1);
}

/* 夜间模式图片处理 */
.night-mode img {
  filter: brightness(0.8) contrast(0.9);
}
```

### 🎯 实战场景

CSS



```
/* 场景1：图片悬停时去掉灰度（相册常见效果）*/
.album-img {
  filter: grayscale(100%);
  transition: filter 0.3s ease;
}
.album-img:hover {
  filter: grayscale(0%);  /* hover 时恢复彩色 */
}

/* 场景2：毛玻璃背景（Frosted Glass）*/
.glass-card {
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);  /* 注意：毛玻璃用 backdrop-filter，不是 filter！*/
  /* backdrop-filter 对背景内容生效 */
  /* filter 对元素本身及其子元素生效 */
}

/* 场景3：禁用状态的按钮 */
.btn:disabled {
  filter: grayscale(100%) opacity(0.6);
  cursor: not-allowed;
}

/* 场景4：drop-shadow 对 PNG 图标的真实投影 */
.icon-png {
  filter: drop-shadow(2px 4px 6px rgba(0,0,0,0.3));
  /* 阴影贴合PNG的真实形状，不是矩形！*/
}
```

### ⚠️ filter vs backdrop-filter 区别

|          | `filter`                   | `backdrop-filter`    |
| -------- | -------------------------- | -------------------- |
| 作用对象 | 元素自身及其内容           | 元素背后的内容       |
| 常见场景 | 图片滤镜、禁用效果         | 毛玻璃卡片、模糊背景 |
| 支持函数 | 相同（blur、brightness等） | 相同                 |

------

## 🧩 第83题：`clip-path` 属性的作用是什么？能实现哪些形状？

### 🌟 通俗解释

`clip-path` 就是给元素用**剪刀裁剪**——裁剪区域外的部分完全不可见（就像用模具切饼干）。

> ✂️ 以前：想要不规则形状的图片，必须用 PS 裁剪好再导出 现在：CSS 一行代码，想切成什么形状就切什么！

### 💻 所有常用形状

#### 1️⃣ 圆形 `circle()`

CSS



```
.avatar {
  width: 200px;
  height: 200px;
  /* circle(半径 at 圆心x 圆心y) */
  clip-path: circle(50%);           /* 以元素中心为圆心，半径50% */
  clip-path: circle(80px at center); /* 半径80px */
  clip-path: circle(50% at 30% 50%); /* 圆心偏左 */
}
```

#### 2️⃣ 椭圆 `ellipse()`

CSS



```
.ellipse {
  /* ellipse(水平半径 垂直半径 at 圆心x 圆心y) */
  clip-path: ellipse(50% 30% at 50% 50%);
  clip-path: ellipse(80px 50px at center);
}
```

#### 3️⃣ 多边形 `polygon()` ⭐ 最强大

CSS



```
/* polygon(x1 y1, x2 y2, x3 y3, ...) 每个点的坐标 */

/* 三角形 */
.triangle {
  clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  /*         顶部中间  左下角       右下角       */
}

/* 平行四边形 */
.parallelogram {
  clip-path: polygon(20% 0%, 100% 0%, 80% 100%, 0% 100%);
}

/* 五边形 */
.pentagon {
  clip-path: polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%);
}

/* 六边形 */
.hexagon {
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* 箭头形状 */
.arrow {
  clip-path: polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%);
}

/* 对话气泡 */
.bubble {
  clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}

/* 星形 */
.star {
  clip-path: polygon(
    50% 0%, 61% 35%, 98% 35%, 68% 57%,
    79% 91%, 50% 70%, 21% 91%, 32% 57%,
    2% 35%, 39% 35%
  );
}
```

#### 4️⃣ 内矩形 `inset()` —— 带圆角的矩形裁剪

CSS



```
/* inset(上 右 下 左 round 圆角) */
.card {
  clip-path: inset(10px);                    /* 四边各缩进10px */
  clip-path: inset(10px 20px 30px 40px);    /* 分别设置四边 */
  clip-path: inset(10px round 20px);         /* 缩进10px，圆角20px */
  clip-path: inset(0 0 50% 0);              /* 只显示上半部分 */
}
```

#### 5️⃣ SVG路径 `path()` —— 任意复杂形状

CSS



```
/* 可以画出任何复杂形状，但需要 SVG 路径数据 */
.custom {
  clip-path: path('M10 80 Q 52.5 10, 95 80 T 180 80');
  /* 贝塞尔曲线路径，通常由设计工具导出 */
}
```

### 🎯 实战案例

CSS



```
/* 案例1：斜切的 Hero 区块（常见官网效果）*/
.hero-section {
  background: linear-gradient(135deg, #667eea, #764ba2);
  clip-path: polygon(0 0, 100% 0, 100% 85%, 0 100%);
  /* 底部右边高，左边低，形成斜切效果 */
}

/* 案例2：悬浮时形状变化动画 */
.hover-shape {
  clip-path: circle(50%);
  transition: clip-path 0.4s ease;
}
.hover-shape:hover {
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  /* 圆形 → 方形 的平滑过渡！*/
}

/* 案例3：图片裁剪成六边形头像 */
.hex-avatar {
  width: 120px;
  height: 120px;
  clip-path: polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%);
}

/* 案例4：对角线分割的背景 */
.diagonal-bg {
  background: #007bff;
  clip-path: polygon(0 0, 100% 0, 100% 70%, 0 100%);
}
```

### 💡 推荐工具

> 🛠️ **Clippy（在线工具）**：`bennettfeely.com/clippy` 可视化拖拽生成 clip-path 代码，非常好用！

------

## 🧩 第84题：CSS3 多列布局如何使用？

### 🌟 通俗解释

CSS 多列布局就像**报纸/杂志排版**——把长文本内容自动分成多列显示，不需要手动切割文字。

> 📰 以前：要实现多列文字，只能手动把文章切成几段，分别放进不同 `<div>` 里 现在：CSS 几行代码，内容自动流入多列！

### 💻 核心属性详解

CSS



```
.article {
  /* 1. column-count：指定列数（浏览器自动计算列宽）*/
  column-count: 3;     /* 分成3列 */
  column-count: auto;  /* 根据 column-width 自动计算 */

  /* 2. column-width：指定每列最小宽度（浏览器自动计算列数）*/
  column-width: 200px;   /* 每列最小200px，浏览器按容器宽度算几列 */
  /* 容器600px → 3列；容器800px → 4列（自动响应！）*/

  /* 3. columns：简写（column-width + column-count）*/
  columns: 3;           /* 等同 column-count: 3 */
  columns: 200px;       /* 等同 column-width: 200px */
  columns: 200px 3;     /* column-width: 200px，column-count: 3 */

  /* 4. column-gap：列间距 */
  column-gap: 20px;     /* 列与列之间的空白宽度 */
  column-gap: normal;   /* 默认值：通常是 1em */

  /* 5. column-rule：列分隔线（类似 border 的写法）*/
  column-rule: 1px solid #ddd;       /* 宽度 样式 颜色 */
  column-rule-width: 2px;
  column-rule-style: dashed;         /* solid / dashed / dotted 等 */
  column-rule-color: #ccc;
}
```

### 📐 图示理解

text



```
不使用多列（单列）：
┌────────────────────────────────────┐
│ 这是一段很长很长的文字，在宽屏下   │
│ 显示非常宽，每行太长，不易阅读，   │
│ 适合分成多列来展示。               │
└────────────────────────────────────┘

使用 column-count: 3（三列）：
┌──────────┬──────────┬──────────┐
│ 这是一段 │ 字，在宽 │ 易阅读， │
│ 很长很长 │ 屏下显示 │ 适合分成 │
│ 的文     │ 非常     │ 多列来   │
│          │ 宽...    │ 展示。   │
└──────────┴──────────┴──────────┘
     列1        列2        列3
         ↑ column-gap ↑
         ↑ column-rule ↑
```

### 💻 特殊控制属性

CSS



```
/* 让某个元素跨越所有列（如标题）*/
h2 {
  column-span: all;   /* 跨所有列显示 */
  column-span: none;  /* 不跨列（默认）*/
}

/* 控制元素内部是否允许在列间断开 */
.keep-together {
  break-inside: avoid;         /* 此元素内容不在列间断开 */
  page-break-inside: avoid;    /* 兼容旧版 */
}

/* 控制元素前后是否强制换列 */
.force-break {
  break-before: column;  /* 此元素前强制换新列 */
  break-after: column;   /* 此元素后强制换新列 */
}
```

### 🎯 完整实战示例

HTML



```
<div class="newspaper">
  <h2 class="heading">新闻标题（跨列）</h2>
  <p>第一段内容，这里是很长的正文内容...</p>
  <div class="ad-block">
    <!-- 广告或图片，保持整体不被切断 -->
  </div>
  <p>第二段内容...</p>
</div>
```

CSS



```
.newspaper {
  column-count: 3;
  column-gap: 24px;
  column-rule: 1px solid #e0e0e0;
}

/* 标题跨越所有列 */
.heading {
  column-span: all;
  text-align: center;
  margin-bottom: 20px;
  padding-bottom: 16px;
  border-bottom: 2px solid #333;
}

/* 图片/广告块不被列断开 */
.ad-block {
  break-inside: avoid;
  margin: 16px 0;
}

/* 响应式：屏幕窄时自动减少列数 */
@media (max-width: 768px) {
  .newspaper {
    column-count: 2;
  }
}

@media (max-width: 480px) {
  .newspaper {
    column-count: 1;  /* 手机单列 */
  }
}
```

### 💡 适用场景

text



```
✅ 适合用多列布局的场景：
- 新闻/博客文章排版
- 商品列表（文字描述部分）
- 网站 Footer 底部链接组
- 词汇表、参考资料列表

❌ 不适合的场景：
- 需要精确控制每列内容的布局（用 Grid 更好）
- 图片画廊（用 Grid 或 Flexbox）
```

------

## 🧩 第85题：`will-change` 属性有什么作用？使用时需要注意什么？

### 🌟 通俗解释

`will-change` 就像在做饭前**提前预热锅**——你告诉浏览器"这个元素马上要变化了，你先准备好"，浏览器就会提前开辟 GPU 资源（图层提升），让动画更流畅。

> 🍳 没有 will-change：动画开始时浏览器临时准备 → 可能卡顿 有了 will-change：提前预热好 → 动画一开始就很流畅

### 💻 语法和使用

CSS



```
/* 基本用法 */
.animated-element {
  will-change: transform;           /* 即将发生 transform 变化 */
  will-change: opacity;             /* 即将发生 opacity 变化 */
  will-change: transform, opacity;  /* 多个属性 */
  will-change: scroll-position;     /* 即将有滚动 */
  will-change: contents;            /* 内容会变化 */
  will-change: auto;                /* 默认值，浏览器自己决定 */
}
```

### 📐 底层原理图示

text



```
不用 will-change（普通元素）：

主内存（CPU）:
┌─────────────────────┐
│  DOM + 样式全部在   │
│  一个图层里渲染     │ → 改变时需要重新计算整个图层
└─────────────────────┘

用了 will-change: transform（GPU加速）：

主内存（CPU）:     显卡内存（GPU）:
┌──────────┐       ┌──────────────┐
│ 其他内容 │       │ 动画元素     │ → 被提升到独立图层
│          │       │ 直接在GPU上  │ → 变换时只需GPU计算
└──────────┘       │ 合成，不影响 │ → 速度极快！
                   │ 主线程       │
                   └──────────────┘
```

### ✅ 正确使用方式

CSS



```
/* 方式1：CSS中预先设置（适合持续动画）*/
.loading-spinner {
  will-change: transform;
  animation: spin 1s linear infinite;
}

/* 方式2：hover 前提前声明（更精确）*/
.card {
  /* 普通状态不设 will-change */
}
.card:hover {
  will-change: transform;  /* hover 时声明（浏览器会提前准备）*/
  transform: translateY(-8px);
}
/* ⚠️ 更好的做法：给父元素的 hover 声明子元素的 will-change */
.card-wrapper:hover .card {
  will-change: transform;
}

/* 方式3：用 JS 在动画前后动态添加/移除（最精确）*/
```

JavaScript



```
const card = document.querySelector('.card');

// 动画即将开始前设置
card.addEventListener('mouseenter', () => {
  card.style.willChange = 'transform';
});

// 动画结束后移除（释放GPU资源！）
card.addEventListener('animationend', () => {
  card.style.willChange = 'auto';
});
```

### ⚠️ 使用注意事项

CSS



```
/* ❌ 错误用法1：滥用在所有元素上 */
* { will-change: transform; }  
/* 这会让所有元素都占用GPU内存，反而更卡！*/

/* ❌ 错误用法2：设置 will-change: all */
.el { will-change: all; }  
/* all 意味着任何属性都可能变，浏览器无法针对性优化 */

/* ❌ 错误用法3：永久设置在不需要的元素上 */
.static-element { will-change: transform; }  
/* 静态元素设置 will-change 白白浪费显存 */

/* ✅ 正确原则：
   1. 只给真正需要动画的元素设置
   2. 只声明真正会变化的属性
   3. 动画结束后设回 auto 释放资源
   4. 一个页面中使用的 will-change 不要超过十几个
*/
```

### 🆚 will-change vs `transform: translateZ(0)`

CSS



```
/* 旧方法（Hack）：用3D变换强制GPU加速 */
.old-way { transform: translateZ(0); }
/* 或者 */
.old-way { transform: translate3d(0, 0, 0); }

/* 新方法（标准）：will-change */
.new-way { will-change: transform; }

/* 结论：现代浏览器推荐用 will-change，更语义化 */
/* 但兼容旧版Safari时可能仍需 translateZ(0) */
```

------

## 🧩 第86题：重排（Reflow）和重绘（Repaint）是什么？如何减少？

### 🌟 通俗解释

把浏览器渲染网页想象成**搭积木**：

- **重排（Reflow）**= 某块积木改变了**大小或位置**，整栋楼的结构需要重新计算 → **代价极大**
- **重绘（Repaint）**= 某块积木只是**换了颜色**，结构不变，只需要重新涂色 → 代价较小
- **合成（Composite）**= 某块积木只是**整体移动**（用了 GPU 图层），完全不影响其他积木 → **代价最小**

> 🏠 重要定律：**重排必然导致重绘，重绘不一定引起重排** 优化目标：尽量把操作降级到"只合成"，避免触发重排

### 📊 三种渲染代价对比

text



```
代价从高到低：

重排（Reflow）:    JS → Style → Layout → Paint → Composite
                               ↑最费性能，重新计算几何

重绘（Repaint）:   JS → Style → Paint → Composite
                               ↑跳过了Layout，省一步

只合成（Composite）: JS → Composite
                          ↑最快！只在GPU上操作，不影响主线程
```

### 🔴 会触发重排的操作（高代价，能避则避）

JavaScript



```
// ① 改变几何属性
element.style.width = '200px';       // 重排！
element.style.height = '100px';      // 重排！
element.style.padding = '20px';      // 重排！
element.style.margin = '10px';       // 重排！
element.style.border = '1px solid';  // 重排！
element.style.fontSize = '20px';     // 重排！（影响文字宽高）

// ② 改变布局
element.style.display = 'none';      // 重排！
element.style.position = 'absolute'; // 重排！
element.style.float = 'left';        // 重排！

// ③ 读取布局信息（强制同步布局）
const w = element.offsetWidth;   // 重排！
const h = element.offsetHeight;  // 重排！
const t = element.offsetTop;     // 重排！
const r = element.getBoundingClientRect(); // 重排！
// ⚠️ 读这些值时浏览器必须先计算最新布局

// ④ 添加/删除DOM
document.body.appendChild(el);   // 重排！

// ⑤ 改变窗口大小
// 用户resize浏览器窗口 → 重排所有元素
```

### 🟡 只触发重绘的操作（中等代价）

JavaScript



```
// 只改变外观，不改变几何
element.style.color = 'red';                   // 重绘
element.style.backgroundColor = '#f00';        // 重绘
element.style.visibility = 'hidden';           // 重绘
element.style.outline = '1px solid red';       // 重绘
element.style.boxShadow = '0 4px 8px #000';   // 重绘
```

### 🟢 只触发合成的操作（最小代价，推荐）

JavaScript



```
// 使用 transform 和 opacity，走GPU合成层
element.style.transform = 'translateX(100px)'; // ✅ 只合成
element.style.opacity = '0.5';                 // ✅ 只合成
```

### 🚀 减少重排的优化策略

#### 策略1：批量修改 DOM，减少操作次数

JavaScript



```
// ❌ 坏的写法：每次修改都触发重排
element.style.width = '100px';   // 重排1次
element.style.height = '50px';   // 重排2次
element.style.padding = '10px';  // 重排3次

// ✅ 方法1：用 class 一次性修改
element.classList.add('new-style');
// CSS: .new-style { width: 100px; height: 50px; padding: 10px; }

// ✅ 方法2：用 cssText 字符串一次性修改
element.style.cssText = 'width: 100px; height: 50px; padding: 10px;';

// ✅ 方法3：先隐藏再修改再显示（display:none 不在渲染树中）
element.style.display = 'none';    // 脱离渲染树
// ...大量修改...
element.style.display = 'block';   // 重新加入，只触发一次重排
```

#### 策略2：读写分离，避免强制同步布局

JavaScript



```
// ❌ 坏的写法：读写交替 → 每次读都强制浏览器重排
const boxes = document.querySelectorAll('.box');
boxes.forEach(box => {
  const width = box.offsetWidth;        // 读（强制重排）
  box.style.width = width * 2 + 'px';  // 写
  // 下一次循环又读，又强制重排...
});

// ✅ 好的写法：先读后写，批量操作
const widths = Array.from(boxes).map(box => box.offsetWidth); // 先全部读
boxes.forEach((box, i) => {
  box.style.width = widths[i] * 2 + 'px'; // 再全部写
});
```

#### 策略3：使用 transform 代替改变位置/大小

CSS



```
/* ❌ 触发重排 */
.moving-bad {
  position: absolute;
  left: 0;
  top: 0;
  transition: left 0.3s, top 0.3s;  /* 动画时持续重排！*/
}
.moving-bad:hover {
  left: 100px;
  top: 50px;
}

/* ✅ 只触发合成（GPU加速）*/
.moving-good {
  transform: translate(0, 0);
  transition: transform 0.3s;  /* 动画时只合成，不重排！*/
}
.moving-good:hover {
  transform: translate(100px, 50px);
}
```

#### 策略4：使用 DocumentFragment 批量插入 DOM

JavaScript



```
// ❌ 坏的写法：每次 appendChild 都触发重排
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = `第${i}项`;
  document.querySelector('ul').appendChild(li); // 触发100次重排！
}

// ✅ 好的写法：用 DocumentFragment 批量插入
const fragment = document.createDocumentFragment();
for (let i = 0; i < 100; i++) {
  const li = document.createElement('li');
  li.textContent = `第${i}项`;
  fragment.appendChild(li);  // 操作内存中的虚拟节点，不触发重排
}
document.querySelector('ul').appendChild(fragment); // 只触发1次重排！
```

------

## 🧩 第87题：如何实现自适应的正方形（宽高始终相等）？

### 🌟 通俗解释

**需求**：一个 div 宽度随屏幕变化（比如 `width: 50%`），但希望高度永远等于宽度，始终保持正方形。

**难点**：高度的 `%` 是相对父元素的**高度**来计算的，而宽度的 `%` 是相对父元素的**宽度**——所以直接写 `height: 50%` 并不等于宽度。

### 🌟 神奇知识点：`padding` 的百分比

> ⭐ 关键：**`padding-top` 和 `padding-bottom` 的百分比值是相对父元素的「宽度」计算的！** 所以 `width: 50%; padding-top: 50%` → 宽高都等于父元素宽度的50% → 正方形！

### 💻 方案一：padding-top 技巧（兼容性最好）

CSS



```
.square-wrapper {
  width: 50%;          /* 宽度：父元素的50% */
}

.square {
  width: 100%;         /* 宽度：父元素宽度 */
  height: 0;           /* 高度设为0，实际高度由padding撑开 */
  padding-top: 100%;   /* padding-top = 父元素宽度的100% = 和width相等 → 正方形！*/
  background: tomato;
  position: relative;  /* 如果里面有内容，需要配合这个 */
}

/* 如果正方形内部需要放内容，用绝对定位 */
.square-content {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}
```

text



```
原理图示：
父元素宽度 = 400px

.square {
  width: 100%      → 400px（水平）
  height: 0
  padding-top: 100% → 400px（垂直，因为 padding% 基于父宽度！）
}

实际效果：宽400px，高400px → 正方形 ✅
```

### 💻 方案二：`aspect-ratio`（现代方案，最简洁 ⭐）

CSS



```
.square {
  width: 50%;
  aspect-ratio: 1 / 1;  /* 宽:高 = 1:1 → 正方形 */
  background: skyblue;
}

/* aspect-ratio 非常灵活 */
.video-box {
  width: 100%;
  aspect-ratio: 16 / 9;  /* 永远保持16:9宽高比 */
}

.photo {
  aspect-ratio: 4 / 3;   /* 4:3 照片比例 */
}
```

### 💻 方案三：`vw` 单位

CSS



```
/* 如果正方形的宽度基于视口宽度 */
.square {
  width: 50vw;    /* 视口宽度的50% */
  height: 50vw;   /* 高度也用vw，和宽度永远相等 */
  background: mediumseagreen;
}
/* ⚠️ 局限：只适合基于视口宽度的正方形，不适合基于父元素宽度 */
```

### 💻 方案四：JavaScript（动态计算）

JavaScript



```
// 最通用的方案，但需要JS
function setSquareHeight() {
  const squares = document.querySelectorAll('.square');
  squares.forEach(el => {
    el.style.height = el.offsetWidth + 'px';
  });
}

setSquareHeight();
window.addEventListener('resize', setSquareHeight);
// ⚠️ 记得防抖处理resize事件
```

### 🎯 方案对比

| 方案                | 优点             | 缺点                       | 推荐度 |
| ------------------- | ---------------- | -------------------------- | ------ |
| `padding-top: 100%` | 兼容性极好       | 内容需要绝对定位，写法麻烦 | ⭐⭐⭐    |
| `aspect-ratio: 1/1` | 最简洁，语义清晰 | IE不支持（现代浏览器都OK） | ⭐⭐⭐⭐⭐  |
| `vw` 单位           | 简洁             | 只能基于视口，不够灵活     | ⭐⭐     |
| JavaScript          | 最灵活           | 需要JS，有resize监听开销   | ⭐⭐     |

> 🏆 **2025年推荐首选 `aspect-ratio`，兼容旧项目用 `padding-top` 方案**

------

## 🧩 第88题：如何实现 0.5px 的细线？

### 🌟 通俗解释

在**普通显示器**上（DPR=1），CSS的 `1px` = 屏幕上的 `1个物理像素`，没问题。 但在**高清屏**（Retina屏，DPR=2）上，CSS的 `1px` = 屏幕上的 `2×2个物理像素`，导致线条显得比较粗。

你想要"设计稿上的 `0.5px`"，在高清屏上实际是 `1个物理像素`，非常细腻。

> 📐 类比：
>
> - 普通屏：1个格子 = 1颗像素点（最细就是1px）
> - Retina屏：1个格子 = 4颗像素点（可以做到更细！）

### 💻 方案一：`transform: scale` ⭐（最常用）

CSS



```
/* 最简单：直接缩小高度 */
.line-01 {
  width: 100%;
  height: 1px;
  background: #ccc;
  transform: scaleY(0.5);           /* Y轴缩小到0.5 */
  transform-origin: 0 0;            /* 缩放基点设为左上角，避免位置偏移 */
}

/* DPR=3的屏幕（iPhone Pro等）*/
.line-003 {
  height: 1px;
  transform: scaleY(0.333);  /* 1/3 */
  transform-origin: 0 0;
}
```

### 💻 方案二：伪元素 + `scale`（用于边框，最推荐 ⭐⭐）

CSS



```
/* 给容器加 0.5px 下边框 */
.border-bottom-half {
  position: relative;
}

.border-bottom-half::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #ccc;
  transform: scaleY(0.5);
  transform-origin: 0 bottom;
}

/* 通用版：给四条边都加 0.5px 边框 */
.border-all-half {
  position: relative;
}
.border-all-half::after {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 200%;           /* 放大2倍 */
  height: 200%;          /* 放大2倍 */
  border: 1px solid #ccc; /* 原来的1px */
  transform: scale(0.5);   /* 整体缩小0.5 → 视觉上是0.5px */
  transform-origin: 0 0;   /* 缩放基点设为左上角 */
  border-radius: inherit;  /* 如果有圆角也保留 */
  box-sizing: border-box;
  pointer-events: none;
}
```

### 💻 方案三：`background` 渐变（适合单条分割线）

CSS



```
/* 利用渐变：只有一半的颜色，另一半透明 */
.hr {
  height: 1px;
  background: linear-gradient(
    to bottom,
    transparent 50%,    /* 上半部分透明 */
    #ccc 50%            /* 下半部分有颜色 */
  );
  /* 高度1px，有颜色的部分只有0.5px（在高清屏上）*/
}
```

### 💻 方案四：根据 DPR 动态设置（最精确）

CSS



```
/* 默认 1x 屏幕 */
.border { border: 1px solid #ccc; }

/* 2x 屏幕（Retina）*/
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .border {
    border-width: 0.5px;  /* 部分浏览器支持 0.5px */
  }
}

/* 3x 屏幕 */
@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
  .border {
    border-width: 0.333px;
  }
}
```

### 💻 方案五：`box-shadow` 模拟

CSS



```
/* 用极细的阴影模拟边框 */
.shadow-line {
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.2);
  /* 向下偏移1px，无模糊，无扩散，半透明 */
  /* 在Retina屏上视觉上约等于0.5px */
}
```

### 🎯 方案推荐

| 场景       | 推荐方案                        |
| ---------- | ------------------------------- |
| 单条分割线 | `transform: scaleY(0.5)`        |
| 元素边框   | 伪元素 `::after` + `scale(0.5)` |
| 简单下边线 | `background` 渐变               |
| 精确控制   | 媒体查询 + `border: 0.5px`      |

------

## 🧩 第89题：移动端 `viewport` 元标签是什么？

### 🌟 通俗解释

早期智能手机打开网页，会把整个电脑版网页缩小显示在手机屏幕上（导致字超小，需要手动放大）。

`viewport` 元标签就是告诉浏览器：**"请按照手机屏幕的真实宽度来显示我的网页，不要缩放！"**

> 📱 没有 viewport： 手机把 960px 宽的网页硬塞进 375px 的屏幕 → 所有内容缩小成蚂蚁大小
>
> 有了 viewport： 网页宽度 = 手机屏幕宽度 = 375px → 文字大小正常，无需缩放

### 💻 完整配置及详解

HTML



```
<!-- 最常用的标准配置（记住这一行！）-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 完整配置（各参数详解）-->
<meta name="viewport" content="
  width=device-width,     ← 视口宽度 = 设备屏幕宽度（375px/390px等）
  initial-scale=1.0,      ← 初始缩放比例为1（不缩放）
  maximum-scale=1.0,      ← 最大缩放比例（禁止放大）
  minimum-scale=1.0,      ← 最小缩放比例（禁止缩小）
  user-scalable=no        ← 禁止用户手动缩放（无障碍访问考虑，谨慎使用！）
">
```

### 🔍 各参数详解

HTML



```
<!-- width：视口宽度 -->
width=device-width    <!-- 等于设备屏幕宽度（最常用）-->
width=375             <!-- 固定宽度375px（一般不这样用）-->

<!-- initial-scale：初始缩放比例 -->
initial-scale=1.0     <!-- 1:1，不缩放（最常用）-->
initial-scale=2.0     <!-- 放大2倍显示（会让内容变大）-->

<!-- maximum-scale / minimum-scale：缩放范围 -->
maximum-scale=3.0     <!-- 用户最多可放大到3倍 -->
minimum-scale=0.5     <!-- 用户最多可缩小到0.5倍 -->

<!-- user-scalable：是否允许用户缩放 -->
user-scalable=no      <!-- 禁止缩放（⚠️ 影响无障碍访问，不推荐！）-->
user-scalable=yes     <!-- 允许缩放（默认）-->
```

### 📐 有无 viewport 的对比

text



```
没有 viewport 元标签：
┌─────────────────────────────────────────────┐
│  手机屏幕（375px）                           │
│ ┌─────────────────────────────────────────┐ │
│ │ 网页（被缩小成375/960≈39%显示）         │ │
│ │ 文字极小，需要双指放大才能阅读          │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘

有 viewport（width=device-width）：
┌─────────────────────────────────────────────┐
│  手机屏幕（375px）                           │
│ ┌─────────────────────────────────────────┐ │
│ │ 网页宽度 = 375px                        │ │
│ │ 文字正常大小，响应式布局生效            │ │
│ └─────────────────────────────────────────┘ │
└─────────────────────────────────────────────┘
```

### 💡 实际项目配置建议

HTML



```
<!-- 普通响应式网站（推荐）-->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- H5游戏/特殊交互（禁止缩放，但要考虑无障碍）-->
<meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">

<!-- 老旧PC网站适配移动端（让手机以640px宽度显示）-->
<meta name="viewport" content="width=640">
```

------

## 🧩 第90题：什么是移动端 `1px` 问题？如何解决？

### 🌟 通俗解释

这是理解 **DPR（设备像素比）** 的关键！

**DPR（Device Pixel Ratio）** = 物理像素 ÷ CSS逻辑像素

> 📱 iPhone Retina屏（DPR=2）：
>
> - CSS 写 `1px` → 屏幕用 **2×2 = 4个物理像素**来渲染
> - 导致：`border: 1px solid` 在高清屏上看起来有 **2倍粗**
> - 设计师的本意是"1个物理像素的细线"，但CSS无法直接指定物理像素

text



```
普通屏（DPR=1）：          Retina屏（DPR=2）：
┌──┐                      ┌──┬──┐
│  │ CSS 1px               │  │  │  CSS 1px
└──┘                      ├──┼──┤  = 2×2 物理像素
  1个物理像素               │  │  │  （看起来是2px宽！）
                           └──┴──┘
```

### 🔍 怎么检测当前设备的 DPR？

JavaScript



```
// 获取设备像素比
console.log(window.devicePixelRatio);
// iPhone 13: 3（三倍屏）
// iPhone SE: 2（两倍屏）
// 普通PC: 1
// MacBook Retina: 2

// CSS 中检测
@media (-webkit-min-device-pixel-ratio: 2) { /* DPR >= 2 的设备 */  }
@media (min-resolution: 2dppx) { /* 标准写法 */ }
```

### 💻 解决方案一：伪元素 + `scale`（最通用 ⭐⭐⭐⭐⭐）

CSS



```
/* 基础版：只处理下边线 */
.cell {
  position: relative;
}
.cell::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 1px;
  background: #e0e0e0;
}

/* Retina屏优化 */
@media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 2dppx) {
  .cell::after {
    transform: scaleY(0.5);
    transform-origin: 0 bottom;
  }
}

@media (-webkit-min-device-pixel-ratio: 3), (min-resolution: 3dppx) {
  .cell::after {
    transform: scaleY(0.333);
    transform-origin: 0 bottom;
  }
}
```

CSS



```
/* 进阶版：四条边都是 1px（使用 2倍放大再缩小的技巧）*/
.border-1px {
  position: relative;
}
.border-1px::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  border: 1px solid #e0e0e0;
  border-radius: inherit;      /* 保留圆角 */
  width: 200%;                 /* 放大2倍 */
  height: 200%;
  transform: scale(0.5);       /* 再缩回来 = 视觉上是0.5px */
  transform-origin: 0 0;
  box-sizing: border-box;
  pointer-events: none;        /* 不影响点击事件 */
}
```

### 💻 解决方案二：`viewport` 缩放法（适合整站统一处理）

JavaScript



```
// 核心思路：将整个视口缩放到 1/DPR
// 这样CSS的1px就真的等于1个物理像素了

const dpr = window.devicePixelRatio || 1;
const scale = 1 / dpr;

const meta = document.createElement('meta');
meta.name = 'viewport';
meta.content = `
  width=device-width,
  initial-scale=${scale},
  maximum-scale=${scale},
  minimum-scale=${scale},
  user-scalable=no
`;
document.head.appendChild(meta);

// DPR=2 的手机：initial-scale=0.5
// 视口变为 750px 宽（375×2）
// 这时CSS写 1px 就真的是1个物理像素！
// 但同时所有尺寸都要×2，所以通常配合 rem 布局一起使用
```

### 💻 解决方案三：`box-shadow` 模拟

CSS



```
/* 用细阴影模拟细线边框 */
.list-item {
  /* 模拟底部 1px 线 */
  box-shadow: 0 1px 0 0 rgba(0, 0, 0, 0.15);
  
  /* 模拟四边边框 */
  box-shadow:
    0 -1px 0 0 #e0e0e0,   /* 上 */
    1px 0 0 0 #e0e0e0,    /* 右 */
    0 1px 0 0 #e0e0e0,    /* 下 */
    -1px 0 0 0 #e0e0e0;   /* 左 */
}
/* 优点：不需要伪元素；缺点：不支持圆角 */
```

### 💻 解决方案四：SVG 方案（最精准）

CSS



```
/* 用 SVG 1px 线作为背景图 */
.border-svg {
  border-bottom: 1px solid transparent;
  border-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='2'%3E%3Crect width='1' height='1' fill='%23e0e0e0'/%3E%3C/svg%3E") 0 0 1 0 stretch;
  /* SVG高度2，只有1个物理像素有颜色 = 精确的0.5px CSS */
}
```

### 🎯 方案总结对比

| 方案             | 原理         | 兼容性          | 推荐度 |
| ---------------- | ------------ | --------------- | ------ |
| 伪元素 + scale   | 缩放模拟     | ✅ 最好          | ⭐⭐⭐⭐⭐  |
| viewport 缩放    | 视口整体缩放 | ✅ 好，需配合rem | ⭐⭐⭐⭐   |
| box-shadow       | 阴影模拟     | ✅ 好            | ⭐⭐⭐    |
| SVG border-image | 精确物理像素 | ⚠️ 写法复杂      | ⭐⭐     |

------

## 📋 第81~90题 核心知识点速查表

| 题号 | 考点                       | 一句话记忆                                                |
| ---- | -------------------------- | --------------------------------------------------------- |
| 81   | `@keyframes` + `animation` | 先写剧本（keyframes），再表演（animation 8个属性）        |
| 82   | `filter` 滤镜              | blur模糊/grayscale黑白/brightness亮度/drop-shadow真实阴影 |
| 83   | `clip-path`                | 用剪刀裁元素：circle椭圆/polygon多边形/inset矩形          |
| 84   | 多列布局                   | `column-count:3` 像报纸分3列，`column-span:all` 标题跨列  |
| 85   | `will-change`              | 提前预热GPU，用完即释放，不能滥用                         |
| 86   | 重排/重绘/合成             | 改几何→重排；改颜色→重绘；transform/opacity→只合成        |
| 87   | 自适应正方形               | `aspect-ratio: 1/1`（现代）或 `padding-top: 100%`（兼容） |
| 88   | 0.5px 细线                 | 伪元素 `::after` + `transform: scale(0.5)`                |
| 89   | viewport 元标签            | `width=device-width, initial-scale=1.0` 是标配            |
| 90   | 1px 问题                   | DPR=2屏上CSS 1px = 2物理像素，用伪元素+scaleY(0.5)解决    |

------

> 💡 **重点串联学习建议**：
>
> - **81题（animation）** 要配合 **85题（will-change）** 一起实践：写动画时加 `will-change: transform` 优化性能
> - **86题（重排重绘）** 是面试高频题，要能说出具体触发例子和优化方案
> - **88/89/90题** 是移动端开发三件套，实际项目必用，建议写一个demo亲自验证效果



# 第91题：如何实现粘性布局（Sticky Footer）？

## 🤔 先理解问题是什么

你有没有遇到过这种情况：一个页面内容很少，页脚（footer）跑到了页面中间，下面一大片空白？

text



```
┌──────────────┐
│   导航        │
│   内容（很少） │
│   页脚        │  ← 跑到中间了！
│              │
│   空白区域    │  ← 这里什么都没有，很难看
└──────────────┘
```

我们希望的效果是：**内容少时，页脚贴在浏览器底部；内容多时，页脚跟在内容后面**。

text



```
内容少时：              内容多时：
┌──────────────┐        ┌──────────────┐
│   导航        │        │   导航        │
│   内容（少）  │        │   内容        │
│              │        │   内容        │
│              │        │   内容        │
│   页脚（底部）│        │   页脚        │
└──────────────┘        └──────────────┘
```

## 🍱 生活类比：饭盒里的食物和盖子

想象一个饭盒：

- 饭盒总高度固定（`min-height: 100vh` = 至少占满一个屏幕高）
- 里面放着食物（页面内容），食物可多可少
- 饭盒盖子（footer）永远盖在最底部

关键技巧：**让中间的内容区域"弹性伸展"，把 footer 顶到底部**。

## 💻 代码和解释

CSS



```
/* 方案一：Flexbox（推荐，最简单）*/
body {
  display: flex;           /* 把 body 变成弹性容器 */
  flex-direction: column;  /* 子元素从上到下排列（像一根竖着的橡皮筋）*/
  min-height: 100vh;       /* 至少占满整个屏幕高度（vh = 视口高度）*/
}

main {
  flex: 1;  /* "我要占满所有剩余空间！" */
            /* footer 就被挤到底部去了 */
}
```

HTML



```
<body>
  <header>顶部导航</header>
  <main>页面内容（可多可少）</main>
  <footer>页脚（始终在底部）</footer>
</body>
```

## 🎯 通俗解释 `min-height: 100vh`

`vh` = **v**iewport **h**eight（视口高度）

- `100vh` = 浏览器窗口的 100% 高度
- `min-height: 100vh` = "最少要这么高，内容多了可以更高"

就像你定了一个房间：至少 3 米高，天花板可以更高，但不能低于 3 米。

## 🎯 通俗解释 `flex: 1`

`flex: 1` 的意思是："**把剩余的空间全给我！**"

想象三个人坐一排长椅（2米）：

- header 说：我只需要坐 50cm
- footer 说：我只需要坐 50cm
- main 说：`flex: 1`，剩下 100cm 全归我！

------

# 第92题：CSS 模块化有哪些方案？

## 🤔 先理解问题是什么

CSS 的一个大麻烦：**全局污染**。

比如你写了：

CSS



```
.button { color: red; }
```

然后你同事也写了：

CSS



```
.button { color: blue; }
```

结果所有按钮颜色都乱了！CSS 模块化就是解决"互相干扰"这个问题的。

## 🏠 生活类比：住宅管理

想象一栋公寓楼：

| 方案            | 类比                                                         |
| --------------- | ------------------------------------------------------------ |
| **无模块化**    | 全楼共用一个储物室，东西混在一起，容易找错                   |
| **BEM**         | 给每件东西贴上规范标签："3楼-卧室-红色椅子"，不容易混淆      |
| **CSS Modules** | 每户人家有独立储物室，钥匙是系统自动生成的随机密码，绝对不会冲突 |
| **Scoped CSS**  | Vue 给每个房间贴了门牌号，样式只在这个房间生效               |
| **CSS-in-JS**   | 把家具（样式）直接装进行李箱（组件），走到哪带到哪           |
| **Tailwind**    | 宜家模式：不设计家具，直接用标准化零件拼装                   |

## 📦 BEM 命名规范详解

BEM = **B**lock（块）+ **E**lement（元素）+ **M**odifier（修饰符）

text



```
导航卡片（Block）        .card
  卡片标题（Element）    .card__title       （两个下划线）
  卡片按钮（Element）    .card__button
  禁用状态（Modifier）   .card__button--disabled  （两个短横线）
```

HTML



```
<div class="card">
  <h2 class="card__title">文章标题</h2>
  <button class="card__button">查看详情</button>
  <button class="card__button card__button--disabled">已禁用</button>
</div>
```

**优点**：光看类名就知道这个元素在哪个组件里，什么状态。 **缺点**：类名写起来挺长的，打字累。

## 🔒 CSS Modules 详解

构建工具（Webpack/Vite）会把你的类名**编译成随机字符串**：

CSS



```
/* 你写的：styles.module.css */
.button { color: red; }
```

CSS



```
/* 编译后变成（类名完全唯一，绝不冲突）*/
.button_abc123xyz { color: red; }
```

用法（React）：

React



```
import styles from './styles.module.css';
<button className={styles.button}>点击</button>
```

------

# 第93题：CSS 性能优化

## 🤔 先理解为什么要优化

浏览器渲染 CSS 需要消耗时间和计算资源。CSS 写得烂，页面会：

- 打开慢（白屏时间长）
- 滚动卡（动画掉帧）
- 耗电多（手机发热）

## 🚗 生活类比：开车上班

CSS 性能优化就像"优化上班路线"：

| 优化策略              | 开车类比                                   |
| --------------------- | ------------------------------------------ |
| 减少选择器层级        | 别绕远路，直接走直线                       |
| 用 `transform` 做动画 | 走高速（不堵车）而不是走普通路（容易堵）   |
| 压缩 CSS 文件         | 扔掉行李箱里的废纸，减轻重量               |
| 关键 CSS 内联         | 把最重要的工具放随身包，不用等到公司才能用 |

## 📋 6条核心优化策略（通俗版）

### 策略1：减少选择器层级（别绕路）

CSS



```
/* ❌ 不好：浏览器要从右往左一层层找，很慢 */
.page .container .sidebar .nav .nav-item .nav-link a span { color: red; }

/* ✅ 好：直接找到目标，快 */
.nav-link-text { color: red; }
```

**原理**：浏览器查找 CSS 选择器是**从右往左**的。层级越深，查找越慢。

### 策略2：用 `transform` 和 `opacity` 做动画（走高速）

CSS



```
/* ❌ 不好：改 left/top 会触发"重排"，浏览器要重新计算所有元素位置 */
.box:hover { left: 100px; }

/* ✅ 好：transform 走 GPU 合成层，不影响其他元素，超快 */
.box:hover { transform: translateX(100px); }
```

**通俗解释**：

- 改 `left`/`top`：相当于重新规划整个城市的道路——所有人都要等
- 改 `transform`：相当于只是移动一个贴纸——其他人完全不受影响

### 策略3：内联关键 CSS（随身携带）

HTML



```
<!-- ✅ 关键样式直接写在 HTML 里，页面打开就能用 -->
<head>
  <style>
    /* 首屏必须用到的样式 */
    body { margin: 0; font-family: sans-serif; }
    .header { background: #fff; height: 60px; }
  </style>
  
  <!-- 其他样式异步加载，不阻塞首屏渲染 -->
  <link rel="preload" href="other.css" as="style" onload="this.rel='stylesheet'">
</head>
```

### 策略4：压缩 CSS

CSS



```
/* 开发时（可读，120字节）*/
.button {
  background-color: #007bff;
  color: white;
  padding: 8px 16px;
}

/* 压缩后（40字节，浏览器下载更快）*/
.button{background-color:#007bff;color:#fff;padding:8px 16px}
```

### 策略5：合理使用 `will-change`（提前告知）

CSS



```
/* 告诉浏览器："这个元素马上要动了，你先准备好 GPU 层" */
.menu-panel {
  will-change: transform;  /* 提前创建合成层 */
}

/* ⚠️ 注意：不要乱用！每个 will-change 都占 GPU 内存 */
/* 错误示范：给所有元素都加 */
* { will-change: all; } /* 💀 这会把手机内存吃光 */
```

### 策略6：避免 `@import`

CSS



```
/* ❌ 不好：串行加载，A 加载完才开始加 B */
@import url('reset.css');
@import url('layout.css');
@import url('components.css');

/* ✅ 好：并行加载，同时下载所有 CSS */
```

HTML



```
<link rel="stylesheet" href="reset.css">
<link rel="stylesheet" href="layout.css">
<link rel="stylesheet" href="components.css">
```

------

# 第94题：如何实现暗黑模式（Dark Mode）切换？

## 🤔 先理解什么是暗黑模式

白天强光下看手机用**亮色模式**，晚上在暗处用**深色模式**眼睛不累。

## 💡 实现原理：CSS 变量 + 主题切换

**核心思路**：把颜色值存进"变量"，切换主题时只改变变量值，不改所有样式。

text



```
类比：装修房子
不用暗黑模式前：墙是白色、沙发是浅色、桌子是原木色
                ↕ 你想换成暗黑模式
普通做法：把每一件家具都重新换颜色（改每一行 CSS） → 超麻烦！
聪明做法：用"颜色主题包"，一键切换整套颜色方案 → CSS 变量！
```

## 💻 方案一：自动跟随系统（最简单）

CSS



```
/* 默认亮色 */
:root {
  --bg-color: #ffffff;      /* 背景白色 */
  --text-color: #333333;    /* 文字深色 */
  --card-bg: #f5f5f5;       /* 卡片浅灰 */
}

/* 系统切换到深色时，自动改变量值 */
@media (prefers-color-scheme: dark) {
  :root {
    --bg-color: #1a1a1a;    /* 背景深色 */
    --text-color: #e8e8e8;  /* 文字浅色 */
    --card-bg: #2d2d2d;     /* 卡片深灰 */
  }
}

/* 所有元素用变量，不写死颜色 */
body {
  background: var(--bg-color);
  color: var(--text-color);
}

.card {
  background: var(--card-bg);
}
```

**`prefers-color-scheme: dark`** 是什么？

- 它能检测用户的系统是否开启了深色模式
- iPhone 在"设置→显示与亮度→深色"时触发
- Windows 在"设置→个性化→颜色→深色"时触发

## 💻 方案二：用户手动点按钮切换

JavaScript



```
// 切换按钮点击事件
document.getElementById('theme-toggle').addEventListener('click', () => {
  const html = document.documentElement; // 获取 <html> 元素
  const isDark = html.getAttribute('data-theme') === 'dark';
  
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  
  // 记住用户的选择（下次打开还是这个主题）
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
});

// 页面加载时，读取上次的选择
const savedTheme = localStorage.getItem('theme') || 'light';
document.documentElement.setAttribute('data-theme', savedTheme);
```

CSS



```
/* 亮色主题（默认）*/
:root, [data-theme="light"] {
  --bg-color: #ffffff;
  --text-color: #333333;
}

/* 深色主题 */
[data-theme="dark"] {
  --bg-color: #1a1a1a;
  --text-color: #e8e8e8;
}

/* 切换时加个过渡，不要突然跳变 */
body {
  background: var(--bg-color);
  color: var(--text-color);
  transition: background 0.3s ease, color 0.3s ease;
}
```

------

# 第95题：`srcset` 和 `sizes` 如何实现响应式图片？

## 🤔 先理解问题

手机屏幕 375px，电脑屏幕 1920px，**为什么要加载同一张大图？**

- 手机加载 2000px 宽的大图 → 浪费流量，加载慢
- 电脑加载 300px 的小图 → 图片模糊

**解决方案**：根据设备自动选择合适尺寸的图片。

## 📸 生活类比：点咖啡杯型

text



```
srcset = 菜单上列出所有杯型（小、中、大杯）
sizes  = 告诉服务员：我的胃口多大（不同情况下要哪种）
浏览器 = 服务员，根据你的需求自动选最合适的
```

## 💻 代码详解

HTML



```
<img
  src="photo-small.jpg"           <!-- 默认图片（不支持 srcset 的浏览器用这个）-->
  
  srcset="
    photo-480.jpg   480w,         <!-- 480px 宽的图片 -->
    photo-768.jpg   768w,         <!-- 768px 宽的图片 -->
    photo-1200.jpg  1200w         <!-- 1200px 宽的图片 -->
  "
  
  sizes="
    (max-width: 480px)  100vw,    <!-- 手机：图片占满屏幕宽度 -->
    (max-width: 768px)  50vw,     <!-- 平板：图片占屏幕一半宽 -->
    33vw                          <!-- 桌面：图片占屏幕三分之一 -->
  "
  
  alt="风景照片"
>
```

## 🔍 浏览器如何计算？

假设用户用 iPhone 12（屏幕 390px，DPR=3）：

text



```
第一步：查看 sizes
  屏幕 390px < 480px → 图片显示宽度 = 100vw = 390px

第二步：考虑 DPR（设备像素比）
  390px × DPR(3) = 1170px（实际需要 1170px 宽的图片）

第三步：从 srcset 找最接近的
  480w → 太小了（480 < 1170）
  768w → 还是小了
  1200w → 刚好够用！✅

结果：加载 photo-1200.jpg
```

## 🆚 `srcset` vs `<picture>` 的区别

HTML



```
<!-- srcset：同一张图的不同尺寸版本，浏览器自动选 -->
<img srcset="img-400.jpg 400w, img-800.jpg 800w" src="img-400.jpg" alt="">

<!-- picture：完全不同的图片（格式不同、内容不同都可以）-->
<picture>
  <!-- 先尝试 WebP（更小更清晰，新格式）-->
  <source type="image/webp" srcset="photo.webp">
  <!-- 不支持 WebP 就用 JPG（降级方案）-->
  <source type="image/jpeg" srcset="photo.jpg">
  <!-- 最终兜底 -->
  <img src="photo.jpg" alt="风景照片">
</picture>
```

**一句话区别**：`srcset` 是"同一张图的大中小码"，`<picture>` 是"完全不同的备选方案"。

------

# 第96题：如何处理 CSS 的浏览器兼容性问题？

## 🤔 先理解问题

不同浏览器的 CSS 支持程度不同：

- Chrome 支持的某个新特性，Safari 可能还不支持
- 同一属性，不同浏览器可能需要加不同的"前缀"才能生效

## 🔧 生活类比：不同国家的电源插头

text



```
各国的电源插头规格不同：
  美国：双扁插
  英国：三方插
  欧洲：两圆插

CSS 浏览器前缀就像转换插头：
  -webkit-  Chrome/Safari 专用
  -moz-     Firefox 专用
  -ms-      IE/Edge 专用
```

## 💻 解决方案详解

### 方案1：手动写浏览器前缀（繁琐，不推荐）

CSS



```
/* 同一个属性，要写好几遍 */
.box {
  -webkit-transform: rotate(45deg);  /* Chrome/Safari */
  -moz-transform: rotate(45deg);     /* Firefox */
  -ms-transform: rotate(45deg);      /* IE */
  transform: rotate(45deg);          /* 标准写法 */
}
```

### 方案2：Autoprefixer 自动添加（推荐）

**Autoprefixer** 是一个 PostCSS 插件，就像一个"翻译官"。

text



```
你只写：
  .box { transform: rotate(45deg); }

Autoprefixer 自动翻译成：
  .box {
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
```

配置 `.browserslistrc` 文件，告诉它你要支持哪些浏览器：

text



```
> 1%          覆盖全球1%以上用户使用的浏览器
last 2 versions  每个浏览器最近2个版本
not dead      不要已经停止维护的浏览器
```

### 方案3：`@supports` 特性检测

CSS



```
/* 先写降级方案（所有浏览器都支持）*/
.container {
  display: flex;
}

/* 如果浏览器支持 Grid，就用更好的方案 */
@supports (display: grid) {
  .container {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }
}
```

**类比**：就像问服务员"有没有素食选项？有的话给我来份素食，没有的话普通的也行"。

### 方案4：Can I Use 查兼容性

打开 [caniuse.com](https://caniuse.com/)，搜索你想用的 CSS 属性，就能看到各浏览器的支持情况。

text



```
绿色 ✅ = 完全支持
黄色 ⚠️ = 需要前缀
红色 ❌ = 不支持
```

------

# 第97题：什么是关键 CSS（Critical CSS）？

## 🤔 先理解白屏问题

text



```
用户打开页面的流程：
1. 浏览器下载 HTML ✅
2. 发现 <link href="styles.css"> ← 需要先下载这个文件！
3. 下载 styles.css（可能要 500ms）⏳
4. 解析 CSS，渲染页面 ✅
5. 用户才能看到内容

在第2-4步期间，用户看到的是一片空白！
```

## 🎒 生活类比：出门上班

text



```
❌ 普通做法（慢）：
  出门 → 发现没带钥匙 → 回家取 → 重新出门
  （就像先让页面空白，等 CSS 文件下载完再渲染）

✅ 聪明做法（快）：
  把今天必须用的东西装进随身包 → 出门
  其他不着急的东西放在公司等你
  （关键 CSS 内联在 HTML 里，其他 CSS 异步加载）
```

## 💻 实现方式

HTML



```
<head>
  <!-- ✅ 关键 CSS 内联（首屏必须的样式，直接写在这里）-->
  <style>
    /* 只包含首屏看得见的元素的样式 */
    body { margin: 0; font-family: -apple-system, sans-serif; }
    .header { background: #fff; height: 60px; display: flex; align-items: center; }
    .hero { background: #1677ff; color: white; padding: 40px; }
    .hero-title { font-size: 32px; font-weight: bold; }
  </style>

  <!-- 其他 CSS 异步加载（不阻塞首屏渲染）-->
  <link 
    rel="preload" 
    href="full-styles.css" 
    as="style" 
    onload="this.rel='stylesheet'"   <!-- 加载完后改成正式样式表 -->
  >
  
  <!-- JS 未执行时的降级方案 -->
  <noscript>
    <link rel="stylesheet" href="full-styles.css">
  </noscript>
</head>
```

## 🔍 什么是"关键 CSS"？

**首屏可见区域**内所有元素需要的最小 CSS 集合：

text



```
屏幕（可见区域）：
┌────────────────────┐
│  导航栏（header）   │ ← 这些元素的样式 = 关键CSS
│  Banner 图片        │ ←
│  主标题文字         │ ←
└────────────────────┘ ← 滚动线（fold line）
│  更多内容...        │ ← 这些的样式不是关键CSS，可以晚点加载
```

**工具推荐**：`critical` npm 包可以自动提取关键 CSS。

------

# 第98题：CSS 如何实现旋转加载动画（Loading Spinner）？

## 🤔 先理解原理

加载动画 = 一个**甜甜圈形状** + **无限旋转**

text



```
形状：圆形边框，但只有一段有颜色（像缺了一角的圆圈）
动画：一直旋转 360° → 0° → 360° → ... （无限循环）
```

## 🍩 生活类比：转动的指南针

text



```
指南针指针一直转圈，就是 loading spinner 的样子。

用CSS的做法：
  画一个圆（border-radius: 50%）
  边框大部分是灰色
  只有顶部是蓝色（border-top）
  让它一直转（animation: spin infinite）
```

## 💻 完整代码（含注释）

HTML



```
<!-- 只需要一个空 div -->
<div class="spinner"></div>
```

CSS



```
.spinner {
  /* 第一步：设置大小 */
  width: 40px;
  height: 40px;
  
  /* 第二步：画圆形边框 */
  border: 4px solid #f0f0f0;      /* 整圈灰色边框（背景圆圈）*/
  border-top: 4px solid #1677ff;  /* 只有顶部是蓝色（会动的那一段）*/
  border-radius: 50%;             /* 让边框变成圆形 */
  
  /* 第三步：添加旋转动画 */
  animation: spin 1s linear infinite;
  /*         ↑名字  ↑时长 ↑速度  ↑无限循环 */
}

/* 定义旋转动画：从0度转到360度 */
@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
```

## 🎨 进阶版：更好看的多点跳动

HTML



```
<div class="loading-dots">
  <span></span>
  <span></span>
  <span></span>
</div>
```

CSS



```
.loading-dots {
  display: flex;
  gap: 6px;
}

.loading-dots span {
  width: 10px;
  height: 10px;
  background: #1677ff;
  border-radius: 50%;               /* 每个点是圆形 */
  animation: bounce 1.2s infinite;  /* 每个点都在跳动 */
}

/* 三个点错开时间跳，产生"波浪"效果 */
.loading-dots span:nth-child(1) { animation-delay: 0s; }
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }  /* 延迟0.2秒 */
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }  /* 延迟0.4秒 */

@keyframes bounce {
  0%, 100% { transform: translateY(0); }    /* 原位 */
  50%       { transform: translateY(-8px); } /* 向上跳 */
}
```

**`nth-child` 是什么？**

text



```
.loading-dots span:nth-child(1) → 选第1个 span
.loading-dots span:nth-child(2) → 选第2个 span
.loading-dots span:nth-child(3) → 选第3个 span

就像班级点名：第1号同学、第2号同学……
```

------

# 第99题：纯 CSS 实现下拉菜单

## 🤔 先理解交互逻辑

text



```
默认：鼠标不在菜单上 → 子菜单隐藏
触发：鼠标悬停在菜单项上（:hover）→ 子菜单显示
```

## 🍽️ 生活类比：餐厅菜单折页

text



```
你拿到一本菜单，封面只有几个大类（主菜单）
打开某个大类的折页，才能看到具体菜品（子菜单）

CSS hover 就是"打开折页"的动作
```

## 💻 完整代码（含详细注释）

HTML



```
<nav>
  <ul class="menu">
    <li class="menu-item">
      <a href="#">产品</a>
      <!-- 子菜单 -->
      <ul class="submenu">
        <li><a href="#">手机</a></li>
        <li><a href="#">电脑</a></li>
        <li><a href="#">平板</a></li>
      </ul>
    </li>
    <li class="menu-item"><a href="#">关于我们</a></li>
  </ul>
</nav>
```

CSS



```
/* ===== 主菜单样式 ===== */
.menu {
  display: flex;    /* 横向排列 */
  list-style: none;
  margin: 0;
  padding: 0;
  background: #333;
}

.menu-item {
  position: relative;  /* 关键！子菜单要相对它定位 */
}

.menu-item > a {
  display: block;
  padding: 15px 20px;
  color: white;
  text-decoration: none;
}

/* ===== 子菜单样式（默认隐藏）===== */
.submenu {
  list-style: none;
  margin: 0;
  padding: 0;
  
  /* 绝对定位：出现在父菜单项的正下方 */
  position: absolute;
  top: 100%;   /* 紧贴父元素底部 */
  left: 0;
  
  background: white;
  min-width: 150px;
  box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  
  /* 方案一（直接隐藏）：
  display: none; */
  
  /* 方案二（推荐，有过渡动画）：*/
  visibility: hidden;  /* 看不见，但占位置 */
  opacity: 0;          /* 完全透明 */
  transform: translateY(-5px);  /* 往上偏移5px（初始状态）*/
  transition: opacity 0.2s ease, visibility 0.2s ease, transform 0.2s ease;
}

.submenu a {
  display: block;
  padding: 10px 16px;
  color: #333;
  text-decoration: none;
}

.submenu a:hover {
  background: #f5f5f5;
}

/* ===== 关键：hover 时显示子菜单 ===== */
.menu-item:hover .submenu {
  visibility: visible;   /* 变可见 */
  opacity: 1;            /* 不透明 */
  transform: translateY(0); /* 回到正常位置（轻微下滑效果）*/
}
```

## 🔑 为什么用 `visibility` + `opacity` 而不是 `display: none`？

text



```
display: none → display: block：
  ❌ 没有过渡动画（直接突然弹出）
  ❌ CSS transition 对 display 属性不生效

visibility: hidden → visibility: visible：
  ✅ 可以配合 opacity 实现淡入效果
  ✅ transition 可以作用于 opacity 和 visibility
```

## 🤔 `position: absolute` 和 `position: relative` 的配合

text



```
父元素（.menu-item）设置 position: relative
  ↓
  创建一个"定位参考系"

子菜单（.submenu）设置 position: absolute; top: 100%; left: 0;
  ↓
  相对于父元素（.menu-item）定位
  top: 100% = 紧贴父元素底部（父元素高度的100%处）
  left: 0 = 与父元素左边对齐
```

------

# 第100题：开放题——最复杂的 CSS 布局问题

## 🤔 这道题考什么？

面试官不是要考你背答案，而是要看：

1. 你**真的做过项目**，遇到过真实问题
2. 你**分析问题的能力**（为什么会出现这个问题？）
3. 你**解决问题的思路**（怎么一步步解决的？）

## 📝 万能答题框架（STAR 原则）

text



```
S - Situation（背景）：我在做什么项目？
T - Task（任务）：遇到了什么布局问题？
A - Action（行动）：我是怎么分析和解决的？
R - Result（结果）：解决了吗？学到了什么？
```

## 🎯 三个典型案例（可以背，但最好有自己的）

------

### 案例一：移动端 iOS 吸顶导航闪烁

**S（背景）**：

> 我在开发一个电商 H5 活动页，需要做一个吸顶导航栏。

**T（问题）**：

> 用了 `position: fixed` 固定导航，在 Android 上没问题，但 iOS Safari 上滚动时导航栏会不停地闪烁/抖动，用户体验极差。

**A（解决过程）**：

text



```
第一步：排查原因
  在 Safari 开发者工具里发现：iOS Safari 对 fixed 定位元素
  的渲染机制和 Chrome 不同，没有自动提升到 GPU 合成层。

第二步：尝试解决
  给 fixed 元素加上 transform: translateZ(0)：
  
  .navbar {
    position: fixed;
    top: 0;
    transform: translateZ(0);  ← 强制让浏览器把它提升到 GPU 合成层
  }
  
第三步：验证
  在真机上测试，闪烁消失了！
```

**R（结果和反思）**：

> 问题解决了。学到了一点：`transform: translateZ(0)` 是 iOS Safari 上触发 GPU 合成层的常用"魔法咒语"，但不能滥用，因为每个合成层都会占用额外的 GPU 内存。

------

### 案例二：z-index "设了不生效" 的迷惑问题

**S（背景）**：

> 开发一个下拉菜单，弹出层被旁边的图片挡住了。

**T（问题）**：

> 我给下拉菜单设置了 `z-index: 9999`，但它还是被旁边 banner 图片的阴影给压住了。调试了很久。

**A（解决过程）**：

text



```
第一步：发现 z-index 没效果
  检查发现菜单容器用了 position: relative，
  但父容器（导航栏）设置了 opacity: 0.99（为了做动画）
  
  问题根源：opacity < 1 会创建新的"层叠上下文"！
  菜单的 z-index: 9999 只在导航栏这个"小宇宙"里有效，
  出不去，无法和外面的 banner 竞争。

第二步：解决方案
  把 opacity 动画改成其他方式：
  
  /* ❌ 会创建层叠上下文 */
  .navbar { opacity: 0.99; }
  
  /* ✅ 不影响层叠上下文 */
  .navbar { background: rgba(255,255,255,0.99); }
```

**R（结果和反思）**：

> z-index 失效最常见的原因就是**层叠上下文**。记住会创建层叠上下文的属性：`opacity < 1`、`transform`、`filter`、`will-change`、`position + z-index` 等。

------

### 案例三：弹性布局中"神秘的溢出"

**S（背景）**：

> 开发一个聊天列表页面，左侧是用户名，右侧是消息内容。

**T（问题）**：

> 右侧的长消息不省略，反而把整个容器撑开，页面出现了横向滚动条。

**A（解决过程）**：

CSS



```
/* 布局结构 */
.message-item {
  display: flex;
}
.username { width: 80px; flex-shrink: 0; }
.content  { flex: 1; }  /* 本来应该自适应 */

/* 但长文本把 .content 撑开了！ */
.content {
  /* 文本省略 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* 结果还是不生效？？！*/
```

**关键发现**：

CSS



```
/* Flex 子项有一个"最小内容尺寸"（min-width: auto）限制 */
/* 它不允许 flex 子项比内容更小 */

/* 解决方案：显式设置 min-width: 0 */
.content {
  flex: 1;
  min-width: 0;    /* ← 加上这一行！允许 flex 子项小于内容宽度 */
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
```

**R（结果和反思）**：

> 这是 Flex 布局一个非常经典的坑！**`flex: 1` 的元素如果想截断内容（如省略号），必须配合 `min-width: 0`**。