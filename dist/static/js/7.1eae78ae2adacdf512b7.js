webpackJsonp([7],{"+LPs":function(t,e){},PZvr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("pxwZ"),a=s("ra3+"),_=(s("DNVT"),{name:"comparedResult",data:function(){return{houseList:[],cityId:"",houseId:""}},created:function(){this.getCompareData()},mounted:function(){},methods:{getCompareData:function(){var t=this;i.a.houseCompared([{cityId:"hz",houseId:"36979"},{cityId:"hz",houseId:"36980"}]).then(function(e){e.data.success?t.houseList=e.data.result:t.$toast({message:e.data.errorMessage,position:"middle",duration:3e3})}).catch(function(t){console.log(t)})}},components:{headTop:a.a}}),o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"box"},[s("head-top"),t._v(" "),s("h1",{staticClass:"nav-header"},[s("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),s("span",{staticClass:"header-title"},[t._v("房源对比")])]),t._v(" "),t._m(0),t._v(" "),s("div",{staticClass:"houseDetail"},t._l(t.houseList,function(e){return s("div",{staticClass:"compared"},[s("h4",[t._v(t._s(e.title?e.title:"暂无信息"))]),t._v(" "),s("p",[t._v(t._s(e.price?e.price:"无")+"万")]),t._v(" "),s("img",{attrs:{src:e.pic?e.pic:"./static/searcherror@2x.png",alt:""}}),t._v(" "),s("ul",{staticClass:"first_ul"},[s("li",[t._v(t._s(e.buildarea?e.buildarea:"无"))]),t._v(" "),s("li",[t._v(t._s(e.avgprice?e.avgprice:"无"))]),t._v(" "),s("li",[t._v(t._s(e.room)+"室"+t._s(e.hall)+"厅"+t._s(e.toilet)+"卫")]),t._v(" "),s("li",[t._v(t._s(e.forward?e.forward:"无"))]),t._v(" "),s("li",[t._v(t._s(e.fitment?e.fitment:"无"))]),t._v(" "),s("li",[t._v(t._s(e.floor_name)+"/共"+t._s(e.totalfloor)+"层")])]),t._v(" "),s("ul",[s("li",[t._v(t._s(e.district_name?e.district_name:"无"))]),t._v(" "),s("li",[t._v(t._s(e.block_name?e.block_name:"无"))]),t._v(" "),s("li",[t._v(t._s(e.sell_type?e.sell_type:"无"))])])])}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"houseInfo"},[s("h2",[t._v("房源名称")]),t._v(" "),s("div",[s("h3",[t._v("核心信息")]),t._v(" "),s("ul",[s("li",[t._v("建筑面积")]),t._v(" "),s("li",[t._v("单价")]),t._v(" "),s("li",[t._v("户型")]),t._v(" "),s("li",[t._v("朝向")]),t._v(" "),s("li",[t._v("装修")]),t._v(" "),s("li",[t._v("楼层")])]),t._v(" "),s("h3",[t._v("基础信息")]),t._v(" "),s("ul",[s("li",[t._v("板块")]),t._v(" "),s("li",[t._v("小区")]),t._v(" "),s("li",[t._v("类型")])])])])}]};var l=s("VU/8")(_,o,!1,function(t){s("+LPs")},"data-v-8299db5c",null);e.default=l.exports}});
//# sourceMappingURL=7.1eae78ae2adacdf512b7.js.map