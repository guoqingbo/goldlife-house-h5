webpackJsonp([5,13],{"6Mx5":function(e,t){},"9kwg":function(e,t){},X6d5:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("3cXf"),o=s.n(i),r=s("pxwZ"),a=s("ps6j"),c={data:function(){return{houseParams:{1:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""},2:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""}},communityName:"",houseLists:[],recomment:0,houseType:this.$store.state.activeInfo.houseType?this.$store.state.activeInfo.houseType:1,filterType:"",filterTypeActive:"",filterList:{1:{},2:{}},district:[],streetInDistrictIds:[],activDistrictIndex:0,selectedDistrictIndex:0,orderFilter:{1:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},{orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},{orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},{orderColumn:"buildarea",orderBy:"desc",describe:"面积从大到小"}],2:[{orderColumn:"id",orderBy:"desc",describe:"最新发布"},{orderColumn:"price",orderBy:"asc",describe:"租金从低到高"},{orderColumn:"price",orderBy:"desc",describe:"租金从高到底"}]},morePopVisible:!1,isShowSearch:!1,isShowHouseType:!1,houseTypeDetail:{1:"houseBuyDetail",2:"houseRentDetail",3:"villageDetail"},isLoadAll:!1,loading:!1,filterSelect:{district:{name:"",select:[]},price:{name:"",select:[]},roomType:{name:"",select:[]},filterMore:{name:"",select:[]}}}},mounted:function(){},components:{search:s("vCr1").default,houseItem:a.a},created:function(){this.gethouseLists(),this.getFilterList(),this.getDistrict()},computed:{},methods:{gethouseLists:function(e){var t=this;if(e||(this.houseParams[this.houseType].pageIndex=1),1==this.houseType){var s=this.houseParams[this.houseType];s.openId=this.$route.query?this.$route.query.openId:"",s.code=this.$route.query.code?this.$route.query.code:"",console.log(s),r.a.getSellHouseList(s).then(function(s){s.data.success?e?(t.houseLists=t.houseLists.concat(s.data.result.list),s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):(t.loading=!1,t.isLoadAll=!1),console.log(t.houseLists)):(window.scrollTo(0,0),t.recomment=s.data.result.recomment,0==t.recomment&&t.storageHouseSearchHistory(),t.houseLists=s.data.result.list,s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):(t.loading=!1,t.isLoadAll=!1)):t.$toast({message:s.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}else if(2==this.houseType){var i=this.houseParams[this.houseType];console.log(i),r.a.getRentHouseList(i).then(function(s){console.log(s),s.data.success?e?(t.houseLists=t.houseLists.concat(s.data.result.list),s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):(t.loading=!1,t.isLoadAll=!1)):(window.scrollTo(0,0),t.recomment=s.data.result.recomment,0==t.recomment&&t.storageHouseSearchHistory(),t.houseLists=s.data.result.list,s.data.result.list.length<t.houseParams[t.houseType].pageSize?(t.loading=!0,t.isLoadAll=!0):(t.loading=!1,t.isLoadAll=!1)):t.$toast({message:s.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(e){t.$toast({message:e.data.errorMessage,position:"bottom",duration:3e3})})}},getSearchHistoryCondition:function(){var e={name:[],params:{communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[]},filterSelect:this.filterSelect};this.filterSelect.district.name&&(e.name.push(this.filterSelect.district.name),e.params.areaIds=this.houseParams[this.houseType].areaIds),this.filterSelect.price.select.length>0&&this.filterSelect.price.select.forEach(function(t){e.name.push(t.child_name),e.params.filterIds.push(t.id)});var t=this.houseParams[this.houseType].priceMin,s=this.houseParams[this.houseType].priceMax;return(t||s)&&(e.name.push(this.filterSelect.price.name),e.params.priceMin=this.houseParams[this.houseType].priceMin,e.params.priceMax=this.houseParams[this.houseType].priceMax),this.filterSelect.roomType.select.length>0&&this.filterSelect.roomType.select.forEach(function(t){e.name.push(t.child_name),e.params.filterIds.push(t.id)}),this.communityName&&(e.name.push(this.communityName),e.params.filterIds.communityId=this.houseParams[this.houseType].communityId),e.name=e.name.join("|"),e},storageHouseSearchHistory:function(){var e=this,t=localStorage.getItem("houseSearchHistory");console.log(t),t=null==t||t.length<1?{1:[],2:[]}:JSON.parse(t);var s=this.getSearchHistoryCondition();console.log(s),""!=s.name&&(console.log(s),t[this.houseType].forEach(function(i,o){i.name==s.name&&t[e.houseType].splice(o,1)}),t[this.houseType].unshift(s),console.log(s),localStorage.setItem("houseSearchHistory",o()(t)))},searchHouseHistory:function(e){console.log(e),this.clearAllFilter(),this.houseParams[this.houseType].communityId=e.params.communityId,this.houseParams[this.houseType].areaIds=e.params.areaIds,this.houseParams[this.houseType].priceMin=e.params.priceMin,this.houseParams[this.houseType].priceMax=e.params.priceMax,this.houseParams[this.houseType].filterIds=e.params.filterIds,this.filterSelect=e.filterSelect,this.gethouseLists(),this.isShowSearch=!1},getFilterList:function(){var e=this;r.a.getFilterList({type:1}).then(function(t){t.data.success?e.filterList[1]=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t,position:"bottom",duration:3e3})}),r.a.getFilterList({type:2}).then(function(t){t.data.success?e.filterList[2]=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})})},getDistrict:function(){var e=this;r.a.getDistrict({city:"hz"}).then(function(t){if(t.data.success){var s=t.data.result,i={};s.unshift({district:"不限",street:[]}),s.forEach(function(e,t){i[t]=[],e.street.forEach(function(e){i[t].push(e.id)}),e.street.unshift({id:0,name:"不限"})}),e.district=s,e.streetInDistrictIds=i,console.log(e.district)}else e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t,position:"bottom",duration:3e3})})},selectHouseType:function(e){this.houseType=e,this.isShowHouseType=!1,this.clearAllFilter(),this.gethouseLists()},opentFilter:function(e){this.isShowHouseType||(this.filterType?(this.filterType="",this.filterTypeActive=""):(this.filterType=e,this.filterTypeActive=e),console.log(this.filterList))},clearAllFilter:function(){this.houseParams[this.houseType]={1:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""},2:{cityId:"hz",communityId:"",areaIds:"",priceMin:"",priceMax:"",filterIds:[],pageSize:10,pageIndex:1,orderBy:"",orderColumn:""}}[this.houseType],this.filterSelect={district:{name:"",select:[]},price:{name:"",select:[]},roomType:{name:"",select:[]},filterMore:{name:"",select:[]}},this.filterTypeActive="",this.activDistrictIndex=0,this.selectedDistrictIndex=0},clearFilterByChild:function(e){var t=this;e.forEach(function(e){var s=t.houseParams[t.houseType].filterIds.indexOf(e.id);s>=0&&t.houseParams[t.houseType].filterIds.splice(s,1)})},clearNowFilter:function(){if(this.filterSelect[this.filterType]={district:{name:"",select:[]},price:{name:"",select:[]},roomType:{name:"",select:[]},filterMore:{name:"",select:[]}}[this.filterType],"price"==this.filterType){var e=this.filterList[this.houseType].price.child;this.clearFilterByChild(e),this.houseParams[this.houseType].priceMax="",this.houseParams[this.houseType].priceMin=""}else if("roomType"==this.filterType){var t=this.filterList[this.houseType].room.child;this.clearFilterByChild(t)}else if("filterMore"==this.filterType){var s=this.filterList[this.houseType].buildarea.child,i=this.filterList[this.houseType].buildyear.child,o=this.filterList[this.houseType].forward.child,r=s.concat(i,o);console.log(s),console.log(i),console.log(o),console.log(r),this.clearFilterByChild(r)}console.log(this.filterSelect)},openHouseTypePop:function(){this.filterType="",this.isShowHouseType=!this.isShowHouseType},setFilterValue:function(e,t){var s=this.houseParams[this.houseType].filterIds.indexOf(t.id),i=this.filterSelect[this.filterType].select.indexOf(t);"-1"==s?(this.houseParams[this.houseType].filterIds.push(t.id),this.filterSelect[this.filterType].select.push(t)):(this.houseParams[this.houseType].filterIds.splice(s,1),this.filterSelect[this.filterType].select.splice(i,1)),"price"==this.filterType&&(this.houseParams[this.houseType].priceMin="",this.houseParams[this.houseType].priceMax="")},filterConfirm:function(){if(this.gethouseLists(),"price"==this.filterType){var e=this.houseParams[this.houseType].priceMin,t=this.houseParams[this.houseType].priceMax,s=1==this.houseType?"万元":"元";this.filterSelect[this.filterType].name=e&&t?e+"-"+t:e?e+s+"以上":t?t+s+"以下":this.filterSelect[this.filterType].select.length>1?"多选":this.filterSelect[this.filterType].select[0].child_name}else"roomType"==this.filterType?this.filterSelect[this.filterType].name=this.filterSelect[this.filterType].select.length>1?"多选":this.filterSelect[this.filterType].select[0].child_name:"filterMore"==this.filterType&&(this.filterSelect[this.filterType].name=this.filterSelect[this.filterType].select.length>=1?"多选":this.filterSelect[this.filterType].name);this.filterType=""},unlimit:function(){this.clearNowFilter(),this.gethouseLists(),this.filterType=""},setCheckDistrictValue:function(e,t){this.activDistrictIndex=t,0==t&&(this.houseParams[this.houseType].areaIds="",this.filterSelect.district.name="",this.gethouseLists(),this.filterType="")},setCheckStreetValue:function(e,t){0==t.id?(this.houseParams[this.houseType].areaIds=this.streetInDistrictIds[this.activDistrictIndex].join(","),this.filterSelect.district.name=this.district[this.activDistrictIndex].district):(this.houseParams[this.houseType].areaIds=t.id,this.filterSelect.district.name=t.name),this.gethouseLists(),this.selectedDistrictIndex=this.activDistrictIndex,this.filterType=""},setOrderValue:function(e,t){this.houseParams[this.houseType].orderBy=t.orderBy,this.houseParams[this.houseType].orderColumn=t.orderColumn,this.gethouseLists(),this.filterType=""},toggleMore:function(){this.filterType||(this.morePopVisible=!this.morePopVisible)},showSearch:function(){this.isShowSearch=!0},searchHouse:function(e){console.log(e),this.clearAllFilter(),this.communityName=e.communityName,this.houseParams[this.houseType].communityId=e.communityId,this.gethouseLists(),this.isShowSearch=!1},loadBottom:function(){this.houseParams[this.houseType].pageIndex++,console.log(this.houseParams[this.houseType].pageIndex),this.gethouseLists(!0),this.$refs.loadmore.onBottomLoaded()},loadMore:function(){if(!this.isLoadAll){if((document.documentElement.scrollTop||window.pageYOffset||document.body.scroll)+window.innerHeight>=(document.documentElement.offsetHeight||document.body.offsetHeight)){if(this.loading)return;console.log("++++"),this.loading=!0,this.houseParams[this.houseType].pageIndex++,this.gethouseLists(!0)}console.log(123)}}},watch:{}},l={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"box"},[e.isShowSearch?e._e():s("div",[s("div",{staticClass:"content"},[s("div",{staticClass:"top-fix"},[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:e.openHouseTypePop}},[e._v("\n                "+e._s(1==e.houseType?"二手房":"租房")),s("i",{staticClass:"icon iconfont"},[e._v("")])]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.houseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.communityName,expression:"communityName"}],attrs:{type:"search",placeholder:"请输入想找的楼盘名称"},domProps:{value:e.communityName},on:{focus:function(t){e.isShowSearch=!0},input:function(t){t.target.composing||(e.communityName=t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"my-search-right left",on:{click:e.toggleMore}},[s("i",{staticClass:"icon iconfont iconfont-more"},[e._v("")])])]),e._v(" "),s("div",{staticClass:"condition-filter clear",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"left clear"},[s("li",{class:{"select-active":"district"==e.filterTypeActive},on:{click:function(t){e.opentFilter("district")}}},[e._v("\n              "+e._s(e.filterSelect.district.name?e.filterSelect.district.name:"区域")+"\n              "),"district"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"district"==e.filterType?s("i",{staticClass:"icon iconfont select-active"},[e._v("")]):e._e()]),e._v(" "),s("li",{class:{"select-active":"price"==e.filterTypeActive},on:{click:function(t){e.opentFilter("price")}}},[e._v("\n              "+e._s(e.filterSelect.price.name?e.filterSelect.price.name:1==e.houseType?"价格":"租金")+"\n              "),"price"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"price"==e.filterType?s("i",{staticClass:"icon iconfont select-active"},[e._v("")]):e._e()]),e._v(" "),s("li",{class:{"select-active":"roomType"==e.filterTypeActive},on:{click:function(t){e.opentFilter("roomType")}}},[e._v("\n              "+e._s(e.filterSelect.roomType.name?e.filterSelect.roomType.name:"房型")+"\n              "),"roomType"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"roomType"==e.filterType?s("i",{staticClass:"icon iconfont select-active"},[e._v("")]):e._e()]),e._v(" "),s("li",{class:{"select-active":"filterMore"==e.filterTypeActive},on:{click:function(t){e.opentFilter("filterMore")}}},[e._v("\n              "+e._s(e.filterSelect.filterMore.name?e.filterSelect.filterMore.name:"筛选")+"\n              "),"filterMore"!=e.filterType?s("i",{staticClass:"icon iconfont"},[e._v("")]):e._e(),e._v(" "),"filterMore"==e.filterType?s("i",{staticClass:"icon iconfont select-active"},[e._v("")]):e._e()]),e._v(" "),s("li",{class:{"select-active":"filterOrder"==e.filterTypeActive},on:{click:function(t){e.opentFilter("filterOrder")}}},[s("i",{staticClass:"icon iconfont"},[e._v("")])])])]),e._v(" "),"district"==e.filterType?s("div",{staticClass:"filter-district",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"district-ul left",on:{touchmove:function(e){e.stopPropagation()}}},e._l(e.district,function(t,i){return s("li",{class:{"select-font-active":e.selectedDistrictIndex>0&&e.selectedDistrictIndex==i},on:{click:function(t){e.setCheckDistrictValue(t,i)}}},[e._v("\n                "+e._s(t.district)+"\n              ")])})),e._v(" "),s("ul",{staticClass:"street-ul left clear",on:{touchmove:function(e){e.stopPropagation()}}},e._l(e.district[e.activDistrictIndex].street,function(t){return s("li",{class:{"street-active":t.id>0&&e.houseParams[e.houseType].areaIds==t.id},on:{click:function(s){e.setCheckStreetValue(s,t)}}},[e._v("\n                "+e._s(t.name)+"\n              ")])}))]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e(),e._v(" "),"price"==e.filterType?s("div",{staticClass:"filter-price",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("价格区间（"+e._s(1==e.houseType?"万":"元")+"）")]),e._v(" "),s("div",{staticClass:"price-between-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMin,expression:"houseParams[houseType].priceMin"}],staticClass:"left",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMin},on:{focus:function(t){e.clearNowFilter()},input:[function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMin",t.target.value)},function(t){e.houseParams[e.houseType].priceMin.length>4&&(e.houseParams[e.houseType].priceMin=e.houseParams[e.houseType].priceMin.slice(0,4))}]}}),e._v(" "),e._m(1),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.houseParams[e.houseType].priceMax,expression:"houseParams[houseType].priceMax"}],staticClass:"right",attrs:{maxlength:"4",type:"number"},domProps:{value:e.houseParams[e.houseType].priceMax},on:{focus:e.clearNowFilter,input:[function(t){t.target.composing||e.$set(e.houseParams[e.houseType],"priceMax",t.target.value)},function(t){e.houseParams[e.houseType].priceMax.length>4&&(e.houseParams[e.houseType].priceMax=e.houseParams[e.houseType].priceMax.slice(0,4))}]}})]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList[e.houseType].price.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t)}}},[e._v(e._s(t.child_name)+"\n            ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"roomType"==e.filterType?s("div",{staticClass:"filter-room-type",on:{touchmove:function(e){e.preventDefault()}}},[s("ul",{staticClass:"filter-select"},e._l(e.filterList[e.houseType].room.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t)}}},[e._v("\n              "+e._s(t.child_name)+"\n            ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.unlimit}},[e._v("不限")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterMore"==e.filterType?s("div",{staticClass:"filter-more",on:{touchmove:function(e){e.preventDefault()}}},[s("div",{staticClass:"filter-title"},[e._v("建筑面积（㎡）")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList[e.houseType].buildarea.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t)}}},[e._v(e._s(t.child_name)+"\n            ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("楼龄")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList[e.houseType].buildyear.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t)}}},[e._v(e._s(t.child_name)+"\n            ")])})),e._v(" "),s("div",{staticClass:"filter-title"},[e._v("朝向")]),e._v(" "),s("ul",{staticClass:"filter-select"},e._l(e.filterList[e.houseType].forward.child,function(t){return s("li",{key:t.id,class:{"filter-select-active":e.houseParams[e.houseType].filterIds.indexOf(t.id)>=0},on:{click:function(s){e.setFilterValue(s,t)}}},[e._v(e._s(t.child_name)+"\n            ")])})),e._v(" "),s("div",{staticClass:"filter-btn"},[s("button",{staticClass:"unlimit-btn",on:{click:e.clearNowFilter}},[e._v("重置")]),e._v(" "),s("button",{staticClass:"confirm-btn",on:{click:e.filterConfirm}},[e._v("确定")])]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("price")}}})]):e._e(),e._v(" "),"filterOrder"==e.filterType?s("div",{staticClass:"filter-order"},[s("div",{staticClass:"clear"},[s("ul",{staticClass:"filter-order-ul left"},e._l(e.orderFilter[e.houseType],function(t,i){return s("li",{class:{"select-font-active":e.houseParams[e.houseType].orderColumn==t.orderColumn&&e.houseParams[e.houseType].orderBy==t.orderBy},on:{click:function(s){e.setOrderValue(s,t)}}},[e._v("\n                "+e._s(t.describe)+"\n              ")])}))]),e._v(" "),s("div",{staticClass:"filter-mask",on:{click:function(t){e.opentFilter("district")},touchmove:function(e){e.preventDefault()}}})]):e._e()]),e._v(" "),s("div",{staticClass:"house-box"},[e.recomment>0?s("div",{staticClass:"search-empty"},[s("div",{staticClass:"search-empty-tip"},[e._v("找不到您搜索的房源")]),e._v(" "),s("div",{staticClass:"recomment-tip"},[e._v("为您推荐")])]):e._e(),e._v(" "),e.houseLists.length>0?s("div",{staticClass:"house-list-box"},[s("ul",{ref:"houseScroll",staticClass:"house-list",on:{touchmove:e.loadMore}},e._l(e.houseLists,function(t){return s("li",{key:t.id,staticClass:"house-item clear"},[s("router-link",{attrs:{to:{name:e.houseTypeDetail[e.houseType],params:{cityId:"hz",houseId:t.id,userType:"customer",houseType:e.houseType}}}},[s("house-item",{attrs:{item:t,houseType:e.houseType}})],1)],1)})),e._v(" "),e.isLoadAll?e._e():s("p",{staticClass:"loading-more"},[e._m(2),s("span",{staticClass:"loading-more-text"},[e._v("加载更多")])]),e._v(" "),e.isLoadAll?s("p",{staticClass:"loading-more"},[e._v("没有更多数据了！")]):e._e()]):e._e()])])]),e._v(" "),e.isShowSearch?s("search",{attrs:{houseType:e.houseType},on:{hideSearch:function(t){e.isShowSearch=!1},searchHouse:e.searchHouse,searchHouseHistory:e.searchHouseHistory}}):e._e(),e._v(" "),e.morePopVisible?s("ul",{staticClass:"more-ul"},[e._m(3),e._v(" "),s("li",{on:{click:function(t){e.morePopVisible=!1}}},[s("router-link",{attrs:{to:{name:"myCare"}}},[s("span",[s("i",{staticClass:"icon iconfont my-care"},[e._v("")])]),e._v("我的关注")])],1),e._v(" "),s("li",{on:{click:function(t){e.morePopVisible=!1}}},[s("router-link",{attrs:{to:{name:"lookHouseIndex"}}},[s("span",[s("i",{staticClass:"icon iconfont look-house"},[e._v("")])]),e._v("看房预约")])],1),e._v(" "),s("li",{on:{click:function(t){e.morePopVisible=!1}}},[s("router-link",{attrs:{to:{name:"signSearch"}}},[s("span",[s("i",{staticClass:"icon iconfont sign-search"},[e._v("")])]),e._v("签约查询")])],1)]):e._e(),e._v(" "),e.morePopVisible?s("div",{staticClass:"full-mask",on:{touchmove:function(e){e.preventDefault()},click:function(t){e.morePopVisible=!1}}}):e._e()],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",[t("i",{staticClass:"icon iconfont iconfont-heng"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("span",{staticClass:"loading-more-span"},[t("i",{staticClass:"icon iconfont loading-more-icon"},[this._v("")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow"},[this._v("")])])}]};var n=s("vSla")(c,l,!1,function(e){s("6Mx5")},"data-v-70eccb5f",null);t.default=n.exports},vCr1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("3cXf"),o=s.n(i),r=s("pxwZ"),a={data:function(){return{params:{keyword:"",city:"hz",limit:"10"},isShowHouseType:!1,searchResult:[],searchHouseType:this.houseType,houseSearchHistory:localStorage.getItem("houseSearchHistory").length<=0?{1:[],2:[]}:JSON.parse(localStorage.getItem("houseSearchHistory"))}},props:{houseType:{default:1}},created:function(){},mounted:function(){},components:{},computed:{},methods:{showSearchResult:function(){var e=this,t=this.params;console.log(t.keyword),""!=t.keyword?r.a.searchCommunity(t).then(function(t){console.log(t.data),t.data.success?e.searchResult=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.Error,position:"bottom",duration:3e3})}):this.searchResult=[]},cancel:function(){},selectHouseType:function(e){this.searchHouseType=e,this.isShowHouseType=!1},searchHouse:function(e){this.$emit("searchHouse",e)},deletehouseSearchHistory:function(e){this.houseSearchHistory[this.searchHouseType]=[],localStorage.setItem("houseSearchHistory",o()(this.houseSearchHistory))}},watch:{}},c={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(t){e.isShowHouseType=!e.isShowHouseType}}},[e._v("\n          "+e._s(1==e.searchHouseType?"二手房":"租房")),s("i",{staticClass:"icon iconfont"},[e._v("")])]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.keyword,expression:"params.keyword"}],attrs:{type:"search",placeholder:"请输入想找的楼盘名称"},domProps:{value:e.params.keyword},on:{keyup:e.showSearchResult,input:function(t){t.target.composing||e.$set(e.params,"keyword",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"my-search-right right",on:{click:function(t){e.$emit("hideSearch")}}},[e._v("\n      取消\n    ")])]),e._v(" "),e.searchResult.length>0?s("ul",{staticClass:"search-result"},e._l(e.searchResult,function(t,i){return s("li",{key:t.communityId,on:{click:function(s){e.$emit("searchHouse",t)}}},[e._v(e._s(t.communityName))])})):e._e(),e._v(" "),e.houseSearchHistory&&e.houseSearchHistory[e.searchHouseType].length>0&&e.searchResult.length<=0?s("ul",{staticClass:"search-history"},[s("li",[s("span",[e._v("搜索历史")]),s("span",[s("i",{staticClass:"icon iconfont icon-delete",on:{click:function(t){e.deletehouseSearchHistory(e.searchHouseType)}}},[e._v("")])])]),e._v(" "),e._l(e.houseSearchHistory[e.searchHouseType],function(t,i){return s("li",{on:{click:function(s){e.$emit("searchHouseHistory",t)}}},[e._v(e._s(t.name))])})],2):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])}]};var l=s("vSla")(a,c,!1,function(e){s("9kwg")},"data-v-5d2f0cc2",null);t.default=l.exports}});
//# sourceMappingURL=5.b4cbadec696c1675247f.js.map