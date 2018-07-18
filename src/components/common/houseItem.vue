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
          return "http://118.178.230.141/group1/M00/00/04/drLmjVsZ-cmAIWmKAASWd8wn0zs229.jpg"
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
          function add0(m) {
            return m < 10 ? '0' + m : m
          }
          let time = new Date(parseInt(value)*1000);
          let y = time.getFullYear();
          let m = time.getMonth() + 1;
          let d = time.getDate();
          return y + '年' + add0(m) + '月' + add0(m)+ "日"+"发布";
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
    .img {
      width: 42%;
      height: 8rem;
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
