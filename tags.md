---
layout: page
title: 🏷️ Tags
permalink: /tags/
---

# Tags

Find articles by tags:

<div class="tag-cloud">
  <a href="#react" class="tag-cloud-item tag-size-3">React</a>
  <a href="#typescript" class="tag-cloud-item tag-size-3">TypeScript</a>
  <a href="#javascript" class="tag-cloud-item tag-size-1">JavaScript</a>
  <a href="#vue" class="tag-cloud-item tag-size-1">Vue</a>
  <a href="#css" class="tag-cloud-item tag-size-1">CSS</a>
  <a href="#git" class="tag-cloud-item tag-size-2">Git</a>
  <a href="#functional" class="tag-cloud-item tag-size-2">函数式编程</a>
  <a href="#tools" class="tag-cloud-item tag-size-2">工具</a>
  <a href="#docker" class="tag-cloud-item tag-size-1">Docker</a>
  <a href="#jenkins" class="tag-cloud-item tag-size-1">Jenkins</a>
  <a href="#nginx" class="tag-cloud-item tag-size-1">Nginx</a>
  <a href="#linux" class="tag-cloud-item tag-size-1">Linux</a>
  <a href="#http" class="tag-cloud-item tag-size-1">HTTP</a>
  <a href="#performance" class="tag-cloud-item tag-size-2">性能优化</a>
  <a href="#architecture" class="tag-cloud-item tag-size-2">架构</a>
  <a href="#micro-frontend" class="tag-cloud-item tag-size-1">微前端</a>
  <a href="#naming" class="tag-cloud-item tag-size-1">命名规范</a>
</div>

<div class="tag-sections">
  <section id="react" class="tag-section">
    <h2>React</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/112">React应用开发性能优化手段</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/73">useEffect 最佳实践</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/55">总结React Hooks 使用中遇到的问题</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/53">React运用TypeScript 备忘录</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/45">自定义React Hooks</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/49">React优化</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/60">React 性能优化</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/16">React组件通信</a></li>
    </ul>
  </section>

  <section id="typescript" class="tag-section">
    <h2>TypeScript</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/57">better.ts</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/77">编写高质量TypeScript代码</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/78">Typescript关键字infer的理解与使用</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/80">Typescript实用的内置类型</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/76">Typescript 高级技巧</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/79">Typescript使用技巧</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/58">TypeScript 高级类型总结</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/25">typescript</a></li>
    </ul>
  </section>

  <section id="functional" class="tag-section">
    <h2>函数式编程</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/93">函数式编程</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/102">函数式编程概述</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/109">函数计算得到函数</a></li>
    </ul>
  </section>

  <section id="git" class="tag-section">
    <h2>Git</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/111">常用的 git 命令别名</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/64">git 杂记</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/43">规范commit message, 并自动生成 CHANGELOG</a></li>
    </ul>
  </section>

  <!-- 其他标签部分可以根据需要添加 -->
</div>

<style>
.tag-cloud {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  margin: 2rem 0;
  padding: 2rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}

.tag-cloud-item {
  display: inline-block;
  padding: 0.4rem 0.8rem;
  background: #333;
  color: #00ff00;
  border-radius: 4px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}

.tag-cloud-item:hover {
  transform: translateY(-3px) scale(1.05);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
  background: #444;
}

.tag-size-1 { font-size: 0.9rem; }
.tag-size-2 { font-size: 1.1rem; }
.tag-size-3 { font-size: 1.3rem; }
.tag-size-4 { font-size: 1.5rem; }

.tag-section {
  margin: 2rem 0;
  padding: 1.5rem;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  border-left: 4px solid #00ff00;
}

.tag-section h2 {
  margin-top: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
}

.tag-section ul {
  padding-left: 1.5rem;
}

.tag-section li {
  margin-bottom: 0.5rem;
}

/* 给不同标签区域设置不同的边框颜色 */
#react { border-left-color: #61dafb; }
#typescript { border-left-color: #3178c6; }
#javascript { border-left-color: #f7df1e; }
#vue { border-left-color: #42b883; }
#css { border-left-color: #264de4; }
#git { border-left-color: #f14e32; }
#functional { border-left-color: #c678dd; }
</style> 