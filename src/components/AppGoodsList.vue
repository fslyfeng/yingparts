<!--
 * @Author: netren
 * @Date: 2020-12-24 22:40:59
 * @Description:App 商品列表
-->
<template>
  <div class="goodslist">
    <!-- ###### -->
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

    <div>
      <van-divider>版权所有 樱洁卫浴配件 | 联系电话：0750-82597750</van-divider>
      <br />
      <br />
      <br />
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

<style scoped></style>
