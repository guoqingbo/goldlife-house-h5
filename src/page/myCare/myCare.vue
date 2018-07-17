<template>
  <!--房源结果列表-->
  <div class="">
    <!--顶部头-->
    <head-top goBack="true"/>
    <!--头部导航-->
    <div class="header-nav">
      <!--返回图标-->
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <!--导航项-->
      <ul class="nav-ul">
        <li>租房</li>
        <li>二手房</li>
        <li>楼盘</li>
      </ul>
    </div>
    <!-- 对应的内容 -->
    <div>

    </div>
  </div>
</template>
<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head';

  export default {
    props:[],
    data(){
      return {
        selected:""
      }
    },
    components: {
      headTop,
    },
  }
</script>
<style lang="scss" scoped>
 .header-nav{
   position: relative;
   /*height: ;*/
   .go-back{
     position: absolute;
   }
   .nav-ul{
     margin: 0 auto;
     width: 20rem;
     display: flex;
     li{
       flex:1 1;
       text-align: center;
     }
   }
 }
</style>
