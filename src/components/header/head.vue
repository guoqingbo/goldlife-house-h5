<template>
  <mt-header  title="科地地产" class="top-header">
    <mt-button v-if="goBack" icon="back" slot="left" @click="$router.go(-1)"></mt-button>
  </mt-header>
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
