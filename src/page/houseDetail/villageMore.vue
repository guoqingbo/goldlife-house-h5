<template>
  <div class="villageMore">
    <head-top goBack="true"/>
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">{{this.$route.params.villageName}}</span>
    </h1>

    <div class="search">
      <span class="left">{{this.$route.params.villageName}}</span>
      <span class="right" @click='opentFilter("filterOrder")'>综合排序
          <i class="icon iconfont" :class="{'select-active-icon':filterType == 'filterOrder'}">&#xe656;</i>
      </span>
    </div>

    <!--房源结果列表-->
    <house-list :houseLists="hoseLists" :houseType="houseType"></house-list>
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
  import houseList from '../../components/common/houseList'

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
        hoseLists: [],
        houseType: 2,
        filterType: '',//过滤选项卡
        orderFilter: [
          {orderColumn: "id", orderBy: "desc", describe: "最新发布"},
          {orderColumn: "price", orderBy: "asc", describe: "总价从低到高"},
          {orderColumn: "price", orderBy: "desc", describe: "总价从高到底"},
          {orderColumn: "avgprice", orderBy: "asc", describe: "单价从低到高"},
          {orderColumn: "buildarea", orderBy: "asc", describe: "面积从大到小"},
        ],
        houseParams:{
          1:{
            cityId:"hz",
            communityId:"",
            areaIds:"",
            priceMin:"",//最小价格
            priceMax:"",//最大价格
            filterIds:[],
            pageSize:"",
            pageIndex:"",
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
            pageIndex:"",
            orderBy:"",
            orderColumn:'',
          },//租房房源请求参数
        },
      }
    },
    created() {
      //this.getHoseLists();
    },
    components: {
      headTop,
      houseList,
    },
    mounted() {
      this.getHoseLists();
    },

    methods: {
      getHoseLists(){
        if(this.$route.params.isOne){
          this.houseType = 1;
        }
        this.houseParams[this.houseType].communityId = this.$route.params.id;
        console.log('id')
        console.log(this.$route.params.id)
        console.log(this.houseType)
        if (this.houseType == 1){
          //获取出售房源列表
          let params = this.houseParams[this.houseType];
          api.getSellHouseList(params)
            .then( res => {
              console.log('出售params')
              console.log(params)
              console.log('出售结果')
              console.log(res)
              if (res.data.success){
                this.hoseLists = res.data.result.list;
                this.recomment = res.data.result.recomment;
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
          //获取租房源列表
          let params = this.houseParams[this.houseType];
          console.log(params)
          api.getRentHouseList(params)
            .then( res => {
              console.log(res)
              if (res.data.success){
                this.hoseLists = res.data.result.list
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
        this.getHoseLists();
        this.filterType = ''
      },
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
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


</style>


