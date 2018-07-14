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
                    <li :class="{'house-type-active':houseType==1}"><span @click='cltype(1)'>二手房</span></li>
                    <li :class="{'house-type-active':houseType==2}"><span @click='cltype(2)'>租房</span></li>
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
          <!--房源结果列表-->
          <div class="houseList clear">
            <ul>
              <li class="clear" v-for="sellHouse in sellHouseLists" :key="sellHouse.id">
                <router-link to="/sellDetail">
                  <div class="img left"><img :src= "sellHouse.pic|pic" ></div>
                  <div class="left li-content">
                    <p><span class="title">{{sellHouse.title}}</span></p>
                    <p><span class="dicrible">{{sellHouse.describe}}</span></p>
                    <p>
                      <span class="price">{{sellHouse.price|price}}</span>
                      <span class="avgprice">{{sellHouse.avgprice|avgprice}}</span>
                    </p>
                    <p></p><span class="publish-time">{{sellHouse.create_time|publishTime}}</span>
                  </div>
                </router-link>
              </li>
            </ul>
          </div>

          <!--价格-->
          <div v-if="filterType == 'price'" class="filter-price"  @touchmove.prevent>
            <div class="filter-title">价格区间（万）</div>
            <div class="price-between-input">
              <input class="left" v-model="sellHouseParams.priceMin" maxlength="4" type="number"/>
              <i class="icon iconfont iconfont-heng">&#xe6f1;</i>
              <input class="right" v-model="sellHouseParams.priceMax"  maxlength="4" type="number"/>
            </div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.price.child" :key="item.id"
                class=""
                :class="{'filter-select-active': sellHouseParams.filterIds.indexOf(item.id) >= 0}"
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
                    :class="{'street-active': sellHouseParams.areaIds == streetItem.id}">
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
                  :class="{'room-active': sellHouseParams.filterIds.indexOf(item.id) >= 0}"
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
                :class="{'filter-select-active': sellHouseParams.filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>
            <div class="filter-title">楼龄</div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.buildyear.child" :key="item.id"
                :class="{'filter-select-active': sellHouseParams.filterIds.indexOf(item.id) >= 0}"
                @click="setFilterValue($event,item.id)">{{item.child_name}}
              </li>
            </ul>

            <div class="filter-title">朝向</div>
            <ul class="filter-select">
              <li
                v-for="item in filterList.forward.child" :key="item.id"
                :class="{'filter-select-active': sellHouseParams.filterIds.indexOf(item.id) >= 0}"
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
                    :class="{'select-font-active': sellHouseParams.orderColumn == item.orderColumn&&sellHouseParams.orderBy == item.orderBy}"
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
      <search v-if="isShowSearch" :houseType="houseType" @hideSearch="isShowSearch = false"></search>
      <!--全屏遮罩-->
      <div class="full-mask" v-if="morePopVisible" @touchmove.prevent @click="morePopVisible = false"></div>
    </div>
