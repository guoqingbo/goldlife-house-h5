webpackJsonp([2],{"+BTi":function(e,t){},"5ObC":function(e,t){},GXEp:function(e,t){},IcnI:function(e,t,n){"use strict";var o=n("woOf"),r=n.n(o),i=n("mvHQ"),u=n.n(i),s=n("7+uW"),a=n("NYxO");s.default.use(a.a),t.a=new a.a.Store({state:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},activeInfo:{houseId:"",houseType:"",blockId:""}},getters:{getUserInfo:function(e){var t=localStorage.getItem("userInfo");return t&&(e.userInfo=JSON.parse(t)),e.userInfo}},mutations:{setUserInfo:function(e,t){localStorage.setItem("userInfo",u()(t)),e.userInfo=t},setActiveInfo:function(e,t){e.activeInfo=r()(e.activeInfo,t)}},actions:{setUserInfo:function(e,t){(0,e.commit)("setUserInfo",t)}}})},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("GXEp"),n("+BTi");var o=n("mtrD"),r=n.n(o),i=(n("5ObC"),n("4ZDJ")),u=n.n(i),s=(n("jZDA"),n("91Nw")),a=n.n(s),c=(n("d7TW"),n("ajQY")),d=n.n(c),p=(n("d8/S"),n("clQT")),f=n.n(p),l=n("7+uW"),g={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var m=n("VU/8")({name:"App"},g,!1,function(e){n("ijD+")},null,null).exports,I=n("YaEn"),y=(n("UAgs"),n("IcnI"));n("tvR6"),n("muQq");l.default.use(n("8AgW")),l.default.use(f.a),l.default.use(d.a),l.default.use(a.a),l.default.use(u.a),l.default.use(r.a),l.default.config.productionTip=!0,new l.default({el:"#app",router:I.a,store:y.a,components:{App:m},template:"<App/>"})},OgVB:function(e,t){},UAgs:function(e,t){var n,o,r,i,u;n=document,o=window,r=n.documentElement,i="orientationchange"in window?"orientationchange":"resize",u=function(){var e=r.clientWidth;e&&(r.style.fontSize=e/750*20+"px")},n.addEventListener&&(o.addEventListener(i,u,!1),n.addEventListener("DOMContentLoaded",u,!1))},YaEn:function(e,t,n){"use strict";var o=n("7+uW"),r=n("/ocq"),i=n("IcnI"),u=n("uaSg"),s=n("pxwZ");o.default.use(r.a);var a=[{path:"/",name:"home",component:function(e){n.e(0).then(function(){e(n("X6d5"))}.bind(null,n)).catch(n.oe)}}],c=new r.a({mode:u.a.routerMode,routes:a});c.beforeEach(function(e,t,n){var o=i.a.state.token;if(e.meta.requiresAuth)o?n():n({path:"/login",query:{redirect:e.fullPath}});else if(e.meta.redirect){var r=e.query;s.a.weixinMenu(r)}else n()}),t.a=c},d7TW:function(e,t){},"d8/S":function(e,t){},"ijD+":function(e,t){},jZDA:function(e,t){},muQq:function(e,t){},pxwZ:function(e,t,n){"use strict";var o=n("mvHQ"),r=n.n(o),i=n("//Fk"),u=n.n(i),s=n("OgVB"),a=(n.n(s),n("/Lyv")),c=n.n(a),d=n("mtWM"),p=n.n(d),f=n("mw3O"),l=n.n(f),g=n("YaEn"),m=n("uaSg");p.a.defaults.timeout=5e3,p.a.defaults.baseURL=m.a.baseUrl,p.a.defaults.withCredentials=!0,p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",p.a.interceptors.response.use(function(e){if(e){var t=e.data;switch(t.errorCode){case 3001:return void c()({title:"",message:"请登录查看",showCancelButton:!0,confirmButtonText:"登录"}).then(function(e){"confirm"==e&&g.a.replace({path:"login",query:{redirect:g.a.currentRoute.fullPath,openId:t.result.openId,code:t.result.code}})})}}return e},function(e){return console.log(e.response),u.a.resolve(e.response)}),t.a={getCode:function(e){return p.a.post("user/sendVerCode",l.a.stringify({phone:e}))},userLogin:function(e){return p.a.post("user/login",l.a.stringify({password:e.password,type:e.type,loginName:e.loginName,redirectType:e.redirectType,openId:e.openId,code:e.code}))},logout:function(e){return p.a.post("user/logout?openId="+e.openId+"&code="+e.code)},houseCompared:function(e){return p.a.post("house/houseCompare",l.a.stringify({data:r()(e)}))},signSearch:function(e){return p.a.get("sign/search",{params:{phoneNum:e}})},signDetail:function(e){return p.a.get("sign/detail",{params:{signId:e.signId,userType:e.userType}})},lookHouseIndex:function(){return p.a.get("house/getHouseAppointmentList",{})},lookHouseHistory:function(e){return p.a.get("house/lookHouseHistory",{})},lookHouseLabel:function(){return p.a.get("house/getLabelNotes",{})},saveHouseLog:function(e){return p.a.post("house/saveHouseLog",l.a.stringify({orderDetailId:e.orderDetailId,lable:e.lable,text:e.text}))},getDistrict:function(e){return p.a.post("house/getRegion",l.a.stringify({city:e.city}))},getFilterList:function(e){return p.a.post("house/getFilterList",l.a.stringify({type:e.type}))},getSellHouseList:function(e){return p.a.get("house/getHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn,openId:e.openId,code:e.code}})},getRentHouseList:function(e){return p.a.get("house/getRentHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn}})},getHouseDetail:function(e){return p.a.get("/house/getHouseDetailStr",{params:{cityId:e.cityId,houseId:e.houseId,userType:e.userType,houseType:e.houseType}})},getCommunityDetail:function(e){return p.a.get("house/getCommunityDetailStr",{params:{blockId:e.blockId,city:e.city,userType:e.userType,houseType:e.houseType}})},searchCommunity:function(e){return p.a.post("house/searchCommunity",l.a.stringify({keyword:e.keyword,city:e.city,limit:e.limit}))},weixinMenu:function(e){return console.log(e),p.a.get("/user/weixin/menu",{params:{redirectType:e.redirectType,openId:e.openId,code:e.code}})},getCommunityAttention:function(){return p.a.get("/house/getCommunityAttention")},getRentAttention:function(){return p.a.get("/house/getRentAttention")},getHouseAttention:function(){return p.a.get("/house/getHouseAttention")},getContrastAttentionHouse:function(){return p.a.post("/house/getContrastAttentionHouse")},attention:function(e){return p.a.post("/user/attention",l.a.stringify({cityId:e.cityId,businessNum:e.businessNum,businessType:e.businessType,sysType:e.sysType,attentionState:e.attentionState}))},houseAppointment:function(e){return p.a.post("/house/houseAppointment",l.a.stringify({cityId:e.cityId,houseId:e.houseId,phoneNum:e.phoneNum,verCode:e.verCode,time:e.time,desc:e.desc,brokerId:e.brokerId,userName:e.userName}))},clearInvalidHouse:function(e){return p.a.post("/house/clearInvalidHouse",l.a.stringify({data:r()(e)}))},isLogin:function(){return p.a.post("/user/isLogin",l.a.stringify({}))}}},tvR6:function(e,t){},uaSg:function(e,t,n){"use strict";var o="",r="hash",i="";o="http://101.37.27.156:7090",i="http://wxtest.cd121.com",r="history",t.a={baseUrl:o,routerMode:r,weixinRederectUrl:i}}},["NHnr"]);
//# sourceMappingURL=app.23b60529ef690949423f.js.map