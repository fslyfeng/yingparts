<template>
  <div class="home">
    <app-head />
    <app-menu />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHead from "@/components/AppHead.vue";
import AppMenu from "../components/AppMenu.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHead,
    AppMenu,
    AppFooter,
  },
};
</script>
