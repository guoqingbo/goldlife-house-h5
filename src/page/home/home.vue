<template>
    <div>
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
                    <li> <i class="icon iconfont arrow-top">&#xe62c;</i></li>
                    <li :class="{'house-type-active':houseType==1}"><span @click='selectHouseType(1)'>二手房</span></li>
                    <li :class="{'house-type-active':houseType==2}"><span @click='selectHouseType(2)'>租房</span></li>
                  </ul>
              </div>
              <div class="my-search-input left">
                <input type="search" placeholder="请输入商圈或小区名" @focus="isShowSearch=true">
              </div>
            </div>
            <div class="my-search-right right" @click="toggleMore">
              <i class="icon iconfont iconfont-more">&#xe641;</i>
            </div>
            <ul class="more-ul" v-if="morePopVisible">
              <li><i class="icon iconfont arrow">&#xe65d;</i></li>
              <li><router-link to="/myCare"><i class="icon iconfont my-care">&#xe609;</i>我的关注</router-link></li>
              <li><router-link to="/lookAppointment"><i class="icon iconfont look-house">&#xe610;</i>看房预约</router-link></li>
            </ul>
          </div>
          <!--过滤导航-->
          <div class="condition-filter clear" @touchmove.prevent>
            <ul class="left clear">
              <li @click = 'opentFilter("district")'>区域<i class="icon iconfont">&#xe65e;</i></li>
              <li @click = 'opentFilter("price")'>价格<i class="icon iconfont">&#xe65e;</i></li>
              <li @click = 'opentFilter("roomType")'>房型<i class="icon iconfont">&#xe65e;</i></li>
              <li @click = 'opentFilter("filterMore")'>筛选<i class="icon iconfont">&#xe65e;</i></li>
              <li @click = 'opentFilter("filterOrder")'><i class="icon iconfont">&#xe656;</i></li>
            </ul>
          </div>
          <!--搜索结果为空-->
          <div v-if="recomment > 0" class="search-empty">
            <div>找不到您搜索的房源</div>
            <div>为您推荐</div>
          </div>
          <!--房源结果列表-->
          <house-list :houseLists="hoseLists" :houseType="houseType"></house-list>

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
    import houseList from '../../components/common/houseList'
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
              hoseLists:[],//房源列表
              recomment:0,//是否为推荐房源
              houseType:1,//房源类型
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
            }
        },
        components: {
          headTop,
          search,
          houseList,
        },
        created(){
          this.getHoseLists();
          this.getFilterList();
          this.getDistrict();
        },
        computed: {

        },
        methods: {
          getHoseLists(){
            if (this.houseType == 1){
              //获取出售房源列表
              let params = this.houseParams[this.houseType];
              api.getSellHouseList(params)
                .then( res => {
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
              //获取出售房源列表
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
          //获取过滤条件
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
            this.getHoseLists();
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
            this.getHoseLists();
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
            this.getHoseLists();
            this.filterType = '';
          },
          //设置区域滤条件
          setCheckDistrictValue(event,id){
            this.activDistrictIndex = id;
          },
          //设置板块过滤条件
          setCheckStreetValue(event,id){
            this.houseParams[this.houseType].areaIds = id;
            this.getHoseLists();
            this.filterType = ''

          },
          //设置排序条件
          setOrderValue(event,orderItem){
            this.houseParams[this.houseType].orderBy = orderItem.orderBy;
            this.houseParams[this.houseType].orderColumn = orderItem.orderColumn;
            this.getHoseLists();
            this.filterType = ''
          },
          //更多菜单
          toggleMore(){
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
            this.getHoseLists();
            this.isShowSearch = false //不展示搜索组键

          }
        },
        watch:{
//          houseParams(){
//              this.getHoseLists();
//          },
//          houseType(){
//
//          }
        }
    }

</script>

<style lang="scss" scoped>

  /*公用样式封装*/
  /*边框*/
  @mixin border {
    border: 1px solid #f5f5f5;
  }
  @mixin border-top {
    border-top: 1px solid #f5f5f5;
  }
  /*过滤弹框*/
  @mixin filter-wrap{
    width: 100%;
    font-color:#424242;
    font-size: 15px;
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
    font-size: 15px;
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
      border-radius: 5px;
      /*border:1px solid #f5f5f5;*/
      @include border;
      box-sizing: border-box;
      font-size: 14px;

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
      font-size: 16px;
      color: #754501;
      background-color: #ffc16b;
    }
  }
    /**搜索样式*/
    .my-search{
      margin-top: 1.2rem;
      height: 3.5rem;
      font-size: 13px;
      padding:0 2rem;
      div{
        height: 3.5rem;
        line-height: 3.5rem;
      }
      .my-searchbar-inner{
        background-color: #f5f5f5;
        border-radius: 6px;
        padding-left: 1rem;
        // width: 29rem;
      }
      /*下拉样式*/
      .my-search-dropdown{
        position: relative;
        font-size: 13px;
        .house-type-ul{
          width: 9rem;
          top: 5rem;
          position: absolute;
          z-index: 6;
          /*left: 2rem;*/
          background-color: #fff;
          font-size: 13px;
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
              color:rgba(0,0,0,0.4);
              font-size: 16px;
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
        width: 17rem;
        color: #424242;
        input{
          background-color: transparent;
          width: 100%;
        }
      }
      .my-search-right{
        .iconfont-more{font-size: 2.5rem};
      }
      .more-ul{
        position: absolute;
        z-index: 6;
        right: 2rem;
        top: 10rem;
        background-color: #fff;
        font-size: 13px;
        border-radius: 6px;
        li:not(:first-child){
          height: 3.5rem;
          line-height: 3.5rem;
          padding-right: 1rem;
          &:nth-child(3){
            @include border-top;
          }
          a{
            color: #424242;
          }
        }
        .arrow{
          color:#fff;
          position: absolute;
          top: -16px;
          right: 0.5rem;
          font-size: 25px;
        }
        .my-care{
          color:#ffc16b ;
          font-size: 19px;
          margin: 0 1rem;
        }
        .look-house{
          color:#5c5990 ;
          font-size: 22px;
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
      }
      li{
        float: left;
        width: 16%;
        margin-left:5%
      }
      li:first-child{
        margin-left: 0;
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
        height: 2rem;
        input{
          height: 100%;
          text-align: center;
          font-size: 16px;
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
</style>
