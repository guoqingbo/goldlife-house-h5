webpackJsonp([4],{"9bBU":function(e,t,s){s("mClu");var l=s("FeBl").Object;e.exports=function(e,t,s){return l.defineProperty(e,t,s)}},C4MV:function(e,t,s){e.exports={default:s("9bBU"),__esModule:!0}},WMek:function(e,t){},YTJ3:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var l=s("bOdI"),a=s.n(l),i=s("pxwZ"),n=s("ra3+"),o=s("jkKj"),r=s.n(o),c={data:function(){var e;return e={type:"tab",address_detail:null,center:{lng:116.40387397,lat:39.91488908},arrItem:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],id:"",isSell:!0,isRent:!1},a()(e,"center",{lng:120.12,lat:30.16}),a()(e,"imgHouseAttr",[]),a()(e,"title",""),a()(e,"addressDetail",""),a()(e,"address",""),a()(e,"buildYear",""),a()(e,"builds",""),a()(e,"sellList",[]),a()(e,"rentList",[]),a()(e,"communityAround",[]),a()(e,"attentionStatus",!1),a()(e,"cityId","hz"),a()(e,"blockId",this.$route.params.blockId?this.$route.params.blockId:this.$store.state.activeInfo.blockId),a()(e,"userType","customer"),a()(e,"houseType",this.$route.params.houseType?this.$route.params.houseType:this.$store.state.activeInfo.houseType),a()(e,"address",""),e},created:function(){this.menu(),this.getCommunityDetail(),this.$store.commit("setActiveInfo",{blockId:this.blockId,houseType:this.houseType})},components:{headTop:n.a},mounted:function(){this.ready()},methods:{getCommunityDetail:function(){var e=this,t={blockId:this.blockId,city:this.cityId,userType:this.userType,houseType:this.houseType};i.a.getCommunityDetail(t).then(function(t){if(t.data.success){console.log("小区"),console.log(t.data.result);var s=t.data.result;e.id=s.id,e.sellList=s.houseInblock.sell.lists,e.rentList=s.houseInblock.rent.lists,e.isSell&&(e.sellList.length>3?(e.$refs.ulDisplay.style.display="",e.$refs.sameSell.style.marginTop="16rem",e.$refs.sameSell.style.backgroundColor="#f5f5f5"):e.sellList.length>0&&e.sellList.length<4?(e.$refs.ulDisplay.style.display="",e.$refs.sameSell.style.marginTop="12rem",e.$refs.sameSell.style.backgroundColor="#fff"):(e.$refs.ulDisplay.style.display="none",e.$refs.sameSell.style.marginTop="2rem",e.$refs.sameSell.style.backgroundColor="#f5f5f5")),e.isRent&&(e.rentList.length>3?(e.$refs.ulDisplay.style.display="",e.$refs.sameSell.style.marginTop="16rem",e.$refs.sameSell.style.backgroundColor="#f5f5f5"):e.rentList.length>0&&e.rentList.length<4?(e.$refs.ulDisplay.style.display="",e.$refs.sameSell.style.marginTop="12rem",e.$refs.sameSell.style.backgroundColor="#fff"):(e.$refs.ulDisplay.style.display="none",e.$refs.sameSell.style.marginTop="2rem",e.$refs.sameSell.style.backgroundColor="#f5f5f5")),console.log("在售列表"),console.log(e.sellList),console.log("在租列表"),console.log(e.rentList),e.communityAround=s.communityAround,e.address=s.disrictName+"区-"+s.streetName,e.buildYear=s.build_date,e.builds=s.build_num,e.title=s.cmt_name,e.addressDetail=s.address.split("（")[0],e.cityId=s.cityId,console.log(e.id),console.log("关注状态"),console.log(s.attentionState),"0"==s.attentionState?e.attentionStatus=!1:"1"==s.attentionState&&(e.attentionStatus=!0),e.center.lng=s.b_map_x,e.center.lat=s.b_map_y,e.address=s.disrictName+","+s.streetName,e.resetMap(),e.$nextTick(function(){new Swiper(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})})}else e.$message.error(t.data.errorMessage)}).catch(function(t){e.$message.error("小区详情"+t.data.errorMessage)})},menu:function(){window.scrollTo(0,0)},clickSell:function(){this.isSell=!0,this.isRent=!1,this.sellList.length>3?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem",this.$refs.sameSell.style.backgroundColor="#f5f5f5"):this.sellList.length>0&&this.sellList.length<4?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="12rem",this.$refs.sameSell.style.backgroundColor="#fff"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem",this.$refs.sameSell.style.backgroundColor="#f5f5f5")},clickRent:function(){this.isSell=!1,this.isRent=!0,this.rentList.length>3?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem",this.$refs.sameSell.style.backgroundColor="#f5f5f5"):this.rentList.length>0&&this.rentList.length<4?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="12rem",this.$refs.sameSell.style.backgroundColor="#fff"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem",this.$refs.sameSell.style.backgroundColor="#f5f5f5")},clkAttention:function(){var e=this;i.a.isLogin().then(function(t){if(t.data.success){if(console.log(t),!e.attentionStatus){var s={cityId:e.cityId,businessNum:e.id,businessType:"小区",sysType:1,attentionState:1};return console.log(s),void i.a.attention(s).then(function(t){console.log(t.data),t.data.success&&(console.log("关注成功"),e.attentionStatus=!0)}).catch(function(e){console.log(e)})}if(e.attentionStatus){var l={cityId:e.cityId,businessNum:e.id,businessType:"小区",sysType:1,attentionState:0};i.a.attention(l).then(function(t){console.log(t.data),t.data.success&&(console.log("取消关注"),e.attentionStatus=!1)}).catch(function(e){console.log(e)})}}})},getOtherVillage:function(e){this.blockId=e,this.getCommunityDetail(),this.menu()},ready:function(){var e=new r.a.Map("allmap");window.map=e;var t=new r.a.Point(this.center.lng,this.center.lat),s=new r.a.Marker(t);e.addOverlay(s),e.disableDragging(),e.centerAndZoom(t,16)},resetMap:function(){var e=new r.a.Point(this.center.lng,this.center.lat),t=new r.a.Marker(e);map.addOverlay(t),map.disableDragging(),map.centerAndZoom(e,16),map.panTo(e);var s=new r.a.Label(this.address,{position:e,offset:new r.a.Size(-26,0)});s.setStyle({backgroundColor:"#fff",padding:"0.5rem",border:"",fontSize:".1rem"}),map.addOverlay(s)}}},u={render:function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("div",{staticClass:"villageDetail"},[l("div",{attrs:{id:"nav-village"}},[l("ul",[l("li",{staticClass:"menu"},[l("span",{staticClass:"go-back",on:{click:function(t){e.$router.go(-1)}}},[l("i",{staticClass:"icon iconfont go-back-icon"},[e._v("")])])]),e._v(" "),l("span",[e._v(e._s(e.title))])])]),e._v(" "),l("div",{staticClass:"content-village"},[l("div",{staticClass:"imgDiv"},[l("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:e.imgHouseAttr,title:e.title}}}},[e.imgHouseAttr.length>0?l("div",{staticClass:"swiper-container"},[l("div",{staticClass:"swiper-wrapper"},e._l(e.imgHouseAttr,function(e){return l("div",{staticClass:"swiper-slide"},[l("img",{attrs:{src:e||s("K2Dr")}})])})),e._v(" "),l("div",{staticClass:"swiper-pagination"})]):l("div",[l("img",{attrs:{src:s("K2Dr")}})])])],1),e._v(" "),l("div",{staticClass:"house-content"},[l("h2",{staticClass:"villageName"},[e._v(e._s(e.title))]),e._v(" "),l("div",{staticClass:"div-houseDes"},[l("el-row",[l("el-col",{attrs:{span:16}},[l("el-row",{staticClass:"el-houseDes"},[l("p",{staticClass:"des"},[e._v(e._s(e.addressDetail))])])],1),e._v(" "),l("el-col",{attrs:{span:6}},[l("el-row",{staticClass:"el-houseDes"},[e.attentionStatus?l("span",{on:{click:function(t){e.clkAttention()}}},[e.attentionStatus?l("i",{staticClass:"icon iconfont right"},[e._v("")]):e._e()]):l("span",{on:{click:function(t){e.clkAttention()}}},[l("i",{staticClass:"icon iconfont xl right"},[e._v("")])])])],1)],1)],1)]),e._v(" "),l("div",{staticClass:"divide"}),e._v(" "),l("div",{staticClass:"detailDes"},[l("p",[e._v("小区简介")]),e._v(" "),l("br"),e._v(" "),l("el-row",[l("el-col",{attrs:{span:11}},[l("el-row",{staticClass:"el-detailDes"},[l("p",[e._v("位置： "),l("span",{staticClass:"data-show"},[e._v(e._s(e.address))])])]),e._v(" "),l("el-row",{staticClass:"el-detailDes"},[l("p",[e._v("栋数： "),l("span",{staticClass:"data-show"},[e._v(e._s(e.builds)+"栋")])])])],1),e._v(" "),l("el-col",{attrs:{span:11}},[l("el-row",{staticClass:"el-detailDes"},[l("p",[e._v("年代： "),l("span",{staticClass:"data-show"},[e._v(e._s(e.buildYear)+"年")])])])],1)],1)],1),e._v(" "),l("div",{staticClass:"homeMap"},[l("router-link",{attrs:{to:{name:"mapIncrease",params:{x:e.center.lng,y:e.center.lat}}}},[l("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),e._v(" "),l("div",{staticClass:"sameArea"},[l("el-row",[l("el-col",{attrs:{span:16}},[l("p",[e._v("同小区房源")])]),e._v(" "),l("el-col",{attrs:{span:4}},[l("p",{class:{"class-color":e.isRent},on:{click:function(t){e.clickRent()}}},[e._v("在租")])]),e._v(" "),l("el-col",{attrs:{span:4}},[l("p",{class:{"class-color":e.isSell},on:{click:function(t){e.clickSell()}}},[e._v("在售")])])],1),e._v(" "),l("ul",{ref:"ulDisplay",staticClass:"category-head"},[e._l(e.sellList,function(t){return e.isSell?l("li",[l("router-link",{attrs:{to:{name:"houseBuyDetail",params:{cityId:e.cityId,houseId:t.id,userType:e.userType,houseType:e.houseType}}}},[l("img",{attrs:{src:t.pic?t.pic:s("16yI")}}),l("br"),e._v(" "),l("p",[e._v(e._s(t.room_type)+"|"+e._s(t.buildarea)+"|"+e._s(t.forward))]),e._v(" "),l("p",[l("span",{staticStyle:{color:"#e10000"}},[e._v(e._s(t.price))]),e._v("   "+e._s(t.avgprice))])])],1):e._e()}),e._v(" "),e._l(e.rentList,function(t){return e.isRent?l("li",[l("router-link",{attrs:{to:{name:"houseRentDetail",params:{cityId:e.cityId,houseId:t.id,userType:e.userType,houseType:e.houseType}}}},[l("img",{attrs:{src:t.pic?t.pic:s("16yI")}}),l("br"),e._v(" "),l("p",[e._v(e._s(t.room_type)+"|"+e._s(t.buildarea)+"|"+e._s(t.forward))]),e._v(" "),l("p",[l("span",{staticStyle:{color:"#e10000"}},[e._v(e._s(t.price))])])])],1):e._e()})],2)],1),e._v(" "),l("router-link",{attrs:{to:{name:"villageMore",params:{more:e.isSell?e.sellList:e.rentList,villageName:e.title,id:e.id,houseType:e.houseType}}}},[l("div",{ref:"sameSell",staticClass:"sameSells"},[e.isRent&&e.rentList.length>3||e.isSell&&e.sellList.length>3?l("span",[e._v("查看更多")]):l("span",[e.isRent&&e.rentList.length<1?l("span",[e._v("暂无在租房源")]):e._e(),e._v(" "),e.isSell&&e.sellList.length<1?l("span",[e._v("暂无在售房源")]):e._e()])])]),e._v(" "),l("div",{staticClass:"divide2"}),e._v(" "),e.communityAround.length>0?l("div",{staticClass:"sameArea"},[l("p",[e._v("周边小区")]),e._v(" "),l("ul",{staticClass:"category-head"},e._l(e.communityAround,function(t){return l("li",{on:{click:function(s){e.getOtherVillage(t.id)}}},[l("img",{attrs:{src:t.surface_img?t.surface_img:s("16yI")}}),l("br"),e._v(" "),l("p",{staticStyle:{color:"#885D24"}},[e._v(e._s(t.build_date)+"年建")]),e._v(" "),l("p",[e._v(e._s(t.cmt_name))]),e._v(" "),l("p",{staticClass:"p-bottom"},[l("span",{staticStyle:{color:"#e10000"}},[e._v(e._s(t.averprice)+"元/平")])])])}))]):e._e(),e._v(" "),e.communityAround.length>0?l("div",{staticClass:"empty"}):l("div",{staticClass:"empty2"})],1),e._v(" "),l("keep-alive",[l("router-view")],1)],1)},staticRenderFns:[]};var d=s("VU/8")(c,u,!1,function(e){s("WMek")},"data-v-d1ee867e",null);t.default=d.exports},bOdI:function(e,t,s){"use strict";t.__esModule=!0;var l,a=s("C4MV"),i=(l=a)&&l.__esModule?l:{default:l};t.default=function(e,t,s){return t in e?(0,i.default)(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}},mClu:function(e,t,s){var l=s("kM2E");l(l.S+l.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})}});
//# sourceMappingURL=4.9a2801015250a44c67e1.js.map