import axios from 'axios'
import qs from 'qs'
import { MessageBox } from 'mint-ui';
// import store from '../store'
// import router from '../router'
import envConfig from  '../../config/broker/env'

//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
axios.defaults.baseURL = envConfig.baseUrl;
// axios.defaults.withCredentials = true;
axios.defaults.headers.post['Content-Type'] = "application/x-www-form-urlencoded;charset=utf-8";
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

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
// respone拦截器
// axios.interceptors.response.use(
//   response => {
//     if(response){
//       let res = response.data
//       switch(res.errorCode){
//         case 3001://跳出登录弹框
//           MessageBox({
//             title: '',
//             message: '请登录查看',
//             showCancelButton: true,
//             confirmButtonText:"登录"
//           }).then(action => {
//             if(action == "confirm"){
//               router.replace({ //跳转到登录页面
//                 path: 'login',
//                 query: {
//                   redirect: router.currentRoute.fullPath, //将跳转的路由path作为参数，登录成功后跳转到该路由
//                   openId:res.result.openId,
//                   code:res.result.code
//                 }
//               });
//             }
//           })
//           return;
//       }
//     }
//     return response;
//   },
//   error => {
//     return Promise.reject(error.response);
//   }
// );

export default {
  // 经纪人模块
  //新房详情
  newHouseSharePage(data){
    return axios.get('house/newHouseDetail',{
      params:{
        buildingId:data
      }
    })
  },
}
