import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userInfo: localStorage.getItem('userInfo')?JSON.parse(localStorage.getItem('userInfo')):{},//登录用户信息
    activeHouseId:'',//当前活动的房源详情页
  },
  getters: {
    getUserInfo(state) {
      // let userInfo = sessionStorage.getItem('userInfo')
      let userInfo = localStorage.getItem('userInfo')
       if (userInfo){
         state.userInfo = JSON.parse(userInfo);
       }
        return state.userInfo;
    }
  },
  mutations: {
    setUserInfo(state, userInfo) {
      localStorage.setItem('userInfo',JSON.stringify(userInfo))
      state.userInfo = userInfo;
    },
    setActiveHouseId(state,houseId){
      state.activeHouseId = houseId;
    }
  },
  actions: {
    setUserInfo({ commit }, user) {
      commit('setUserInfo', user);
    }
  }
})
