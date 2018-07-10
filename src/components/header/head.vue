<template>
  <h1 class="top-header">
    <span class="go-back" v-if="goBack" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
    <span class="top-header-title">{{title}}</span>
  </h1>
</template>

<script>

    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: {
          goBack:{
          },
          title:{
            type:String,
            default:"科地地产"
          }
        },
        computed: {

        },
        methods: {

        },

    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .top-header{
    position: relative;
    background-color: $themeColor;
    font-size: 16px;
    color: #ffffff;
    height: 4.4rem;
    line-height: 4.4rem;
    .go-back{
      position: absolute;
      left: $contentPadding;
    }
    .go-back-icon{
      font-size: 2.6rem;
    }
    .top-header-title{
      display: inline-block;
      width:100% ;
      font-weight: bold;
      text-align: center;
    }
  }
</style>
