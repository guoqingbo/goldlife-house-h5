<template>
	<div>
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
				<p>成交价格：<span class="price">￥{{ signDetail.price |formatPrice}}</span></p>
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
				<h2>当前签约状态：<span>{{ !!signDetail.now_transfer.stage_name?signDetail.now_transfer.stage_name:'' }}</span></h2>

				<div class="status_content">					
					<p v-for="item in transfer">
						<span v-if="item.step_id == nowTransferId" class="current"></span>
						<span v-else-if="item.isComplete==1" class="complete"></span>
						<span v-else class="unComplete"></span>
						<span>{{ !!item.stage_name?item.stage_name:'' }}</span>
					</p>
				</div>
				
			</div>

			<el-button v-show="signDetail.isConfirmCollectMoney" class="btn-receiver" @click="confirmReceive" style="font-size:1.6rem">确认收款</el-button>
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
				signId:'',
				userType:2, //用户身份固定为2客户
				bargainStatus:{
		          '1':'处理中',
		          '2':'结案',
		          '3':'作废'
		        },
		        nowTransferId:''
			}
		},
		created(){
			this.getSignDetail();
		},
		mounted(){
			
		},
		methods:{
			getSignDetail(){
				//获取签约ID
				// this.signId = window.location.href.split('id=')[1];
				this.signId = 2733
				var _data = {
					'signId':this.signId,
					'userType':this.userType
				} 
				api.signDetail(_data)
				.then(res=>{
					if(res.data.success){
						this.signDetail = res.data.result;
						this.transfer = res.data.result.transfer;
						this.nowTransferId = res.data.result.now_transfer.step_id;
						
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
			confirmReceive(){

			}
		},
		filters: {
		  formatPrice: function (value) {
 			if(!value) return '0.00';
			   var intPart = Number(value).toFixed(0); //获取整数部分
			   var intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, '$1,'); //将整数部分逢三一断
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
	@import '../../style/mixin';
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
  		p:last-child{
  			margin-bottom: 1.75rem;
  		}
  		h2{
  			span{
  				color: #ffbb02;
  			}
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
			background: url(../../assets/icon/circle2@2x.png) no-repeat left center;
			@extend.iconCommon;
		}
		.unComplete{				  			
			background: url(../../assets/icon/circle1@2x.png) no-repeat left center;
			@extend.iconCommon;
		}
		.current{//当前签约icon
			display: inline-block;
			width: 2.2rem;
			height: 2.2rem;
			background: url(../../assets/icon/icon_now@2x.png) no-repeat left center;
			background-size: 2.2rem 2.2rem;
			position: absolute;
			left:-1.2rem;
		}
	}

  	.btn-receiver{
	    width: 100%;
	    height: 5rem;
	    background-color: #FFBB02;
	    // font-size: 16px;	    
	    color: #ffffff;
	  }
  }

  .iconCommon{
  	display: inline-block;
  	width: 2rem;
	height: 2rem;		
	position: absolute;
	left:-0.5rem;
	background-size: 1rem 1rem;
  }


</style>