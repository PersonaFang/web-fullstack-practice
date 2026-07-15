# HTML & CSS 补充面试题标准答案卷（全栈 + AI Agent 开发方向）

---

## 一、HTML 进阶与工程化（1-20题）

**1. AI 流式输出文字逐字渲染，HTML 层面需要注意什么？**

AI 流式输出通常通过 SSE 或 WebSocket 接收服务端数据，前端每次收到 chunk（文字片段）后，通过 JS 将内容追加到 DOM 节点中。

HTML 层面关键注意事项：
- **容器预占位**：渲染区提前存在于 DOM 中，避免首次插入触发大规模重排
- **语义容器**：用 `<article>` 或 `<section>` 包裹 AI 回复区，语义更清晰
- **Markdown 安全渲染**：内容需经过 DOMPurify 等工具净化，防止 XSS
- **`aria-live="polite"`**：为屏幕阅读器用户声明该区域为动态内容，自动朗读新增内容
- **避免频繁操作真实 DOM**：可先拼接字符串或使用 DocumentFragment，减少重排次数

---

**2. SSE 与 WebSocket 的使用方式及在 AI 流式场景中如何选择？**

**SSE（Server-Sent Events）使用示例**：
```javascript
const es = new EventSource('/api/chat/stream');
es.onmessage = (e) => {
  const data = JSON.parse(e.data);
  el.textContent += data.content;
};
es.onerror = () => es.close();
WebSocket 使用示例：

JavaScript

const ws = new WebSocket('wss://api.example.com/chat');
ws.onmessage = (e) => { /* 处理消息 */ };
ws.send(JSON.stringify({ message: 'hello' }));
AI 流式场景选型建议：

场景	推荐方案	原因
LLM Token 逐字输出	SSE	单向、轻量、自动重连、兼容 HTTP/2
多 Agent 协作、协同编辑	WebSocket	双向通信、实时性更强
简单流式场景	SSE	无需握手升级，服务端成本低
3. <template> 标签与隐藏 div 的区别？

<template> 是 HTML5 引入的惰性模板容器：

不渲染：其内容不会被浏览器渲染，也不会触发图片加载、脚本执行
不在 DOM 树中：.content 属性返回 DocumentFragment，克隆后插入
语义清晰：明确表示该内容是模板，而非被隐藏的页面内容
HTML

<template id="msg-tpl">
  <div class="message">
    <span class="role"></span>
    <p class="content"></p>
  </div>
</template>
JavaScript

const tpl = document.getElementById('msg-tpl');
const clone = tpl.content.cloneNode(true);
clone.querySelector('.content').textContent = aiResponse;
chatList.appendChild(clone);
在 AI 消息动态插入场景中：用 <template> 预定义消息气泡结构，每次收到回复时克隆使用，比字符串拼接更安全、更语义化。

4. contenteditable 在 AI Prompt 输入框中的注意事项？

contenteditable="true" 让元素可编辑，比 <textarea> 更灵活，可包含富文本、代码高亮、@mention 等。

使用注意事项：

粘贴净化：监听 paste 事件，用 DOMPurify.sanitize() 处理粘贴内容，防止 XSS
输入法兼容（IME）：用 compositionstart/compositionend 事件处理中文输入，避免中文输入中触发提交
换行处理：不同浏览器插入 <br> 或 <div> 差异大，需统一处理
获取纯文本：用 innerText 或遍历 TextNode 获取内容，不要直接用 innerHTML 提交
高度自适应：配合 CSS min-height + max-height 实现自动撑高且限制最大高度
Placeholder 实现：需用 CSS ::before 伪元素或 data-placeholder 属性手动实现
5. MutationObserver 如何实现 AI 流式输出自动滚动到底部？

JavaScript

const chatBox = document.getElementById('chat-box');
let userScrolledUp = false;

// 监听用户手动滚动
chatBox.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = chatBox;
  // 如果距离底部超过 50px，认为用户主动上滑
  userScrolledUp = scrollHeight - scrollTop - clientHeight > 50;
});

// 监听 DOM 变化
const observer = new MutationObserver(() => {
  if (!userScrolledUp) {
    chatBox.scrollTop = chatBox.scrollHeight; // 自动滚到底部
  }
});

observer.observe(chatBox, {
  childList: true,   // 监听子节点增删
  subtree: true,     // 监听所有后代
  characterData: true // 监听文本内容变化
});
相比 scroll 事件轮询的优势：被动观察 DOM，不阻塞主线程，性能更好。

6. <dialog> 原生弹窗的特性与 AI 确认操作场景

原生 <dialog> 特性：

showModal() 方法：打开模态弹窗，自动添加 backdrop 遮罩，焦点锁定在弹窗内（键盘 Tab 不会跑出去）
show() 方法：打开非模态弹窗
close() 方法：关闭并可传递返回值
::backdrop 伪元素：可自定义遮罩样式
Escape 键自动关闭
内置可访问性（role="dialog", aria-modal）
HTML

<dialog id="confirm-dialog">
  <h2>确认执行此操作？</h2>
  <p>AI 即将删除 5 个文件，此操作不可撤销。</p>
  <button id="confirm-btn">确认</button>
  <button id="cancel-btn">取消</button>
</dialog>
JavaScript

dialog.showModal();
document.getElementById('confirm-btn').onclick = () => dialog.close('confirmed');
document.getElementById('cancel-btn').onclick = () => dialog.close('cancelled');
dialog.addEventListener('close', () => {
  if (dialog.returnValue === 'confirmed') executeAction();
});
7. <details>/<summary> 与 AI 思考链展示

AI 思考链（Chain of Thought）天然适合折叠展示：用户通常只关心最终答案，思考过程可按需查看。

HTML

<details class="thinking-chain">
  <summary>🤔 查看 AI 思考过程</summary>
  <div class="thinking-content">
    <p>首先分析问题的关键要素...</p>
    <p>然后检索相关知识...</p>
  </div>
</details>
CSS 优化动画（原生 details 无过渡，需手动实现）：

CSS

.thinking-content {
  overflow: hidden;
  transition: max-height 0.3s ease;
  max-height: 0;
}
details[open] .thinking-content {
  max-height: 500px;
}
/* 旋转箭头 */
summary::marker { display: none; }
summary::before {
  content: '▶';
  display: inline-block;
  transition: transform 0.2s;
}
details[open] summary::before {
  transform: rotate(90deg);
}
8. AI 应用 Markdown 渲染区域的 XSS 防御

AI 生成内容可能含有恶意 HTML，必须防御 XSS。

防御手段：

内容净化（最重要）：在渲染前用 DOMPurify.sanitize(html) 过滤危险标签和属性
JavaScript

import DOMPurify from 'dompurify';
el.innerHTML = DOMPurify.sanitize(markedContent);
CSP（Content Security Policy）：在 HTTP 响应头或 <meta> 标签设置 CSP，禁止内联脚本执行
HTML

<meta http-equiv="Content-Security-Policy" content="script-src 'self'">
使用安全的渲染库：marked.js、remark 等都支持配置白名单
sandbox 属性：若用 iframe 展示内容，设置 sandbox 属性限制权限
rel="noopener noreferrer"：AI 生成链接必须添加此属性，防止新窗口操控原页面
9. <mark> 标签在 AI 搜索高亮/RAG 引用标注中的应用

<mark> 是语义化高亮标签，默认黄色背景，表示"与用户当前搜索/操作相关的高亮内容"。

HTML

<!-- RAG 引用来源高亮 -->
<p>
  根据文档，<mark>机器学习模型需要大量标注数据</mark>才能达到较高精度。
</p>

<!-- 搜索关键词高亮 -->
<li>如何使用 <mark>CSS Grid</mark> 实现响应式布局</li>
CSS 自定义高亮样式：

CSS

mark {
  background: linear-gradient(120deg, #ffeaa7 0%, #fdcb6e 100%);
  border-radius: 3px;
  padding: 0 2px;
  color: inherit;
}

/* 暗黑模式 */
@media (prefers-color-scheme: dark) {
  mark {
    background: rgba(255, 234, 0, 0.3);
    color: #fff;
  }
}
10. <output> 标签在 AI 实时结果展示中的优势

<output> 专门用于表示计算或用户操作的结果，具有语义意义。

HTML

<form id="ai-form">
  <label for="prompt">Prompt：</label>
  <input type="text" id="prompt" name="prompt">
  <output id="result" for="prompt" aria-live="polite">
    AI 结果将显示在这里...
  </output>
</form>
优势：

语义化：屏幕阅读器知道这是一个"输出结果"区域
for 属性可关联到相关 input，建立语义关联
配合 aria-live="polite" 可自动朗读内容更新
11. PWA 的核心 HTML 配置

HTML

<!-- 在 <head> 中 -->
<link rel="manifest" href="/manifest.json">
<meta name="theme-color" content="#1677ff">
<link rel="apple-touch-icon" href="/icons/icon-192.png">
manifest.json 职责：定义应用名称、图标、主题色、启动页、显示模式（standalone/fullscreen）等，让 Web 应用可以"安装"到主屏幕。

Service Worker 职责：拦截网络请求、实现离线缓存、后台推送通知、资源预缓存。注册方式：

JavaScript

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
12. popover API 与 <dialog> 的区别

特性	popover	<dialog>
层级	自动进入顶层（top layer）	模态时进入顶层
触发方式	声明式（popovertarget 属性）	需 JS 调用
焦点管理	不锁定焦点	showModal() 锁定焦点
典型场景	工具提示、操作菜单、快捷面板	需要用户确认的模态对话框
关闭方式	点击外部自动关闭（Light Dismiss）	需显式关闭
HTML

<!-- 声明式触发，无需 JS -->
<button popovertarget="ai-menu">AI 工具</button>
<div id="ai-menu" popover>
  <button>重新生成</button>
  <button>复制内容</button>
</div>
13. IntersectionObserver 和 ResizeObserver 在 AI 聊天页面中的应用

IntersectionObserver（监听元素是否进入视口）：

图片/资源懒加载：AI 聊天中的图片附件按需加载
消息已读状态：消息进入视口时标记为"已读"
无限滚动加载：上滑到顶部时触发加载更多历史消息
停止动画优化：元素不在视口时暂停不必要的动画
ResizeObserver（监听元素尺寸变化）：

输入框高度变化时，自动调整聊天列表底部间距
侧边栏宽度改变时，触发内容区响应式布局重计算
监听代码块尺寸，决定是否显示横向滚动条提示
14. 用原生 Web Components 封装 AI 消息气泡

JavaScript

class AiMessageBubble extends HTMLElement {
  constructor() {
    super();
    // 创建 Shadow DOM，样式隔离
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
      <style>
        :host { display: block; margin: 8px 0; }
        .bubble {
          max-width: 70%;
          background: #f0f4ff;
          border-radius: 12px;
          padding: 10px 14px;
        }
        .role { font-size: 12px; color: #888; margin-bottom: 4px; }
        ::slotted(code) { background: #1a1a1a; color: #e8e8e8; }
      </style>
      <div class="bubble">
        <div class="role">AI</div>
        <slot></slot>  <!-- 外部内容插入这里 -->
      </div>
    `;
  }
}
customElements.define('ai-message', AiMessageBubble);
HTML

