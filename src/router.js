import VueRouter from 'vue-router'
import header from "./components/tabbar/header.vue";
import car from "./components/tabbar/car.vue";
import search from "./components/tabbar/search.vue";
import member from "./components/tabbar/member.vue";
// 3. 创建路由对象
var router = new VueRouter({
  routes: [
      {path:"/",redirect:"/header"},
      {path:"/car",component:car},
      {path:"/header",component:header},
      {path:"/search",component:search},
      {path:"/member",component:member}
  ],
  linkActiveClass:"mui-active"
})

// 把路由对象暴露出去
export default router