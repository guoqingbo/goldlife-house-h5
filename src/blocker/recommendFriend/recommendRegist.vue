<template>
	<div class="recommend">
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">推荐注册</span>
    </h1>
    <div class="sender-box">
      <p class="sender-p">187****9009</p>
      <p class="sender-p-des">邀请您注册金品生活APP</p>
    </div>
    <div class="form-div">
      <p><input class="phone-input" placeholder="输入手机号码"/></p>
      <div class="code-div"><input class="code-input" placeholder="输入验证码"/><span class="button-span">获取验证码</span></div>
      <p class="button-p"><button>注册</button></p>
    </div>
    <p class="agree-p">注册即代表同意《金品生活用户使用指南》</p>
  </div>
</template>
<script type="text/javascript">
  import headTop from '../../components/header/head'
  import VueQr from 'vue-qr'
	export default {

		data(){
			return{
			  config: {
          value: 'www.baidu.com',//显示的值、跳转的地址
          logo:'static/img/logo.png'//中间logo的地址
        }
			}
		},
    mounted() {

    },
		methods:{

    },
		components: {
        VueQr,
	      headTop,
	    },
	}
</script>
<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";
  .recommend{
    overflow: hidden;
    position: fixed;
    width:100%;
    height:100%;
    background-size:cover;
    background-image:url(../../assets/img/register_BG.png);
    .nav-header {
      position: relative;
      font-size: 1.6rem;
      color: #fff;
      height: 4.4rem;
      line-height: 4.4rem;
      .go-back {
        position: absolute;
        left: $contentPadding;
      }
      .go-back-icon {
        font-size: 2rem;
      }
      .header-title {
        display: inline-block;
        width: 100%;
        font-weight: bold;
        text-align: center;
        letter-spacing: 0.2rem;
      }
    }
    .sender-box{
      margin-top: 27rem;
      text-align: center;
      .sender-p{
        font-size: 2.1rem;
        color: #fe7641;
      }
      .sender-p-des{
        margin-top: 0.5rem;
        font-size: 1.5rem;
        color: #666666;
        letter-spacing: 0.1rem;
      }
    }
    .form-div{
      margin-top: 6rem;
      text-align: center;
      p{
        padding-top: 1.2rem;
        .phone-input{
          border-radius: 0.5rem;
          height: 4rem;
          width: 25rem;
          padding-left: 2rem;
          font-size: 1.3rem;
          color: #888888;
        }
      }
      .code-div{
        margin-top: 1.2rem;
        margin-left: auto;
        margin-right: auto;
        border-radius: 0.5rem;
        height: 4rem;
        width: 25rem;

        background-color: #ffffff;
        line-height: 4rem;
        input{
          border-right: 1px solid #f37641;
        }
        .button-span{
          margin-left: 1rem;
          font-size: 1.3rem;
          color: #f37641;
        }
      }
      .button-p{
        margin-top: 1rem;
        button{
          height: 4rem;
          width: 25rem;
          border-radius: 2rem;
          background-color: #FBC230;
          color: #bd4104;
          font-size: 1.5rem;
          letter-spacing: 0.2rem;
        }
      }

    }
    .agree-p{
      margin-top: 1rem;
      color: #ffffff;
      font-size: 1.2rem;
      text-align: center;
    }


  }
</style>
