webpackJsonp([16],{"/Uur":function(t,s){},gZUv:function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var a=e("pxwZ"),n={name:"signDetail",data:function(){return{signDetail:{},transfer:[],userType:2,bargainStatus:{1:"办理中",2:"结案",3:"作废"},Heig:""}},created:function(){this.getSignDetail()},mounted:function(){var t=this;setTimeout(function(){t.currentStatus()},500)},methods:{getSignDetail:function(){var t=this,s={signId:this.$route.query.houseId,userType:this.userType};a.a.signDetail(s).then(function(s){s.data.success?(t.signDetail=s.data.result,t.transfer=s.data.result.transfer):t.$toast({message:s.data.errorMessage,position:"middle",duration:3e3})}).catch(function(t){console.log(t)})},currentStatus:function(){var t=document.getElementById("scroll-box").getBoundingClientRect().top,s=document.documentElement.clientHeight-t;this.Heig=s}},filters:{formatPrice:function(t){if(!t)return"0.00";var s=t.toString();if(s.indexOf(".")>=0){var e=s.split(".")[0],a=s.split(".")[1];return e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")+"."+a}return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"container_box"},[e("h1",{staticClass:"nav-header"},[e("span",{staticClass:"go-back",on:{click:function(s){t.$router.go(-1)}}},[e("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),e("span",{staticClass:"header-title"},[t._v("签约详情")])]),t._v(" "),e("div",{staticClass:"signBox"},[e("div",{staticClass:"addr"},[e("h2",[e("span",[t._v("房源地址：")]),t._v(" "),e("span",[t._v(t._s(t.signDetail.address))])]),t._v(" "),e("p",[t._v("成交价格："),e("span",{staticClass:"price"},[t._v("￥"+t._s(t._f("formatPrice")(t.signDetail.price)))])]),t._v(" "),e("p",[t._v("建筑面积："),e("span",[t._v(t._s(t.signDetail.buildarea)+"㎡")])]),t._v(" "),e("p",[t._v("签约时间："),e("span",[t._v(t._s(t._f("moment")(t.signDetail.signing_time,"YYYY/MM/DD")))])]),t._v(" "),e("div",{staticClass:"flag"},[t._v("\n\t\t\t\t\t"+t._s(t.bargainStatus[t.signDetail.bargain_status])+"\n\t\t\t\t")])]),t._v(" "),e("div",{staticClass:"contact"},[e("p",[e("span",[t._v("业主姓名")]),t._v(" "),e("span",[t._v(t._s(t.signDetail.owner))])]),t._v(" "),e("p",[e("span",[t._v("业主联系方式")]),t._v(" "),e("span",[t._v(t._s(t.signDetail.owner_tel))])])]),t._v(" "),void 0!=t.signDetail.now_transfer?e("div",{staticClass:"status"},[e("h2",[t._v("当前签约状态："),e("span",[t._v(t._s(t.signDetail.now_transfer.stage_name))])]),t._v(" "),e("div",{staticClass:"scroll-box",style:"height:"+t.Heig+"px",attrs:{id:"scroll-box"}},[e("div",{staticClass:"status_content"},t._l(t.transfer,function(s){return e("p",[s.step_id==t.signDetail.now_transfer.step_id?e("span",{staticClass:"current",attrs:{id:"current"}}):1==s.isComplete?e("span",{staticClass:"complete"}):e("span",{staticClass:"uncomplete"}),t._v(" "),e("span",[t._v(t._s(s.stage_name))])])}))])]):t._e()])])},staticRenderFns:[]};var r=e("VU/8")(n,i,!1,function(t){e("/Uur")},"data-v-29e67d06",null);s.default=r.exports}});
//# sourceMappingURL=16.e096da4fd854dd2dcd25.js.map