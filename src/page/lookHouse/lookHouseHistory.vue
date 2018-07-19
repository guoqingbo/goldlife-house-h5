<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">看房记录</span>
        </h1>
		
		<div class="box">
		<!-- <div class="box" v-for="i in houseList"> -->
			
			<!-- <div>
				<div class="house-detail" v-if="i.targetHouse != undefined">
					<img :src="!!i.targetHouse.pic?i.targetHouse.pic:'./static/searcherror@2x.png'">
					<div>
						<h3>
							<span>约看小区&nbsp;</span>
							{{i.targetHouse.community_name}}
						</h3>
						<p class="describ">{{i.targetHouse.room}}室{{i.targetHouse.hall}}厅/{{i.targetHouse.buildarea}}㎡/朝{{i.targetHouse.forward}}</p>
						<p class="price">
							<span>{{i.targetHouse.price}}万</span>
							<span>&nbsp;&nbsp;{{i.targetHouse.avgprice}}&nbsp;元/平</span>
						</p>
					</div>
				</div>
				<div class="house-status">
					<p >
						<span>{{ i.brokerName }}经纪人带看</span>
						<span>{{ i.time|moment('MM月DD日 hh:mm') }}</span>
					</p>
					没有看房笔记时
					<p class="addNode">添加看房笔记</p>
					有看房笔记
					<div class="label">
						<p>性价比高...前面添加小圆点</p>
					</div>
			
				</div>
			</div> -->
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
				<p >
					<span><b>罗罗</b>经纪人带看</span>
					<span>7月7日</span>
				</p>
				
				<p class="addNode">添加看房笔记</p>
				
				<!-- <div class="label">
					<p>性价比高...前面添加小圆点</p>
				</div> -->
		
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
				houseList:[],			
			}
		},
		created(){
			// this.getLookHouseInfo();
		},
		methods:{
			getLookHouseInfo(){
				api.lookHouseHistory()
				.then(res=>{
					if(res.data.success){
						console.log(res.data);
						this.houseList = res.data.result;

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
			}
			p:first-child{
				margin-bottom: 1.5rem;
			}

			.addNode{
				font-size: 1.5rem;
				color: #9a9c9d;
				background: #F8F8F8;
				text-align: center;
				padding: 1rem 0;
			}

		}
	}
</style>