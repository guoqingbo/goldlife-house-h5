<template>
  <!--房源结果列表-->
  <div class="">
    <!--头部导航-->
    <div></div>
    <!-- 对应的内容 -->
    <mt-tab-container v-model="selected">

    </mt-tab-container>
  </div>
</template>
<script>
  export default {
    props:[],
    data(){
      return {
        selected:""
      }
    },

  }
</script>
<style lang="scss" scoped>

</style>
