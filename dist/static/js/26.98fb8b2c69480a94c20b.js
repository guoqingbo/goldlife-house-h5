webpackJsonp([26],{Kskc:function(i,t){},miXN:function(i,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=a("ra3+"),s=a("jkKj"),e=a.n(s),r={data:function(){return{lngx:106.40387397,laty:39.91488908,walking:null,transit:null,driving:null,isWalk:!1,isBus:!1,isDriver:!1}},created:function(){},components:{headTop:n.a},mounted:function(){this.getBaiduMap()},methods:{getBaiduMap:function(){var i=new e.a.Map("allmap");window.map=i,this.lngx=this.$route.params.x,this.laty=this.$route.params.y;var t=new e.a.Point(this.lngx,this.laty);window.point=t,i.enableScrollWheelZoom(!0),i.enableDoubleClickZoom(!0);var a=new e.a.Marker(t);i.addOverlay(a),i.panTo(t),i.centerAndZoom(t,16);var n=new e.a.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:1});i.addControl(n);var s={offset:new e.a.Size(1,28)},r=new e.a.ScaleControl(s);i.addControl(r);var l=void 0;(new e.a.Geolocation).getCurrentPosition(function(i){console.log(i.point),i.point&&(l=i.point,window.point2=l)},{enableHighAccuracy:!0})},walk:function(){null!=this.transit&&(this.transit.clearResults(),this.isBus=!1),null!=this.driving&&(this.driving.clearResults(),this.isDriver=!1),this.walking=new e.a.WalkingRoute(map,{renderOptions:{map:map,panel:"r-result",autoViewport:!0}}),this.walking.search(point,point2),this.isWalk=!0},bus:function(){null!=this.walking&&(this.walking.clearResults(),this.isWalk=!1),null!=this.driving&&(this.driving.clearResults(),this.isDriver=!1),this.transit=new e.a.TransitRoute(map,{renderOptions:{map:map,panel:"r-result",autoViewport:!0}}),this.transit.search(point,point2),this.isBus=!0},driver:function(){null!=this.walking&&(this.walking.clearResults(),this.isWalk=!1),null!=this.transit&&(this.transit.clearResults(),this.isBus=!1),this.driving=new e.a.DrivingRoute(map,{renderOptions:{map:map,panel:"r-result",autoViewport:!0}}),this.driving.search(point,point2),this.isDriver=!0}}},l={render:function(){var i=this,t=i.$createElement,a=i._self._c||t;return a("div",{staticClass:"mapIncrease"},[a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(t){i.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[i._v("")])]),i._v(" "),a("span",{staticClass:"header-title"},[i._v("\n      百度地图\n    ")])]),i._v(" "),a("div",{ref:"search",staticClass:"search"},[a("div",{staticStyle:{width:"100%",height:"0.1rem","background-color":"#424242"}}),i._v(" "),a("span",{class:{"class-color":i.isWalk},on:{click:function(t){i.walk()}}},[i._v("步行")]),a("span",{class:{"class-color":i.isBus},on:{click:function(t){i.bus()}}},[i._v("公交")]),a("span",{class:{"class-color":i.isDriver},on:{click:function(t){i.driver()}}},[i._v("驾车")])]),i._v(" "),i._m(0),i._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[function(){var i=this.$createElement,t=this._self._c||i;return t("div",{staticClass:"homeMap"},[t("div",{staticClass:"allmap",attrs:{id:"allmap"}})])}]};var o=a("VU/8")(r,l,!1,function(i){a("Kskc")},"data-v-22e3120f",null);t.default=o.exports}});
//# sourceMappingURL=26.98fb8b2c69480a94c20b.js.map