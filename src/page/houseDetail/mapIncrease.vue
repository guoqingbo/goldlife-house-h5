<template>
  <div class="mapIncrease">
    <!--<head-top goBack="true"/>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">
        百度地图
      </span>
    </h1>
    <!--<h1> params.id：{{ $route.params.imgs }}</h1>-->
    <div class="homeMap">
        <div id="allmap" class="allmap"></div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import BMap from 'BMap'

  export default {
    //参数
    data() {
      return {
        lngx: 106.40387397,
        laty: 39.91488908,
      }
    },
    created() {

    },
    components: {
      headTop,
    },
    mounted() {
      this.getBaiduMap();

    },

    methods: {
      getBaiduMap() {

        let map = new BMap.Map('allmap');
        console.log(this);
        this.lngx = this.$route.params.x;
        this.laty = this.$route.params.y;
        console.log(123);
        console.log(this.lngx);
        let point = new BMap.Point(this.lngx, this.laty);
        map.centerAndZoom(point, 10);
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition((r) => {
          console.log(r.point);
          if (r.point) {
            var point = new BMap.Point(this.lngx, this.laty);
            let markers = new BMap.Marker(point);
            map.addOverlay(markers);
            map.panTo(point);
            map.centerAndZoom(point, 16);
            //向地图中添加缩放控件
            var ctrl_nav = new BMap.NavigationControl({anchor: BMAP_ANCHOR_BOTTOM_RIGHT, isOpen: 1});
            map.addControl(ctrl_nav);
            //向地图中添加比例尺控件
            var opts = {offset: new BMap.Size(1, 28)};
            var ctrl_sca = new BMap.ScaleControl(opts);
            map.addControl(ctrl_sca);
            map.addOverlay(new BMap.Marker(point));
          }
        }, {enableHighAccuracy: true})
      },
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";

  /**导航*/
  .nav-header {
    position: absolute;
    background-color: #fff;
    font-size: 16px;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    z-index: 10;
    width: 100%;
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
  }
  .mapIncrease{
    height: 100%;
  }
  //地图
  .homeMap {
    height: 100%;
    #allmap {
      width: 100%;
      height: 100%;
      overflow:hidden;
    }
  }

</style>
