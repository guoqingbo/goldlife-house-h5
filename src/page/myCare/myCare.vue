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
        <li :class="{'select-active':houseType == '2'}" @click="getAttention(2)">租房</li>
        <li :class="{'select-active':houseType == '1'}" @click="getAttention(1)">二手房</li>
        <li :class="{'select-active':houseType == '3'}" @click="getAttention(3)">楼盘</li>
      </ul>
    </div>
    <!-- 对应的内容 -->
    <div>
      <!--房源结果列表-->
      <house-list :houseLists="hoseLists" :houseType="houseType"></house-list>
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
        houseType:2, //1租房 2二手房 3楼盘
        hoseLists:[],//收藏房源列表
      }
    },
    components: {
      headTop,
      houseList,
    },
    created(){
      this.getAttention(this.houseType);
    },
    methods:{
      getAttention(houseType){
          this.houseType = houseType;
          if (houseType == 3){
            api.getCommunityAttention()
              .then( res => {
                console.log(res)
                if (res.data.success){
                    let res = res.data.result;
                    if(!!res){
                      this.hoseLists = {

                      }
                      this.hoseLists = res.data.result
                    }

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
          }else if(houseType == 2){
            api.getRentAttention()
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
          }else if(houseType == 1){
            api.getHouseAttention()
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
                })
              });
          }
      }
    }

  }
</script>
<style lang="scss" scoped>
 .header-nav{
   position: relative;
   border-bottom: 1 solid #f8f8f8;
   /*height: ;*/
   .go-back{
     position: absolute;
     height: 4.4rem;
     line-height: 4.4rem;
     left: 2rem;
   }
   .nav-ul{
     margin: 0 auto;
     width: 20rem;
     display: flex;
     li{
       font-size: 1.6rem;
       color: #424242;
       font-weight: bold;
       flex:1 1;
       text-align: center;
       height: 4.4rem;
       line-height: 4.4rem;

     }
     /*选中状态*/
     .select-active{
       color: #ffc16b;
     }
   }
 }
</style>
