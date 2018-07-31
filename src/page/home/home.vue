<template>
    <div class="box">
      <!--房源列表页-->
      <div v-if="!isShowSearch">
        <div class="content">
          <div class="top-fix">
            <!--搜索-->
            <div class="my-search clear">
              <div class="my-searchbar-inner left clear">
                <div class="my-search-dropdown left" >
                  <div class="" @click="openHouseTypePop">
                    {{houseType == 1?"二手房":'租房' }}<i class="icon iconfont">&#xe62d;</i>
                  </div>
                  <ul v-if="isShowHouseType" class="house-type-ul">
                    <li> <i class="icon iconfont arrow-top">&#xe65d;</i></li>
                    <li :class="{'house-type-active':houseType==1}"><span @click='selectHouseType(1)'>二手房</span></li>
                    <li :class="{'house-type-active':houseType==2}"><span @click='selectHouseType(2)'>租房</span></li>
                  </ul>
                </div>
                <div class="my-search-input left">
                  <input type="search" placeholder="请输入想找的楼盘名称" @focus="isShowSearch=true;isShowHouseType=false;filterType=''" v-model="communityName">
                </div>
                <span :class="['delIcon',{'hide':toHide}]" @click="toDefault" ></span>
              </div>
              <div class="my-search-right left" @click="toggleMore">
                <i class="icon iconfont iconfont-more">&#xe641;</i>
              </div>
            </div>
            <!--过滤导航-->
            <div class="condition-filter clear" @touchmove.prevent>
              <ul class="left clear">
                <li @click = 'opentFilter("district")' :class="{'select-active':filterTypeActive == 'district'}">
                  {{filterSelect.district.name?filterSelect.district.name:'区域'}}
                  <i v-if="filterType != 'district'" class="icon iconfont">&#xe65e;</i>
                  <i  v-if="filterType == 'district'" class="icon iconfont select-active">&#xe65d;</i>
                </li>
                <li @click = 'opentFilter("price")' :class="{'select-active':filterTypeActive == 'price'}">
                  {{filterSelect.price.name?filterSelect.price.name:houseType==1?'价格':'租金'}}
                  <i v-if="filterType != 'price'" class="icon iconfont">&#xe65e;</i>
                  <i  v-if="filterType == 'price'" class="icon iconfont select-active">&#xe65d;</i>
                </li>
                <li @click = 'opentFilter("roomType")' :class="{'select-active':filterTypeActive == 'roomType'}">
                  {{filterSelect.roomType.name?filterSelect.roomType.name:'房型'}}
                  <i v-if="filterType != 'roomType'" class="icon iconfont">&#xe65e;</i>
                  <i  v-if="filterType == 'roomType'" class="icon iconfont select-active">&#xe65d;</i>
                </li>
                <li @click = 'opentFilter("filterMore")' :class="{'select-active':filterTypeActive == 'filterMore'}">
                  {{filterSelect.filterMore.name?filterSelect.filterMore.name:'筛选'}}
                  <i v-if="filterType != 'filterMore'" class="icon iconfont">&#xe65e;</i>
                  <i v-if="filterType == 'filterMore'" class="icon iconfont select-active">&#xe65d;</i>
                </li>
                <li @click = 'opentFilter("filterOrder")' :class="{'select-active':filterTypeActive == 'filterOrder'}">
                  <i class="icon iconfont">&#xe656;</i></li>
              </ul>
            </div>

            <!--区域-->
            <div v-if="filterType == 'district'" class="filter-district" @touchmove.prevent>
              <div class="clear">
                <!--区域-->
                <ul class="district-ul left" @touchmove.stop>
                  <li v-for="(districtItem,index) in district"
                      :class="{'select-font-active': activDistrictIndex>0&&activDistrictIndex == index}"
                      @click="setCheckDistrictValue($event,index)">
                    {{districtItem.district}}
                  </li>
                </ul>
                <!--板块-->
                <ul class="street-ul left clear" @touchmove.stop>
                  <li v-for="streetItem in district[activDistrictIndex].street"
                      @click="setCheckStreetValue($event,streetItem)"
                      :class="{'street-active':streetItem.id>0&&houseParams[houseType].areaIds == streetItem.id}">
                    {{streetItem.name}}
                  </li>
                </ul>
              </div>
              <!--遮罩-->
              <div class="filter-mask" @click = 'opentFilter("district")' @touchmove.prevent></div>
            </div>
            <!--价格-->
            <div v-if="filterType == 'price'" class="filter-price"  @touchmove.prevent>
              <div class="filter-title">价格区间（{{houseType == 1?'万':'元'}}）</div>
              <div class="price-between-input">
                <input
                  class="left" v-model="houseParams[houseType].priceMin"
                  @focus="clearSelectPrice"
                  maxlength="4"
                  @input="checkInput($event,'priceMin')"
                  type="number"/>
                <span><i class="icon iconfont iconfont-heng">&#xe6f1;</i></span>
                <input
                  class="right"
                  v-model="houseParams[houseType].priceMax"
                  @focus="clearSelectPrice"
                  @input="checkInput($event,'priceMax')"
                  maxlength="4" type="number"/>
              </div>
              <ul class="filter-select">
                <li
                  v-for="item in filterList[houseType].price.child" :key="item.id"
                  class=""
                  :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                  @click="setFilterValue($event,item)">{{item.child_name}}
                </li>
              </ul>
              <div class="filter-btn">
                <button class="unlimit-btn" @click="unlimit">不限</button>
                <button class="confirm-btn" @click="filterConfirm">确定</button>
              </div>
              <!--遮罩-->
              <div class="filter-mask" @click = 'opentFilter("price")'></div>
            </div>
            <!--房型-->
            <div v-if="filterType == 'roomType'" class="filter-room-type"  @touchmove.prevent>
              <ul class="filter-select">
                <li v-for="item in filterList[houseType].room.child" :key="item.id"
                    :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                    @click="setFilterValue($event,item)">
                  {{item.child_name}}
                </li>
              </ul>
              <div class="filter-btn">
                <button class="unlimit-btn" @click="unlimit">不限</button>
                <button class="confirm-btn" @click="filterConfirm">确定</button>
              </div>
              <!--遮罩-->
              <div class="filter-mask" @click = 'opentFilter("price")'></div>
            </div>
            <!--筛选-->
            <div v-if="filterType == 'filterMore'" class="filter-more"  @touchmove.prevent>
              <div class="filter-title">建筑面积（㎡）</div>
              <ul class="filter-select">
                <li
                  v-for="item in filterList[houseType].buildarea.child" :key="item.id"
                  :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                  @click="setFilterValue($event,item)">{{item.child_name}}
                </li>
              </ul>
              <div class="filter-title">楼龄</div>
              <ul class="filter-select">
                <li
                  v-for="item in filterList[houseType].buildyear.child" :key="item.id"
                  :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                  @click="setFilterValue($event,item)">{{item.child_name}}
                </li>
              </ul>

              <div class="filter-title">朝向</div>
              <ul class="filter-select">
                <li
                  v-for="item in filterList[houseType].forward.child" :key="item.id"
                  :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                  @click="setFilterValue($event,item)">{{item.child_name}}
                </li>
              </ul>
              <div class="filter-btn">
                <button class="unlimit-btn" @click="clearNowFilter">重置</button>
                <button class="confirm-btn" @click="filterConfirm">确定</button>
              </div>
              <!--遮罩-->
              <div class="filter-mask" @click = 'opentFilter("price")'></div>
            </div>
            <!--排序-->
            <div v-if="filterType == 'filterOrder'" class="filter-order">
              <div class="clear">
                <ul class="filter-order-ul left">
                  <li v-for="(item,index) in orderFilter[houseType]"
                      :class="{'select-font-active': houseParams[houseType].orderColumn == item.orderColumn&&houseParams[houseType].orderBy == item.orderBy}"
                      @click="setOrderValue($event,item)">
                    {{item.describe}}
                  </li>
                </ul>
              </div>
              <!--遮罩-->
              <div class="filter-mask" @click = 'opentFilter("district")' @touchmove.prevent></div>
            </div>
          </div>
          <div class="house-box">
            <!--搜索结果为空-->
            <div v-if="recomment > 0" class="search-empty">
              <div class="search-empty-tip">找不到您搜索的房源</div>
              <div class="recomment-tip">为您推荐</div>
            </div>
            <!--房源结果列表-->
            <div v-if="houseLists.length>0" class="house-list-box" @click="boxClick">
              <ul class="house-list" ref="houseScroll" @touchmove="loadMore">
                <li class="house-item clear" v-for="item in houseLists" :key="item.id">
                  <router-link
                    :to="{name:houseTypeDetail[houseType], params:{cityId:'hz', houseId:item.id, userType:'customer', houseType:houseType}}">
                    <house-item :item="item" :houseType="houseType"/>
                  </router-link>
                </li>
              </ul>
              <p v-if="!isLoadAll" class="loading-more"><span class="loading-more-span"><i class="icon iconfont loading-more-icon">&#xe6ae;</i></span><span class="loading-more-text">加载更多</span></p>
              <p v-if="isLoadAll" class="loading-more">没有更多数据了！</p>
            </div>
          </div>
        </div>
      </div>
      <!--搜索页-->
      <search
        v-if="isShowSearch"
        :houseType="houseType"
        @hideSearch="isShowSearch = false"
        @searchHouse="searchHouse"
        @searchHouseHistory="searchHouseHistory">
      </search>
      <!--加载更多-->
      <ul class="more-ul" v-if="morePopVisible">
        <li><i class="icon iconfont arrow">&#xe65d;</i></li>
        <li @click="morePopVisible=false"><router-link :to="{name:'myCare'}"><span><i class="icon iconfont my-care">&#xe609;</i></span>我的关注</router-link></li>
        <li @click="morePopVisible=false"><router-link :to="{name:'lookHouseIndex'}"><span><i class="icon iconfont look-house">&#xe610;</i></span>看房预约</router-link></li>
        <li @click="morePopVisible=false"><router-link :to="{name:'signSearch'}"><span><i class="icon iconfont sign-search">&#xe60b;</i></span>签约查询</router-link></li>
      </ul>
      <!--全屏遮罩-->
      <div class="full-mask" v-if="morePopVisible" @touchmove.prevent @click="morePopVisible = false"></div>
    </div>
