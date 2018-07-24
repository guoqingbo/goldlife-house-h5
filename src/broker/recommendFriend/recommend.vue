<template>
	<div class="recommend">
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
    </h1>
    <p class="friend-p">邀请好友</p>
    <div class="share">
      <div>
        <p><img src="../../assets/img/icon_wechat.png"></p>
        <p>邀请微信好友</p>
      </div>
      <div>
        <p><img src="../../assets/img/icon_sharetfriend.png"></p>
        <p>分享到朋友圈</p>
      </div>
    </div>
    <p class="my-p">我的二维码</p>
    <div class="qrcode" id="qrcode">
      <vue-qr :text="config.value" :size="120" :margin="0"></vue-qr>
    </div>
    <div class="bottom-title">
      <p>长按保存二维码</p>
      <p>扫码邀请</p>
    </div>
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
    background-image:url(../../assets/img/invitefriend_BG.png);
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
    }
    .friend-p{
      color: #162E6C;
      font-size: 1.6rem;
      margin-top: 23.5rem;
      text-align: center;
      font-weight: bold;
      letter-spacing: 0.2rem;
    }
    .share{
      margin-top: 2rem;
      display:flex;
      text-align: center;
      margin-left: 10%;
      margin-right: 10%;
      div{
        flex: 1;
        img{
          height: 4rem;
          width: 4rem;
        }
        p{
          font-size: 1.3rem;
          color: #888888;
        }
      }
    }
    .my-p{
      margin-top: 5rem;
      text-align: center;
      font-weight: bold;
      font-size: 1.6rem;
      color: #162E6C;
      letter-spacing: 0.2rem;
    }
    .qrcode{
      margin-top: 1.5rem;
      margin-left: auto;
      margin-right: auto;
      width: 20rem;
      text-align: center;
    }
    .bottom-title{
      margin-top: 1rem;
      text-align: center;
      p{
        color: #888888;
        font-size: 1.3rem;

      }
    }


  }
</style>
