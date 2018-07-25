<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">看房日程</span>
          <span class="go-edit" @click="lookHistory"><i class="icon iconfont editor-icon">&#xe62e;</i></span>
        </h1>

		<div class="box" v-for="i in houseList" @click="toDetail(i)">
			<!-- 线上房源 -->
			<div v-if="i.lineType == 0">
				<div class="house-detail" v-if="i.targetHouse != undefined">
					<img :src="!!i.targetHouse.pic?i.targetHouse.pic:'./static/bg_smallphotonormal@2x.png'">
					<div>
						<h3>
							<span>约看小区&nbsp;</span>
							{{i.targetHouse.community_name}}
						</h3>
						<p class="describ">{{i.targetHouse.room}}室{{i.targetHouse.hall}}厅{{i.targetHouse.toilet}}卫/{{i.targetHouse.buildarea}}㎡/朝{{i.targetHouse.forward}}</p>
						<p class="price">
							<span>{{i.targetHouse.price}}万</span>
							<span>&nbsp;&nbsp;{{i.targetHouse.avgprice}}&nbsp;元/平</span>
						</p>
					</div>
				</div>
				<div class="house-status">
					<p :class="'t'+i.state">
						<span>{{ state[i.state] }}</span>
						<span>{{ (i.time)/1000 |moment('MM月DD日 hh:mm') }}</span>
					</p>
				</div>
			</div>

			<!-- 线下房源 -->
			<div v-else>
				<div class="house-detail">
					<img :src="!!i.targetHouse.pic?i.targetHouse.pic:'./static/bg_smallphotonormal@2x.png'">
					<div>
						<h3>线下房源</h3>
						<p class="describ">请提前咨询确定房屋样式符合您的预期</p>
						<p class="price">
							<span>{{!!i.num?i.num:'0'}}</span>
							<span>&nbsp;&nbsp;套</span>
						</p>
					</div>
				</div>
				<div class="house-status">
					<p :class="'t'+i.state">
						<span>{{ state[i.state] }}</span>
						<span>{{ (i.time)/1000|moment('MM/DD hh:mm') }}</span>
					</p>

				</div>
			</div>

		</div>


	</div>
</template>
<script type="text/javascript">
	import api from '../../api/customer/axios'
  	import headTop from '../../components/header/head'
	export default {
		name:'lookHouseIndex',
		data(){
			return{
				houseList:[],
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
			this.getLookHouseInfo();
		},
		methods:{
			getLookHouseInfo(){
				api.lookHouseIndex()
				.then(res=>{
					if(res.data.success){
						this.houseList = res.data.result;
						console.log(res.data);

					}else{
						console.log(res.data.errorMessage);
					}
				})
				.catch(err=>{
					console.log(err);
				})
			},
			lookHistory(){
				this.$router.push({path:'/lookHouseHistory'});
			},
			toDetail(houseData){
				this.$router.push({path:'/lookHouseReservation',query:{data:houseData}});
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
    font-size: 1.6rem;
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
    	z-index: 22;
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
			// .reservation{
			.t1,.t2{ //状态码为1,2都显示预约中
				background: url(../../assets/icon/icon_lighting@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}
			// .defeat{
			.t3{
				background: url(../../assets/icon/icon_bigredcancle@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}
			// .waitting{
			.t4{
				background: url(../../assets/icon/icon_right@2x.png) no-repeat left center;
				background-size: 2.2rem 2.2rem;
			}

		}
	}
</style>
