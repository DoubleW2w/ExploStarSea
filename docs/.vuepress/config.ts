import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  // 网站路径默认为主域名。如果网站部署在子路径下，比如 xxx.com/yyy，那么 base 应该被设置为 "/yyy/"
  base: "/",

  // 网站语言，默认为中文
  lang: "zh-CN",
  // 网站标题
  title: "ExploStarSea",
  // 网站描述
  description:
    "开源工具、效率方法、心理学探索的自我提升笔记，记录并输出一切能让自己提升的知识。",

  theme,

  // Enable it with pwa
  // 是否开启页面预拉取，如果服务器宽带足够，可改为 true，会提升其他页面加载速度
  shouldPrefetch: false,

  // 禁止文件夹生成静态文件，参考 [VuePress 文档]（https://v2.vuepress.vuejs.org/zh/guide/page.html#routing）
  pagePatterns: ["**/*.md", "!_temp", "!.vuepress", "!node_modules"],
  plugins: [
    // Algolia 全文搜索：需要自己设置爬虫并生成下方配置，如不会自己设置，启用下方本地搜索
    // docsearchPlugin({
    //   indexName: "newzone",
    //   appId: "M4EXXEZIEG",
    //   apiKey: "fd8891a9c4cc21e0ef4f11bf44f7a11e",
    // }),
    // 本地搜索，和上方二选一
    // searchProPlugin({
    //   // 索引全部内容
    //   indexContent: true,
    // }),
  ],
});
