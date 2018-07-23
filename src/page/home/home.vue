<template>
    <div class="box">
      <!--房源列表页-->
      <div v-if="!isShowSearch">
        <head-top goBack="true"/>
        <div class="content">
          <!--搜索-->
          <div class="my-search clear">
            <div class="my-searchbar-inner left clear">
              <div class="my-search-dropdown left" >
                  <div class="" @click="isShowHouseType = !isShowHouseType">
                    {{houseType == 1?"二手房":'租房' }}<i class="el-icon-arrow-down el-icon--right"></i>
                  </div>
                  <ul v-if="isShowHouseType" class="house-type-ul">
                    <li> <i class="icon iconfont arrow-top">&#xe65d;</i></li>
                    <li :class="{'house-type-active':houseType==1}"><span @click='selectHouseType(1)'>二手房</span></li>
                    <li :class="{'house-type-active':houseType==2}"><span @click='selectHouseType(2)'>租房</span></li>
                  </ul>
              </div>
              <div class="my-search-input left">
                <input type="search" placeholder="请输入商圈或小区名" @focus="isShowSearch=true">
              </div>
            </div>
            <div class="my-search-right left" @click="toggleMore">
              <i class="icon iconfont iconfont-more">&#xe641;</i>
            </div>
            <ul class="more-ul" v-if="morePopVisible">
              <li><i class="icon iconfont arrow">&#xe65d;</i></li>
              <li><router-link to="/myCare"><i class="icon iconfont my-care">&#xe609;</i>我的关注</router-link></li>
              <li><router-link to="/lookHouseIndex"><i class="icon iconfont look-house">&#xe610;</i>看房预约</router-link></li>
              <li><router-link to="/signSearch"><i class="icon iconfont sign-search">&#xe60b;</i>签约查询</router-link></li>
            </ul>
          </div>
          <!--过滤导航-->
          <div class="condition-filter clear" @touchmove.prevent>
            <ul class="left clear">
              <li @click = 'opentFilter("district")'>
                区域
                <i v-if="filterType != 'district'" class="icon iconfont">&#xe65e;</i>
                <i  v-if="filterType == 'district'" class="icon iconfont select-active-icon">&#xe65d;</i>
              </li>
              <li @click = 'opentFilter("price")'>
                价格
                <i v-if="filterType != 'price'" class="icon iconfont">&#xe65e;</i>
                <i  v-if="filterType == 'price'" class="icon iconfont select-active-icon">&#xe65d;</i>
              </li>
              <li @click = 'opentFilter("roomType")'>
                房型
                <i v-if="filterType != 'roomType'" class="icon iconfont">&#xe65e;</i>
                <i  v-if="filterType == 'roomType'" class="icon iconfont select-active-icon">&#xe65d;</i>
              </li>
              <li @click = 'opentFilter("filterMore")'>
                筛选
                <i v-if="filterType != 'filterMore'" class="icon iconfont">&#xe65e;</i>
                <i v-if="filterType == 'filterMore'" class="icon iconfont select-active-icon">&#xe65d;</i>
              </li>
              <li @click = 'opentFilter("filterOrder")'>
                <i class="icon iconfont" :class="{'select-active-icon':filterType == 'filterOrder'}">&#xe656;</i></li>
            </ul>
          </div>
          <!--搜索结果为空-->
          <div v-if="recomment > 0" class="search-empty">
            <div class="search-empty-tip">找不到您搜索的房源</div>
            <div class="recomment-tip">为您推荐</div>
          </div>
          <!--房源结果列表-->
          <!--<house-list :houseLists="houseLists" :houseType="houseType" @loadMore="loadMore" :loading="loading"></house-list>-->
          <!--房源结果列表-->
          <!--<div style="overflow: scroll" :style="{'-webkit-overflow-scrolling': scrollMode}">-->
            <!--<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore" :auto-fill="false">-->
              <!--<ul class="house-list">-->
                <!--<li class="house-item clear" v-for="item in houseLists" :key="item.id">-->
                  <!--<router-link-->
                    <!--:to="{name:houseTypeDetail[houseType], params:{cityId:'hz', houseId:item.id, userType:'customer', houseType:houseType}}">-->
                    <!--<house-item :item="item" :houseType="houseType"/>-->
                  <!--</router-link>-->
                <!--</li>-->
              <!--</ul>-->
            <!--</mt-loadmore>-->
          <!--</div>-->
          <p class="loading-more"><span class="loading-more-span"><i class="icon iconfont loading-more-icon">&#xe6ae;</i></span>加载更多</p>
          <div v-if="houseLists.length>0">
            <ul class="house-list"
                v-infinite-scroll="loadMore"
                infinite-scroll-disabled="loading"
                infinite-scroll-distance="0">
              <li class="house-item clear" v-for="item in houseLists" :key="item.id">
                <router-link
                  :to="{name:houseTypeDetail[houseType], params:{cityId:'hz', houseId:item.id, userType:'customer', houseType:houseType}}">
                  <house-item :item="item" :houseType="houseType"/>
                </router-link>
              </li>
            </ul>

          </div>
            <!--<ul-->
                <!--v-infinite-scroll="loadMore"-->
                <!--infinite-scroll-disabled="loading"-->
                <!--infinite-scroll-distance="0">-->
              <!--<li v-for="item in list">{{ item }}</li>-->
            <!--</ul>-->
            <!--<p  style="background-color: #a71d5d">加载中...</p>-->


          <!--价格-->
          <div v-if="filterType == 'price'" class="filter-price"  @touchmove.prevent>
            <div class="filter-title">价格区间（万）</div>
            <div class="price-between-input">
              <input class="left" v-model="houseParams[houseType].priceMin" maxlength="4" type="number"/>
              <span><i class="icon iconfont iconfont-heng">&#xe6f1;</i></span>
              <input class="right" v-model="houseParams[houseType].priceMax"  maxlength="4" type="number"/>
            </div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.price.child" :key="item.id"
                class=""
                :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>
            <div class="filter-btn">
              <button class="unlimit-btn" @click="unlimit ">不限</button>
              <button class="confirm-btn" @click="filterConfirm">确定</button>
            </div>
            <!--遮罩-->
            <div class="filter-mask" @click = 'opentFilter("price")'></div>
          </div>
          <!--区域-->
          <div v-if="filterType == 'district'" class="filter-district" @touchmove.prevent>
            <div class="clear">
              <!--区域-->
              <ul class="district-ul left" @touchmove.stop>
                <li :class="{'select-font-active': activDistrictIndex < 0}">不限</li>
                <li v-for="(districtItem,index) in district"
                    :class="{'select-font-active': activDistrictIndex == index}"
                    @click="setCheckDistrictValue($event,index)">
                  {{districtItem.district}}
                </li>
              </ul>
              <!--板块-->
              <ul class="street-ul left clear" @touchmove.stop>
                <li  :class="{'street-active': activDistrictIndex < 0}" v-if="activDistrictIndex< 0">不限</li>
                <li v-else v-for="streetItem in district[activDistrictIndex].street"
                    @click="setCheckStreetValue($event,streetItem.id)"
                    :class="{'street-active': houseParams[houseType].areaIds == streetItem.id}">
                  {{streetItem.name}}
                </li>
              </ul>
            </div>
            <!--遮罩-->
            <div class="filter-mask" @click = 'opentFilter("district")' @touchmove.prevent></div>
          </div>
          <!--房型-->
          <div v-if="filterType == 'roomType'" class="filter-room-type"  @touchmove.prevent>
            <ul class="filter-select">
              <li v-for="item in filterList.room.child" :key="item.id"
                  :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                  @click="setFilterValue($event,item.id)">
                {{item.child_name}}
              </li>
            </ul>
            <div class="filter-btn">
              <button class="unlimit-btn" @click="unlimit ">不限</button>
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
                v-for="item in filterList.buildarea.child" :key="item.id"
                :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>
            <div class="filter-title">楼龄</div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.buildyear.child" :key="item.id"
                :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>

            <div class="filter-title">朝向</div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.forward.child" :key="item.id"
                :class="{'filter-select-active': houseParams[houseType].filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>
            <div class="filter-btn">
              <button class="unlimit-btn" @click="unlimit ">不限</button>
              <button class="confirm-btn" @click="filterConfirm">确定</button>
            </div>
            <!--遮罩-->
            <div class="filter-mask" @click = 'opentFilter("price")'></div>
          </div>
          <!--排序-->
          <div v-if="filterType == 'filterOrder'" class="filter-order">
            <div class="clear">
              <ul class="filter-order-ul left">
                <li v-for="(item,index) in orderFilter"
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
      </div>
      <!--搜索页-->
      <search
        v-if="isShowSearch"
        :houseType="houseType"
        @hideSearch="isShowSearch = false"
        @searchHouse="searchHouse">
      </search>
      <!--全屏遮罩-->
      <div class="full-mask" v-if="morePopVisible" @touchmove.prevent @click="morePopVisible = false"></div>
    </div>
