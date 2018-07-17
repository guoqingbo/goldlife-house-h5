<template>
  <div>

  </div>
</template>

<script>
  import api from '../../api/axios' //后台数据接口
  export default {

    created(){
      this.getWeixinMenu();
    },
    methods: {
      // 搜索结果展示
      getWeixinMenu(){
        alert(JSON.stringify(this.$route))
          let Params = {
            redirectType:this.$route.params.redirectType,// 可能值 house  account fund finan loan invite
            code:this.$route.query?this.$route.query.code:"",
          };
        alert(this.$route.query);
        alert(JSON.stringify(this.Params));
        api.getWeixinMenu(Params)
          .then(res=>{
              console.log(res.data)
            })
          .catch(res=>{
            this.$toast({
              message: res.error_msg,
              position: 'bottom',
              duration: 3000
            })
          })
      },
    },
    watch: {

    }
  }

</script>
