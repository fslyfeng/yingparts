<!--
 * @Author: netren
 * @Date: 2020-12-20 08:13:31
 * @Description:footer 吸底工具条
-->

<template>
  <div class="">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="shop">首页</van-tabbar-item>
      <van-tabbar-item icon="goods-collect" dot>分类</van-tabbar-item>
      <van-tabbar-item icon="new" badge="5">最新</van-tabbar-item>
      <van-tabbar-item icon="comment" badge="5">关于</van-tabbar-item>
      <van-tabbar-item icon="friends" badge="20">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: "",
    };
  },
};
</script>

<style scoped></style>
