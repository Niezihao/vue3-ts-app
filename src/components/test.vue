<!--
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 17:42:17
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-14 17:42:48
-->
<template>
  <div>count:{{ count }} <button @click="addCount">count++</button></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useStore } from "vuex";
// 导入store
const store = useStore();
// 将count赋值
const count = ref(store.state.count);
// count增加方法
function addCount() {
  count.value++;
  store.commit("SET_COUNT", count.value);
}
</script>

<style scoped></style>
