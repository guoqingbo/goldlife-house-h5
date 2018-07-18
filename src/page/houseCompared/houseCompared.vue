<template>
  <div class="box">
    <head-top />
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">对比清单</span>
    </h1>
  </div>
</template>
<script>
  import api from '../../api/axios'

  export default {
    data(){
      return{

      }
    },
    created(){

    },
    mounted(){

    },
    methods:{

    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin';

</style>
