webpackJsonp([14],{NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("tvR6");var o=n("qBF2"),i=n.n(o),r=(n("d8/S"),n("clQT")),u=n.n(r),a=n("7+uW"),s={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var c=n("VU/8")({name:"App"},s,!1,function(e){n("ijD+")},null,null).exports,p=n("/ocq"),d=n("NYxO");a.default.use(d.a);var m=new d.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,t){e.userInfo=t}},actions:{setUserInfo:function(e,t){(0,e.commit)("setUserInfo",t)}}}),l=n("uaSg"),h=n("pxwZ");a.default.use(p.a);var f=function(e){Promise.all([n.e(0),n.e(2)]).then(function(){e(n("X6d5"))}.bind(null,n)).catch(n.oe)},y=[{path:"/",name:"home",component:f},{path:"/home",name:"home",component:f},{path:"/login/:redirect",name:"login",component:function(e){Promise.all([n.e(0),n.e(11)]).then(function(){e(n("QrVH"))}.bind(null,n)).catch(n.oe)}},{path:"/logout",name:"logout",component:function(e){Promise.all([n.e(0),n.e(6)]).then(function(){e(n("NpwA"))}.bind(null,n)).catch(n.oe)}},{path:"/search",name:"search",component:function(e){Promise.all([n.e(0),n.e(5)]).then(function(){e(n("vCr1"))}.bind(null,n)).catch(n.oe)}},{path:"/comparedResult",name:"comparedResult",component:function(e){Promise.all([n.e(0),n.e(12)]).then(function(){e(n("PZvr"))}.bind(null,n)).catch(n.oe)}},{path:"/houseCompared",name:"houseCompared",component:function(e){n.e(10).then(function(){e(n("rUtK"))}.bind(null,n)).catch(n.oe)}},{path:"/myCare",name:"myCare",component:function(e){Promise.all([n.e(0),n.e(4)]).then(function(){e(n("qwJv"))}.bind(null,n)).catch(n.oe)}},{path:"/houseRentDetail",name:"houseRentDetail",component:function(e){Promise.all([n.e(0),n.e(1)]).then(function(){e(n("4R8/"))}.bind(null,n)).catch(n.oe)}},{path:"/houseBuyDetail",name:"houseBuyDetail",component:function(e){Promise.all([n.e(0),n.e(3)]).then(function(){e(n("AKZh"))}.bind(null,n)).catch(n.oe)}},{path:"/imgIncrease",name:"imgIncrease",component:function(e){Promise.all([n.e(0),n.e(9)]).then(function(){e(n("K3Yg"))}.bind(null,n)).catch(n.oe)}},{path:"/houseAppointment",name:"houseAppointment",component:function(e){Promise.all([n.e(0),n.e(8)]).then(function(){e(n("2EoU"))}.bind(null,n)).catch(n.oe)}},{path:"/mapIncrease",name:"mapIncrease",component:function(e){Promise.all([n.e(0),n.e(7)]).then(function(){e(n("miXN"))}.bind(null,n)).catch(n.oe)}},{path:"/user/weixin/menu",name:"weixinMenu",meta:{redirect:!0}}],g=new p.a({mode:l.a.routerMode,routes:y});g.beforeEach(function(e,t,n){if(e.meta.requiresAuth)token?n():n({path:"/login",query:{redirect:e.fullPath}});else if(e.meta.redirect){var o=e.query;console.log(e.query),h.a.weixinMenu(o)}else n()});var I=g;n("UAgs"),n("muQq");a.default.use(u.a),a.default.use(i.a),a.default.config.productionTip=!0,new a.default({el:"#app",router:I,store:m,components:{App:c},template:"<App/>"})},UAgs:function(e,t){var n,o,i,r,u;n=document,o=window,i=n.documentElement,r="orientationchange"in window?"orientationchange":"resize",u=function(){var e=i.clientWidth;e&&(i.style.fontSize=e/750*20+"px")},n.addEventListener&&(o.addEventListener(r,u,!1),n.addEventListener("DOMContentLoaded",u,!1))},"d8/S":function(e,t){},"ijD+":function(e,t){},jkKj:function(e,t){e.exports=BMap},muQq:function(e,t){},pxwZ:function(e,t,n){"use strict";var o=n("mtWM"),i=n.n(o),r=n("6iV/"),u=n.n(r),a=n("uaSg");i.a.defaults.timeout=5e3,i.a.defaults.baseURL=a.a.baseUrl,i.a.defaults.withCredentials=!0,i.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",t.a={getCode:function(e){return i.a.post("user/sendVerCode",u.a.stringify({phone:e}))},userLogin:function(e){return i.a.post("user/login",u.a.stringify({password:e.password,type:e.type,loginName:e.loginName,redirectType:e.redirectType}))},logout:function(){return i.a.post("user/logout",u.a.stringify({}))},houseCompared:function(e){return i.a.get("house/houseCompare",{params:{data:e}})},getDistrict:function(e){return i.a.post("house/getRegion",u.a.stringify({city:e.city}))},getFilterList:function(e){return i.a.post("house/getFilterList",u.a.stringify({type:e.type}))},getSellHouseList:function(e){return i.a.get("house/getHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn}})},getRentHouseList:function(e){return i.a.get("house/getRentHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn}})},getHouseDetail:function(e){return i.a.get("house/getHouseDetailStr",{params:{cityId:e.cityId,houseId:e.houseId,userType:e.userType,houseType:e.houseType}})},getCommunityDetail:function(e){return i.a.get("house/getCommunityDetailStr",{params:{blockId:e.blockId,city:e.city,userType:e.userType,houseType:e.houseType}})},searchCommunity:function(e){return i.a.post("house/searchCommunity",u.a.stringify({keyword:e.keyword,city:e.city,limit:e.limit}))},weixinMenu:function(e){return i.a.get("/user/weixin/menu",{params:{redirectType:e.redirectType,openId:e.openId,code:e.code}})},getCommunityAttention:function(){return i.a.get("/house/getCommunityAttention")},getRentAttention:function(){return i.a.get("/house/getRentAttention")},getHouseAttention:function(){return i.a.get("/house/getHouseAttention")},attention:function(e){return i.a.post("user/attention",u.a.stringify({cityId:e.cityId,businessNum:e.businessNum,businessType:e.businessType,sysType:e.sysType,userId:e.userId,attentionState:e.attentionState}))},houseAppointment:function(e){return i.a.post("house/houseAppointment",u.a.stringify({cityId:e.cityId,houseId:e.houseId,phoneNum:e.phoneNum,verCode:e.verCode,time:e.time,desc:e.desc,brokerId:e.brokerId,userName:e.userName}))}}},tvR6:function(e,t){},uaSg:function(e,t,n){"use strict";var o="",i="hash",r="";o="http://101.37.27.156:7090",r="http://wxtest.cd121.com",i="history",t.a={baseUrl:o,routerMode:i,weixinRederectUrl:r}}},["NHnr"]);
//# sourceMappingURL=app.dca2717be25a86a1378d.js.map