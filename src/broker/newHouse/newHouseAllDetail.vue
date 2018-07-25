<template>
	<div class="box">
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">{{houseAllInfo.buildName}}</span>
        </h1>

		<div class="container">
			<h3 class="mini-title">位置信息</h3>
			<p class="detail">区域位置：<span>{{houseAllInfo.area}}</span></p>
			<p class="detail">楼盘地址：<span>{{houseAllInfo.address}}</span></p>
		</div>

		<div class="container">
			<h3 class="mini-title">基本信息</h3>
			<p class="detail">建筑类型：<span>{{!!houseAllInfo.buildType?houseAllInfo.buildType:'暂无信息'}}</span></p>
			<p class="detail">产权年限：<span>{{!!houseAllInfo.propertyYear?houseAllInfo.propertyYear:'暂无信息'}}</span></p>
			<p class="detail">占地面积：<span>{{!!houseAllInfo.floorSpace?houseAllInfo.floorSpace+'㎡':'暂无信息'}}</span></p>
			<p class="detail">建筑面积：<span>{{!!houseAllInfo.buildSpace?houseAllInfo.buildSpace+'㎡':'暂无信息'}}</span></p>
			<p class="detail">容积率：<span>{{!!houseAllInfo.plotRatio?houseAllInfo.plotRatio:'暂无信息'}}</span></p>
			<p class="detail">绿化率：<span>{{!!houseAllInfo.greenRate?houseAllInfo.greenRate:'暂无信息'}}</span></p>
			<p class="detail">规划户数：<span>{{!!houseAllInfo.ownerNum?houseAllInfo.ownerNum:'暂无信息'}}</span></p>
			<p class="detail">规划车位：<span>{{!!houseAllInfo.carNum?houseAllInfo.carNum:'暂无信息'}}</span></p>
		</div>

		<div class="container">
			<h3 class="mini-title">交易信息</h3>
			<p class="detail">开发商：<span>{{houseAllInfo.company}}</span></p>
			<p class="detail">楼盘状态：<span>{{houseAllInfo.status}}</span></p>
			<p class="detail">参考均价：<span>{{!!houseAllInfo.avgPrice?houseAllInfo.avgPrice+' 元/平':'暂无信息'}}</span></p>
			<p class="detail">最新开盘：<span>{{houseAllInfo.openTime}}</span></p>
			<p class="detail">交房时间：<span>{{!!houseAllInfo.finishTime?houseAllInfo.finishTime:'暂无信息'}}</span></p>
			<p class="detail">物业类型：<span>{{!!houseAllInfo.manageType?houseAllInfo.manageType:'暂无信息'}}</span></p>
			<p class="detail">物业公司：<span>{{!!houseAllInfo.manageCompany?houseAllInfo.manageCompany:'暂无信息'}}</span></p>
			<p class="detail">供水类型：<span>{{!!houseAllInfo.waterType?houseAllInfo.waterType:'暂无信息'}}</span></p>
			<p class="detail">供电类型：<span>{{!!houseAllInfo.electricType?houseAllInfo.electricType:'暂无信息'}}</span></p>
			<p class="detail">许可证：<span>{{houseAllInfo.licence}}</span></p>
		</div>

		<p class="contact" @click="phoneNum">电话咨询</p>

	</div>
</template>
<script type="text/javascript">
	import api from '../../api/broker/axios'
  	import headTop from '../../components/header/head'
  	import { MessageBox } from 'mint-ui';
	export default {
		name:'newHouseAllDetail',
		data(){
			return{
				houseAllInfo:this.$route.query.data
			}
		},
		methods:{
			phoneNum(){

				MessageBox({
				  title: '呼叫',
				  message: this.houseAllInfo.contactPhone,
				  showCancelButton: true
				}).then(action => {
					if(action == "confirm"){
						window.location.href = 'tel://'+this.reservationInfo.phone
					}
		        });

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
			z-index: 66;
		}

	}
</style>
