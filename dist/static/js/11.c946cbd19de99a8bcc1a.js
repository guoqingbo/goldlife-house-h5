webpackJsonp([11],{"1rCw":function(t,s,e){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var o=e("pxwZ"),a={name:"lookHouseIndex",data:function(){return{houseList:[],state:{1:"预约中",2:"预约中",3:"预约失败",4:"待看房",5:"看房结束"}}},created:function(){this.getLookHouseInfo()},methods:{getLookHouseInfo:function(){var t=this;o.a.lookHouseIndex().then(function(s){s.data.success?(t.houseList=s.data.result,console.log(s.data)):console.log(s.data.errorMessage)}).catch(function(t){console.log(t)})},lookHistory:function(){this.$router.push({path:"/lookHouseHistory"})},toDetail:function(t){this.$router.push({path:"/lookHouseReservation",query:{data:t}})},backHome:function(){this.$router.push({path:"/"})}},filters:{lineHouse:function(t){return t.toString().indexOf("套")>=0?t:t+"套"},formatPrice:function(t){if(!t)return"0.00";var s=Number(t).toFixed(0).toString().replace(/(\d)(?=(?:\d{3})+$)/g,"$1,"),e=t+"";return e.indexOf(".")>=0?s+"."+e.split(".")[1]:s}}},i={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("div",{staticClass:"look_box"},[e("h1",{staticClass:"nav-header"},[e("span",{staticClass:"go-back",on:{click:t.backHome}},[e("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),e("span",{staticClass:"header-title"},[t._v("看房日程")]),t._v(" "),e("span",{staticClass:"go-edit",on:{click:t.lookHistory}},[e("i",{staticClass:"icon iconfont editor-icon"},[t._v("")])])]),t._v(" "),t._l(t.houseList,function(s){return e("div",{staticClass:"box",on:{click:function(e){t.toDetail(s)}}},[0==s.lineType?e("div",[void 0!=s.targetHouse?e("div",{staticClass:"house-detail"},[e("img",{attrs:{src:s.targetHouse.pic?s.targetHouse.pic:"./static/bg_smallphotonormal@2x.png"}}),t._v(" "),e("div",[e("h3",[e("span",[t._v("约看小区 ")]),t._v("\n\t\t\t\t\t\t\t"+t._s(s.targetHouse.community_name)+"\n\t\t\t\t\t\t")]),t._v(" "),e("p",{staticClass:"describ"},[t._v(t._s(s.targetHouse.room)+"室"+t._s(s.targetHouse.hall)+"厅"+t._s(s.targetHouse.toilet)+"卫/"+t._s(s.targetHouse.buildarea)+"㎡/朝"+t._s(s.targetHouse.forward))]),t._v(" "),e("p",{staticClass:"price"},[e("span",[t._v(t._s(s.targetHouse.price)+"万")]),t._v(" "),e("span",[t._v("  "+t._s(t._f("formatPrice")(s.targetHouse.avgprice))+" 元/平")])])])]):t._e(),t._v(" "),e("div",{staticClass:"house-status"},[e("p",{class:"t"+s.state},[e("span",[t._v(t._s(t.state[s.state]))]),t._v(" "),e("span",[t._v(t._s(t._f("moment")(s.time/1e3,"MM月DD日 HH:mm")))])])])]):e("div",[e("div",{staticClass:"house-detail",on:{click:function(e){t.toDetail(s)}}},[e("img",{attrs:{src:s.targetHouse.pic?s.targetHouse.pic:"./static/bg_smallphotonormal@2x.png"}}),t._v(" "),e("div",[e("h3",[t._v("线下房源")]),t._v(" "),e("p",{staticClass:"describ"},[t._v("请提前咨询确定房屋样式符合您的预期")]),t._v(" "),e("p",{staticClass:"price offline"},[e("span",[t._v(t._s(t._f("lineHouse")(s.num)))])])])]),t._v(" "),e("div",{staticClass:"house-status"},[e("p",{class:"t"+s.state},[e("span",[t._v(t._s(t.state[s.state]))]),t._v(" "),e("span",[t._v(t._s(t._f("moment")(s.time/1e3,"MM月DD日 HH:mm")))])])])])])})],2)])},staticRenderFns:[]};var n=e("VU/8")(a,i,!1,function(t){e("RXEA")},"data-v-63fb9e1d",null);s.default=n.exports},RXEA:function(t,s){}});
//# sourceMappingURL=11.c946cbd19de99a8bcc1a.js.map