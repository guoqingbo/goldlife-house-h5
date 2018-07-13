<template>
  <div class="containt">
    <head-top goBack="true"/>
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title"><span class="village">小区名称 </span><i class="icon iconfont xl">&#xe657;</i>
        <!--<div class="badge">
          <img class="right" src="../../assets/icon/icon_topbar_hclist@2x.png">
        </div>-->
        <div class="badge">
          <img src="../../assets/icon/icon_topbar_hclist@2x.png">
          <div class="div2">4</div>
        </div>

        </span>

    </h1>
    <div class="content">
      <!--顶部轮播图片-->
      <div class="imgDiv">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div v-for='i in arrItem' class="swiper-slide">
              <img :src="i.imgUrl">
            </div>
          </div>
          <!-- 如果需要分页器 -->
          <div class="swiper-pagination"></div>
        </div>

      </div>


      <div class="house-content">
        <h2 class="villageName">小区名+户型</h2>
        <div class="div-houseDes">
          <el-row>
            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">300万</p>
              </el-row>
              <el-row class="el-houseDes">
                <p class="des">售价</p>
              </el-row>
            </el-col>

            <el-col :span="1">
              <el-row>
                <div class="div-line"></div>
              </el-row>
            </el-col>

            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">100㎡</p>
              </el-row>
              <el-row class="el-houseDes">
                <p class="des">建筑面积</p>
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
        <el-row>
          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>单价： 4000元/平</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>朝向： 朝南</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>类型： 住宅</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>楼层： 高层</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>小区： <span style="color: #ffc16b">万象新园</span></p>
            </el-row>

          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>挂牌： 2017.07.07</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>装修： 精装</p>
            </el-row>
            <el-row class="el-detailDes">
              <p>年代： 2016年</p>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!--百度地图-->
      <div class="homeMap">
        <div id="allmap" class="allmap"></div>
      </div>
      <!--同小区房源-->
      <div class="sameArea">
        <el-row>
          <el-col :span="16">
            <p>同小区房源</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isSell}">在售</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isRent}">在租</p>
          </el-col>
        </el-row>
        <ul class="category-head">
          <li v-for='sameImg in sameImgAttr'>
            <img :src="sameImg.imgUrl"><br/>
            <p>三室一厅/120㎡/朝北</p>
            <p><span style="color: #e10000">350万</span>&nbsp;&nbsp;&nbsp;45000元/平</p>
          </li>
        </ul>
      </div>

      <!--同小区在售10套-->
      <div class="sameSells">
        同小区在售10套
      </div>
      <!--分割2-->
      <div class="divide2">
      </div>
      <!--周边房源-->
      <div class="sameArea">
        <p>周边小区</p>
        <ul class="category-head">
          <li v-for="ortherImg in otherImgAttr">
            <img :src="ortherImg.imgUrl"><br/>
            <p>3室1厅卫|120㎡|朝北</p>
            <p><span style="color: #e10000">350万</span>&nbsp;&nbsp;&nbsp;45000元/平</p>
          </li>
        </ul>
      </div>
      <div class="empty"></div>
      <!--底部按钮-->
      <div class="button-bottom">
        <el-row class="el-bt">
          <el-col :span="8" class="grid-bt-content bg-bt-light">
            <div><img src="../../assets/icon/icon_addtolist@2x.png"><br><span class="span-icon">加入对比</span></div>
          </el-col>
          <el-col :span="8" class="grid-bt-content bg-bt-m centenr">
            <div><span class="span-icon">预约看房</span></div>
          </el-col>
          <el-col :span="8">
            <div class="grid-bt-content bg-bt centenr"><span>联系经纪人</span></div>
          </el-col>
        </el-row>
      </div>


    </div>
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
        sameImgAttr: [
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'}
        ],
        otherImgAttr: [
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/125708/181.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'},
          {imgUrl: 'http://image.qmango.com/hotelimg/dl1210/119297/793.jpeg'}
        ],
        isSell: true,
        isRent: false,
      }
    },
    created() {

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
      ready() {
        let map = new BMap.Map('allmap');
        let point = new BMap.Point(this.center.lng, this.center.lat);
        map.centerAndZoom(point, 10);
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition((r) => {
          if (r.point) {
            this.center.lng = r.longitude;
            this.center.lat = r.latitude;
            let markers = new BMap.Marker(r.point);
            map.addOverlay(markers);
            map.panTo(r.point);
            map.centerAndZoom(r.point, 16);
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
            map.addControl(ctrl_nav);
            //向地图中添加比例尺控件
            var opts = {offset: new BMap.Size(1, 28)}
            var ctrl_sca = new BMap.ScaleControl(opts);
            map.addControl(ctrl_sca);
          }
        }, {enableHighAccuracy: true})
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
      .village{
        position: absolute;
        left: 41%;
        font-weight: bold;
      }
      .xl {
        position: absolute;
        right: 5rem;
      }
      .badge {
        width: 3rem;
        height: 4rem;
        margin-right: 2rem;
        float: left;
        img{
          height: 2rem;
          width: 2rem;
          margin-top: 1rem;
          position: absolute;
          right: 1.5rem;
        }
        .div2{
          margin-top: 1rem;
          background: #ffc16b;
          height: 1rem;
          width: 1.5rem;
          border-radius: 0.3rem;
          line-height: 1rem;
          position: absolute;
          right: 0.6rem;
          text-align: center;
          font-size: 0.9rem;
        }
      }
      img {
        margin-top: 0.8rem;
        height: 2.4rem;
        width: 2rem;
      }
      .right {
        //transform: rotate(90deg);
        position: absolute;
        right: 1.4rem;
      }

      .iconfont {
        font-size: 20px;
      }
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
      margin-top: 2rem;
      .div-line {
        width: 0.1rem;
        height: 6rem;
        background: #000;
      }
      .des {
        font-size: 14px;
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
      text-align: center;
      line-height: 2rem;
    }
    p {
      font-size: 20px;
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
    p {
      color: #9c9a9d;
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
    .class-color{
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
  }

  .divide2 {
    height: 1rem;
    margin-top: 1rem;
    background-color: #f5f5f5;
  }

  .empty{
    margin-top: 14rem;
    height:3rem;
  }

  .button-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    //margin-top: 14rem;
    .grid-bt-content {
      height: 5rem;
      line-height: 2rem;
    }
    img {
      //margin-left: 4rem;
      height: 1.6rem;
      width: 2rem;
    }

    .i-right {
      margin-left: 2rem;
      color: #ffc16b;
    }
    .span-icon {
      //margin-left: 2rem;
      color: #ffc16b;
      font-size: 16px;
    }
    .centenr {
      text-align: center;
      line-height: 5rem;
      span {
        color: #754501;
      }
    }
    .bg-bt-light {
      background-color: #424242;
      text-align: center;
    }
    .bg-bt-m{
      background-color: #F39B77;
    }
    .bg-bt {
      background-color: #ffc16b;
    }
    .span-left {
      margin-left: 2rem;
    }
    .span-right {
      margin-left: 2rem;
    }
  }


</style>


