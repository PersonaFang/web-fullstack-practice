# HTML & CSS 补充面试题（全栈 + AI Agent 开发方向）
> 筛选自 2025-2026 年国内字节、腾讯、阿里、快手等大厂
> 针对全栈 + AI Agent 开发岗位真实高频考点，补充前两份文件未覆盖内容
# 🎯 补充题定位说明

| 分类 | 题号 | 核心考察点 |
|------|------|-----------|
| HTML 进阶 | 1-10 | SSE/流式渲染、template/dialog/popover 新 API、XSS 防御 |
| HTML 工程化 | 11-20 | PWA、Web Components、Clipboard API、微前端 |
| CSS 工程化 | 21-30 | Tailwind、@layer/@scope、容器查询、subgrid、View Transitions |
| CSS 现代特性 | 31-40 | overscroll、clamp、accent-color、Houdini、isolation |
| AI 实战场景 | 41-60 | 打字机动画、自动滚动、骨架屏、Core Web Vitals、移动端适配 |

<!--citation:2-->这份补充题对应字节跳动 AIDP 岗位真实考察的 MCP 协议、大模型工具调用、AI 工程化等方向在前端层面的体现，<!--citation:2-->同时覆盖了腾讯 CSIG 面试中考察的 SSE vs Axios、流式输出原理、CSS 优化等高频考点。祝面试顺利！🚀
---

## 一、HTML 进阶与工程化（1-20题）

1. 在 AI 对话产品（如 ChatGPT 类应用）中，流式输出的文字是如何逐字渲染到页面上的？HTML 层面需要注意什么？

2. SSE（Server-Sent Events）与 WebSocket 在 HTML/前端层面如何使用？二者在 AI 流式场景中如何选择？

3. 什么是 `<template>` 标签？它和普通隐藏 div 有什么区别？在 AI 生成内容动态插入场景中有什么价值？

4. `contenteditable` 属性有什么作用？在 AI 富文本编辑器、Prompt 输入框等场景中有哪些使用注意事项？

5. 什么是 `MutationObserver`？在 AI 流式输出自动滚动到底部的场景中，如何用它替代轮询监听 DOM 变化？

6. HTML 中的 `<dialog>` 原生弹窗元素有哪些特性？与自定义 div 弹窗相比有什么优势？在 AI 确认操作对话框场景中如何使用？

7. `<details>/<summary>` 原生折叠与 AI 思考链（Chain of Thought）展示之间有什么天然契合点？如何优化其交互体验？

8. 在构建 AI 应用的富文本 Markdown 渲染区域时，如何防止 XSS 注入攻击？HTML 层面有哪些防御手段？

9. `<mark>` 标签有什么作用？在 AI 搜索高亮、RAG 引用标注等场景中如何应用？

10. 什么是 `<output>` 标签？在 AI 表单计算、实时结果展示场景中有什么优势？

11. Progressive Web App（PWA）的核心 HTML 配置有哪些？`manifest.json` 和 `Service Worker` 分别承担什么职责？

12. 什么是 `popover` API（HTML Popover）？它和 `<dialog>` 有什么区别？在 AI 工具提示、快捷操作面板中如何应用？

13. 浏览器原生的 `Intersection Observer` 和 `Resize Observer` 分别解决什么问题？在 AI 聊天页面中有哪些典型使用场景？

14. 什么是 `<slot>` 元素？它在 Web Components 中的作用是什么？如何用原生 Web Components 封装一个可复用的 AI 消息气泡组件？

15. HTML 中的 `tabindex` 属性如何影响键盘导航顺序？在 AI 对话界面的键盘快捷键设计中需要考虑哪些问题？

16. 什么是 `<base>` 标签？在前后端分离的全栈项目部署中，它可能引发哪些路由问题？

17. 在多框架混用或微前端架构的全栈项目中，`<iframe>` 和 `Web Components` 分别适合承担什么角色？

18. HTML 中的 `autocomplete` 属性有哪些取值？在 AI 表单自动填充与隐私安全场景中如何配置？

19. 什么是 `navigator.clipboard` API？在 AI 对话产品"一键复制代码"功能中如何实现？需要注意哪些权限和兼容性问题？

20. 什么是 `document.execCommand` 的历史地位与现代替代方案？在构建富文本 Prompt 编辑器时应该使用哪些现代 API？

---

## 二、CSS 工程化与现代特性（21-40题）

21. 什么是 Tailwind CSS？它的原子化 CSS 理念与 BEM 等传统方案相比有什么本质区别？在 AI 全栈项目中为什么常被选用？

22. 什么是 CSS-in-JS？常见方案（styled-components、Emotion）有哪些优缺点？在 React + AI 应用项目中如何选型？

23. CSS `@layer` 规则是什么？它解决了什么问题？在大型 AI 应用项目中如何用它管理样式优先级？

24. 什么是 CSS `@scope` 规则？它和 CSS Modules、Vue scoped 解决的问题有何异同？

25. CSS `container query`（容器查询）与媒体查询有什么本质区别？在 AI 消息气泡、可复用卡片组件中为什么更适合用容器查询？

26. 什么是 CSS `subgrid`？它解决了 Grid 布局中哪个痛点？在复杂的 AI 后台管理表格布局中如何应用？

27. CSS `color-mix()` 函数是什么？在 AI 应用主题定制、品牌色系生成中有什么实用价值？

