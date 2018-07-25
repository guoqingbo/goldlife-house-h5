<template>
  <div>
    <!--搜索-->
    <div class="my-search clear">
      <div class="my-searchbar-inner left clear">
        <div class="my-search-dropdown left" >
          <div class="" @click="isShowHouseType = !isShowHouseType">
            {{searchHouseType == 1?"二手房":'租房' }}<i class="icon iconfont">&#xe62d;</i>
          </div>
          <ul v-if="isShowHouseType" class="house-type-ul">
            <li> <i class="icon iconfont arrow-top">&#xe62c;</i></li>
            <li :class="{'house-type-active':searchHouseType==1}"><span @click="selectHouseType(1)">二手房</span></li>
            <li :class="{'house-type-active':searchHouseType==2}"><span @click="selectHouseType(2)">租房</span></li>
          </ul>
        </div>
        <div class="my-search-input left">
          <input type="search" placeholder="请输入商圈或小区名" @keyup="showSearchResult" v-model="params.keyword">
        </div>
      </div>
      <div class="my-search-right right" @click="$emit('hideSearch')">
        取消
      </div>
    </div>
    <!--搜索结果-->
    <ul  v-if="searchResult.length>0"  class="search-result">
      <li v-for="(item,index) in searchResult" :key="item.communityId" @click="searchHouse(item)">{{item.communityName}}</li>
    </ul>
    <!--搜索历史-->
    <ul v-if="communitySearchHistory&&communitySearchHistory[searchHouseType].length>0&&searchResult.length<=0" class="search-history">
      <li><span>搜索历史</span><span><i class="icon iconfont icon-delete" @click="deleteCommunitySearchHistory(searchHouseType)">&#xe613;</i></span></li>
      <li v-for="(item,index) in communitySearchHistory[searchHouseType]"  @click="searchHouse(item)">{{item.communityName}}</li>
    </ul>

  </div>
</template>

<script>
  import api from '../../api/customer/axios' //后台数据接口
  export default {
    data(){
      return {
        params:{
          keyword:"",//小区名关键字(拼音或汉字)
          city:"hz",//城市拼写(hz)
          limit:"5",//搜索到的小区限制，默认5条
        },
        isShowHouseType:false,//搜索房源类型 1：二手房 2：租房
        searchResult:[],//搜索结果
        searchHouseType:this.houseType, //搜索房源类型
        communitySearchHistory:localStorage.getItem("communitySearchHistory") == null ? {1:[], 2:[]} : JSON.parse(localStorage.getItem("communitySearchHistory")),
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
        //
    },
    components: {

    },
    computed: {
    },
    methods: {
      // 搜索结果展示
      showSearchResult(){
          let searchParams = this.params;
          console.log(searchParams.keyword)
          if (searchParams.keyword == ''){
              return
          }
        api.searchCommunity(searchParams)
          .then(res=>{
              console.log(res.data)
              if (res.data.success){
                this.searchResult = res.data.result
              }else{
                this.$toast({
                  message: res.data.errorMessage,
                  position: 'bottom',
                  duration: 3000
                })
              }
            })
          .catch(res=>{
              console.log(res)
            this.$toast({
              message: res.Error,
              position: 'bottom',
              duration: 3000
            })
          })
      },
      //取消
      cancel(){

      },
      selectHouseType(searchHouseType){
          this.searchHouseType = searchHouseType
          this.isShowHouseType = false
      },
      searchHouse(item){
          //添加搜索记录
        //获取小区搜索记录
        console.log(item)
        this.communitySearchHistory[this.searchHouseType].unshift(item);
        localStorage.setItem("communitySearchHistory",JSON.stringify(this.communitySearchHistory));
          //触发父级搜索
        this.$emit('searchHouse',item);

      },
      deleteCommunitySearchHistory(searchHouseType){
        this.communitySearchHistory[this.searchHouseType]=[];
        localStorage.setItem("communitySearchHistory",JSON.stringify(this.communitySearchHistory));
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
    font-size: 1.3rem;
    padding:0 2rem;
    div{
      height: 3.5rem;
      line-height: 3.5rem;
    }
    .my-searchbar-inner{
      background-color: #f5f5f5;
      border-radius: 6px;
      padding-left: 1rem;
      width:85%;
      // width: 29rem;
    }
    /*下拉样式*/
    .my-search-dropdown{
      position: relative;
      width: 30%;
      font-size: 1.3rem;
      .house-type-ul{
        width: 9rem;
        top: 5rem;
        position: absolute;
        z-index: 6;
        /*left: 2rem;*/
        background-color: #fff;
        font-size: 1.3rem;
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
            color:#fff;
            font-size: 1.6rem;
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
      width: 70%;
      color: #424242;
      input{
        background-color: transparent;
        width: 100%;
      }
    }
    .my-search-right{
      width: 15%;
      text-align: right;
      .iconfont-more{font-size: 2.5rem};
    }
    .more-ul{
      position: absolute;
      z-index: 6;
      right: 2rem;
      top: 10rem;
      background-color: #fff;
      font-size: 1.3rem;
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
        top: -1.6rem;
        right: 0.5rem;
        font-size: 2.5rem;
      }
      .my-care{
        color:#ffc16b ;
        font-size: 1.9rem;
        margin: 0 1rem;
      }
      .look-house{
        color:#5c5990 ;
        font-size: 2.2rem;
        margin: 0 1rem;
      }
      .sign-search{
        color:#eed7b5 ;
        font-size: 1.9rem;
        margin: 0 1rem;
      }
    }
  }

  /*搜索历史*/
  .search-history{
    padding:0  2rem;
    background-color: #fff;
    li{
      padding: 1rem 0;
      font-size: 1.6rem;
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
  /*搜索结果*/
  .search-result{
    padding:0  2rem;
    background-color: #fff;
    li{
      padding: 1rem 0;
      font-size: 1.6rem;
      @include border-top;
      color:#424242;
    }
  }

</style>
