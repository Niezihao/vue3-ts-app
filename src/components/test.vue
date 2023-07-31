<!--
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 17:42:17
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-31 17:38:27
-->
<template>
  <div>count:{{ count }} <ElButton @click="addCount">count++</ElButton></div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useUsersStore } from "../store/user";
const store = useUsersStore();
console.log(store);
// 将count赋值
const count = ref<number>(store.age);
// count增加方法
function addCount() {
  count.value++;
}
</script>

<style scoped></style>
