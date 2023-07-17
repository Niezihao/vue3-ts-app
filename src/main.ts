/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 15:45:09
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 09:58:22
 * @FilePath: \vue3-ts-app\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import store from "@/store/index";
import App from "@/App.vue";
import router from "@/router/index";

const app = createApp(App);
app.use(router);
app.use(store);
app.mount("#app");
