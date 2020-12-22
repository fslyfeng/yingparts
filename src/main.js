// import "./assets/rem";
// import "./assets/reset.css";
import "lib-flexible/flexible"; // px自动转rem
import Vue from "vue";
import App from "./App.vue";

import { Button, Col, Row, search, Tab, Tabs, Swipe, SwipeItem } from "vant";
import router from "./router";
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(search)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
