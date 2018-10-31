// 入口文件
// console.log('OK')
import Vue from "vue";
import { Header,Swipe, SwipeItem} from 'mint-ui';
import App from './App.vue';
import VueRouter from 'vue-router';
//引入mui的样式
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
import router from "./router.js";
import VueResource from "vue-resource";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.use(VueRouter);
Vue.use(VueResource);
Vue.component(Header.name, Header);
var vm = new Vue({
    el:"#app",
    render:callback=>callback(App),
    router
});