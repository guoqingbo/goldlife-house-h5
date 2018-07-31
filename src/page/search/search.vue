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
          <input type="search" placeholder="请输入想找的楼盘名称" @keyup="showSearchResult" v-model="params.keyword">
        </div>
      </div>
      <div class="my-search-right right" @click="$emit('hideSearch')">
        取消
      </div>
    </div>
    <!--搜索结果-->
    <ul  v-if="searchResult.length>0"  class="search-result">
      <li v-for="(item,index) in searchResult" :key="item.communityId" @click="$emit('searchHouse',item)">{{item.communityName}}</li>
    </ul>
    <!--搜索历史-->
    <ul v-if="houseSearchHistory&&houseSearchHistory[searchHouseType].length>0&&searchResult.length<=0" class="search-history">
      <li><span>搜索历史</span><span><i class="icon iconfont icon-delete" @click="deletehouseSearchHistory(searchHouseType)">&#xe613;</i></span></li>
      <li v-for="(item,index) in houseSearchHistory[searchHouseType]"  @click="$emit('searchHouseHistory',item)">{{item.name}}</li>
    </ul>

  </div>
</template>

<script>
  import api from '../../api/axios' //后台数据接口
  export default {
    data(){
      return {
        params:{
          keyword:"",//小区名关键字(拼音或汉字)
          city:"hz",//城市拼写(hz)
          limit:"10",//搜索到的小区限制，默认5条
        },
        isShowHouseType:false,//搜索房源类型 1：二手房 2：租房
        searchResult:[],//搜索结果
        searchHouseType:this.houseType, //搜索房源类型
        houseSearchHistory:localStorage.getItem("houseSearchHistory")==null || localStorage.getItem("houseSearchHistory").length<=0 ? {1:[], 2:[]} : JSON.parse(localStorage.getItem("houseSearchHistory")),
      }
    },
    props: {
      houseType:{
          default:1
        },
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
              this.searchResult=[];
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
        this.$emit('searchHouse',item);
      },
      deletehouseSearchHistory(searchHouseType){
        this.houseSearchHistory[this.searchHouseType]=[];
        localStorage.setItem("houseSearchHistory",JSON.stringify(this.houseSearchHistory));
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
      width: 24%;
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
        font-size: 1.3rem;
        width: 100%;
        border: 0;
        outline: none;
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
        padding: 2rem 0 1rem 0;
        color: #9c9a9d;
        /*border-top: none;*/
        span:nth-child(2){
          float: right;
        }
        .icon-delete{
          font-sise:26px;
        }
      }
      &:nth-child(2){
        border-top: none;
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
    li:first-child{
      border-top:none;
    }
  }

</style>
