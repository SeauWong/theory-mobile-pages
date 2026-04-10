# theory-mobile-pages

一个面向移动端的中文静态专题页，主题为“结构主义、建构主义、解构主义与认知科学”。项目适合直接部署到 GitHub 或 Cloudflare Pages。

## 本地预览

项目没有构建步骤，直接启动一个静态服务器即可。

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 文件结构

- `index.html`：专题页内容与结构
- `styles.css`：移动端优先的视觉样式
- `script.js`：章节高亮与 reveal 动画

## 发布到 Cloudflare Pages

在 Cloudflare Dashboard 中：

1. 进入 `Workers & Pages`
2. 点击 `Create application`
3. 选择 `Pages` 并连接这个 GitHub 仓库
4. 配置：
   - `Production branch`: `main`
   - `Build command`: 留空
   - `Build output directory`: `/`
5. 首次部署成功后，到 `Custom domains` 里绑定你在 Cloudflare 购买的域名

注意：自定义域名请直接在 Pages 的 `Custom domains` 中配置，不要先手动添加指向 `pages.dev` 的 DNS 记录。
