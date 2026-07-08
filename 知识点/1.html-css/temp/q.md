# 🎯 使用建议

以上两份文件已覆盖 <!--citation:3-->字节跳动、腾讯、百度、小米、小红书、滴滴、快手等大厂的 HTML/CSS 高频真题，建议按以下方式使用：

| 阶段 | 建议 |
|------|------|
| 📝 第一遍 | 只看题目，自己写答案，不看答案卷 |
| 🔍 第二遍 | 对照答案，找出差距，重点复习薄弱项 |
| 🗣️ 第三遍 | 遮住答案，**口述**每道题，模拟面试表达 |
| 💻 实践 | 所有涉及代码的题目（三角形、居中、动画等）亲自敲代码验证 |

# HTML & CSS 面试题题目卷（100题）
> 对标 2025 年中国市场前端岗位面试高频考点

---

## 一、HTML 基础（1-25题）

1. `<!DOCTYPE html>` 的作用是什么？不写会怎样？——作用是告知浏览器，以标准模式Standards Mode来解析HTML。不写的话会进入怪异模式Quirks Mode，使用旧版IE的渲染规则，导致布局不一样

2. 什么是 HTML 语义化？请举出至少 5 个语义化标签并说明其用途。——

   语义化是指使用**具有明确含义的标签**描述内容结构，而非全用 `<div>` 堆砌。

   下面是HTML5新增的语义化标签

   - `<header>`：页面或区块的头部
   - `<nav>`：导航链接区域
   - `<main>`：页面主体内容
   - `<article>`：独立文章内容
   - `<section>`：文档中的章节
   - `<aside>`：侧边栏/辅助内容
   - `<footer>`：页面或区块的底部

   **好处**：提升代码可读性和可维护性、利于 SEO、有助于屏幕阅读器等辅助技术识别内容。

3. HTML5 相比 HTML4 新增了哪些主要特性？——

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

4. `<meta>` 标签有哪些常见属性？分别有什么作用？——

   <!-- 字符编码 -->

   <meta charset="UTF-8">

   <!-- 响应式视口 -->
   网页宽度跟着手机屏幕走，打开页面不缩放。`meta viewport` 主要用于移动端适配。`width=device-width` 表示让页面布局视口宽度等于设备屏幕宽度，`initial-scale=1.0` 表示页面初始缩放比例为 1。如果不设置，移动端浏览器可能会按照默认较宽的视口渲染页面，再整体缩小显示，导致文字和布局变小，不利于响应式布局。

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

5. `<script>` 标签中 `defer` 和 `async` 属性有什么区别？——

   属性   下载方式                           执行时机   保证顺序

   无属性  同步，阻塞 HTML 解析   立即执行   ✅

   async  异步，不阻塞   下载完立即执行，可能在 DOMContentLoaded 之前或之后  ❌

   defer  异步，不阻塞   HTML 解析完成后、DOMContentLoaded 之前按序执行  ✅

   使用建议：独立无依赖脚本用 async（如统计埋点），有依赖顺序的用 defer。

   `DOMContentLoaded` 是浏览器里的一个事件：

   > **HTML 文档结构已经加载并解析完成了，DOM 树已经建立好了，可以开始安全操作页面元素了。**
   >
   > 你写的 HTML：
   >
   > ```
   > <body>
   >   <h1>标题</h1>
   >   <button id="btn">点击</button>
   > </body>
   > ```
   >
   > 浏览器会把它解析成一棵“DOM 树”。
   >
   > 你用 JS 操作页面时，比如：
   >
   > ```
   > const btn = document.getElementById('btn');
   > ```
   >
   > 本质就是在 DOM 树里找这个按钮。

6. `<img>` 标签中 `alt` 和 `title` 属性有什么区别？——

   alt：图片无法加载时的替代文字，对搜索引擎爬虫和屏幕阅读器至关重要，是可访问性必须属性。

   title：鼠标悬停时显示的提示文字，辅助说明，非必须属性。

7. `<link>` 和 `@import` 引入 CSS 有什么区别？——

   `<link>` 是 HTML 标签，通常写在 `<head>` 中，用来引入外部 CSS。浏览器解析 HTML 时就能发现它，并尽早并行下载，性能更好，也可以通过 JavaScript 操作。
    `@import` 是 CSS 语法，写在 CSS 文件内部，只有当 CSS 文件被加载并解析到 `@import` 时，浏览器才会继续加载被引入的 CSS，因此发现更晚，可能增加请求延迟，性能相对较差。
    实际开发中一般推荐使用 `<link>` 引入 CSS。

8. `<a>` 标签的 `target` 属性有哪些取值？分别代表什么意思？——

   _self（默认）：在当前窗口打开

   _blank：在新标签/窗口打开（推荐配合 rel="noopener noreferrer" 使用，防止安全漏洞）

   `rel="noopener noreferrer"` 是安全优化：

   - `noopener`：防止新页面通过 `window.opener` 操作原页面；
   - `noreferrer`：不把当前页面来源信息传给新页面。

   _parent：在父框架中打开

   _top：在顶层窗口中打开

   framename：在指定 <iframe> 中打开

