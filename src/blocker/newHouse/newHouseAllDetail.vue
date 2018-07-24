<template>
	<div class="box">
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">绿城凯雄国际</span>
          <!-- <span class="share"><img src="../../assets/icon/icon_topbar_share@2x.png"></span> -->
        </h1>
		
		<div class="container">
			<h3 class="mini-title">位置信息</h3>
			<p class="detail">区域位置：<span>萧山</span></p>
			<p class="detail">楼盘地址：<span>萧山萧绍路通惠路子交汇处</span></p>
		</div>

		<div class="container">
			<h3 class="mini-title">基本信息</h3>
			<p class="detail">建筑类型：<span>暂无信息</span></p>
			<p class="detail">产权年限：<span>40年</span></p>
			<p class="detail">占地面积：<span>7,143㎡</span></p>
			<p class="detail">建筑面积：<span>33,241㎡</span></p>
			<p class="detail">容积率：<span>3.20</span></p>
			<p class="detail">绿化率：<span>20%</span></p>
			<p class="detail">规划户数：<span>496</span></p>
			<p class="detail">规划车位：<span>489</span></p>
		</div>

		<div class="container">
			<h3 class="mini-title">交易信息</h3>
			<p class="detail">开发商：<span>萧山</span></p>
			<p class="detail">楼盘状态：<span>萧山萧绍路通惠路子交汇处</span></p>
			<p class="detail">参考均价：<span>暂无信息</span></p>
			<p class="detail">最新开盘：<span>40年</span></p>
			<p class="detail">交房时间：<span>7,143㎡</span></p>
			<p class="detail">物业类型：<span>33,241㎡</span></p>
			<p class="detail">物业公司：<span>3.20</span></p>
			<p class="detail">供水类型：<span>20%</span></p>
			<p class="detail">供电类型：<span>496</span></p>
			<p class="detail">许可证：<span>489</span></p>
		</div>

		<p class="contact" @click="phoneNum">电话咨询</p>

	</div>
</template>
<script type="text/javascript">
	import api from '../../api/axios'
  	import headTop from '../../components/header/head'

	export default {
		name:'newHouseAllDetail',
		data(){
			return{}
		},
		methods:{
			phoneNum(){

			}
		},
		components: {
	      headTop,
	    },
	}
</script>
<style lang="scss" scoped>
	.box{
		width: 100%;
		background: #F8F8F8;
		font-size: 1.5rem;
		font-family: PingFang-SC-Regular;
		padding-bottom: 4rem;

		.nav-header{
		    position: relative;
		    background-color: #fff;
		    font-size: 1.6rem;
		    color: #424242;
		    height: 4.4rem;
		    line-height: 4.4rem;
		    border-bottom: solid .6rem #f8f8f8;
		    .go-back{
		      position: absolute;
		      left: 1.5rem;
		    }
		    
		    .go-back-icon{
		      font-size: 2rem;
		    }
		    .header-title{
		      display: inline-block;
		      width:100% ;
		      font-weight: bold;
		      text-align: center;
		    }
	  }

	.container{
		background: #ffffff;
		padding: 1.5rem 2rem 1rem;
		margin-bottom: 1rem;

	}
	.mini-title{
		font-size: 1.6rem;
 		font-weight: bold;
 		color: #424242;
 		margin-bottom: 2.5rem;
	}
	.detail{
		color: #888888;
		font-size: 1.5rem;
		margin-bottom: 1.5rem;
		span{
			color: #424242;
		}
	}

	.contact{
		font-size: 1.6rem;
			width: 100%;
			height: 5rem;
			line-height: 5rem;
			text-align: center;
			color: #ffffff;
			background: #162E6C;
			position: fixed;
			bottom: 0;
		}

	}
</style>