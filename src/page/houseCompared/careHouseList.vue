<template>
  <!--房源结果列表-->
  <div class="">
    <!--顶部头-->
    <head-top goBack="true"/>
    <!--头部导航-->
    <div class="nav-header">
      <!--返回图标-->
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <!--标题-->
      <span class="header-title">关注房源列表</span>
    </div>
    <!-- 对应的内容 -->
    <div>
      <!--房源结果列表-->
      <house-list :houseLists="hoseLists" :houseType="1" :checkBox="true"></house-list>
    </div>
  </div>
</template>
<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head';
  import houseList from '../../components/common/houseList'

  export default {
    props:[],
    data(){
      return {
        hoseLists:[],//收藏房源列表
      }
    },
    components: {
      headTop,
      houseList,
    },
    created(){
      this.getContrastAttentionHouse();
    },
    methods:{
        //获取关注房源列表
      getContrastAttentionHouse(){
        api.getContrastAttentionHouse()
              .then( res => {
                console.log(res)
                if (res.data.success){
                  this.hoseLists = res.data.result
                }else{
                  this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
                }
              })
              .catch(res =>{
                this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
        });
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin';
  .nav-header{
    position: relative;
    background-color: #fff;
    font-size: 16px;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: solid .6rem #f8f8f8;
    .go-back{
      position: absolute;
      left: $contentPadding;
    }
    .go-back-icon{
      font-size: 2rem;
    }
    .header-title{
      display: inline-block;
      width:100% ;
      font-weight: bold;
      text-align: center;
    }
  }
</style>
