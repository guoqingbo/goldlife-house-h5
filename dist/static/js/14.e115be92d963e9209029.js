webpackJsonp([14],{MtUC:function(t,s){},gZUv:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var n=a("pxwZ"),e={name:"signDetail",data:function(){return{signDetail:{},transfer:[],signId:"",userType:2,bargainStatus:{1:"处理中",2:"结案",3:"作废"}}},mounted:function(){this.getSignDetail()},methods:{getSignDetail:function(){var t=this;this.signId=2733;var s={signId:this.signId,userType:this.userType};n.a.signDetail(s).then(function(s){s.data.success?(t.signDetail=s.data.result,t.transfer=s.data.result.transfer,console.log(t.signDetail),console.log(t.transfer)):t.$toast({message:s.data.errorMessage,position:"middle",duration:3e3})}).catch(function(t){console.log(t)})},confirmReceive:function(){}},components:{headTop:a("ra3+").a}},i={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",[a("head-top"),t._v(" "),a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(s){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[t._v("签约详情")])]),t._v(" "),a("div",{staticClass:"signBox"},[a("div",{staticClass:"addr"},[a("h2",[a("span",[t._v("房源地址：")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.address))])]),t._v(" "),a("p",[t._v("成交价格："),a("span",{staticClass:"price"},[t._v("￥"+t._s(t.signDetail.price))])]),t._v(" "),a("p",[t._v("建筑面积："),a("span",[t._v(t._s(t.signDetail.buildarea)+"㎡")])]),t._v(" "),a("p",[t._v("签约时间："),a("span",[t._v(t._s(t._f("moment")(t.signDetail.signing_time,"YYYY/MM/DD")))])]),t._v(" "),a("div",{staticClass:"flag"},[t._v("\n\t\t\t\t\t"+t._s(t.bargainStatus[t.signDetail.bargain_status])+"\n\t\t\t\t")])]),t._v(" "),a("div",{staticClass:"contact"},[a("p",[a("span",[t._v("业主姓名")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.owner))])]),t._v(" "),a("p",[a("span",[t._v("业主联系方式")]),t._v(" "),a("span",[t._v(t._s(t.signDetail.owner_tel))])])]),t._v(" "),a("div",{staticClass:"status"},[a("h2",[t._v("当前签约状态："),a("span",[t._v(t._s(t.signDetail.now_transfer.stage_name))])]),t._v(" "),a("div",{staticClass:"status_content"},t._l(t.transfer,function(s){return a("p",[a("span"),t._v(" "),a("span",[t._v(t._s(s.stage_name))])])}))]),t._v(" "),a("el-button",{staticClass:"btn-receiver",on:{click:t.confirmReceive}},[t._v("确认收款")])],1)],1)},staticRenderFns:[]};var r=a("VU/8")(e,i,!1,function(t){a("MtUC")},"data-v-096345f4",null);s.default=r.exports}});
//# sourceMappingURL=14.e115be92d963e9209029.js.map