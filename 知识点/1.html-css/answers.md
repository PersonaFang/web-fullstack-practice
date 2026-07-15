# HTML & CSS 面试题标准答案卷（100题）
> 对标 2025 年中国市场前端岗位面试高频考点

---

## 一、HTML 基础（1-25题）

**1. `<!DOCTYPE html>` 的作用是什么？不写会怎样？**

`<!DOCTYPE html>` 是文档类型声明，告知浏览器以**标准模式（Standards Mode）**解析 HTML。
不写时浏览器会进入**怪异模式（Quirks Mode）**，使用旧版 IE 的渲染规则，导致盒模型计算、布局表现不一致，例如宽高计算方式不同。

---

**2. 什么是 HTML 语义化？请举出至少 5 个语义化标签并说明其用途。**

语义化是指使用**具有明确含义的标签**描述内容结构，而非全用 `<div>` 堆砌。
- `<header>`：页面或区块的头部
- `<nav>`：导航链接区域
- `<main>`：页面主体内容
- `<article>`：独立文章内容
- `<section>`：文档中的章节
- `<aside>`：侧边栏/辅助内容
- `<footer>`：页面或区块的底部

**好处**：提升代码可读性和可维护性、利于 SEO、有助于屏幕阅读器等辅助技术识别内容。

---

**3. HTML5 相比 HTML4 新增了哪些主要特性？**

- **语义化标签**：`<header>`, `<footer>`, `<article>`, `<section>`, `<nav>`, `<aside>` 等
- **多媒体标签**：`<audio>`, `<video>`，无需 Flash
- **绘图 API**：`<canvas>` 标签及相关 2D/3D 绘图接口
- **增强表单**：新增 `type` 值（date, email, range, number 等），新属性（placeholder, required, autofocus）
- **本地存储**：`localStorage`、`sessionStorage`
- **地理定位**：`Geolocation API`
- **Web Worker**：多线程脚本执行
- **WebSocket**：双向通信协议
- **SVG 内嵌支持**
- **拖放 API（Drag and Drop）**

---

**4. `<meta>` 标签有哪些常见属性？分别有什么作用？**

