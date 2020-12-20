<!--
 * @Author: netren
 * @Date: 2020-12-20 08:08:27
 * @Description:app header 页面头部
-->

<template>
  <div>
    <van-row class="van-row">
      <van-col span="4">
        <img class="logo" src="../assets/logo.png" />
      </van-col>
      <van-col span="16"
        ><van-search class="search" v-model="value" placeholder="搜索商品名称"
      /></van-col>
      <van-col span="4"></van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "",
    };
  },
};
</script>

<style scoped>
.van-row {
  margin: 0.1rem 0 0.1rem 0;
}
.logo {
  height: 0.3rem;
  display: inline-block;
  margin: 0 0.1rem 0 0.1rem;
}
.search {
  height: 0.3rem;
  border: 0;
  padding: 0;
  margin: 0 0.1rem 0 0.1rem;
}
.van-search__content {
  border-radius: 0.05rem;
}
</style>