</template>
<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
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
                  pageSize:"",
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
                  pageSize:"",
                  pageIndex:1,
                  orderBy:"",
                  orderColumn:'',
                },//租房房源请求参数
              },
              houseLists:[],//房源列表
              recomment:0,//是否为推荐房源
              houseType:this.$store.state.activeInfo.houseType?this.$store.state.activeInfo.houseType:1,//房源类型
              filterType:'',//过滤选项卡
              filterList:{},//获取过滤列表
              district:[],//区域板块列表
              activDistrictIndex:-1,//选中的小区
              orderFilter:[
                {orderColumn:"id",orderBy:"desc",describe:"最新发布"},
                {orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},
                {orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},
                {orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},
                {orderColumn:"buildarea",orderBy:"asc",describe:"面积从大到小"},
              ],
              morePopVisible:false,//更多菜单弹出选项
              isShowSearch:false,//展示搜索页
              isShowHouseType:false,//展示房源类型弹框
              houseTypeDetail:{
                1:'houseBuyDetail',
                2:'houseRentDetail',
                3:'villageDetail',
              },//详情类型
              allLoaded: false, //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
              scrollMode:"auto", //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
              list:[1,2,3,4,5],
              loading:false
            }
        },
        components: {
          headTop,
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
          gethouseLists(isLoadMore){
            console.log(isLoadMore)
            if (this.houseType == 1){
              //获取出售房源列表
              let params = this.houseParams[this.houseType];
              //openId:this.$route.query ? this.$route.query.openId:"",
              params.openId = this.$route.query? this.$route.query.openId : "";
              params.code = this.$route.query.code ? this.$route.query.code : "";

              api.getSellHouseList(params)
                .then( res => {
                  if (res.data.success){
                        if(isLoadMore){
                          this.houseLists = this.houseLists.concat(res.data.result.list);
                          if (res.data.result.list.length == 0){
                            this.loading = true
                          }else{
                            this.loading = false
                          }
                          console.log(this.houseLists)
                        }else{
                          this.houseLists = res.data.result.list;
                          this.recomment = res.data.result.recomment;
                          if (res.data.result.list.length<10){ //小于默认条数
                            this.loading = true
                          }else{
                            this.loading = false
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
                      console.log(this.houseLists)
                    }else{
                      this.houseLists = res.data.result.list;
                    }
                    this.houseLists = res.data.result.list
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
          //获取过滤条件
          getFilterList(){
//              console.log(this.filterList)
//            if (this.filterList && this.filterList.price){
//                return
//            }
            let params = {
              type:this.houseType
            };
            api.getFilterList(params)
              .then( res => {
                if (res.data.success){
                  this.filterList = res.data.result
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
                  this.district = res.data.result;
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
          //获取选中房源类型
          selectHouseType(houseType){
            this.houseType=houseType;
            this.isShowHouseType = false;
            this.gethouseLists();
          },
          //打开筛选弹框
          opentFilter(filterType){
            if (this.filterType){
              this.filterType = ''
            }else{
              this.filterType = filterType
            }
          },
          //设置价格过滤条件
          setFilterValue(event,id){
            let idIndex = this.houseParams[this.houseType].filterIds.indexOf(id);
            if (idIndex == "-1") {
              this.houseParams[this.houseType].filterIds.push(id);
            } else {
              this.houseParams[this.houseType].filterIds.splice(idIndex,1);
            }
          },
          //过滤确认按钮
          filterConfirm(){
            this.gethouseLists();
            this.filterType = '';
          },
          //过滤不限按钮
          unlimit(){
            this.houseParams[this.houseType] = {
                cityId:"hz",
                communityId:"",
                areaIds:"",
                priceMin:"",
                priceMax:"",
                filterIds:[],
                pageSize:"",
                pageIndex:"",
                orderBy:"",
                orderColumn:'',
            }//房源请求参数
            this.gethouseLists();
            this.filterType = '';
          },
          //设置区域滤条件
          setCheckDistrictValue(event,id){
            this.activDistrictIndex = id;
          },
          //设置板块过滤条件
          setCheckStreetValue(event,id){
            this.houseParams[this.houseType].areaIds = id;
            this.gethouseLists();
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
              if(this.filterType){
                return
              }
              this.morePopVisible = !this.morePopVisible
          },
          //展示搜索页
          showSearch(){
              this.isShowSearch = true
          },
          //通过小区搜索房源(搜索子组件触发)
          searchHouse(communityId){
              console.log(communityId)
            this.houseParams[this.houseType] = {
              cityId:"hz",
              communityId:communityId,
              areaIds:"",
              priceMin:"",
              priceMax:"",
              filterIds:[],
              pageSize:"",
              pageIndex:"",
              orderBy:"",
              orderColumn:'',
            }//房源请求参数
            this.gethouseLists();
            this.isShowSearch = false //不展示搜索组键

          },
          //加载更多
          loadBottom(){
            this.houseParams[this.houseType].pageIndex++;
            console.log(this.houseParams[this.houseType].pageIndex)
            this.gethouseLists(true)

            this.$refs.loadmore.onBottomLoaded();
          },
//          loadMore() {
//            this.loading = true;
//            setTimeout(() => {
//              let last = this.list[this.list.length - 1];
//              for (let i = 1; i <= 10; i++) {
//                this.list.push(last + i);
//              }
//              this.loading = false;
//            }, 2500);
//            console.log(123)
//          },
          loadMore() {
            this.loading = true;
            setTimeout(() => {
              this.houseParams[this.houseType].pageIndex++;
              console.log(this.houseParams[this.houseType].pageIndex)
              this.gethouseLists(true)
//              this.loading = false;
            }, 2500);
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
        }
    }

</script>

<style lang="scss" scoped>

  .box{
    font-size: 1.6rem;
  }
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
    top: 16.5rem;
    background-color: #fff;
  }
  /*过滤标题*/
  @mixin filter-title{
    margin:0 2rem;
//    @include border-top;
    /*padding: 1rem 0 2rem 0;*/
    padding-bottom:1.5rem ;
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
      }
      /*下拉样式*/
      .my-search-dropdown{
        position: relative;
        width: 30%;
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
          width: 100%;
        }
      }
      .my-search-right{
        width: 15%;
        text-align: right;
        .iconfont-more{font-size: 2.5rem};
      }
      .more-ul{
        position: absolute;
        z-index: 6;
        right: 2rem;
        top: 10rem;
        background-color: #fff;
        font-size: 1.3rem;
        border-radius: 6px;
        li:not(:first-child){
          height: 3.5rem;
          line-height: 3.5rem;
          padding-right: 1rem;
          &:nth-child(n+3){
            @include border-top;
          }
          a{
            color: #424242;
          }
        }
        .arrow{
          color:#fff;
          position: absolute;
          top: -1.6rem;
          right: 0.5rem;
          font-size: 2.5rem;
        }
        .my-care{
          color:#ffc16b ;
          font-size: 1.9rem;
          margin: 0 1rem;
        }
        .look-house{
          color:#5c5990 ;
          font-size: 2.2rem;
          margin: 0 1rem;
        }
        .sign-search{
          color:#eed7b5 ;
          font-size: 1.9rem;
          margin: 0 1rem;
        }
      }
    }

    /**条件过滤*/
    .condition-filter{
      padding:3rem 2rem 0 2rem;
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
        flex:1 1 ;
        .select-active-icon{
          color:#ffc16a;
        }

      }
      /*li:last-child{*/
        /*text-align: center;*/
      /*}*/
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
      top: 15rem;
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
  .house-list {
    padding: 0 2rem;
    li {
      @include border-top;
      /*background-color: #ccc;*/
    }
  }
/*加载中*/
  .loading-more{

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
  }
</style>