```html
<!-- 字符编码 -->
<meta charset="UTF-8">

<!-- 响应式视口 -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<!-- 页面描述（SEO） -->
<meta name="description" content="页面描述">

<!-- 关键词（SEO，现代搜索引擎权重低） -->
<meta name="keywords" content="关键词1,关键词2">

<!-- 禁止缓存 -->
<meta http-equiv="Cache-Control" content="no-cache">

<!-- 自动刷新 -->
<meta http-equiv="refresh" content="5;url=https://example.com">

<!-- 指定浏览器兼容模式 -->
<meta http-equiv="X-UA-Compatible" content="IE=edge">
5. <script> 标签中 defer 和 async 属性有什么区别？

属性	下载方式	执行时机	保证顺序
无属性	同步，阻塞 HTML 解析	立即执行	✅
async	异步，不阻塞	下载完立即执行，可能在 DOMContentLoaded 之前或之后	❌
defer	异步，不阻塞	HTML 解析完成后、DOMContentLoaded 之前按序执行	✅
使用建议：独立无依赖脚本用 async（如统计埋点），有依赖顺序的用 defer。

6. <img> 标签中 alt 和 title 属性有什么区别？

alt：图片无法加载时的替代文字，对搜索引擎爬虫和屏幕阅读器至关重要，是可访问性必须属性。
title：鼠标悬停时显示的提示文字，辅助说明，非必须属性。
7. <link> 和 @import 引入 CSS 有什么区别？

比较项	<link>	@import
语法位置	HTML <head>	CSS 文件内
加载时机	页面加载时并行加载	页面加载后才加载（串行）
兼容性	全部浏览器	IE5+
DOM 操作	可通过 JS 控制	不支持
性能	优（不阻塞渲染）	差（增加请求延迟）
结论：实际开发推荐使用 <link>。

8. <a> 标签的 target 属性有哪些取值？

_self（默认）：在当前窗口打开
_blank：在新标签/窗口打开（推荐配合 rel="noopener noreferrer" 使用，防止安全漏洞）
_parent：在父框架中打开
_top：在顶层窗口中打开
framename：在指定 <iframe> 中打开
9. 行内元素和块级元素有哪些区别？

特性	块级元素	行内元素
是否独占一行	✅	❌
可设置宽高	✅	❌（由内容决定）
padding/margin	四个方向均有效	上下 margin 无效
嵌套规则	可包含块级和行内	只能包含行内元素
块级元素：div、p、h1-h6、ul、li、table、form、section 行内元素：span、a、img、input、strong、em、label、button

10. <iframe> 有哪些优缺点？

优点：

可嵌入第三方内容（地图、视频、广告）
与主页面隔离，样式/脚本互不干扰
可实现无刷新文件上传（旧方案）
缺点：

增加 HTTP 请求，影响性能
SEO 不友好，搜索引擎不抓取 iframe 内容
存在安全风险（点击劫持 Clickjacking），需配合 X-Frame-Options 头
与主页面通信复杂（需 postMessage）
11. HTML 中 data-* 自定义属性的作用是什么？如何获取？

data-* 用于在 HTML 元素上存储自定义私有数据，不影响页面渲染。

HTML

<div id="user" data-user-id="123" data-role="admin"></div>
JavaScript

const el = document.getElementById('user');
// 方式1：getAttribute
el.getAttribute('data-user-id'); // "123"
// 方式2：dataset（推荐，连字符转驼峰）
el.dataset.userId; // "123"
el.dataset.role;   // "admin"
12. <form> 表单的 enctype 属性有哪几种值？

application/x-www-form-urlencoded（默认）：表单数据 URL 编码，适合普通文本表单。
multipart/form-data：用于文件上传，数据分段传输，必须使用此值。
text/plain：数据以纯文本发送，调试用，实际很少使用。
13. <input> 标签在 HTML5 中新增了哪些 type 类型？

email、url、number、range、date、time、datetime-local、month、week、color、search、tel

14. <canvas> 和 <svg> 有什么区别？

比较项	<canvas>	<svg>
类型	位图（像素）	矢量图
缩放	放大会失真	任意缩放不失真
操作方式	JS 绘制像素	XML/CSS 操作 DOM 节点
事件绑定	需自己计算坐标	直接绑定到元素
性能	适合大量动态图形（游戏）	适合静态图/少量交互图形
SEO	不支持	内容可被检索
15. DOM 和 BOM 有什么区别？

DOM（Document Object Model）：文档对象模型，将 HTML 文档抽象为树状结构，通过 JS 操作页面元素（document 对象）。
BOM（Browser Object Model）：浏览器对象模型，提供与浏览器交互的接口，核心是 window 对象，包含 location、history、navigator、screen、setTimeout 等。
DOM 是 W3C 标准，BOM 没有统一标准（各浏览器有差异）。

16. <script> 为什么建议放在 <body> 底部？

浏览器解析 HTML 时遇到 <script> 会暂停 HTML 解析，等待脚本下载并执行完毕。若放在 <head> 中，用户会长时间看到空白页。放在 </body> 前可确保 DOM 已构建完成，且不阻塞页面渲染。现代替代方案：使用 defer 属性。

17. src 和 href 属性有什么区别？

src：指向替换内容（图片、脚本、iframe 等），浏览器遇到 src 会暂停其他资源处理，下载并嵌入该资源。
href（Hypertext Reference）：指向关联资源（超链接、样式表），建立当前文档与目标资源的联系，不会暂停页面解析（如 <link rel="stylesheet">）。
18. HTML 中如何实现图片懒加载（Lazy Loading）？

方式1（原生，推荐）：

HTML

<img src="image.jpg" loading="lazy" alt="...">
方式2（IntersectionObserver API）：

JavaScript

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;
      observer.unobserve(img);
    }
  });
});
document.querySelectorAll('img[data-src]').forEach(img => observer.observe(img));
方式3（旧方案）：监听 scroll 事件，判断元素是否进入视口（性能差，不推荐）。

19. <table> 布局的弊端？

语义不正确，<table> 用于表格数据，而非布局
渲染性能差（需完整下载表格后才渲染）
代码冗余，嵌套深，可维护性差
不利于 SEO
响应式适配困难
20. HTML 全局属性（至少 6 个）

id、class、style、title、data-*、hidden、tabindex、contenteditable、draggable、lang、spellcheck

21. 什么是 Web Worker？

Web Worker 允许在浏览器后台线程中运行 JavaScript，不阻塞主线程（UI 线程），解决了 JS 单线程在执行耗时计算时页面卡顿的问题。

不能直接访问 DOM
通过 postMessage 与主线程通信
适合：数据加密、大量计算、文件处理
22. localStorage、sessionStorage 和 Cookie 三者区别？

特性	Cookie	localStorage	sessionStorage
大小	~4KB	~5-10MB	~5-10MB
过期时间	可设置	永久（手动删除）	标签页关闭即删
随请求发送	✅（自动携带）	❌	❌
作用域	可设置域/路径	同源共享	同标签页
HTTP Only	✅（可设置）	❌	❌
23. HTML 可访问性（Accessibility）和 ARIA 属性

可访问性（a11y）指让残障用户（视觉障碍、运动障碍等）也能正常使用网页。 ARIA（Accessible Rich Internet Applications）通过属性为辅助技术提供额外语义：

role="button"：将元素声明为按钮角色
aria-label="关闭"：为元素提供可读标签
aria-hidden="true"：对屏幕阅读器隐藏装饰性元素
aria-live="polite"：动态内容变化时通知用户
24. <picture> 标签 vs <img> 的 srcset

<img srcset>：根据设备像素密度或视口宽度提供不同分辨率的同一图片。
<picture>：更强大，可根据媒体查询提供完全不同格式或裁剪方式的图片（如 WebP + 降级 JPG）。
HTML

<picture>
  <source media="(min-width: 768px)" srcset="large.webp" type="image/webp">
  <source media="(min-width: 768px)" srcset="large.jpg">
  <img src="small.jpg" alt="响应式图片">
</picture>
25. 浏览器关键渲染路径（Critical Rendering Path）

解析 HTML → 构建 DOM 树
解析 CSS → 构建 CSSOM 树
DOM + CSSOM 合并 → 渲染树（Render Tree）
布局（Layout/Reflow）：计算每个节点的几何信息（位置、大小）
绘制（Paint）：将渲染树各节点绘制成像素
合成（Composite）：将各图层合并显示到屏幕
优化手段：减少关键资源数量、压缩 CSS/JS、异步加载脚本（defer/async）、内联关键 CSS。

二、CSS 基础（26-55题）
26. CSS 盒模型？标准盒模型 vs IE 盒模型？

盒模型由四部分组成：content + padding + border + margin

标准盒模型（box-sizing: content-box，默认）： width = content 宽度，实际占用 = width + padding + border + margin

IE 盒模型（box-sizing: border-box，推荐）： width = content + padding + border，实际内容区域自动缩小

CSS

/* 全局推荐设置 */
*, *::before, *::after {
  box-sizing: border-box;
}
27. CSS 选择器优先级（权重）计算

优先级由高到低（用 a,b,c,d 表示权重）：

选择器类型	权重
!important	最高（覆盖一切，慎用）
内联样式 style=""	1,0,0,0
ID 选择器 #id	0,1,0,0
类、伪类、属性选择器 .class, :hover, [type]	0,0,1,0
标签、伪元素 div, ::before	0,0,0,1
通配符 *、组合符	0,0,0,0
!important 缺点：破坏正常优先级规则、难以维护、调试困难，禁止滥用。

28. CSS 选择器类型（10种以上）

标签选择器：div
类选择器：.class
ID 选择器：#id
通配符：*
属性选择器：[type="text"]
后代选择器：div p
子元素选择器：div > p
相邻兄弟选择器：h1 + p
通用兄弟选择器：h1 ~ p
伪类选择器：:hover, :nth-child(), :first-child, :not()
伪元素选择器：::before, ::after, ::placeholder
群组选择器：h1, h2, h3
29. display 属性常见取值

取值	特点
block	块级，独占一行，可设宽高
inline	行内，不可设宽高，不独占行
inline-block	行内排列，但可设宽高
none	隐藏元素，不占空间
flex	开启 flex 容器
grid	开启 grid 容器
table	表格布局
contents	元素本身不渲染，只保留子元素
30. position 的取值及定位依据

static（默认）：正常文档流，不定位
relative：相对自身原始位置偏移，仍占据原空间
absolute：相对最近非 static 祖先元素定位，脱离文档流
fixed：相对浏览器视口定位，脱离文档流，不随页面滚动
sticky：粘性定位，滚动到阈值前是 relative，超过后变 fixed
31. float 浮动的问题及清除方法

问题：父元素高度塌陷（浮动子元素不参与父元素高度计算）。

清除方法：

父元素设置 overflow: hidden（触发 BFC）
父元素末尾添加空 <div style="clear:both">（不推荐）
使用 ::after 伪元素（推荐）：
CSS

.clearfix::after {
  content: "";
  display: block;
  clear: both;
}
父元素设置 display: flow-root（现代方案，专门触发 BFC）
32. BFC（块级格式化上下文）

BFC 是一个独立的渲染区域，内部块级盒子按规则布局，与外部互不影响。

触发 BFC 的方式：

overflow: hidden / scroll / auto（非 visible）
display: flex / grid / inline-block / table-cell / flow-root
position: absolute / fixed
float 不为 none
BFC 的作用：

清除浮动（防止父元素高度塌陷）
防止外边距合并（Margin Collapse）
阻止元素被浮动元素覆盖
33. visibility:hidden vs display:none vs opacity:0

属性	是否占空间	是否响应事件	是否触发重排
display: none	❌	❌	✅（触发重排）
visibility: hidden	✅	❌	❌（只触发重绘）
opacity: 0	✅	✅（仍可点击）	❌（只触发合成）
34. 外边距合并（Margin Collapse）

相邻两个块级元素的垂直 margin 会合并，取两者最大值。

发生条件：

相邻兄弟元素
父子元素（父元素无 border/padding 时）
空块元素自身上下 margin 合并
避免方法：触发 BFC（如给父元素加 overflow: hidden）、添加 border 或 padding、使用 flex/grid 布局。

35. 伪类 vs 伪元素

伪类（单冒号 :）：描述元素的特殊状态，不创建新元素。 例：:hover, :active, :focus, :nth-child(n), :not(), :checked
伪元素（双冒号 ::）：创建 DOM 中不存在的虚拟元素。 例：::before, ::after, ::first-line, ::first-letter, ::placeholder
CSS3 标准规定伪元素用 ::，但浏览器为兼容也支持单冒号。

36. CSS 水平居中（4种方法）

CSS

/* 1. 行内元素：父容器设置 */
.parent { text-align: center; }

/* 2. 块级元素（已知宽度） */
.child { width: 200px; margin: 0 auto; }

/* 3. Flexbox */
.parent { display: flex; justify-content: center; }

/* 4. Grid */
.parent { display: grid; place-items: center; }

/* 5. 绝对定位 + transform */
.child {
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
}
37. CSS 垂直居中（4种方法）

CSS

/* 1. line-height = height（单行文本）*/
.el { height: 50px; line-height: 50px; }

/* 2. Flexbox */
.parent { display: flex; align-items: center; }

/* 3. Grid */
.parent { display: grid; place-items: center; }

/* 4. 绝对定位 + transform */
.child {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

/* 5. display: table-cell */
.parent { display: table-cell; vertical-align: middle; }
38. 水平垂直居中（3种方案）

CSS

/* 方案1：Flexbox（最常用）*/
.parent {
  display: flex;
  justify-content: center;
  align-items: center;
}

/* 方案2：Grid */
.parent {
  display: grid;
  place-items: center;
}

/* 方案3：绝对定位 + transform */
.parent { position: relative; }
.child {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
39. CSS 单位区别

单位	说明
px	像素，绝对单位（逻辑像素）
em	相对当前元素字体大小（可继承，嵌套会叠加）
rem	相对根元素（html）字体大小（不受嵌套影响，移动端常用）
%	相对父元素的对应属性
vw	视口宽度的 1%（100vw = 整个视口宽）
vh	视口高度的 1%
vmin	vw/vh 中较小的那个
vmax	vw/vh 中较大的那个
40. 响应式布局 & @media 媒体查询

响应式设计核心原则：流式布局、弹性媒体、媒体查询。

CSS

/* 移动优先（推荐）*/
.container { width: 100%; }

/* 平板 */
@media (min-width: 768px) {
  .container { width: 750px; }
}

/* 桌面 */
@media (min-width: 1200px) {
  .container { width: 1170px; }
}
常用断点（参考 Bootstrap）：576px、768px、992px、1200px。

41. CSS 变量（Custom Properties）

CSS

/* 定义变量（通常在 :root 上定义全局变量）*/
:root {
  --primary-color: #007bff;
  --spacing: 16px;
}

/* 使用变量 */
.button {
  background-color: var(--primary-color);
  padding: var(--spacing);
  /* 可设置默认值 */
  color: var(--text-color, #333);
}
优势：运行时可动态修改（JS 可改），支持继承，适合主题切换/暗黑模式。

42. z-index 工作原理及失效情况

z-index 控制元素在 z 轴（垂直屏幕方向）的堆叠顺序，值越大越靠前。

失效情况：

元素 position 为 static（默认），z-index 不生效
父元素创建了新的层叠上下文（stacking context），子元素 z-index 只在该上下文内比较
opacity < 1、transform、filter 等会创建新层叠上下文
43. overflow 属性取值

visible（默认）：溢出内容可见
hidden：溢出内容裁剪，不可滚动（同时触发 BFC）
scroll：始终显示滚动条
auto：内容溢出时才显示滚动条（推荐）
clip（新）：类似 hidden，但不触发 BFC
44. line-height 与单行垂直居中

line-height 定义一行文字的行高（行盒高度）。

CSS

/* 单行文字垂直居中：使 line-height = 容器高度 */
.btn {
  height: 40px;
  line-height: 40px;
}
line-height 的取值可以是：无单位数值（推荐，如 1.5，相对字体大小）、px、em、%。

45. 文本溢出省略号

CSS

/* 单行文本溢出 */
.ellipsis {
  white-space: nowrap;       /* 不换行 */
  overflow: hidden;          /* 溢出隐藏 */
  text-overflow: ellipsis;   /* 显示省略号 */
}

/* 多行文本溢出（按行数，WebKit 内核）*/
.multi-ellipsis {
  display: -webkit-box;
  -webkit-line-clamp: 3;     /* 显示3行 */
  -webkit-box-orient: vertical;
  overflow: hidden;
}
46. transition vs animation

比较项	transition	animation
触发方式	需要状态变化（如 hover）	自动播放
关键帧	只有起始和结束两帧	可定义任意多帧（@keyframes）
循环	不支持	支持（animation-iteration-count）
控制粒度	较少	更丰富（延迟、速度、方向等）
47. transform 常见变换函数

translate(x, y)：位移
rotate(45deg)：旋转
scale(1.5)：缩放
skew(30deg, 20deg)：倾斜
matrix()：矩阵变换（底层）
3D 变换：translateZ()、rotateX()、perspective()
48. CSS 层叠（Cascading）

当多个样式规则作用于同一元素时，按以下优先级决定生效：

!important 用户样式
!important 作者样式
作者样式（开发者写的 CSS）
用户自定义样式
浏览器默认样式
同级规则下，再比较选择器优先级，优先级相同则后定义的覆盖前定义的。

49. inherit、initial、unset、revert 区别

inherit：强制继承父元素的值（不管该属性是否默认继承）
initial：重置为 CSS 规范中定义的初始默认值
unset：可继承属性则继承（等同 inherit），不可继承属性则初始化（等同 initial）
revert：回滚到浏览器默认样式
50. 用 CSS 画三角形

原理：将元素宽高设为 0，利用 border 宽度产生三角形。

CSS

/* 向下的三角形 */
.triangle {
  width: 0;
  height: 0;
  border-left: 50px solid transparent;
  border-right: 50px solid transparent;
  border-top: 50px solid red;
}

/* 向右的三角形 */
.triangle-right {
  width: 0;
  height: 0;
  border-top: 50px solid transparent;
  border-bottom: 50px solid transparent;
  border-left: 50px solid red;
}
51. CSS Sprite（雪碧图）

将多个小图标合并到一张大图，通过 background-position 精确定位显示所需图标。

优点：减少 HTTP 请求数，提升加载速度。 缺点：维护成本高（更新需重新合并），不易适配高清屏（Retina），现代项目已被 SVG 图标/字体图标（iconfont）/CSS Sprite 逐渐替代。

52. @font-face 与自定义字体

CSS

@font-face {
  font-family: 'MyFont';
  src: url('myfont.woff2') format('woff2'),
       url('myfont.woff') format('woff');
  font-weight: normal;
  font-style: normal;
  font-display: swap; /* 字体加载期间先显示系统字体，避免 FOIT */
}
body { font-family: 'MyFont', sans-serif; }
注意：字体版权问题；优先使用 woff2 格式（压缩率最高）；font-display: swap 优化性能。

53. white-space、word-break、overflow-wrap 区别

white-space：控制空白符处理和是否换行。nowrap = 不换行，pre = 保留空白。
word-break：控制单词如何断行。break-all = 任意字符处断行（中文常用），keep-all = 不在中文处断行。
overflow-wrap（原 word-wrap）：内容超出时是否允许在单词内断行。break-word = 超出才断。
54. CSS 预处理器（Sass/Less）的优势

变量：统一管理颜色、间距等
嵌套规则：减少选择器重复书写
混合（Mixin）：复用样式片段（类似函数）
继承（Extend）：共享样式规则
运算：支持数值计算
函数：内置颜色、数学函数
模块化：@import/@use 分文件管理
55. pointer-events 属性

控制元素是否可以成为鼠标事件的目标。

auto（默认）：正常响应鼠标事件
none：元素不响应任何鼠标事件（点击穿透），鼠标事件穿透到下层元素
使用场景：遮罩层上的装饰元素不影响下方点击、禁用按钮交互效果等。

三、Flexbox 布局（56-68题）
56. Flexbox 解决了什么问题？

传统布局（float、table）对垂直居中、等高列、动态分配剩余空间等场景极为麻烦。Flexbox 提供了一种一维（行/列）的弹性布局方案，轻松实现：

元素水平/垂直居中
按比例分配空间
调整元素排列顺序（order）
自动换行（flex-wrap）
57. Flex 容器属性

CSS

.container {
  display: flex;                          /* 启用 flex */
  flex-direction: row;                    /* 主轴方向：row|column|row-reverse|column-reverse */
  flex-wrap: nowrap;                      /* 换行：nowrap|wrap|wrap-reverse */
  flex-flow: row nowrap;                  /* flex-direction + flex-wrap 简写 */
  justify-content: flex-start;           /* 主轴对齐：flex-start|flex-end|center|space-between|space-around|space-evenly */
  align-items: stretch;                  /* 交叉轴单行对齐：stretch|flex-start|flex-end|center|baseline */
  align-content: stretch;               /* 交叉轴多行对齐（需 flex-wrap:wrap）*/
  gap: 10px;                            /* 子项间距（row-gap + column-gap） */
}
58. Flex 子项属性

CSS

.item {
  flex-grow: 0;       /* 放大比例，0 = 不放大 */
  flex-shrink: 1;     /* 缩小比例，1 = 等比缩小 */
  flex-basis: auto;   /* 主轴初始大小 */
  flex: 0 1 auto;     /* 上面三者简写（flex-grow flex-shrink flex-basis）*/
  align-self: auto;   /* 覆盖容器 align-items，单独设置交叉轴对齐 */
  order: 0;           /* 排列顺序，数值越小越靠前 */
}
59. flex: 1 是什么意思？

flex: 1 等价于 flex: 1 1 0%，即：

flex-grow: 1：允许放大，按比例占用剩余空间
flex-shrink: 1：允许缩小
flex-basis: 0%：初始尺寸为 0，以剩余空间为基准分配
常用于让某个子项填充剩余所有空间。

60. flex-direction 取值

row（默认）：水平从左到右
row-reverse：水平从右到左
column：垂直从上到下
column-reverse：垂直从下到上
61. justify-content vs align-items

justify-content：控制**主轴（main axis）**方向的对齐方式
align-items：控制**交叉轴（cross axis）**方向的对齐方式
当 flex-direction: row 时，主轴=水平，交叉轴=垂直。 当 flex-direction: column 时，主轴=垂直，交叉轴=水平。

62. align-content vs align-items

align-items：对每一行子项在交叉轴的对齐方式
align-content：对多行整体在交叉轴的对齐方式，只在 flex-wrap: wrap 且有多行时生效
63. flex-wrap

控制子项是否换行：

nowrap（默认）：不换行，子项可能被压缩
wrap：允许换行，从上到下
wrap-reverse：允许换行，从下到上
64. flex-grow、flex-shrink、flex-basis

flex-grow：剩余空间分配比例（0 = 不增长，1 = 按比例占用剩余空间）
flex-shrink：空间不足时收缩比例（0 = 不收缩，1 = 按比例收缩）
flex-basis：子项在主轴方向的初始大小（优先级高于 width/height，auto = 看内容）
65. Flexbox 实现圣杯布局

HTML

<div class="holy-grail">
  <header>Header</header>
  <div class="body">
    <nav>左侧导航（固定宽度）</nav>
    <main>中间内容（自适应）</main>
    <aside>右侧栏（固定宽度）</aside>
  </div>
  <footer>Footer</footer>
</div>
CSS

.holy-grail { display: flex; flex-direction: column; }
.body { display: flex; flex: 1; }
nav { width: 200px; flex-shrink: 0; }
main { flex: 1; }       /* 占满剩余空间 */
aside { width: 150px; flex-shrink: 0; }
66. Flex 中 float、clear、vertical-align 失效原因

当父元素设为 display: flex，子元素自动成为 flex 子项（flex item），脱离了正常文档流的规则：

float 的工作机制基于文档流，flex 格式化上下文中无浮动概念
clear 用于清除浮动，无浮动自然无效
vertical-align 只对行内/行内块元素有效，flex 子项不是行内元素
67. order 属性

控制 flex 子项的排列顺序，默认值为 0，数值越小越靠前，支持负数。不改变 DOM 结构，只影响视觉呈现。

68. Flexbox 让最后一个子元素靠右对齐

CSS

/* 方法1：给最后一个元素设置 margin-left: auto */
.last-item { margin-left: auto; }

/* 方法2：使用 justify-content: space-between（但会影响所有子项间距）*/
四、Grid 布局（69-75题）
69. Grid vs Flexbox 本质区别

Flexbox：一维布局，只能控制行（主轴）或列（单行/单列）
Grid：二维布局，同时控制行和列，适合整页布局和复杂网格
70. grid-template-columns / rows 与 fr 单位

CSS

.container {
  display: grid;
  /* 3列：左200px，中自适应，右200px */
  grid-template-columns: 200px 1fr 200px;
  /* 行高 */
  grid-template-rows: 80px 1fr 60px;
}
fr（fraction）：表示剩余空间的一份，类似 flex-grow。1fr 2fr = 1:2 比例分配。

71. gap 属性

CSS

.grid { 
  gap: 20px;           /* 行列间距都是 20px */
  gap: 10px 20px;      /* 行间距10px，列间距20px */
  row-gap: 10px;       /* 仅行间距 */
  column-gap: 20px;    /* 仅列间距 */
}
72. grid-column / grid-row 跨列/跨行

CSS

.item {
  grid-column: 1 / 3;      /* 从第1条列线到第3条列线，跨2列 */
  grid-row: 1 / span 2;   /* 从第1行，跨2行 */
  grid-column: 1 / -1;     /* 从第1列到最后一列，铺满 */
}
73. repeat() 和 minmax()

CSS

/* repeat(次数, 大小) */
grid-template-columns: repeat(3, 1fr);           /* 3列等分 */
grid-template-columns: repeat(auto-fill, 200px); /* 自动填充列 */

/* minmax(最小值, 最大值) */
grid-template-rows: minmax(100px, auto);          /* 最小100px，最大自适应 */

/* 常用组合：响应式卡片 */
grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
74. 隐式网格与 grid-auto-rows

隐式网格：当内容超出 grid-template-rows/columns 定义的范围时，浏览器自动创建的网格轨道。

CSS

.grid {
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 150px;    /* 所有自动创建的行高为150px */
  grid-auto-flow: row;      /* 自动放置方向：row（默认）| column | dense */
}
75. 自适应多列卡片布局（不用媒体查询）

CSS

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
  gap: 16px;
}
效果：屏幕宽时多列，屏幕窄时自动减少列数，最小卡片宽 240px，自动适配所有屏幕。

五、CSS3 新特性（76-85题）
76. CSS3 主要新特性（10+）

圆角：border-radius
阴影：box-shadow、text-shadow
渐变：linear-gradient、radial-gradient
过渡：transition
动画：@keyframes + animation
变换：transform（2D/3D）
弹性布局：flexbox
网格布局：grid
媒体查询：@media
自定义字体：@font-face
滤镜：filter
多列布局：column-count
CSS 变量：var(--custom-property)
混合模式：mix-blend-mode
裁剪路径：clip-path
77. border-radius 实现圆形和椭圆形

CSS

/* 圆形（宽=高，border-radius=50%）*/
.circle {
  width: 100px;
  height: 100px;
  border-radius: 50%;
}

/* 椭圆（宽≠高，border-radius=50%）*/
.ellipse {
  width: 200px;
  height: 100px;
  border-radius: 50%;
}

/* 胶囊形 */
.pill { border-radius: 9999px; }
78. box-shadow 与 text-shadow 语法

CSS

/* box-shadow: 水平偏移 垂直偏移 模糊半径 扩散半径 颜色 inset(内阴影) */
.card { box-shadow: 0 4px 12px 0 rgba(0,0,0,0.15); }
.inner { box-shadow: inset 0 2px 4px rgba(0,0,0,0.1); }

/* text-shadow: 水平偏移 垂直偏移 模糊半径 颜色（无扩散半径）*/
.title { text-shadow: 1px 1px 3px rgba(0,0,0,0.3); }
79. CSS3 渐变

CSS

/* 线性渐变：从左到右，红到蓝 */
background: linear-gradient(to right, red, blue);
background: linear-gradient(135deg, #f00 0%, #00f 100%);

/* 径向渐变：从中心扩散 */
background: radial-gradient(circle, yellow, orange);
background: radial-gradient(ellipse at center, #fff 0%, #000 100%);

/* 重复渐变 */
background: repeating-linear-gradient(45deg, #f00, #f00 10px, #fff 10px, #fff 20px);
80. transition 完整语法

CSS

/* transition: 属性 时间 时间函数 延迟 */
.btn {
  transition: all 0.3s ease 0s;
  /* 或分别指定多个属性 */
  transition: background-color 0.3s ease, transform 0.2s linear;
}
transition-timing-function：

ease（默认）：先快后慢
linear：匀速
ease-in：先慢后快
ease-out：先快后慢（更自然）
ease-in-out：两端慢中间快
cubic-bezier(x1,y1,x2,y2)：自定义贝塞尔曲线
81. CSS3 动画 @keyframes + animation

CSS

/* 定义动画 */
@keyframes slideIn {
  0%   { transform: translateX(-100%); opacity: 0; }
  100% { transform: translateX(0);     opacity: 1; }
}

/* 使用动画 */
.box {
  animation-name: slideIn;          /* 动画名称 */
  animation-duration: 0.5s;        /* 持续时间 */
  animation-timing-function: ease; /* 时间函数 */
  animation-delay: 0.1s;           /* 延迟 */
  animation-iteration-count: 1;    /* 次数（infinite=无限） */
  animation-direction: normal;     /* 方向（alternate=往返）*/
  animation-fill-mode: forwards;   /* 结束后保持最终状态 */
  animation-play-state: running;   /* running|paused */
  
  /* 简写 */
  animation: slideIn 0.5s ease 0.1s 1 normal forwards;
}
82. CSS3 filter 滤镜常见函数

CSS

img {
  filter: blur(4px);           /* 高斯模糊 */
  filter: brightness(1.5);     /* 亮度（>1变亮）*/
  filter: contrast(200%);      /* 对比度 */
  filter: grayscale(100%);     /* 灰度（100%=黑白）*/
  filter: sepia(50%);          /* 复古色调 */
  filter: hue-rotate(90deg);   /* 色相旋转 */
  filter: invert(100%);        /* 色彩反转 */
  filter: opacity(50%);        /* 透明度 */
  filter: saturate(200%);      /* 饱和度 */
  filter: drop-shadow(2px 4px 6px black); /* 投影（影响整个形状，含透明区域）*/
}
83. clip-path 属性

clip-path 将元素裁剪成指定形状，裁剪区域外的部分不可见（不占空间）。

CSS

.el {
  clip-path: circle(50%);                          /* 圆形 */
  clip-path: ellipse(50% 30% at 50% 50%);         /* 椭圆 */
  clip-path: polygon(0 0, 100% 0, 50% 100%);      /* 三角形 */
  clip-path: inset(10% 20% 30% 40% round 10px);   /* 内矩形（圆角）*/
  clip-path: path('M0,0 L100,0 L50,100 Z');       /* SVG路径 */
}
84. CSS 多列布局

CSS

.text {
  column-count: 3;         /* 分3列 */
  column-gap: 20px;        /* 列间距 */
  column-rule: 1px solid #ccc; /* 列分隔线（宽度 样式 颜色）*/
  column-width: 200px;     /* 每列最小宽度，浏览器自动计算列数 */
}

/* 跨列显示（如标题）*/
h2 { column-span: all; }
85. will-change 属性

will-change 提前告知浏览器某个元素将发生变化，浏览器可提前做**图层提升（GPU 加速）**等优化准备。

CSS

.animated { will-change: transform, opacity; }
注意事项：

不要滥用（每个声明都会占用 GPU 内存）
只在元素即将变化前设置，变化结束后移除
不要用 will-change: all
六、综合与实战（86-100题）
86. 重排（Reflow）vs 重绘（Repaint）

重排（Reflow）：元素的几何信息（尺寸、位置）改变，浏览器需重新计算布局。性能代价大。 触发：改变 width/height、padding、margin、top/left、font-size、添加/删除元素、读取 offsetWidth 等布局属性

重绘（Repaint）：只改变视觉外观（颜色、背景、visibility），无需重新计算布局。 触发：color、background-color、outline、box-shadow 等

规律：重排必然引起重绘，重绘不一定引起重排。

优化手段：

批量修改 DOM（DocumentFragment / 先 display:none 再操作）
避免在循环中读写布局属性
使用 transform 和 opacity 代替改变几何属性（走合成层，不触发重排）
使用 will-change 或 transform: translateZ(0) 提升合成层
87. 自适应正方形（宽高始终相等）

CSS

/* 方案1：padding-top/padding-bottom 百分比相对父元素宽度 */
.square {
  width: 50%;
  padding-top: 50%;   /* 等于 width，形成正方形 */
  height: 0;          /* 高度由 padding 撑开 */
  background: red;
}

/* 方案2：aspect-ratio（现代方案，推荐）*/
.square {
  width: 50%;
  aspect-ratio: 1 / 1;
  background: red;
}
88. 0.5px 细线兼容方案

CSS

/* 方案1：transform scale（推荐）*/
.line {
  height: 1px;
  transform: scaleY(0.5);
  transform-origin: 0 0;
}

/* 方案2：伪元素 + transform（常用于边框）*/
.border-1px::after {
  content: '';
  position: absolute;
  left: 0; top: 0;
  width: 200%;
  height: 200%;
  border: 1px solid #ccc;
  transform: scale(0.5);
  transform-origin: 0 0;
}

/* 方案3：background渐变实现 */
.hr {
  background: linear-gradient(to bottom, transparent 50%, #ccc 50%);
  height: 1px;
}
89. 移动端 viewport 元标签

HTML

<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no">
width=device-width：视口宽度 = 设备屏幕宽度
initial-scale=1.0：初始缩放比例为 1
maximum-scale=1.0 + user-scalable=no：禁止用户手动缩放（根据需求决定是否设置）
90. 移动端 1px 问题

原因：Retina 屏的**设备像素比（DPR）**为 2 或 3，即 1 CSS 像素 = 2×2 或 3×3 物理像素，导致 CSS 的 1px border 在屏幕上实际渲染为 2px 或 3px 宽。

解决方案：

transform: scaleY(0.5) （DPR=2）或 scaleY(0.333)（DPR=3）
使用伪元素 + scale 方案
使用 border-image 配合 1px 图片
使用 box-shadow: 0 1px 0 0 rgba(0,0,0,.2) 模拟
SVG 方案（最精准）
91. 粘性 Footer（Sticky Footer）

CSS

/* 方案1：Flexbox（推荐）*/
body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
main { flex: 1; }  /* 撑满剩余高度，把footer挤到底部 */

/* 方案2：Grid */
body {
  display: grid;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}
92. CSS 模块化方案

方案	说明	优点	缺点
BEM	命名规范（Block__Element--Modifier）	无需工具，可读性好	类名冗长
CSS Modules	构建工具生成局部作用域	彻底避免冲突	需构建工具
Scoped CSS	Vue 单文件组件的 <style scoped>	开发简单	样式穿透问题
CSS-in-JS	styled-components/emotion	动态样式灵活	运行时开销，不利于缓存
Tailwind CSS	原子化 CSS 类	零配置，复用性强	类名多，HTML 复杂
93. CSS 性能优化（6条以上）

减少选择器层级：避免过度嵌套（如 .a .b .c .d），层级 ≤ 3
避免使用通配符选择器 *：匹配所有元素，性能差
使用 transform 和 opacity 做动画：走合成层，不触发重排
减少重排操作：批量修改 DOM，读写分离
提取关键 CSS 内联：首屏渲染不等待 CSS 文件加载
压缩 CSS 文件：去除空白、注释，构建工具（Webpack/Vite）自动处理
合理使用 will-change：提前提升合成层（不滥用）
使用 CSS Sprite 或 SVG Symbol：减少 HTTP 请求
媒体查询按需加载：<link media="(min-width:768px)" href="desktop.css">
避免 @import：改用 <link> 或构建工具合并
94. 暗黑模式（Dark Mode）切换

方案1：CSS 变量 + 媒体查询（自动跟随系统）

CSS

:root {
  --bg: #ffffff;
  --text: #333333;
}
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #1a1a1a;
    --text: #f0f0f0;
  }
}
body { background: var(--bg); color: var(--text); }
方案2：CSS 变量 + JS 切换（用户手动控制）

JavaScript

// 切换时给 html 元素添加/移除 data-theme 属性
document.documentElement.setAttribute('data-theme', 'dark');
CSS

[data-theme="dark"] { --bg: #1a1a1a; --text: #f0f0f0; }
95. srcset 和 sizes 响应式图片

HTML

<img
  src="small.jpg"
  srcset="small.jpg 480w, medium.jpg 768w, large.jpg 1200w"
  sizes="(max-width: 480px) 100vw,
         (max-width: 768px) 50vw,
         33vw"
  alt="响应式图片"
>
srcset：列出可用图片及其实际像素宽度（w 描述符）
sizes：告诉浏览器在不同条件下图片将显示的CSS 宽度
浏览器根据两者计算选择最合适的图片（同时考虑 DPR）
96. CSS 浏览器兼容性处理

CSS 厂商前缀：-webkit-、-moz-、-ms-（现代浏览器多已不需要，用 Autoprefixer 自动添加）
Autoprefixer：PostCSS 插件，根据目标浏览器配置（browserslist）自动添加前缀
降级处理：先写降级方案，再写新特性（浏览器会忽略不支持的属性）
Feature Queries：@supports 检测特性支持
CSS

@supports (display: grid) {
  .container { display: grid; }
}
使用 Can I Use 网站：查询各特性浏览器支持情况
97. 关键 CSS（Critical CSS）

关键 CSS 是指首屏渲染所必需的最小 CSS 集合。

优化方案：

将首屏关键 CSS 内联到 <head> 的 <style> 标签中，避免额外 HTTP 请求
非关键 CSS 异步加载：
HTML

<link rel="preload" href="styles.css" as="style" onload="this.rel='stylesheet'">
工具：critical（npm 包）、webpack 插件自动提取
98. 纯 CSS 旋转动画（Loading Spinner）

HTML

<div class="spinner"></div>
CSS

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #f3f3f3;        /* 灰色圆圈 */
  border-top: 4px solid #3498db;    /* 蓝色弧线 */
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0%   { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
99. 纯 CSS 下拉菜单

HTML

<nav>
  <ul>
    <li class="dropdown">
      <a href="#">菜单</a>
      <ul class="submenu">
        <li><a href="#">子项1</a></li>
        <li><a href="#">子项2</a></li>
      </ul>
    </li>
  </ul>
</nav>
CSS

.submenu {
  display: none;         /* 默认隐藏 */
  position: absolute;
  top: 100%;
  left: 0;
  background: white;
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
  list-style: none;
  min-width: 150px;
}

.dropdown {
  position: relative;
}

/* hover 时显示子菜单 */
.dropdown:hover .submenu {
  display: block;
}

/* 平滑过渡版（用 visibility + opacity）*/
.submenu {
  visibility: hidden;
  opacity: 0;
  transition: opacity 0.2s, visibility 0.2s;
}
.dropdown:hover .submenu {
  visibility: visible;
  opacity: 1;
}
100. 开放题（参考答题思路）

本题考察面试者的实战经验与问题解决能力，可按以下结构组织回答：

描述场景：项目背景（如电商首页、后台管理系统）
说明问题：具体的布局难点（如复杂的表格+固定列+滚动、移动端适配、渐变动画卡顿）
分析原因：定位问题根源（如 z-index 层叠上下文混乱、未触发 GPU 加速）
解决方案：具体 CSS/HTML 技术手段
总结经验：这个问题让你学到了什么
示例回答（供参考）：

在开发一个移动端 H5 活动页时，顶部 banner 使用了 position:fixed 固定定位，但在 iOS Safari 上滚动时会出现闪烁。分析后发现是 iOS Safari 的合成层优化问题，通过给 banner 添加 transform: translateZ(0) 强制提升 GPU 合成层，成功解决了闪烁问题，但需注意不能过多使用以免消耗过多 GPU 内存。