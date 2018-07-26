import Vue from "vue";
import Router from "vue-router";
import envConfig from "../config/env";
Vue.use(Router);

// 路由懒加载
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

const routes = [
  {//首页
    path: '/', name: 'home',
    component: r => require.ensure([], () => r(require('../page/home/home'))),
  },
  {//登录页
    path: '/login', name: 'login',
    component: r => require.ensure([], () => r(require('../page/login/login'))),
  },
  {//登出
    path: '/logout', name: 'logout',
    component: r => require.ensure([], () => r(require('../page/login/logout'))),
  },
  {//房源列表页
    path: '/search', name:'search',
    component: r => require.ensure([], () => r(require('../page/search/search'))),
  },
  {//房源对比结果
    path: '/comparedResult', name: 'comparedResult',
    component: r => require.ensure([], () => r(require('../page/houseCompared/comparedResult'))),
  },
  { // 房源对比列表
    path: '/houseCompared',
    name: 'houseCompared',
    component: r => require.ensure([], () => r(require('../page/houseCompared/houseCompared'))),
  },
  {//签约查询
    path: '/signSearch', name: 'signSearch',
    component: r => require.ensure([], () => r(require('../page/sign/signSearch'))),
  },
  {//签约详情
    path: '/signDetail', name: 'signDetail',
    component: r => require.ensure([], () => r(require('../page/sign/signDetail'))),
  },
  {//我的关注
    path: '/myCare', name: 'myCare',
    component: r => require.ensure([], () => r(require('../page/myCare/myCare'))),
  },
  {
    path: '/careHouseList', name: 'careHouseList',
    component: r => require.ensure([], () => r(require('../page/houseCompared/careHouseList'))),
  },
  {//二手房详情
    path: '/houseBuyDetail',
    name: 'houseBuyDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseBuyDetail'))),
  },
  {//租房详情
    path: '/houseRentDetail', name: 'houseRentDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseRentDetail'))),
  },
  {//图片放大
    path: '/imgIncrease',
    name: 'imgIncrease',
    component: r => require.ensure([], () => r(require('../page/houseDetail/imgIncrease'))),
  },
  {//客户看房
    path: '/houseAppointment',
    name: 'houseAppointment',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseAppointment'))),
  },
  {
    path: '/mapIncrease',
    name: 'mapIncrease',
    component: r => require.ensure([], () => r(require('../page/houseDetail/mapIncrease'))),
  },
  {
    path: '/villageDetail',
    name: 'villageDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/villageDetail'))),
  },
  {
    path: '/villageMore',
    name: 'villageMore',
    component: r => require.ensure([], () => r(require('../page/houseDetail/villageMore'))),
  },

  {// 看房主页
    path: '/lookHouseIndex',
    name: 'lookHouseIndex',
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseIndex'))),
  },

  { // 看房记录
    path: '/lookHouseHistory',
    name: 'lookHouseHistory',
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseHistory'))),
  },
  { // 添加看房笔记
    path: '/addLookHouseLog',
    name: 'addLookHouseLog',
    component: r => require.ensure([], () => r(require('../page/lookHouse/addLookHouseLog')))
  },
  {// 看房预约中
    path: '/lookHouseReservation',
    name: 'lookHouseReservation',
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseReservation'))),
  },
];


const router = new Router({
  mode: envConfig.routerMode,
  routes,
});
//注册全局钩子用来拦截导航
// router.beforeEach((to, from, next) => {
//   //获取store里面的token
//   let token = store.state.token;
//   //判断要去的路由有没有requiresAuth
//   if (to.meta.requiresAuth) {
//     if (token) {
//       next();
//     } else {
//       next({
//         path: '/login',
//         query: {redirect: to.fullPath}  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
//       });
//     }
//   }
//   // else if(to.meta.redirect){
//   //   //路由跳转(微信需要)
//   //   let data = to.query;
//   //   api.weixinMenu(data);
//   //   // window.location.href = envConfig.weixinRederectUrl+to.fullPath;
//   // }
//   else {
//     next();
//   }
// });
export default router
