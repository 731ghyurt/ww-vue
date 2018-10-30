// 入口文件
// console.log('OK')
import Vue from "vue";
import { Header } from 'mint-ui';
import App from './App.vue';
//引入mui的样式
import "./lib/mui/css/mui.min.css";
Vue.component(Header.name, Header);
var vm = new Vue({
    el:"#app",
    render:callback=>callback(App)
});