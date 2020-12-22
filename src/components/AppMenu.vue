<!--
 * @Author: netren
 * @Date: 2020-12-20 08:08:27
 * @Description:app菜单页面
-->

<template>
  <div>
    <van-tabs color="blue">
      <van-tab v-for="(n, index) in tabsList" :key="index" :title="n">
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tabsList: ["拉手", "塑料", "五金"],
    };
  },
};
</script>

<style scoped></style>
