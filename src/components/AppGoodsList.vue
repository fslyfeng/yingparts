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
    <van-grid :column-num="3" clickable>
      <van-grid-item v-for="(n, index) in newGoodsList" :key="index">
        <van-image width="100" height="100" :src="n.img_url" />
        <div class="paragraph">{{ n.name }}</div>
      </van-grid-item>
    </van-grid>

    <div>
      <van-divider>樱洁卫浴配件 | 电话：0750-82597750</van-divider>
      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newGoodsList: [
        {
          img_url: require("../assets/upload/LQ01_1.png"),
          name: "淋浴房拉手卫生间推拉玻璃门拉手推移门把手塑料透明圆锥单孔拉手",
        },
        {
          img_url: require("../assets/upload/LQ01_2.png"),
          name: "淋浴房拉手卫生间推拉玻璃门拉手推移门把手塑料透明圆锥单孔拉手1",
        },
        {
          img_url: require("../assets/upload/LQ01_3.png"),
          name: "LQ01",
        },
        {
          img_url: require("../assets/upload/LQ01_4.png"),
          name: "LQ01",
        },
        {
          img_url: require("../assets/upload/LQ01_5.png"),
          name: "LQ01",
        },
        {
          img_url: require("../assets/upload/LQ01_6.png"),
          name: "LQ01",
        },
      ],
    };
  },
};
</script>

<style scoped>
.paragraph {
  width: 100px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
</style>
