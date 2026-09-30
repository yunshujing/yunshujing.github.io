# Yskye Blog · 云书景的博客

个人知识库与技术博客，记录算法竞赛、CTF 逆向、课程学习与实践中的笔记与经验。

在线地址：**[https://yunshujing.github.io](https://yunshujing.github.io)**

## 技术栈

- [Astro](https://astro.build) 5 + [Yukina](https://github.com/WhitePaper233/yukina) 博客主题
- Tailwind CSS · Svelte · TypeScript
- Pagefind 站内搜索 · RSS · Sitemap

## 目录结构

```
src/
├── contents/
│   ├── posts/          # 博客文章（Markdown）
│   │   ├── 1.acm/      # ACM 算法竞赛
│   │   ├── 2.ctf/      # CTF 逆向
│   │   ├── 3.school/   # 课程学习
│   │   └── preview/    # 预览与示例
│   └── specs/about.md  # 关于页
├── pages/              # 页面路由
└── ...
public/                 # 静态资源（banner、covers 等）
yukina.config.ts        # 主题配置（站名、导航、社交、封面）
```

## 分支约定

| 分支 | 内容 |
| --- | --- |
| `main` | 源码 + 文章（日常开发/写作分支） |
| `gh-pages` | 构建产物（GitHub Actions 自动生成，勿手改） |
| `archive-v1-hexo` | 第一代博客存档 |
| `archive-v2-plume` | 第二代博客存档 |

## 本地开发

需要 Node.js 22+ 与 [pnpm](https://pnpm.io)：

```bash
pnpm install     # 安装依赖
pnpm dev         # 本地开发预览
pnpm build       # 构建产物到 dist/
pnpm preview     # 预览构建产物
```

## 写作

在 `src/contents/posts/` 下新建 Markdown 文件，frontmatter 示例：

```yaml
---
title: 文章标题
published: 2026-09-30
draft: false
tags: [标签1, 标签2]
category: ACM
cover: /covers/acm.svg
---
```

推送到 `main` 分支后，GitHub Actions 会自动构建并部署到 GitHub Pages。

## 部署

- 平台：GitHub Pages（免费，无需服务器）
- 流程：push `main` → GitHub Actions 执行 `pnpm build` → 产物发布到 `gh-pages` 分支
- Pages 设置：Deploy from a branch → `gh-pages` / `(root)`

## 许可证

[MIT](LICENSE) except contents（文章内容版权归作者所有）。