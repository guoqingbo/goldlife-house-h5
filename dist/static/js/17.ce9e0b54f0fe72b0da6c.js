webpackJsonp([17],{"14Xr":function(t,e){},PZvr:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("pxwZ"),i=a("ra3+"),_=(a("oefm"),{name:"comparedResult",data:function(){return{houseList:[],cityId:"",houseId:""}},created:function(){this.getCompareData()},mounted:function(){},methods:{getCompareData:function(){var t=this,e=this.$route.params.data;console.log(e),s.a.houseCompared(e).then(function(e){e.data.success?t.houseList=e.data.result:t.$toast({message:e.data.errorMessage,position:"middle",duration:3e3})}).catch(function(t){console.log(t)})}},components:{headTop:i.a}}),o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"box"},[a("head-top"),t._v(" "),a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[t._v("房源对比")])]),t._v(" "),t._m(0),t._v(" "),a("div",{staticClass:"houseDetail"},t._l(t.houseList,function(e){return a("div",{staticClass:"compared"},[a("h4",[t._v(t._s(e.title?e.title:"暂无信息"))]),t._v(" "),a("p",[t._v(t._s(e.price?e.price:"无")+"万")]),t._v(" "),a("img",{attrs:{src:e.pic?e.pic:"./static/searcherror@2x.png",alt:""}}),t._v(" "),a("ul",{staticClass:"first_ul"},[a("li",[t._v(t._s(e.buildarea?e.buildarea:"无"))]),t._v(" "),a("li",[t._v(t._s(e.avgprice?e.avgprice:"无"))]),t._v(" "),a("li",[t._v(t._s(e.room)+"室"+t._s(e.hall)+"厅"+t._s(e.toilet)+"卫")]),t._v(" "),a("li",[t._v(t._s(e.forward?e.forward:"无"))]),t._v(" "),a("li",[t._v(t._s(e.fitment?e.fitment:"无"))]),t._v(" "),a("li",[t._v(t._s(e.floor_name)+"/共"+t._s(e.totalfloor)+"层")])]),t._v(" "),a("ul",[a("li",[t._v(t._s(e.district_name?e.district_name:"无"))]),t._v(" "),a("li",[t._v(t._s(e.block_name?e.block_name:"无"))]),t._v(" "),a("li",[t._v(t._s(e.sell_type?e.sell_type:"无"))])])])}))],1)},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"houseInfo"},[a("h2",[t._v("房源名称")]),t._v(" "),a("div",[a("h3",[t._v("核心信息")]),t._v(" "),a("ul",[a("li",[t._v("建筑面积")]),t._v(" "),a("li",[t._v("单价")]),t._v(" "),a("li",[t._v("户型")]),t._v(" "),a("li",[t._v("朝向")]),t._v(" "),a("li",[t._v("装修")]),t._v(" "),a("li",[t._v("楼层")])]),t._v(" "),a("h3",[t._v("基础信息")]),t._v(" "),a("ul",[a("li",[t._v("板块")]),t._v(" "),a("li",[t._v("小区")]),t._v(" "),a("li",[t._v("类型")])])])])}]};var l=a("vSla")(_,o,!1,function(t){a("14Xr")},"data-v-324bca54",null);e.default=l.exports}});
//# sourceMappingURL=17.ce9e0b54f0fe72b0da6c.js.map