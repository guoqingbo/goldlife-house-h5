import qs from 'qs'
import axios from 'axios'
// import store from '../store'
// import router from '../router'
import axiosConfig from  '../config/axios'

//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
console.log(process.env.NODE_ENV)
axios.defaults.baseURL = axiosConfig.baseUrl;
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

//创建一个axios实例
// const instance = axios.create();

// axios.interceptors.request.use = instance.interceptors.request.use;

//request拦截器
// instance.interceptors.request.use(
//   config => {
//     //每次发送请求之前检测都vuex存有token,那么都要放在请求头发送给服务器
//     if(store.state.token){
//       config.headers.Authorization = `token ${store.state.token}`;
//     }
//     return config;
//   },
//   err => {
//     return Promise.reject(err);
//   }
// );
//respone拦截器
// instance.interceptors.response.use(
//   response => {
//     return response;
//   },
//   error => { //默认除了2XX之外的都是错误的，就会走这里
//     if(error.response){
//       switch(error.response.status){
//         case 401:
//           store.dispatch('UserLogout'); //可能是token过期，清除它
//           router.replace({ //跳转到登录页面
//             path: 'login',
//             query: { redirect: router.currentRoute.fullPath } // 将跳转的路由path作为参数，登录成功后跳转到该路由
//           });
//       }
//     }
//     return Promise.reject(error.response);
//   }
// );

export default {
  //发送验证码
  getCode(telphone){
    return axios.post(
      'api/user/sendVerCode',
      qs.stringify({
        telphone:telphone,
      })
    )
  },
  //用户登录
  userLogin(data){
    return axios.post(
      'api/user/login'
      // qs.stringify({
      //   loginName:data.loginName,
      //   password:data.password,
      //   type:data.type // 1:密码登录 2：验证码登录
      // })
      ,{emulateJSON: true},{
        headers:{"Content-Type": "application/x-www-form-urlencoded;charset=utf-8",}
      }
    )
  },
  //获取用户
  getUser(){
    return instance.get('/api/user');
  },

}
