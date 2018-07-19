<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">看房日程</span>
          <span class="go-edit"><i class="icon iconfont editor-icon">&#xe62e;</i></span>
        </h1>
		
		<div class="box">
			<div class="house-detail">
				<img src="../../assets/icon/searcherror@2x.png">
				<div>
					<h3>
						<span>约看小区&nbsp;</span>广厦天都城天星苑室内室内
					</h3>
					<p class="describ">3室1厅/120/朝北</p>
					<p class="price">
						<span>240万</span>
						<span>&nbsp;&nbsp;43,345&nbsp;元/平</span>
					</p>
				</div>
			</div>
			<div class="house-status">
				<p class="reservation">
					<span>预约中</span>
					<span>12月08日15:00</span>
				</p>

			</div>
		</div>

		<div class="box">
			<div class="house-detail">
				<img src="../../assets/icon/searcherror@2x.png">
				<div>
					<h3>
						<span>约看小区&nbsp;</span>广厦天都城天星苑室内室内
					</h3>
					<p class="describ">3室1厅/120/朝北</p>
					<p class="price">
						<span>240万</span>
						<span>&nbsp;&nbsp;43,345&nbsp;元/平</span>
					</p>
				</div>
			</div>
			<div class="house-status">
				<p class="defeat">
					<span>预约失败</span>
					<span>12月08日15:00</span>
				</p>

			</div>
		</div>

		<div class="box">
			<div class="house-detail">
				<img src="../../assets/icon/searcherror@2x.png">
				<div>
					<h3>线下房源</h3>
					<p class="describ">请提前咨询确定房屋样式符合您的预期</p>
					<p class="price">
						<span>3</span>
						<span>&nbsp;&nbsp;套</span>
					</p>
				</div>
			</div>
			<div class="house-status">
				<p class="waitting">
					<span>待看房</span>
					<span>12月08日15:00</span>
				</p>

			</div>
		</div>

	</div>
</template>
<script type="text/javascript">
	import api from '../../api/axios'
  	import headTop from '../../components/header/head'
	export default {
		name:'lookHouseIndex',
		data(){
			return{
				houseList:[]
			}
		},
		created(){
			this.getLookHouseInfo();
		},
		methods:{
			getLookHouseInfo(){
				let _data = {
					// openId:this.$route.query.openId,
					// code:this.$route.query.code
					openId:'test_open_id',
					code:2334
				}
				api.lookHouseIndex(_data)
				.then(res=>{
					if(res.data.success){
						console.log(res.data);

					}else{
						console.log(res.data);
					}
				})
				.catch(err=>{
					console.log(err);
				})
			}
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
    .go-back{
      position: absolute;
      left: 1.5rem;
    }
    .go-edit{
    	position: absolute;
    	right: 1.5rem;
    	top: 0;
    }
    .go-back-icon,.editor-icon{
      font-size: 2rem;
    }
    .header-title{
      display: inline-block;
      width:100% ;
      font-weight: bold;
      text-align: center;
    }
  }

	.box{
		width: 100%;
    	font-family: PingFang-SC-Regular;		
		background: #F8F8F8;
		font-size: 1.3rem;
		padding-bottom: 1rem;
		.house-detail{
			background: #ffffff;
			position: relative;
			padding: 1.5rem 2rem 1.5rem 17rem;
			margin-bottom: 0.3rem;
			img{
				position: absolute;
				left: 2rem;
				width: 13rem;
				height: 9.5rem;
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
				margin-top: 2.5rem;
				span:first-child{
					color:#E10101; 
				}
			}
		}
		.house-status{
			background: #ffffff;
			margin-top: 0.5rem;
			padding: 0 2rem;
			height: 3.5rem;
			line-height: 3.5rem;
			p{
				display: flex;
				justify-content: space-between;
				padding-left:3.7rem ;
				span:first-child{
					font-size: 1.5rem;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: #424242;
				}
			}
			.reservation{
				background: url(../../assets/icon/icon_lighting@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}
			.defeat{
				background: url(../../assets/icon/icon_bigredcancle@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}
			.waitting{
				background: url(../../assets/icon/icon_right@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}

		}
	}
</style>