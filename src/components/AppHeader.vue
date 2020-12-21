<!--
 * @Author: netren
 * @Date: 2020-12-20 08:08:27
 * @Description:app header 页面头部
-->

<template>
  <div>
    <van-row type="flex" justify="space-around" class="van-row">
      <van-col span="5">
        <img class="logo" src="../assets/logo.png" />
      </van-col>
      <van-col span="16"
        ><van-search class="search" v-model="value" placeholder="搜索商品名称"
      /></van-col>
      <van-col span="3"
        ><img class="logo" src="../assets/icon/sharpicons_user-button.png"
      /></van-col>
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
  margin: 0.2rem 0 0 0;
}
.van-col {
  padding: 0;
  /* 水平居中 */
  text-align: center;
  /* 垂直居中 */
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.logo {
  height: 0.8rem;
  display: inline-block;
  margin: 0 auto;
}
.search {
  padding: 0;
  margin: 0;
}
.van-search__content {
  border-radius: 0.1rem;
}
</style>
