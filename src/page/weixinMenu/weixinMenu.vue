<template>
  <div>

  </div>
</template>

<script>
  import api from '../../api/axios' //后台数据接口
  import { MessageBox } from 'mint-ui';
  export default {

    created(){
      this.getWeixinMenu();
    },
    methods: {
      // 搜索结果展示
      getWeixinMenu(){
//        this.$toast({
//          message: JSON.stringify(this.$route.fullPath),
//          position: 'bottom',
//          duration: 0
//        })
        MessageBox.alert(this.$route.fullPath,"fullPath");
          let Params = {
            redirectType:this.$route.params.redirectType,// 可能值 house  account fund finan loan invite
            code:this.$route.query?this.$route.query.code:"",
          };

//        MessageBox.alert(this.$route.query,"qurey");
//        MessageBox.alert(this.$route.params,"params");
        api.getWeixinMenu(Params)
          .then(res=>{
              console.log(res.data)
            })
          .catch(res=>{
              console.log(res+"res")
            this.$toast({
              message: res,
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