</template>
<script>
    import api from '../../api/axios'
    import houseItem from '../../components/common/houseItem'
    import search from '../../page/search/search'
//    import $alert from '../../components/common/alert/alert.js'

    export default {
        data(){
            return {
              houseParams:{
                1:{
                  cityId:"hz",
                  communityId:"",
                  areaIds:"",
                  priceMin:"",//最小价格
                  priceMax:"",//最大价格
                  filterIds:[],
                  pageSize:10,
                  pageIndex:1,
                  orderBy:"",
                  orderColumn:'',
                },//二手房房源请求参数
                2:{
                  cityId:"hz",
                  communityId:"",
                  areaIds:"",
                  priceMin:"",//最小价格
                  priceMax:"",//最大价格
                  filterIds:[],
                  pageSize:10,
                  pageIndex:1,
                  orderBy:"",
                  orderColumn:'',
                },//租房房源请求参数
              },
              communityName:'',//搜索的小区名
              houseLists:[],//房源列表
              recomment:0,//是否为推荐房源
              houseType:this.$store.state.activeInfo.houseType?this.$store.state.activeInfo.houseType:1,//房源类型
              filterType:'',//过滤选项卡
              filterTypeActive:'',//选中的选项卡
              filterList:{
                  1:{},
                  2:{}
              },//获取过滤列表
              district:[],//区域板块列表
              streetInDistrictIds:[],//板块不限列表（板块不限）
              activDistrictIndex:0,//活动的小区
              selectedDistrictIndex:0,//选中的区域
              selectedfilterIds:[],//选中的筛选条件
              selectedPriceMin:'',//选中的最小价格
              selectedPriceMax:'',//选中的最大价格

              orderFilter:{
                  1:[
                    {orderColumn:"id",orderBy:"desc",describe:"最新发布"},
                    {orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},
                    {orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},
                    {orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},
                    {orderColumn:"buildarea",orderBy:"desc",describe:"面积从大到小"},
                  ],
                2:[
                  {orderColumn:"id",orderBy:"desc",describe:"最新发布"},
                  {orderColumn:"price",orderBy:"asc",describe:"租金从低到高"},
                  {orderColumn:"price",orderBy:"desc",describe:"租金从高到底"},
                ],
              },
              morePopVisible:false,//更多菜单弹出选项
              isShowSearch:false,//展示搜索页
              isShowHouseType:false,//展示房源类型弹框
              houseTypeDetail:{
                1:'houseBuyDetail',
                2:'houseRentDetail',
                3:'villageDetail',
              },//详情类型
              isLoadAll: false, //是否加载完所有数据
              loading:false,
              filterSelect:{
                district:{name:'',select:[]},
                price:{name:'',select:[]},
                roomType:{name:'',select:[]},
                filterMore:{name:'',select:[]},
              },
//              searchHistoryName:'',//拼接历史的名称
              toHide:true
            }
        },
        mounted(){

        },

        components: {
          search,
          houseItem,
        },
        created(){
          this.gethouseLists();
          this.getFilterList();
          this.getDistrict();
        },
        computed: {

        },
        methods: {
          toDefault(){
            //清空筛选条件
              this.clearAllFilter();
              this.gethouseLists();

          },
            //全局点击事件
          boxClick(){
              this.isShowHouseType = false
          },

          gethouseLists(isLoadMore){
            if(!isLoadMore){ //不是加载更多时
              this.houseParams[this.houseType].pageIndex = 1
            }
            if (this.houseType == 1){

              //获取出售房源列表
              let params = this.houseParams[this.houseType];
              //openId:this.$route.query ? this.$route.query.openId:"",
              params.openId = this.$route.query? this.$route.query.openId : "";
              params.code = this.$route.query.code ? this.$route.query.code : "";
              console.log(params)
              api.getSellHouseList(params)
                .then( res => {
                  if (res.data.success){
                        if(isLoadMore){
                          this.houseLists = this.houseLists.concat(res.data.result.list);
                          if (res.data.result.list.length < this.houseParams[this.houseType].pageSize){//是否已经加载完所有数据
                            this.loading = true;
                            this.isLoadAll = true;
                          }else{
                            this.loading = false
                            this.isLoadAll = false;
                          }
                          console.log(this.houseLists)
                        }else{
                          window.scrollTo(0,0);//置顶
                          //本地存储搜索历史
                          this.recomment = res.data.result.recomment;//是否为推荐房源
                          if( this.recomment==0){
                            this.storageHouseSearchHistory()
                          }
                          this.houseLists = res.data.result.list;
                          if (res.data.result.list.length<this.houseParams[this.houseType].pageSize){ //是否已经加载完所有数据
                            this.loading = true
                            this.isLoadAll = true;
                          }else{
                            this.loading = false
                            this.isLoadAll = false;
                          }
                        }
                  }else{
                    this.$toast({
                      message: res.data.errorMessage,
                      position: 'bottom',
                      duration: 3000
                    });
                  }
                })
                .catch(res =>{
                  this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
                });
            }
            else if(this.houseType == 2){
              //获取出售房源列表
              let params = this.houseParams[this.houseType];
              console.log(params)
              api.getRentHouseList(params)
                .then( res => {
                    console.log(res)
                  if (res.data.success){
                    if(isLoadMore){
                      this.houseLists = this.houseLists.concat(res.data.result.list);
                      if (res.data.result.list.length < this.houseParams[this.houseType].pageSize){//是否已经加载完所有数据
                        this.loading = true;
                        this.isLoadAll = true;
                      }else{
                        this.loading = false
                        this.isLoadAll = false;
                      }
                    }else{
                      window.scrollTo(0,0);//置顶
                      //本地存储搜索历史
                      this.recomment = res.data.result.recomment;//是否为推荐房源
                      if( this.recomment==0){
                        this.storageHouseSearchHistory()
                      }
                      this.houseLists = res.data.result.list;
                      if (res.data.result.list.length<this.houseParams[this.houseType].pageSize){ //是否已经加载完所有数据
                        this.loading = true
                        this.isLoadAll = true;
                      }else{
                        this.loading = false
                        this.isLoadAll = false;
                      }
                    }
                  }else{
                    this.$toast({
                      message: res.data.errorMessage,
                      position: 'bottom',
                      duration: 3000
                    });
                  }
                })
                .catch(res =>{
                  this.$toast({
                    message: res.data.errorMessage,
                    position: 'bottom',
                    duration: 3000
                  });
                });
            }
          },
          //拼接历史筛选
          getSearchHistoryCondition(){
              let searchHistoryCondition={
                name:[],
                params :{
                  communityId:"",
                  areaIds:"",
                  priceMin:"",//最小价格
                  priceMax:"",//最大价格
                  filterIds:[],
                },//房源请求参数
                filterSelect:{
                  district:this.filterSelect.district,
                  price:this.filterSelect.price,
                  roomType:this.filterSelect.roomType,
                  filterMore:{name:'',select:[]},
                }//筛选条件展示名
              }
              //获取小区名
              if(this.communityName){
                searchHistoryCondition.name.push(this.communityName)
                searchHistoryCondition.communityName = this.communityName
                searchHistoryCondition.params.communityId = this.houseParams[this.houseType].communityId;
              }
              //获取筛选的区域名
              if(this.filterSelect.district.name){
                searchHistoryCondition.name.push(this.filterSelect.district.name)
                searchHistoryCondition.params.areaIds = this.houseParams[this.houseType].areaIds
                searchHistoryCondition.selectedDistrictIndex = this.selectedDistrictIndex
              }
              //获取筛选价格
              if(this.filterSelect.price.select.length>0){
                this.filterSelect.price.select.forEach(item=>{
                  searchHistoryCondition.name.push(item.child_name)
                  searchHistoryCondition.params.filterIds.push(item.id)
                })
              }
              //获取输入的价格
              let priceMin = this.houseParams[this.houseType].priceMin;
              let priceMax = this.houseParams[this.houseType].priceMax;
              if(priceMin || priceMax){
                searchHistoryCondition.name.push(this.filterSelect.price.name)
                searchHistoryCondition.params.priceMin = this.houseParams[this.houseType].priceMin;
                searchHistoryCondition.params.priceMax = this.houseParams[this.houseType].priceMax
              }
              //获取输入的房型
              if(this.filterSelect.roomType.select.length>0){
                this.filterSelect.roomType.select.forEach(item=>{
                  searchHistoryCondition.name.push(item.child_name)
                  searchHistoryCondition.params.filterIds.push(item.id)
                })
              }
              searchHistoryCondition.name = searchHistoryCondition.name.join('|')
              return searchHistoryCondition;
          },
          //本地存储搜索历史
          storageHouseSearchHistory(){
              let houseSearchHistory = localStorage.getItem("houseSearchHistory");
              if(houseSearchHistory == null || houseSearchHistory.length<1){
                houseSearchHistory = {
                    1:[],//二手房搜索历史
                    2:[]//租房搜索历史
                };
              }else{
                houseSearchHistory = JSON.parse(houseSearchHistory)
              }
              //获取历史搜索条件
            let searchHistory =  this.getSearchHistoryCondition();
            if(searchHistory.name==''){ //无筛选条件则清空
                return
            }
            //去除搜索名重复的历史搜索
            houseSearchHistory[this.houseType].forEach((item,index)=>{
                if(item.name == searchHistory.name){
                  houseSearchHistory[this.houseType].splice(index,1)
                }
            })
            //添加历史纪录
            houseSearchHistory[this.houseType].unshift(searchHistory);
            localStorage.setItem("houseSearchHistory",JSON.stringify(houseSearchHistory));
          },
          //搜索历史记录点击
          searchHouseHistory(item,houseType){
              console.log(item)
            //清空筛选条件
            this.clearAllFilter();
            this.houseType = houseType
            this.communityName = item.communityName
            this.houseParams[this.houseType].communityId = item.params.communityId
            this.houseParams[this.houseType].areaIds = item.params.areaIds
            this.houseParams[this.houseType].priceMin = this.selectedPriceMin = item.params.priceMin
            this.houseParams[this.houseType].priceMax = this.selectedPriceMax = item.params.priceMax
            this.houseParams[this.houseType].filterIds = this.selectedfilterIds = item.params.filterIds
            this.filterSelect = item.filterSelect

            this.selectedDistrictIndex=item.selectedDistrictIndex,//选中的小区

            this.gethouseLists();
            this.isShowSearch = false //不展示搜索组键
          },
          //获取过滤条件
          getFilterList(){
            api.getFilterList({type:1})
              .then( res => {
                if (res.data.success){
                  this.filterList[1] = res.data.result

                }else{
                  this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
                }
              })
              .catch(res =>{
                this.$toast({
                  message: res,
                  position: 'bottom',
                  duration: 3000
                });
              });
            api.getFilterList({type:2})
              .then( res => {
                if (res.data.success){
                  this.filterList[2] = res.data.result
                }else{
                  this.$toast({
                    message: res.data.errorMessage,
                    position: 'bottom',
                    duration: 3000
                  });
                }
              })
              .catch(res =>{
                this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
              });
          },
          //获取区域
          getDistrict(){
            let params = {
              city:"hz"
            };
            api.getDistrict(params)
              .then( res => {
                if (res.data.success){
                    let district =  res.data.result;
                    let streetInDistrictIds = {}
                  district.unshift({district:'不限',street:[]});
                  district.forEach((item,index)=>{
                    streetInDistrictIds[index] = [];
                    item.street.forEach(streetItem=>{
//                        console.log(index)
//                      console.log(streetItem.id)
                      streetInDistrictIds[index].push(streetItem.id)
                    })
                    item.street.unshift({id:0,name:'不限'})
                  });

                  this.district = district;
                  this.streetInDistrictIds = streetInDistrictIds;
                  console.log(this.district)
                }else{
                  this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
                }
              })
              .catch(res =>{
                  console.log(res)
                this.$toast({
                  message: res,
                  position: 'bottom',
                  duration: 3000
                });
              });
          },
          //获取选中房源类型
          selectHouseType(houseType){
            this.houseType=houseType;
            this.isShowHouseType = false;//关闭弹框

//            this.getFilterList();
            //清空筛选条件
            this.clearAllFilter();
            this.gethouseLists();
          },
          //打开筛选弹框
          opentFilter(filterType){
              this.isShowHouseType = false
              if (this.filterType){ //关闭弹框
                this.filterType = ''
                this.filterTypeActive = ''
              }else{ //打开弹框
                //设置选中的小区为活动小区
                this.activDistrictIndex = this.selectedDistrictIndex;
                //设置选中的条件为活动的条件
                this.houseParams[this.houseType].filterIds = [].concat(this.selectedfilterIds);
                //设置输入的价格
                this.houseParams[this.houseType].priceMax = this.selectedPriceMax
                this.houseParams[this.houseType].priceMin = this.selectedPriceMin

                console.log(this.selectedfilterIds+'selectedfilterIds')
                this.filterType = filterType
                this.filterTypeActive = filterType
              }
            console.log(this.filterList)
          },
          //清空筛选条件
          clearAllFilter(){
            let  filterSelect = {
                  district:{name:'',select:[]},
                  price:{name:'',select:[]},
                  roomType:{name:'',select:[]},
                  filterMore:{name:'',select:[]},
                };
            let houseParams = {
              1:{
                cityId:"hz",
                  communityId:"",
                  areaIds:"",
                  priceMin:"",//最小价格
                  priceMax:"",//最大价格
                  filterIds:[],
                  pageSize:10,
                  pageIndex:1,
                  orderBy:"",
                  orderColumn:'',
              },//二手房房源请求参数
              2:{
                cityId:"hz",
                  communityId:"",
                  areaIds:"",
                  priceMin:"",//最小价格
                  priceMax:"",//最大价格
                  filterIds:[],
                  pageSize:10,
                  pageIndex:1,
                  orderBy:"",
                  orderColumn:'',
              },//租房房源请求参数
            }
            //清空房源查询参数
            this.houseParams[this.houseType] = houseParams[this.houseType];
            //清空过滤选中的条件
            this.filterSelect = filterSelect;
            this.filterTypeActive = '';
            this.activDistrictIndex = 0;
            //清空选中的条件
            this.selectedDistrictIndex = 0,//选中的区域
            this.selectedfilterIds = [],//选中的筛选条件
            this.selectedPriceMin = '',//选中的最小价格
            this.selectedPriceMax = '',//选中的最大价格
            //清空小区名
            this.communityName = '';
          },
          //清空传入的筛选条件
          clearFilterByChild(child,clearSelect){
            child.forEach((item)=>{
              let index = this.houseParams[this.houseType].filterIds.indexOf(item.id);
              if(index>=0){
                this.houseParams[this.houseType].filterIds.splice(index,1)
              }
              if(clearSelect){
                //清空选中的条件
                let select_index = this.selectedfilterIds.indexOf(item.id)
                if(select_index>=0){
                  this.selectedfilterIds.splice(select_index,1)
                }
              }
            })
          },
          //检查输入的价格是否合适
          checkInput(event,priceType){
            let price = event.target.value
              if(price==''){
                price = ''
              }else if(price <=0){
                price = 0
              }else if(price.length>4){
                price =  price.slice(0, 4);
              }
            this.houseParams[this.houseType][priceType] = price
          },
          //输入价格事件
          clearSelectPrice(){
            //清空选择的价格
            let child = this.filterList[this.houseType].price.child;
            this.clearFilterByChild(child,false);
            //清空展示的价格
            this.filterSelect.price.select = [];
          },
          //清空价格筛选条件
          clearNowFilter(){
              let  filterSelect = {
                district:{name:'',select:[]},
                price:{name:'',select:[]},
                roomType:{name:'',select:[]},
                filterMore:{name:'',select:[]},
              }
              this.filterSelect[this.filterType] = filterSelect[this.filterType];
              if(this.filterType == 'price'){//价格
                let child = this.filterList[this.houseType].price.child;
                this.clearFilterByChild(child,true);
                this.houseParams[this.houseType].priceMax = '';
                this.houseParams[this.houseType].priceMin = '';
                //清空选中的条件
                this.selectedPriceMin = '';
                this.selectedPriceMax = '';
              }else if(this.filterType == 'roomType'){//房型
                let child = this.filterList[this.houseType].room.child;
                this.clearFilterByChild(child,true);
              }else if(this.filterType == 'filterMore'){//筛选
                let buildareaChild = this.filterList[this.houseType].buildarea.child;
                let buildyearChild = this.filterList[this.houseType].buildyear.child;
                let forwardChild = this.filterList[this.houseType].forward.child;
                let child = buildareaChild.concat(buildyearChild,forwardChild);
                console.log(buildareaChild)
                console.log(buildyearChild)
                console.log(forwardChild)
                console.log(child)
                this.clearFilterByChild(child,true);
              }
              console.log(this.filterSelect)
          },
          //打开房源类型弹框
          openHouseTypePop(){
            this.filterType = '';
            this.isShowHouseType = !this.isShowHouseType;
          },
          //设置过滤条件
          setFilterValue(event,item){
            let idIndex = this.houseParams[this.houseType].filterIds.indexOf(item.id);
            let selectIndex = this.filterSelect[this.filterType].select.indexOf(item);//显示选中的条件
            if (idIndex == "-1") {
              this.houseParams[this.houseType].filterIds.push(item.id);
              this.filterSelect[this.filterType].select.push(item);//显示选中的条件
            } else {
              this.houseParams[this.houseType].filterIds.splice(idIndex,1);
              this.filterSelect[this.filterType].select.splice(selectIndex,1);
            }
            if(this.filterType == 'price'){
              this.houseParams[this.houseType].priceMin = '';
              this.houseParams[this.houseType].priceMax = '';
            }
          },
          //过滤确认按钮
          filterConfirm(){
              //设置当前活动条件为选中的筛选条件
            this.selectedfilterIds = [].concat( this.houseParams[this.houseType].filterIds);
            this.gethouseLists();
            //设置选中条件名
            if(this.filterType == 'price'){
              //获取输入的价格
              let priceMin = this.houseParams[this.houseType].priceMin;
              let priceMax = this.houseParams[this.houseType].priceMax;
              let priceUnit = this.houseType == 1?'万':'元';
              this.selectedPriceMin = priceMin
              this.selectedPriceMax = priceMax
              if(priceMin && priceMax){
                this.filterSelect[this.filterType].name = priceMin+'-'+priceMax
              }else if(priceMin){
                this.filterSelect[this.filterType].name = priceMin+priceUnit+'以上'
              }else if(priceMax){
                this.filterSelect[this.filterType].name = priceMax+priceUnit+'以下'
              }else{
                console.log(this.filterSelect[this.filterType]);
                if(this.filterSelect[this.filterType].select.length>1){
                    this.filterSelect[this.filterType].name = '多选'
                  }else if (this.filterSelect[this.filterType].select.length == 1){
                    this.filterSelect[this.filterType].name = this.filterSelect[this.filterType].select[0].child_name;
                  }else{
                    this.filterSelect[this.filterType].name = ''
                  }
              }
            }else if(this.filterType == 'roomType'){
                console.log( this.filterSelect[this.filterType])
              if(this.filterSelect[this.filterType].select.length>1){
                this.filterSelect[this.filterType].name = '多选'
              }else if (this.filterSelect[this.filterType].select.length == 1){
                this.filterSelect[this.filterType].name = this.filterSelect[this.filterType].select[0].child_name;
              }else{
                this.filterSelect[this.filterType].name = ''
              }
            }else if(this.filterType == 'filterMore'){
              if(this.filterSelect[this.filterType].select.length>=1) {
                this.filterSelect[this.filterType].name = '多选'
              }else{
                this.filterSelect[this.filterType].name = ''
              }
            }
            this.filterType = '';
          },
          //过滤不限按钮
          unlimit(){
//            this.houseParams[this.houseType] = this.houseParamsInit[this.houseType]//房源请求参数
            this.clearNowFilter();
            this.gethouseLists();
            this.filterType = '';
          },
          //设置区域滤条件
          setCheckDistrictValue(event,id){
            this.activDistrictIndex = id;
              if(id == 0){
                this.houseParams[this.houseType].areaIds = '';
                this.filterSelect.district.name = '';
                this.gethouseLists();
                this.filterType = ''
              }
          },
          //设置板块过滤条件
          setCheckStreetValue(event,streetItem){
              if(streetItem.id == 0){
                this.houseParams[this.houseType].areaIds = this.streetInDistrictIds[this.activDistrictIndex].join(',')
                this.filterSelect.district.name = this.district[this.activDistrictIndex].district;
              }else{
                this.houseParams[this.houseType].areaIds = streetItem.id;
                this.filterSelect.district.name = streetItem.name;
              }
            this.gethouseLists();
            this.selectedDistrictIndex = this.activDistrictIndex//设置搜素时选中的区域
            this.filterType = ''

          },
          //设置排序条件
          setOrderValue(event,orderItem){
            this.houseParams[this.houseType].orderBy = orderItem.orderBy;
            this.houseParams[this.houseType].orderColumn = orderItem.orderColumn;
            this.gethouseLists();
            this.filterType = ''
          },
          //更多菜单
          toggleMore(){
              this.filterType = '';
              this.isShowHouseType = false
              this.morePopVisible = !this.morePopVisible
          },
          //展示搜索页
          showSearch(){
              this.isShowSearch = true
          },
          //通过小区搜索房源(搜索子组件触发)
          searchHouse(community,houseType){
              console.log(community)
            //清空筛选条件
            this.clearAllFilter();
            this.communityName = community.communityName
            this.houseType =  houseType
           //设置小区id
            this.houseParams[this.houseType].communityId = community.communityId;
            this.gethouseLists();
            this.isShowSearch = false //不展示搜索组键

          },
          loadMore() {
              if(this.isLoadAll){ //如果加载完了所有数据
                  return
              }
              let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scroll;
              let innerHeight = window.innerHeight;
              let offsetHeight =   document.documentElement.offsetHeight || document.body.offsetHeight;
              // 判断是否滚动到底部
              if(scrollTop + innerHeight >= offsetHeight) {
                  if(this.loading){ //防止连续请求
                      return
                  }
                console.log("++++")
                  this.loading = true;
                  this.houseParams[this.houseType].pageIndex++;
                  this.gethouseLists(true)
              }

//            this.loading = true;
//            this.houseParams[this.houseType].pageIndex++;
//            console.log(this.houseParams[this.houseType].pageIndex)
//            this.gethouseLists(true)
//              this.loading = false;
            console.log(123)
          }
        },
        watch:{
//          houseParams(){
//              this.gethouseLists();
//          },
//          houseType(){
//
//          }
          communityName:function(){
            if(this.communityName){
             this.toHide = false
            }else{
              this.toHide = true;
            }
          }
        }
    }

