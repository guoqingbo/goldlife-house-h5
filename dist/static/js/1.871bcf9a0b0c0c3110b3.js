webpackJsonp([1,4],{"3XhF":function(t,e){},X6d5:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("pxwZ"),o=s("ra3+"),a=s("lPWh"),r=s("vCr1"),c={data:function(){return{houseParams:{1:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},2:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""}},hoseLists:[],houseType:1,filterType:"",filterList:{},district:[],activDistrictIndex:-1,orderFilter:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},{orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},{orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},{orderColumn:"buildarea",orderBy:"asc",describe:"面积从大到小"}],morePopVisible:!1,isShowSearch:!1,isShowHouseType:!1}},components:{headTop:o.a,search:r.default,houseList:a.a},created:function(){this.getHoseLists(),this.getFilterList(),this.getDistrict()},computed:{},methods:{getHoseLists:function(){var t=this;if(1==this.houseType){var e=this.houseParams[this.houseType];i.a.getSellHouseList(e).then(function(e){e.data.success?t.hoseLists=e.data.result.list:t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}else if(2==this.houseType){var s=this.houseParams[this.houseType];console.log(s),i.a.getRentHouseList(s).then(function(e){console.log(e),e.data.success?t.hoseLists=e.data.result.list:t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}},getFilterList:function(){var t=this,e={type:this.houseType};i.a.getFilterList(e).then(function(e){e.data.success?t.filterList=e.data.result:t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})},getDistrict:function(){var t=this;i.a.getDistrict({city:"hz"}).then(function(e){e.data.success?t.district=e.data.result:t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})},selectHouseType:function(t){this.houseType=t,this.isShowHouseType=!1,this.getHoseLists()},opentFilter:function(t){this.filterType?this.filterType="":this.filterType=t},setFilterValue:function(t,e){var s=this.houseParams[this.houseType].filterIds.indexOf(e);"-1"==s?this.houseParams[this.houseType].filterIds.push(e):this.houseParams[this.houseType].filterIds.splice(s,1)},filterConfirm:function(){this.getHoseLists(),this.filterType=""},unlimit:function(){this.houseParams[this.houseType]={cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.getHoseLists(),this.filterType=""},setCheckDistrictValue:function(t,e){this.activDistrictIndex=e},setCheckStreetValue:function(t,e){this.houseParams[this.houseType].areaIds=e,this.getHoseLists(),this.filterType=""},setOrderValue:function(t,e){this.houseParams[this.houseType].orderBy=e.orderBy,this.houseParams[this.houseType].orderColumn=e.orderColumn,this.getHoseLists(),this.filterType=""},toggleMore:function(){this.morePopVisible=!this.morePopVisible},showSearch:function(){this.isShowSearch=!0},searchHouse:function(t){console.log(t),this.houseParams[this.houseType]={cityId:"hz",communityId:t,areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.getHoseLists(),this.isShowSearch=!1}},watch:{}},n={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.isShowSearch?t._e():s("div",[s("head-top",{attrs:{goBack:"true"}}),t._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(e){t.isShowHouseType=!t.isShowHouseType}}},[t._v("\n                "+t._s(1==t.houseType?"二手房":"租房")),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),t.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[t._m(0),t._v(" "),s("li",{class:{"house-type-active":1==t.houseType}},[s("span",{on:{click:function(e){t.selectHouseType(1)}}},[t._v("二手房")])]),t._v(" "),s("li",{class:{"house-type-active":2==t.houseType}},[s("span",{on:{click:function(e){t.selectHouseType(2)}}},[t._v("租房")])])]):t._e()]),t._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{attrs:{type:"search",placeholder:"请输入商圈或小区名"},on:{focus:function(e){t.isShowSearch=!0}}})])]),t._v(" "),s("div",{staticClass:"my-search-right right",on:{click:t.toggleMore}},[s("i",{staticClass:"icon iconfont iconfont-more"},[t._v("")])]),t._v(" "),t.morePopVisible?s("ul",{staticClass:"more-ul"},[t._m(1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/myCare"}},[s("i",{staticClass:"icon iconfont my-care"},[t._v("")]),t._v("我的关注")])],1),t._v(" "),s("li",[s("router-link",{attrs:{to:"/lookAppointment"}},[s("i",{staticClass:"icon iconfont look-house"},[t._v("")]),t._v("看房预约")])],1)]):t._e()]),t._v(" "),s("div",{staticClass:"condition-filter clear",on:{touchmove:function(t){t.preventDefault()}}},[s("ul",{staticClass:"left clear"},[s("li",{on:{click:function(e){t.opentFilter("district")}}},[t._v("区域"),s("i",{staticClass:"icon iconfont"},[t._v("")])]),t._v(" "),s("li",{on:{click:function(e){t.opentFilter("price")}}},[t._v("价格"),s("i",{staticClass:"icon iconfont"},[t._v("")])]),t._v(" "),s("li",{on:{click:function(e){t.opentFilter("roomType")}}},[t._v("房型"),s("i",{staticClass:"icon iconfont"},[t._v("")])]),t._v(" "),s("li",{on:{click:function(e){t.opentFilter("filterMore")}}},[t._v("筛选"),s("i",{staticClass:"icon iconfont"},[t._v("")])]),t._v(" "),s("li",{on:{click:function(e){t.opentFilter("filterOrder")}}},[s("i",{staticClass:"icon iconfont"},[t._v("")])])])]),t._v(" "),s("house-list",{attrs:{houseLists:t.hoseLists,houseType:t.houseType}}),t._v(" "),"price"==t.filterType?s("div",{staticClass:"filter-price",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"filter-title"},[t._v("价格区间（万）")]),t._v(" "),s("div",{staticClass:"price-between-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.houseParams[t.houseType].priceMin,expression:"houseParams[houseType].priceMin"}],staticClass:"left",attrs:{maxlength:"4",type:"number"},domProps:{value:t.houseParams[t.houseType].priceMin},on:{input:function(e){e.target.composing||t.$set(t.houseParams[t.houseType],"priceMin",e.target.value)}}}),t._v(" "),t._m(2),t._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:t.houseParams[t.houseType].priceMax,expression:"houseParams[houseType].priceMax"}],staticClass:"right",attrs:{maxlength:"4",type:"number"},domProps:{value:t.houseParams[t.houseType].priceMax},on:{input:function(e){e.target.composing||t.$set(t.houseParams[t.houseType],"priceMax",e.target.value)}}})]),t._v(" "),s("ul",{staticClass:"filter-select"},t._l(t.filterList.price.child,function(e){return s("li",{key:e.id,class:{"filter-select-active":t.houseParams[t.houseType].filterIds.indexOf(e.id)>=0},on:{click:function(s){t.setFilterValue(s,e.id)}}},[t._v(t._s(e.child_name)+"\n          ")])})),t._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:t.unlimit}},[t._v("不限")]),t._v(" "),s("button",{staticClass:"confirm-btn",on:{click:t.filterConfirm}},[t._v("确定")])]),t._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(e){t.opentFilter("price")}}})]):t._e(),t._v(" "),"district"==t.filterType?s("div",{staticClass:"filter-district",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"district-ul left",on:{touchmove:function(t){t.stopPropagation()}}},[s("li",{class:{"select-font-active":t.activDistrictIndex<0}},[t._v("不限")]),t._v(" "),t._l(t.district,function(e,i){return s("li",{class:{"select-font-active":t.activDistrictIndex==i},on:{click:function(e){t.setCheckDistrictValue(e,i)}}},[t._v("\n              "+t._s(e.district)+"\n            ")])})],2),t._v(" "),s("ul",{staticClass:"street-ul left clear",on:{touchmove:function(t){t.stopPropagation()}}},[t.activDistrictIndex<0?s("li",{class:{"street-active":t.activDistrictIndex<0}},[t._v("不限")]):t._l(t.district[t.activDistrictIndex].street,function(e){return s("li",{class:{"street-active":t.houseParams[t.houseType].areaIds==e.id},on:{click:function(s){t.setCheckStreetValue(s,e.id)}}},[t._v("\n              "+t._s(e.name)+"\n            ")])})],2)]),t._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(e){t.opentFilter("district")},touchmove:function(t){t.preventDefault()}}})]):t._e(),t._v(" "),"roomType"==t.filterType?s("div",{staticClass:"filter-room-type",on:{touchmove:function(t){t.preventDefault()}}},[s("ul",{staticClass:"filter-select"},t._l(t.filterList.room.child,function(e){return s("li",{key:e.id,class:{"filter-select-active":t.houseParams[t.houseType].filterIds.indexOf(e.id)>=0},on:{click:function(s){t.setFilterValue(s,e.id)}}},[t._v("\n            "+t._s(e.child_name)+"\n          ")])})),t._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:t.unlimit}},[t._v("不限")]),t._v(" "),s("button",{staticClass:"confirm-btn",on:{click:t.filterConfirm}},[t._v("确定")])]),t._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(e){t.opentFilter("price")}}})]):t._e(),t._v(" "),"filterMore"==t.filterType?s("div",{staticClass:"filter-more",on:{touchmove:function(t){t.preventDefault()}}},[s("div",{staticClass:"filter-title"},[t._v("建筑面积（㎡）")]),t._v(" "),s("ul",{staticClass:"filter-select"},t._l(t.filterList.buildarea.child,function(e){return s("li",{key:e.id,class:{"filter-select-active":t.houseParams[t.houseType].filterIds.indexOf(e.id)>=0},on:{click:function(s){t.setFilterValue(s,e.id)}}},[t._v(t._s(e.child_name)+"\n          ")])})),t._v(" "),s("div",{staticClass:"filter-title"},[t._v("楼龄")]),t._v(" "),s("ul",{staticClass:"filter-select"},t._l(t.filterList.buildyear.child,function(e){return s("li",{key:e.id,class:{"filter-select-active":t.houseParams[t.houseType].filterIds.indexOf(e.id)>=0},on:{click:function(s){t.setFilterValue(s,e.id)}}},[t._v(t._s(e.child_name)+"\n          ")])})),t._v(" "),s("div",{staticClass:"filter-title"},[t._v("朝向")]),t._v(" "),s("ul",{staticClass:"filter-select"},t._l(t.filterList.forward.child,function(e){return s("li",{key:e.id,class:{"filter-select-active":t.houseParams[t.houseType].filterIds.indexOf(e.id)>=0},on:{click:function(s){t.setFilterValue(s,e.id)}}},[t._v(t._s(e.child_name)+"\n          ")])})),t._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:t.unlimit}},[t._v("不限")]),t._v(" "),s("button",{staticClass:"confirm-btn",on:{click:t.filterConfirm}},[t._v("确定")])]),t._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(e){t.opentFilter("price")}}})]):t._e(),t._v(" "),"filterOrder"==t.filterType?s("div",{staticClass:"filter-order"},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"filter-order-ul left"},t._l(t.orderFilter,function(e,i){return s("li",{class:{"select-font-active":t.houseParams[t.houseType].orderColumn==e.orderColumn&&t.houseParams[t.houseType].orderBy==e.orderBy},on:{click:function(s){t.setOrderValue(s,e)}}},[t._v("\n              "+t._s(e.describe)+"\n            ")])}))]),t._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(e){t.opentFilter("district")},touchmove:function(t){t.preventDefault()}}})]):t._e()],1)],1),t._v(" "),t.isShowSearch?s("search",{attrs:{houseType:t.houseType},on:{hideSearch:function(e){t.isShowSearch=!1},searchHouse:t.searchHouse}}):t._e(),t._v(" "),t.morePopVisible?s("div",{staticClass:"full-mask",on:{touchmove:function(t){t.preventDefault()},click:function(e){t.morePopVisible=!1}}}):t._e()],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"icon iconfont arrow"},[this._v("")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("span",[e("i",{staticClass:"icon iconfont iconfont-heng"},[this._v("")])])}]};var l=s("VU/8")(c,n,!1,function(t){s("3XhF")},"data-v-31c41cab",null);e.default=l.exports},dNYz:function(t,e){},lPWh:function(t,e,s){"use strict";var i={props:["houseLists","houseType"],filters:{pic:function(t){return t||"http://118.178.230.141/group1/M00/00/04/drLmjVsZ-cmAIWmKAASWd8wn0zs229.jpg"},price:function(t,e){if(t)return 1==e?t+" 万元":t+" 元/月"},avgprice:function(t){if(t)return t+" 元/平"},publishTime:function(t){if(t){var e=function(t){return t<10?"0"+t:t},s=new Date(1e3*parseInt(t)),i=s.getFullYear(),o=s.getMonth()+1;s.getDate();return i+"年"+e(o)+"月"+e(o)+"日发布"}}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"houseList clear"},[s("ul",t._l(t.houseLists,function(e){return s("li",{key:e.id,staticClass:"clear"},[s("router-link",{attrs:{to:"/sellDetail"}},[s("div",{staticClass:"img left"},[s("img",{attrs:{src:t._f("pic")(e.pic)}})]),t._v(" "),s("div",{staticClass:"left li-content"},[s("p",[s("span",{staticClass:"title"},[t._v(t._s(e.title))])]),t._v(" "),s("p",[s("span",{staticClass:"dicrible"},[t._v(t._s(e.describe))])]),t._v(" "),s("p",[s("span",{staticClass:"price"},[t._v(t._s(t._f("price")(e.price,t.houseType)))]),t._v(" "),s("span",{staticClass:"avgprice"},[t._v(t._s(t._f("avgprice")(e.avgprice)))])]),t._v(" "),s("p"),s("span",{staticClass:"publish-time"},[t._v(t._s(t._f("publishTime")(e.create_time)))])])])],1)}))])},staticRenderFns:[]};var a=s("VU/8")(i,o,!1,function(t){s("dNYz")},"data-v-27bd8902",null);e.a=a.exports},mvHQ:function(t,e,s){t.exports={default:s("qkKv"),__esModule:!0}},qkKv:function(t,e,s){var i=s("FeBl"),o=i.JSON||(i.JSON={stringify:JSON.stringify});t.exports=function(t){return o.stringify.apply(o,arguments)}},vCr1:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("mvHQ"),o=s.n(i),a=s("pxwZ"),r={data:function(){return{params:{keyword:"",city:"hz",limit:"5"},isShowHouseType:!1,searchResult:[],searchHouseType:this.houseType}},props:{houseType:{default:1}},created:function(){},mounted:function(){},components:{},computed:{communitySearchHistory:function(){var t=JSON.parse(localStorage.getItem("communitySearchHistory"));return null==t&&(t={1:[],2:[]}),t}},methods:{showSearchResult:function(){var t=this,e=this.params;a.a.searchCommunity(e).then(function(e){console.log(e.data),e.data.success?t.searchResult=e.data.result:t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.error_msg,position:"bottom",duration:3e3})})},cancel:function(){},selectHouseType:function(t){this.searchHouseType=t,this.isShowHouseType=!1},searchHouse:function(t){this.communitySearchHistory[this.searchHouseType].push(t),localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory)),this.$emit("searchHouse",t.communityId)},deleteCommunitySearchHistory:function(t){this.communitySearchHistory[this.searchHouseType]=[],localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory))}},watch:{}},c={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(e){t.isShowHouseType=!t.isShowHouseType}}},[t._v("\n          "+t._s(1==t.searchHouseType?"二手房":"租房")),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),t._v(" "),t.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[t._m(0),t._v(" "),s("li",{class:{"house-type-active":1==t.searchHouseType}},[s("span",{on:{click:function(e){t.selectHouseType(1)}}},[t._v("二手房")])]),t._v(" "),s("li",{class:{"house-type-active":2==t.searchHouseType}},[s("span",{on:{click:function(e){t.selectHouseType(2)}}},[t._v("租房")])])]):t._e()]),t._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.params.keyword,expression:"params.keyword"}],attrs:{type:"search",placeholder:"请输入商圈或小区名"},domProps:{value:t.params.keyword},on:{keyup:t.showSearchResult,input:function(e){e.target.composing||t.$set(t.params,"keyword",e.target.value)}}})])]),t._v(" "),s("div",{staticClass:"my-search-right right",on:{click:function(e){t.$emit("hideSearch")}}},[t._v("\n      取消\n    ")])]),t._v(" "),t.searchResult.length>0?s("ul",{staticClass:"search-result"},t._l(t.searchResult,function(e,i){return s("li",{key:e.communityId,on:{click:function(s){t.searchHouse(e)}}},[t._v(t._s(e.communityName))])})):t._e(),t._v(" "),t.communitySearchHistory&&t.communitySearchHistory[t.searchHouseType].length>0&&t.searchResult.length<=0?s("ul",{staticClass:"search-history"},[s("li",[s("span",[t._v("搜索历史")]),s("span",[s("i",{staticClass:"icon iconfont icon-delete",on:{click:function(e){t.deleteCommunitySearchHistory(t.searchHouseType)}}},[t._v("")])])]),t._v(" "),t._l(t.communitySearchHistory[t.searchHouseType],function(e,i){return s("li",[t._v(t._s(e.communityName))])})],2):t._e()])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("li",[e("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])}]};var n=s("VU/8")(r,c,!1,function(t){s("zx+E")},"data-v-02ba7d32",null);e.default=n.exports},"zx+E":function(t,e){}});
//# sourceMappingURL=1.871bcf9a0b0c0c3110b3.js.map