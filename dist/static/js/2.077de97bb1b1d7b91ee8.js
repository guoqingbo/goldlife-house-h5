webpackJsonp([2],{"31+t":function(t,e){},AKZh:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("pxwZ"),l=s("ra3+"),i=s("jkKj"),o=s.n(i),n=s("DNVT"),c={data:function(){return{type:"tab",address_detail:null,arrItem:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],sameImgAttr:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],otherImgAttr:[{imgUrl:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"},{imgUrl:"http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg"}],houseDetail:"",houseId:"1",isSell:!0,isRent:!1,title:"",price:"",buildarea:"",avgprice:"",forward:"",sell_type:"",floor:"",block_name:"",createtime:"",fitment:"",buildyear:"",maplng:"",maplat:"",center:{lng:116.40387397,lat:39.91488908},imgHouseAttr:["","",""],sellList:[],rentList:[],communityAround:[]}},created:function(){this.getHouseDetail(),this.getCommunityDetail()},components:{headTop:l.a},mounted:function(){this.getBaiduMap();new n.a(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})},methods:{getHouseDetail:function(){var t=this;a.a.getHouseDetail({cityId:"hz",houseId:"1",userType:"1",houseType:"1"}).then(function(e){if(e.data.success){console.log(e.data.result);var s=e.data.result;t.houseDetail=s,console.log("houseDetail"),console.log(t.houseDetail),t.title=s.title,t.price=s.price,t.buildarea=s.buildarea,t.avgprice=s.avgprice,t.forward=s.forward,t.sell_type=s.sell_type,t.floor=s.floor,t.block_name=s.block_name,t.createtime=s.createtime,t.fitment=s.fitment,t.buildyear=s.buildyear,t.maplng=s.communityLocation.b_map_x,t.maplat=s.communityLocation.b_map_y,t.imgHouseAttr=s.img,t.center.lng=s.communityLocation.b_map_x,t.center.lat=s.communityLocation.b_map_y,console.log(t.maplng),console.log(t.center.lng)}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("房源详情="+e.data.errorMessage)})},getCommunityDetail:function(){var t=this;a.a.getCommunityDetail({blockId:"1",city:"hz",userType:"1",houseType:"1"}).then(function(e){if(e.data.success){console.log("小区"),console.log(e.data.result);var s=e.data.result;t.sellList=s.houseInblock.sell.lists,t.rentList=s.houseInblock.rent.lists,console.log(t.sellList),t.communityAround=s.communityAround}else t.$message.error(e.data.errorMessage)}).catch(function(e){t.$message.error("小区详情"+e.data.errorMessage)})},getBaiduMap:function(){var t=this,e=new o.a.Map("allmap");console.log(this),console.log(this.center.lng);var s=new o.a.Point(this.center.lng,this.center.lat);e.centerAndZoom(s,10),e.enableScrollWheelZoom(!0),e.enableDoubleClickZoom(!0),(new o.a.Geolocation).getCurrentPosition(function(s){if(console.log(s.point),s.point){var a=new o.a.Point(t.center.lng,t.center.lat),l=new o.a.Marker(a);e.addOverlay(l),e.panTo(a),e.centerAndZoom(a,16);var i=new o.a.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});e.addControl(i);var n={offset:new o.a.Size(1,28)},c=new o.a.ScaleControl(n);e.addControl(c),e.addOverlay(new o.a.Marker(a))}},{enableHighAccuracy:!0})},clickSell:function(){this.isSell=!0,this.isRent=!1,this.sellList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},clickRent:function(){this.isSell=!1,this.isRent=!0,this.rentList.length>0?(this.$refs.ulDisplay.style.display="",this.$refs.sameSell.style.marginTop="16rem"):(this.$refs.ulDisplay.style.display="none",this.$refs.sameSell.style.marginTop="2rem")},attention:function(){var t={cityId:"hz",businessNum:"hz"+this.houseId,businessType:1,sysType:1,userId:1,attentionState:1};a.a.attention(t).then(function(t){console.log(t.data),t.data.success&&console.log("关注成功")}).catch(function(t){console.log(t)})},getHomeDetail:function(){console.log("房源详情")}}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"containt"},[a("head-top",{attrs:{goBack:"true"}}),t._v(" "),a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),a("span",{staticClass:"header-title"},[a("span",{staticClass:"village"},[t._v(t._s(t.block_name))]),a("i",{staticClass:"icon iconfont xl",on:{click:function(e){t.attention()}}},[t._v("")]),t._v(" "),t._m(0)])]),t._v(" "),a("div",{staticClass:"content"},[a("div",{staticClass:"imgDiv"},[a("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:t.imgHouseAttr}}}},[a("div",{staticClass:"swiper-container"},[a("div",{staticClass:"swiper-wrapper"},t._l(t.imgHouseAttr,function(t){return a("div",{staticClass:"swiper-slide"},[a("img",{attrs:{src:t}})])})),t._v(" "),a("div",{staticClass:"swiper-pagination"})])])],1),t._v(" "),a("div",{staticClass:"house-content"},[a("h2",{staticClass:"villageName"},[t._v(t._s(t.title))]),t._v(" "),a("div",{staticClass:"div-houseDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.price))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("售价")])])],1),t._v(" "),a("el-col",{attrs:{span:1}},[a("el-row",[a("div",{staticClass:"div-line"})])],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-houseDes"},[a("p",{staticStyle:{color:"red"}},[t._v(t._s(t.buildarea))])]),t._v(" "),a("el-row",{staticClass:"el-houseDes"},[a("p",{staticClass:"des"},[t._v("建筑面积")])])],1)],1)],1)]),t._v(" "),a("div",{staticClass:"divide"}),t._v(" "),a("div",{staticClass:"detailDes"},[a("el-row",[a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("单价： "+t._s(t.avgprice))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("朝向： "+t._s(t.forward))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("类型： "+t._s(t.sell_type))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("楼层： "+t._s(t.floor))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("小区： "),a("span",{staticStyle:{color:"#ffc16b"}},[t._v(t._s(t.block_name))])])])],1),t._v(" "),a("el-col",{attrs:{span:11}},[a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("挂牌： "+t._s(t.createtime))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("装修： "+t._s(t.fitment))])]),t._v(" "),a("el-row",{staticClass:"el-detailDes"},[a("p",[t._v("年代： "+t._s(t.buildyear))])])],1)],1)],1),t._v(" "),a("div",{staticClass:"homeMap"},[a("router-link",{attrs:{to:{name:"mapIncrease",params:{x:t.center.lng,y:t.center.lat}}}},[a("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),t._v(" "),a("div",{staticClass:"sameArea"},[a("el-row",[a("el-col",{attrs:{span:16}},[a("p",[t._v("同小区房源")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isSell},on:{click:function(e){t.clickSell()}}},[t._v("在售")])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("p",{class:{"class-color":t.isRent},on:{click:function(e){t.clickRent()}}},[t._v("在租")])])],1),t._v(" "),a("ul",{ref:"ulDisplay",staticClass:"category-head"},t._l(t.sellList,function(e){return t.isSell?a("li",{on:{click:function(e){t.getHomeDetail()}}},[a("img",{attrs:{src:e.pic}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))]),t._v("   "+t._s(e.avgprice))])]):t.isRent?t._l(t.rentList,function(e){return a("li",[a("img",{attrs:{src:e.pic}}),a("br"),t._v(" "),a("p",[t._v(t._s(e.room_type)+"|"+t._s(e.buildarea)+"|"+t._s(e.forward))]),t._v(" "),a("p",[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.price))])])])}):t._e()}))],1),t._v(" "),a("div",{ref:"sameSell",staticClass:"sameSells"},[t.isSell?a("div",[t._v("\n        同小区在售"+t._s(t.sellList.length)+"套\n      ")]):t.isRent?a("div",[t._v("\n        同小区在租"+t._s(t.rentList.length)+"套\n      ")]):t._e()]),t._v(" "),a("div",{staticClass:"divide2"}),t._v(" "),a("div",{staticClass:"sameArea"},[a("p",[t._v("周边小区")]),t._v(" "),a("ul",{staticClass:"category-head"},t._l(t.communityAround,function(e){return a("li",[a("img",{attrs:{src:e.surface_img?e.surface_img:s("dNrd")}}),a("br"),t._v(" "),a("p",{staticStyle:{color:"#885D24"}},[t._v(t._s(e.build_date)+"年建")]),t._v(" "),a("p",[t._v(t._s(e.cmt_name))]),t._v(" "),a("p",{staticClass:"p-bottom"},[a("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(e.averprice)+"元/平")])])])}))]),t._v(" "),a("div",{staticClass:"empty"}),t._v(" "),a("div",{staticClass:"button-bottom"},[a("el-row",{staticClass:"el-bt"},[a("el-col",{staticClass:"grid-bt-content bg-bt-light",attrs:{span:8}},[a("div",[a("img",{attrs:{src:s("dNrd")}}),a("br"),a("span",{staticClass:"span-icon"},[t._v("加入对比")])])]),t._v(" "),a("router-link",{attrs:{to:{name:"houseAppointment",params:{homes:t.houseDetail}}}},[a("el-col",{staticClass:"grid-bt-content bg-bt-m centenr",attrs:{span:8}},[a("div",[a("span",{staticClass:"span-icon"},[t._v("预约看房")])])])],1),t._v(" "),a("el-col",{attrs:{span:8}},[a("div",{staticClass:"grid-bt-content bg-bt centenr"},[a("span",[t._v("联系经纪人")])])])],1)],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"badge"},[e("img",{attrs:{src:s("R+vx")}}),this._v(" "),e("div",{staticClass:"div2"},[this._v("4")])])}]};var m=s("VU/8")(c,r,!1,function(t){s("31+t")},"data-v-54497e74",null);e.default=m.exports},"R+vx":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkQ0ODMxNDQ3ODBGOTExRThBRTJEQTY4NTg0M0NEQjFBIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkQ0ODMxNDQ4ODBGOTExRThBRTJEQTY4NTg0M0NEQjFBIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6RDQ4MzE0NDU4MEY5MTFFOEFFMkRBNjg1ODQzQ0RCMUEiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6RDQ4MzE0NDY4MEY5MTFFOEFFMkRBNjg1ODQzQ0RCMUEiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4hW6rWAAABNklEQVR42uyajQ2CMBCFrWEAZAJHcASZQJxAHcFJXMEVnABGcAQmQDbAq2mTSlLAtso1vksuBLn+fFx5vSaKrusWMdtyEblFD5D4dpBlmXmbkh/Jd5bwG/mVvNU/NE0zL0Bv8iX5ZiBmS34gz00ILgAXNXk5sTN53Xu+NmLk9RRiUOGrQsYSeqgsyLdbDWSgVJCrEEsoJIDuSIw0eYvzBYCMAgAAAIi8lAhpJMmTShGS3pbdPqAmP1aKSLvLzVJDcMqAUynCCaBQ1z293cqS7VplqdAAnD7iVC0pWx1lPkshowD4xj7gosNsACbq8OtISLE5F4hk7iNhSAAnHeb0ETvpMFQIAAAAAAAAAAAAAAAAOFKaNX/p2adX+0/HTyzHRh/7aXsTIPcceJb2Av+VAMCfAzwFGADKGW+e31gFEQAAAABJRU5ErkJggg=="},dNrd:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOkJFQzAzQjE4ODBGOTExRThCMDYyRjg1QTFEQzdGRjk4IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOkJFQzAzQjE5ODBGOTExRThCMDYyRjg1QTFEQzdGRjk4Ij4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6QkVDMDNCMTY4MEY5MTFFOEIwNjJGODVBMURDN0ZGOTgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6QkVDMDNCMTc4MEY5MTFFOEIwNjJGODVBMURDN0ZGOTgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz7+35f3AAABkUlEQVR42uxa0W3CMBBNKgZIJ2hGSBeI0gnKBoX/SA0TBCaAj/yXDWADoixQNmg2ACYw5+SCrMhRGxlX5/ZOerKwwfLj7t6dCb4QwnPZHjzHzXkCE+MdqtTs83ExtO8nrj/bJWDPIs4BJuBEEt/D2oSNBtb6heqoJjZ74C6mk8rum48Ln5P4h7YEfAGEAvk6cyGEdoCpZj4ErAFPgAVVDyTK4ecAX0F36AzJjLEjwroHEhw3gG1vTc69oURKArVRYlvOgcvAfOl6Jb5wK8G9kD0LoOJGml7n7IIHZljoDj2cgNSSOgEpvR+NB1qtLxGd7udAYkY5hN5x3EK4zHtNXIbVO9fUFVIekLbSFLCN0oaQDaEAx9p0oz8qo1U6xRhUJU5K275p0EbI3O8XsvbwO80dNUDpO8B7AsqVeH1TCM97bK507bXuBb0QIRGCBKo0xOw/N/KmhkpclEp//0rVA6FymdBZTS2JuRtlAkyACTABJsAEKP4qkWiejHxnOWKMCdPHtM57wOf/SjCBf07gKsAAp1ZgsnFjE2sAAAAASUVORK5CYII="}});
//# sourceMappingURL=2.077de97bb1b1d7b91ee8.js.map