webpackJsonp([9],{IJXh:function(t,e){},qwJv:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=s("pxwZ"),a={props:[],data:function(){return{houseType:1,houseLists:[],houseTypeDetail:{1:"houseBuyDetail",2:"houseRentDetail",3:"villageDetail"}}},components:{houseItem:s("ps6j").a},created:function(){this.getAttention(this.houseType)},methods:{getAttention:function(t){var e=this;this.houseType=t,this.houseLists=[],3==t?o.a.getCommunityAttention().then(function(t){if(console.log(t),t.data.success){var s=[];t.data.result.forEach(function(t){t.avgprice=t.averprice,t.title=t.cmt_name,t.describe=t.build_date?t.build_date+"年建":"",t.pic=t.surface_img,s.push(t)}),console.log(s),e.houseLists=s}else e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}):2==t?o.a.getRentAttention().then(function(t){console.log(t),t.data.success?e.houseLists=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}):1==t&&o.a.getHouseAttention().then(function(t){console.log(t),t.data.success?e.houseLists=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},attention:function(t,e){var s=this,a={cityId:"hz",businessNum:t,businessType:{1:"二手房",2:"租房",3:"小区"}[this.houseType],sysType:1,attentionState:2};o.a.attention(a).then(function(t){console.log(t),t.data.success?(s.houseLists.splice(e,1),s.$toast({message:"取消关注成功",position:"bottom",duration:3e3})):s.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),s.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{},[s("div",{staticClass:"header-nav"},[s("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),s("ul",{staticClass:"nav-ul"},[s("li",{class:{"select-active":"2"==t.houseType},on:{click:function(e){t.getAttention(2)}}},[t._v("租房")]),t._v(" "),s("li",{class:{"select-active":"1"==t.houseType},on:{click:function(e){t.getAttention(1)}}},[t._v("二手房")]),t._v(" "),s("li",{class:{"select-active":"3"==t.houseType},on:{click:function(e){t.getAttention(3)}}},[t._v("楼盘")])])]),t._v(" "),s("div",{staticClass:"house-box"},[t.houseLists.length>0?s("ul",t._l(t.houseLists,function(e,o){return s("li",{key:e.id,staticClass:"house-li"},[s("mt-cell-swipe",{attrs:{right:[{content:"取消关注",style:{background:"red",color:"#fff",textAlign:"center",width:"8rem",height:"11rem",lineHeight:"11rem"},handler:function(){return t.attention(e.id,o)}}]}},[s("div",{staticClass:"house-item-box",attrs:{slot:"title"},slot:"title"},[s("router-link",{attrs:{to:3==t.houseType?{name:t.houseTypeDetail[t.houseType],params:{cityId:"hz",blockId:e.id,userType:"customer",houseType:1}}:{name:t.houseTypeDetail[t.houseType],params:{cityId:"hz",houseId:e.id,userType:"customer",houseType:t.houseType}}}},[s("house-item",{attrs:{item:e,houseType:t.houseType}})],1)],1)])],1)})):t._e()])])},staticRenderFns:[]};var n=s("vSla")(a,i,!1,function(t){s("IJXh")},"data-v-685e3be0",null);e.default=n.exports}});
//# sourceMappingURL=9.10320ab130edf591327e.js.map