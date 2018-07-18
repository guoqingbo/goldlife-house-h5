<template>
  <div class="villageMore">
    <head-top goBack="true"/>
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">{{title}}</span>
    </h1>

    <div class="search">
      <span class="left">{{title}}</span>
      <span class="right" @click = 'opentFilter("filterOrder")'>综合排序
          <i class="icon iconfont" :class="{'select-active-icon':filterType == 'filterOrder'}">&#xe656;</i>
      </span>
    </div>

    <!--房源结果列表-->
    <house-list :houseLists="$route.params.more" :houseType="houseType" class="houseList"></house-list>
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
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>


<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head'
  import BMap from 'BMap'
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
        hoseLists:[],
        houseType:2,
        filterType:'',//过滤选项卡
        orderFilter:[
          {orderColumn:"id",orderBy:"desc",describe:"最新发布"},
          {orderColumn:"price",orderBy:"asc",describe:"总价从低到高"},
          {orderColumn:"price",orderBy:"desc",describe:"总价从高到底"},
          {orderColumn:"avgprice",orderBy:"asc",describe:"单价从低到高"},
          {orderColumn:"buildarea",orderBy:"asc",describe:"面积从大到小"},
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
      this.getCommunityDetail();
    },
    components: {
      headTop,
      houseList,
    },
    mounted() {

    },

    methods: {
      //小区详情
      getCommunityDetail() {
        let params = {
          blockId: "2839",
          city: 'hz',
          userType: '2',
          houseType: '2'
        };
        api.getCommunityDetail(params)
          .then(res => {
            if (res.data.success) {
              console.log('小区');
              console.log(res.data.result);
              var resultHouse = res.data.result;
              this.sellList = resultHouse.houseInblock.sell.lists;
              this.rentList = resultHouse.houseInblock.rent.lists;
              console.log(this.sellList);
              this.communityAround = resultHouse.communityAround;
              this.address = resultHouse.disrictName + '区-' + resultHouse.streetName;
              this.buildYear = resultHouse.build_date;
              this.builds = resultHouse.build_num;
              this.title = resultHouse.cmt_name;
              this.addressDetail = resultHouse.address.split('（')[0];
              console.log(this.addressDetail)
              this.center.lng = resultHouse.b_map_x;
              this.center.lat = resultHouse.b_map_y;
              var address = resultHouse.disrictName + ',' + resultHouse.streetName;
              var point = new BMap.Point(this.center.lng, this.center.lat);
              var marker = new BMap.Marker(point);
              map.addOverlay(marker);
              map.disableDragging();
              map.centerAndZoom(point, 16);
              map.panTo(point);
              let lableInfor = new BMap.Label(address, {
                position: point,
                offset: new BMap.Size(-26, 0)
              });
              lableInfor.setStyle({backgroundColor: '#fff', padding: '0.5rem', border: '', fontSize: '.1rem',});
              map.addOverlay(lableInfor)
            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
            this.$message.error('小区详情' + res.data.errorMessage);
          });
      },
      opentFilter(filterType){
        if (this.filterType){
          this.filterType = ''
        }else{
          this.filterType = filterType
        }
      },
      //设置排序条件
      setOrderValue(event,orderItem){
        this.houseParams[this.houseType].orderBy = orderItem.orderBy;
        this.houseParams[this.houseType].orderColumn = orderItem.orderColumn;
        this.getCommunityDetail();
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
    font-size: 16px;
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

  .search{
    background-color: #F8F8F8;
    height: 4rem;
    line-height: 4rem;
    .left{
      margin-left: 2rem;
    }
    .right{
      margin-right: 4rem;
    }
    .select-active-icon{
      color:#ffc16a;
    }
  }

  .houseList{
    /*position: absolute;
    top:10rem;*/
  }

  /*过滤弹框*/
  @mixin filter-wrap{
    width: 100%;
    font-color:#424242;
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
  .filter-order{
    @include filter-wrap;
    margin-top: 1rem;
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


</style>