9. 行内元素（inline）和块级元素（block）有哪些区别？各举 5 个例子。——1.行内元素常见的标签是span，块级元素是div；2.行内元素不会换行，块级元素会换行；3.行内元素只会改变它括起来的内容，更好控制，而块级元素直接影响一整段

10. `<iframe>` 有哪些优缺点？——

11. HTML 中 `data-*` 自定义属性的作用是什么？如何获取？——

12. `<form>` 表单的 `enctype` 属性有哪几种值？分别适用于什么场景？——

13. `<input>` 标签在 HTML5 中新增了哪些 `type` 类型？——

14. `<canvas>` 和 `<svg>` 有什么区别？各自适用于什么场景？——

15. 什么是 HTML 的 DOM 结构？BOM 和 DOM 有什么区别？——

16. `<head>` 标签中通常放哪些内容？为什么 `<script>` 建议放在 `<body>` 底部？——head标签中通常放初始化相关的、样式、网页的title

17. `src` 和 `href` 属性有什么区别？——

18. HTML 中如何实现图片懒加载（Lazy Loading）？——将图片存到缓存中，一定时间内不需要再向后端申请加载了

19. `<table>` 布局和 CSS 布局相比有哪些弊端？——table不好统一管理样式

20. HTML 全局属性有哪些？至少列举 6 个。——

21. 什么是 `Web Worker`？它解决了什么问题？——

22. `localStorage`、`sessionStorage` 和 `Cookie` 三者有什么区别？

23. 什么是 HTML 可访问性（Accessibility）？ARIA 属性的作用是什么？

24. `<picture>` 标签的作用是什么？和 `<img>` 的 `srcset` 有什么区别？

25. 浏览器是如何渲染一个 HTML 页面的？简述关键渲染路径（Critical Rendering Path）。

---

## 二、CSS 基础（26-55题）

26. 什么是 CSS 盒模型？标准盒模型和 IE 盒模型有什么区别？`box-sizing` 如何切换？——CSS 盒模型可以只改变该盒子内的样式，还可以分层分成多个盒子管理
27. CSS 选择器的优先级（权重）是如何计算的？`!important` 有什么缺点？——权重越大，渲染层级越高，会遮盖权重小的
28. 请列举所有 CSS 选择器类型（至少 10 种）。——标签选择器、类选择器、父类选择器、子类选择器、兄弟选择器
29. `display` 属性有哪些常见取值？分别有什么特点？——block、
30. `position` 有哪几种取值？`absolute` 和 `relative` 各依据什么来定位？——行列坐标、相对还是绝对位置，absolute是根据网页全局来定位，relative是相对当前所在的盒子位置来定位
31. `float` 浮动会带来什么问题？如何清除浮动（至少 4 种方法）？——主模块会和子模块重叠到一起。清除浮动的方法：
32. 什么是 BFC（块级格式化上下文）？哪些情况可以触发 BFC？BFC 有什么作用？
33. `visibility: hidden` 和 `display: none` 和 `opacity: 0` 三者有什么区别？
34. 什么是外边距合并（Margin Collapse）？在哪些情况下会发生？如何避免？——表格的外边距合并成一条线
35. 伪类（Pseudo-class）和伪元素（Pseudo-element）有什么区别？各举 5 个例子。
36. CSS 中如何实现水平居中？请给出至少 4 种方法。
37. CSS 中如何实现垂直居中？请给出至少 4 种方法。
38. 如何使用纯 CSS 实现一个元素水平垂直都居中？至少写出 3 种方案。
39. CSS 中 `em`、`rem`、`vw`、`vh`、`px` 等单位有什么区别？
40. 什么是响应式布局？如何实现响应式设计？`@media` 媒体查询如何使用？——就是根据当前页面尺寸的不同，展示的数据不一样，手机、平板、电脑的尺寸，或者缩小网页的尺寸。利用media媒体查询；媒体查询是由多层if配min、max屏幕像素尺寸的边界范围使用
41. CSS 变量（Custom Properties）是什么？如何定义和使用？
42. `z-index` 的工作原理是什么？什么情况下 `z-index` 会失效？——用于标记每个盒子的层级
43. CSS 中的 `overflow` 属性有哪些取值？分别有什么作用？
44. `line-height` 的作用是什么？如何用它实现单行文字的垂直居中？
45. CSS 中如何实现单行文本溢出显示省略号？多行文本溢出如何处理？
46. `transition` 和 `animation` 有什么区别？分别如何使用？——transition是直接移动到指定位置，animation是可以设置动画相关的，时间、重复次数、也可以指定移动路线
47. `transform` 属性有哪些常见变换函数？
48. 什么是 CSS 层叠（Cascading）？样式的来源有哪些？优先级如何？
49. `inherit`、`initial`、`unset`、`revert` 这几个 CSS 关键字有什么区别？——initial是初始化值，unset是重置值，revert是反转当前效果
50. 如何用 CSS 画一个三角形？请写出代码思路。——
51. 什么是 CSS Sprite（雪碧图）？有什么优缺点？——广泛应用于表情、标签等，优点是将大量表情、标签放到一张图片中，这样各种就不需要反复向后端申请不同的图片。缺点是移动像素位置麻烦点
52. `@font-face` 的作用是什么？使用自定义字体时需要注意什么？——是用一些文字标签，这样页面放大，标签不会像图片那样出现像素边缘模糊，文字边缘始终锐利；需要注意设置字体时，要额外定义类选择器来设置字体，直接设置容易被字体本身自带的选择器参数优先覆盖
53. CSS 中 `white-space`、`word-break`、`overflow-wrap` 有什么区别？
54. 什么是 CSS 预处理器？Sass/Less 相比原生 CSS 有哪些优势？
55. `pointer-events` 属性有什么作用？有哪些使用场景？

