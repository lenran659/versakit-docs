import Theme from "vitepress/theme";
// import VersakitUI from "versakit-ui";
import "versakit-ui/dist/style.css"; // 引入组件库样式

export default {
  ...Theme,
  async enhanceApp({ app }) {
    app.mixin({
      async mounted() {
        //你自己的插件地址
        import("versakit-ui").then((module) => {
          // 注册组件库
          app.use(module.default);
        });
      },
    });
  },
};
