import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'
import envConfig from '../config/env'



//引入ajax请求
import api from '../api/axios'

Vue.use(Router);

// 路由懒加载

// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point

//首页
// const home = resolve => {
//   require.ensure(['../page/home/home'], () => {
//     resolve(require('../page/home/home'));
//   });
// };
const home = r => require.ensure([], () => r(require('../page/home/home')),'home')
//
// //登录页
// const login = resolve => {
//   require.ensure(['../page/login/login'], () => {
//     resolve(require('../page/login/login'));
//   });
// };
//
// // 登出
// const logout = resolve => {
//   require.ensure(['../page/login/logout'], () => {
//     resolve(require('../page/login/logout'));
//   });
// };
//
// //搜索页
// const search = resolve => {
//   require.ensure(['../page/search/search'], () => {
//     resolve(require('../page/search/search'));
//   });
// };
//
// //房源详情
// const houseRentDetail = resolve => {
//    require.ensure(['../page/houseDetail/houseRentDetail'], () => {
//      resolve(require('../page/houseDetail/houseRentDetail'));
//    });
//  };
//
// const houseBuyDetail = resolve => {
//   require.ensure(['../page/houseDetail/houseBuyDetail'], () => {
//     resolve(require('../page/houseDetail/houseBuyDetail'));
//   });
// };
const houseBuyDetail = r => require.ensure([], () => r(require('../page/houseDetail/houseBuyDetail')),'houseBuyDetail')
//
// //我的关注
// const myCare = resolve => {
//   require.ensure(['../page/myCare/myCare'], () => {
//     resolve(require('../page/myCare/myCare'));
//   });
// };
//
// // 房源对比结果
// const comparedResult = resolve => {
//   require.ensure(['../page/houseCompared/comparedResult'], () => {
//     resolve(require('../page/houseCompared/comparedResult'));
//   });
// };
//
// //关注房源列表
// const careHouseList = resolve => {
//   require.ensure(['../page/houseCompared/careHouseList'], () => {
//     resolve(require('../page/houseCompared/careHouseList'));
//   });
// };
//
// // 房源对比列表
// const houseCompared = resolve => {
//   require.ensure(['../page/houseCompared/houseCompared'], () => {
//     resolve(require('../page/houseCompared/houseCompared'));
//   })
// }
// // 签约查询
// const signSearch = resolve => {
//   require.ensure(['../page/sign/signSearch'], () => {
//     resolve(require('../page/sign/signSearch'));
//   });
// };
//
// // 签约详情
// const signDetail = resolve => {
//   require.ensure(['../page/sign/signDetail'], () => {
//     resolve(require('../page/sign/signDetail'));
//   });
// };
//
// // 看房主页
// const lookHouseIndex = resolve => {
//   require.ensure(['../page/lookHouse/lookHouseIndex'], () => {
//     resolve(require('../page/lookHouse/lookHouseIndex'));
//   });
// };
//
// // 看房记录
// const lookHouseHistory = resolve => {
//   require.ensure(['../page/lookHouse/lookHouseHistory'], () => {
//     resolve(require('../page/lookHouse/lookHouseHistory'));
//   });
// };
//
// // 添加看房笔记
// const addLookHouseLog = resolve => {
//   require.ensure(['../page/lookHouse/addLookHouseLog'], () => {
//     resolve(require('../page/lookHouse/addLookHouseLog'));
//   });
// };
//
//
// // 看房预约
// const lookHouseReservation = resolve => {
//   require.ensure(['../page/lookHouse/lookHouseReservation'], () => {
//     resolve(require('../page/lookHouse/lookHouseReservation'));
//   });
// };
//
//
//
// const imgIncrease = resolve => {
//   require.ensure(['../page/houseDetail/imgIncrease'], () => {
//     resolve(require('../page/houseDetail/imgIncrease'));
//   });
// };
//
// const houseAppointment = resolve => {
//   require.ensure(['../page/houseDetail/houseAppointment'], () => {
//     resolve(require('../page/houseDetail/houseAppointment'));
//   });
// };
//
// const mapIncrease = resolve => {
//   require.ensure(['../page/houseDetail/mapIncrease'], () => {
//     resolve(require('../page/houseDetail/mapIncrease'));
//   });
// };
//
// const villageDetail = resolve => {
//   require.ensure(['../page/houseDetail/villageDetail'], () => {
//     resolve(require('../page/houseDetail/villageDetail'));
//   });
// };
//
// const villageMore = resolve => {
//   require.ensure(['../page/houseDetail/villageMore'], () => {
//     resolve(require('../page/houseDetail/villageMore'));
//   });
// };
//
//
//
// //经纪人模块
// const newHouseSharePage = resolve => {
//   require.ensure(['../broker/newHouse/newHouseSharePage'], () => {
//     resolve(require('../broker/newHouse/newHouseSharePage'));
//   });
// };
//
//
// const newHouseAllDetail = resolve => {
//   require.ensure(['../broker/newHouse/newHouseAllDetail'], () => {
//     resolve(require('../broker/newHouse/newHouseAllDetail'));
//   });
// };
//
// const recommend = resolve => {
//   require.ensure(['../broker/recommendFriend/recommend'], () => {
//     resolve(require('../broker/recommendFriend/recommend'));
//   });
// };
//
// const recommendRegist = resolve => {
//   require.ensure(['../broker/recommendFriend/recommendRegist'], () => {
//     resolve(require('../broker/recommendFriend/recommendRegist'));
//   });
// };
//
// const registSuccess = resolve => {
//   require.ensure(['../broker/recommendFriend/registSuccess'], () => {
//     resolve(require('../broker/recommendFriend/registSuccess'));
//   });
// };
//
// const userProtocol = resolve => {
//   require.ensure(['../broker/recommendFriend/userProtocol'], () => {
//     resolve(require('../broker/recommendFriend/userProtocol'));
//   });
// };
//


