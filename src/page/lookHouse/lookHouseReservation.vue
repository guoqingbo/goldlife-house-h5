<template>
	<div>
		<div class="res-box">
			<head-top />
			<h1 class="nav-header">
				<span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
				<!-- <span class="header-title" @click="postNode">确定</span> -->
			</h1>

			<div class="reservaInfo" v-if="reservationInfo.targetHouse != undefined">
				<!-- <div class="reservaInfo"> -->
					<h2>看房预约</h2>
					<div class="info">
						<div class="info_left">
							<p>{{ (reservationInfo.time)*1000 |moment('MM月DD日 hh:mm') }}</p>
							<p>在 <span>{{reservationInfo.targetHouse.block_name}}</span> 约看</p>
						</div>
						<div class="info_right">
							<p class="res" v-if="reservationInfo.state==1 || reservationInfo.state==2"></p>
							<p class="err" v-if="reservationInfo.state==3"></p>
							<p class="vit" v-else></p>
							<p>{{state[reservationInfo.state]}}</p>
						</div>
					</div>
				</div>

				<div class="box" v-if="reservationInfo.targetHouse != undefined">
					<div class="house-detail">
						<img :src="!!reservationInfo.targetHouse.pic?reservationInfo.targetHouse.pic:'./static/bg_smallphotonormal@2x.png'">
						<div>
							<h3>{{reservationInfo.targetHouse.block_name}} {{reservationInfo.targetHouse.room}}室{{reservationInfo.targetHouse.hall}}厅</h3>
							<p class="describ">{{reservationInfo.targetHouse.describe}}</p>
							<p class="price">
								<span>{{reservationInfo.targetHouse.price}}万</span>
								<span>&nbsp;&nbsp;{{reservationInfo.targetHouse.avgprice}}&nbsp;元/平</span>
							</p>
							<!-- <p class="dayT">{{reservationInfo.targetHouse.create_time*1000 |moment('MM月DD日 hh:mm')}}&nbsp;发布</p> -->
							<p class="dayT">{{reservationInfo.targetHouse.create_time |publishTime}}&nbsp;发布</p>
						</div>
					</div>
					<p class="tips" v-if="reservationInfo.state==1 || reservationInfo.state==2">带看经纪人将与您核实确认约看时间地点，确认预约。</p>
					<p class="tips" v-else-if="reservationInfo.state==3">经纪人与您核实预约情况反映，本次预约失败。感谢您的关注，请继续寻找合适房源</p>
					<p class="tips" v-else>您已预约成功，如需修改预约时间请致电经纪人。</p>
				</div>

				<p class="contact" @click="phoneNum">一键电联经纪人</p>
			</div>
		</div>
	</template>
<script type="text/javascript">
	import api from '../../api/customer/axios'
  	import headTop from '../../components/header/head'
  	import { MessageBox } from 'mint-ui';
  	export default {
		name:'lookHouseReservation',
		data(){
			return{
				reservationInfo:'',
				state:{
					'1':'预约中',
					'2':'预约中',
					'3':'预约失败',
					'4':'待看房',
					'5':'看房结束',
				}
			}
		},
		created(){
			this.reservationInfo = this.$route.query.data
			console.log(this.reservationInfo);
		},
		mounted(){

		},
		methods:{

			phoneNum(){
		        MessageBox({
				  title: '呼叫',
				  message: this.reservationInfo.phone,
				  showCancelButton: true
				}).then(action => {
					if(action == "confirm"){
						window.location.href = 'tel://'+this.reservationInfo.phone
					}
		        });
			}
		},
		filters:{
			publishTime(value){
        if (value) {
          if(value.toString().length < 11){
            value = value*1000
          }
          let nowTime =  new Date().getTime();//当前时间
          let leave1 = nowTime % (24 * 3600*1000)   //计算天数后剩余的毫秒数
          let diffTime = nowTime -leave1- value;
          let diffDay = Math.ceil(diffTime/(24 * 3600 * 1000))
          if(diffTime <= 0){//当天发布时
            let date = new Date(value)
            let fullYear = date.getFullYear(); // 获取完整的年份(4位,1970)
            let month = date.getMonth()+1<10?'0'+(date.getMonth()+1):date.getMonth()+1;// 获取月份(0-11,0代表1月,用的时候记得加上1)
            let day = date.getDate()<10?'0'+date.getDate():date.getDate(); // 获取日(1-31)
//            date.getTime(); // 获取时间(从1970.1.1开始的毫秒数)
//            date.getHours(); // 获取小时数(0-23)
//            date.getMinutes(); // 获取分钟数(0-59)
//            date.getSeconds(); // 获取秒数(0-59)
            return fullYear+'年'+month+'月'+day+'日'+ '发布';
          }else if (diffDay>15){
            return '15天以上';
          }else{
            return diffDay+"天前发布";
          }
        }
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
				// background: url(../../assets/icon/icon_lighterff997a@2x.png) no-repeat center;
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
