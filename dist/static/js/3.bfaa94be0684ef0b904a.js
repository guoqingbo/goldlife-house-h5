webpackJsonp([3],{"4R8/":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("bOdI"),i=s.n(a),l=s("pxwZ"),o=s("ra3+"),n=s("jkKj"),r=s.n(n),c=s("DNVT"),u={data:function(){var t;return t={type:"tab",address_detail:null,center:{lng:116.40387397,lat:39.91488908},houseDetail:"",houseId:this.$route.params.houseId?this.$route.params.houseId:this.$store.state.activeInfo.houseId,isSell:!1,isRent:!0,title:"",price:"",buildarea:"",avgprice:"",forward:"",sell_type:"",floor:"",block_name:"",createtime:"",fitment:"",buildyear:"",maplng:"",maplat:""},i()(t,"center",{lng:120.12,lat:30.16}),i()(t,"imgHouseAttr",[]),i()(t,"sellList",[]),i()(t,"rentList",[]),i()(t,"communityAround",[]),i()(t,"attentionStatus","关注"),i()(t,"cityId","hz"),i()(t,"userType","customer"),i()(t,"houseType","2"),i()(t,"blockId","1"),i()(t,"brokerPhone",""),i()(t,"address",""),t},created:function(){this.getHouseDetail(),this.$store.commit("setActiveInfo",{houseId:this.houseId,houseType:this.houseType})},components:{headTop:o.a},mounted:function(){this.ready()},methods:{getHouseDetail:function(){var t=this,e={cityId:this.cityId,houseId:this.houseId,userType:this.userType,houseType:this.houseType};l.a.getHouseDetail(e).then(function(e){if(e.data.success){console.log(e.data.result);var s=e.data.result;t.houseDetail=s,console.log("houseDetail"),console.log(t.houseDetail),t.title=s.title,t.price=s.price,t.buildarea=s.buildarea,t.avgprice=s.avgprice,t.forward=s.forward,t.sell_type=s.sell_type,t.floor=s.floor,t.block_name=s.block_name,t.createtime=s.createtime,t.fitment=s.fitment,t.buildyear=s.buildyear,t.maplng=s.communityLocation.b_map_x,t.maplat=s.communityLocation.b_map_y,t.imgHouseAttr=s.img,t.center.lng=s.communityLocation.b_map_x,t.center.lat=s.communityLocation.b_map_y,t.cityId=s.cityId,t.blockId=s.block_id,t.brokerPhone=s.brokerPhone,"1"===s.attentionState?t.attentionStatus="已关注":"0"===s.attentionState&&(t.attentionStatus="关注"),t.address=s.disrictName+","+s.streetName,t.resetMap(),t.$nextTick(function(){new c.a(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})}),t.getCommunityDetail()}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("房源详情="+e.data.errorMessage)})},getCommunityDetail:function(){var t=this,e={blockId:this.blockId,city:this.cityId,userType:this.userType,houseType:this.houseType};l.a.getCommunityDetail(e).then(function(e){if(e.data.success){console.log("小区"),console.log(e.data.result);var s=e.data.result;t.sellList=s.houseInblock.sell.lists,t.rentList=s.houseInblock.rent.lists,console.log(t.sellList),t.communityAround=s.communityAround}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("小区详情"+e.data.errorMessage)})},clickSell:function(){this.isSell=!0,this.isRent=!1,this.sellList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clickRent:function(){this.isSell=!1,this.isRent=!0,this.rentList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clkAttention:function(){var t=this;l.a.isLogin().then(function(e){if(e.data.success){if(console.log(e),"关注"===t.attentionStatus){var s={cityId:t.cityId,businessNum:t.houseId,businessType:"租房",sysType:1,attentionState:1};return console.log(s),void l.a.attention(s).then(function(e){console.log(e.data),e.data.success&&(console.log("关注成功"),t.attentionStatus="已关注")}).catch(function(t){console.log(t)})}if("已关注"===t.attentionStatus){var a={cityId:t.cityId,businessNum:t.houseId,businessType:"租房",sysType:1,attentionState:0};l.a.attention(a).then(function(e){console.log(e.data),e.data.success&&(console.log("取消关注"),t.attentionStatus="关注")}).catch(function(t){console.log(t)})}}})},phoneCall:function(){var t=this;this.$confirm("呼叫："+this.brokerPhone,{confirmButtonText:"确定",cancelButtonText:"取消",cancelButtonClass:"cancelButtonClass",confirmButtonClass:"confirmButtonClass",customClass:"customClass",center:!0}).then(function(){window.location.href="tel://"+t.brokerPhone}).catch(function(){})},getHomeDetail:function(t){this.houseId=t,this.houseType="2",this.getHouseDetail()},ready:function(){var t=new r.a.Map("allmap");window.map=t;var e=new r.a.Point(this.maplng,this.maplat),s=new r.a.Marker(e);t.addOverlay(s),t.disableDragging(),t.centerAndZoom(e,16)},resetMap:function(){var t=new r.a.Point(this.maplng,this.maplat),e=new r.a.Marker(t);map.addOverlay(e),map.disableDragging(),map.centerAndZoom(t,16),map.panTo(t);var s=new r.a.Label(this.address,{position:t,offset:new r.a.Size(-26,0)});s.setStyle({backgroundColor:"#fff",padding:"0.5rem",border:"",fontSize:".1rem"}),map.addOverlay(s)}}},d={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"houseRentDetail"},[a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[t._v("房源")])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"imgDiv"},[a("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:t.imgHouseAttr,title:t.title}}}},[t.imgHouseAttr.length>0?a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.imgHouseAttr,function(t){return a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:t}})])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})]):a("div",[a("img",{attrs:{src:s("1Dch")}})])])],1),t._v(" "),a("div",{staticClass:"house-content"},[a("h2",{staticClass:"villageName"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"div-houseDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.price))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("租金")])])],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("el-row",[a("div",{staticClass:"div-line"})])],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.buildarea))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("建筑面积")])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"divide"}),t._v(" "),a("div",{staticClass:"detailDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("朝向： "),a("span",{staticClass:"data-show"},[t._v(t._s(t.forward))])])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("类型： "),a("span",{staticClass:"data-show"},[t._v(t._s(t.sell_type))])])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("年代： "),a("span",{staticClass:"data-show"},[t._v(t._s(t.buildyear))])])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("router-link",{attrs:{to:{name:"villageDetail",params:{blockId:t.blockId,cityId:t.cityId,userType:t.userType,houseType:t.houseType}}}},[a("p",[t._v("小区： "),a("span",{staticStyle:{color:"#ffc16b"}},[t._v(t._s(t.block_name))])])])],1)],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("挂牌： "),a("span",{staticClass:"data-show"},[t._v(t._s(t.createtime))])])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("装修： "),a("span",{staticClass:"data-show"},[t._v(t._s(t.fitment))])])]),t._v(" "),a("br"),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p")]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("router-link",{attrs:{to:{name:"villageDetail",params:{blockId:t.blockId,cityId:t.cityId,userType:t.userType,houseType:t.houseType}}}},[a("p",[a("span",{staticClass:"span-bold"},[a("i",{staticClass:"icon iconfont right"},[t._v("")])])])])],1)],1)],1)],1),t._v(" "),a("div",{staticClass:"homeMap"},[a("router-link",{attrs:{to:{name:"mapIncrease",params:{x:t.center.lng,y:t.center.lat}}}},[a("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),t._v(" "),a("div",{staticClass:"sameArea"},[a("el-row",[a("el-col",{attrs:{span:16}},[a("p",[t._v("同小区房源")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isRent},on:{click:function(e){t.clickRent()}}},[t._v("在租")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isSell},on:{click:function(e){t.clickSell()}}},[t._v("在售")])])],1),t._v(" "),a("ul",{ref:"ulDisplay",staticClass:"category-head"},[t._l(t.sellList,function(e){return t.isSell?a("li",[a("router-link",{attrs:{to:{name:"houseBuyDetail",params:{cityId:t.cityId,houseId:t.houseId,userType:t.userType,houseType:t.houseType}}}},[a("img",{attrs:{src:e.pic?e.pic:s("eyj8")}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))]),t._v("   "+t._s(e.avgprice))])])],1):t._e()}),t._v(" "),t._l(t.rentList,function(e){return t.isRent?a("li",{on:{click:function(s){t.getHomeDetail(e.id)}}},[a("img",{attrs:{src:e.pic?e.pic:s("eyj8")}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))])])]):t._e()})],2)],1),t._v(" "),a("router-link",{attrs:{to:{name:"villageMore",params:{more:t.isSell?t.sellList:t.rentList,villageName:t.title,id:t.blockId,houseType:t.houseType}}}},[a("div",{ref:"sameSell",staticClass:"sameSells"},[t.isSell?a("div",[t._v("\n        同小区在售"+t._s(t.sellList.length)+"套\n      ")]):t.isRent?a("div",[t._v("\n        同小区在租"+t._s(t.rentList.length)+"套\n      ")]):t._e()])]),t._v(" "),a("div",{staticClass:"divide2"}),t._v(" "),t.communityAround.length>0?a("div",{staticClass:"sameArea"},[a("p",[t._v("周边小区")]),t._v(" "),a("ul",{staticClass:"category-head"},t._l(t.communityAround,function(e){return a("li",[a("router-link",{attrs:{to:{name:"villageDetail",params:{blockId:t.blockId,cityId:t.cityId,userType:t.userType,houseType:t.houseType}}}},[a("img",{attrs:{src:e.surface_img?e.surface_img:s("eyj8")}}),a("br"),t._v(" "),a("p",{staticStyle:{color:"#885D24"}},[t._v(t._s(e.build_date)+"年建")]),t._v(" "),a("p",[t._v(t._s(e.cmt_name))]),t._v(" "),a("p",{staticClass:"p-bottom"},[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.averprice)+"元/平")])])])],1)}))]):t._e(),t._v(" "),a("div",{staticClass:"empty"}),t._v(" "),a("div",{staticClass:"button-bottom"},[a("el-row",{staticClass:"el-bt"},[a("el-col",{staticClass:"grid-bt-content bg-bt-light",attrs:{span:12}},[a("div",{on:{click:function(e){t.clkAttention()}}},[a("i",{staticClass:"icon iconfont xl"},[t._v("")]),a("br"),a("span",{staticClass:"span-icon"},[t._v(t._s(t.attentionStatus))])])]),t._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-bt-content bg-bt centenr",on:{click:function(e){t.phoneCall()}}},[a("span",[t._v("联系经纪人")])])])],1)],1)],1),t._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[]};var p=s("VU/8")(u,d,!1,function(t){s("7LWk")},null,null);e.default=p.exports},"7LWk":function(t,e){},"9bBU":function(t,e,s){s("mClu");var a=s("FeBl").Object;t.exports=function(t,e,s){return a.defineProperty(t,e,s)}},C4MV:function(t,e,s){t.exports={default:s("9bBU"),__esModule:!0}},bOdI:function(t,e,s){"use strict";e.__esModule=!0;var a,i=s("C4MV"),l=(a=i)&&a.__esModule?a:{default:a};e.default=function(t,e,s){return e in t?(0,l.default)(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}},mClu:function(t,e,s){var a=s("kM2E");a(a.S+a.F*!s("+E39"),"Object",{defineProperty:s("evD5").f})}});
//# sourceMappingURL=3.bfaa94be0684ef0b904a.js.map