<!-- 使用方式 -->
<ai-message>
  <p>你好！我可以帮你解答问题。</p>
</ai-message>
<slot> 是插槽，允许外部 HTML 内容插入 Shadow DOM 的指定位置，实现内容与样式的分离。

15. tabindex 与 AI 对话界面键盘导航

tabindex="0"：元素加入正常 Tab 顺序（按 DOM 顺序）
tabindex="-1"：元素可通过 JS 聚焦（.focus()），但不在 Tab 顺序中
tabindex="N"（正整数）：指定具体 Tab 顺序，不推荐使用
AI 对话界面键盘设计要点：

Enter 发送，Shift+Enter 换行（监听 keydown 事件处理）
对话历史列表支持方向键导航（role="listbox" + aria-activedescendant）
模态弹窗（确认删除等）需用 tabindex="-1" 将焦点锁定在弹窗内
ESC 关闭侧边栏/弹窗，聚焦回到输入框
快捷键面板（Ctrl+K）触发命令选择器
16. <base> 标签及全栈项目的路由问题

<base> 设置页面中所有相对 URL 的基准地址：

HTML

<base href="https://cdn.example.com/assets/">
在全栈 SPA 项目中的常见坑：

前端路由（React Router / Vue Router）的相对路径会受 <base href> 影响，导致路由跳转异常
<a href=""> 空链接会跳转到 base 地址而非当前页面
fetch 相对路径、CSS 背景图路径均会受影响
建议：SPA 项目慎用 <base> 标签；若需要 CDN 前缀，在构建工具（Vite/Webpack）中配置 base/publicPath 更安全
17. 微前端架构中 <iframe> vs Web Components 的角色

