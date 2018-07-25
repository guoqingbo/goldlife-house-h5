<template>
	<div class="userProtocol">
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">金品生活用户注册协议</span>
    </h1>
    <div class="title-div">
      <p>（目标公司）</p>
      <p>金品生活用户注册协议</p>
    </div>
    <div class="content-div">
      <p>重要提示：</p>
      <br>
      <p>【  】（目标公司）合法所有并依法运营的“金品生活”平台依据本协议的规定为注册用户（以下简称“用户”或“您”）提供服务，本协议在注册用户和金品生活之间具有合同上的法律效力。金品生活在此特别提醒您认真阅读、充分理解本协议各条款，特别是其中所涉及的免除或限制金品生活责任的条款、排除或限制注册用户权利的条款等。请您审慎阅读并选择接受或不接受本协议。除非您接受本协议所有条款，否则您无权使用金品生活于本协议下所提供的服务。您一经注册或使用金品生活服务即视为对本协议全部条款已充分理解并完全接受。</p>
      <br>
      <p>只要您进行勾选、点击“确认”或“同意”按钮或类似行为时，即表明您在注册前已经进行认真阅读并同意无条件接受本协议，或您访问平台的网站如金品生活网站（网址：    ）及其相关网站、我们公司的移动设备客户端（即金品生活）时，或您使用平台提供的任一服务时，即表示您已同意平台按照本协议来合法使用和保护您的个人电子信息。</p>
    </div>
    <br>
    <div class="annotation-div">
      <p>相关释义：</p>
      <p>1. 金品生活平台：是由【  】（目标公司）运营的信息中介服务平台（网址：         ，如平台以公告等形式发布新的网址，请以新的网站上载述的内容为准）。</p>
      <br>
      <p>2. 金品生活服务：是由金品生活通过金品生活平台及客户端等各种方式向注册用户提供的服务，具体服务内容主要包括：交易信息发布、交易管理服务、用户服务等交易辅助服务，具体详情以金品生活当时提供的服务内容为准。</p>
      <br>
      <p>3. 金品生活平台规则：包括在金品生活平台已经发布及后续发布的全部规则、解读、公告等内容以及金品生活在论坛、帮助中心内发布的各类规则、实施细则、流程说明等</p>
      <br>
      <p>第一章 本协议的签署和修订</p>
      <br>
      <p>第一条 为了保障您的权益，您在自愿注册使用金品生活服务前，必须仔细阅读并充分理解知悉本服务协议所有条款。一经注册或使用金品生活服务即视为对本服务协议的充分理解和接受；如有违反而导致任何法律后果，您将自己独立承担相应的法律责任。</p>
      <br>
      <p>第二条 本协议内容包括本协议的所有条款及本平台已经发布的或将来可能发布的各类规则。所有规则为本协议不可分割的一部分，与协议正文具有同等法律效力。本协议是注册用户与本平台共同签订的，适用于用户在本平台的全部活动。</p>
      <br>
      <p></p>
      <br>
      <p></p>
      <br>
    </div>

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

  .userProtocol{
    font-size: 1.6rem;
    /**导航*/
    .nav-header {
      position: relative;
      background-color: #fff;
      font-size: 1.6rem;
      color: #424242;
      height: 4.4rem;
      line-height: 4.4rem;
      border-bottom: solid .6rem #f8f8f8;
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
    .title-div{
      margin-top: 1rem;
      text-align: center;
      color: #754501;
      p{
        font-weight: bold;
      }
      p:first-child{
        font-size: 2.1rem;
      }
      p:last-child{
        font-size: 1.6rem;
      }
    }
    .content-div{
      margin-left: 2rem;
      margin-right: 2rem;
      margin-top: 2.5rem;
      font-size: 1.3rem;
      p{
        font-weight: bold;
      }
      p:last-child{
        text-indent: 2em;
      }
    }
    .annotation-div{
      margin-left: 2rem;
      margin-right: 2rem;
      font-size: 1.3rem;
    }

  }
</style>
