webpackJsonp([5,11],{X6d5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("pxwZ"),o=s("ra3+"),a=s("ps6j"),r=s("vCr1"),c={data:function(){return{houseParams:{1:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""},2:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""}},houseLists:[],recomment:0,houseType:this.$store.state.activeInfo.houseType?this.$store.state.activeInfo.houseType:1,filterType:"",filterList:{},district:[],activDistrictIndex:0,orderFilter:{1:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},{orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},{orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},{orderColumn:"buildarea",orderBy:"asc",describe:"面积从大到小"}],2:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"租金从低到高"},{orderColumn:"price",orderBy:"desc",describe:"租金从高到底"}]},morePopVisible:!1,isShowSearch:!1,isShowHouseType:!1,houseTypeDetail:{1:"houseBuyDetail",2:"houseRentDetail",3:"villageDetail"},isLoadAll:!1,loading:!1}},components:{headTop:o.a,search:r.default,houseItem:a.a},created:function(){this.gethouseLists(),this.getFilterList(),this.getDistrict()},computed:{},methods:{gethouseLists:function(e){var t=this;if(e||(this.houseParams[this.houseType].pageIndex=1),1==this.houseType){var s=this.houseParams[this.houseType];s.openId=this.$route.query?this.$route.query.openId:"",s.code=this.$route.query.code?this.$route.query.code:"",console.log(s),i.a.getSellHouseList(s).then(function(s){s.data.success?(t.recomment=s.data.result.recomment,e?(t.houseLists=t.houseLists.concat(s.data.result.list),s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):t.loading=!1,console.log(t.houseLists)):(t.houseLists=s.data.result.list,s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):t.loading=!1)):t.$toast({message:s.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}else if(2==this.houseType){var o=this.houseParams[this.houseType];console.log(o),i.a.getRentHouseList(o).then(function(s){console.log(s),s.data.success?e?(t.houseLists=t.houseLists.concat(s.data.result.list),s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):t.loading=!1):(t.houseLists=s.data.result.list,s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):t.loading=!1):t.$toast({message:s.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}},getFilterList:function(){var e=this,t={type:this.houseType};i.a.getFilterList(t).then(function(t){t.data.success?e.filterList=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},getDistrict:function(){var e=this;i.a.getDistrict({city:"hz"}).then(function(t){if(t.data.success){var s=t.data.result;s.unshift({district:"不限",street:[]}),s.forEach(function(e){e.street.unshift({id:0,name:"不限"})}),e.district=s,console.log(e.district)}else e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t,position:"bottom",duration:3e3})})},selectHouseType:function(e){this.houseType=e,this.isShowHouseType=!1,this.getFilterList(),this.gethouseLists()},opentFilter:function(e){this.isShowHouseType||(this.filterType?this.filterType="":this.filterType=e)},openHouseTypePop:function(){""==this.filterType&&(this.isShowHouseType=!this.isShowHouseType)},setFilterValue:function(e,t){var s=this.houseParams[this.houseType].filterIds.indexOf(t);"-1"==s?this.houseParams[this.houseType].filterIds.push(t):this.houseParams[this.houseType].filterIds.splice(s,1)},filterConfirm:function(){this.gethouseLists(),this.filterType=""},unlimit:function(){this.houseParams[this.houseType]={cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.gethouseLists(),this.filterType=""},setCheckDistrictValue:function(e,t){this.activDistrictIndex=t},setCheckStreetValue:function(e,t){this.houseParams[this.houseType].areaIds=t,this.gethouseLists(),this.filterType=""},setOrderValue:function(e,t){this.houseParams[this.houseType].orderBy=t.orderBy,this.houseParams[this.houseType].orderColumn=t.orderColumn,this.gethouseLists(),this.filterType=""},toggleMore:function(){this.filterType||(this.morePopVisible=!this.morePopVisible)},showSearch:function(){this.isShowSearch=!0},searchHouse:function(e){console.log(e),this.houseParams[this.houseType]={cityId:"hz",communityId:e,areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:"",pageIndex:"",orderBy:"",orderColumn:""},this.gethouseLists(),this.isShowSearch=!1},loadBottom:function(){this.houseParams[this.houseType].pageIndex++,console.log(this.houseParams[this.houseType].pageIndex),this.gethouseLists(!0),this.$refs.loadmore.onBottomLoaded()},loadMore:function(){this.loading=!0,this.houseParams[this.houseType].pageIndex++,console.log(this.houseParams[this.houseType].pageIndex),this.gethouseLists(!0),console.log(123)}},watch:{}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[e.isShowSearch?e._e():s("div",[s("head-top",{attrs:{goBack:"true"}}),e._v(" "),s("div",{staticClass:"content"},[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:e.openHouseTypePop}},[e._v("\n                "+e._s(1==e.houseType?"二手房":"租房")),s("i",{staticClass:"icon iconfont"},[e._v("")])]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{attrs:{type:"search",placeholder:"请输入商圈或小区名"},on:{focus:function(t){e.isShowSearch=!0}}})])]),e._v(" "),s("div",{staticClass:"my-search-right left",on:{click:e.toggleMore}},[s("i",{staticClass:"icon iconfont iconfont-more"},[e._v("")])]),e._v(" "),e.morePopVisible?s("ul",{staticClass:"more-ul"},[e._m(1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/myCare"}},[s("i",{staticClass:"icon iconfont my-care"},[e._v("")]),e._v("我的关注")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/lookHouseIndex"}},[s("i",{staticClass:"icon iconfont look-house"},[e._v("")]),e._v("看房预约")])],1),e._v(" "),s("li",[s("router-link",{attrs:{to:"/signSearch"}},[s("i",{staticClass:"icon iconfont sign-search"},[e._v("")]),e._v("签约查询")])],1)]):e._e()]),e._v(" "),s("div",{staticClass:"condition-filter clear",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"left clear"},[s("li",{on:{click:function(t){e.opentFilter("district")}}},[e._v("\n            区域\n            "),"district"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"district"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("price")}}},[e._v("\n            价格\n            "),"price"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"price"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("roomType")}}},[e._v("\n            房型\n            "),"roomType"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"roomType"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("filterMore")}}},[e._v("\n            筛选\n            "),"filterMore"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"filterMore"==e.filterType?s("i",{staticClass:"icon iconfont select-active-icon"},[e._v("")]):e._e()]),e._v(" "),s("li",{on:{click:function(t){e.opentFilter("filterOrder")}}},[s("i",{staticClass:"icon iconfont",class:{"select-active-icon":"filterOrder"==e.filterType}},[e._v("")])])])]),e._v(" "),e.recomment>0?s("div",{staticClass:"search-empty"},[s("div",{staticClass:"search-empty-tip"},[e._v("找不到您搜索的房源")]),e._v(" "),s("div",{staticClass:"recomment-tip"},[e._v("为您推荐")])]):e._e(),e._v(" "),e.houseLists.length>0?s("div",[s("ul",{directives:[{name:"infinite-scroll",rawName:"v-infinite-scroll",value:e.loadMore,expression:"loadMore"}],staticClass:"house-list",attrs:{"infinite-scroll-disabled":"loading","infinite-scroll-distance":"0"}},e._l(e.houseLists,function(t){return s("li",{key:t.id,staticClass:"house-item clear"},[s("router-link",{attrs:{to:{name:e.houseTypeDetail[e.houseType],params:{cityId:"hz",houseId:t.id,userType:"customer",houseType:e.houseType}}}},[s("house-item",{attrs:{item:t,houseType:e.houseType}})],1)],1)})),e._v(" "),e.isLoadAll?e._e():s("p",{staticClass:"loading-more"},[e._m(2),s("span",{staticClass:"loading-more-text"},[e._v("加载更多")])]),e._v(" "),e.isLoadAll?s("p",{staticClass:"loading-more"},[e._v("没有更多数据了！")]):e._e()]):e._e(),e._v(" "),"price"==e.filterType?s("div",{staticClass:"filter-price",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("价格区间（万）")]),e._v(" "),s("div",{staticClass:"price-between-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMin,expression:"houseParams[houseType].priceMin"}],staticClass:"left",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMin},on:{input:function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMin",t.target.value)}}}),e._v(" "),e._m(3),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMax,expression:"houseParams[houseType].priceMax"}],staticClass:"right",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMax},on:{input:function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMax",t.target.value)}}})]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.price.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"district"==e.filterType?s("div",{staticClass:"filter-district",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"district-ul left",on:{touchmove:function(e){e.stopPropagation()}}},e._l(e.district,function(t,i){return s("li",{class:{"select-font-active":e.activDistrictIndex==i},on:{click:function(t){e.setCheckDistrictValue(t,i)}}},[e._v("\n              "+e._s(t.district)+"\n            ")])})),e._v(" "),s("ul",{staticClass:"street-ul left clear",on:{touchmove:function(e){e.stopPropagation()}}},e._l(e.district[e.activDistrictIndex].street,function(t){return s("li",{class:{"street-active":e.houseParams[e.houseType].areaIds==t.id},on:{click:function(s){e.setCheckStreetValue(s,t.id)}}},[e._v("\n              "+e._s(t.name)+"\n            ")])}))]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e(),e._v(" "),"roomType"==e.filterType?s("div",{staticClass:"filter-room-type",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"filter-select"},e._l(e.filterList.room.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v("\n            "+e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterMore"==e.filterType?s("div",{staticClass:"filter-more",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("建筑面积（㎡）")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.buildarea.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("楼龄")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.buildyear.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("朝向")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList.forward.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t.id)}}},[e._v(e._s(t.child_name)+"\n          ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterOrder"==e.filterType?s("div",{staticClass:"filter-order"},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"filter-order-ul left"},e._l(e.orderFilter[e.houseType],function(t,i){return s("li",{class:{"select-font-active":e.houseParams[e.houseType].orderColumn==t.orderColumn&&e.houseParams[e.houseType].orderBy==t.orderBy},on:{click:function(s){e.setOrderValue(s,t)}}},[e._v("\n              "+e._s(t.describe)+"\n            ")])}))]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e()])],1),e._v(" "),e.isShowSearch?s("search",{attrs:{houseType:e.houseType},on:{hideSearch:function(t){e.isShowSearch=!1},searchHouse:e.searchHouse}}):e._e(),e._v(" "),e.morePopVisible?s("div",{staticClass:"full-mask",on:{touchmove:function(e){e.preventDefault()},click:function(t){e.morePopVisible=!1}}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"loading-more-span"},[t("i",{staticClass:"icon iconfont loading-more-icon"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"icon iconfont iconfont-heng"},[this._v("")])])}]};var l=s("VU/8")(c,n,!1,function(e){s("heUJ")},"data-v-db7ee184",null);t.default=l.exports},heUJ:function(e,t){},lmN0:function(e,t){},vCr1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("mvHQ"),o=s.n(i),a=s("pxwZ"),r={data:function(){return{params:{keyword:"",city:"hz",limit:"5"},isShowHouseType:!1,searchResult:[],searchHouseType:this.houseType,communitySearchHistory:null==localStorage.getItem("communitySearchHistory")?{1:[],2:[]}:JSON.parse(localStorage.getItem("communitySearchHistory"))}},props:{houseType:{default:1}},created:function(){},mounted:function(){},components:{},computed:{},methods:{showSearchResult:function(){var e=this,t=this.params;a.a.searchCommunity(t).then(function(t){console.log(t.data),t.data.success?e.searchResult=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.Error,position:"bottom",duration:3e3})})},cancel:function(){},selectHouseType:function(e){this.searchHouseType=e,this.isShowHouseType=!1},searchHouse:function(e){this.communitySearchHistory[this.searchHouseType].push(e),localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory)),this.$emit("searchHouse",e.communityId)},deleteCommunitySearchHistory:function(e){this.communitySearchHistory[this.searchHouseType]=[],localStorage.setItem("communitySearchHistory",o()(this.communitySearchHistory))}},watch:{}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(t){e.isShowHouseType=!e.isShowHouseType}}},[e._v("\n          "+e._s(1==e.searchHouseType?"二手房":"租房")),s("i",{staticClass:"icon iconfont"},[e._v("")])]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.keyword,expression:"params.keyword"}],attrs:{type:"search",placeholder:"请输入商圈或小区名"},domProps:{value:e.params.keyword},on:{keyup:e.showSearchResult,input:function(t){t.target.composing||e.$set(e.params,"keyword",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"my-search-right right",on:{click:function(t){e.$emit("hideSearch")}}},[e._v("\n      取消\n    ")])]),e._v(" "),e.searchResult.length>0?s("ul",{staticClass:"search-result"},e._l(e.searchResult,function(t,i){return s("li",{key:t.communityId,on:{click:function(s){e.searchHouse(t)}}},[e._v(e._s(t.communityName))])})):e._e(),e._v(" "),e.communitySearchHistory&&e.communitySearchHistory[e.searchHouseType].length>0&&e.searchResult.length<=0?s("ul",{staticClass:"search-history"},[s("li",[s("span",[e._v("搜索历史")]),s("span",[s("i",{staticClass:"icon iconfont icon-delete",on:{click:function(t){e.deleteCommunitySearchHistory(e.searchHouseType)}}},[e._v("")])])]),e._v(" "),e._l(e.communitySearchHistory[e.searchHouseType],function(t,i){return s("li",[e._v(e._s(t.communityName))])})],2):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])}]};var n=s("VU/8")(r,c,!1,function(e){s("lmN0")},"data-v-a5e9701a",null);t.default=n.exports}});
//# sourceMappingURL=5.e1b7abf687d9331b3257.js.map