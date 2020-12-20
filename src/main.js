import "./assets/rem";
import "./assets/reset.css";
import Vue from "vue";
import App from "./App.vue";

import { Button, Col, Row, search } from "vant";
import router from "./router";
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(search);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
