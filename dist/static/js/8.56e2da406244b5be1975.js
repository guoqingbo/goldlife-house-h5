webpackJsonp([8],{FUn9:function(t,e){},qwJv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("pxwZ"),a=s("ra3+"),n=s("ps6j"),i={props:[],data:function(){return{houseType:2,hoseLists:[]}},components:{headTop:a.a,houseItem:n.a},created:function(){this.getAttention(this.houseType)},methods:{getAttention:function(t){var e=this;this.houseType=t,3==t?o.a.getCommunityAttention().then(function(t){if(console.log(t),t.data.success){var s=[];t.data.result.forEach(function(t){var e={title:t.cmt_name,describe:t.build_date?t.build_date+"年建":"",pic:t.surface_img};s.push(e)}),e.hoseLists=s}else e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}):2==t?o.a.getRentAttention().then(function(t){console.log(t),t.data.success?e.hoseLists=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}):1==t&&o.a.getHouseAttention().then(function(t){console.log(t),t.data.success?e.hoseLists=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})}}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("head-top",{attrs:{goBack:"true"}}),t._v(" "),s("div",{staticClass:"header-nav"},[s("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),s("ul",{staticClass:"nav-ul"},[s("li",{class:{"select-active":"2"==t.houseType},on:{click:function(e){t.getAttention(2)}}},[t._v("租房")]),t._v(" "),s("li",{class:{"select-active":"1"==t.houseType},on:{click:function(e){t.getAttention(1)}}},[t._v("二手房")]),t._v(" "),s("li",{class:{"select-active":"3"==t.houseType},on:{click:function(e){t.getAttention(3)}}},[t._v("楼盘")])])]),t._v(" "),s("div",[s("ul",t._l(t.houseLists,function(e){return s("li",{key:e.id,staticClass:"house-item clear"},[s("router-link",{attrs:{to:"/sellDetail"}},[s("house-item",{attrs:{item:e,houseType:t.houseType}})],1)],1)}))])],1)},staticRenderFns:[]};var r=s("VU/8")(i,c,!1,function(t){s("FUn9")},"data-v-b7953802",null);e.default=r.exports}});
//# sourceMappingURL=8.56e2da406244b5be1975.js.map