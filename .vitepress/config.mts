import { defineConfig } from "vitepress";
import { getNav } from "./config/nav";
import { getComponentsSidebar } from "./config/getComponentsSidebar";
import { vitepressDemoPlugin } from "vitepress-demo-plugin";
import { getGuideSidebar } from "./config/getGuideSidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/versakit-docs/",
  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/svg+xml",
        href: "../logo.png",
      },
    ],
  ],
  title: "Versakit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: getNav(),

    sidebar: {
      "/guide/": getGuideSidebar(),
      "/components/": getComponentsSidebar(),
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/lenran659/versakit-ui" },
      {
        icon: "gitee",
        link: "https://gitee.com/dragon_water/versakit-ui#/dragon_water/versakit-ui/blob/master/%22https:/lenran659.github.io/versakit-docs/%22",
      },
    ],
  },
  markdown: {
    config(md) {
      md.use(vitepressDemoPlugin);
    },
  },
  vite: {
    server: {
      host: "0.0.0.0",
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
