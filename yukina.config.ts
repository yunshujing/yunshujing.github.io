import I18nKeys from "./src/locales/keys";
import type { Configuration } from "./src/types/config";

const YukinaConfig: Configuration = {
  title: "Yskye",
  subTitle: "云书景的博客",
  brandTitle: "Yskye",

  description: "云书景的个人知识库与技术博客",

  site: "https://yunshujing.github.io",

  locale: "zh-CN", // set for website language and date format

  navigators: [
    {
      nameKey: I18nKeys.nav_bar_home,
      href: "/",
    },
    {
      nameKey: I18nKeys.nav_bar_archive,
      href: "/archive",
    },
    {
      nameKey: I18nKeys.nav_bar_about,
      href: "/about",
    },
    {
      nameKey: I18nKeys.nav_bar_github,
      href: "https://github.com/yunshujing",
    },
  ],

  username: "云书景 Yskye",
  sign: "少年负壮气，奋烈自有时。",
  avatarUrl: "/avatar.png",
  socialLinks: [
    {
      icon: "line-md:github-loop",
      link: "https://github.com/yunshujing",
    },
    {
      icon: "mingcute:bilibili-line",
      link: "https://space.bilibili.com/214528017",
    },
  ],
  maxSidebarCategoryChip: 6, // It is recommended to set it to a common multiple of 2 and 3
  maxSidebarTagChip: 12,
  maxFooterCategoryChip: 6,
  maxFooterTagChip: 24,

  banners: [
    "/banner-main.svg",
  ],

  slugMode: "HASH", // 'RAW' | 'HASH'

  license: {
    name: "CC BY-NC-SA 4.0",
    url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
  },

  // WIP functions
  bannerStyle: "LOOP", // 'loop' | 'static' | 'hidden'
};

export default YukinaConfig;