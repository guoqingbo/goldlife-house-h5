webpackJsonp([11],{"2EoU":function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s("pxwZ"),i={data:function(){return{pickerOptions0:{disabledDate:function(e){return e.getTime()<Date.now()}},name:"",date:"",phone:"",inputLength:"",dateValue:"",desc:"",brokerId:"",houseId:"",verCode:"",datestamp:"",pickerValue:"",startDate:new Date((new Date).setHours((new Date).getHours()+1)),isOriginHei:!0,screenHeight:document.documentElement.clientHeight,originHeight:document.documentElement.clientHeight,pic:""}},watch:{name:function(){var e=this.name.length,t=1.7*parseInt(e);this.$refs.name.style.width=t>0?t+"rem":"5rem"},phone:function(){var e=this.phone.length,t=parseInt(e);this.$refs.phone.style.width=t>0?t+"rem":"12rem"},screenHeight:function(e){this.originHeight>e+100?this.isOriginHei=!1:this.isOriginHei=!0}},created:function(){if(console.log(this.$route.params.homes),null==this.$route.params.homes)this.$router.push({name:"home",params:{}});else{var e=this.$route.params.homes.img;null!=e&&e.length>0&&(this.pic=e[0]),this.phone=this.$store.state.userInfo.loginName}},components:{headTop:s("ra3+").a},mounted:function(){var e=this;window.onresize=function(){e.screenHeight=document.documentElement.clientHeight}},methods:{openPicker:function(){this.$refs.picker.open()},handleConfirm:function(e){this.dateValue=this.getDate(e),console.log(this.dateValue)},getDate:function(e){var t=e.getFullYear(),s=e.getMonth()+1,a=e.getDate();s>=1&&s<=9&&(s="0"+s),a>=0&&a<=9&&(a="0"+a);var i=e.getHours();i>=0&&i<=9&&(i="0"+i);var n=e.getMinutes();return n>=0&&n<=9&&(n="0"+n),t+"/"+s+"/"+a+" "+i+":"+n},getCode:function(){var e=this,t=60,s=this.$refs.button,i=setInterval(function(){t--,s.innerHTML=t+"秒",s.disabled=" disabled",0===t&&(s.disabled="",s.innerHTML="重新获取",clearInterval(i))},1e3);a.a.getCode(this.phone).then(function(t){console.log(t),0==t.data.success&&e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},sendAppointment:function(){var e=this;if(this.name)if(this.dateValue){if(this.phone)if(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone))if(this.verCode)if(this.desc){var t=Date.parse(new Date(this.dateValue));this.datestamp=t,console.log(this.datestamp);var s={cityId:this.$route.params.homes.cityId,houseId:this.$route.params.homes.id,phoneNum:this.phone,verCode:this.verCode,time:this.datestamp,desc:this.desc,brokerId:this.$route.params.homes.broker_id,userName:this.name};a.a.houseAppointment(s).then(function(t){console.log(t.data),t.data.success&&(console.log("提交成功"),e.$router.push({name:"lookHouseIndex",params:{}}))}).catch(function(e){console.log(e)})}else this.$toast({message:"请填写备注",position:"bottom",duration:3e3});else this.$toast({message:"请输入验证码",position:"bottom",duration:3e3});else this.$toast({message:"手机号号码格式错误",position:"bottom",duration:3e3});else this.$toast({message:"请输入手机号",position:"bottom",duration:3e3})}else this.$toast({message:"请选择看房时间",position:"bottom",duration:3e3});else this.$toast({message:"请输入看房人姓名",position:"bottom",duration:3e3})}}},n={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"houseAppointment"},[a("h1",{staticClass:"nav-header"},[a("span",{staticClass:"go-back",on:{click:function(t){e.$router.go(-1)}}},[a("i",{staticClass:"icon iconfont go-back-icon"},[e._v("")])]),e._v(" "),a("span",{staticClass:"header-title"},[e._v("\n      看房预约\n    ")])]),e._v(" "),a("div",{staticClass:"houseDetail"},[a("li",[a("div",[a("span",{staticClass:"span-top"},[e._v(e._s(e.$route.params.homes.title))]),e._v(" "),a("br"),e._v(" "),a("span",{staticClass:"span-small"},[e._v(e._s(e.$route.params.homes.describe))]),e._v(" "),a("span",{staticClass:"span-bottom"},[a("span",{staticStyle:{color:"#e10000"}},[e._v(e._s(e.$route.params.homes.price))]),e._v("   "+e._s(e.$route.params.homes.avgprice))])]),e._v(" "),a("img",{attrs:{src:e.pic?e.pic:s("16yI")}}),a("br")])]),e._v(" "),a("div",{staticClass:"form"},[a("div",[a("div",{staticClass:"span-input centenr"},[a("span",{staticClass:"span-left "},[e._v("姓名：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],ref:"name",staticClass:"input-right name",attrs:{placeholder:"看房人"},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"span-input dark centenr",on:{click:e.openPicker}},[a("span",{staticClass:"span-left"},[e._v("看房时间：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dateValue,expression:"dateValue"}],ref:"date",staticClass:"input-right date dark",attrs:{placeholder:"请选择看房时间",disabled:"disabled"},domProps:{value:e.dateValue},on:{input:function(t){t.target.composing||(e.dateValue=t.target.value)}}}),e._v(" "),a("i",{staticClass:"icon iconfont go-back-icon i-right"},[e._v("")])]),e._v(" "),a("div",{staticClass:"span-input centenr"},[a("span",{staticClass:"span-left"},[e._v("联系方式：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.phone,expression:"phone"}],ref:"phone",staticClass:"input-right phone",attrs:{placeholder:"请填写联系方式",maxlength:"11"},domProps:{value:e.phone},on:{input:function(t){t.target.composing||(e.phone=t.target.value)}}})]),e._v(" "),a("div",{staticClass:"span-input dark centenr"},[a("span",{staticClass:"span-left"},[e._v("验证码：")]),e._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:e.verCode,expression:"verCode"}],staticClass:"yan dark",domProps:{value:e.verCode},on:{input:function(t){t.target.composing||(e.verCode=t.target.value)}}}),e._v(" "),a("button",{ref:"button",staticClass:"input-right button",on:{click:function(t){e.getCode()}}},[e._v("发送验证码")]),e._v(" "),a("br"),e._v(" "),e._m(0)]),e._v(" "),e._m(1),e._v(" "),a("div",{staticClass:"span-input dark noteDiv"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.desc,expression:"desc"}],staticClass:"span-left dark",attrs:{placeholder:"请填写备注"},domProps:{value:e.desc},on:{input:function(t){t.target.composing||(e.desc=t.target.value)}}})])]),e._v(" "),a("div",{staticClass:"datePicker"},[a("mt-datetime-picker",{ref:"picker",attrs:{type:"datetime",startDate:e.startDate,yearFormat:"{value}",monthFormat:"{value}月",dateFormat:"{value}日",hourFormat:"{value}时",minuteFormat:"{value}分"},on:{confirm:e.handleConfirm}})],1),e._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:e.isOriginHei,expression:"isOriginHei"}],staticClass:"button-bottom",on:{click:function(t){e.sendAppointment()}}},[e._v("提交")])]),e._v(" "),a("keep-alive",[a("router-view")],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"xh"},[t("span",[this._v("_")]),t("span",[this._v("_")]),t("span",[this._v("_")]),t("span",[this._v("_")]),t("span",[this._v("_")]),t("span",[this._v("_")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"span-input centenr"},[t("span",{staticClass:"span-left"},[this._v("备注：")]),t("br")])}]};var o=s("vSla")(i,n,!1,function(e){s("ZzHr")},"data-v-a90f3320",null);t.default=o.exports},ZzHr:function(e,t){}});
//# sourceMappingURL=11.ea07fb3dde266e2a8e57.js.map