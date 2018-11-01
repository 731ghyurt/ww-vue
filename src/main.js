// 入口文件
import Vue from "vue";
import { Header,Swipe, SwipeItem,Button} from 'mint-ui';
import App from './App.vue';
import VueRouter from 'vue-router';
//引入mui的样式
import "./lib/mui/css/mui.min.css";
import "./lib/mui/css/icons-extra.css";
import router from "./router.js";
import VueResource from "vue-resource";
Vue.use(VueResource);
Vue.http.options.root = 'http://localhost:5000';//配置数据请求的根路径
import moment from "moment";
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);
Vue.use(VueRouter);

Vue.component(Header.name, Header);
//定义一个全局的时间格式的过滤器
Vue.filter("timeFilter",(timeStr,pattern="YYYY-MM-DD hh:mm:ss")=>{
    return moment(timeStr).format(pattern);
});

var vm = new Vue({
    el:"#app",
    render:callback=>callback(App),
    router
});