webpackJsonp([29],{"+BTi":function(e,n){},"5ObC":function(e,n){},GXEp:function(e,n){},IcnI:function(e,n,t){"use strict";var o=t("woOf"),i=t.n(o),a=t("mvHQ"),u=t.n(a),r=t("7+uW"),s=t("NYxO");r.default.use(s.a),n.a=new s.a.Store({state:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},activeInfo:{houseId:"",houseType:"",blockId:""}},getters:{getUserInfo:function(e){var n=localStorage.getItem("userInfo");return n&&(e.userInfo=JSON.parse(n)),e.userInfo}},mutations:{setUserInfo:function(e,n){localStorage.setItem("userInfo",u()(n)),e.userInfo=n},setActiveInfo:function(e,n){e.activeInfo=i()(e.activeInfo,n)}},actions:{setUserInfo:function(e,n){(0,e.commit)("setUserInfo",n)}}})},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("GXEp"),t("+BTi");var o=t("mtrD"),i=t.n(o),a=(t("5ObC"),t("4ZDJ")),u=t.n(a),r=(t("jZDA"),t("91Nw")),s=t.n(r),c=(t("d7TW"),t("ajQY")),l=t.n(c),p=(t("d8/S"),t("clQT")),d=t.n(p),m=t("7+uW"),f={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var h=t("VU/8")({name:"App"},f,!1,function(e){t("ijD+")},null,null).exports,g=t("YaEn"),I=(t("UAgs"),t("MU8w"),t("IcnI"));t("tvR6"),t("muQq");m.default.use(t("8AgW")),m.default.use(d.a),m.default.use(l.a),m.default.use(s.a),m.default.use(u.a),m.default.use(i.a),m.default.config.productionTip=!0,new m.default({el:"#app",router:g.a,store:I.a,components:{App:h},template:"<App/>"})},OgVB:function(e,n){},UAgs:function(e,n){var t,o,i,a,u;t=document,o=window,i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",u=function(){var e=i.clientWidth;e&&(i.style.fontSize=e/750*20+"px")},t.addEventListener&&(o.addEventListener(a,u,!1),t.addEventListener("DOMContentLoaded",u,!1))},YaEn:function(e,n,t){"use strict";var o=t("7+uW"),i=t("/ocq"),a=t("IcnI"),u=t("uaSg"),r=t("pxwZ");o.default.use(i.a);var s=function(e){Promise.all([t.e(0),t.e(5)]).then(function(){e(t("X6d5"))}.bind(null,t)).catch(t.oe)},c=[{path:"/",name:"home",component:s},{path:"/home",name:"home",component:s},{path:"/login",name:"login",component:function(e){t.e(13).then(function(){e(t("QrVH"))}.bind(null,t)).catch(t.oe)}},{path:"/logout",name:"logout",component:function(e){Promise.all([t.e(0),t.e(8)]).then(function(){e(t("NpwA"))}.bind(null,t)).catch(t.oe)}},{path:"/search",name:"search",component:function(e){t.e(16).then(function(){e(t("vCr1"))}.bind(null,t)).catch(t.oe)}},{path:"/comparedResult",name:"comparedResult",component:function(e){Promise.all([t.e(0),t.e(10)]).then(function(){e(t("PZvr"))}.bind(null,t)).catch(t.oe)}},{path:"/houseCompared",name:"houseCompared",component:function(e){Promise.all([t.e(0),t.e(2)]).then(function(){e(t("rUtK"))}.bind(null,t)).catch(t.oe)}},{path:"/signSearch",name:"signSearch",component:function(e){Promise.all([t.e(0),t.e(11)]).then(function(){e(t("FdGr"))}.bind(null,t)).catch(t.oe)}},{path:"/signDetail",name:"signDetail",component:function(e){Promise.all([t.e(0),t.e(17)]).then(function(){e(t("gZUv"))}.bind(null,t)).catch(t.oe)}},{path:"/myCare",name:"myCare",component:function(e){Promise.all([t.e(0),t.e(21)]).then(function(){e(t("qwJv"))}.bind(null,t)).catch(t.oe)}},{path:"/careHouseList",name:"careHouseList",component:function(e){Promise.all([t.e(0),t.e(23)]).then(function(){e(t("W3fA"))}.bind(null,t)).catch(t.oe)}},{path:"/houseRentDetail",name:"houseRentDetail",component:function(e){Promise.all([t.e(0),t.e(3)]).then(function(){e(t("4R8/"))}.bind(null,t)).catch(t.oe)}},{path:"/houseBuyDetail",name:"houseBuyDetail",component:function(e){Promise.all([t.e(0),t.e(1)]).then(function(){e(t("AKZh"))}.bind(null,t)).catch(t.oe)}},{path:"/imgIncrease",name:"imgIncrease",component:function(e){Promise.all([t.e(0),t.e(19)]).then(function(){e(t("K3Yg"))}.bind(null,t)).catch(t.oe)}},{path:"/houseAppointment",name:"houseAppointment",component:function(e){Promise.all([t.e(0),t.e(15)]).then(function(){e(t("2EoU"))}.bind(null,t)).catch(t.oe)}},{path:"/mapIncrease",name:"mapIncrease",component:function(e){Promise.all([t.e(0),t.e(26)]).then(function(){e(t("miXN"))}.bind(null,t)).catch(t.oe)}},{path:"/user/weixin/menu",name:"weixinMenu",meta:{redirect:!0}},{path:"/villageDetail",name:"villageDetail",component:function(e){Promise.all([t.e(0),t.e(4)]).then(function(){e(t("YTJ3"))}.bind(null,t)).catch(t.oe)}},{path:"/villageMore",name:"villageMore",component:function(e){Promise.all([t.e(0),t.e(20)]).then(function(){e(t("Mxmr"))}.bind(null,t)).catch(t.oe)}},{path:"/lookHouseIndex",name:"lookHouseIndex",component:function(e){Promise.all([t.e(0),t.e(24)]).then(function(){e(t("1rCw"))}.bind(null,t)).catch(t.oe)}},{path:"/lookHouseHistory",name:"lookHouseHistory",component:function(e){Promise.all([t.e(0),t.e(14)]).then(function(){e(t("4f9o"))}.bind(null,t)).catch(t.oe)}},{path:"/addLookHouseLog",name:"addLookHouseLog",component:function(e){Promise.all([t.e(0),t.e(12)]).then(function(){e(t("F/GY"))}.bind(null,t)).catch(t.oe)}},{path:"/lookHouseReservation",name:"lookHouseReservation",component:function(e){Promise.all([t.e(0),t.e(22)]).then(function(){e(t("oble"))}.bind(null,t)).catch(t.oe)}},{path:"/newHouseSharePage",name:"newHouseSharePage",component:function(e){Promise.all([t.e(0),t.e(7)]).then(function(){e(t("HTDK"))}.bind(null,t)).catch(t.oe)}},{path:"/newHouseAllDetail",name:"newHouseAllDetail",component:function(e){Promise.all([t.e(0),t.e(9)]).then(function(){e(t("g7Zl"))}.bind(null,t)).catch(t.oe)}},{path:"/recommend",name:"recommend",component:function(e){Promise.all([t.e(0),t.e(6)]).then(function(){e(t("JuAy"))}.bind(null,t)).catch(t.oe)}},{path:"/recommendRegist",name:"recommendRegist",component:function(e){Promise.all([t.e(0),t.e(27)]).then(function(){e(t("BC2h"))}.bind(null,t)).catch(t.oe)}},{path:"/registSuccess",name:"registSuccess",component:function(e){Promise.all([t.e(0),t.e(25)]).then(function(){e(t("doIb"))}.bind(null,t)).catch(t.oe)}},{path:"/userProtocol",name:"userProtocol",component:function(e){Promise.all([t.e(0),t.e(18)]).then(function(){e(t("p/cw"))}.bind(null,t)).catch(t.oe)}}],l=new i.a({mode:u.a.routerMode,routes:c});l.beforeEach(function(e,n,t){var o=a.a.state.token;if(e.meta.requiresAuth)o?t():t({path:"/login",query:{redirect:e.fullPath}});else if(e.meta.redirect){var i=e.query;r.a.weixinMenu(i)}else t()}),n.a=l},d7TW:function(e,n){},"d8/S":function(e,n){},"ijD+":function(e,n){},jZDA:function(e,n){},jkKj:function(e,n){e.exports=BMap},muQq:function(e,n){},pxwZ:function(e,n,t){"use strict";var o=t("mvHQ"),i=t.n(o),a=t("//Fk"),u=t.n(a),r=t("OgVB"),s=(t.n(r),t("/Lyv")),c=t.n(s),l=t("mtWM"),p=t.n(l),d=t("mw3O"),m=t.n(d),f=t("YaEn"),h=t("uaSg");p.a.defaults.timeout=5e3,p.a.defaults.baseURL=h.a.baseUrl,p.a.defaults.withCredentials=!0,p.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",p.a.interceptors.response.use(function(e){if(e){var n=e.data;switch(n.errorCode){case 3001:return void c()({title:"",message:"请登录查看",showCancelButton:!0,confirmButtonText:"登录"}).then(function(e){"confirm"==e&&f.a.replace({path:"login",query:{redirect:f.a.currentRoute.fullPath,openId:n.result.openId,code:n.result.code}})})}}return e},function(e){return console.log(e.response),u.a.resolve(e.response)}),n.a={getCode:function(e){return p.a.post("user/sendVerCode",m.a.stringify({phone:e}))},userLogin:function(e){return p.a.post("user/login",m.a.stringify({password:e.password,type:e.type,loginName:e.loginName,redirectType:e.redirectType,openId:e.openId,code:e.code}))},logout:function(e){return p.a.post("user/logout?openId="+e.openId+"&code="+e.code)},houseCompared:function(e){return p.a.post("house/houseCompare",m.a.stringify({data:i()(e)}))},signSearch:function(e){return p.a.get("sign/search",{params:{phoneNum:e}})},signDetail:function(e){return p.a.get("sign/detail",{params:{signId:e.signId,userType:e.userType}})},lookHouseIndex:function(){return p.a.get("house/getHouseAppointmentList",{})},lookHouseHistory:function(e){return p.a.get("house/lookHouseHistory",{})},lookHouseLabel:function(){return p.a.get("house/getLabelNotes",{})},saveHouseLog:function(e){return p.a.post("house/saveHouseLog",m.a.stringify({orderDetailId:e.orderDetailId,lable:e.lable,text:e.text}))},getDistrict:function(e){return p.a.post("house/getRegion",m.a.stringify({city:e.city}))},getFilterList:function(e){return p.a.post("house/getFilterList",m.a.stringify({type:e.type}))},getSellHouseList:function(e){return p.a.get("house/getHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn,openId:e.openId,code:e.code}})},getRentHouseList:function(e){return p.a.get("house/getRentHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn}})},getHouseDetail:function(e){return p.a.get("/house/getHouseDetailStr",{params:{cityId:e.cityId,houseId:e.houseId,userType:e.userType,houseType:e.houseType}})},getCommunityDetail:function(e){return p.a.get("house/getCommunityDetailStr",{params:{blockId:e.blockId,city:e.city,userType:e.userType,houseType:e.houseType}})},searchCommunity:function(e){return p.a.post("house/searchCommunity",m.a.stringify({keyword:e.keyword,city:e.city,limit:e.limit}))},weixinMenu:function(e){return console.log(e),p.a.get("/user/weixin/menu",{params:{redirectType:e.redirectType,openId:e.openId,code:e.code}})},getCommunityAttention:function(){return p.a.get("/house/getCommunityAttention")},getRentAttention:function(){return p.a.get("/house/getRentAttention")},getHouseAttention:function(){return p.a.get("/house/getHouseAttention")},getContrastAttentionHouse:function(){return p.a.post("/house/getContrastAttentionHouse")},attention:function(e){return p.a.post("/user/attention",m.a.stringify({cityId:e.cityId,businessNum:e.businessNum,businessType:e.businessType,sysType:e.sysType,attentionState:e.attentionState}))},houseAppointment:function(e){return p.a.post("/house/houseAppointment",m.a.stringify({cityId:e.cityId,houseId:e.houseId,phoneNum:e.phoneNum,verCode:e.verCode,time:e.time,desc:e.desc,brokerId:e.brokerId,userName:e.userName}))},clearInvalidHouse:function(e){return p.a.post("/house/clearInvalidHouse",m.a.stringify({data:i()(e)}))},isLogin:function(){return p.a.post("/user/isLogin",m.a.stringify({}))}}},tvR6:function(e,n){},uaSg:function(e,n,t){"use strict";var o="",i="hash",a="";o="http://101.37.27.156:7090",a="http://wxtest.cd121.com",i="history",n.a={baseUrl:o,routerMode:i,weixinRederectUrl:a}}},["NHnr"]);
//# sourceMappingURL=app.aa905509ff5a9230da1a.js.map