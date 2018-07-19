import axios from 'axios'
import qs from 'qs'
// import store from '../store'
// import router from '../router'
import envConfig from  '../config/env'

//设置全局axios默认值
axios.defaults.timeout = 5000; //5000的超时验证
axios.defaults.baseURL = envConfig.baseUrl;
axios.defaults.withCredentials = true;
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
      'user/sendVerCode',
      qs.stringify({
        phone:telphone,
      })
    )
  },

  //用户登录
  userLogin(data){
    return axios.post(
      'user/login',
      qs.stringify({
        password:data.password,
        type:data.type, // 1:密码登录 2：验证码登录
        loginName:data.loginName,
        redirectType:data.redirectType,
        openId:data.openId,
        code:data.code,
      })
    )
  },

// 用户登出
  logout(){
    return axios.post(
      'user/logout',
      qs.stringify({})//无需传参数
    )
  },


  // 房源对比
  houseCompared(data){
    // return axios.get('house/houseCompare?data='+data)
    return axios.post(
      'house/houseCompare',
      qs.stringify({
        data:JSON.stringify(data)
      })
    )
  },

  //签约查询
  signSearch(data){
    return axios.get('sign/search',{
      params:{
        phoneNum:data
      }
    })
  },

  //签约详情
  signDetail(data){
    return axios.get('sign/detail',{
      params:{
        signId:data.signId,
        userType:data.userType
      }
    })
  },

  // //区域板块
  // getDistrict(data){
  //   return axios.post(
  //     'house/getRegion',
  //     qs.stringify({
  //       city:data.city,
  //     })
  //   )
  // },
  //区域板块
  getDistrict(data){
    return axios.post(
      'house/getRegion',
      qs.stringify({
        city:data.city,
      })
    )
  },

  //筛选条件
  getFilterList(data){
    return axios.post(
      'house/getFilterList',
      qs.stringify({
        type:data.type,//1:二手房 2：租房
      })
    )
  },
  //二手房列表
  getSellHouseList(data){
    return axios.get('house/getHouseList',{
      params:{
        cityId:data.cityId,
        communityId:data.communityId,
        areaIds:data.areaIds,
        priceMin:data.priceMin,
        priceMax:data.priceMax,
        filterIds:data.filterIds.join(','),
        pageSize:data.pageSize,
        pageIndex:data.pageIndex,
        orderBy:data.orderBy,
        orderColumn:data.orderColumn,
      }
    })
  },

  //租房列表
  getRentHouseList(data){
    return axios.get('house/getRentHouseList',{
      params:{
        cityId:data.cityId,
        communityId:data.communityId,
        areaIds:data.areaIds,
        priceMin:data.priceMin,
        priceMax:data.priceMax,
        filterIds:data.filterIds.join(','),
        pageSize:data.pageSize,
        pageIndex:data.pageIndex,
        orderBy:data.orderBy,
        orderColumn:data.orderColumn,
      }
    })
  },

  //房源详情
  getHouseDetail(data){
    return axios.get('house/getHouseDetailStr',{
      params:{
        cityId:data.cityId,
        houseId:data.houseId,
        userType:data.userType,
        houseType:data.houseType,
      }
    })
  },

  //小区详情
  getCommunityDetail(data){
    return axios.get('house/getCommunityDetailStr',{
      params:{
        blockId:data.blockId,
        city:data.city,
        userType:data.userType,
        houseType:data.houseType,
      }
    })
  },

  //搜索小区
  searchCommunity(data){
    return axios.post('house/searchCommunity', qs.stringify({
      keyword:data.keyword,//小区名关键字(拼音或汉字)
      city:data.city,//城市拼写(hz)
      limit:data.limit,//搜索到的小区限制，默认5条
    }))
  },

  //微信菜单
  weixinMenu(data){
    console.log(data)
    return axios.get('/user/weixin/menu',{
      params:{
        redirectType:data.redirectType,// 可能值 house  account fund finan loan invite
        openId:data.openId,
        code:data.code
      }
    })
  },

  //我的收藏--小区
  getCommunityAttention(){
    return axios.get('/house/getCommunityAttention')
  },
  //我的收藏--租房
  getRentAttention(){
    return axios.get('/house/getRentAttention')
  },
  //我的收藏--二手房
  getHouseAttention(){
    return axios.get('/house/getHouseAttention')
  },

  //对比清单--从关注房源添加
  getContrastAttentionHouse(){
    return axios.post('/house/getContrastAttentionHouse')
  },

  //关注房源
  attention(data){
    return axios.post(
      'user/attention',
      qs.stringify({
        cityId:data.cityId,
        businessNum:data.businessNum,//城市-业务id
        businessType:data.businessType,//1二手房，2租房，3小区
        sysType:data.sysType,//1
        userId:data.userId,
        attentionState:data.attentionState,//1关注，2取消
      })
    )
  },

  //用户看房预约
  houseAppointment(data){
    return axios.post(
      'house/houseAppointment',
      qs.stringify({
        cityId:data.cityId,
        houseId:data.houseId,
        phoneNum:data.phoneNum,
        verCode:data.verCode,
        time:data.time,
        desc:data.desc,
        brokerId:data.brokerId,
        userName:data.userName,
      })
    )
  },

}
