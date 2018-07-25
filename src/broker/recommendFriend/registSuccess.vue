<template>
	<div class="recommend">
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">推荐注册</span>
    </h1>
    <button>下载金品生活APP</button>
  </div>
</template>
<script type="text/javascript">
  import headTop from '../../components/header/head'
  import VueQr from 'vue-qr'
	export default {

		data(){
			return{

			}
		},
    mounted() {

    },
		methods:{

    },
		components: {
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
    background-image:url(../../assets/img/invitesuccess_BG.png);
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
    button{
      font-size: 1.6rem;
      height: 4rem;
      width: 70%;
      border-radius: 2rem;
      background-color: #FC6A3F;
      color: #ffffff;
      position: absolute;
      bottom: 6.5rem;
      left: 15%;
    }

  }
</style>