</script>

<style lang="scss" scoped>
  /*公用样式封装*/
  /*边框*/
  @mixin border {
    border: 0.05rem solid #f5f5f5;
  }
  @mixin border-top {
    border-top: 0.05rem solid #f5f5f5;
  }
  /*过滤弹框*/
  @mixin filter-wrap{
    width: 100%;
    font-color:#424242;
    font-size: 1.5rem;
    position: absolute;
    z-index: 6;
    top: 10.5rem;
    background-color: #fff;
  }
  /*过滤标题*/
  @mixin filter-title{
    margin:0 2rem;
//    @include border-top;
    /*padding: 1rem 0 2rem 0;*/
    padding-bottom:1rem ;
    font-size: 1.5rem;
  }
  /*过滤选择项*/
  @mixin filter-select{
    overflow: hidden;
    clear: both;
    margin: 0 2rem;
    li {
      float: left;
      width: 30%;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
      margin-right: 3%;
      border-radius: 0.025rem;
      /*border:1px solid #f5f5f5;*/
      @include border;
      box-sizing: border-box;
      font-size: 1.3rem;

    }
  }
  /*选项选中状态*/
  @mixin filter-select-active{
    background-color: #fbf6ee;
    color:#ffc16b;
  }
  /*过滤按钮*/
  @mixin filter-btn{
    overflow: hidden;
    width: 100%;
    /*margin-top: 2rem;*/
    button{
      width: 50%;
      float: left;
      height: 4rem;
    }
    button:nth-child(1){
      background-color:#f8f8f8 ;
    }
    button:nth-child(2){
      font-size: 1.6rem;
      color: #754501;
      background-color: #ffc16b;
    }
  }
  .box{
    font-size: 1.6rem;
  }
  /*固定头*/
  .top-fix{
    position: fixed;
    background-color: #fff;
    width: 100%;
    z-index: 0;
    /**搜索样式*/
    .my-search{
      margin-top: 1.2rem;
      height: 3.5rem;
      font-size: 1.3rem;
      padding:0 2rem;
      div{
        height: 3.5rem;
        line-height: 3.5rem;
      }
      .my-searchbar-inner{
        background-color: #f5f5f5;
        border-radius: 6px;
        padding-left: 1rem;
        width:85%;
        // width: 29rem;
        position: relative;
        .delIcon{
          display: inline-block;
          width: 2.1rem;
          height:2.1rem;
          background: url(../../assets/icon/icon_searchbar_cancle@2x.png) center no-repeat;
          position: absolute;
          right: 1.2rem;
          top:0.75rem;
          background-size: 2rem 2rem;
        }
        .hide{
          display: none;
        }
      }
      /*下拉样式*/
      .my-search-dropdown{
        position: relative;
        width: 24%;
        font-size: 1.3rem;
        .house-type-ul{
          width: 9rem;
          top: 5rem;
          position: absolute;
          z-index: 6;
          /*left: 2rem;*/
          background-color: #fff;
          font-size: 1.3rem;
          border-radius: 2px;
          box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.5);
          li:not(:first-child){
            height: 3.5rem;
            line-height: 3.5rem;
            padding:0 2rem;
            &:nth-child(3){
              @include border-top;
            }
            a{
              color: #424242;
            }
          }
          li:first-child{
            width: 13px;
            height: 10px;
            overflow: hidden;
            line-height: 10px;
            background-color: #fff;
            position: absolute;
            top: -9px;
            left: 1rem;
            .arrow-top{
              color:#fff;
              font-size: 1.6rem;
            }
          }
          .house-type-active{
            color: #ffc16b;
          }
        ;
        }
      }
      .my-search-input{
        /*border: 0;*/
        padding-left: 0.5rem;
        width: 70%;
        color: #424242;
        input{
          background-color: transparent;
          font-size: 1.3rem;
          width: 100%;
        }
      }
      .my-search-right{
        width: 15%;
        text-align: right;
        .iconfont-more{font-size: 2.5rem};
      }
    }

    /**条件过滤*/
    .condition-filter{
      padding:2rem 2rem 0 2rem;
      ul{
        padding-bottom: 1.5rem;
        width: 100%;
        display: flex;
      }
      li{
        /*float: left;*/
        /*width: 16%;*/
        /*margin-left:5%;*/
        text-align: center;
        font-size: 1.5rem;
        flex:1 1 auto;
        li:last-child{
          width: 1rem;
        }
      }
      /*li:last-child{*/
      /*text-align: center;*/
      /*}*/
      .select-active{
        color:#ffc16a;
      }
    }
  }
  /*搜索右边点击弹框*/
  .more-ul{
    position: fixed;
    z-index: 6;
    right: 2rem;
    top: 5rem;
    background-color: #fff;
    font-size: 1.3rem;
    border-radius: 6px;
    li:not(:first-child){
      height: 3.5rem;
      line-height: 3.5rem;
      padding: 0 1rem;
      &:nth-child(n+3){
        @include border-top;
      }
      a{
        color: #424242;
        display: inline-block;
        width: 100%;
      }
      span{
        display: inline-block;
        width: 2rem;
        /*margin: 0 .5rem 0 1rem;*/
      }
    }
    .arrow{
      color:#fff;
      position: absolute;
      top: -1.5rem;
      right: 0.5rem;
      font-size: 2.5rem;
    }
    .my-care{
      color:#ffc16b ;
      font-size: 1.9rem;
      vertical-align: middle;
    }
    .look-house{
      color:#5c5990 ;
      font-size: 2.2rem;
      vertical-align: bottom;
    }
    .sign-search{
      color:#eed7b5 ;
      font-size: 1.9rem;
      vertical-align: middle;
    }
  }

  /*价格筛选*/
    .filter-price{
      @include filter-wrap;
      .filter-title{
        @include filter-title;
      }
      .price-between-input {
        clear: both;
        margin:0 2rem 1rem 2rem;
        line-height: 2rem;
        height: 2.5rem;
        input{
          height: 100%;
          text-align: center;
          font-size: 1.6rem;
          box-sizing:border-box;
          /*border: 1px solid #f5f5f5;*/
          @include border;
          width: 45%;
        }
        span{
          display: inline-block;
          width: 10%;
          text-align: center;
          /*height: 100%;*/
        }
        .iconfont-heng{
          font-size: 2rem;
        }
      }
      .filter-select{
        @include filter-select
      }
      //选中状态
      .filter-select-active {
        @include filter-select-active;
      }
      /*过滤按钮*/
      .filter-btn{
        @include filter-btn;
      }
    }

  /*区域筛选*/
    .filter-district{
      @include filter-wrap;
      top: 10.5rem;
      ul{
        width: 50%;
        height: 29rem;
        overflow: scroll;
        li{
          padding-left: 2rem;
          height: 4rem;
          /*text-align: center;*/
          line-height: 4rem;
        }
      }
      .district-ul{
        background-color: #f8f8f8;
        //选中状态
        .select-font-active{
          color:#ffc16b;
        }
      }
      .street-ul{
        background-color: #f2f2f2;
        //选中状态
        .street-active{
          background-color:#f7ddba;
        }
      }
    }
    /*房型筛选*/
    .filter-room-type{
      @include filter-wrap;
      .filter-select{
        @include filter-select;
      }
      //选中状态
      .filter-select-active {
        @include filter-select-active;
      }
      /*过滤按钮*/
      .filter-btn{
        @include filter-btn;
      }
    }
    /*价格筛选*/
    .filter-more{
      @include filter-wrap;
      .filter-title{
        @include filter-title;
      }
      .filter-select{
        @include filter-select;
      }
      //选中状态
      .filter-select-active {
        @include filter-select-active;
      }
      /*过滤按钮*/
      .filter-btn{
        @include filter-btn;
      }
    }
    /*排序*/
    .filter-order{
      @include filter-wrap;
      ul{
        width: 100%;
        /*height: 29rem;*/
        overflow: scroll;
        li{
          padding-left: 2rem;
          height: 4rem;
          text-align: center;
          line-height: 4rem;
          /*border-top: 1px solid #f5f5f5;*/
          @include border-top;
        }
        //选中状态
        .select-font-active{
          color:#ffc16b;
        }
      }
    }
    /*遮罩*/
    .filter-mask{
      /*z-index: 5;*/
      width: 100%;
      height: 40rem;
      position: absolute;
      /*top: 0;*/
      /*bottom: 0;*/
      background-color: rgba(0,0,0,0.5);
    }
    /*全屏遮罩*/
    .full-mask{
    /*z-index: 5;*/
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0,0.5);
  }
  .house-box{
    padding-top: 10.5rem;
    /*搜索结果为空*/
    .search-empty{
      .search-empty-tip{
        height: 7rem;
        line-height: 7rem;
        text-align: center;
        color: #414141;
        background-color: #f8f8f8;
      }
      .recomment-tip{
        font-weight: bold;
        padding:1rem 0 1rem 2rem;
        color:#444444;
      }
    }
    /**列表*/
    .house-list-box{
      .house-list {
        overflow: auto;
        padding: 0 2rem;
        li {
          @include border-top;
          /*background-color: #ccc;*/
        }
      }
      /*加载中*/
      .loading-more{
        text-align:center;
        line-height: 2.6rem;
        @keyframes loading {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .loading-more-span{
          display: inline-block;
          animation:loading 1.2s infinite linear  both
        }
        .loading-more-text{
          padding-left: 1rem;
        }
        .loading-more-icon{
          font-size: 2.6rem;
        }
      }
    }
  }
</style>
