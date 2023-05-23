import { sidebar } from "vuepress-theme-hope";
export const sidebarConfig = sidebar({
  "/": [
    {
      text: "技术文章",
      collapsible: false,
      children: [
        {
          text: "Github部署钱包一览",
          collapsible: true,
          link: "/technique/gp-pages/",
        },
      ],
    },
  ],
});