对比项	<iframe>	Web Components
隔离程度	完全隔离（JS/CSS/DOM 均隔离）	样式隔离（Shadow DOM），JS 共享
性能开销	高（独立浏览上下文）	低
通信复杂度	高（需 postMessage）	低（普通 DOM 事件）
适合场景	嵌入第三方老系统、强沙箱	跨框架共享组件（React/Vue/原生）
全栈 AI 项目中：主应用用现代框架，通用的 AI 消息气泡、代码高亮块等使用 Web Components，可在 React/Vue/Angular 中统一复用；若需要嵌入外部付款页或旧版系统则用 iframe。

18. autocomplete 属性在 AI 表单场景中的配置

HTML

<!-- 禁用自动填充（Prompt输入框不需要历史记录干扰） -->
<input type="text" autocomplete="off" placeholder="输入你的问题...">

<!-- API Key 输入框 -->
<input type="password" name="api-key" autocomplete="new-password">

<!-- 用户注册表单（引导浏览器保存密码）-->
<input type="email" name="email" autocomplete="email">
<input type="password" name="password" autocomplete="new-password">
注意：autocomplete="off" 在现代浏览器中对 password 类型可能不完全生效，浏览器有自己的保存策略。用 autocomplete="new-password" 更可靠地阻止自动填充。

19. navigator.clipboard API 实现一键复制代码

JavaScript

async function copyCode(text) {
  try {
    await navigator.clipboard.writeText(text);
    showToast('已复制！');
  } catch (err) {
    // 降级方案（不安全上下文或权限被拒）
    const textarea = document.createElement('textarea');
    textarea.value = text;
    textarea.style.position = 'fixed';
    textarea.style.opacity = '0';
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    showToast('已复制！');
  }
}
注意事项：

HTTPS 要求：navigator.clipboard 只在安全上下文（HTTPS 或 localhost）中可用
权限：写入剪贴板通常不需要额外权限，读取则需要
用户手势：必须在用户手势（点击事件）中调用，否则被浏览器拒绝
兼容性：IE 不支持，旧版 Android 需降级方案
20. document.execCommand 的历史与现代替代方案

document.execCommand 是早期富文本编辑器的核心 API（如 execCommand('bold')），现已被 W3C 标记为废弃（deprecated），但目前浏览器仍支持。

现代替代方案：

document.execCommand('copy') → 替换为 navigator.clipboard.writeText()
富文本编辑 → 使用成熟编辑器库：Slate.js、Tiptap（基于 ProseMirror）、Quill
自定义文本格式化 → 结合 Selection API（window.getSelection()）和 Range API 手动操作
Prompt 编辑器 → 推荐 CodeMirror 6 或 Monaco Editor（VS Code 同款），支持语法高亮、自动补全等 AI 编程场景必备功能
二、CSS 工程化与现代特性（21-40题）
21. Tailwind CSS 原子化理念与在 AI 全栈项目中的选用原因

Tailwind 将样式拆分为极细粒度的原子类（flex、px-4、text-blue-500），与传统 BEM 的"语义类名 + 样式分离"相比：

对比项	BEM	Tailwind
样式复用	通过类名语义复用	通过原子类组合
CSS 体积	随项目增大	构建时 Tree-shake，极小
命名成本	高（需要起类名）	无（直接用原子类）
设计一致性	依赖规范约束	配置 Design Token 强制一致
在 AI 全栈项目中常被选用的原因：

AI 辅助编码（Cursor/Copilot）可以直接生成 Tailwind 类名，开发速度快
无需手写 CSS 文件，减少全栈开发者的上下文切换
与 React/Vue/Next.js 等 AI 项目常用框架生态完美融合
JIT 编译体积极小，适合全栈部署到 Vercel/Cloudflare Workers 等边缘环境
22. CSS-in-JS 优缺点及在 React + AI 应用中的选型

优点：

样式与组件强绑定，彻底避免全局污染
支持动态样式（基于 props/state 变化）
TypeScript 类型安全
自动处理浏览器前缀
缺点：

运行时性能开销（styled-components/Emotion 在 SSR 时有额外工作）
CSS 不可缓存（每次渲染生成不同 className）
增加 JS Bundle 体积
选型建议：

纯 CSR（客户端渲染）AI 工具：styled-components / Emotion（开发体验好）
SSR/SSG（Next.js 全栈）：考虑 CSS Modules 或 Tailwind（性能更好）
零运行时方案：vanilla-extract、Panda CSS（编译时生成静态 CSS）
23. CSS @layer 规则

@layer 用来定义样式层叠层，控制不同来源样式的优先级，解决大型项目中因选择器权重导致的样式覆盖混乱问题。

CSS

/* 声明层级顺序（越晚声明的层优先级越高）*/
@layer reset, base, components, utilities;

@layer reset {
  * { margin: 0; padding: 0; }
}

