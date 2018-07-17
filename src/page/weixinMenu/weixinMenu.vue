<template>
  <div>

  </div>
</template>

<script>
  import api from '../../api/axios' //后台数据接口
  import envConfig from '../../config/env.js'
  export default {
    created(){
      this.getWeixinMenu();
    },
    methods: {
      // 搜索结果展示
      getWeixinMenu(){
          let params = {
            redirectType:this.$route.params.redirectType,// 可能值 house  account fund finan loan invite
            code:this.$route.query?this.$route.query.code:"",
          };
        let paramsStr = 'redirectType='+params.redirectType;
        if (params.code){
          paramsStr += '&code='+params.code;
        }
        window.location.href=envConfig.baseUrl+'/user/weixin/menu?'+paramsStr;
      },
    },
    watch: {

    }
  }

</script>
