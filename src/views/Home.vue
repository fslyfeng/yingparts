<template>
  <div class="home">
    <app-header />
    <app-menu />
    <app-slideshow />
    <app-goods-list />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppMenu from "@/components/AppMenu.vue";
import AppSlideshow from "@/components/AppSlideshow.vue";
import AppGoodsList from "../components/AppGoodsList.vue";
import AppFooter from "@/components/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppMenu,
    AppSlideshow,
    AppGoodsList,
    AppFooter,
  },
};
</script>
