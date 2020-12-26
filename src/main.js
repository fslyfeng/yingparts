import "lib-flexible/flexible"; // px自动转rem
import Vue from "vue";
import App from "./App.vue";

import {
  Button,
  Col,
  Row,
  search,
  Tab,
  Tabs,
  Swipe,
  SwipeItem,
  Tabbar,
  TabbarItem,
  Cell,
  CellGroup,
  Grid,
  GridItem,
  Divider,
} from "vant";
import router from "./router";
Vue.use(Button)
  .use(Col)
  .use(Row)
  .use(search)
  .use(Tab)
  .use(Tabs)
  .use(Swipe)
  .use(SwipeItem)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Cell)
  .use(CellGroup)
  .use(Grid)
  .use(GridItem)
  .use(Divider);
Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
