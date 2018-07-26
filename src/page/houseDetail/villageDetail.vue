<template>
  <div class="villageDetail">
    <!--<head-top goBack="true"/>-->
    <div id="nav-village">
      <ul>
        <li class="menu"><span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span></li>
        <span>{{title}}</span>
      </ul>
    </div>

    <div class="content-village">
      <!--顶部轮播图片-->
      <div class="imgDiv">
        <router-link :to="{ name:'imgIncrease',params: { imgs: imgHouseAttr,title:title}}">
          <div v-if="imgHouseAttr.length>0" class="swiper-container">

            <mt-swipe :auto="0" @change="handleChange" :show-indicators="false">
              <mt-swipe-item v-for="(item,index) in imgHouseAttr" :key="index">
                <img :src="item" >
              </mt-swipe-item>
            </mt-swipe>

          </div>
          <div v-else><img src="../../../static/bg_bigphotonormal拷贝@3x.png"></div>
          <div class="showNum" v-if="imgHouseAttr.length>0">{{indexNum}}/{{imgHouseAttr.length}}</div>
        </router-link>
      </div>

      <div class="house-content">
        <h2 class="villageName">{{title}}</h2>
        <div class="div-houseDes">
          <el-row>
            <el-col :span="16">
              <el-row class="el-houseDes">
                <p class="des">{{addressDetail}}</p>
              </el-row>
            </el-col>
            <el-col :span="6">
              <!--<el-row class="el-houseDes">
                <span><i class="icon iconfont right">&#xe609;</i></span>
              </el-row>-->
              <el-row class="el-houseDes">
                <span v-if="attentionStatus" @click="clkAttention()"><i v-if="attentionStatus"
                                                                        class="icon iconfont right">&#xe609;</i></span>
                <span v-else @click="clkAttention()"><i class="icon iconfont xl right">&#xe657;</i></span>
              </el-row>
            </el-col>

          </el-row>
        </div>
      </div>
      <!--分割-->
      <div class="divide">
      </div>
      <!--详细描述-->
      <div class="detailDes">
        <p>小区简介</p>
        <br>
        <el-row>
          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>位置： <span class="data-show">{{address}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>栋数： <span class="data-show">{{builds}}栋</span></p>
            </el-row>
          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>年代： <span class="data-show">{{buildYear}}年</span></p>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!--百度地图-->
      <div class="homeMap">
        <router-link :to="{ name:'mapIncrease',params: { x: center.lng,y:center.lat}}">
          <div id="allmap" class="allmap"></div>
        </router-link>
      </div>
      <!--同小区房源-->
      <div class="sameArea">
        <el-row>
          <el-col :span="16">
            <p>同小区房源</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isRent}" @click="clickRent()">在租</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isSell}" @click="clickSell()">在售</p>
          </el-col>
        </el-row>
        <ul class="category-head" ref="ulDisplay">
          <li v-if="isSell" v-for='sellImg in sellList' >
            <router-link
              :to="{ name:'houseBuyDetail',params: {cityId:cityId,houseId:sellImg.id,userType:userType,houseType:houseType}}">
              <img :src="sellImg.pic?sellImg.pic:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
              <p>{{sellImg.room_type}}|{{sellImg.buildarea}}|{{sellImg.forward}}</p>
              <p><span style="color: #e10000">{{sellImg.price}}</span>&nbsp;&nbsp;&nbsp;{{sellImg.avgprice}}</p>
            </router-link>
          </li>
          <li v-if="isRent" v-for='rentImg in rentList'>
            <router-link
              :to="{ name:'houseRentDetail',params: {cityId:cityId,houseId:rentImg.id,userType:userType,houseType:houseType}}">
              <img :src="rentImg.pic?rentImg.pic:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
              <p>{{rentImg.room_type}}|{{rentImg.buildarea}}|{{rentImg.forward}}</p>
              <p><span style="color: #e10000">{{rentImg.price}}</span></p>
            </router-link>
          </li>
        </ul>
      </div>

      <!--同小区在售10套-->
      <router-link
        :to="{ name:'villageMore',params: { more: isSell?sellList:rentList,villageName:title,id:id,houseType:houseType}}">
        <div ref="sameSell" class="sameSells" >
          <span v-if="(isRent&&rentList.length>3)||(isSell&&sellList.length>3)">查看更多</span>
          <span v-else><span v-if="(isRent&&rentList.length<1)">暂无在租房源</span>
            <span v-if="(isSell&&sellList.length<1)">暂无在售房源</span>
            </span>
        </div>
      </router-link>
      <!--分割2-->
      <div class="divide2">
      </div>
      <!--周边房源-->
      <div class="sameArea" v-if="communityAround.length>0">
        <p>周边小区</p>
        <ul class="category-head">
          <li v-for="ortherImg in communityAround" @click="getOtherVillage(ortherImg.id)">
            <img
              :src="ortherImg.surface_img?ortherImg.surface_img:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
            <p style="color: #885D24;">{{ortherImg.build_date}}年建</p>
            <p>{{ortherImg.cmt_name}}</p>
            <p class="p-bottom"><span style="color: #e10000">{{ortherImg.averprice}}元/平</span></p>
          </li>
        </ul>
      </div>
      <div class="empty" v-if="communityAround.length>0"></div>
      <div class="empty2" v-else></div>
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

  export default {
    data() {
      return {
        type: 'tab',
        address_detail: null,
        center: {lng: 116.40387397, lat: 39.91488908},
        arrItem: [
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'}
        ],
        id: '',
        isSell: true,//是否在售
        isRent: false,//是否在租
        center: {lng: 120.12, lat: 30.16},
        imgHouseAttr: [],//房源照片
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
        attentionStatus: false,
        cityId: 'hz',
        blockId: this.$route.params.blockId?this.$route.params.blockId:this.$store.state.activeInfo.blockId,
        userType: 'customer',
        houseType: this.$route.params.houseType?this.$route.params.houseType:this.$store.state.activeInfo.houseType,
        address: '',//地图标注地址
        indexNum:'1',
      }
    },
    created() {
      this.menu();
      this.getCommunityDetail();
      //存储当前小区id和房源类型
      this.$store.commit("setActiveInfo",{blockId:this.blockId,houseType:this.houseType})
    },
    components: {
      headTop,
    },
    mounted() {
      this.ready();
    },

    methods: {
      //小区详情
      getCommunityDetail() {
        //获取参数
        /*this.blockId = this.$route.params.blockId;
        this.cityId = this.$route.params.cityId;
        this.userType = this.$route.params.userType;
        this.houseType = this.$route.params.houseType;*/
        let params = {
          blockId: this.blockId,
          city: this.cityId,
          userType: this.userType,
          houseType: this.houseType
        };
        api.getCommunityDetail(params)
          .then(res => {
            if (res.data.success) {
              console.log('小区');
              console.log(res.data.result);
              var resultHouse = res.data.result;
              this.id = resultHouse.id;
              this.sellList = resultHouse.houseInblock.sell.lists;
              this.rentList = resultHouse.houseInblock.rent.lists;
              if(this.isSell){
                if(this.sellList.length > 3){
                  this.$refs.ulDisplay.style.display = '';
                  this.$refs.sameSell.style.marginTop = '16rem';
                  this.$refs.sameSell.style.backgroundColor='#f5f5f5';
                }else if(this.sellList.length > 0 && this.sellList.length < 4){
                  this.$refs.ulDisplay.style.display = '';
                  this.$refs.sameSell.style.marginTop = '12rem';
                  this.$refs.sameSell.style.backgroundColor='#fff';
                }else {
                  this.$refs.ulDisplay.style.display = 'none';
                  this.$refs.sameSell.style.marginTop = '2rem';
                  this.$refs.sameSell.style.backgroundColor='#f5f5f5';
                }
              }
              if(this.isRent){
                if(this.rentList.length > 3){
                  this.$refs.ulDisplay.style.display = '';
                  this.$refs.sameSell.style.marginTop = '16rem';
                  this.$refs.sameSell.style.backgroundColor='#f5f5f5';
                }else if(this.rentList.length > 0 && this.rentList.length < 4){
                  this.$refs.ulDisplay.style.display = '';
                  this.$refs.sameSell.style.marginTop = '12rem';
                  this.$refs.sameSell.style.backgroundColor='#fff';
                }else {
                  this.$refs.ulDisplay.style.display = 'none';
                  this.$refs.sameSell.style.marginTop = '2rem';
                  this.$refs.sameSell.style.backgroundColor='#f5f5f5';
                }
              }
              console.log('在售列表')
              console.log(this.sellList);
              console.log('在租列表')
              console.log(this.rentList);
              this.communityAround = resultHouse.communityAround;
              this.address = resultHouse.disrictName + '区-' + resultHouse.streetName;
              this.buildYear = resultHouse.build_date;
              this.builds = resultHouse.build_num;
              this.title = resultHouse.cmt_name;
              this.addressDetail = resultHouse.address.split('（')[0];
              this.cityId = resultHouse.cityId;
              console.log(this.id)
              console.log('关注状态')
              console.log(resultHouse.attentionState)
              if (resultHouse.attentionState == '0') {
                this.attentionStatus = false;
              } else if (resultHouse.attentionState == '1') {
                this.attentionStatus = true;
              }
              this.center.lng = resultHouse.b_map_x;
              this.center.lat = resultHouse.b_map_y;

              this.address = resultHouse.disrictName + ',' + resultHouse.streetName;
              //重置地图
              this.resetMap();
              //初始化轮播
              this.$nextTick(function () {
                var mySwiper = new Swiper('.swiper-container', {
                  loop: true,
                  autoplay: {
                    delay: 3000,//3秒切换一次
                  },
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                  },
                });
              });
            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
            this.$message.error('小区详情' + res.data.errorMessage);
          });
      },
      menu() {
        window.scrollTo(0,0);
      },
      handleChange(index){
        this.indexNum = index+1;
      },
      clickSell() {
        this.isSell = true;
        this.isRent = false;
        if(this.sellList.length > 3){
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
          this.$refs.sameSell.style.backgroundColor='#f5f5f5';
        }else if(this.sellList.length > 0 && this.sellList.length < 4){
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '12rem';
          this.$refs.sameSell.style.backgroundColor='#fff';
        }else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
          this.$refs.sameSell.style.backgroundColor='#f5f5f5';
        }


      },
      clickRent() {
        this.isSell = false;
        this.isRent = true;
        if(this.rentList.length > 3){
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
          this.$refs.sameSell.style.backgroundColor='#f5f5f5';
        }else if(this.rentList.length > 0 && this.rentList.length < 4){
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '12rem';
          this.$refs.sameSell.style.backgroundColor='#fff';
        }else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
          this.$refs.sameSell.style.backgroundColor='#f5f5f5';
        }

      },
      clkAttention() {
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              if (!this.attentionStatus) {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.id,
                  businessType: '小区',
                  sysType: 1,
                  attentionState: 1,
                };
                console.log(attentionnfo);
                api.attention(attentionnfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                      console.log('关注成功')
                      this.attentionStatus = true;
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
                return
              } else if (this.attentionStatus) {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.id,
                  businessType: '小区',
                  sysType: 1,
                  attentionState: 0,
                };
                api.attention(attentionnfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                      console.log('取消关注')
                      this.attentionStatus = false;
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
              }
            }
          });

      },
      getOtherVillage(data){
        this.blockId = data;
        this.getCommunityDetail();
        this.menu();
      },
      ready() {
        var map = new BMap.Map('allmap');
        window.map = map;
        var point = new BMap.Point(this.center.lng, this.center.lat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);
      },
      resetMap(){
        var point = new BMap.Point(this.center.lng, this.center.lat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);
        map.panTo(point);
        let lableInfor = new BMap.Label(this.address, {
          position: point,
          offset: new BMap.Size(-26, 0)
        });
        lableInfor.setStyle({backgroundColor: '#fff', padding: '0.5rem', border: '', fontSize: '.1rem',});
        map.addOverlay(lableInfor);
      },
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";
  .villageDetail{
    font-size: 1.6rem;
  }
  #nav-village{
    height: 4.4rem;
    width:100%;
    position:fixed;/*固定作用*/
    top:0;
    z-index: 9999;
    text-align: center;
    background-color: #fff;
    font-size: 1.6rem;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: solid .6rem #f8f8f8;
    .menu{
      overflow-y:hidden;
      cursor:hand;
      display:inline;
      list-style:none;
      font-weight:bold;
      float:left;
    }
    .go-back {
      position: absolute;
      left: $contentPadding;
    }
    span{
      font-weight: bold;
    }
  }
  .content-village{
    margin-top: 4.4rem;
  }

  .imgDiv {
    .swiper-container {
      width: 100%;
      height: 20rem;
    }
    .showNum{
      height: 4rem;
      width: 4rem;
      border-radius: 2rem;
      position: absolute;
      top: 20rem;
      right: 1rem;
      z-index: 1;
      color: #f0f0f0;
      background-color: #303133;
      opacity: 0.7;
      text-align: center;
      line-height: 4rem;
    }
    img {
      width: 100%;
      height: 20rem;
    }

  }

  .el-row {
    margin-bottom: 1.5rem;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    height: 3rem;
    border-radius: 0.5rem;
    text-align: center;
    line-height: 3rem;
  }

  //售价和建筑面积
  .house-content {
    .div-houseDes {
      margin-top: 0.5rem;
      .div-line {
        width: 0.2rem;
        height: 6rem;
        background: #f5f5f5;
      }
      .des {
        font-size: 14px;
        color: #724600;
        margin-right: 6rem;
      }
    }
    .el-row {
      //margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-houseDes {
      height: 2rem;
      line-height: 2rem;
      span {
        color: #ffc16b;
      }
    }
    p {
      font-size: 20px;
      margin-left: 2rem;
    }
    .villageName {
      margin-top: 1.5rem;
      font-weight: bold;
      margin-left: 2rem;
    }
  }

  //分割
  .divide {
    margin-top: 2rem;
    height: 2rem;
    width: 100%;
    background-color: #f5f5f5;
  }

  //详细描述
  .detailDes {
    margin-top: 2rem;
    margin-left: 2rem;
    .el-row {
      //margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-detailDes {
      p {
        color: #9c9a9d;
      }
    }
    .data-show{
      color: #424242;
    }
  }

  //地图
  .homeMap {
    margin-top: 2rem;
    #allmap {
      width: 100%;
      height: 22rem;
    }
  }

  //同小区房源
  .sameArea {
    margin-top: 1.5rem;
    margin-left: 2rem;
    .class-color {
      color: #ffc16b;
    }
    .category-head {
      width: 100%;
      display: inline;
      white-space: nowrap; /*规定段落中的文本不进行换行*/
      overflow-x: scroll; /*水平方向，超出部分添加滚动机制*/
      float: left; /*一定要设置左侧浮动*/
      overflow-y: hidden;
      li {
        img {
          height: 9rem;
          width: 12rem;
          border-radius: 0.5rem;
        }
        p {
          font-size: 1rem;
          width: 12rem;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
          span {
            font-size: 1rem;
          }
        }
        margin-top: 1rem;
        display: inline-block; /*既可以水平排列，又可以设置宽高和边距*/
        padding-left: 1.5rem;
      }
      li:first-child {
        padding-left: 0rem;
      }
      .p-bottom {
        margin-top: 0.5rem;
      }
    }
  }

  /*同小区在售*/
  .sameSells {
    height: 3rem;
    background-color: #f5f5f5;
    margin-top: 16rem;
    margin-left: 2rem;
    margin-right: 2rem;
    text-align: center;
    line-height: 3rem;
    color: #885D24;
  }

  .divide2 {
    height: 1rem;
    margin-top: 1rem;
    background-color: #f5f5f5;
  }

  .empty {
    margin-top: 20rem;
    height: 2rem;
    width: 100%;
  }


</style>
