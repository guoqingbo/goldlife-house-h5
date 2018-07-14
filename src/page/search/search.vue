<template>
  <div>
    <!--搜索-->
    <div class="my-search clear">
      <div class="my-searchbar-inner left clear">
        <div class="my-search-dropdown left" >
          <div class="" @click="isShowHouseType = !isShowHouseType">
            {{houseType == 1?"二手房":'租房' }}<i class="el-icon-arrow-down el-icon--right"></i>
          </div>
          <ul v-if="isShowHouseType" class="house-type-ul">
            <li> <i class="icon iconfont arrow-top">&#xe62c;</i></li>
            <li :class="{'house-type-active':houseType==1}"><span @click='cltype(1)'>二手房</span></li>
            <li :class="{'house-type-active':houseType==2}"><span @click='cltype(2)'>租房</span></li>
          </ul>
        </div>
        <div class="my-search-input left">
          <input type="search" placeholder="请输入商圈或小区名" @focus="showSearchResult">
        </div>
      </div>
      <div class="my-search-right right" @click="$emit('hideSearch')">
        取消
      </div>
    </div>
    <!--搜索结果-->
    <ul></ul>
    <!--搜索历史-->
    <ul class="search-history">
      <li><span>搜索历史</span><span><i class="icon iconfont icon-delete">&#xe613;</i></span></li>
      <li v-for="(item,index) in searchHistory">{{item}}</li>
    </ul>

  </div>
</template>

<script>
  export default {
    data(){
      return {
        keyWord:"",//搜索关键字
        isShowHouseType:false,//搜索房源类型 1：二手房 2：租房
        searchHistory:["aaaa","bbbbb"],//搜索历史
      }
    },
    props: {
      houseType:{
          default:1
      }
    },
    created(){

    },
    mounted(){
    },
    components: {

    },
    computed: {

    },
    methods: {
      // 搜索结果展示
      showSearchResult(){

      },
      //取消
      cancel(){

      }
    },
    watch: {

    }
  }

</script>

<style lang="scss" scoped>
  /*公用样式封装*/
  @mixin border-top {
    border-top: 1px solid #f5f5f5;
  }
  /**搜索样式*/
  .my-search{
    margin-top: 1.2rem;
    height: 3.5rem;
    font-size: 13px;
    padding:0 2rem;
    div{
      height: 3.5rem;
      line-height: 3.5rem;
    }
    .my-searchbar-inner{
      background-color: #f5f5f5;
      border-radius: 6px;
      padding-left: 1rem;
      // width: 29rem;
    }
    /*下拉样式*/
    .my-search-dropdown{
      position: relative;
      font-size: 13px;
      .house-type-ul{
        width: 9rem;
        top: 5rem;
        position: absolute;
        z-index: 6;
        /*left: 2rem;*/

        background-color: #fff;
        font-size: 13px;
        border-radius: 2px;
        box-shadow: 0px 0px 10px -3px rgba(0,0,0,0.5);
        li:not(:first-child){
          height: 3.5rem;
          line-height: 3.5rem;
          padding:0 2rem;
          &:nth-child(3){
            @include border-top;
          }
          a{
            color: #424242;
          }
        }
        li:first-child{
          width: 13px;
          height: 10px;
          overflow: hidden;
          line-height: 10px;
          background-color: #fff;
          position: absolute;
          top: -9px;
          left: 1rem;
          .arrow-top{
            color:rgba(0,0,0,0.4);
            font-size: 16px;
          }
        }
        .house-type-active{
          color: #ffc16b;
        }
      ;
      }
    }
    .my-search-input{
      /*border: 0;*/
      padding-left: 0.5rem;
      width: 18rem;
      color: #424242;
      input{
        background-color: transparent;
        width: 100%;
      }
    }
    .my-search-right{
      .iconfont-more{font-size: 2.5rem};
    }
    .more-ul{
      position: absolute;
      z-index: 6;
      right: 2rem;
      top: 10rem;
      background-color: #fff;
      font-size: 13px;
      border-radius: 6px;
      li:not(:first-child){
        height: 3.5rem;
        line-height: 3.5rem;
        padding-right: 1rem;
        &:nth-child(3){
          @include border-top;
        }
        a{
          color: #424242;
        }
      }
      .arrow{
        color:#fff;
        position: absolute;
        top: -16px;
        right: 0.5rem;
        font-size: 25px;
      }
      .my-care{
        color:#ffc16b ;
        font-size: 19px;
        margin: 0 1rem;
      }
      .look-house{
        color:#5c5990 ;
        font-size: 22px;
        margin: 0 1rem;
      }
    }
  }
  /*搜索历史*/
  .search-history{
    padding:0  2rem;
    li{
      padding: 1rem 0;
      font-size: 16px;
      @include border-top;
      &:first-child{
        padding: 2.5rem 0;
        color: #9c9a9d;
        span:nth-child(2){
          float: right;
        }
        .icon-delete{
          font-sise:26px;
        }
      }
      &:nth-child(n + 1){
        color:#424242;
      }
    }
  }

</style>
