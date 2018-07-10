<template>
  <el-header  title="科地地产" class="top-header">
    <el-button v-if="goBack" icon="back" slot="append" @click="$router.go(-1)"></el-button>
  </el-header>
</template>

<script>

    export default {
    	data(){
            return{

            }
        },
        mounted(){

        },
        props: ['goBack'],
        computed: {

        },
        methods: {

        },

    }

</script>

<style lang="scss">
  @import '../../style/mixin';
  .top-header{
    background-color: $themeColor;
    font-size: 16px;
    height: 4.4rem;
    h1{
      font-weight: bold;
    }
  }
</style>
