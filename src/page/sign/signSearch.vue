<template>
  <div>
      <head-top />
      <h1 class="nav-header">
        <span class="header-title">签约查询</span>
        <span class="go-back" @click="$router.go(-1)">返回</span>
      </h1>

      <div class="box" v-for="item in signList" @click="toDetail(item.id)">
        <div class="title">
          <div class="title_info">{{ item.house_addr }}</div>
        </div>
        <div class="detail">
          <p class="status">{{ bargainStatus[item.bargain_status] }}</p>
          <p>金额：<span>{{ item.price|formatPrice }}元</span></p>
          <p>门店：<span>{{ !!item.agency_name?item.agency_name:'无' }}</span></p>
          <p>经纪人：<span>{{ !!item.broker_name?item.broker_name:'无' }}</span></p>
          <p>当前签约状态 ：<span class="signStatus">{{ item.now_transfer_name }}</span></p>
        </div>
      </div>

  </div>
</template>
<script type="text/javascript">
  import api from '../../api/customer/axios'
  import headTop from '../../components/header/head'
  export default {
    name:'signSearch',
    data(){
      return{
        signList:[],
        bargainStatus:{
          '1':'办理中',
          '2':'结案',
          '3':'作废'
        }
      }
    },
    mounted(){
      this.getSignSearch();
    },
    methods:{
      getSignSearch(){
        //从vuex中获取登录用户手机号
        var phoneNum = this.$store.state.userInfo.loginName;
        // console.log(phoneNum)
        api.signSearch(phoneNum).then(res=>{
          if(res.data.success){
            this.signList = res.data.result;
          }else{
            this.$toast({
              message: res.data.errorMessage,
              position: 'middle',
              duration: 3000
            })
          }
        })
        .catch(err=>{
          console.log(err);
        })
      },
      toDetail(id){
        // this.$router.push({path:'/signDetail?id='+id})
        this.$router.push({path:'/signDetail',query:{houseId:id}})
      }
    },
    filters: { //定义过滤器
      formatPrice: function (value) {
      if(!value) return '0.00';
         var intPart = Number(value).toFixed(0); //获取整数部分
        //将整数部分逢三一断
         var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,');
         var valueStr = value + '';//先转换成字符串
         // 判断是否有小数
         if(valueStr.indexOf(".") >= 0){
            var floatPart = valueStr.split(".")[1]; //预定义小数部分
            return intPartFormat + "." + floatPart;
         }else{
            return intPartFormat;
         }
      }
    },
    components: {
        headTop
      },
  }
</script>
<style lang="scss" scoped>
  .nav-header{
    display: flex;
    justify-content: space-between;
    background-color: #fff;
    font-size: 1.6rem;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: solid .6rem #f8f8f8;
    padding:0 2rem;
    .go-back{
      color:#ffc16b;
    }
    .header-title{
      display: inline-block;
      font-weight: bold;
    }
  }

  .box{
    width: 100%;
    font-family: PingFang-SC-Regular;
    .title{
        height: 10rem;
        padding: 2.5rem 0;
        background: url(../../assets/icon/BGview1@2x.png) no-repeat;
        background-size: 100% 100%;
        .title_info{
          height: 5rem;
          line-height: 5rem;
          text-align: center;
          color: #ffffff;
          font-family: PingFang-SC-Mediun;
          font-size: 1.6rem;
          padding: 0 3.5rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap; //文本不换行，这样超出一行的部分被截取，显示...

        }
    }
    .detail{
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
      p{
        text-align: left;
        margin-bottom: 1rem;
        color: #9c9a9d;
        span{
          color: #424242;
        }
        .signStatus{
          color: #ffc16b;
        }
      }
      .status{
        color: #754501;
      }

    }
  }



</style>
