import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/yun.svg',
  // your git repo url
  docsRepo: 'https://github.com/yunshujing/yunshujing.github.io',
  docsBranch: 'source',
  docsDir: 'docs',

  appearance: true,

  // 内容集合：将 docs/blog 下的所有文章作为博客集合
  // 自动生成 /blog/ 文章列表、/blog/tags/ 标签页、/blog/archives/ 归档页
  collections: [
    {
      type: 'post',
      dir: 'blog',
      title: '博客',
    },
  ],

  social: [
    { icon: 'github', link: 'https://github.com/yunshujing' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/214528017' },
    { icon: 'qq', link: 'https://qm.qq.com/q/eYVgTUe7E4' },
  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://img.picgo.net/2024/12/07/wallhaven-rrd721c1aa7ce8ae2b52c8.png',
        name: 'Yskye',
        description: '云书景的个人知识库与技术博客',
        circle: true,
        layout: 'left',
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
    },
    '/en/': {
      profile: {
        avatar: 'https://img.picgo.net/2024/12/07/wallhaven-rrd721c1aa7ce8ae2b52c8.png',
        name: 'Yskye',
        description: '个人知识库与技术博客',
        circle: true,
        layout: 'left',
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
    },
  },
})