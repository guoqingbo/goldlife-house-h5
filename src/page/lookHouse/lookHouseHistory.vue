<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">看房记录</span>
        </h1>
		
		<div class="box" v-for="i in houseList">
			
			<div>
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
				<div class="house-status" v-if="i.lookHouseLog != undefined">
					<p >
						<span><b>{{ i.brokerName }}</b>&nbsp;经纪人带看</span>
						<span>{{ (i.time)/1000 |moment('MM月DD日 HH:mm') }}</span>
					</p>
					
					<!-- <mt-button v-if="i.lookHouseLog.lable==''&&i.lookHouseLog.text==''" size="large" @click="editNode(i)">添加看房笔记</mt-button> -->
					<span class="add" v-if="i.lookHouseLog.lable==''&&i.lookHouseLog.text==''"  @click="editNode(i)">添加看房笔记</span>
				
					<div v-else class="label" @click="editNode(i)">
						
						<p v-show="!!i.lookHouseLog.lable">{{i.lookHouseLog.lable}}。</p>
						<p v-show="!!i.lookHouseLog.text">{{i.lookHouseLog.text}}</p>
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
		name:'lookHouseHistory',
		data(){
			return{
				houseList:[],			
			}
		},
		created(){
			this.getLookHouseInfo();
		},
		methods:{
			getLookHouseInfo(){
				api.lookHouseHistory()
				.then(res=>{
					if(res.data.success){
						this.houseList = res.data.result;
						console.log(res.data.result);
					}else{
						console.log(res.data);
					}
				})
				.catch(err=>{
					console.log(err);
				})
			},
			editNode(data){
				let _data = {
					orderDetailId:data.lookHouseLog.orderDetailId,
					room:data.targetHouse.room,
					hall:data.targetHouse.hall,
					toilet:data.targetHouse.toilet,
					price:data.targetHouse.price,
					blockName:data.targetHouse.block_name,
					text:data.lookHouseLog.text,
					lable:data.lookHouseLog.lable,
				}
				this.$router.push({path:'/addLookHouseLog',query:{data:_data}})
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
    .go-back-icon,{
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
			padding: 1.5rem 2rem 1.5rem 14.5rem;
			margin-bottom: 0.3rem;
			img{
				position: absolute;
				left: 2rem;
				width: 10.5rem;
				height: 8rem;
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
			// height: 3.5rem;
			// line-height: 3.5rem;
			padding-bottom: 1.5rem;
			padding-top: 1rem;

			p{
				display: flex;
				justify-content: space-between;
				// padding-left:3.7rem ;
				span:first-child{
					font-size: 1.5rem;
					font-family: PingFang-SC-Bold;
					font-weight: bold;
					color: #424242;
				}
				b{
					color: #754501;
					font-weight: bold;
				}
			}
			>p:first-child{
				margin-bottom: 1.5rem;
			}
			.add{
				display: inline-block;
				width: 100%;
				background: #F8F8F8;
				font-size: 1.5rem;
				color: #9a9c9d;
				text-align: center;
				padding: 1rem 0;
				border-radius: 0.5rem;
			}

			.label{
				font-size: 1.5rem;
				color: #9a9c9d;
				background: #F8F8F8;
				// text-align: center;
				padding: 1rem;
				border-radius: 0.5rem;
				p{
					margin-bottom: 1rem;
					padding-left: 1.5rem;
					background: url(../../assets/icon/circle2@2x.png) no-repeat left center;
					background-size: 0.5rem 0.5rem;
				}
			}

		}
	}
</style>