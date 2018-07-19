<template>
  <!--房源结果列表-->
  <div class="box">
    <!--头部导航-->
    <div class="nav-header">
      <!--返回图标-->
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <!--标题-->
      <span class="header-title">关注房源列表</span>
    </div>
    <!--房源结果列表-->
    <div>
      <ul class="house-list">
        <li class="house-item clear" v-for="item in houseLists" :key="item.id" @click="selectedHouse(item.id)">
          <house-item :item="item" :houseType="1" :checkBox="true">
            <div slot="checkBox" class="check-box-div">
              <span
                class="check-box"
                :class="{'check-active':addComparedHouse.indexOf(item.id)>=0}"></span>
            </div>
          </house-item>
        </li>
      </ul>
    </div>
    <!--加入对比清单-->
    <div class="add-to-compared"
         :class="{'add-active':addComparedHouse.length>0}"
    @click="addToComparedList">加入对比清单</div>
  </div>
</template>
<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head';
  import houseItem from '../../components/common/houseItem'

  export default {
    props:[],
    data(){
      return {
        houseLists:[],//收藏房源列表
        addComparedHouse:[],//选择关注的房源
      }
    },
    components: {
      houseItem,
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
      },
      // 选中房源
      selectedHouse(houseId){
          let idIndex = this.addComparedHouse.indexOf(houseId)
          if (idIndex>=0){
            this.addComparedHouse.splice(idIndex,1);
          }else{
            this.addComparedHouse.push(houseId)
          }
      },
      //加入对比清单
      addToComparedList(){
          //获取用户名
          let loginName = this.$store.state.userInfo.loginName;
          //用户名为空跳出登录弹框
          if (loginName){

          }
          console.log(loginName)
          //在该用户加入对比清单
          localStorage.setItem("comparedList_hz_"+loginName,JSON.stringify(this.addComparedHouse));
      }
    }

  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin';
  .box{
    position: relative;
    height: 100%;
  }
  /*导航头*/
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
  /*房源列表*/
  .house-list{
    padding: 0 2rem;
    /*选中按钮*/
    .check-box-div{
      line-height: 8rem;
      padding-right:1rem;
    }
    .check-box{
      display: inline-block;
      background-color: #eee;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 1.6rem;
    }
    /*选中状态*/
    .check-active{
      background-color: #ffc16c;
      border: solid .2rem #eee;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 1.6rem;
    }
  }
  /*加入对比清单*/
  .add-to-compared{
    position: absolute;
    bottom: 0;
    text-align: center;
    width: 100%;
    background-color: #424242;
    color: #fec26a;
    font-size: 1.6rem;
    height: 5rem;
    line-height: 5rem;
  }
  .add-active{
    background-color: #787878;
    color:#fccf94;
  }
</style>
