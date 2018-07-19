<template>
  <div class="containt">
    <head-top goBack="true"/>
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">{{title}}</span>
    </h1>
    <div class="content">
      <!--顶部轮播图片-->
      <div class="imgDiv">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <!--动态获取图片展示-->
            <div v-for='i in arrItem' class="swiper-slide">
              <img :src="i.imgUrl">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>
      </div>


      <div class="house-content">
        <h2 class="villageName">{{title}}</h2>
        <div class="div-houseDes">
          <el-row>
            <el-col :span="11">
              <el-row class="el-houseDes">
                <p class="des">{{addressDetail}}</p>
              </el-row>
            </el-col>
            <el-col :span="11">
              <!--<el-row class="el-houseDes">
                <span><i class="icon iconfont right">&#xe609;</i></span>
              </el-row>-->
              <el-row class="el-houseDes" >
                <span v-if="attentionStatus" @click="clkAttention()"><i v-if="attentionStatus" class="icon iconfont right">&#xe609;</i></span>
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
              <p>位置： {{address}}</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>栋数： {{builds}}栋</p>
            </el-row>
          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>年代： {{buildYear}}年</p>
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
          <li v-if="isSell" v-for='sellImg in sellList' @click="getHomeDetail()">
            <img :src="sellImg.pic"><br/>
            <p>{{sellImg.room_type}}|{{sellImg.buildarea}}|{{sellImg.forward}}</p>
            <p><span style="color: #e10000">{{sellImg.price}}</span>&nbsp;&nbsp;&nbsp;{{sellImg.avgprice}}</p>
          </li>
          <li v-else-if="isRent" v-for='rentImg in rentList'>
            <img :src="rentImg.pic"><br/>
            <p>{{rentImg.room_type}}|{{rentImg.buildarea}}|{{rentImg.forward}}</p>
            <p><span style="color: #e10000">{{rentImg.price}}</span></p>
          </li>
        </ul>
      </div>

      <!--同小区在售10套-->
      <router-link :to="{ name:'villageMore',params: { more: isSell?sellList:rentList,villageName:title,id:id,isOne:isSell}}">
        <div ref="sameSell" class="sameSells">
          <!--<div v-if="isSell"  >
            同小区在售{{sellList.length}}套
          </div>
          <div v-else-if="isRent">
            同小区在租{{rentList.length}}套
          </div>-->
          查看更多
        </div>
      </router-link>
      <!--分割2-->
      <div class="divide2">
      </div>
      <!--周边房源-->
      <div class="sameArea">
        <p>周边小区</p>
        <ul class="category-head">
          <li v-for="ortherImg in communityAround">
            <img
              :src="ortherImg.surface_img?ortherImg.surface_img:require('../../assets/icon/icon_addtolist@2x.png')"><br/>
            <p style="color: #885D24;">{{ortherImg.build_date}}年建</p>
            <p>{{ortherImg.cmt_name}}</p>
            <p class="p-bottom"><span style="color: #e10000">{{ortherImg.averprice}}元/平</span></p>
          </li>
        </ul>
      </div>
      <div class="empty"></div>
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
  import Swiper from 'swiper'

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
        id:'',
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
        attentionStatus: false,
        cityId:'hz',
        blockId:'2',
        userType:'customer',
        houseType:'1',
      }
    },
    created() {
      this.getCommunityDetail();
    },
    components: {
      headTop,
    },
    mounted() {
      this.ready();
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
    },

    methods: {
      //小区详情
      getCommunityDetail() {
        //获取参数
        /*this.blockId = this.$route.params.blockId;
        this.city = this.$route.params.city;
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
              console.log(this.sellList);
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
              if(resultHouse.attentionState == '0'){
                this.attentionStatus = false;
              }else if(resultHouse.attentionState == '1'){
                this.attentionStatus = true;
              }
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
      clickSell() {
        this.isSell = true;
        this.isRent = false;
        if (this.sellList.length > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }

      },
      clickRent() {
        this.isSell = false;
        this.isRent = true;
        if (this.rentList.length > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }
      },
      clkAttention() {
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
      },
      phoneCall() {
        //window.location.href = 'tel://0755637'
      },
      ready() {
        var map = new BMap.Map('allmap');
        window.map = map;
        var point = new BMap.Point(this.center.lng, this.center.lat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);
      }
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";
  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 16px;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: solid .6rem #f8f8f8;
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

  .imgDiv {
    .swiper-container {
      width: 100%;
      height: 20rem;
    }
    .swiper-pagination {
      height: 4rem;
      width: 4rem;
      border-radius: 2rem;
      background-color: #303133;
      opacity: 0.7;
      text-align: center;
      line-height: 4rem;
      left: 85%;
      color: #f0f0f0;
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
        width: 0.1rem;
        height: 6rem;
        background: #000;
      }
      .des {
        font-size: 14px;
        color: #724600;
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
    margin-top: 1rem;
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


