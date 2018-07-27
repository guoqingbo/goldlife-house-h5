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
        <mt-swipe :auto="0" @change="handleChange" :show-indicators="false">
          <mt-swipe-item v-for="(item,index) in $route.params.imgs" :key="index">
            <img :src="item" >
          </mt-swipe-item>
        </mt-swipe>
      </div>
      <div class="showNum" v-if="imgList.length>0">{{indexNum}}/{{imgList.length}}</div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>

  export default {
    //参数
    data() {
      return {
        indexNum:'1',
        imgList : [],
      }
    },
    created() {

      this.imgList = this.$route.params.imgs;
      console.log(this.imgList)
    },
    components: {
    },
    mounted() {

    },

    methods: {
      handleChange(index){
        this.indexNum = index+1;
      },
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
        margin-top: 13rem;
      }
      .showNum{
        font-size: 1.6rem;
        height: 4rem;
        width: 4rem;
        border-radius: 2rem;
        position: absolute;
        top: 42.5rem;
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
        height: 30rem;
      }

    }
  }

</style>
