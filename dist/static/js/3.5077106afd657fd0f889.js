webpackJsonp([3,17],{"3oLi":function(e,t){},"8tGP":function(e,t){},"8ySu":function(e,t){},X6d5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("pxwZ"),o=s("ra3+"),c=s("lPWh"),r=s("vCr1"),a={data:function(){return{houseParams:{1:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},2:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""}},hoseLists:[],recomment:0,houseType:1,filterType:"",filterList:{},district:[],activDistrictIndex:-1,orderFilter:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},{orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},{orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},{orderColumn:"buildarea",orderBy:"asc",describe:"面积从大到小"}],morePopVisible:!1,isShowSearch:!1,isShowHouseType:!1}},components:{headTop:o.a,search:r.default,houseList:c.a},created:function(){this.getHoseLists(),this.getFilterList(),this.getDistrict()},computed:{},methods:{getHoseLists:function(){var e=this;if(1==this.houseType){var t=this.houseParams[this.houseType];t.openId=this.$route.query?this.$route.query.openId:"",t.code=this.$route.query.code?this.$route.query.code:"",console.log(t),i.a.getSellHouseList(t).then(function(t){console.log(t),t.data.success?(e.hoseLists=t.data.result.list,e.recomment=t.data.result.recomment):e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})}else if(2==this.houseType){var s=this.houseParams[this.houseType];console.log(s),i.a.getRentHouseList(s).then(function(t){console.log(t),t.data.success?e.hoseLists=t.data.result.list:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})}},getFilterList:function(){var e=this,t={type:this.houseType};i.a.getFilterList(t).then(function(t){t.data.success?e.filterList=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},getDistrict:function(){var e=this;i.a.getDistrict({city:"hz"}).then(function(t){t.data.success?e.district=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},selectHouseType:function(e){this.houseType=e,this.isShowHouseType=!1,this.getHoseLists()},opentFilter:function(e){this.filterType?this.filterType="":this.filterType=e},setFilterValue:function(e,t){var s=this.houseParams[this.houseType].filterIds.indexOf(t);"-1"==s?this.houseParams[this.houseType].filterIds.push(t):this.houseParams[this.houseType].filterIds.splice(s,1)},filterConfirm:function(){this.getHoseLists(),this.filterType=""},unlimit:function(){this.houseParams[this.houseType]={cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.getHoseLists(),this.filterType=""},setCheckDistrictValue:function(e,t){this.activDistrictIndex=t},setCheckStreetValue:function(e,t){this.houseParams[this.houseType].areaIds=t,this.getHoseLists(),this.filterType=""},setOrderValue:function(e,t){this.houseParams[this.houseType].orderBy=t.orderBy,this.houseParams[this.houseType].orderColumn=t.orderColumn,this.getHoseLists(),this.filterType=""},toggleMore:function(){this.morePopVisible=!this.morePopVisible},showSearch:function(){this.isShowSearch=!0},searchHouse:function(e){console.log(e),this.houseParams[this.houseType]={cityId:"hz",communityId:e,areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.getHoseLists(),this.isShowSearch=!1}},watch:{}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.isShowSearch?e._e():s("div",[s("head-top",{attrs:{goBack:"true"}}),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(t){e.isShowHouseType=!e.isShowHouseType}}},[e._v("\n                "+e._s(1==e.houseType?"二手房":"租房")),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{attrs:{type:"search",placeholder:"请输入商圈或小区名"},on:{focus:function(t){e.isShowSearch=!0}}})])]),e._v(" "),s("div",{staticClass:"my-search-right left",on:{click:e.toggleMore}},[s("i",{staticClass:"icon iconfont iconfont-more"},[e._v("")])]),e._v(" "),e.morePopVisible?s("ul",{staticClass:"more-ul"},[e._m(1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/myCare"}},[s("i",{staticClass:"icon iconfont my-care"},[e._v("")]),e._v("我的关注")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/lookAppointment"}},[s("i",{staticClass:"icon iconfont look-house"},[e._v("")]),e._v("看房预约")])],1)]):e._e()]),e._v(" "),s("div",{staticClass:"condition-filter clear",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"left clear"},[s("li",{on:{click:function(t){e.opentFilter("district")}}},[e._v("\n            区域\n            "),"district"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"district"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("price")}}},[e._v("\n            价格\n            "),"price"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"price"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("roomType")}}},[e._v("\n            房型\n            "),"roomType"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"roomType"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("filterMore")}}},[e._v("\n            筛选\n            "),"filterMore"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"filterMore"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("filterOrder")}}},[s("i",{staticClass:"icon iconfont",class:{"select-active-icon":"filterOrder"==e.filterType}},[e._v("")])])])]),e._v(" "),e.recomment>0?s("div",{staticClass:"search-empty"},[s("div",{staticClass:"search-empty-tip"},[e._v("找不到您搜索的房源")]),e._v(" "),s("div",{staticClass:"recomment-tip"},[e._v("为您推荐")])]):e._e(),e._v(" "),s("house-list",{attrs:{houseLists:e.hoseLists,houseType:e.houseType}}),e._v(" "),"price"==e.filterType?s("div",{staticClass:"filter-price",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("价格区间（万）")]),e._v(" "),s("div",{staticClass:"price-between-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMin,expression:"houseParams[houseType].priceMin"}],staticClass:"left",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMin},on:{input:function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMin",t.target.value)}}}),e._v(" "),e._m(2),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMax,expression:"houseParams[houseType].priceMax"}],staticClass:"right",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMax},on:{input:function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMax",t.target.value)}}})]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.price.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"district"==e.filterType?s("div",{staticClass:"filter-district",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"district-ul left",on:{touchmove:function(e){e.stopPropagation()}}},[s("li",{class:{"select-font-active":e.activDistrictIndex<0}},[e._v("不限")]),e._v(" "),e._l(e.district,function(t,i){return s("li",{class:{"select-font-active":e.activDistrictIndex==i},on:{click:function(t){e.setCheckDistrictValue(t,i)}}},[e._v("\n              "+e._s(t.district)+"\n            ")])})],2),e._v(" "),s("ul",{staticClass:"street-ul left clear",on:{touchmove:function(e){e.stopPropagation()}}},[e.activDistrictIndex<0?s("li",{class:{"street-active":e.activDistrictIndex<0}},[e._v("不限")]):e._l(e.district[e.activDistrictIndex].street,function(t){return s("li",{class:{"street-active":e.houseParams[e.houseType].areaIds==t.id},on:{click:function(s){e.setCheckStreetValue(s,t.id)}}},[e._v("\n              "+e._s(t.name)+"\n            ")])})],2)]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e(),e._v(" "),"roomType"==e.filterType?s("div",{staticClass:"filter-room-type",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"filter-select"},e._l(e.filterList.room.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v("\n            "+e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterMore"==e.filterType?s("div",{staticClass:"filter-more",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("建筑面积（㎡）")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.buildarea.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("楼龄")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.buildyear.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("朝向")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.forward.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterOrder"==e.filterType?s("div",{staticClass:"filter-order"},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"filter-order-ul left"},e._l(e.orderFilter,function(t,i){return s("li",{class:{"select-font-active":e.houseParams[e.houseType].orderColumn==t.orderColumn&&e.houseParams[e.houseType].orderBy==t.orderBy},on:{click:function(s){e.setOrderValue(s,t)}}},[e._v("\n              "+e._s(t.describe)+"\n            ")])}))]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e()],1)],1),e._v(" "),e.isShowSearch?s("search",{attrs:{houseType:e.houseType},on:{hideSearch:function(t){e.isShowSearch=!1},searchHouse:e.searchHouse}}):e._e(),e._v(" "),e.morePopVisible?s("div",{staticClass:"full-mask",on:{touchmove:function(e){e.preventDefault()},click:function(t){e.morePopVisible=!1}}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"icon iconfont iconfont-heng"},[this._v("")])])}]};var l=s("VU/8")(a,n,!1,function(e){s("8tGP")},"data-v-21649139",null);t.default=l.exports},lPWh:function(e,t,s){"use strict";var i={props:{houseLists:{},houseType:{default:1}},components:{houseItem:s("ps6j").a}},o={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"house-list"},[s("ul",e._l(e.houseLists,function(t){return s("li",{key:t.id,staticClass:"house-item clear"},[s("router-link",{attrs:{to:"/sellDetail"}},[s("house-item",{attrs:{item:t,houseType:e.houseType}})],1)],1)}))])},staticRenderFns:[]};var c=s("VU/8")(i,o,!1,function(e){s("3oLi")},"data-v-3e0c3b70",null);t.a=c.exports},vCr1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),o=s.n(i),c=s("pxwZ"),r={data:function(){return{params:{keyword:"",city:"hz",limit:"5"},isShowHouseType:!1,searchResult:[],searchHouseType:this.houseType,communitySearchHistory:null==localStorage.getItem("communitySearchHistory")?{1:[],2:[]}:JSON.parse(localStorage.getItem("communitySearchHistory"))}},props:{houseType:{default:1}},created:function(){},mounted:function(){},components:{},computed:{},methods:{showSearchResult:function(){var e=this,t=this.params;c.a.searchCommunity(t).then(function(t){console.log(t.data),t.data.success?e.searchResult=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.Error,position:"bottom",duration:3e3})})},cancel:function(){},selectHouseType:function(e){this.searchHouseType=e,this.isShowHouseType=!1},searchHouse:function(e){this.communitySearchHistory[this.searchHouseType].push(e),localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory)),this.$emit("searchHouse",e.communityId)},deleteCommunitySearchHistory:function(e){this.communitySearchHistory[this.searchHouseType]=[],localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory))}},watch:{}},a={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(t){e.isShowHouseType=!e.isShowHouseType}}},[e._v("\n          "+e._s(1==e.searchHouseType?"二手房":"租房")),s("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.keyword,expression:"params.keyword"}],attrs:{type:"search",placeholder:"请输入商圈或小区名"},domProps:{value:e.params.keyword},on:{keyup:e.showSearchResult,input:function(t){t.target.composing||e.$set(e.params,"keyword",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"my-search-right right",on:{click:function(t){e.$emit("hideSearch")}}},[e._v("\n      取消\n    ")])]),e._v(" "),e.searchResult.length>0?s("ul",{staticClass:"search-result"},e._l(e.searchResult,function(t,i){return s("li",{key:t.communityId,on:{click:function(s){e.searchHouse(t)}}},[e._v(e._s(t.communityName))])})):e._e(),e._v(" "),e.communitySearchHistory&&e.communitySearchHistory[e.searchHouseType].length>0&&e.searchResult.length<=0?s("ul",{staticClass:"search-history"},[s("li",[s("span",[e._v("搜索历史")]),s("span",[s("i",{staticClass:"icon iconfont icon-delete",on:{click:function(t){e.deleteCommunitySearchHistory(e.searchHouseType)}}},[e._v("")])])]),e._v(" "),e._l(e.communitySearchHistory[e.searchHouseType],function(t,i){return s("li",[e._v(e._s(t.communityName))])})],2):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])}]};var n=s("VU/8")(r,a,!1,function(e){s("8ySu")},"data-v-2f6e5a7d",null);t.default=n.exports}});
//# sourceMappingURL=3.5077106afd657fd0f889.js.map