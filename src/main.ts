/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 15:45:09
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-31 17:35:34
 * @FilePath: \vue3-ts-app\src\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from "vue";
import "./style.css";
import App from "@/App.vue";
import router from "@/router/index";
import { createPinia } from 'pinia'
const pinia = createPinia()

const app = createApp(App);
app.use(router);
app.use(pinia)
app.mount("#app");
