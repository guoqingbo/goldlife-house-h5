<template>
  <div class="imgIncrease">
    <!--<head-top goBack="true"/>-->
    <!--<h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title"><span class="village">小区名称 </span>
      </span>
    </h1>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">
        {{this.$route.params.title}}
      </span>

    </h1>
    <!--<h1> params.id：{{ $route.params.imgs }}</h1>-->
    <div class="imgDiv">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div v-for='i in $route.params.imgs' class="swiper-slide">
            <img :src="i">
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import headTop from '../../components/header/head'
  import Swiper from 'swiper'

  export default {
    //参数
    data() {
      return {}
    },
    created() {

    },
    components: {
      headTop,
    },
    mounted() {
      var mySwiper = new Swiper('.swiper-container', {
        loop: true,
        /*autoplay: {
          delay: 3000,//3秒切换一次
        },*/
        // 如果需要分页器
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction',
        },
      });
    },

    methods: {}
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";

  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 1.6rem;
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
  }
//图片
  .imgIncrease {
    height: 100%;
    .imgDiv {
      .swiper-container {
        width: 100%;
        height: 30rem;
        margin-top: 30%;
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
        height: 30rem;
      }

    }
  }

</style>
