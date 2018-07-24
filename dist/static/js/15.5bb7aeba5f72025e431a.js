webpackJsonp([15],{HTDK:function(a,t,e){"use strict";Object.defineProperty(t,"__esModule",{value:!0});e("OgVB");var s=e("/Lyv"),n=e.n(s),i=e("pxwZ"),o=e("ra3+"),r=e("jkKj"),c=e.n(r),l=e("DNVT"),p={name:"newHouseSharePage",data:function(){return{houseData:{},maplng:"",maplat:"",center:{lng:120.12,lat:30.16},address:""}},created:function(){this.getNewHouseInfo()},mounted:function(){this.getBaiduMap()},methods:{getNewHouseInfo:function(){var a=this,t=this.$route.query.buildingId;i.a.newHouseSharePage(t).then(function(t){t.data.success?(a.houseData=t.data.result,a.maplng=t.data.result.mapLongitude,a.maplat=t.data.result.mapLatitude,a.center.lng=t.data.result.mapLongitude,a.center.lat=t.data.result.mapLatitude,a.address=t.data.result.area+","+t.data.result.address,a.resetMap(),a.$nextTick(function(){new l.a(".swiper-container",{loop:!0,autoplay:{delay:3e3},pagination:{el:".swiper-pagination",type:"fraction"}})})):a.$toast({message:t.data.errorMessage,position:"middle",duration:3e3})}).catch(function(a){console.log(a)})},getBaiduMap:function(){var a=new c.a.Map("allmap");window.map=a;var t=new c.a.Point(this.maplng,this.maplat),e=new c.a.Marker(t);a.addOverlay(e),a.disableDragging(),a.centerAndZoom(t,16)},resetMap:function(){var a=new c.a.Point(this.maplng,this.maplat),t=new c.a.Marker(a);map.addOverlay(t),map.disableDragging(),map.centerAndZoom(a,16),map.panTo(a);var e=new c.a.Label(this.address,{position:a,offset:new c.a.Size(-26,0)});e.setStyle({backgroundColor:"#fff",padding:"0.5rem",border:"",fontSize:".1rem"}),map.addOverlay(e)},phoneNum:function(){var a=this;n()({title:"呼叫",message:this.houseData.contactPhone,showCancelButton:!0}).then(function(t){"confirm"==t&&(window.location.href="tel://"+a.reservationInfo.phone)})},lookAll:function(){this.$router.push({path:"/newHouseAllDetail",query:{data:this.houseData}})}},components:{headTop:o.a}},u={render:function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("div",[s("div",{staticClass:"share-box"},[s("head-top"),a._v(" "),a._m(0),a._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"imgDiv"},[s("router-link",{attrs:{to:{name:"imgIncrease",params:{imgs:a.houseData.screenPic,title:a.houseData.buildName}}}},[a.houseData.screenPic?s("div",{staticClass:"swiper-container"},[s("div",{staticClass:"swiper-wrapper"},a._l(a.houseData.screenPic,function(a){return s("div",{staticClass:"swiper-slide"},[s("img",{attrs:{src:a}})])})),a._v(" "),s("div",{staticClass:"swiper-pagination"})]):s("div",[s("img",{attrs:{src:e("1Dch")}})])]),a._v(" "),s("div",{staticClass:"blockInfo"},[s("h2",[a._v(a._s(a.houseData.buildName))]),a._v(" "),s("p",{staticClass:"addr"},[a._v("地址："),s("span",[a._v(a._s(a.houseData.address))])]),a._v(" "),s("p",{staticClass:"price"},[s("span",[a._v(a._s(a.houseData.avgPrice)+"元/平")]),a._v(" "),s("span",[a._v(a._s(a.houseData.openTime))])]),a._v(" "),a._m(1)])],1),a._v(" "),s("div",{staticClass:"houseInfo"},[s("h3",{staticClass:"houseInfo-title"},[s("span",[a._v("楼盘信息")]),a._v(" "),s("span",{on:{click:a.lookAll}},[a._v("查看全部"),s("i",{staticClass:"icon iconfont"},[a._v("")])])]),a._v(" "),s("p",[a._v("开发商："),s("span",[a._v(a._s(a.houseData.company))])]),a._v(" "),s("p",[a._v("最新开盘："),s("span",[a._v(a._s(a.houseData.openTime))])]),a._v(" "),s("p",[a._v("交房时间："),s("span",[a._v(a._s(a.houseData.finishTime?a.houseData.finishTime:"暂无信息"))])]),a._v(" "),s("p",[a._v("产权年限："),s("span",[a._v(a._s(a.houseData.propertyYear?a.houseData.propertyYear:"暂无信息"))])]),a._v(" "),s("p",[a._v("许可证："),s("span",[a._v(a._s(a.houseData.licence))])])]),a._v(" "),s("div",{staticClass:"homeMap"},[s("h3",[a._v("楼盘地址")]),a._v(" "),s("router-link",{attrs:{to:{name:"mapIncrease",params:{x:a.center.lng,y:a.center.lat}}}},[s("div",{staticClass:"allmap",attrs:{id:"allmap"}})])],1),a._v(" "),s("div",{staticClass:"remark"},[s("h3",[a._v("备注")]),a._v(" "),s("p",[a._v(a._s(a.houseData.remark))])]),a._v(" "),s("p",{staticClass:"contact",on:{click:a.phoneNum}},[a._v("电话咨询")])])],1)])},staticRenderFns:[function(){var a=this.$createElement,t=this._self._c||a;return t("h1",{staticClass:"nav-header"},[t("span",{staticClass:"header-title"},[this._v("新房推荐")])])},function(){var a=this.$createElement,t=this._self._c||a;return t("p",{staticClass:"price_name"},[t("span",[this._v("均价")]),this._v(" "),t("span",[this._v("开盘时间")])])}]};var d=e("VU/8")(p,u,!1,function(a){e("hAOh")},"data-v-76a0c4ac",null);t.default=d.exports},hAOh:function(a,t){}});
//# sourceMappingURL=15.5bb7aeba5f72025e431a.js.map