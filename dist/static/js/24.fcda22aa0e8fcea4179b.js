webpackJsonp([24],{"4f9o":function(o,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=t("pxwZ"),a={name:"lookHouseHistory",data:function(){return{houseList:[]}},created:function(){this.getLookHouseInfo()},methods:{getLookHouseInfo:function(){var o=this;s.a.lookHouseHistory().then(function(e){e.data.success?o.houseList=e.data.result:console.log(e.data)}).catch(function(o){console.log(o)})},editNode:function(o){var e={orderDetailId:o.lookHouseLog.orderDetailId,room:o.targetHouse.room,hall:o.targetHouse.hall,price:o.targetHouse.price,blockName:o.targetHouse.block_name,text:o.lookHouseLog.text,lable:o.lookHouseLog.lable};this.$router.push({path:"/addLookHouseLog",query:{data:e}})}},components:{headTop:t("ra3+").a}},i={render:function(){var o=this,e=o.$createElement,t=o._self._c||e;return t("div",[t("head-top"),o._v(" "),t("h1",{staticClass:"nav-header"},[t("span",{staticClass:"go-back",on:{click:function(e){o.$router.go(-1)}}},[t("i",{staticClass:"icon iconfont go-back-icon"},[o._v("")])]),o._v(" "),t("span",{staticClass:"header-title"},[o._v("看房记录")])]),o._v(" "),o._l(o.houseList,function(e){return t("div",{staticClass:"box"},[t("div",[void 0!=e.targetHouse?t("div",{staticClass:"house-detail"},[t("img",{attrs:{src:e.targetHouse.pic?e.targetHouse.pic:"./static/bg_smallphotonormal@2x.png"}}),o._v(" "),t("div",[t("h3",[t("span",[o._v("约看小区 ")]),o._v("\n\t\t\t\t\t\t\t"+o._s(e.targetHouse.community_name)+"\n\t\t\t\t\t\t")]),o._v(" "),t("p",{staticClass:"describ"},[o._v(o._s(e.targetHouse.room)+"室"+o._s(e.targetHouse.hall)+"厅"+o._s(e.targetHouse.toilet)+"卫/"+o._s(e.targetHouse.buildarea)+"㎡/朝"+o._s(e.targetHouse.forward))]),o._v(" "),t("p",{staticClass:"price"},[t("span",[o._v(o._s(e.targetHouse.price)+"万")]),o._v(" "),t("span",[o._v("  "+o._s(e.targetHouse.avgprice)+" 元/平")])])])]):o._e(),o._v(" "),void 0!=e.lookHouseLog?t("div",{staticClass:"house-status"},[t("p",[t("span",[t("b",[o._v(o._s(e.brokerName))]),o._v(" 经纪人带看")]),o._v(" "),t("span",[o._v(o._s(o._f("moment")(e.time/1e3,"MM月DD日 hh:mm")))])]),o._v(" "),""==e.lookHouseLog.lable&&""==e.lookHouseLog.text?t("span",{staticClass:"add",on:{click:function(t){o.editNode(e)}}},[o._v("添加看房笔记")]):t("div",{staticClass:"label",on:{click:function(t){o.editNode(e)}}},[t("p",{directives:[{name:"show",rawName:"v-show",value:!!e.lookHouseLog.lable,expression:"!!i.lookHouseLog.lable"}]},[o._v(o._s(e.lookHouseLog.lable)+"。")]),o._v(" "),t("p",{directives:[{name:"show",rawName:"v-show",value:!!e.lookHouseLog.text,expression:"!!i.lookHouseLog.text"}]},[o._v(o._s(e.lookHouseLog.text))])])]):o._e()])])})],2)},staticRenderFns:[]};var l=t("vSla")(a,i,!1,function(o){t("I/fA")},"data-v-15e92ff8",null);e.default=l.exports},"I/fA":function(o,e){}});
//# sourceMappingURL=24.fcda22aa0e8fcea4179b.js.map