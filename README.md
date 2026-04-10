# system-scout

一个手机竖版、单页、纯静态的轻交互网页游戏。主题是：在 AI 信息爆炸时代，如何快速认识一个系统，而不是把思考外包给 AI。

产品通过 5 个短关卡，把三条方法线压缩成可操作动作：

- 结构主义：先定边界，再看关系
- 建构主义：先主动建模，再用证据修正
- 认知科学：先做压缩，再靠检索与反馈稳固理解

## 本地运行

项目没有构建步骤，直接启动一个静态服务器即可：

```bash
python3 -m http.server 4173
```

然后访问 `http://localhost:4173`。

## 文件

- `index.html`：应用壳与分享元数据
- `styles.css`：手机竖版 UI、留白系统与交互动效
- `script.js`：状态机、关卡逻辑、localStorage 持久化
- `share-cover.svg` / `share-cover.png`：分享封面图
- `favicon.svg`：站点图标

## 部署到 Cloudflare Pages

这个项目是纯静态站点，推荐直接使用 Git 自动部署：

1. 进入 `Workers & Pages`
2. `Create application`
3. 选择 `Pages`
4. 选择 `Connect to Git`
5. 连接仓库
6. 使用以下配置：
   - `Production branch`: `main`
   - `Build command`: 留空
   - `Build output directory`: `/`

部署成功后，可以在 `Custom domains` 中绑定域名。
