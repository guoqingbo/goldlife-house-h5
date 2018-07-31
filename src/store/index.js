import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{},//登录用户信息
    activeInfo:{
      houseId:'',//当前活动房源id
      houseType:'',//当前活动房源类型
      blockId:'',//当前活动小区id
      rentHouseId:'',//租房id
      careHouseType:'',//关注房源类型
      addType:'',//对比清单类型
    },
  },
  getters: {
    // getUserInfo(state) {
    //   // let userInfo = sessionStorage.getItem('userInfo')
    //   let userInfo = localStorage.getItem('userInfo')
    //    if (userInfo){
    //      state.userInfo = JSON.parse(userInfo);
    //    }
    //     return state.userInfo;
    // }
  },
  mutations: {
    // setUserInfo(state, userInfo) {
    //   localStorage.setItem('userInfo',JSON.stringify(userInfo))
    //   state.userInfo = userInfo;
    // },
    setActiveInfo(state,activeInfo){
      state.activeInfo = Object.assign(state.activeInfo,activeInfo);
    }
  },
  actions: {
    setUserInfo({ commit }, user) {
      commit('setUserInfo', user);
    }
  }
})
