webpackJsonp([12],{"2EoU":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("pxwZ"),n={data:function(){return{pickerOptions0:{disabledDate:function(t){return t.getTime()<Date.now()}},name:"",date:"",phone:"",inputLength:"",dateValue:"",desc:"",brokerId:"",houseId:"",verCode:"",datestamp:""}},watch:{name:function(){var t=this.name.length,e=1.7*parseInt(t);this.$refs.name.style.width=e>0?e+"rem":"5rem"},phone:function(){var t=this.phone.length,e=parseInt(t);this.$refs.phone.style.width=e>0?e+"rem":"12rem"}},created:function(){},components:{headTop:s("ra3+").a},mounted:function(){},methods:{getCode:function(){var t=this,e=60,s=this.$refs.button,n=setInterval(function(){e--,s.innerHTML=e+"秒",s.disabled=" disabled",0===e&&(s.disabled="",s.innerHTML="重新获取",clearInterval(n))},1e3);a.a.getCode(this.phone).then(function(e){console.log(e),0==e.data.success&&t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})},sendAppointment:function(){if(this.name)if(this.dateValue){if(this.phone)if(/^((13|14|15|17|18)[0-9]{1}\d{8})$/.test(this.phone))if(this.verCode)if(this.desc){var t=Date.parse(new Date(this.dateValue));this.datestamp=t/1e3,console.log(this.datestamp);var e={cityId:this.$route.params.homes.cityId,houseId:this.$route.params.homes.id,phoneNum:this.phone,verCode:this.verCode,time:this.datestamp,desc:this.desc,brokerId:this.$route.params.homes.broker_id,userName:this.name};a.a.houseAppointment(e).then(function(t){console.log(t.data),t.data.success&&console.log("提交成功")}).catch(function(t){console.log(t)})}else this.$toast({message:"请填写备注",position:"bottom",duration:3e3});else this.$toast({message:"请输入验证码",position:"bottom",duration:3e3});else this.$toast({message:"手机号号码格式错误",position:"bottom",duration:3e3});else this.$toast({message:"请输入手机号",position:"bottom",duration:3e3})}else this.$toast({message:"请选择看房时间",position:"bottom",duration:3e3});else this.$toast({message:"请输入看房人姓名",position:"bottom",duration:3e3})}}},i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"houseAppointment"},[s("h1",{staticClass:"nav-header"},[s("span",{staticClass:"go-back",on:{click:function(e){t.$router.go(-1)}}},[s("i",{staticClass:"icon iconfont go-back-icon"},[t._v("")])]),t._v(" "),s("span",{staticClass:"header-title"},[t._v("\n      看房预约\n    ")])]),t._v(" "),s("div",{staticClass:"houseDetail"},[s("li",[s("div",[s("span",{staticClass:"span-top"},[t._v(t._s(t.$route.params.homes.title))]),t._v(" "),s("br"),t._v(" "),s("span",{staticClass:"span-small"},[t._v(t._s(t.$route.params.homes.describe))]),t._v(" "),s("span",{staticClass:"span-bottom"},[s("span",{staticStyle:{color:"#e10000"}},[t._v(t._s(t.$route.params.homes.price))]),t._v("   "+t._s(t.$route.params.homes.avgprice))])]),t._v(" "),s("img",{attrs:{src:"http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"}}),s("br")])]),t._v(" "),s("div",{staticClass:"form"},[s("div",[s("div",{staticClass:"span-input centenr"},[s("span",{staticClass:"span-left "},[t._v("姓名：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],ref:"name",staticClass:"input-right name",attrs:{placeholder:"看房人"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"span-input dark centenr"},[s("span",{staticClass:"span-left"},[t._v("看房时间：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.dateValue,expression:"dateValue"}],ref:"date",staticClass:"input-right date dark",attrs:{placeholder:"请选择看房时间"},domProps:{value:t.dateValue},on:{input:function(e){e.target.composing||(t.dateValue=e.target.value)}}}),t._v(" "),s("i",{staticClass:"icon iconfont go-back-icon i-right"},[t._v("")]),t._v(" "),s("div",{staticClass:"dateDiv"},[s("span",{staticClass:"input-right"},[s("el-date-picker",{attrs:{type:"datetime",placeholder:"请选择看房时间","picker-options":t.pickerOptions0,"value-format":"yyyy/MM/dd HH:mm",align:"right",size:"small"},model:{value:t.dateValue,callback:function(e){t.dateValue=e},expression:"dateValue"}})],1)])]),t._v(" "),s("div",{staticClass:"span-input centenr"},[s("span",{staticClass:"span-left"},[t._v("联系方式：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.phone,expression:"phone"}],ref:"phone",staticClass:"input-right phone",attrs:{placeholder:"请填写联系方式",maxlength:"11"},domProps:{value:t.phone},on:{input:function(e){e.target.composing||(t.phone=e.target.value)}}})]),t._v(" "),s("div",{staticClass:"span-input dark centenr"},[s("span",{staticClass:"span-left"},[t._v("验证码：")]),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.verCode,expression:"verCode"}],staticClass:"yan dark",domProps:{value:t.verCode},on:{input:function(e){e.target.composing||(t.verCode=e.target.value)}}}),t._v(" "),s("button",{ref:"button",staticClass:"input-right button",on:{click:function(e){t.getCode()}}},[t._v("发送验证码")]),t._v(" "),s("br"),t._v(" "),t._m(0)]),t._v(" "),t._m(1),t._v(" "),s("div",{staticClass:"span-input dark noteDiv"},[s("textarea",{directives:[{name:"model",rawName:"v-model",value:t.desc,expression:"desc"}],staticClass:"span-left dark",attrs:{placeholder:"请填写备注"},domProps:{value:t.desc},on:{input:function(e){e.target.composing||(t.desc=e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"button-bottom",on:{click:function(e){t.sendAppointment()}}},[t._v("提交")])]),t._v(" "),s("keep-alive",[s("router-view")],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("span",{staticClass:"xh"},[e("span",[this._v("_")]),e("span",[this._v("_")]),e("span",[this._v("_")]),e("span",[this._v("_")]),e("span",[this._v("_")]),e("span",[this._v("_")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"span-input centenr"},[e("span",{staticClass:"span-left"},[this._v("备注：")]),e("br")])}]};var o=s("VU/8")(n,i,!1,function(t){s("ZAXZ")},"data-v-5bfdd448",null);e.default=o.exports},ZAXZ:function(t,e){}});
//# sourceMappingURL=12.e4fd8d94ed442178b56c.js.map