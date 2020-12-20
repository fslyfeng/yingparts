<template>
  <div class="home">
    <app-header />
    <app-menu />
    <app-footer />
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from "@/components/AppHeader.vue";
import AppMenu from "../components/AppMenu.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  name: "Home",
  components: {
    AppHeader,
    AppMenu,
    AppFooter,
  },
};
</script>
