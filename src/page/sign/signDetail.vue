<template>
	<div class="container_box" >
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">签约详情</span>
        </h1>

		<div class="signBox">
			<div class="addr">
				<h2>
					<span>房源地址：</span>
					<span>{{ signDetail.address }}</span>
				</h2>
				<p>成交价格：<span class="price">￥{{ signDetail.price|formatPrice }}</span></p>
				<p>建筑面积：<span>{{ signDetail.buildarea }}㎡</span></p>
				<p>签约时间：<span>{{ signDetail.signing_time|moment("YYYY/MM/DD") }}</span></p>
				<div class="flag">
					{{ bargainStatus[signDetail.bargain_status] }}
				</div>
			</div>
			<div class="contact">
				<p>
					<span>业主姓名</span>
					<span>{{ signDetail.owner }}</span>
				</p>
				<p>
					<span>业主联系方式</span>
					<span>{{ signDetail.owner_tel }}</span>
				</p>
			</div>
			<div class="status" v-if="signDetail.now_transfer != undefined">
				<h2>当前签约状态：<span>{{ signDetail.now_transfer.stage_name }}</span></h2>

				<div class="scroll-box" id="scroll-box" :style="'height:'+Heig+'px'">
					<div class="status_content">
						<p v-for="item in transfer">
							<span v-if="item.step_id==signDetail.now_transfer.step_id" class="current" id="current"></span>
							<span v-else-if="item.isComplete==1" class="complete"></span>
							<span v-else class="uncomplete"></span>
							<span>{{ item.stage_name }}</span>
						</p>
					</div>
				</div>
			</div>

		</div>

	</div>
</template>
<script type="text/javascript">
	import api from '../../api/axios'
	import headTop from '../../components/header/head'
	export default {
		name:'signDetail',
		data(){
			return{
				signDetail:{},
				transfer:[],
				// signId:'',
				userType:2, //用户身份固定为2客户
				bargainStatus:{
		          '1':'办理中',
		          '2':'结案',
		          '3':'作废'
		        },
		        Heig:''
			}
		},
		created(){
			this.getSignDetail();
		},
		mounted(){
			let that = this;
			setTimeout(function(){	//先等待DOM元素加载完成
				that.currentStatus();
			},500)
			// this.currentStatus();

		},
		methods:{
			getSignDetail(){
				//获取签约ID
				let signId = this.$route.query.houseId;
				var _data = {
					'signId':signId,
					'userType':this.userType
				}
				api.signDetail(_data)
				.then(res=>{
					if(res.data.success){
						this.signDetail = res.data.result;
						this.transfer = res.data.result.transfer;
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
			currentStatus(){//定位到当前步骤
				// document.getElementById("current").scrollIntoView();
				var currEle = document.getElementById("current");
				var scrollBox = document.getElementById("scroll-box");
				// var currTop = currEle.getBoundingClientRect().top;
				var BoxTop = scrollBox.getBoundingClientRect().top;
				var screenH = document.documentElement.clientHeight;
				
				let HH = screenH - BoxTop;

				this.Heig = HH
			}
		},
		components: {
          headTop
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
		  },
		  phoneNum(data){

		  }
		},
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';
	// @import '../../style/sign';
	
	/* @media screen and (max-width: 320px) {
	    	.scroll-box{
	  			height: 21.5rem;  		
	  		}
	  }
	  @media screen and (max-width: 320px) and (device-height:533px){
	    	.scroll-box{
	  			height: 15.5rem;
	  		}
	  }
	
	  @media screen and (max-width: 414px) and (min-width: 360px) {
	    	.scroll-box{
	  			height: 28.5rem;
	  		}
	  }
	  // 适配iphoneX
	  @media screen and (device-width: 375px) and (device-height:812px)and (-webkit-device-pixel-ratio:3) {
	    	.scroll-box{
	  			height: 42.5rem;
	  		}
	  }
	  // 适配iPad
	  @media screen and (min-width: 768px) {
	    	.scroll-box{
	  			height: 11.5rem;
	  		}
	  } */

	.container_box{
		height:100%;
		overflow-y: hidden;		
	}
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
      left: $contentPadding;
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

  .signBox{
  	background: #F8F8F8;
  	font-family: PingFang-SC-Regular;
  	text-align: left;
  	width: 100%;
  	height: 100%;
  	h2{
  		font-family:PingFang-SC-Bold;
  		font-size: 1.5rem;
  		color: #333333;
  		margin-bottom: 1.5rem;
  		font-weight: bold;
  	}
  	p{
  		color: #888888;
  		margin-bottom: 1rem;
  	}
  	.addr{
		background: #fff;
		padding: 1.5rem;
		margin-bottom: 1rem;
		position: relative;
		h2{
			width: 85%;
			span{
				font-size: 1.5rem;
				display: table-cell;
				font-weight: bold;
			}
			span:first-child{
				width: 8rem;
			}
		}
		p{
			font-size: 1.3rem;
			span{
				font-size: 1.3rem;
				color: #333333;
			}
		}
		p:last-child{
  			margin-bottom: 0;
  		}

  		.price{
  			color: #e10000;
  		}

  		.flag{
  			width: 3rem;
  			height: 7rem;
  			font-size: 1.3rem;
  			color: #F5B967;
  			padding: 0.15rem 0.8rem;
  			position: absolute;
  			top: 0;
  			right: 2.5rem;
  			background: url(../../assets/icon/icon_flag@2x.png) no-repeat;
  			background-size: 100% 100%;
  		}
  	}
  	.contact{
  		width: 100%;
  		background: #fff;
		padding: 1.5rem;
		margin-bottom: 1rem;
		p{
			display: flex;
			justify-content: space-between;
			span{
				font-size: 1.3rem;
			}
			span:last-child{
				color: #333333;
			}
		}
		p:last-child{
  			margin-bottom: 0;
  		}
  	}
  	.status{
  		
  		background: #ffffff;
  		padding: 1.5rem;
  		p{
  			font-size: 1.4rem;
  			margin-top: 2rem;

  		}
  		p:first-child{
  			margin-top: 1.5rem;
  		}
  		p:last-child{
  			margin-bottom: 1.75rem;
  		}
  		h2{
  			span{
  				color: #ffbb02;
  			}
  		}
  		.scroll-box{
  			overflow-y: scroll;
  			padding-left: 0.2rem;
  		}
  		
  	}

	.status_content{
		border-left: 1px dashed #ccc;
		margin-left: 1rem;
		padding-left: 2rem;
		position: relative;
		span{
			font-size: 1.4rem;
		}

		.complete{
			@extend .common;
			background: url(../../assets/icon/circle2@2x.png) no-repeat left center;
		}
		.uncomplete{
			@extend .common;
			background: url(../../assets/icon/circle1@2x.png) no-repeat left center;
		}
		.current{
			display: inline-block;
			width: 2.2rem;
			height: 2.2rem;
			position: absolute;
			left:-1.2rem;
			background: url(../../assets/icon/icon_now@2x.png) no-repeat left center;
			background-size: 2.2rem 2.2rem;
		}

	}

  	.common{
  		display: inline-block;
		width: 2rem;
		height: 2rem;
		background-size: 1rem 1rem;
		position: absolute;
		left:-0.5rem;
  	}
  }


</style>
