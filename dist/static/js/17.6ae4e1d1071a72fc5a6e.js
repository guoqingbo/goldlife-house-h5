webpackJsonp([17],{"94qj":function(t,e){},oble:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});s("yvAY");var a=s("fc0N"),n=s.n(a),o=(s("pxwZ"),{name:"lookHouseReservation",data:function(){return{reservationInfo:"",state:{1:"预约中",2:"预约中",3:"预约失败",4:"待看房",5:"看房结束"}}},created:function(){this.reservationInfo=this.$route.query.data,console.log(this.reservationInfo)},mounted:function(){},methods:{phoneNum:function(){var t=this;n()({title:"呼叫",message:this.reservationInfo.phone,showCancelButton:!0}).then(function(e){"confirm"==e&&(window.location.href="tel://"+t.reservationInfo.phone)})}},filters:{publishTime:function(t){if(t){t.toString().length<11&&(t*=1e3);var e=(new Date).getTime(),s=e-e%864e5-t,a=Math.ceil(s/864e5);if(s<=0){var n=new Date(t);return n.getFullYear()+"年"+(n.getMonth()+1<10?"0"+(n.getMonth()+1):n.getMonth()+1)+"月"+(n.getDate()<10?"0"+n.getDate():n.getDate())+"日发布"}return a>15?"15天以上":a+"天前发布"}},formatPrice:function(t){if(!t)return"0.00";var e=t.toString();if(e.indexOf(".")>=0){var s=e.split(".")[0],a=e.split(".")[1];return s.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")+"."+a}return e.replace(/(\d)(?=(?:\d{3})+$)/g,"$1,")}}}),r={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"res-box"},[s("h1",{staticClass:"nav-header"},[s("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])])]),t._v(" "),void 0!=t.reservationInfo.targetHouse?s("div",{staticClass:"reservaInfo"},[s("h2",[t._v("看房预约")]),t._v(" "),s("div",{staticClass:"info"},[s("div",{staticClass:"info_left"},[s("p",[t._v(t._s(t._f("moment")(t.reservationInfo.time/1e3,"MM月DD日 HH:mm")))]),t._v(" "),0==t.reservationInfo.lineType?s("p",[t._v("在 "),s("span",[t._v(t._s(t.reservationInfo.targetHouse.block_name))]),t._v(" 约看")]):s("p",[t._v("在 "),s("span",[t._v("线下房源")]),t._v(" 约看")])]),t._v(" "),s("div",{staticClass:"info_right"},[1==t.reservationInfo.state||2==t.reservationInfo.state?s("p",{staticClass:"res"}):t._e(),t._v(" "),3==t.reservationInfo.state?s("p",{staticClass:"err"}):s("p",{staticClass:"vit"}),t._v(" "),s("p",[t._v(t._s(t.state[t.reservationInfo.state]))])])])]):t._e(),t._v(" "),void 0!=t.reservationInfo.targetHouse?s("div",{staticClass:"box"},[s("div",{staticClass:"house-detail"},[s("img",{attrs:{src:t.reservationInfo.targetHouse.pic?t.reservationInfo.targetHouse.pic:"./static/bg_smallphotonormal@2x.png"}}),t._v(" "),0==t.reservationInfo.lineType?s("div",[s("h3",[t._v(t._s(t.reservationInfo.targetHouse.block_name)+" "+t._s(t.reservationInfo.targetHouse.room)+"室"+t._s(t.reservationInfo.targetHouse.hall)+"厅"+t._s(t.reservationInfo.targetHouse.toilet)+"卫")]),t._v(" "),s("p",{staticClass:"describ"},[t._v(t._s(t.reservationInfo.targetHouse.describe))]),t._v(" "),s("p",{staticClass:"price"},[s("span",[t._v(t._s(t.reservationInfo.targetHouse.price)+"万")]),t._v(" "),s("span",[t._v("  "+t._s(t._f("formatPrice")(t.reservationInfo.targetHouse.avgprice))+" 元/平")])]),t._v(" "),s("p",{staticClass:"dayT"},[t._v(t._s(t._f("publishTime")(t.reservationInfo.targetHouse.create_time)))])]):s("div",{staticClass:"lineDown"},[s("h3",[t._v("线下房源")]),t._v(" "),s("p",[t._v(t._s(t.reservationInfo.num))])])]),t._v(" "),1==t.reservationInfo.state||2==t.reservationInfo.state?s("p",{staticClass:"tips"},[t._v("带看经纪人将与您核实确认约看时间地点，确认预约。")]):3==t.reservationInfo.state?s("p",{staticClass:"tips"},[t._v("经纪人与您核实预约情况反映，本次预约失败。感谢您的关注，请继续寻找合适房源")]):s("p",{staticClass:"tips"},[t._v("您已预约成功，如需修改预约时间请致电经纪人。")])]):t._e(),t._v(" "),s("p",{staticClass:"contact",on:{click:t.phoneNum}},[t._v("一键电联经纪人")])])])},staticRenderFns:[]};var i=s("vSla")(o,r,!1,function(t){s("94qj")},"data-v-216540aa",null);e.default=i.exports}});
//# sourceMappingURL=17.6ae4e1d1071a72fc5a6e.js.map