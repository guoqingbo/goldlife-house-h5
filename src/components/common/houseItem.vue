<template>
  <!--房源结果列表-->
  <div class="house-item">
      <!--选择按钮插槽-->
      <slot name="checkBox"></slot>
      <div class="img">
         <img :src="item.pic|pic">
      </div>
      <div class="li-content">
        <p><span class="title">{{item.title}}</span></p>
        <p><span class="dicrible">{{item.describe}}</span></p>
        <p>
          <span class="price">{{item.price | price(houseType)}}</span>
          <span class="avgprice">{{item.avgprice | avgprice}}</span>
        </p>
        <p v-if="!checkBox"><span class="publish-time">{{item.create_time | publishTime}}</span></p>
      </div>
  </div>
</template>
<script>
  export default {
    props:{
      item:{},//房源列表
      houseType:{
          default:1,//1二手房 2租房
      },
      checkBox:{
          default:false
      }
    },
    filters:{
      pic(value){
        if (value) {
          return value;
        }else{
          return "/static/img/bg_bigphotonormal@2x.f7b270e.png"
        }
      },
      price(value,houseType){
        if (value) {
          return houseType == 1 ? value + ' 万元' : value + ' 元/月';
        }
      },
      avgprice(value){
        if (value) {
          return value + ' 元/平';
        }
      },
      publishTime(value){
        if (value) {
          if(value.toString().length < 11){
            value = value*1000
          }
          let nowTime =  new Date().getTime();//当前时间
          let leave1 = nowTime % (24 * 3600*1000)   //计算天数后剩余的毫秒数
          let diffTime = nowTime -leave1- value;
          let diffDay = Math.ceil(diffTime/(24 * 3600 * 1000))
          if(diffTime <= 0){//当天发布时
            let date = new Date(value)
            let fullYear = date.getFullYear(); // 获取完整的年份(4位,1970)
            let month = date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1; // 获取月份(0-11,0代表1月,用的时候记得加上1)
            let day = date.getDate()<10?'0'+date.getDate():date.getDate(); // 获取日(1-31)
//            date.getTime(); // 获取时间(从1970.1.1开始的毫秒数)
//            date.getHours(); // 获取小时数(0-23)
//            date.getMinutes(); // 获取分钟数(0-59)
//            date.getSeconds(); // 获取秒数(0-59)
            return fullYear+'年'+month+'月'+day+'日'+ '发布';
          }else if (diffDay>15){
            return '15天以上';
          }else{
            return diffDay+"天前发布";
          }
        }
      }
    },
  }
</script>
<style lang="scss" scoped>

  /**列表项*/
  .house-item {
    display: flex;
    /*height: 8rem;*/
//    @include border-top;
    padding:1.5rem 0;
    width: 100%;
    .img {
      width: 42%;
      height: 8.5rem;
      /*border-radius: .5rem;*/
      img {
        width: 100%;
        height: 100%;
        border-radius: .5rem;
      }
    }
    .li-content {
      display: flex;
      /*flex-direction:column;*/
      align-content: space-between;
      flex-wrap: wrap;
      width: 58%;
      padding-left: 1.5rem;
      p {
        width: 100%;
        /*margin-bottom: 0.2rem;*/
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .title {
        font-weight: bold;
        font-size: 1.6rem;
        color: #424242;
      }
      .dicrible {
        font-size: 1.5rem;
        color: #9c9a9d;
      }
      .price {
        font-size: 1.5rem;
        color: #e10000;
      }
      .avgprice {
        font-size: 1.5rem;
        color: #424242;
      }
      .publish-time {
        font-size: 1.3rem;
        color: #754501;
      }
    }
    .house-left{
      line-height: 8rem;
      padding-right: 1rem;
    }
  }

</style>
