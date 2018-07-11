<template>
  <div>
    <div class="alert" v-if="show">
          <span>{{text}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    data(){
      return {
          show:false,
          text:'',
          duration:2000
      }
    },
    props: {

    },
    created(){

    },
    mounted(){
    },
    components: {

    },
    computed: {

    },
    methods: {
        open(option){
            if (typeof option == 'string'){
              this.text = option
            }else if (typeof option == 'object'){

            }

          this.show = true;
          setTimeout(()=>{this.show = false},this.duration)
        }
    },
    watch: {

    }
  }

</script>

<style lang="scss" scoped>
  .alert{
    position: absolute;
    bottom: 5rem;
    text-align: center;
    width: 100%;
    /*animation: tipMove 4s;*/
    span{
      color:#fff;
      height: 3.6rem;
      padding: 1rem 3rem;
      line-height: 3.6rem;
      border-radius: 1.8rem;
      background-color: rgba(0,0,0,0.6);
    }
  }
</style>
