<template>
    <div class="containt">
      <head-top goBack="true"/>
      <div class="content">
        <!--搜索-->
        <div class="my-search clear">
            <div class="my-searchbar-inner left clear">
              <div class="my-search-dropdown left" >
                <el-dropdown trigger="click">
                    <div class="el-dropdown-link dropdown-link-span">
                      {{houseType == 1?"二手房":'租房' }}<i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item ><span @click='cltype(1)'>二手房</span></el-dropdown-item>
                      <el-dropdown-item ><span @click='cltype(2)'>租房</span></el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
              </div>
              <div class="left">
                <input type="search" placeholder="请输入商圈或小区名" class="my-search-input">
              </div>
            </div>
            <div class="my-search-more right">
                <i class="icon iconfont iconfont-more">&#xe641;</i>
            </div>

          </div>
        <!--过滤导航-->
        <div class="condition-filter clear" @touchmove.prevent>
          <ul class="left clear">
            <li @click = 'opentFilter("district")'>区域<i class="icon iconfont">&#xe65e;</i></li>
            <li @click = 'opentFilter("price")'>价格<i class="icon iconfont">&#xe65e;</i></li>
            <li @click = 'opentFilter("district")'>房型<i class="icon iconfont">&#xe65e;</i></li>
            <li @click = 'opentFilter("district")'>筛选<i class="icon iconfont">&#xe65e;</i></li>
          </ul>
          <span class="right clear"> <i class="icon iconfont">&#xe656;</i></span>
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
          <el-row>
            <p class="price-between">价格区间（万）</p>
          </el-row>
          <el-row>
            <el-col :xs="11" :sm="6" :md="4" :lg="3" :xl="1">
              <el-input class="input-content" v-model="sellHouseParams.priceMin" maxlength="4" type="number"></el-input>
            </el-col>
            <el-col :xs="2" :sm="6" :md="4" :lg="3" :xl="1"><div class="line-div"><i class="el-icon-minus"></i></div></el-col>
            <el-col
              :xs="11" :sm="6" :md="4" :lg="3" :xl="1">
              <el-input class="input-content" v-model="sellHouseParams.priceMax"  maxlength="4" type="number"></el-input>
            </el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col
              v-for="priceItem in filterList.price.child"
              :xs="8" :sm="6" :md="4"
              :lg="3" :xl="1">
              <div class="grid-content"
                   :class="{'bg-purple-light': sellHouseParams.filterIds.indexOf(priceItem.id) >= 0}"
                   @click="setCheckPriceValue($event,priceItem.id)">{{priceItem.child_name}}
              </div>
            </el-col>
          </el-row>
          <el-row class="el-btn">
            <el-col :span="12"><div class="grid-bt-content bg-bt-light" @click="unlimit ">不限</div></el-col>
            <el-col :span="12"><div class="grid-bt-content bg-bt" @click="filterConfirm">确定</div></el-col>
          </el-row>
          <!--遮罩-->
         <div class="mask" @click = 'opentFilter("price")'></div>
        </div>
        <!--区域-->
        <div v-if="filterType == 'district'" class="filter-district">

          <div class="clear">
            <!--区域-->
            <ul class="district-ul left">
              <li :class="{'district-active': activDistrictIndex < 0}">不限</li>
              <li v-for="(districtItem,index) in district"
                  :class="{'district-active': activDistrictIndex == index}"
                  @click="setCheckDistrictValue($event,index)">
                {{districtItem.district}}
              </li>
            </ul>
            <!--板块-->
            <ul class="street-ul left clear">
              <li  :class="{'street-active': activDistrictIndex < 0}" v-if="activDistrictIndex< 0">不限</li>
              <li v-else v-for="streetItem in district[activDistrictIndex].street"
                  @click="setCheckStreetValue($event,streetItem.id)"
                  :class="{'street-active': sellHouseParams.areaIds == streetItem.id}">
                {{streetItem.name}}
              </li>
            </ul>
          </div>
          <!--遮罩-->
          <div class="mask" @click = 'opentFilter("district")' @touchmove.prevent></div>
        </div>

        <!--房型-->
      </div>
    </div>
</template>
<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    import $alert from '../../components/common/alert/alert.js'

    export default {
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
            }
        },
        created(){
          this.getSellHoseLists();
          this.getFilterList();
          this.getDistrict();
        },
        components: {
          headTop,
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
                console.log(res);
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
          },
          //打开价格弹框
          opentFilter(filterType){
            console.log(filterType)
            if (this.filterType){
              this.filterType = ''
            }else{
              this.filterType = filterType
            }
          },

          //设置价格过滤条件
          setCheckPriceValue(event,id){
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
        }
    }

</script>

<style lang="scss">
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
        width: 29rem;
      }
      /*下拉样式*/
      .my-search-dropdown{
        font-size: 13px;
        .dropdown-link-span{
          width: 7.8rem;
        }
      }
      .my-search-input{
        border: 0;
        padding-left: 6px;
        background-color: transparent;
        color: #424242;
      }
      .my-search-more{
        .iconfont-more{font-size: 2.5rem};
      }
    }

    /**条件过滤*/
    .condition-filter{
      padding:3rem 2rem 0 2rem;
      ul{
        padding-bottom: 1.5rem;
      }
      li{
        float: left;
        width: 7.8rem;
      }
    }

    /**列表*/
    .houseList{
      padding:0 2rem;
    ul{
      li{
        border-top: 1px solid #f5f5f5;
        padding: 1.5rem 0;
        .img,img{
          width: 12rem;
          height: 9rem;
          border-radius: .5rem;
        }
        .li-content{
          width: 18.5rem;
          margin-left: 2rem;
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
      font-color:#424242;
      font-size: 15px;
      position: absolute;
      z-index: 6;
      top: 15.5rem;
      background-color: #fff;
      .el-row {
        padding:0 2rem;
      }
      .price-between{
        border-top: 1px solid #f5f5f5;
        padding-top: 1rem;
        padding-bottom: 2rem;
      }

      .input-content {
        input{
          height: 3rem;
          text-align: center;
          font-size: 16px;
        }
      }
      .line-div {
        height: 3rem;
        text-align: center;
        line-height: 3rem;
        font-size: 2px;

      }
      .grid-content {
        margin-top: 1.5rem;
        height: 3rem;
        border-radius: 5px;
        text-align: center;
        line-height: 2.9rem;
        font-weight: normal;
        font-size: 15px;
        border:1px solid #f5f5f5
      }
      //选中状态
      .bg-purple-light {
        background-color: #fbf6ee;
        color:#ffc16b;
      }
      .grid-bt-content {
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
      .el-btn{
        padding:2rem 0 0 0;
      }
      .bg-bt-light {
        background-color: #f5f7fa;
      }
      .bg-bt {
        background-color: #ffc16b;
      }
    }
  /*区域筛选*/
    .filter-district{
      font-color:#424242;
      font-size: 16px;
      position: absolute;
      z-index: 6;
      top: 15.5rem;
      background-color: #fff;
      width: 100%;
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
        .district-active{
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
    /*遮罩*/
    .mask{
      /*z-index: 5;*/
      width: 100%;
      height: 28rem;
      position: fixed;
      /*top: 0;*/
      /*bottom: 0;*/
      background-color: rgba(0,0,0,0.5);
    }
</style>
