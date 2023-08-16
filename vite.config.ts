/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 15:45:09
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-01 10:47:08
 */
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import AutoImport from "unplugin-auto-import/vite";
import Components from "unplugin-vue-components/vite";
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts", ".vue"], // 使用路径别名时想要省略的后缀名，可以自己 增减
  },
  server: {
    // 系统端口号
    port: 8080, // 是否自动打开浏览器
    open: true, // 代理跨域
    proxy: {
      "/user": {
        target: "http://127.0.0.1:9999",
        changeOrigin: true,
        rewrite: (path) => path.replace("//user$/", ""),
      },
    },
  },
});