@layer components {
  .ai-bubble { background: #f0f4ff; border-radius: 12px; }
}

@layer utilities {
  .mt-4 { margin-top: 16px; }
}
优势：即使 reset 层的选择器权重再高，也会被 utilities 层的低权重类覆盖。彻底解决 !important 滥用问题。Tailwind CSS v4 也基于 @layer 重构了整个架构。

24. CSS @scope 规则

@scope 允许将样式限定在特定 DOM 子树内，实现原生 CSS 的组件级作用域。

CSS

@scope (.ai-card) {
  /* 只作用于 .ai-card 内部的元素 */
  h2 { font-size: 18px; }
  p { color: #555; }
}

/* 还可以设置下界（排除子组件）*/
@scope (.ai-card) to (.nested-card) {
  p { color: #555; }
}
与 CSS Modules / Vue scoped 对比：

CSS Modules：构建时编译为唯一类名，不依赖运行时
Vue scoped：通过属性选择器限制作用域
@scope：纯 CSS 运行时方案，无需构建工具，但目前浏览器支持度还在普及中
25. container query（容器查询）与媒体查询的本质区别

媒体查询：基于视口（viewport） 尺寸响应
容器查询：基于父容器元素 尺寸响应
CSS

/* 声明容器 */
.message-list {
  container-type: inline-size;
  container-name: chat;
}

/* 当容器宽度大于 400px 时，气泡内容横向排列 */
@container chat (min-width: 400px) {
  .bubble-content {
    display: flex;
    gap: 12px;
  }
}
为什么 AI 消息气泡更适合容器查询：

消息气泡可能出现在主面板（宽）和侧边栏（窄）两种容器中
用媒体查询需要感知视口，组件失去独立性；用容器查询，组件根据所在容器自适应，真正实现组件级响应式
26. CSS subgrid 及在 AI 后台表格布局中的应用

subgrid 允许子元素"继承"父 Grid 的轨道，解决多行对齐问题。

CSS

/* 父 Grid 定义 3 列 */
.table {
  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
}

/* 子元素继承父轨道，内容自动对齐 */
.table-row {
  display: grid;
  grid-column: 1 / -1;
  grid-template-columns: subgrid; /* 继承父 Grid 的列定义 */
}
AI 后台管理场景：多行数据卡片中，每行的"字段名"和"字段值"需要跨行对齐，传统 Grid 需要将所有内容放在同一层，subgrid 让嵌套结构也能对齐，代码更清晰。

27. CSS color-mix() 在 AI 应用主题定制中的应用

color-mix() 允许在 CSS 中混合两种颜色，无需 JS 或预处理器：

CSS

:root {
  --brand: #1677ff;
  --brand-light: color-mix(in srgb, var(--brand) 20%, white);
  --brand-dark: color-mix(in srgb, var(--brand) 80%, black);
  --brand-alpha: color-mix(in srgb, var(--brand) 50%, transparent);
}

.ai-bubble {
  background: var(--brand-light);
  border: 1px solid color-mix(in srgb, var(--brand) 40%, transparent);
}
AI 主题定制价值：用户输入主色调后，通过 color-mix() 自动生成浅色版、深色版、透明版，无需预先计算所有色阶，配合 CSS 变量实现运行时动态主题。

28. CSS 原生嵌套（Nesting）

CSS 原生嵌套（CSS Nesting，已成为 W3C 标准）允许在选择器内书写嵌套规则：

CSS

/* 原生 CSS 嵌套 */
.ai-card {
  background: white;
  border-radius: 8px;

  /* 嵌套子选择器（注意必须以 & 开头或使用 is()）*/
  & .title {
    font-size: 16px;
    font-weight: 600;
  }

  &:hover {
    box-shadow: 0 4px 12px rgba(0,0,0,.1);
  }

  @media (max-width: 768px) {
    padding: 12px;
  }
}
与 Sass/Less 嵌套的区别：

Sass/Less：编译时转换，产物是平铺的 CSS
原生嵌套：浏览器原生解析，无需编译
兼容性：Chrome 112+、Safari 16.5+、Firefox 117+，现代主流浏览器均支持
29. CSS text-wrap: balance 和 text-wrap: pretty

text-wrap: balance：让多行标题各行字数尽量均匀，避免最后一行孤零零几个字

CSS

h1, h2, h3 { text-wrap: balance; }
text-wrap: pretty：避免段落最后一行出现孤行（orphan），让段落排版更美观（Chrome 117+）

在 AI 生成内容中的价值：AI 生成的标题和段落长度不定，balance 可以自动优化标题折行效果，减少人工调整排版的需要。

30. CSS View Transitions API

允许在 DOM 变更时创建平滑的视觉过渡，不需要手动处理动画状态。

JavaScript

// JS 触发视图切换
document.startViewTransition(() => {
  // DOM 更新操作
  chatList.appendChild(newMessage);
});
CSS

/* 自定义过渡动画 */
::view-transition-old(root) {
  animation: fade-out 0.2s ease;
}
::view-transition-new(root) {
  animation: fade-in 0.2s ease;
}

@keyframes fade-in {
  from { opacity: 0; transform: translateY(10px); }
  to   { opacity: 1; transform: translateY(0); }
}
在 AI 应用中的应用：AI 回复完成时平滑切换到新内容状态、页面路由切换（Next.js App Router 中已支持）、AI 工具栏状态切换动画。

31. backdrop-filter 性能注意事项

毛玻璃效果的性能开销主要来自GPU 合成层的模糊计算。

注意事项：

模糊半径越大（blur(40px)），性能越差；建议保持在 8-20px 之间
避免在频繁动画的元素上使用（如跟随鼠标的浮层）
backdrop-filter 会自动创建合成层，过多使用会导致 GPU 内存压力
降级方案：不支持的浏览器用 @supports not (backdrop-filter: blur(1px)) 提供备用样式
iOS Safari 需要 -webkit-backdrop-filter
CSS

.sidebar {
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  background: rgba(255, 255, 255, 0.7);
}
32. CSS scroll-snap 在 AI 分步引导中的应用

CSS

/* 父容器 */
.steps-container {
  display: flex;
  overflow-x: scroll;
  scroll-snap-type: x mandatory; /* 强制对齐 */
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch; /* iOS 惯性滚动 */
}

/* 每个步骤卡片 */
.step-card {
  flex-shrink: 0;
  width: 100%;
  scroll-snap-align: start; /* 对齐方式：start | center | end */
}
特点：纯 CSS 实现，无需 JS 计算偏移量；手机端支持触摸滑动；mandatory 确保每次必须停在整张卡片上，proximity 则在靠近时才吸附。

33. overscroll-behavior 防止滚动穿透

AI 对话框内滚动时，滚动到顶部或底部会触发外层页面滚动，这是"滚动穿透"问题。

CSS

/* AI 对话消息列表 */
.chat-messages {
  overflow-y: auto;
  overscroll-behavior: contain; /* 阻止滚动传播到父元素 */
}

/* 模态弹窗背景（防止 iOS 橡皮筋效果穿透）*/
.modal-overlay {
  overscroll-behavior: none;
}
overscroll-behavior 取值：

auto（默认）：允许滚动链传播
contain：阻止滚动传播，但保留本地的回弹效果
none：阻止传播且禁用回弹效果
34. CSS clamp() 函数

clamp(最小值, 首选值, 最大值) 在最小值和最大值之间动态计算：

CSS

/* 字体大小：最小16px，根据视口缩放，最大24px */
h1 {
  font-size: clamp(16px, 4vw, 24px);
}

/* AI 对话框宽度：最小320px，占90%，最大800px */
.chat-container {
  width: clamp(320px, 90%, 800px);
}

/* 替代多段媒体查询的间距 */
.section {
  padding: clamp(16px, 5vw, 48px);
}
35. CSS accent-color 属性

accent-color 用一行代码统一设置表单控件（checkbox、radio、range、progress）的主题色：

CSS

:root {
  accent-color: #1677ff; /* 全局 AI 品牌色 */
}

/* 或单独设置 */
input[type="checkbox"] {
  accent-color: var(--primary);
  width: 18px;
  height: 18px;
}
在 AI 应用中的价值：无需手写复杂的自定义 checkbox 样式，一行代码统一所有原生控件的品牌色，支持暗黑模式下的自动适配。

36. prefers-reduced-motion 媒体查询

prefers-reduced-motion 检测用户系统是否开启了"减少动效"设置（适用于前庭障碍等人群）。

CSS

/* 默认动画 */
.typing-cursor {
  animation: blink 1s infinite;
}

/* 尊重用户减少动效的偏好 */
@media (prefers-reduced-motion: reduce) {
  .typing-cursor {
    animation: none; /* 关闭闪烁 */
    opacity: 1;
  }
  
  .message-in {
    transition: none; /* 关闭所有过渡 */
  }
}
在 AI 应用中为什么必须处理：AI 流式打字动画、消息进入动画、加载旋转动画等大量动效，对前庭障碍用户可能引发不适甚至恶心。这是可访问性的必要项，部分地区法规（如 WCAG 2.1）要求必须遵守。

37. CSS font-display 字体加载策略

取值	行为描述	适用场景
auto	浏览器默认行为	-
block	阻塞渲染，等字体加载完	关键 icon 字体
swap	先用备用字体，加载完后替换	正文字体（推荐）
fallback	短暂阻塞后 swap，超时放弃替换	正文字体
optional	如果字体没缓存则不加载	可选装饰字体
CSS

@font-face {
  font-family: 'AIFont';
  src: url('font.woff2') format('woff2');
  font-display: swap; /* 避免 FOIT（隐形文字），先显示内容 */
}
AI 应用建议：正文使用 swap，避免字体加载期间白屏；Icon Font 使用 block 短暂等待，防止字符乱码闪现。

38. CSS Houdini 简介

CSS Houdini 是一组 API，让开发者可以"扩展 CSS 引擎"，直接介入浏览器的渲染过程。

CSS Paint API（Worklet）：用 Canvas 代码绘制 CSS 背景/边框：

JavaScript

// paint-worklet.js
registerPaint('ai-gradient-border', class {
  paint(ctx, geom) {
    // 绘制自定义渐变边框
    const gradient = ctx.createLinearGradient(0, 0, geom.width, 0);
    gradient.addColorStop(0, '#ff6b6b');
    gradient.addColorStop(1, '#4ecdc4');
    ctx.strokeStyle = gradient;
    ctx.lineWidth = 2;
    ctx.strokeRect(1, 1, geom.width - 2, geom.height - 2);
  }
});
CSS Properties and Values API：注册带类型和默认值的 CSS 变量（可被动画插值）：

JavaScript

CSS.registerProperty({
  name: '--progress',
  syntax: '<number>',
  inherits: false,
  initialValue: '0'
});
注册后 --progress 可以参与 transition 动画，而普通 CSS 变量不能被动画插值。

39. AI 代码编辑器中 CSS 自定义滚动条的跨浏览器方案

CSS

/* WebKit 内核（Chrome/Safari/Edge）*/
.code-editor ::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.code-editor ::-webkit-scrollbar-track {
  background: #1e1e2e;
}
.code-editor ::-webkit-scrollbar-thumb {
  background: #555;
  border-radius: 4px;
  border: 2px solid #1e1e2e; /* 产生内边距效果 */
}
.code-editor ::-webkit-scrollbar-thumb:hover {
  background: #888;
}

/* Firefox（标准方案）*/
.code-editor {
  scrollbar-width: thin;
  scrollbar-color: #555 #1e1e2e; /* thumb track */
}
兼容性说明：Chrome/Safari/Edge 支持 ::-webkit-scrollbar；Firefox 支持 scrollbar-width 和 scrollbar-color；目前还无法完全统一，需要同时写两套。W3C 正在制定统一规范。

40. CSS isolation: isolate 解决层叠上下文混乱

isolation: isolate 强制创建新的层叠上下文，但不产生其他副作用（不影响 opacity、transform 等属性）。

典型应用场景：

CSS

/* AI 消息气泡中使用了 mix-blend-mode */
.message-bubble {
  isolation: isolate; /* 防止 mix-blend-mode 影响到气泡外的元素 */
}
.message-bubble .avatar {
  mix-blend-mode: luminosity;
}

/* 复杂 z-index 管理 */
.modal-system {
  isolation: isolate;  /* 弹窗系统的 z-index 不与外界比较 */
}
.modal { z-index: 100; }  /* 只在 .modal-system 内部有效 */
工程价值：在大型 AI 应用中，各模块（聊天区、工具栏、弹窗系统）通过 isolation: isolate 相互隔离，避免 z-index 军备竞赛（层层叠加 z-index 到 9999）。

三、AI 应用前端实战场景（41-60题）
41. 纯 CSS 实现 AI 打字机光标闪烁效果

CSS

/* 方案1：直接在文字末尾加伪元素光标 */
.typing-text::after {
  content: '|';
  display: inline-block;
  color: #1677ff;
  animation: cursor-blink 1s step-end infinite;
  /* step-end 让动画跳变而非渐变，模拟真实光标 */
}

@keyframes cursor-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

/* 方案2：块状光标（更像终端风格）*/
.terminal-cursor::after {
  content: '';
  display: inline-block;
  width: 2px;
  height: 1em;
  background: currentColor;
  vertical-align: text-bottom;
  animation: cursor-blink 0.8s step-end infinite;
}

/* AI 输出完成后隐藏光标 */
.typing-text.done::after {
  display: none;
}
42. AI 对话新消息自动滚动但不打断用户手动上滑

JavaScript

const chatBox = document.querySelector('.chat-messages');
let shouldAutoScroll = true;

// 判断用户是否手动上滑（距底部超过 80px 则不自动滚动）
chatBox.addEventListener('scroll', () => {
  const { scrollTop, scrollHeight, clientHeight } = chatBox;
  shouldAutoScroll = scrollHeight - scrollTop - clientHeight < 80;
});

// 追加新消息后调用此函数
function scrollToBottom(smooth = true) {
  if (!shouldAutoScroll) return;
  chatBox.scrollTo({
    top: chatBox.scrollHeight,
    behavior: smooth ? 'smooth' : 'instant'
  });
}
CSS

/* CSS 层面：防止滚动穿透 */
.chat-messages {
  overflow-y: auto;
  overscroll-behavior: contain;
  scroll-behavior: smooth;
}
43. AI 消息气泡"流式文字出现"动画思路

方案1：CSS 动画 + clip-path（文字从左到右逐渐显现）

CSS

.stream-text {
  animation: reveal 0.5s ease forwards;
  clip-path: inset(0 100% 0 0); /* 初始完全隐藏 */
}
@keyframes reveal {
  to { clip-path: inset(0 0% 0 0); }
}
方案2：opacity + transform（淡入上移，更自然）

CSS

.message-chunk {
  animation: fade-in-up 0.2s ease forwards;
  opacity: 0;
}
@keyframes fade-in-up {
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
}
方案3（JS 配合）：每次收到 token 时，给新增的文本节点外包一个 span 并添加入场动画类，实现逐词/逐句渐显效果。

44. AI 代码块暗色主题 + hover 显示复制按钮

HTML

<div class="code-block">
  <button class="copy-btn" onclick="copyCode(this)">复制</button>
  <pre><code class="language-javascript">const x = 1;</code></pre>
</div>
CSS

.code-block {
  position: relative;
  background: #1e1e2e;
  border-radius: 8px;
  overflow: hidden;
}

.code-block pre {
  padding: 16px;
  color: #cdd6f4;
  overflow-x: auto;
}

/* 复制按钮默认隐藏 */
.copy-btn {
  position: absolute;
  top: 8px;
  right: 8px;
  opacity: 0;
  transition: opacity 0.2s;
  background: rgba(255,255,255,0.1);
  color: #fff;
  border: 1px solid rgba(255,255,255,0.2);
  border-radius: 4px;
  padding: 4px 10px;
  cursor: pointer;
  font-size: 12px;
}

/* hover 时显示 */
.code-block:hover .copy-btn,
.copy-btn:focus {
  opacity: 1;
}
45. 拖拽上传文件的 HTML + CSS 实现

核心 HTML 拖放 API 事件：

dragenter：拖拽进入目标元素
dragover：在目标元素上方拖动（必须 preventDefault() 才能触发 drop）
dragleave：离开目标元素
drop：放下文件，通过 e.dataTransfer.files 获取文件
HTML

<div class="upload-zone" id="drop-zone">
  <p>拖拽文件到此处或 <label for="file-input">点击上传</label></p>
  <input type="file" id="file-input" hidden accept=".pdf,.txt,.md">
</div>
CSS

.upload-zone {
  border: 2px dashed #d9d9d9;
  border-radius: 12px;
  padding: 40px;
  text-align: center;
  transition: border-color 0.2s, background 0.2s;
  cursor: pointer;
}

/* 拖拽进入时的高亮状态（由 JS 添加 .dragging 类）*/
.upload-zone.dragging {
  border-color: #1677ff;
  background: rgba(22, 119, 255, 0.05);
}
46. 纯 CSS 实现 AI "思考中"三点跳动动画

HTML

<div class="thinking">
  <span></span>
  <span></span>
  <span></span>
</div>
CSS

.thinking {
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 12px 16px;
}

.thinking span {
  width: 8px;
  height: 8px;
  background: #1677ff;
  border-radius: 50%;
  animation: bounce 1.2s infinite ease-in-out;
}

/* 利用 animation-delay 形成错位跳动 */
.thinking span:nth-child(1) { animation-delay: 0s; }
.thinking span:nth-child(2) { animation-delay: 0.2s; }
.thinking span:nth-child(3) { animation-delay: 0.4s; }

@keyframes bounce {
  0%, 60%, 100% { transform: translateY(0); }
  30%           { transform: translateY(-8px); }
}
47. AI 对话气泡左右分布布局（Flex vs Grid）

Flex 方案（推荐，更自然）：

CSS

.chat-list { display: flex; flex-direction: column; gap: 12px; }

.message { display: flex; align-items: flex-start; gap: 8px; max-width: 80%; }

/* AI 消息靠左 */
.message.ai { align-self: flex-start; }

/* 用户消息靠右（整体反转方向）*/
.message.user {
  align-self: flex-end;
  flex-direction: row-reverse;
}
.message.user .bubble { background: #1677ff; color: #fff; }
Grid 方案：

CSS

.chat-list { display: grid; grid-template-columns: 1fr 1fr; }
.message.ai  { grid-column: 1; justify-self: start; }
.message.user { grid-column: 2; justify-self: end; }
实际项目中 Flex 方案更常用，因为 AI 和用户消息交错排列，不需要严格二维对齐。

48. 长标题单行省略 + hover 展开全文

HTML

<li class="history-item">
  <span class="title">如何用 CSS Grid 实现复杂的后台管理系统布局方案详解</span>
</li>
CSS

.history-item { position: relative; padding: 8px 12px; }

/* 默认单行省略 */
.history-item .title {
  display: block;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* hover 时展开（用 tooltip 方式）*/
.history-item:hover .title {
  /* 方案1：直接展开（影响布局）*/
  white-space: normal;
  overflow: visible;
  
  /* 方案2：绝对定位浮层展示（不影响布局，推荐）*/
}

/* 推荐方案2：用伪元素或 tooltip */
.history-item .title[data-full-title]:hover::after {
  content: attr(data-full-title);
  position: absolute;
  left: 0; top: 100%;
  background: #fff;
  box-shadow: 0 4px 12px rgba(0,0,0,.15);
  padding: 8px 12px;
  border-radius: 6px;
  z-index: 10;
  white-space: normal;
  width: 280px;
}
49. "标签溢出显示 +N 更多"组件

HTML

<div class="tag-group">
  <span class="tag">机器学习</span>
  <span class="tag">Python</span>
  <span class="tag">深度学习</span>
  <span class="tag">NLP</span>
  <!-- JS 动态计算溢出数量后插入 -->
  <span class="tag tag-more">+2</span>
</div>
CSS

.tag-group {
  display: flex;
  gap: 6px;
  overflow: hidden;
  max-height: 28px;  /* 限制一行高度 */
  flex-wrap: wrap;   /* 多余的自动换到第二行（被 max-height 裁掉）*/
}

.tag {
  flex-shrink: 0;    /* 标签不收缩 */
  padding: 2px 8px;
  border-radius: 4px;
  background: #f0f4ff;
  font-size: 12px;
  white-space: nowrap;
}

.tag-more {
  background: #e6e6e6;
  margin-left: auto; /* 靠右 */
}
JS 计算溢出数量：遍历所有 .tag 元素，判断其 offsetTop 是否超过容器单行高度，统计溢出数量后插入 .tag-more 并隐藏溢出的标签。

50. AI 引用来源卡片的自适应布局

HTML

<div class="sources-grid">
  <a class="source-card" href="#">
    <img class="source-img" src="..." alt="...">
    <div class="source-info">
      <h4>来源标题</h4>
      <p>example.com</p>
    </div>
  </a>
  <!-- 更多卡片... -->
</div>
CSS

.sources-grid {
  display: grid;
  /* 每列最小 200px，最大 1fr，自动填充列数 */
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 12px;
}

.source-card {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 10px;
  border: 1px solid #e8e8e8;
  border-radius: 8px;
  text-decoration: none;
  transition: box-shadow 0.2s;
}
.source-card:hover { box-shadow: 0 2px 8px rgba(0,0,0,.1); }

.source-img {
  width: 40px;
  height: 40px;
  border-radius: 4px;
  object-fit: cover;
  flex-shrink: 0;
}

.source-info h4 {
  font-size: 13px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
51. CSS 变量配合 JS 实现运行时主题切换

CSS

/* 默认亮色主题 */
:root {
  --bg-primary: #ffffff;
  --text-primary: #1a1a1a;
  --accent: #1677ff;
  --surface: #f5f5f5;
}

/* 暗色主题 */
[data-theme="dark"] {
  --bg-primary: #1a1a2e;
  --text-primary: #e8e8e8;
  --accent: #4da3ff;
  --surface: #16213e;
}

/* 使用变量 */
body {
  background: var(--bg-primary);
  color: var(--text-primary);
  transition: background 0.3s, color 0.3s;
}
JavaScript

// 切换主题
function toggleTheme() {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// 自定义品牌色
function setBrandColor(color) {
  document.documentElement.style.setProperty('--accent', color);
}

// 初始化：优先用户设置，其次系统偏好
const savedTheme = localStorage.getItem('theme')
  || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
document.documentElement.setAttribute('data-theme', savedTheme);
52. AI 后台管理三区联动布局（CSS Grid 实现）

HTML

<div class="admin-layout">
  <header class="top-nav">顶部导航</header>
  <aside class="sidebar" id="sidebar">侧边菜单</aside>
  <main class="content">主内容区</main>
</div>
CSS

.admin-layout {
  display: grid;
  grid-template-areas:
    "nav  nav"
    "side main";
  grid-template-columns: var(--sidebar-width, 240px) 1fr;
  grid-template-rows: 64px 1fr;
  min-height: 100vh;
}

.top-nav  { grid-area: nav; position: sticky; top: 0; z-index: 10; }
.sidebar  { grid-area: side; overflow-y: auto; }
.content  { grid-area: main; overflow-y: auto; }

/* 侧边栏折叠：通过 CSS 变量控制宽度 */
.admin-layout.collapsed {
  --sidebar-width: 64px;
}

/* 移动端：侧边栏变为抽屉 */
@media (max-width: 768px) {
  .admin-layout {
    grid-template-areas: "nav" "main";
    grid-template-columns: 1fr;
  }
  .sidebar {
    position: fixed;
    left: 0; top: 64px;
    height: calc(100vh - 64px);
    transform: translateX(-100%);
    transition: transform 0.3s;
    z-index: 9;
  }
  .sidebar.open {
    transform: translateX(0);
  }
}
53. AI 应用首次渲染白屏优化的四个维度

HTML 结构：

关键内容放在 <body> 最顶部，不依赖 JS 渲染
使用骨架屏（Skeleton Screen）：预先用 CSS 占位动画替代内容区，让用户感知"已在加载"
CSS 加载策略：

关键 CSS 内联到 <head> 的 <style> 标签中，避免渲染阻塞
非关键 CSS 使用 <link rel="preload" as="style"> 异步加载
字体加载：

系统字体优先：font-family: -apple-system, BlinkMacSystemFont, 'PingFang SC', sans-serif
自定义字体设置 font-display: swap 避免不可见文字期（FOIT）
骨架屏：

CSS

.skeleton {
  background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
  background-size: 200% 100%;
  animation: shimmer 1.5s infinite;
  border-radius: 4px;
}
@keyframes shimmer {
  0% { background-position: 200% 0; }
  100% { background-position: -200% 0; }
}
54. Core Web Vitals：LCP、INP、CLS 在 AI 应用中的影响

LCP（Largest Contentful Paint）最大内容绘制：衡量最大可见内容的加载时间，目标 < 2.5s。 AI 应用中容易被影响的场景：AI 生成的大图、未优化的首屏 Banner、模型加载阻塞渲染

INP（Interaction to Next Paint）交互到下次绘制（替代 FID）：衡量用户点击/输入后页面响应的延迟，目标 < 200ms。 AI 应用中容易被影响的场景：点击发送按钮后 JS 主线程被阻塞（大量 Token 处理、Markdown 解析）；虚拟列表滚动卡顿

CLS（Cumulative Layout Shift）累积布局偏移：衡量页面元素意外位移，目标 < 0.1。 AI 应用中容易被影响的场景：AI 回复内容动态插入导致上方内容位移；数学公式（MathJax/KaTeX）渲染完成后撑开区域；图片未设置宽高占位

55. AI 应用展示数学公式的 CSS 布局注意事项

防止 CLS（布局偏移）：

CSS

/* 为数学公式预留高度，防止渲染完成后撑开页面 */
.math-container {
  min-height: 2em; /* 预估高度，避免完全塌缩 */
  overflow-x: auto; /* 长公式允许横向滚动 */
}

/* KaTeX/MathJax 渲染完成前显示占位 */
.math-container:not(.rendered) {
  background: #f5f5f5;
  border-radius: 4px;
  animation: pulse 1.5s infinite;
}
排版注意：

行内公式（$...$）需设置合适的 vertical-align 和 line-height
块级公式（$$...$$）设置 display: block; overflow-x: auto; text-align: center;
移动端公式超宽时，用 overflow-x: auto 而不是 overflow: hidden（避免截断）
56. 移动端 AI 应用的安全区域和输入法适配

iOS 安全区域（刘海屏/底部 Home Bar）：

CSS

/* 底部输入框避开 Home Bar */
.input-bar {
  padding-bottom: max(16px, env(safe-area-inset-bottom));
  padding-left: env(safe-area-inset-left);
  padding-right: env(safe-area-inset-right);
}

/* 全屏背景延伸到安全区 */
body {
  background: #fff;
  padding: env(safe-area-inset-top) env(safe-area-inset-right)
            env(safe-area-inset-bottom) env(safe-area-inset-left);
}
输入法弹起视口变化适配：

JavaScript

// iOS Safari 不会触发 window.resize，使用 visualViewport API
window.visualViewport.addEventListener('resize', () => {
  const keyboardHeight = window.innerHeight - window.visualViewport.height;
  document.querySelector('.input-bar').style.transform
    = `translateY(-${keyboardHeight}px)`;
});
viewport-fit=cover：<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover"> 让页面内容延伸到安全区内，再用 env() 手动添加内边距。

57. <details> + CSS 动画实现 AI 思考链展开/收起过渡

原生 <details> 不支持 CSS 过渡，因为打开/关闭是离散的。解决方案：

CSS

details .thinking-body {
  overflow: hidden;
  display: grid;
  grid-template-rows: 0fr; /* 初始折叠（关键技巧）*/
  transition: grid-template-rows 0.3s ease;
}

details[open] .thinking-body {
  grid-template-rows: 1fr; /* 展开 */
}

/* 内层容器需要 min-height: 0 才能让 grid 折叠生效 */
.thinking-body > div {
  min-height: 0;
  overflow: hidden;
}
原理：grid-template-rows 从 0fr 到 1fr 是可插值动画的，这是目前实现 height: 0 → auto 动画的最佳纯 CSS 方案（无需 JS 计算高度）。

58. CSS 如何实现高度从 0 平滑展开到 auto

height: 0 → height: auto 直接过渡不生效，因为 auto 不是具体数值。

方案1：max-height 过渡（最广泛兼容）

CSS

.content { max-height: 0; overflow: hidden; transition: max-height 0.3s ease; }
.content.open { max-height: 500px; } /* 设置一个足够大的上限 */
/* 缺点：展开速度不均匀（从500px减速到实际高度）*/
方案2：Grid 行高技巧（推荐）

CSS

.wrapper { display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.3s ease; }
.wrapper.open { grid-template-rows: 1fr; }
.content { min-height: 0; overflow: hidden; }
/* 优点：过渡均匀，纯 CSS，无需知道实际高度 */
方案3：JS 动态计算（最精确）

JavaScript

el.style.height = el.scrollHeight + 'px'; // 展开
el.style.height = '0';                    // 收起
59. CSS print 媒体查询优化 AI 报告打印样式

CSS

@media print {
  /* 隐藏不需要打印的元素 */
  .sidebar, .chat-input, .top-nav,
  .copy-btn, .action-bar { display: none !important; }
  
  /* 打印时使用黑白色调，节省墨水 */
  body { color: #000; background: #fff; }
  
  /* 防止代码块被截断到两页 */
  .code-block { page-break-inside: avoid; break-inside: avoid; }
  
  /* 标题前添加分页 */
  h1, h2 { break-before: page; }
  
  /* 链接显示 URL */
  a::after { content: " (" attr(href) ")"; font-size: 10px; }
  
  /* 展开所有折叠内容（思考链在打印时全部显示）*/
  details { display: block; }
  details > summary::marker { display: none; }
  
  /* 调整字体和间距 */
  body { font-size: 12pt; line-height: 1.6; }
  
  /* 设置页面边距 */
  @page {
    margin: 2cm;
    size: A4;
  }
}
60. 从 HTML/CSS 角度评估 AI 对话产品的用户体验完成度

① 结构语义（检查项）：

 是否使用了语义化标签（header/main/article/nav）
 图片是否有有意义的 alt 文本
 标题层级是否合理（h1→h2→h3 不跳级）
 表单是否有关联 label
② 性能（检查项）：

 首屏是否有骨架屏/加载状态
 关键 CSS 是否已内联
 图片是否使用 loading="lazy" + width/height 属性（防 CLS）
 字体是否使用 font-display: swap
 Core Web Vitals（LCP < 2.5s，INP < 200ms，CLS < 0.1）
③ 可访问性（检查项）：

 是否可以仅用键盘完成核心操作（发送消息、导航历史）
 是否有 aria-live 声明动态更新区域
 颜色对比度是否满足 WCAG AA（正文 4.5:1，大文字 3:1）
 是否处理了 prefers-reduced-motion
 Focus 样式是否清晰可见（不能简单 outline:none）
④ 响应式（检查项）：

 移动端是否处理了安全区域（safe-area-inset）
 输入法弹起后布局是否正常
 代码块/表格等宽内容是否可横向滚动
 是否测试了不同 DPR（普通屏/Retina 屏）
⑤ 视觉动效（检查项）：

 流式输出是否有光标动画
 消息出现/消失是否有过渡动画
 加载状态（思考中）是否有可感知的动效
 动效是否在 prefers-reduced-motion: reduce 下被关闭
 主题切换是否平滑（transition 覆盖颜色变化）
text


---

