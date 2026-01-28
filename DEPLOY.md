# 部署到 GitHub Pages

## 方法一：使用 GitHub Actions（推荐）

### 步骤：

1. **推送代码到 GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **在 GitHub 仓库中启用 GitHub Pages**
   - 进入你的 GitHub 仓库
   - 点击 `Settings` > `Pages`
   - 在 `Source` 下选择 `GitHub Actions`

3. **等待自动部署**
   - GitHub Actions 会自动运行
   - 部署完成后，你的网站将在 `https://your-username.github.io/your-repo-name` 可用

### 注意事项：

- 如果你的仓库名是 `username.github.io`，网站将在 `https://username.github.io` 可用
- 如果是其他仓库名，需要在 `next.config.js` 中设置 `basePath`：
  ```js
  basePath: '/your-repo-name',
  ```

---

## 方法二：手动部署

### 步骤：

1. **构建项目**
   ```bash
   npm run build
   ```

2. **安装 gh-pages**
   ```bash
   npm install -D gh-pages
   ```

3. **添加部署脚本到 package.json**
   ```json
   {
     "scripts": {
       "deploy": "gh-pages -d out"
     }
   }
   ```

4. **部署**
   ```bash
   npm run deploy
   ```

5. **在 GitHub 设置中启用 Pages**
   - 进入 `Settings` > `Pages`
   - 选择 `gh-pages` 分支
   - 点击 Save

---

## 自定义域名（可选）

1. 在仓库根目录创建 `public/CNAME` 文件
2. 添加你的域名：
   ```
   your-domain.com
   ```
3. 在域名提供商处添加 DNS 记录：
   - 类型：A
   - 主机：@
   - 值：185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153

---

## 故障排除

### 页面显示 404
- 检查 `next.config.js` 中的 `basePath` 设置
- 确保 GitHub Pages 已启用

### 图片不显示
- 确保 `next.config.js` 中设置了 `images.unoptimized: true`
- 图片路径使用相对路径

### 样式丢失
- 检查 `basePath` 配置
- 清除浏览器缓存

---

## 更新网站

只需推送新代码到 main 分支，GitHub Actions 会自动重新部署：

```bash
git add .
git commit -m "Update content"
git push origin main
```
