import { defineThemeConfig } from 'vuepress-theme-plume'
import { enNavbar, zhNavbar } from './navbar'
import { enNotes, zhNotes } from './notes'

/**
 * @see https://theme-plume.vuejs.press/config/basic/
 */
export default defineThemeConfig({
  logo: '/yun.svg',
  favicon: '/yun.svg',
  // your git repo url
  docsRepo: 'https://github.com/yunshujing/yunshujing.github.io',
  docsBranch: 'source',
  docsDir: 'docs',

  appearance: true,

  social: [
    // { icon: 'github', link: '/' },
    { icon: 'github', link: 'https://github.com/yunshujing' },
    { icon: 'bilibili', link: 'https://space.bilibili.com/214528017' },
    { icon: 'qq', link: 'https://qm.qq.com/q/eYVgTUe7E4' },

  ],

  locales: {
    '/': {
      profile: {
        avatar: 'https://img.picgo.net/2024/12/07/wallhaven-rrd721c1aa7ce8ae2b52c8.png',
        name: 'Yskye',
        description: '云书景的学习笔记',
        circle: true,
        layout: 'left',
        // location: '',
        // organization: '',
      },

      navbar: zhNavbar,
      notes: zhNotes,
    },
    '/en/': {
      profile: {
        avatar: 'https://img.picgo.net/2024/12/07/wallhaven-rrd721c1aa7ce8ae2b52c8.png',
        name: 'Yskye',
        description: '云书景的学习笔记',
        circle: true,
        layout: 'left',
        // location: '',
        // organization: '',
      },

      navbar: enNavbar,
      notes: enNotes,
    },
  },
})
