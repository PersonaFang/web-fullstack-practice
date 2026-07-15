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

1. `<!DOCTYPE html>` 的作用是什么？不写会怎样？
2. 什么是 HTML 语义化？请举出至少 5 个语义化标签并说明其用途。
3. HTML5 相比 HTML4 新增了哪些主要特性？
4. `<meta>` 标签有哪些常见属性？分别有什么作用？
5. `<script>` 标签中 `defer` 和 `async` 属性有什么区别？
6. `<img>` 标签中 `alt` 和 `title` 属性有什么区别？
7. `<link>` 和 `@import` 引入 CSS 有什么区别？
8. `<a>` 标签的 `target` 属性有哪些取值？分别代表什么意思？
9. 行内元素（inline）和块级元素（block）有哪些区别？各举 5 个例子。
10. `<iframe>` 有哪些优缺点？
11. HTML 中 `data-*` 自定义属性的作用是什么？如何获取？
12. `<form>` 表单的 `enctype` 属性有哪几种值？分别适用于什么场景？
13. `<input>` 标签在 HTML5 中新增了哪些 `type` 类型？
14. `<canvas>` 和 `<svg>` 有什么区别？各自适用于什么场景？
15. 什么是 HTML 的 DOM 结构？BOM 和 DOM 有什么区别？
16. `<head>` 标签中通常放哪些内容？为什么 `<script>` 建议放在 `<body>` 底部？
17. `src` 和 `href` 属性有什么区别？
18. HTML 中如何实现图片懒加载（Lazy Loading）？
19. `<table>` 布局和 CSS 布局相比有哪些弊端？
20. HTML 全局属性有哪些？至少列举 6 个。
21. 什么是 `Web Worker`？它解决了什么问题？
22. `localStorage`、`sessionStorage` 和 `Cookie` 三者有什么区别？
23. 什么是 HTML 可访问性（Accessibility）？ARIA 属性的作用是什么？
24. `<picture>` 标签的作用是什么？和 `<img>` 的 `srcset` 有什么区别？
25. 浏览器是如何渲染一个 HTML 页面的？简述关键渲染路径（Critical Rendering Path）。

---

## 二、CSS 基础（26-55题）

26. 什么是 CSS 盒模型？标准盒模型和 IE 盒模型有什么区别？`box-sizing` 如何切换？
27. CSS 选择器的优先级（权重）是如何计算的？`!important` 有什么缺点？
28. 请列举所有 CSS 选择器类型（至少 10 种）。
29. `display` 属性有哪些常见取值？分别有什么特点？
30. `position` 有哪几种取值？`absolute` 和 `relative` 各依据什么来定位？
31. `float` 浮动会带来什么问题？如何清除浮动（至少 4 种方法）？
32. 什么是 BFC（块级格式化上下文）？哪些情况可以触发 BFC？BFC 有什么作用？
33. `visibility: hidden` 和 `display: none` 和 `opacity: 0` 三者有什么区别？
34. 什么是外边距合并（Margin Collapse）？在哪些情况下会发生？如何避免？
35. 伪类（Pseudo-class）和伪元素（Pseudo-element）有什么区别？各举 5 个例子。
36. CSS 中如何实现水平居中？请给出至少 4 种方法。
37. CSS 中如何实现垂直居中？请给出至少 4 种方法。
38. 如何使用纯 CSS 实现一个元素水平垂直都居中？至少写出 3 种方案。
39. CSS 中 `em`、`rem`、`vw`、`vh`、`px` 等单位有什么区别？
40. 什么是响应式布局？如何实现响应式设计？`@media` 媒体查询如何使用？
41. CSS 变量（Custom Properties）是什么？如何定义和使用？
42. `z-index` 的工作原理是什么？什么情况下 `z-index` 会失效？
43. CSS 中的 `overflow` 属性有哪些取值？分别有什么作用？
44. `line-height` 的作用是什么？如何用它实现单行文字的垂直居中？
45. CSS 中如何实现单行文本溢出显示省略号？多行文本溢出如何处理？
46. `transition` 和 `animation` 有什么区别？分别如何使用？
47. `transform` 属性有哪些常见变换函数？
48. 什么是 CSS 层叠（Cascading）？样式的来源有哪些？优先级如何？
49. `inherit`、`initial`、`unset`、`revert` 这几个 CSS 关键字有什么区别？
50. 如何用 CSS 画一个三角形？请写出代码思路。
51. 什么是 CSS Sprite（雪碧图）？有什么优缺点？
52. `@font-face` 的作用是什么？使用自定义字体时需要注意什么？
53. CSS 中 `white-space`、`word-break`、`overflow-wrap` 有什么区别？
54. 什么是 CSS 预处理器？Sass/Less 相比原生 CSS 有哪些优势？
55. `pointer-events` 属性有什么作用？有哪些使用场景？

---

## 三、Flexbox 布局（56-68题）

56. 什么是 Flexbox？它解决了传统布局的哪些痛点？
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
77. `border-radius` 如何实现圆形和椭圆形？
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