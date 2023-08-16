/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-31 17:27:17
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-01 10:34:38
 * @FilePath: \vue3-ts-app\src\store\user.ts
 */
import { defineStore } from "pinia";

// 第一个参数是应用程序中 store 的唯一 id
export const useUsersStore = defineStore("users", {
  // 其它配置项
  state: () => {
    return {
      name: "小猪课堂",
      age: 29,
      sex: "男",
    };
  },
  actions: {
    // 改变状态
    increment(step: number) {
      this.age += step;
    },
  },
  getters: {
    // 计算过滤状态
    doubleCount(state) {
      return state.age * 2;
    },
  },
});
