webpackJsonp([23],{"+BTi":function(e,t){},"4QPT":function(e,t){},"5ObC":function(e,t){},GXEp:function(e,t){},NHnr:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});n("GXEp"),n("+BTi");var o=n("mtrD"),r=n.n(o),u=(n("5ObC"),n("4ZDJ")),i=n.n(u),a=(n("jZDA"),n("91Nw")),s=n.n(a),c=(n("d7TW"),n("ajQY")),l=n.n(c),d=(n("d8/S"),n("clQT")),p=n.n(d),m=n("7+uW"),f={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{attrs:{id:"app"}},[t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[t("keep-alive",[this.$route.meta.keepAlive?t("router-view"):this._e()],1)],1),this._v(" "),t("transition",{attrs:{name:"router-fade",mode:"out-in"}},[this.$route.meta.keepAlive?this._e():t("router-view")],1)],1)},staticRenderFns:[]};var h=n("VU/8")({name:"App"},f,!1,function(e){n("4QPT")},null,null).exports,g=n("YaEn"),y=(n("UAgs"),n("woOf")),I=n.n(y),v=n("mvHQ"),b=n.n(v),H=n("NYxO");m.default.use(H.a);var w=new H.a.Store({state:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):{},activeInfo:{houseId:"",houseType:"",blockId:""}},getters:{getUserInfo:function(e){var t=localStorage.getItem("userInfo");return t&&(e.userInfo=JSON.parse(t)),e.userInfo}},mutations:{setUserInfo:function(e,t){localStorage.setItem("userInfo",b()(t)),e.userInfo=t},setActiveInfo:function(e,t){e.activeInfo=I()(e.activeInfo,t)}},actions:{setUserInfo:function(e,t){(0,e.commit)("setUserInfo",t)}}});n("tvR6"),n("muQq");m.default.use(n("8AgW")),m.default.use(p.a),m.default.use(l.a),m.default.use(s.a),m.default.use(i.a),m.default.use(r.a),m.default.config.productionTip=!0,new m.default({el:"#app",router:g.a,store:w,components:{App:h},template:"<App/>"})},OgVB:function(e,t){},UAgs:function(e,t){var n,o,r,u,i;n=document,o=window,r=n.documentElement,u="orientationchange"in window?"orientationchange":"resize",i=function(){var e=r.clientWidth;e&&(r.style.fontSize=e/750*20+"px")},n.addEventListener&&(o.addEventListener(u,i,!1),n.addEventListener("DOMContentLoaded",i,!1))},YaEn:function(e,t,n){"use strict";var o=n("OgVB"),r=(n.n(o),n("/Lyv")),u=n.n(r),i=n("7+uW"),a=n("/ocq"),s=n("uaSg"),c=n("pxwZ");i.default.use(a.a);var l=[{path:"/",name:"home",meta:{keepAlive:!0},component:function(e){return Promise.all([n.e(0),n.e(5)]).then(function(){return e(n("X6d5"))}.bind(null,n)).catch(n.oe)}},{path:"/login",name:"login",meta:{title:"金品生活"},component:function(e){return n.e(18).then(function(){return e(n("QrVH"))}.bind(null,n)).catch(n.oe)}},{path:"/logout",name:"logout",meta:{title:"金品生活"},component:function(e){return n.e(6).then(function(){return e(n("NpwA"))}.bind(null,n)).catch(n.oe)}},{path:"/search",name:"search",component:function(e){return n.e(17).then(function(){return e(n("vCr1"))}.bind(null,n)).catch(n.oe)}},{path:"/comparedResult",name:"comparedResult",component:function(e){return n.e(19).then(function(){return e(n("PZvr"))}.bind(null,n)).catch(n.oe)}},{path:"/houseCompared",name:"houseCompared",component:function(e){return Promise.all([n.e(2),n.e(0)]).then(function(){return e(n("rUtK"))}.bind(null,n)).catch(n.oe)}},{path:"/signSearch",name:"signSearch",meta:{checkLogin:!0},component:function(e){return n.e(14).then(function(){return e(n("FdGr"))}.bind(null,n)).catch(n.oe)}},{path:"/signDetail",name:"signDetail",component:function(e){return n.e(7).then(function(){return e(n("gZUv"))}.bind(null,n)).catch(n.oe)}},{path:"/myCare",name:"myCare",meta:{checkLogin:!0},component:function(e){return Promise.all([n.e(0),n.e(8)]).then(function(){return e(n("qwJv"))}.bind(null,n)).catch(n.oe)}},{path:"/careHouseList",name:"careHouseList",component:function(e){return Promise.all([n.e(0),n.e(16)]).then(function(){return e(n("W3fA"))}.bind(null,n)).catch(n.oe)}},{path:"/houseBuyDetail",name:"houseBuyDetail",component:function(e){return Promise.all([n.e(1),n.e(0)]).then(function(){return e(n("AKZh"))}.bind(null,n)).catch(n.oe)}},{path:"/houseRentDetail",name:"houseRentDetail",component:function(e){return Promise.all([n.e(3),n.e(0)]).then(function(){return e(n("4R8/"))}.bind(null,n)).catch(n.oe)}},{path:"/imgIncrease",name:"imgIncrease",component:function(e){return n.e(11).then(function(){return e(n("K3Yg"))}.bind(null,n)).catch(n.oe)}},{path:"/houseAppointment",name:"houseAppointment",component:function(e){return Promise.all([n.e(0),n.e(13)]).then(function(){return e(n("2EoU"))}.bind(null,n)).catch(n.oe)}},{path:"/mapIncrease",name:"mapIncrease",component:function(e){return n.e(12).then(function(){return e(n("miXN"))}.bind(null,n)).catch(n.oe)}},{path:"/villageDetail",name:"villageDetail",component:function(e){return Promise.all([n.e(4),n.e(0)]).then(function(){return e(n("YTJ3"))}.bind(null,n)).catch(n.oe)}},{path:"/villageMore",name:"villageMore",component:function(e){return Promise.all([n.e(0),n.e(20)]).then(function(){return e(n("Mxmr"))}.bind(null,n)).catch(n.oe)}},{path:"/lookHouseIndex",name:"lookHouseIndex",meta:{checkLogin:!0},component:function(e){return n.e(15).then(function(){return e(n("1rCw"))}.bind(null,n)).catch(n.oe)}},{path:"/lookHouseHistory",name:"lookHouseHistory",component:function(e){return n.e(9).then(function(){return e(n("4f9o"))}.bind(null,n)).catch(n.oe)}},{path:"/addLookHouseLog",name:"addLookHouseLog",component:function(e){return n.e(21).then(function(){return e(n("F/GY"))}.bind(null,n)).catch(n.oe)}},{path:"/lookHouseReservation",name:"lookHouseReservation",meta:{checkLogin:!0},component:function(e){return n.e(10).then(function(){return e(n("oble"))}.bind(null,n)).catch(n.oe)}}],d=new a.a({mode:s.a.routerMode,routes:l});d.beforeEach(function(e,t,n){e.meta.checkLogin&&c.a.isLogin().then(function(e){e.data.success?n():u()({title:"",message:"请登录查看",showCancelButton:!0,confirmButtonText:"登录"}).then(function(t){"confirm"==t&&n({path:"login",query:{redirect:d.currentRoute.fullPath,openId:e.result.openId,code:e.result.code}})})}),e.meta.title?(document.title=e.meta.title,n()):n()}),t.a=d},d7TW:function(e,t){},"d8/S":function(e,t){},jZDA:function(e,t){},jkKj:function(e,t){e.exports=BMap},muQq:function(e,t){},pxwZ:function(e,t,n){"use strict";var o=n("mvHQ"),r=n.n(o),u=n("//Fk"),i=n.n(u),a=n("OgVB"),s=(n.n(a),n("/Lyv")),c=n.n(s),l=n("mtWM"),d=n.n(l),p=n("mw3O"),m=n.n(p),f=n("YaEn"),h=n("uaSg");d.a.defaults.timeout=5e3,d.a.defaults.baseURL=h.a.baseUrl,d.a.defaults.withCredentials=!0,d.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=utf-8",d.a.interceptors.response.use(function(e){if(e){var t=e.data;switch(t.errorCode){case 3001:c()({title:"",message:"请登录查看",showCancelButton:!0,confirmButtonText:"登录"}).then(function(e){"confirm"==e&&f.a.replace({path:"login",query:{redirect:f.a.currentRoute.fullPath,openId:t.result.openId,code:t.result.code}})})}}return e},function(e){return console.log(e.response),i.a.resolve(e.response)}),t.a={getCode:function(e){return d.a.post("user/sendVerCode",m.a.stringify({phone:e}))},userLogin:function(e){return d.a.post("user/login",m.a.stringify({password:e.password,type:e.type,loginName:e.loginName,redirectType:e.redirectType,openId:e.openId,code:e.code}))},logout:function(e){return d.a.post("user/logout?openId="+e.openId+"&code="+e.code)},houseCompared:function(e){return d.a.post("house/houseCompare",m.a.stringify({data:r()(e)}))},signSearch:function(e){return d.a.get("sign/search",{params:{phoneNum:e}})},signDetail:function(e){return d.a.get("sign/detail",{params:{signId:e.signId,userType:e.userType}})},lookHouseIndex:function(){return d.a.get("house/getHouseAppointmentList",{})},lookHouseHistory:function(e){return d.a.get("house/lookHouseHistory",{})},lookHouseLabel:function(){return d.a.get("house/getLabelNotes",{})},saveHouseLog:function(e){return d.a.post("house/saveHouseLog",m.a.stringify({orderDetailId:e.orderDetailId,lable:e.lable,text:e.text}))},getDistrict:function(e){return d.a.post("house/getRegion",m.a.stringify({city:e.city}))},getFilterList:function(e){return d.a.post("house/getFilterList",m.a.stringify({type:e.type}))},getSellHouseList:function(e){return d.a.get("house/getHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn,openId:e.openId,code:e.code}})},getRentHouseList:function(e){return d.a.get("house/getRentHouseList",{params:{cityId:e.cityId,communityId:e.communityId,areaIds:e.areaIds,priceMin:e.priceMin,priceMax:e.priceMax,filterIds:e.filterIds.join(","),pageSize:e.pageSize,pageIndex:e.pageIndex,orderBy:e.orderBy,orderColumn:e.orderColumn}})},getHouseDetail:function(e){return d.a.get("/house/getHouseDetailStr",{params:{cityId:e.cityId,houseId:e.houseId,userType:e.userType,houseType:e.houseType}})},getCommunityDetail:function(e){return d.a.get("house/getCommunityDetailStr",{params:{blockId:e.blockId,city:e.city,userType:e.userType,houseType:e.houseType}})},searchCommunity:function(e){return d.a.post("house/searchCommunity",m.a.stringify({keyword:e.keyword,city:e.city,limit:e.limit}))},weixinMenu:function(e){return console.log(e),d.a.get("/user/weixin/menu",{params:{redirectType:e.redirectType,openId:e.openId,code:e.code}})},getCommunityAttention:function(){return d.a.get("/house/getCommunityAttention")},getRentAttention:function(){return d.a.get("/house/getRentAttention")},getHouseAttention:function(){return d.a.get("/house/getHouseAttention")},getContrastAttentionHouse:function(){return d.a.post("/house/getContrastAttentionHouse")},attention:function(e){return d.a.post("/user/attention",m.a.stringify({cityId:e.cityId,businessNum:e.businessNum,businessType:e.businessType,sysType:e.sysType,attentionState:e.attentionState}))},houseAppointment:function(e){return d.a.post("/house/houseAppointment",m.a.stringify({cityId:e.cityId,houseId:e.houseId,phoneNum:e.phoneNum,verCode:e.verCode,time:e.time,desc:e.desc,brokerId:e.brokerId,userName:e.userName}))},clearInvalidHouse:function(e){return d.a.post("/house/clearInvalidHouse",m.a.stringify({data:r()(e)}))},isLogin:function(){return d.a.post("/user/isLogin")}}},tvR6:function(e,t){},uaSg:function(e,t,n){"use strict";var o="",r="hash",u="";o="http://101.37.27.156:7090",u="http://wxtest.cd121.com",r="history",t.a={baseUrl:o,routerMode:r,weixinRederectUrl:u}}},["NHnr"]);
//# sourceMappingURL=app.e3b57cb82ade69a00871.js.map