import { defineUserConfig } from "vuepress";
import { themeConfig } from "./themeConfig";
import { searchProPlugin } from "vuepress-plugin-search-pro";

export default defineUserConfig({
  dest: ".vuepress/dist",
  theme: themeConfig,
  shouldPrefetch: false,
  title: "撸毛人",
  head: [
    ["meta", { name: "author", content: "pizza-era" }],
    [
      "meta",
      {
        "http-equiv": "Cache-Control",
        content: "no-cache, no-store, must-revalidate",
      },
    ],
    ["meta", { "http-equiv": "Pragma", content: "no-cache" }],
    ["meta", { "http-equiv": "Expires", content: "0" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
  ],
  locales: {
    "/": {
      lang: "zh-CN",
    },
  },
  plugins: [
    searchProPlugin({
      indexContent: true,
      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),
  ],
});
