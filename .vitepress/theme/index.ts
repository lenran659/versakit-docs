import Theme from "vitepress/theme";
import VersakitUI from "versakit-ui"; // 引入组件库
import "versakit-ui/dist/style.css"; // 引入组件库样式

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.use(VersakitUI); // 注册组件库
  },
};
