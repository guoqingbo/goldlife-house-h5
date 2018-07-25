<template>
  <!--房源结果列表-->
  <div class="box">
    <!--头部导航-->
    <div class="nav-header">
      <!--返回图标-->
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <!--标题-->
      <span v-if="addType == 1" class="header-title">关注房源列表</span>
      <span v-if="addType == 2" class="header-title">看房记录列表</span>
    </div>
    <!--房源结果列表-->
    <div>
      <ul class="house-list">
        <li class="house-item clear" v-for="item in houseLists" :key="item.id" @click="selectedHouse(item)">
          <house-item :item="item" :houseType="1" :checkBox="true">
            <div slot="checkBox" class="check-box-div">
              <span
                class="check-box"
                :class="{'check-active':addComparedHouse[item.id]}"></span>
            </div>
          </house-item>
        </li>
      </ul>
    </div>
    <!--加入对比清单-->
    <div class="add-to-compared"
         :class="{'add-active':Object.keys(addComparedHouse).length}"
    @click="addToComparedList">加入对比清单</div>
  </div>
</template>
<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head';
  import houseItem from '../../components/common/houseItem'
  import {MessageBox} from 'mint-ui'

  export default {
    props:[],
    data(){
      return {
        loginName:this.$store.state.userInfo.loginName?this.$store.state.userInfo.loginName:"",//登录账号
        houseLists:[],//收藏房源列表
        addComparedHouse:{},//选择关注的房源
        addType:this.$route.params?this.$route.params.addType:1, //1从关注房源添加  2从看房列表添加
      }
    },
    components: {
      houseItem,
    },
    created(){
      this.getHouseList();
      this.getComparedList()
    },
    methods:{
        //获取房源列表
      getHouseList(){
        if (this.addType == 1){
          //获取关注房源列表
            api.getContrastAttentionHouse()
              .then( res => {
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

        }else{
          //获取看房记录
            api.lookHouseHistory()
              .then(res=>{
                if (res.data.success){
                    let houseLists = [];
                  res.data.result.forEach(item=>{
                    houseLists.push(item.targetHouse)
                  });
                  this.houseLists = houseLists
                }else{
                  this.$toast({
                    message: res.data.errorMessage,
                    position: 'bottom',
                    duration: 3000
                  });
                }
              })
              .catch(res=>{
                this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                });
              })
        }
      },
      //获取对比清单
      getComparedList(){
//        localStorage.removeItem("comparedList_hz_"+this.loginName)
        if(this.loginName && localStorage.getItem("comparedList_hz_"+this.loginName)){
           this.addComparedHouse =JSON.parse(localStorage.getItem("comparedList_hz_"+this.loginName));
           console.log(this.addComparedHouse)
        }
      },
      // 选中房源
      selectedHouse(houseItem){
        console.log(houseItem.id);
        if (this.addComparedHouse[houseItem.id]){
            delete this.addComparedHouse[houseItem.id];
        }else{
          this.addComparedHouse[houseItem.id] = houseItem;
        }
        console.log(this.addComparedHouse[houseItem.id]);
        this.addComparedHouse = Object.assign({}, this.addComparedHouse);//对象重新渲染
      },
      //加入对比清单
      addToComparedList(){
          //用户名为空跳出登录弹框
          if (this.loginName == ""){
            MessageBox({
              title: '',
              message: '请登录查看',
              showCancelButton: true,
              confirmButtonText:"登录"
            }).then(action => {
              if(action == "confirm"){
                this.$router.replace({ //跳转到登录页面
                  path: 'login',
                  query: {
                    redirect: this.$router.currentRoute.fullPath, //将跳转的路由path作为参数，登录成功后跳转到该路由
//                    openId:res.result.openId,
//                    code:res.result.code
                  }
                });
              }
            })
            return;
          }
          console.log(this.loginName)
          //在该用户加入对比清单
          localStorage.setItem("comparedList_hz_"+this.loginName,JSON.stringify(this.addComparedHouse));
          //跳转对比清单
          this.$router.push({
            path: '/houseCompared',
          });
      },
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
    font-size: 1.6rem;
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
    background-color: #787878;
    color:#fccf94;
    font-size: 1.6rem;
    height: 5rem;
    line-height: 5rem;
    .add-active{
      background-color: #424242;
      color: #fec26a;
    }
  }

</style>
