<template>
  <!--房源结果列表-->
  <div class="houseList clear">
    <ul>
      <li class="clear" v-for="item in houseLists" :key="item.id">
        <router-link to="/sellDetail">
          <div class="img left"><img :src="item.pic|pic"></div>
          <div class="left li-content">
            <p><span class="title">{{item.title}}</span></p>
            <p><span class="dicrible">{{item.describe}}</span></p>
            <p>
              <span class="price">{{item.price | price(houseType)}}</span>
              <span class="avgprice">{{item.avgprice | avgprice}}</span>
            </p>
            <p></p><span class="publish-time">{{item.create_time | publishTime}}</span>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    props:{
      houseLists:{},
      houseType:{
          default:1,//1二手房 2租房
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

  /*公用样式封装*/
  @mixin border-top {
    border-top: 0.5rem solid #f5f5f5;
  }
  /**列表*/
  .houseList {
    padding: 0 2rem;
    ul {
      width: 100%;
      li {
        /*border-top: 1px solid #f5f5f5;*/
        @include border-top;
        padding: 1.5rem 0;
        .img {
          width: 42%;
          height: 8rem;
          border-radius: .5rem;
          img {
            width: 100%;
            height: 100%;
          }
        }
        .li-content {
          width: 58%;
          padding-left: 2rem;
          p {
            margin-bottom: 0.2rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
          .title {
            font-weight: bold;
            font-size: 0.8px;
            color: #424242;
          }
          .dicrible {
            font-size: 7.5rem;
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
      }
    }

  }
</style>
