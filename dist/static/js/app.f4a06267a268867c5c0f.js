webpackJsonp([11],{"8GaL":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("tvR6");var o=t("qBF2"),a=t.n(o),i=(t("d8/S"),t("clQT")),u=t.n(i),c=t("7+uW"),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var l=t("VU/8")({name:"App"},r,!1,function(e){t("8GaL")},null,null).exports,s=t("/ocq"),h=t("NYxO");c.default.use(h.a);var m=new h.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,n){e.userInfo=n}},actions:{setUserInfo:function(e,n){(0,e.commit)("setUserInfo",n)}}}),f=t("uaSg");c.default.use(s.a);var p=function(e){Promise.all([t.e(0),t.e(1)]).then(function(){e(t("X6d5"))}.bind(null,t)).catch(t.oe)},d=[{path:"/",name:"home",component:p},{path:"/home",name:"home",component:p},{path:"/login/:redirect",name:"login",component:function(e){Promise.all([t.e(0),t.e(7)]).then(function(){e(t("QrVH"))}.bind(null,t)).catch(t.oe)}},{path:"/logout",name:"logout",component:function(e){Promise.all([t.e(0),t.e(6)]).then(function(){e(t("NpwA"))}.bind(null,t)).catch(t.oe)}},{path:"/houseList",name:"houseList",component:function(e){Promise.all([t.e(0),t.e(9)]).then(function(){e(t("v1qF"))}.bind(null,t)).catch(t.oe)}},{path:"/search",name:"search",component:function(e){Promise.all([t.e(0),t.e(4)]).then(function(){e(t("vCr1"))}.bind(null,t)).catch(t.oe)}},{path:"/houseDetail",name:"houseDetail",component:function(e){Promise.all([t.e(0),t.e(8)]).then(function(){e(t("usuk"))}.bind(null,t)).catch(t.oe)}},{path:"/houseBuyDetail",name:"houseBuyDetail",component:function(e){Promise.all([t.e(0),t.e(2)]).then(function(){e(t("AKZh"))}.bind(null,t)).catch(t.oe)}},{path:"/comparedResult",name:"comparedResult",component:function(e){Promise.all([t.e(0),t.e(5)]).then(function(){e(t("PZvr"))}.bind(null,t)).catch(t.oe)}},{path:"/myCare",name:"myCare",component:function(e){Promise.all([t.e(0),t.e(3)]).then(function(){e(t("qwJv"))}.bind(null,t)).catch(t.oe)}},{path:"/weixin/menu/:redirectType",name:"weixinMenu",component:function(e){Promise.all([t.e(0),t.e(10)]).then(function(){e(t("PNMj"))}.bind(null,t)).catch(t.oe)}}],v=new s.a({mode:f.a.routerMode,routes:d});v.beforeEach(function(e,n,t){var o=m.state.token;e.meta.requiresAuth?o?t():t({path:"/login",query:{redirect:e.fullPath}}):t()});var g=v;t("UAgs"),t("muQq");c.default.use(u.a),c.default.use(a.a),c.default.config.productionTip=!0,new c.default({el:"#app",router:g,store:m,components:{App:l},template:"<App/>"})},UAgs:function(e,n){var t,o,a,i,u;t=document,o=window,a=t.documentElement,i="orientationchange"in window?"orientationchange":"resize",u=function(){var e=a.clientWidth;e&&(a.style.fontSize=e/750*20+"px")},t.addEventListener&&(o.addEventListener(i,u,!1),t.addEventListener("DOMContentLoaded",u,!1))},"d8/S":function(e,n){},jkKj:function(e,n){e.exports=BMap},muQq:function(e,n){},tvR6:function(e,n){},uaSg:function(e,n,t){"use strict";var o="",a="",i="hash";o="http://101.37.27.156:7090",a="",i="history",n.a={baseUrl:o,imgBaseUrl:a,routerMode:i}}},["NHnr"]);
//# sourceMappingURL=app.f4a06267a268867c5c0f.js.map