# Yskye Blog · 云书景的博客

个人知识库与技术博客，记录学习与实践中的知识沉淀，内容涵盖 **ACM 算法竞赛、CTF 逆向工程、学校课程笔记、工具与技巧** 等。

在线地址：**[https://yunshujing.github.io](https://yunshujing.github.io)**

## 技术栈

| 组件 | 说明 |
| --- | --- |
| [VuePress 2](https://vuepress.vuejs.org/) | 静态站点框架 |
| [vuepress-theme-plume](https://github.com/pengzhanbo/vuepress-theme-plume) | 主题 |
| Vite | 构建器 |
| TypeScript / Sass | 配置与样式开发 |
| GitHub Pages + Actions | 自动构建部署 |

## 分支结构

| 分支 | 内容 | 说明 |
| --- | --- | --- |
| `source` | 源码 | **日常写作与开发在此分支**，push 后自动构建部署 |
| `main` | 构建产物 | GitHub Pages 部署内容，由 Actions 自动更新，请勿手动修改 |
| `v1-backup` | 第一代博客存档 | 历史归档，仅保留备用 |

## 本地开发

```sh
npm install        # 安装依赖
npm run docs:dev   # 启动开发服务器（热更新预览）
npm run docs:build # 生产构建，产物输出到 docs/.vuepress/dist
npm run docs:preview # 本地预览构建产物
```

## 部署

向 `source` 分支推送代码后，[GitHub Actions](.github/workflows/deploy.yml) 会自动完成：

1. 安装依赖并构建
2. 将产物发布到 `main` 分支
3. GitHub Pages 自动更新线上站点

## 许可证

[MIT](./LICENSE) © 云书景