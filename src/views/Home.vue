<template>
  <div class="home">
    <app-header />
    <app-menu />
    <app-slideshow />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppMenu from "@/components/AppMenu.vue";
import AppFooter from "@/components/AppFooter.vue";
import AppSlideshow from "@/components/AppSlideshow.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppMenu,
    AppSlideshow,
    AppFooter,
  },
};
</script>
