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
      <ul v-if="houseLists.length>0">
        <li class="" v-for="(item,index) in houseLists" :key="item.id">
          <mt-cell-swipe
            :right="[{
                content: '取消关注',
                style: { background: 'red', color: '#fff',textAlign:'center',width:'8rem',height:'11rem',lineHeight:'11rem'},
                handler: () => attention(item.id,index)
            }]">
            <div class="house-item-box" slot="title">
              <router-link to="/sellDetail"> <house-item :item="item" :houseType="houseType"/></router-link>
            </div>
          </mt-cell-swipe>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
  import api from '../../api/customer/axios'
  import headTop from '../../components/header/head';
  import houseItem from '../../components/common/houseItem'

  export default {
    props:[],
    data(){
      return {
        houseType:2, //1租房 2二手房 3楼盘
        houseLists:[],//收藏房源列表
        cancelCareStyle:{

//          font-size: 1.3rem;
//          height: 11rem;
//          line-height: 11rem;
//          text-align: center;
//          width: 8rem;
      }
      }
    },
    components: {
      headTop,
      houseItem,
    },
    created(){
      this.getAttention(this.houseType);
    },
    methods:{
      //获取关注
      getAttention(houseType){
          this.houseType = houseType;
          this.houseLists = [];
          if (houseType == 3){
            api.getCommunityAttention()
              .then( res => {
                console.log(res)
                if (res.data.success){
                    let houseLists = [];
                  res.data.result.forEach(item=>{
                    item.avgprice = item.averprice
                    item.title=item.cmt_name
                    item.describe =item.build_date?item.build_date+"年建":""
                    item.pic=item.surface_img
                    houseLists.push(item)
                  });
                  this.houseLists = houseLists;
                }else{
                  this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
                }
              })
              .catch(res =>{
                  console.log(res)
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
                  this.houseLists = res.data.result
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
                  this.houseLists = res.data.result
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
      },
      //取消关注
      attention(businessNum,index){
          let houseType  = {
              1:"二手房",
              2:"租房",
              3:"小区",
          }
        let params = {
            cityId:'hz',
            businessNum:businessNum,//业务id
            businessType:houseType[this.houseType],//二手房，租房，小区
            sysType:1,//默认传1
            attentionState:2,//1关注，2取消
        };
        api.attention(params)
          .then( res => {
            console.log(res)
            if (res.data.success){
              this.houseLists.splice(index,1)
              this.$toast({
                message: "取消关注成功",
                position: 'bottom',
                duration: 3000
              });
            }else{
              this.$toast({
                message: res.data.errorMessage,
                position: 'bottom',
                duration: 3000
              });
            }
          })
          .catch(res =>{
            console.log(res)
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
  //导航头
 .header-nav{
   position: relative;
   border-bottom: 0.05rem solid #f8f8f8;
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
  /*列表*/
  .house-item-box{
    position: relative;
    padding: 0 2rem;
  }
</style>
