webpackJsonp([9],{K3Yg:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e={data:function(){return{indexNum:"1",imgList:[]}},created:function(){this.imgList=this.$route.params.imgs,console.log(this.imgList)},components:{},mounted:function(){},methods:{handleChange:function(t){this.indexNum=t+1}}},n={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"imgIncrease"},[s("h1",{staticClass:"nav-header"},[s("span",{staticClass:"go-back",on:{click:function(i){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),s("span",{staticClass:"header-title"},[t._v("\n      "+t._s(this.$route.params.title)+"\n    ")])]),t._v(" "),s("div",{staticClass:"imgDiv"},[s("div",{staticClass:"swiper-container"},[s("mt-swipe",{attrs:{auto:0,"show-indicators":!1},on:{change:t.handleChange}},t._l(t.$route.params.imgs,function(t,i){return s("mt-swipe-item",{key:i},[s("img",{attrs:{src:t}})])}))],1),t._v(" "),t.imgList.length>0?s("div",{staticClass:"showNum"},[t._v(t._s(t.indexNum)+"/"+t._s(t.imgList.length))]):t._e()]),t._v(" "),s("keep-alive",[s("router-view")],1)],1)},staticRenderFns:[]};var a=s("vSla")(e,n,!1,function(t){s("tFEL")},"data-v-b7433ea2",null);i.default=a.exports},tFEL:function(t,i){}});
//# sourceMappingURL=9.5f4b7877367ecf24a801.js.map