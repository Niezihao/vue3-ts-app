<!--
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-14 17:42:17
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-01 10:36:02
-->
<template>
  <div>count:{{ store.doubleCount }} <ElButton @click="addCount">count++</ElButton></div>
</template>

<script setup lang="ts">
import { useUsersStore } from "../store/user";
const store = useUsersStore();
// count增加方法
function addCount() {
  store.increment(5);
}
</script>

<style scoped></style>
