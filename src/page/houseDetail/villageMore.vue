<template>
  <div class="villageMore">
    <!--<head-top goBack="true"/>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">{{this.title}}</span>
    </h1>

    <div class="search">
      <span class="left">{{this.title}}</span>
      <span class="right" @click='opentFilter("filterOrder")'>综合排序
          <i class="icon iconfont" :class="{'select-active-icon':filterType == 'filterOrder'}">&#xe656;</i>
      </span>
    </div>

    <!--房源结果列表-->
    <!--<house-list :houseLists="houseLists" :houseType="houseType"></house-list>-->
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
      <p v-if="!isLoadAll" class="loading-more"><span class="loading-more-span"><i class="icon iconfont loading-more-icon">&#xe6ae;</i></span><span class="loading-more-text">加载更多</span></p>
      <p v-if="isLoadAll" class="loading-more">没有更多数据了！</p>
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
      <div class="filter-mask" @click='opentFilter("district")' @touchmove.prevent></div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>


<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head'
  import houseItem from '../../components/common/houseItem'

  export default {
    data() {
      return {
        type: 'tab',

        isSell: true,//是否在售
        isRent: false,//是否在租
        center: {lng: 116.40387397, lat: 39.91488908},
        imgHouseAttr: ['', '', ''],//房源照片
        title: '',
        addressDetail: '',
        address: '',
        buildYear: '',
        builds: '',

        //同小区
        sellList: [],//在售
        rentList: [],//在租
        //周边小区
        communityAround: [],//周边小区
        attentionStatus: '关注',
        houseLists: [],
        houseType: this.$route.params.houseType?this.$route.params.houseType:this.$store.state.activeInfo.houseType,
        filterType: '',//过滤选项卡
        orderFilter: [
          {orderColumn: "id", orderBy: "desc", describe: "最新发布"},
          {orderColumn: "price", orderBy: "asc", describe: "总价从低到高"},
          {orderColumn: "price", orderBy: "desc", describe: "总价从高到底"},
          {orderColumn: "avgprice", orderBy: "asc", describe: "单价从低到高"},
          {orderColumn: "buildarea", orderBy: "asc", describe: "面积从大到小"},
        ],
        houseTypeDetail:{
          1:'houseBuyDetail',
          2:'houseRentDetail',
          3:'villageDetail',
        },//详情类型
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
        isLoadAll: false, //是否加载完所有数据
        loading:false,
      }
    },
    created() {

    },
    components: {
      headTop,
      houseItem,
    },
    mounted() {
      this.menu();
      this.gethouseLists();
    },

    methods: {

      opentFilter(filterType) {
        if (this.filterType) {
          this.filterType = ''
        } else {
          this.filterType = filterType
        }
      },
      //设置排序条件
      setOrderValue(event, orderItem) {
        this.houseParams[this.houseType].orderBy = orderItem.orderBy;
        this.houseParams[this.houseType].orderColumn = orderItem.orderColumn;
        this.gethouseLists();
        this.filterType = ''
      },
      menu() {
        window.scrollTo(0,0);
      },
      gethouseLists(isLoadMore){
        if(!isLoadMore){ //不是加载更多时
          this.houseParams[this.houseType].pageIndex = 1
        }
        this.houseParams[this.houseType].communityId = this.$route.params.id?this.$route.params.id:this.$store.state.activeInfo.blockId;
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
                this.recomment = res.data.result.recomment;//是否为推荐房源
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
                  this.houseLists = res.data.result.list;
                  if (res.data.result.list.length<this.houseParams[this.houseType].pageSize){ //是否已经加载完所有数据
                    this.loading = true
                    this.isLoadAll = true;
                  }else{
                    this.loading = false
                    this.isLoadAll = false;
                  }
                }
                if(this.houseLists.length>0){
                  this.title = this.houseLists[0].block_name;
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
                  this.houseLists = res.data.result.list;
                  if (res.data.result.list.length<this.houseParams[this.houseType].pageSize){ //是否已经加载完所有数据
                    this.loading = true
                    this.isLoadAll = true;
                  }else{
                    this.loading = false
                    this.isLoadAll = false;
                  }
                }
                if(this.houseLists.length>0){
                  this.title = this.houseLists[0].block_name;
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
        this.$store.commit("setActiveInfo",{blockId:this.houseParams[this.houseType].communityId,houseType:this.houseType})
      },
      //加载更多
      loadBottom(){
        this.houseParams[this.houseType].pageIndex++;
        console.log(this.houseParams[this.houseType].pageIndex)
        this.gethouseLists(true)
        this.$refs.loadmore.onBottomLoaded();
      },

      loadMore() {
        this.loading = true;
        this.houseParams[this.houseType].pageIndex++;
        console.log(this.houseParams[this.houseType].pageIndex)
        this.gethouseLists(true)
      }
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .villageMore{
    font-size: 1.6rem;
  }
  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 1.6rem;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    //border-bottom: solid .6rem #f8f8f8;
    .go-back {
      position: absolute;
      left: $contentPadding;
    }
    .go-back-icon {
      font-size: 2rem;
    }
    .header-title {
      display: inline-block;
      width: 100%;
      font-weight: bold;
      text-align: center;
    }
    .xl {
      position: absolute;
      right: 5rem;
    }

    .right {
      transform: rotate(90deg);
      position: absolute;
      right: 1rem;
    }
    .iconfont {
      font-size: 20px;
    }
  }

  .search {
    background-color: #F8F8F8;
    height: 4rem;
    line-height: 4rem;
    .left {
      margin-left: 2rem;
    }
    .right {
      margin-right: 4rem;
    }
    .select-active-icon {
      color: #ffc16a;
    }
  }

  .houseList {
    /*position: absolute;
    top:10rem;*/
  }

  /*过滤弹框*/
  @mixin filter-wrap {
    width: 100%;
    font-color: #424242;
    font-size: 0.75rem;
    position: absolute;
    z-index: 6;
    top: 11.5rem;
    background-color: #fff;
  }

  @mixin border-top {
    border-top: 0.05rem solid #f5f5f5;
  }

  /*排序*/
  .filter-order {
    @include filter-wrap;
    margin-top: 1rem;
    ul {
      width: 100%;
      /*height: 29rem;*/
      overflow: scroll;
      li {
        padding-left: 2rem;
        height: 4rem;
        text-align: center;
        line-height: 4rem;
        /*border-top: 1px solid #f5f5f5;*/
        @include border-top;
      }
      //选中状态
      .select-font-active {
        color: #ffc16b;
      }
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


</style>


