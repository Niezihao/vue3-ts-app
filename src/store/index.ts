/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 16:42:39
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-14 16:43:08
 */
import { createStore } from "vuex";
export default createStore({
  state: {
    count: 0,
  },
  mutations: {
    SET_COUNT: (state, count) => {
      count += 1;
      state.count = count;
    },
  },
  actions: {},
  getters: {},
});
