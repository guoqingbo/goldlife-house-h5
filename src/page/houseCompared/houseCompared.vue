<template>
  <div class="box">
    <!--头部标题-->
    <div class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">对比清单</span>
      <span class="nav-header-right">
        <i class="icon iconfont icon-add" @click="sheetVisible = !sheetVisible">&#xe61a;</i>
        <i class="icon iconfont icon-modify">&#xe690;</i>
      </span>
    </div>
    <!--添加弹出层-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
  </div>

  <!--<div class="add-pop">-->
    <!--&lt;!&ndash;蒙版&ndash;&gt;-->
    <!--<div class="mask"></div>-->
    <!--&lt;!&ndash;底层选择框&ndash;&gt;-->
    <!--<div class="footer-select">-->

    <!--</div>-->

</template>
<script>
  import api from '../../api/axios'

  export default {
    data(){
      return{
        actions:[//底部下拉选项
            {
                name:"从关注房源添加",
                method:this.addFromCareHouse()
            },
            {
              name:"从看房记录添加",
              method:this.addFromLookHouse()
            }
        ],
        sheetVisible:false,//是否展示底部下拉选项
      }
    },
    created(){

    },
    mounted(){

    },
    methods:{
      addFromCareHouse(){

      },
      addFromLookHouse(){

      }
    }
  }
</script>
<style lang="scss">
  @import '../../style/mixin';
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
    .nav-header-right{
      position: absolute;
      right: $contentPadding;
      top: 0;
      .icon-add{
        font-size: 2.25rem;
        padding-right: 1rem;
      }
      .icon-modify{
        font-size: 2rem;
      }
    }
  }

  /*添加弹出层*/
  .mint-actionsheet{
    .mint-actionsheet-button{
      color: #ffc16b;
    }
  }
</style>
