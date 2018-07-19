<template>
  <!--房源结果列表-->
  <div class="house-list">
    <ul>
      <li class="house-item clear" v-for="item in houseLists" :key="item.id">
        <router-link
          :to="{name:houseTypeDetail[houseType], params:{cityId:'hz', houseId:item.id, userType:'customer', houseType:houseType}}">
          <house-item :item="item" :houseType="houseType"/>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
  import houseItem from '../../components/common/houseItem'
  export default {
    data(){
        return {
          houseTypeDetail:{
            1:'houseBuyDetail',
            2:'houseRentDetail'
          }
        }
    },
    props:{
      houseLists:{},//房源列表
      houseType:{
          default:1,//1二手房 2租房
      },
    },
    components: {
      houseItem,
    },
  }
</script>
<style lang="scss" scoped>

  /*公用样式封装*/
  @mixin border-top {
    border-top: 0.05rem solid #f5f5f5;
  }
  /**列表*/
  .house-list {
    ul {
      padding: 0 2rem;
      li {
        @include border-top;
        /*background-color: #ccc;*/
      }
    }

  }
</style>
