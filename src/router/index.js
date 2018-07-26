import Vue from "vue";
import Router from "vue-router";
import envConfig from "../config/env";
import api from '../api/axios'
import { MessageBox } from 'mint-ui';
Vue.use(Router);

// 路由懒加载
// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point
// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

const routes = [
  {//首页
    path: '/', name: 'home',meta:{keepAlive:true},
    component: r => require.ensure([], () => r(require('../page/home/home'))),
  },
  {//登录页
    path: '/login', name: 'login', meta:{title: '金品生活'},
    component: r => require.ensure([], () => r(require('../page/login/login'))),
  },
  {//登出
    path: '/logout', name: 'logout',meta:{title: '金品生活'},
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
    path: '/houseCompared', name: 'houseCompared',
    component: r => require.ensure([], () => r(require('../page/houseCompared/houseCompared'))),
  },
  {//签约查询
    path: '/signSearch', name: 'signSearch',meta:{checkLogin:true},
    component: r => require.ensure([], () => r(require('../page/sign/signSearch'))),
  },
  {//签约详情
    path: '/signDetail', name: 'signDetail',
    component: r => require.ensure([], () => r(require('../page/sign/signDetail'))),
  },
  {//我的关注
    path: '/myCare', name: 'myCare',meta:{checkLogin:true},
    component: r => require.ensure([], () => r(require('../page/myCare/myCare'))),
  },
  {
    path: '/careHouseList', name: 'careHouseList',
    component: r => require.ensure([], () => r(require('../page/houseCompared/careHouseList'))),
  },
  {//二手房详情
    path: '/houseBuyDetail', name: 'houseBuyDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseBuyDetail'))),
  },
  {//租房详情
    path: '/houseRentDetail', name: 'houseRentDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseRentDetail'))),
  },
  {//图片放大
    path: '/imgIncrease', name: 'imgIncrease',
    component: r => require.ensure([], () => r(require('../page/houseDetail/imgIncrease'))),
  },
  {//客户看房
    path: '/houseAppointment', name: 'houseAppointment',
    component: r => require.ensure([], () => r(require('../page/houseDetail/houseAppointment'))),
  },
  {
    path: '/mapIncrease', name: 'mapIncrease',
    component: r => require.ensure([], () => r(require('../page/houseDetail/mapIncrease'))),
  },
  {
    path: '/villageDetail', name: 'villageDetail',
    component: r => require.ensure([], () => r(require('../page/houseDetail/villageDetail'))),
  },
  {
    path: '/villageMore', name: 'villageMore',
    component: r => require.ensure([], () => r(require('../page/houseDetail/villageMore'))),
  },

  {// 看房预约
    path: '/lookHouseIndex', name: 'lookHouseIndex',meta:{checkLogin:true},
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseIndex'))),
  },

  { // 看房记录
    path: '/lookHouseHistory', name: 'lookHouseHistory',
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseHistory'))),
  },
  { // 添加看房笔记
    path: '/addLookHouseLog', name: 'addLookHouseLog',
    component: r => require.ensure([], () => r(require('../page/lookHouse/addLookHouseLog')))
  },
  {// 看房预约
    path: '/lookHouseReservation', name: 'lookHouseReservation',meta:{checkLogin:true},
    component: r => require.ensure([], () => r(require('../page/lookHouse/lookHouseReservation'))),
  },
];


const router = new Router({
  mode: envConfig.routerMode,
  routes,
});
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {

  //判断要去的路由是否需要先登录
  if (to.meta.checkLogin) {
    //判断是否登录
    api.isLogin()
      .then(res => {
        if (res.data.success) {
          next();
        }else{
          //跳出登录弹框
          MessageBox({
            title: '',
            message: '请登录查看',
            showCancelButton: true,
            confirmButtonText:"登录"
          }).then(action => {
            if(action == "confirm"){
              next({ //跳转到登录页面
                path: 'login',
                query: {
                  redirect: router.currentRoute.fullPath, //将跳转的路由path作为参数，登录成功后跳转到该路由
                  openId:res.result.openId,
                  code:res.result.code
                }
              });
            }
          })
        }
      });
  }
  //更改title
  if (to.meta.title) {
    document.title = to.meta.title;
    next();
  }

  // else if(to.meta.redirect){
  //   //路由跳转(微信需要)
  //   let data = to.query;
  //   api.weixinMenu(data);
  //   // window.location.href = envConfig.weixinRederectUrl+to.fullPath;
  // }
  else {
    next();
  }
});
export default router
