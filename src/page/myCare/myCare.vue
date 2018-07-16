<template>
  <!--房源结果列表-->
  <div class="">
    <!--顶部头-->
    <head-top goBack="true"/>
    <!--头部导航-->
    <div class="header-nav">
      <!--返回图标-->
      <span></span>
      <!--导航项-->
      <ul class="nav-item">
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
   .nav-item{
     display: flex;
     li{
       flex:1 1;
     }
   }
 }
</style>
