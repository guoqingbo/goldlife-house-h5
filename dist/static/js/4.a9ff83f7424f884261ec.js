webpackJsonp([4],{"9bBU":function(t,e,s){s("mClu");var i=s("FeBl").Object;t.exports=function(t,e,s){return i.defineProperty(t,e,s)}},C4MV:function(t,e,s){t.exports={default:s("9bBU"),__esModule:!0}},FO0B:function(t,e){},YTJ3:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("bOdI"),a=s.n(i),l=s("pxwZ"),n=s("ra3+"),o=s("jkKj"),r=s.n(o),c=s("DNVT"),d={data:function(){var t;return t={type:"tab",address_detail:null,center:{lng:116.40387397,lat:39.91488908},arrItem:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],id:"",isSell:!0,isRent:!1},a()(t,"center",{lng:120.12,lat:30.16}),a()(t,"imgHouseAttr",[]),a()(t,"title",""),a()(t,"addressDetail",""),a()(t,"address",""),a()(t,"buildYear",""),a()(t,"builds",""),a()(t,"sellList",[]),a()(t,"rentList",[]),a()(t,"communityAround",[]),a()(t,"attentionStatus",!1),a()(t,"cityId","hz"),a()(t,"blockId",this.$route.params.blockId?this.$route.params.blockId:this.$store.state.activeInfo.blockId),a()(t,"userType","customer"),a()(t,"houseType",this.$route.params.houseType?this.$route.params.houseType:this.$store.state.activeInfo.houseType),a()(t,"address",""),t},created:function(){this.getCommunityDetail(),this.$store.commit("setActiveInfo",{blockId:this.blockId,houseType:this.houseType})},components:{headTop:n.a},mounted:function(){this.ready()},methods:{getCommunityDetail:function(){var t=this,e={blockId:this.blockId,city:this.cityId,userType:this.userType,houseType:this.houseType};l.a.getCommunityDetail(e).then(function(e){if(e.data.success){console.log("小区"),console.log(e.data.result);var s=e.data.result;t.id=s.id,t.sellList=s.houseInblock.sell.lists,t.rentList=s.houseInblock.rent.lists,console.log("在售列表"),console.log(t.sellList),console.log("在租列表"),console.log(t.rentList),t.communityAround=s.communityAround,t.address=s.disrictName+"区-"+s.streetName,t.buildYear=s.build_date,t.builds=s.build_num,t.title=s.cmt_name,t.addressDetail=s.address.split("（")[0],t.cityId=s.cityId,console.log(t.id),console.log("关注状态"),console.log(s.attentionState),"0"==s.attentionState?t.attentionStatus=!1:"1"==s.attentionState&&(t.attentionStatus=!0),t.center.lng=s.b_map_x,t.center.lat=s.b_map_y,t.address=s.disrictName+","+s.streetName,t.resetMap(),t.$nextTick(function(){new c.a(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})})}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("小区详情"+e.data.errorMessage)})},clickSell:function(){this.isSell=!0,this.isRent=!1,this.sellList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clickRent:function(){this.isSell=!1,this.isRent=!0,this.rentList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clkAttention:function(){var t=this;if(!this.attentionStatus){var e={cityId:this.cityId,businessNum:this.id,businessType:"小区",sysType:1,attentionState:1};return console.log(e),void l.a.attention(e).then(function(e){console.log(e.data),e.data.success&&(console.log("关注成功"),t.attentionStatus=!0)}).catch(function(t){console.log(t)})}if(this.attentionStatus){var s={cityId:this.cityId,businessNum:this.id,businessType:"小区",sysType:1,attentionState:0};l.a.attention(s).then(function(e){console.log(e.data),e.data.success&&(console.log("取消关注"),t.attentionStatus=!1)}).catch(function(t){console.log(t)})}},getOtherVillage:function(t){this.blockId=t,this.getCommunityDetail()},ready:function(){var t=new r.a.Map("allmap");window.map=t;var e=new r.a.Point(this.center.lng,this.center.lat),s=new r.a.Marker(e);t.addOverlay(s),t.disableDragging(),t.centerAndZoom(e,16)},resetMap:function(){var t=new r.a.Point(this.center.lng,this.center.lat),e=new r.a.Marker(t);map.addOverlay(e),map.disableDragging(),map.centerAndZoom(t,16),map.panTo(t);var s=new r.a.Label(this.address,{position:t,offset:new r.a.Size(-26,0)});s.setStyle({backgroundColor:"#fff",padding:"0.5rem",border:"",fontSize:".1rem"}),map.addOverlay(s)}}},u={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"containt"},[i("h1",{staticClass:"nav-header"},[i("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[i("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),i("span",{staticClass:"header-title"},[t._v(t._s(t.title))])]),t._v(" "),i("div",{staticClass:"content"},[i("div",{staticClass:"imgDiv"},[i("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:t.imgHouseAttr,title:t.title}}}},[t.imgHouseAttr.length>0?i("div",{staticClass:"swiper-container"},[i("div",{staticClass:"swiper-wrapper"},t._l(t.imgHouseAttr,function(t){return i("div",{staticClass:"swiper-slide"},[i("img",{attrs:{src:t||s("eyj8")}})])})),t._v(" "),i("div",{staticClass:"swiper-pagination"})]):i("div",[i("img",{attrs:{src:s("1Dch")}})])])],1),t._v(" "),i("div",{staticClass:"house-content"},[i("h2",{staticClass:"villageName"},[t._v(t._s(t.title))]),t._v(" "),i("div",{staticClass:"div-houseDes"},[i("el-row",[i("el-col",{attrs:{span:11}},[i("el-row",{staticClass:"el-houseDes"},[i("p",{staticClass:"des"},[t._v(t._s(t.addressDetail))])])],1),t._v(" "),i("el-col",{attrs:{span:11}},[i("el-row",{staticClass:"el-houseDes"},[t.attentionStatus?i("span",{on:{click:function(e){t.clkAttention()}}},[t.attentionStatus?i("i",{staticClass:"icon iconfont right"},[t._v("")]):t._e()]):i("span",{on:{click:function(e){t.clkAttention()}}},[i("i",{staticClass:"icon iconfont xl right"},[t._v("")])])])],1)],1)],1)]),t._v(" "),i("div",{staticClass:"divide"}),t._v(" "),i("div",{staticClass:"detailDes"},[i("p",[t._v("小区简介")]),t._v(" "),i("br"),t._v(" "),i("el-row",[i("el-col",{attrs:{span:11}},[i("el-row",{staticClass:"el-detailDes"},[i("p",[t._v("位置： "+t._s(t.address))])]),t._v(" "),i("el-row",{staticClass:"el-detailDes"},[i("p",[t._v("栋数： "+t._s(t.builds)+"栋")])])],1),t._v(" "),i("el-col",{attrs:{span:11}},[i("el-row",{staticClass:"el-detailDes"},[i("p",[t._v("年代： "+t._s(t.buildYear)+"年")])])],1)],1)],1),t._v(" "),i("div",{staticClass:"homeMap"},[i("router-link",{attrs:{to:{name:"mapIncrease",params:{x:t.center.lng,y:t.center.lat}}}},[i("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),t._v(" "),i("div",{staticClass:"sameArea"},[i("el-row",[i("el-col",{attrs:{span:16}},[i("p",[t._v("同小区房源")])]),t._v(" "),i("el-col",{attrs:{span:4}},[i("p",{class:{"class-color":t.isRent},on:{click:function(e){t.clickRent()}}},[t._v("在租")])]),t._v(" "),i("el-col",{attrs:{span:4}},[i("p",{class:{"class-color":t.isSell},on:{click:function(e){t.clickSell()}}},[t._v("在售")])])],1),t._v(" "),i("ul",{ref:"ulDisplay",staticClass:"category-head"},[t._l(t.sellList,function(e){return t.isSell?i("li",[i("router-link",{attrs:{to:{name:"houseBuyDetail",params:{cityId:t.cityId,houseId:e.id,userType:t.userType,houseType:t.houseType}}}},[i("img",{attrs:{src:e.pic?e.pic:s("eyj8")}}),i("br"),t._v(" "),i("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),i("p",[i("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))]),t._v("   "+t._s(e.avgprice))])])],1):t._e()}),t._v(" "),t._l(t.rentList,function(e){return t.isRent?i("li",[i("router-link",{attrs:{to:{name:"houseRentDetail",params:{cityId:t.cityId,houseId:e.id,userType:t.userType,houseType:t.houseType}}}},[i("img",{attrs:{src:e.pic?e.pic:s("eyj8")}}),i("br"),t._v(" "),i("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),i("p",[i("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))])])])],1):t._e()})],2)],1),t._v(" "),i("router-link",{attrs:{to:{name:"villageMore",params:{more:t.isSell?t.sellList:t.rentList,villageName:t.title,id:t.id,houseType:t.houseType}}}},[i("div",{ref:"sameSell",staticClass:"sameSells"},[t._v("\n        查看更多\n      ")])]),t._v(" "),i("div",{staticClass:"divide2"}),t._v(" "),i("div",{staticClass:"sameArea"},[i("p",[t._v("周边小区")]),t._v(" "),i("ul",{staticClass:"category-head"},t._l(t.communityAround,function(e){return i("li",{on:{click:function(s){t.getOtherVillage(e.id)}}},[i("img",{attrs:{src:e.surface_img?e.surface_img:s("eyj8")}}),i("br"),t._v(" "),i("p",{staticStyle:{color:"#885D24"}},[t._v(t._s(e.build_date)+"年建")]),t._v(" "),i("p",[t._v(t._s(e.cmt_name))]),t._v(" "),i("p",{staticClass:"p-bottom"},[i("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.averprice)+"元/平")])])])}))]),t._v(" "),i("div",{staticClass:"empty"})],1),t._v(" "),i("keep-alive",[i("router-view")],1)],1)},staticRenderFns:[]};var p=s("VU/8")(d,u,!1,function(t){s("FO0B")},"data-v-1f1d39b8",null);e.default=p.exports},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var i,a=s("C4MV"),l=(i=a)&&i.__esModule?i:{default:i};e.default=function(t,e,s){return e in t?(0,l.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},mClu:function(t,e,s){var i=s("kM2E");i(i.S+i.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})}});
//# sourceMappingURL=4.a9ff83f7424f884261ec.js.map