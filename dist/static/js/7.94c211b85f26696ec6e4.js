webpackJsonp([7],{AKZh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("mvHQ"),i=s.n(a),l=s("pxwZ"),o=s("ra3+"),n=s("jkKj"),r=s.n(n),c=s("DNVT"),m={data:function(){return{type:"tab",address_detail:null,arrItem:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],sameImgAttr:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],otherImgAttr:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],houseDetail:"",houseId:"1",isSell:!0,isRent:!1,title:"",price:"",buildarea:"",avgprice:"",forward:"",sell_type:"",floor:"",block_name:"",createtime:"",fitment:"",buildyear:"",maplng:"",maplat:"",center:{lng:120.12,lat:30.16},imgHouseAttr:["","",""],sellList:[],rentList:[],communityAround:[],attentionStatus:!1,cityId:"hz",userType:"customer",houseType:"1",blockId:"1",compareNum:"",compareDesc:"加入对比"}},created:function(){this.getHouseDetail(),this.getCompareNum()},components:{headTop:o.a},mounted:function(){this.getBaiduMap();new c.a(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})},methods:{getHouseDetail:function(){var t=this;this.cityId=this.$route.params.cityId,this.houseId=this.$route.params.houseId,this.userType=this.$route.params.userType,this.houseType=this.$route.params.houseType;var e={cityId:this.cityId,houseId:this.houseId,userType:this.userType,houseType:this.houseType};l.a.getHouseDetail(e).then(function(e){if(e.data.success){console.log(e.data.result);var s=e.data.result;t.houseDetail=s,console.log("houseDetail"),console.log(t.houseDetail),t.title=s.title,t.price=s.price,t.buildarea=s.buildarea,t.avgprice=s.avgprice,t.forward=s.forward,t.sell_type=s.sell_type,t.floor=s.floor,t.block_name=s.block_name,t.createtime=s.createtime,t.fitment=s.fitment,t.buildyear=s.buildyear,t.maplng=s.communityLocation.b_map_x,t.maplat=s.communityLocation.b_map_y,t.imgHouseAttr=s.img,t.houseId=s.id,t.cityId=s.cityId,t.blockId=s.block_id,"0"==s.attentionState?t.attentionStatus=!1:"1"==s.attentionState&&(t.attentionStatus=!0),t.center.lng=s.communityLocation.b_map_x,t.center.lat=s.communityLocation.b_map_y;var a=s.disrictName+","+s.streetName,i=new r.a.Point(t.maplng,t.maplat),l=new r.a.Marker(i);map.addOverlay(l),map.disableDragging(),map.centerAndZoom(i,16),map.panTo(i);var o=new r.a.Label(a,{position:i,offset:new r.a.Size(-26,0)});o.setStyle({backgroundColor:"#fff",padding:"0.5rem",border:"",fontSize:".1rem"}),map.addOverlay(o);var n=t.$store.state.userInfo.loginName,c=localStorage.getItem("comparedList_hz_"+n);if(null!=c){var m=(c=JSON.parse(c)).indexOf(t.houseId);t.compareDesc="-1"==m?"加入对比":"取消对比"}t.getCommunityDetail()}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("房源详情="+e.data.errorMessage)})},getCommunityDetail:function(){var t=this,e={blockId:this.blockId,city:this.cityId,userType:this.userType,houseType:this.houseType};l.a.getCommunityDetail(e).then(function(s){if(s.data.success){console.log("小区params"),console.log(e);var a=s.data.result;console.log("小区res"),console.log(a),t.sellList=a.houseInblock.sell.lists,t.rentList=a.houseInblock.rent.lists,t.communityAround=a.communityAround}else t.$message.error(s.data.errorMessage)}).catch(function(e){t.$message.error("小区详情"+e.data.errorMessage)})},getBaiduMap:function(){var t=new r.a.Map("allmap");window.map=t;var e=new r.a.Point(this.maplng,this.maplat),s=new r.a.Marker(e);t.addOverlay(s),t.disableDragging(),t.centerAndZoom(e,16)},clickSell:function(){this.isSell=!0,this.isRent=!1,this.sellList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clickRent:function(){this.isSell=!1,this.isRent=!0,this.rentList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},attention:function(){var t=this;if(console.log(this.attentionStatus),!this.attentionStatus){var e={cityId:this.cityId,businessNum:this.houseId,businessType:"二手房",sysType:1,attentionState:1};return console.log(e),void l.a.attention(e).then(function(e){console.log(e.data),e.data.success&&(console.log("关注成功"),t.attentionStatus=!0)}).catch(function(t){console.log(t)})}if(this.attentionStatus){var s={cityId:this.cityId,businessNum:this.houseId,businessType:"二手房",sysType:1,attentionState:0};l.a.attention(s).then(function(e){console.log(e.data),e.data.success&&(console.log("取消关注"),t.attentionStatus=!1)}).catch(function(t){console.log(t)})}},getHomeDetail:function(t){this.houseId=t,this.houseType="1",this.getHouseDetail()},getCompareNum:function(){var t=this.$store.state.userInfo.loginName,e=localStorage.getItem("comparedList_hz_"+t);console.log(localStorage),console.log(e),this.compareNum=null!=e?JSON.parse(e).length:""},addCompare:function(){console.log(this.$store);var t,e=this.$store.state.userInfo.loginName;if(t=localStorage.getItem("comparedList_hz_"+e),console.log("listyuan"),console.log(t),"加入对比"==this.compareDesc)null!=t?(t=JSON.parse(t)).push(this.houseId):t=[this.houseId],console.log("listhou"),console.log(t),localStorage.setItem("comparedList_hz_"+e,i()(t)),this.compareDesc="取消对比",this.getCompareNum();else if("取消对比"==this.compareDesc){var s=(t=JSON.parse(t)).indexOf(this.houseId);t.splice(s,1),localStorage.setItem("comparedList_hz_"+e,i()(t)),this.compareDesc="加入对比",this.getCompareNum()}}}},p={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"houseBuyDetail"},[a("head-top",{attrs:{goBack:"true"}}),t._v(" "),a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[a("span",{staticClass:"village"},[t._v(t._s(t.block_name))]),t._v(" "),t.attentionStatus?a("i",{staticClass:"icon iconfont xl",on:{click:function(e){t.attention()}}},[t._v("")]):a("i",{staticClass:"icon iconfont xl",on:{click:function(e){t.attention()}}},[t._v("")]),t._v(" "),a("div",{staticClass:"badge"},[a("router-link",{attrs:{to:{name:"houseCompared",params:{}}}},[a("img",{attrs:{src:s("R+vx")}}),t._v(" "),""!=t.compareNum?a("div",{staticClass:"div2"},[t._v(t._s(t.compareNum))]):t._e()])],1)])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"imgDiv"},[a("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:t.imgHouseAttr}}}},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.imgHouseAttr,function(t){return a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:t}})])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})])])],1),t._v(" "),a("div",{staticClass:"house-content"},[a("h2",{staticClass:"villageName"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"div-houseDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.price))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("售价")])])],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("el-row",[a("div",{staticClass:"div-line"})])],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.buildarea))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("建筑面积")])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"divide"}),t._v(" "),a("div",{staticClass:"detailDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("单价： "+t._s(t.avgprice))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("朝向： "+t._s(t.forward))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("类型： "+t._s(t.sell_type))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("楼层： "+t._s(t.floor))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("小区： "),a("span",{staticStyle:{color:"#ffc16b"}},[t._v(t._s(t.block_name))])])])],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("挂牌： "+t._s(t.createtime))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("装修： "+t._s(t.fitment))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("年代： "+t._s(t.buildyear))])])],1)],1)],1),t._v(" "),a("div",{staticClass:"homeMap"},[a("router-link",{attrs:{to:{name:"mapIncrease",params:{x:t.center.lng,y:t.center.lat}}}},[a("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),t._v(" "),a("div",{staticClass:"sameArea"},[a("el-row",[a("el-col",{attrs:{span:16}},[a("p",[t._v("同小区房源")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isSell},on:{click:function(e){t.clickSell()}}},[t._v("在售")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isRent},on:{click:function(e){t.clickRent()}}},[t._v("在租")])])],1),t._v(" "),a("ul",{ref:"ulDisplay",staticClass:"category-head"},[t._l(t.sellList,function(e){return t.isSell?a("li",{on:{click:function(s){t.getHomeDetail(e.id)}}},[a("img",{attrs:{src:e.pic}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))]),t._v("   "+t._s(e.avgprice))])]):t._e()}),t._v(" "),t._l(t.rentList,function(e){return t.isRent?a("li",[a("router-link",{attrs:{to:{name:"houseRentDetail",params:{cityId:t.cityId,houseId:t.houseId,userType:t.userType,houseType:t.houseType}}}},[a("img",{attrs:{src:e.pic}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))])])])],1):t._e()})],2)],1),t._v(" "),a("div",{ref:"sameSell",staticClass:"sameSells"},[t.isSell?a("div",[t._v("\n        同小区在售"+t._s(t.sellList.length)+"套\n      ")]):t.isRent?a("div",[t._v("\n        同小区在租"+t._s(t.rentList.length)+"套\n      ")]):t._e()]),t._v(" "),a("div",{staticClass:"divide2"}),t._v(" "),a("div",{staticClass:"sameArea"},[a("p",[t._v("周边小区")]),t._v(" "),a("ul",{staticClass:"category-head"},t._l(t.communityAround,function(e){return a("li",[a("router-link",{attrs:{to:{name:"villageDetail",params:{cityId:t.cityId,houseId:t.houseId,userType:t.userType,houseType:t.houseType}}}},[a("img",{attrs:{src:e.surface_img?e.surface_img:s("dNrd")}}),a("br"),t._v(" "),a("p",{staticStyle:{color:"#885D24"}},[t._v(t._s(e.build_date)+"年建")]),t._v(" "),a("p",[t._v(t._s(e.cmt_name))]),t._v(" "),a("p",{staticClass:"p-bottom"},[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.averprice)+"元/平")])])])],1)}))]),t._v(" "),a("div",{staticClass:"empty"}),t._v(" "),a("div",{staticClass:"button-bottom"},[a("el-row",{staticClass:"el-bt"},[a("el-col",{staticClass:"grid-bt-content bg-bt-light",attrs:{span:8}},[a("div",{on:{click:function(e){t.addCompare()}}},[a("img",{attrs:{src:s("dNrd")}}),a("br"),a("span",{staticClass:"span-icon"},[t._v(t._s(t.compareDesc))])])]),t._v(" "),a("router-link",{attrs:{to:{name:"houseAppointment",params:{homes:t.houseDetail}}}},[a("el-col",{staticClass:"grid-bt-content bg-bt-m centenr",attrs:{span:8}},[a("div",[a("span",{staticClass:"span-icon"},[t._v("预约看房")])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-bt-content bg-bt centenr"},[a("span",[t._v("联系经纪人")])])])],1)],1)]),t._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[]};var d=s("VU/8")(m,p,!1,function(t){s("xLd5")},"data-v-36222099",null);e.default=d.exports},"R+vx":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0ODMxNDQ3ODBGOTExRThBRTJEQTY4NTg0M0NEQjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0ODMxNDQ4ODBGOTExRThBRTJEQTY4NTg0M0NEQjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDQ4MzE0NDU4MEY5MTFFOEFFMkRBNjg1ODQzQ0RCMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ4MzE0NDY4MEY5MTFFOEFFMkRBNjg1ODQzQ0RCMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hW6rWAAABNklEQVR42uyajQ2CMBCFrWEAZAJHcASZQJxAHcFJXMEVnABGcAQmQDbAq2mTSlLAtso1vksuBLn+fFx5vSaKrusWMdtyEblFD5D4dpBlmXmbkh/Jd5bwG/mVvNU/NE0zL0Bv8iX5ZiBmS34gz00ILgAXNXk5sTN53Xu+NmLk9RRiUOGrQsYSeqgsyLdbDWSgVJCrEEsoJIDuSIw0eYvzBYCMAgAAAIi8lAhpJMmTShGS3pbdPqAmP1aKSLvLzVJDcMqAUynCCaBQ1z293cqS7VplqdAAnD7iVC0pWx1lPkshowD4xj7gosNsACbq8OtISLE5F4hk7iNhSAAnHeb0ETvpMFQIAAAAAAAAAAAAAAAAOFKaNX/p2adX+0/HTyzHRh/7aXsTIPcceJb2Av+VAMCfAzwFGADKGW+e31gFEQAAAABJRU5ErkJggg=="},xLd5:function(t,e){}});
//# sourceMappingURL=7.94c211b85f26696ec6e4.js.map