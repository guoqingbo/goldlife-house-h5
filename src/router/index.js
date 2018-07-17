import Vue from 'vue'
import Router from 'vue-router'
import store from '../store'

Vue.use(Router);

// 路由懒加载

// require.ensure 是 Webpack 的特殊语法，用来设置 code-split point

//首页
const home = resolve => {
  require.ensure(['../page/home/home'], () => {
    resolve(require('../page/home/home'));
  });
};
//登录页
const login = resolve => {
  require.ensure(['../page/login/login'], () => {
    resolve(require('../page/login/login'));
  });
};

// 登出
const checkOut = resolve => {
  require.ensure(['../page/login/checkOut'], () => {
    resolve(require('../page/login/checkOut'));
  });
};


const houseList = resolve => {
  require.ensure(['../page/houseList/houseList'], () => {
    resolve(require('../page/houseList/houseList'));
  });
};
 // const houseDetail = resolve => {
 //   require.ensure(['../page/houseDetail/houseDetail'], () => {
 //     resolve(require('../page/houseDetail/houseDetail'));
 //   });
 // };

//搜索页
const search = resolve => {
  require.ensure(['../page/search/search'], () => {
    resolve(require('../page/search/search'));
  });
};

const houseDetail = resolve => {
  require.ensure(['../page/houseDetail/houseDetail'], () => {
    resolve(require('../page/houseDetail/houseDetail'));
  });
};

// const houseRentDetail = resolve => {
//   require.ensure(['../page/houseDetail/houseRentDetail'], () => {
//     resolve(require('../page/houseDetail/houseRentDetail'));
//   });
// };

const houseBuyDetail = resolve => {
  require.ensure(['../page/houseDetail/houseBuyDetail'], () => {
    resolve(require('../page/houseDetail/houseBuyDetail'));
  });
};
//我的关注
const myCare = resolve => {
  require.ensure(['../page/myCare/myCare'], () => {
    resolve(require('../page/myCare/myCare'));
  });
};
// 房源对比结果
const comparedResult = resolve => {
  require.ensure(['../page/houseCompared/comparedResult'], () => {
    resolve(require('../page/houseCompared/comparedResult'));
  });
};

// 签约查询
const signSearch = resolve => {
  require.ensure(['../page/sign/signSearch'], () => {
    resolve(require('../page/sign/signSearch'));
  });
};

// 签约详情
const signDetail = resolve => {
  require.ensure(['../page/sign/signDetail'], () => {
    resolve(require('../page/sign/signDetail'));
  });
};


const routes = [
    {
      path: '/',
      name:'home',//首页
      component: home,
    },
    {
      path: '/login/:redirect',
      name: 'login',//登录页
      component: login,
      // meta: { keepAlive: false, requiresAuth: false },
    },
    {
      path: '/checkOut',
      name:'checkOut',//登出
      component: checkOut,
    },
  {
    path: '/houseList',
    name:'houseList',//房源列表页
    component: houseList,
  },
   // {
   //   path: '/houseDetail',
   //   name:'houseDetail',
   //   component: houseDetail,
   // },
    {
      path: '/search',
      name:'search',//房源列表页
      component: search,
    },
    {
      path: '/houseDetail',
      name: 'houseDetail',
      component: houseDetail,
    },
    // {
    //   path: '/houseRentDetail',
    //   name: 'houseRentDetail',
    //   component: houseRentDetail,
    // },
    {
      path: '/houseBuyDetail',
      name: 'houseBuyDetail',
      component: houseBuyDetail,
    },

    {//房源对比结果
      path: '/comparedResult',
      name: 'comparedResult',
      component: comparedResult,
    },

    {//签约查询
      path: '/signSearch',
      name: 'signSearch',
      component: signSearch,
    },

    {//签约详情
      path: '/signDetail',
      name: 'signDetail',
      component: signDetail,
    },

    {
      path: '/myCare',//我的关注
      name: 'myCare',
      component: myCare,
    }

];


const router = new Router({
  // mode: 'history',
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
  } else {
    next();//如果无需token,那么随它去吧
  }
});

export default router
