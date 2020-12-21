<!--
 * @Author: netren
 * @Date: 2020-12-20 08:08:27
 * @Description:app页面头部
-->

<template>
  <div>
    <van-tabs color="blue">
      <van-tab v-for="index in 8" :key="index" :title="'标签 ' + index">
        内容 {{ index }}
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped></style>
