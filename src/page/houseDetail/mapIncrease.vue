<template>
  <div class="mapIncrease">
    <!--<head-top goBack="true"/>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">
        百度地图
      </span>
    </h1>
    <div class="search" ref="search"><div style="width: 100%;height: 0.1rem;background-color: #424242"></div>
      <span @click="walk()" :class="{ 'class-color': isWalk}">步行</span><span @click="bus()" :class="{ 'class-color': isBus}">公交</span><span @click="driver()" :class="{ 'class-color': isDriver}">驾车</span>
    </div>
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
        walking:null,
        transit:null,
        driving:null,
        isWalk:false,
        isBus:false,
        isDriver:false,
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
        window.map = map;
        this.lngx = this.$route.params.x;
        this.laty = this.$route.params.y;
        let point = new BMap.Point(this.lngx, this.laty);
        window.point = point;
        map.enableScrollWheelZoom(true);
        map.enableDoubleClickZoom(true);
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
        let point2;
        var geolocation = new BMap.Geolocation();
        geolocation.getCurrentPosition((r) => {
          console.log(r.point);
          if (r.point) {
            point2 = r.point;
            window.point2 = point2;
          }
        }, {enableHighAccuracy: true})
      },
      walk(){
        if(this.transit != null){
          this.transit.clearResults();
          this.isBus = false;
        }
        if(this.driving != null){
          this.driving.clearResults();
          this.isDriver = false;
        }

        this.walking = new BMap.WalkingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
        this.walking.search(point, point2);
        this.isWalk = true;
      },
      bus(){
        if(this.walking != null){
          this.walking.clearResults();
          this.isWalk = false;
        }
        if(this.driving != null){
          this.driving.clearResults();
          this.isDriver = false;
        }
        this.transit = new BMap.TransitRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
        this.transit.search(point, point2);
        this.isBus = true;
      },
      driver(){
        if(this.walking != null){
          this.walking.clearResults();
          this.isWalk = false;
        }
        if(this.transit != null){
          this.transit.clearResults();
          this.isBus = false;
        }
        this.driving = new BMap.DrivingRoute(map, {renderOptions: {map: map, panel: "r-result", autoViewport: true}});
        this.driving.search(point, point2);
        this.isDriver = true;
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
    font-size: 1.6rem;
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
  .search{
    position: absolute;
    top:4.4rem;
    background-color: #ffffff;
    width: 100%;
    z-index: 1;
    line-height: 3rem;
    span{
      //background-color: #ffc16b;
      width: 33.33%;
      display: inline-block;
      text-align:center;
      color: #888888;
      line-height: 3rem;
      margin-top: -2rem;
    }
    .class-color{
      color:#ffc16b;
    }
  }

</style>