</template>
<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    import search from '../../page/search/search'
//    import $alert from '../../components/common/alert/alert.js'

    export default {
      components: {
        headTop,
        search,
      },
        data(){
            return {
              sellHouseParams:{
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
              },//房源请求参数
              sellHouseLists:[],//房源列表
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
        created(){
          this.getSellHoseLists();
          this.getFilterList();
          this.getDistrict();
        },
        filters:{
            pic(value){
              if (value) {
                return value;
              }else{
                  return "http://118.178.230.141/group1/M00/00/04/drLmjVsZ-cmAIWmKAASWd8wn0zs229.jpg"
              }
            },
          price(value){
            if (value) {
              return value + '万元';
            }
          },
          avgprice(value){
            if (value) {
              return value + '元/平房';
            }
          },
          publishTime(value){
            if (value) {
              function add0(m) {
                return m < 10 ? '0' + m : m
              }
              let time = new Date(parseInt(value)*1000);
              let y = time.getFullYear();
              let m = time.getMonth() + 1;
              let d = time.getDate();
              return y + '年' + add0(m) + '月' + add0(m)+ "日";
            }
          }
        },
        computed: {

        },
        methods: {
          //获取房源列表
          getSellHoseLists(){
            let params = this.sellHouseParams;
            api.getSellHouseList(params)
              .then( res => {
                if (res.data.success){
                  this.sellHouseLists = res.data.result.list
                }else{
                  this.$message.error(res.data.errorMessage);
                }
              })
              .catch(res =>{
                this.$message.error(res.data.errorMessage);
              });
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
                  console.log(this.filterList)
                }else{
                  this.$message.error(res.data.errorMessage);
                }
              })
              .catch(res =>{
                this.$message.error(res.data.errorMessage);
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
                  console.log(this.disrtict)
                }else{
                  this.$message.error(res.data.errorMessage);
                }
              })
              .catch(res =>{
                this.$message.error(res.data.errorMessage);
              });
          },
          //获取选中房源类型
          cltype(houseType){
            this.houseType=houseType;
            this.isShowHouseType = false
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
            let idIndex = this.sellHouseParams.filterIds.indexOf(id);
            console.log(idIndex)
            if (idIndex == "-1") {
              this.sellHouseParams.filterIds.push(id);
            } else {
              this.sellHouseParams.filterIds.splice(idIndex,1);
            }
          },
          //过滤确认按钮
          filterConfirm(){
            this.getSellHoseLists();
            this.filterType = '';
          },
          //过滤不限按钮
          unlimit(){
            this.sellHouseParams = {
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
            this.getSellHoseLists();
            this.filterType = '';
          },

          //设置区域滤条件
          setCheckDistrictValue(event,id){
            this.activDistrictIndex = id;
          },
          //设置板块过滤条件
          setCheckStreetValue(event,id){
            this.sellHouseParams.areaIds = id;
            this.getSellHoseLists();
            this.filterType = ''

          },
          //设置排序条件
          setOrderValue(event,orderItem){
            this.sellHouseParams.orderBy = orderItem.orderBy;
            this.sellHouseParams.orderColumn = orderItem.orderColumn;
            this.getSellHoseLists();
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
    top: 15.5rem;
    background-color: #fff;
  }
  /*过滤标题*/
  @mixin filter-title{
    margin:0 2rem;
    @include border-top;
    padding: 1rem 0 2rem 0;
    font-size: 15px;
  }
  /*过滤选择项*/
  @mixin filter-select{
    overflow: hidden;
    clear: both;
    margin: 0 2rem;
    li {
      float: left;
      width: 10rem;
      height: 2.5rem;
      line-height: 2.5rem;
      text-align: center;
      margin-bottom: 1rem;
      margin-right: 1rem;
      border-radius: 5px;
      /*border:1px solid #f5f5f5;*/
      @include border;
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
    margin-top: 2rem;
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
        width: 18rem;
        color: #424242;
        input{
          background-color: transparent;
          width: 100;
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

    /**列表*/
    .houseList{
      padding:0 2rem;
    ul{
      width:100%;
      li{
        /*border-top: 1px solid #f5f5f5;*/
        @include border-top;
        padding: 1.5rem 0;
        .img{
          width: 42%;
          height: 9rem;
          border-radius: .5rem;
          img{
            width:100%;
            height:100%;
          }
        }
        .li-content{
          width: 58%;
          padding-left: 2rem;
          p{
            margin-bottom: 0.2rem;
            overflow:hidden;
            text-overflow:ellipsis;
            white-space:nowrap;
          }
          .title{
            font-weight: bold;
            font-size: 16px;
            color:#424242;
          }
          .dicrible{
            font-size: 13px;
            color: #9c9a9d;
          }
          .price{
            font-size: 1.5rem;
            color:#e10000;
          }
          .avgprice{
            font-size: 1.5rem;
            color:#424242;
          }
          .publish-time{
            font-size: 1.3rem;
            color:#754501;
          }
        }
      }
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
        padding:0 2rem;
        line-height: 3rem;
        height: 3rem;
        input{
          height: 100%;
          text-align: center;
          font-size: 16px;
          /*border: 1px solid #f5f5f5;*/
          @include border;
          width: 15rem;
        }
        .iconfont-heng{
          margin-left: 1rem;
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
        overflow: hidden;
        margin: 0 2rem;
        /*border-top: 1px solid #f5f5f5;*/
        @include border-top;
        padding-top: 1.5rem;
        li{
          /*font-size: 13px;*/
          float: left;
          width: 10rem;
          height: 2.5rem;
          line-height: 2.5rem;
          text-align: center;
          margin-bottom: 1rem;
          margin-right: 1rem;
          border-radius:5px;
          /*border:1px solid #f5f5f5;*/
          @include border;
          font-size: 13px;
        }
        .room-active{
          background-color: #fbf6ee;
          font-color:#ffc16b;
        }
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
