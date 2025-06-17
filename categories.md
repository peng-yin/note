---
layout: page
title: 📚 Categories
permalink: /categories/
---

# Categories

Here are all the topics I've written about:

<div class="category-list">
  <div class="category-item">
    <h2 id="notes">🎃 Notes</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/93">函数式编程</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/102">函数式编程概述</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/109">函数计算得到函数</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/110">nvm 使用</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/111">常用的 git 命令别名</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3Anotes">View all notes...</a></li>
    </ul>
  </div>

  <div class="category-item">
    <h2 id="react">☕ React</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/112">React应用开发性能优化手段</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/73">useEffect 最佳实践</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/55">总结React Hooks 使用中遇到的问题</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/53">React运用TypeScript 备忘录</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3AReact">View all React articles...</a></li>
    </ul>
  </div>

  <div class="category-item">
    <h2 id="typescript">🎩 TypeScript</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/57">better.ts</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/77">编写高质量TypeScript代码</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/78">Typescript关键字infer的理解与使用</a></li>
      <li><a href="https://github.com/peng-yin/note/issues/80">Typescript实用的内置类型</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3ATypescript">View all TypeScript articles...</a></li>
    </ul>
  </div>

  <div class="category-item">
    <h2 id="javascript">🔬 JavaScript</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/5">优化JavaScript代码的细节</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3AJS">View all JavaScript articles...</a></li>
    </ul>
  </div>

  <div class="category-item">
    <h2 id="css">🎨 CSS</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/3">CSS Variables</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3ACSS">View all CSS articles...</a></li>
    </ul>
  </div>

  <div class="category-item">
    <h2 id="vue">🍮 Vue</h2>
    <ul>
      <li><a href="https://github.com/peng-yin/note/issues/54">Vue-Mixin数据管理(model层)</a></li>
      <!-- More articles... -->
      <li><a href="https://github.com/peng-yin/note/issues?q=is%3Aissue+label%3AVue">View all Vue articles...</a></li>
    </ul>
  </div>
</div>

<style>
.category-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
}

.category-item {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 1rem;
  border-left: 4px solid #00ff00;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.category-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.category-item h2 {
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.category-item ul {
  padding-left: 1.5rem;
}

.category-item li {
  margin-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .category-list {
    grid-template-columns: 1fr;
  }
}
</style> 