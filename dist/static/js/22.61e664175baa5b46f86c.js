webpackJsonp([22],{"sYG/":function(e,t){},vCr1:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=s("3cXf"),c=s.n(o),a=s("pxwZ"),i={data:function(){return{params:{keyword:"",city:"hz",limit:"5"},isShowHouseType:!1,searchResult:[],searchHouseType:this.houseType,communitySearchHistory:null==localStorage.getItem("communitySearchHistory")?{1:[],2:[]}:JSON.parse(localStorage.getItem("communitySearchHistory"))}},props:{houseType:{default:1}},created:function(){},mounted:function(){},components:{},computed:{},methods:{showSearchResult:function(){var e=this,t=this.params;console.log(t.keyword),""!=t.keyword&&a.a.searchCommunity(t).then(function(t){console.log(t.data),t.data.success?e.searchResult=t.data.result:e.$toast({message:t.data.errorMessage,position:"bottom",duration:3e3})}).catch(function(t){console.log(t),e.$toast({message:t.Error,position:"bottom",duration:3e3})})},cancel:function(){},selectHouseType:function(e){this.searchHouseType=e,this.isShowHouseType=!1},searchHouse:function(e){console.log(e),this.communitySearchHistory[this.searchHouseType].unshift(e),localStorage.setItem("communitySearchHistory",c()(this.communitySearchHistory)),this.$emit("searchHouse",e)},deleteCommunitySearchHistory:function(e){this.communitySearchHistory[this.searchHouseType]=[],localStorage.setItem("communitySearchHistory",c()(this.communitySearchHistory))}},watch:{}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("div",{staticClass:"my-search clear"},[s("div",{staticClass:"my-searchbar-inner left clear"},[s("div",{staticClass:"my-search-dropdown left"},[s("div",{on:{click:function(t){e.isShowHouseType=!e.isShowHouseType}}},[e._v("\n          "+e._s(1==e.searchHouseType?"二手房":"租房")),s("i",{staticClass:"icon iconfont"},[e._v("")])]),e._v(" "),e.isShowHouseType?s("ul",{staticClass:"house-type-ul"},[e._m(0),e._v(" "),s("li",{class:{"house-type-active":1==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(1)}}},[e._v("二手房")])]),e._v(" "),s("li",{class:{"house-type-active":2==e.searchHouseType}},[s("span",{on:{click:function(t){e.selectHouseType(2)}}},[e._v("租房")])])]):e._e()]),e._v(" "),s("div",{staticClass:"my-search-input left"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.params.keyword,expression:"params.keyword"}],attrs:{type:"search",placeholder:"请输入商圈或小区名"},domProps:{value:e.params.keyword},on:{keyup:e.showSearchResult,input:function(t){t.target.composing||e.$set(e.params,"keyword",t.target.value)}}})])]),e._v(" "),s("div",{staticClass:"my-search-right right",on:{click:function(t){e.$emit("hideSearch")}}},[e._v("\n      取消\n    ")])]),e._v(" "),e.searchResult.length>0?s("ul",{staticClass:"search-result"},e._l(e.searchResult,function(t,o){return s("li",{key:t.communityId,on:{click:function(s){e.searchHouse(t)}}},[e._v(e._s(t.communityName))])})):e._e(),e._v(" "),e.communitySearchHistory&&e.communitySearchHistory[e.searchHouseType].length>0&&e.searchResult.length<=0?s("ul",{staticClass:"search-history"},[s("li",[s("span",[e._v("搜索历史")]),s("span",[s("i",{staticClass:"icon iconfont icon-delete",on:{click:function(t){e.deleteCommunitySearchHistory(e.searchHouseType)}}},[e._v("")])])]),e._v(" "),e._l(e.communitySearchHistory[e.searchHouseType],function(t,o){return s("li",{on:{click:function(s){e.searchHouse(t)}}},[e._v(e._s(t.communityName))])})],2):e._e()])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("li",[t("i",{staticClass:"icon iconfont arrow-top"},[this._v("")])])}]};var r=s("vSla")(i,n,!1,function(e){s("sYG/")},"data-v-2c26bc9c",null);t.default=r.exports}});
//# sourceMappingURL=22.61e664175baa5b46f86c.js.map