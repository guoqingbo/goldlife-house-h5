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
                      {{chosetype}}<i class="el-icon-arrow-down el-icon--right"></i>
                    </div>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item ><span @click='cltype()'>二手房</span></el-dropdown-item>
                      <el-dropdown-item ><span @click='cltype()'>租房</span></el-dropdown-item>
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
        <div class="condition-filter clear">
          <ul class="left clear">
            <li>区域<i class="icon iconfont">&#xe65e;</i></li>
            <li @click = 'openPriceFilter'>价格<i class="icon iconfont">&#xe65e;</i></li>
            <li>房型<i class="icon iconfont">&#xe65e;</i></li>
            <li>筛选<i class="icon iconfont">&#xe65e;</i></li>
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
        <div v-show="filterType == 'price'" class="price-filter" ref="priceFilter">
          <el-row>
            <p>价格区间（万）</p>
          </el-row>
          <el-row>
            <el-col :xs="11" :sm="6" :md="4" :lg="3" :xl="1"><el-input class="input-content" v-model="priceStart" maxlength="4"></el-input></el-col>
            <el-col :xs="2" :sm="6" :md="4" :lg="3" :xl="1"><div class="line-div"><i class="el-icon-minus"></i></div></el-col>
            <el-col :xs="11" :sm="6" :md="4" :lg="3" :xl="1"><el-input v-model="priceEnd" class="input-content" maxlength="4"></el-input></el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">200以下</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">200-300</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">300-400</div></el-col>
          </el-row>
          <el-row :gutter="30">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">400-500</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">500-800</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">800-1000</div></el-col>
          </el-row>
          <el-row class="el-bt">
            <el-col :span="12"><div class="grid-bt-content bg-bt-light">不限</div></el-col>
            <el-col :span="12"><div class="grid-bt-content bg-bt">确定</div></el-col>
          </el-row>
        </div>
      </div>
      <!--遮罩-->
      <div v-if="maskShow" class="mask" ref="mask"  @touchmove.prevent></div>
    </div>
</template>
<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    import $alert from '../../components/common/alert/alert.js'

    export default {
        data(){
            return {
              params:{
                cityId:"hz",
                communityId:"",
                areaIds:"",
                priceMin:"",
                priceMax:"",
                filterIds:"",
                pageSize:"",
                pageIndex:"",
                orderBy:"",
                orderColumn:'',
              },
              sellHouseLists:[],
              chosetype:"二手房",
              priceStart:'',
              priceEnd:'',
              filterType:'',
              maskShow:''
            }
        },
        created(){
          this.getSellHoseLists();
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
//              let params = {
//                cityId:this.params.cityId,
//                communityId:this.params.communityId,
//                areaIds:this.params.areaIds,
//                priceMin:this.params.priceMin,
//                priceMax:this.params.priceMax,
//                filterIds:this.params.filterIds,
//                pageSize:this.params.pageSize,
//                pageIndex:this.params.pageIndex,
//                orderBy:this.params.orderBy,
//                orderColumn:this.params.orderColumn,
//              }
            let params = this.params;
            api.getSellHouseList(params)
              .then( res => {
                console.log(res);
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
          //获取选中房源类型
          cltype(event){
            this.chosetype= event.currentTarget.innerText;
          },
          //打开价格弹框
          openPriceFilter(){
            if (this.filterType){
              this.filterType = ''
            }else{
              this.filterType = 'price';
              console.log(this.$refs.priceFilter)
              this.opentMask(this.$refs.priceFilter.offsetTop)
            }
          },
          //打开遮罩
          opentMask(positionY){
              this.maskShow = true
              this.$refs.mask.style.top = positionY+"px"
          }
        }
    }

</script>

<style lang="scss" scoped>
    .content{

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
    .price-filter {
      padding:0 2rem;
      position: absolute;
      z-index: 6;
      top: 17rem;
      background-color: #fff;
      .el-row {
        margin-bottom: 15px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .input-content {
        height: 50px;
        text-align: center;
        max: 9999;
        min: 0;
      }
      .line-div {
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 2px;

      }
      .grid-content {
        height: 30px;
        background-color: #fbf6ee;
        border-radius: 5px;
        text-align: center;
        line-height: 30px;
      }
      .bg-purple-light {
        background-color: #fbf6ee;
      }
      .grid-bt-content {
        height: 40px;
        text-align: center;
        line-height: 40px;
      }
      .bg-bt-light {
        background-color: #f5f7fa;
      }
      .bg-bt {
        background-color: #ffc16b;
      }
    }
  /*遮罩*/
  .mask{
    z-index: 5;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    background-color: rgba(0,0,0,0.6);
  }

</style>
