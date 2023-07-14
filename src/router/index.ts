/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 17:51:25
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-14 17:54:40
 * @FilePath: \vue3-ts-app\src\router\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
const routes: RouteRecordRaw[] = [
  {
    path: "/",
    name: "Test",
    component: () => import("@/components/test.vue"), // 注意这里要带上 文件后缀.vue
  },
];
const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
export default router;
