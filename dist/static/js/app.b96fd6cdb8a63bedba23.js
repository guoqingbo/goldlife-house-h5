webpackJsonp([8],{"6U31":function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});t("tvR6");var o=t("qBF2"),i=t.n(o),a=(t("d8/S"),t("clQT")),u=t.n(a),r=t("7+uW"),s={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[n("keep-alive",[this.$route.meta.keepAlive?n("router-view"):this._e()],1)],1),this._v(" "),n("transition",{attrs:{name:"router-fade",mode:"out-in"}},[this.$route.meta.keepAlive?this._e():n("router-view")],1)],1)},staticRenderFns:[]};var c=t("VU/8")({name:"App"},s,!1,function(e){t("6U31")},null,null).exports,l=t("/ocq"),f=t("NYxO");r.default.use(f.a);var h=new f.a.Store({state:{userInfo:{}},getters:{getUserInfo:function(e){return e.userInfo}},mutations:{setUserInfo:function(e,n){e.userInfo=n}},actions:{setUserInfo:function(e,n){(0,e.commit)("setUserInfo",n)}}});r.default.use(l.a);var d=[{path:"/",name:"home",component:function(e){Promise.all([t.e(0),t.e(2)]).then(function(){e(t("X6d5"))}.bind(null,t)).catch(t.oe)}},{path:"/login",name:"login",component:function(e){Promise.all([t.e(0),t.e(4)]).then(function(){e(t("QrVH"))}.bind(null,t)).catch(t.oe)},meta:{keepAlive:!1,requiresAuth:!1}},{path:"/houseList",name:"houseList",component:function(e){Promise.all([t.e(0),t.e(6)]).then(function(){e(t("v1qF"))}.bind(null,t)).catch(t.oe)}},{path:"/search",name:"search",component:function(e){t.e(3).then(function(){e(t("vCr1"))}.bind(null,t)).catch(t.oe)}},{path:"/houseDetail",name:"houseDetail",component:function(e){Promise.all([t.e(0),t.e(5)]).then(function(){e(t("usuk"))}.bind(null,t)).catch(t.oe)}},{path:"/houseBuyDetail",name:"houseBuyDetail",component:function(e){Promise.all([t.e(0),t.e(1)]).then(function(){e(t("AKZh"))}.bind(null,t)).catch(t.oe)}}],m=new l.a({routes:d});m.beforeEach(function(e,n,t){var o=h.state.token;e.meta.requiresAuth?o?t():t({path:"/login",query:{redirect:e.fullPath}}):t()});var p=m;t("UAgs"),t("muQq");r.default.use(u.a),r.default.use(i.a),r.default.config.productionTip=!0,new r.default({el:"#app",router:p,store:h,components:{App:c},template:"<App/>"})},UAgs:function(e,n){var t,o,i,a,u;t=document,o=window,i=t.documentElement,a="orientationchange"in window?"orientationchange":"resize",u=function(){var e=i.clientWidth;e&&(i.style.fontSize=e/750*20+"px")},t.addEventListener&&(o.addEventListener(a,u,!1),t.addEventListener("DOMContentLoaded",u,!1))},"d8/S":function(e,n){},jkKj:function(e,n){e.exports=BMap},muQq:function(e,n){},tvR6:function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.b96fd6cdb8a63bedba23.js.map