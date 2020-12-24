<!--
 * @Author: netren
 * @Date: 2020-12-24 22:40:59
 * @Description:App 商品列表
-->
<template>
  <div class="goodslist">
    <van-cell-group>
      <van-cell title="最新商品" value="更多" url="#" />
    </van-cell-group>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-cell-group>
      <van-cell title="最新商品" value="更多" url="#" />
    </van-cell-group>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <van-cell-group>
      <van-cell title="最新商品" value="更多" url="#" />
    </van-cell-group>
    <van-grid :column-num="3">
      <van-grid-item
        v-for="value in 6"
        :key="value"
        icon="photo-o"
        text="文字"
      />
    </van-grid>
    <div class="footer">
      footer div
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.footer {
  height: 2rem;
  background: #666;
  font-size: 0.5rem;
  color: #fff;
  text-align: center;
}
</style>