28. 什么是 CSS `nesting`（原生嵌套）？它和 Sass/Less 的嵌套有什么区别？当前浏览器支持情况如何？

29. CSS `text-wrap: balance` 和 `text-wrap: pretty` 有什么作用？在 AI 生成的长文章展示、标题排版中有什么改善效果？

30. 什么是 CSS `view transitions API`？在 AI 应用的页面切换、内容更新动画中如何使用？

31. `backdrop-filter` 的毛玻璃效果在性能上有哪些注意事项？在 AI 对话侧边栏、浮层设计中如何平衡视觉效果与性能？

32. 什么是 CSS `scroll-snap`？在 AI 分步引导、卡片滑动翻页等场景中如何实现原生丝滑滚动效果？

33. CSS `overscroll-behavior` 属性有什么作用？在 AI 对话框内容滚动时，如何防止触发外层页面滚动（滚动穿透）？

34. 什么是 CSS `clamp()` 函数？在 AI 应用响应式字体大小、元素尺寸设计中如何用它替代多段媒体查询？

35. CSS `accent-color` 属性有什么作用？在 AI 应用快速实现主题色统一的表单控件样式中如何使用？

36. 什么是 `prefers-reduced-motion` 媒体查询？在包含大量动效的 AI 流式打字、加载动画页面中为什么必须处理它？

37. CSS `font-display` 属性有哪些取值？在 AI 应用加载速度优化中，如何选择合适的字体加载策略避免 FOUT/FOIT？

38. 什么是 CSS Houdini？`CSS Paint API` 和 `CSS Properties and Values API` 分别能做什么？

39. 在 AI 代码编辑器（如嵌入式 Monaco Editor）中，如何用 CSS 自定义滚动条样式并同时兼顾跨浏览器一致性？

40. 什么是 CSS `isolation: isolate`？在 AI 应用中存在复杂 `z-index` 叠加和 `mix-blend-mode` 效果时，如何用它解决层叠上下文混乱问题？

---

## 三、AI 应用前端实战场景（41-60题）

41. 如何用纯 CSS 实现 AI 流式输出的"打字机光标闪烁"效果？写出核心代码。

42. AI 对话消息列表需要"新消息自动滚动到底部，但用户手动上滑时不强制滚动"，如何用 HTML + CSS + 少量 JS 实现这个交互？

43. 如何用 CSS 实现 AI 消息气泡的"流式文字逐渐出现"动画效果？有哪几种实现思路？

44. 在 AI 应用中展示 Markdown 渲染后的代码块，如何用 CSS 实现代码高亮的暗色主题，并支持一键复制按钮的 hover 显示？

45. 如何构建一个支持"拖拽上传文件"的 AI 输入框区域？HTML 拖放 API（Drag and Drop）的核心事件有哪些？CSS 如何响应拖拽状态的样式变化？

46. AI 应用中常见的"思考中"加载状态（三个点跳动、波纹扩散等）如何用纯 CSS animation 实现？写出至少一种方案的核心代码。

47. 如何实现 AI 对话界面中"左侧 AI 消息、右侧用户消息"的气泡布局？Flex 和 Grid 分别如何实现？

48. 在 AI 应用的侧边栏历史记录列表中，如何用 CSS 实现"长文本标题单行省略，hover 时展开显示全文"的交互效果？

49. 如何用 HTML + CSS 实现一个"标签溢出时显示+N更多"的 AI 对话标签组件？

50. AI 应用的"引用来源卡片"通常需要展示图片、标题、链接，如何用 CSS Grid 或 Flex 实现自适应且美观的卡片布局？

51. 在全栈 AI 项目中，如何用 CSS 变量配合 JavaScript 实现运行时主题切换（支持亮色/暗色/自定义品牌色）？

52. AI 后台管理系统中常见的"固定顶部导航 + 左侧可折叠菜单 + 右侧内容区"三区联动布局，如何用现代 CSS（Grid/Flex）实现？

53. 在 AI 应用中如何优化"首次渲染白屏时间"？从 HTML 结构、CSS 加载策略、字体加载、骨架屏几个维度各说一个具体手段。

54. 什么是 Core Web Vitals？LCP、INP、CLS 分别是什么？在 AI 应用页面中各自容易被哪些场景影响？

55. AI 应用通常需要展示数学公式（MathJax/KaTeX），这类场景下 CSS 布局需要注意什么？如何防止公式渲染导致页面抖动（CLS）？

56. 在 AI 应用的移动端适配中，iOS 底部安全区域（safe-area-inset-bottom）与输入法弹起导致视口变化，分别如何处理？

57. 如何用 HTML 的 `<details>` + CSS 动画实现 AI 思考链（Thinking Chain）的"点击展开/收起"过渡动画？

58. AI 文本生成完成后，如何用 CSS 实现"内容区高度从 0 平滑展开到自然高度"的动画？`height: auto` 为什么不能直接过渡，有哪些解决方案？

59. 在构建 AI 工具平台时，如何用 CSS `print` 媒体查询优化打印样式，让用户可以清晰打印 AI 生成的报告？

60. 从 HTML/CSS 角度，如何评估和优化一个 AI 对话产品的"用户体验完成度"？请从结构语义、性能、可访问性、响应式、视觉动效五个维度给出具体的检查项。