---

## 三、Flexbox 布局（56-68题）

56. 什么是 Flexbox？它解决了传统布局的哪些痛点？——弹性盒子，可以让盒子布置到移动到页面各个位置
57. Flex 容器（container）上有哪些主要属性？请逐一说明。
58. Flex 子项（item）上有哪些主要属性？请逐一说明。
59. `flex: 1` 是什么意思？等价于哪三个属性的组合？
60. `flex-direction` 有哪几种取值？
61. `justify-content` 和 `align-items` 有什么区别？
62. `align-content` 和 `align-items` 有什么区别？在什么情况下 `align-content` 才生效？
63. `flex-wrap` 有什么作用？默认值是什么？
64. `flex-grow`、`flex-shrink`、`flex-basis` 分别代表什么含义？
65. 如何用 Flexbox 实现一个经典的"圣杯布局"（左右固定，中间自适应）？
66. 使用 Flex 布局时，子元素的 `float`、`clear` 和 `vertical-align` 属性会失效，为什么？
67. `order` 属性的作用是什么？默认值是多少？
68. 如何用 Flexbox 让最后一个子元素靠右对齐？

---

## 四、Grid 布局（69-75题）

69. 什么是 CSS Grid 布局？它和 Flexbox 有什么本质区别？
70. `grid-template-columns` 和 `grid-template-rows` 如何使用？`fr` 单位是什么？
71. `grid-gap`（`gap`）属性的作用是什么？
72. `grid-column` 和 `grid-row` 如何控制元素跨列/跨行？
73. `repeat()` 函数和 `minmax()` 函数在 Grid 中如何使用？
74. 什么是隐式网格（Implicit Grid）？`grid-auto-rows` 有什么作用？
75. 如何用 Grid 实现一个自适应的多列卡片布局（不使用媒体查询）？

---

## 五、CSS3 新特性（76-85题）

76. CSS3 中新增了哪些主要特性？请列举至少 10 项。
77. `border-radius` 如何实现圆形和椭圆形？——circle设为100%；circle上下左右分别设置
78. `box-shadow` 和 `text-shadow` 的语法是什么？各参数分别代表什么？
79. CSS3 渐变（gradient）有哪几种类型？如何使用线性渐变和径向渐变？
80. CSS3 过渡（`transition`）的完整语法是什么？`transition-timing-function` 有哪些取值？
81. CSS3 动画（`@keyframes` + `animation`）如何定义和使用？`animation` 的各子属性是什么？
82. CSS3 中的滤镜（`filter`）属性有哪些常见函数？
83. `clip-path` 属性的作用是什么？能实现哪些形状？
84. CSS3 中的多列布局（`column-count`、`column-gap` 等）如何使用？
85. CSS 中的 `will-change` 属性有什么作用？使用时需要注意什么？

---

## 六、综合与实战（86-100题）

86. 什么是重排（Reflow）和重绘（Repaint）？有哪些操作会触发重排？如何减少重排？
87. 如何实现一个自适应的正方形（宽高始终相等）？请给出至少 2 种方案。
88. 实现一个 0.5px 的细线在不同设备上的兼容方案有哪些？
89. 什么是移动端 `viewport` 元标签？常见配置是什么？
90. 什么是 `1px` 问题？在移动端高分辨率屏幕（Retina 屏）上如何解决？
91. 如何实现一个粘性布局（Sticky Footer），让 footer 始终固定在页面底部？
92. CSS 模块化有哪些方案？（CSS Modules、BEM、Scoped CSS 等）各有什么优缺点？
93. 什么是 CSS 性能优化？请列举至少 6 条优化策略。
94. 如何实现暗黑模式（Dark Mode）的切换？
95. `srcset` 和 `sizes` 属性如何配合实现响应式图片？
96. 如何处理 CSS 的浏览器兼容性问题？`Autoprefixer` 的作用是什么？
97. 什么是关键 CSS（Critical CSS）？如何实现首屏 CSS 内联优化？
98. 使用 CSS 如何实现一个加载中的旋转动画（loading spinner）？
99. 如何实现一个纯 CSS 的下拉菜单（hover 时显示子菜单）？
100. 请描述你在项目中遇到过的最复杂的一个 CSS 布局问题，以及你的解决思路。（开放题）