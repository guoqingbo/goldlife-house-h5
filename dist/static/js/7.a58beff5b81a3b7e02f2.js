webpackJsonp([7],{"4f9o":function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var s=e("pxwZ"),a={name:"lookHouseHistory",data:function(){return{houseList:[]}},created:function(){this.getLookHouseInfo()},methods:{getLookHouseInfo:function(){var t=this;s.a.lookHouseHistory().then(function(o){o.data.success?(t.houseList=o.data.result,console.log(o.data.result)):console.log(o.data)}).catch(function(t){console.log(t)})},editNode:function(t){var o={orderDetailId:t.lookHouseLog.orderDetailId,room:t.targetHouse.room,hall:t.targetHouse.hall,toilet:t.targetHouse.toilet,price:t.targetHouse.price,blockName:t.targetHouse.block_name,text:t.lookHouseLog.text,lable:t.lookHouseLog.lable};this.$router.push({path:"/addLookHouseLog",query:{data:o}})}},filters:{formatPrice:function(t){if(!t)return"0.00";var o=t.toString();if(o.indexOf(".")>=0){var e=o.split(".")[0],s=o.split(".")[1];return e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")+"."+s}return o.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}}},i={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("div",[e("div",{staticClass:"history-box"},[e("h1",{staticClass:"nav-header"},[e("span",{staticClass:"go-back",on:{click:function(o){t.$router.go(-1)}}},[e("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),e("span",{staticClass:"header-title"},[t._v("看房记录")])]),t._v(" "),t._l(t.houseList,function(o){return e("div",{staticClass:"box"},[e("div",[void 0!=o.targetHouse?e("div",{staticClass:"house-detail"},[e("img",{attrs:{src:o.targetHouse.pic?o.targetHouse.pic:"./static/bg_smallphotonormal@2x.png"}}),t._v(" "),e("div",[e("h3",[e("span",[t._v("约看小区 ")]),t._v("\n\t\t\t\t\t\t\t"+t._s(o.targetHouse.community_name)+"\n\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"describ"},[t._v(t._s(o.targetHouse.room)+"室"+t._s(o.targetHouse.hall)+"厅"+t._s(o.targetHouse.toilet)+"卫/"+t._s(o.targetHouse.buildarea)+"㎡/朝"+t._s(o.targetHouse.forward))]),t._v(" "),e("p",{staticClass:"price"},[e("span",[t._v(t._s(o.targetHouse.price)+"万")]),t._v(" "),e("span",[t._v("  "+t._s(t._f("formatPrice")(o.targetHouse.avgprice))+" 元/平")])])])]):t._e(),t._v(" "),void 0!=o.lookHouseLog?e("div",{staticClass:"house-status"},[e("p",[e("span",[e("b",[t._v(t._s(o.brokerName))]),t._v(" 经纪人带看")]),t._v(" "),e("span",[t._v(t._s(t._f("moment")(o.time/1e3,"MM月DD日 HH:mm")))])]),t._v(" "),""==o.lookHouseLog.lable&&""==o.lookHouseLog.text?e("span",{staticClass:"add",on:{click:function(e){t.editNode(o)}}},[t._v("添加看房笔记")]):e("div",{staticClass:"label",on:{click:function(e){t.editNode(o)}}},[e("p",{directives:[{name:"show",rawName:"v-show",value:!!o.lookHouseLog.lable,expression:"!!i.lookHouseLog.lable"}]},[t._v(t._s(o.lookHouseLog.lable)+"。")]),t._v(" "),e("p",{directives:[{name:"show",rawName:"v-show",value:!!o.lookHouseLog.text,expression:"!!i.lookHouseLog.text"}]},[t._v(t._s(o.lookHouseLog.text))])])]):t._e()])])})],2)])},staticRenderFns:[]};var r=e("VU/8")(a,i,!1,function(t){e("oOYF")},"data-v-99d8d664",null);o.default=r.exports},oOYF:function(t,o){}});
//# sourceMappingURL=7.a58beff5b81a3b7e02f2.js.map