<!--
 * @Author: netren
 * @Date: 2020-12-22 22:13:07
 * @Description:App 页页轮播图
-->

<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(n, index) in imgObj" :key="index">
        <img :src="n" />
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgObj: [
        "https://yanxuan.nosdn.127.net/14fda774e94f9e5bededdf0e18e26344.jpg?type=webp&imageView&quality=75&thumbnail=360x0",
        "https://yanxuan.nosdn.127.net/14fda774e94f9e5bededdf0e18e26344.jpg?type=webp&imageView&quality=75&thumbnail=360x0",
        "https://yanxuan.nosdn.127.net/194d6e3c4112c7d71df4bdec7670f490.jpg?type=webp&imageView&quality=75&thumbnail=360x0",
        "https://yanxuan.nosdn.127.net/aaa268b981a1e4248b31dcfeac949a18.jpg?type=webp&imageView&quality=75&thumbnail=360x0",
      ],
    };
  },
};
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
  background-color: #ffffff;
}
</style>
