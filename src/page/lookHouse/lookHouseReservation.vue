<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <!-- <span class="header-title" @click="postNode">确定</span> -->
        </h1>

        <div class="reservaInfo">
        	<h2>看房预约</h2>
        	<div class="info">
        		<div class="info_left">
	        		<p>12月08日 15：00</p>
	        		<p>在 <span>广厦天都城天星苑</span> 约看</p>
	        	</div>
	        	<div class="info_right">
	        		<p></p>
	        		<p>预约中</p>
	        	</div>
        	</div>
        </div>

        <div class="box">
			<div class="house-detail">
				<img src="../../assets/icon/searcherror@2x.png">
				<div>
					<h3>广厦天都城天星苑 2室1厅室内室内</h3>
					<p class="describ">90.23平方/南 北/中楼层  共18层</p>
					<p class="price">
						<span>240万</span>
						<span>&nbsp;&nbsp;43,345&nbsp;元/平</span>
					</p>
					<p class="dayT">1天前发布</p>
				</div>
			</div>
			<p class="tips">带看经纪人将与您核实确认约看时间地点，确认预约。</p>
			<!-- <p class="tips">经纪人与您核实预约情况反映，本次预约失败。感谢您的关注，请继续寻找核实房源</p> -->
			<!-- <p class="tips">您已预约成功，如需修改预约时间请致电经纪人。</p> -->
		</div>

		<p class="contact">一键电联经纪人</p>
	</div>
</template>
<script type="text/javascript">
	import api from '../../api/axios'
  	import headTop from '../../components/header/head'
  	export default {
		name:'lookHouseReservation',
		data(){
			return{		
			}
		},
		created(){
	
		},
		mounted(){
		},
		components:{
			headTop
		}
	}
</script>
<style lang="scss" scoped>
	.nav-header{
	    position: relative;
	    background-color: #fff;
	    font-size: 16px;
	    color: #424242;
	    height: 4.4rem;
	    line-height: 4.4rem;
	    border-bottom: solid .6rem #f8f8f8;
	    padding-right: 2rem;
    .go-back{
      position: absolute;
      left: 1.5rem;
    }
    .go-back-icon,{
      font-size: 2rem;
    }
    
  }

  .reservaInfo{
  	width: 100%;
  	padding: 1.5rem 2rem;
  	font-family: PingFang-SC-Bold;
  	h2{
  		font-size: 2.4rem;
		color: #333333;
		margin: 0.8rem 0 1.8rem;
  	}
  	.info{
  		height: 9rem;
  		// line-height: 9rem;
  		padding: 1rem;
  		background: url(../../assets/icon/BG424242_ticket@2x.png) no-repeat;
  		background-size: 100% 100%;
  		display: flex;
  		justify-content: space-between;
  		vertical-align: middle;
  		align-item:center;
  		.info_left{
  			color: #ffffff;
  			font-size: 1.5rem;
  			padding: 1rem 2.5rem 0 2rem;
  			border-right: 1px solid #ffffff;
  			p{
  				margin-bottom: 0.5rem;
  				span{
  					color: #ffc16b;
  				}
  			}
  		}
  		.info_right{
			padding: 1rem 2rem 1rem 2.5rem;
			color: #ff997a;
			font-size: 1.5rem;
			p:first-child{
				width: 2.2rem;
				height: 2.2rem;
				margin: auto;
				background: url(../../assets/icon/icon_lighterff997a@2x.png) no-repeat center;
				background-size: 2.2rem 2.2rem;
			}
			.res{//预约中
				background: url(../../assets/icon/icon_lighterff997a@2x.png) no-repeat center;
			}
			.err{//预约失败
				background: url(../../assets/icon/icon_error2@2x.png) no-repeat center;
			}
			.vit{//预约成功待看房
				background: url(../../assets/icon/icon_right2@2x.png) no-repeat center;
			}
  		}

  	}
  }

  .box{
		width: 100%;
    	font-family: PingFang-SC-Regular;
		background: #F8F8F8;
		font-size: 1.3rem;
		// padding-bottom: 1rem;
		.house-detail{
			background: #ffffff;
			position: relative;
			padding: 1.5rem 2rem 1.5rem 17rem;
			margin-bottom: 0.3rem;
			img{
				position: absolute;
				left: 2rem;
				width: 13rem;
				height: 8.1rem;
				border-radius: 0.5rem;
			}
			h3{
				font-size: 1.6rem;
				font-family: PingFang-SC-Bold;
				font-weight: bold;
				color: #424242;
				span{
					color: #754501;
					font-size: 1.3rem;
					font-weight: bold;
				}
			}
			.describ{
				color:#C3C1C4;
			}
			.price{
				margin-top: 0.5rem;
				span:first-child{
					color:#E10101;
				}
			}
			.dayT{
				color: #754501;
			}
		}
		.tips{
			color: #9a9c9d;
			// height: 3.5rem;
			padding: 1rem 2rem;
		}
	
	}
	.contact{
		font-size: 1.6rem;
			width: 100%;
			height: 5rem;
			line-height: 5rem;
			text-align: center;
			color: #F1B768;
			background: #424242;
			position: fixed;
			bottom: 0;
		}
</style>