const routes = [
    {
      path: '/',
      name:'home',//首页
      component: home,
    },
//   {
//     path: '/home',
//     name:'home',//首页
//     component: home,
//   },
//     {
//       path: '/login',
//       name: 'login',//登录页
//       component: login,
//     },
//     {
//       path: '/logout',
//       name:'logout',//登出
//       component: logout,
//     },
//     {
//       path: '/search',
//       name:'search',//房源列表页
//       component: search,
//     },
//     {//房源对比结果
//       path: '/comparedResult',
//       name: 'comparedResult',
//       component: comparedResult,
//     },
//     // 房源对比列表
//     {
//       path: '/houseCompared',
//       name: 'houseCompared',
//       component: houseCompared,
//     },
//     {//签约查询
//       path: '/signSearch',
//       name: 'signSearch',
//       component: signSearch,
//     },
//
//     {//签约详情
//       path: '/signDetail',
//       name: 'signDetail',
//       component: signDetail,
//     },
//
//   {
//       path: '/myCare',//我的关注
//       name: 'myCare',
//       component: myCare,
//     },
//   {
//     path:'/careHouseList',
//     name:'careHouseList',
//     component:careHouseList,
//   },
//   {
//     path: '/houseRentDetail',
//     name: 'houseRentDetail',//租房详情
//     component: houseRentDetail,
//   },
  {
    path: '/houseBuyDetail',
    name: 'houseBuyDetail',//二手房详情
    component: houseBuyDetail,
  },
//   {
//     path: '/imgIncrease',
//     name: 'imgIncrease',//图片放大
//     component: imgIncrease,
//   },
//   {
//     path: '/houseAppointment',
//     name: 'houseAppointment',//客户看房
//     component: houseAppointment,
//   },
//   {
//     path: '/mapIncrease',
//     name: 'mapIncrease',
//     component: mapIncrease,
//   },
//   {
//     path: '/user/weixin/menu',//可能值 house  account fund finan loan invite
//     name: 'weixinMenu',//获取微信菜单
//     meta: { redirect: true},
//   },
//     {
//     path: '/villageDetail',
//     name: 'villageDetail',
//     component: villageDetail,
//   },
//   {
//     path: '/villageMore',
//     name: 'villageMore',
//     component: villageMore,
//   },
//
//   // 看房主页
//   {
//     path: '/lookHouseIndex',
//     name: 'lookHouseIndex',
//     component: lookHouseIndex,
//   },
//
//   // 看房记录
//   {
//     path: '/lookHouseHistory',
//     name: 'lookHouseHistory',
//     component: lookHouseHistory,
//   },
//
//   // 添加看房笔记
//   {
//     path: '/addLookHouseLog',
//     name: 'addLookHouseLog',
//     component: addLookHouseLog,
//   },
//
//    // 看房预约中
//   {
//     path: '/lookHouseReservation',
//     name: 'lookHouseReservation',
//     component: lookHouseReservation,
//   },
//
//
//
// //经纪人模块
//
//   {//新房详情
//     path: '/newHouseSharePage',
//     name: 'newHouseSharePage',
//     component: newHouseSharePage,
//   },
//
//   {//新房查看全部
//     path: '/newHouseAllDetail',
//     name: 'newHouseAllDetail',
//     component: newHouseAllDetail,
//   },
//   {//邀请好友
//     path: '/recommend',
//     name: 'recommend',
//     component: recommend,
//   },
//   {//推荐注册
//     path: '/recommendRegist',
//     name: 'recommendRegist',
//     component: recommendRegist,
//   },
//   {//注册成功
//     path: '/registSuccess',
//     name: 'registSuccess',
//     component: registSuccess,
//   },
//   {//用户协议
//     path: '/userProtocol',
//     name: 'userProtocol',
//     component: userProtocol,
//   },

];


const router = new Router({
  mode:envConfig.routerMode,
  routes,
});
//注册全局钩子用来拦截导航
router.beforeEach((to, from, next) => {
  //获取store里面的token
  let token = store.state.token;
  //判断要去的路由有没有requiresAuth
  if (to.meta.requiresAuth) {
    if (token) {
      next();
    } else {
      next({
        path: '/login',
        query: {redirect: to.fullPath}  // 将刚刚要去的路由path（却无权限）作为参数，方便登录成功后直接跳转到该路由
      });
    }
  } else if(to.meta.redirect){
    //路由跳转(微信需要)
    let data = to.query;
    api.weixinMenu(data);
    // window.location.href = envConfig.weixinRederectUrl+to.fullPath;
  }else {
    next();//如果无需token,那么随它去吧
  }
});
export default router
