webpackJsonp([20],{eh6l:function(t,s){},gZUv:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("pxwZ"),n={name:"signDetail",data:function(){return{signDetail:{},transfer:[],userType:2,bargainStatus:{1:"办理中",2:"结案",3:"作废"},Heig:"",marginTop:"",boxH:"",current_Status:""}},created:function(){this.getSignDetail()},mounted:function(){var t=this;setTimeout(function(){t.currentStatus()},500)},methods:{getSignDetail:function(){var t=this,s={signId:this.$route.query.houseId,userType:this.userType};e.a.signDetail(s).then(function(s){s.data.success?(t.signDetail=s.data.result,t.transfer=s.data.result.transfer,t.current_Status=s.data.result.now_transfer.stage_name):t.$toast({message:s.data.errorMessage,position:"middle",duration:3e3})}).catch(function(t){console.log(t)})},currentStatus:function(){var t=document.getElementById("scroll-box").getBoundingClientRect().top,s=document.documentElement.clientHeight-t;this.Heig=s}},filters:{formatPrice:function(t){if(!t)return"0.00";var s=t.toString();if(s.indexOf(".")>=0){var a=s.split(".")[0],e=s.split(".")[1];return a.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")+"."+e}return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"container_box"},[a("h1",{ref:"title",staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(s){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[t._v("签约详情")])]),t._v(" "),a("div",{staticClass:"signBox box_fixed"},[a("div",{staticClass:"addr"},[a("h2",[a("span",[t._v("房源地址：")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.address))])]),t._v(" "),a("p",[t._v("成交价格："),a("span",{staticClass:"price"},[t._v("￥"+t._s(t._f("formatPrice")(t.signDetail.price)))])]),t._v(" "),a("p",[t._v("建筑面积："),a("span",[t._v(t._s(t.signDetail.buildarea)+"㎡")])]),t._v(" "),a("p",[t._v("签约时间："),a("span",[t._v(t._s(t._f("moment")(t.signDetail.signing_time,"YYYY/MM/DD")))])]),t._v(" "),a("div",{staticClass:"flag"},[t._v("\n\t\t\t\t\t"+t._s(t.bargainStatus[t.signDetail.bargain_status])+"\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"contact"},[a("p",[a("span",[t._v("业主姓名")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.owner))])]),t._v(" "),a("p",[a("span",[t._v("业主联系方式")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.owner_tel))])])]),t._v(" "),a("h2",{staticClass:"CS"},[t._v("当前签约状态："),a("span",[t._v(t._s(t.current_Status))])])]),t._v(" "),a("div",{staticClass:"emptyBox"}),t._v(" "),a("div",{staticClass:"signBox",attrs:{id:"status"}},[void 0!=t.signDetail.now_transfer?a("div",{staticClass:"status"},[a("div",{staticClass:"scroll-box",style:"height:"+t.Heig+"px",attrs:{id:"scroll-box"}},[a("div",{staticClass:"status_content"},t._l(t.transfer,function(s){return a("p",[s.step_id==t.signDetail.now_transfer.step_id?a("span",{staticClass:"current",attrs:{id:"current"}}):1==s.isComplete?a("span",{staticClass:"complete"}):a("span",{staticClass:"uncomplete"}),t._v(" "),a("span",[t._v(t._s(s.stage_name))])])}))])]):t._e()])])},staticRenderFns:[]};var r=a("vSla")(n,i,!1,function(t){a("eh6l")},"data-v-10c4390e",null);s.default=r.exports}});
//# sourceMappingURL=20.8a46148471f38877c79a.js.map