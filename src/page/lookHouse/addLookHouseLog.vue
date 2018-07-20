<template>
	<div class="box">
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title" @click="postNode">确定</span>
        </h1>

		<div class="title">
			<h2>看房备注</h2>
			<p>{{this.$route.query.data.blockName}}</p>
			<p>
				<span>{{this.$route.query.data.room}}室{{this.$route.query.data.hall}}厅</span> 
				<span>{{this.$route.query.data.price}}万</span>
			</p>
		</div>
		<div class="lableNode">
			<p>标签备注</p>
			<div class="lable">
				<!-- <p v-for="(item,index) in labelList" @click="chooseLable(index)" :value="item" :class="{'select':flag}">{{ item }}</p> -->
				<p v-for="(item,index) in labelList" @click="chooseLable(index)" :value="item" :key="index">{{ item }}</p>

			</div>
		</div>
		<div class="textNode">
			<p>文字备注</p>
			<textarea placeholder="备注"></textarea>
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
				labelList:[],
				flag:''		
			}
		},
		created(){
			this.getLabel();
			
		},
		mounted(){
			console.log(this.$route.query);
		},
		methods:{
			getLabel(){//获取标签
				api.lookHouseLabel()
				.then(res=>{
					if(res.data.success){
						this.labelList = res.data.result.kfbz;
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
			postNode(){//点击确定，提交备注

				/*let _orderDetailId = this.$route.params.data.orderDetailId;
				let _lable = 
				let lableInfo = {
					orderDetailId:,
			        lable:'',
			        text:'',
				}*/

				api.saveHouseLog(lableInfo).then(res=>{
					if(res.data.success){
						this.$router.push({path:'/lookHouseHistory'})
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
			chooseLable(data){
				// this.flag = !this.flag;
				console.log(data);
			}
		},
		components:{
			headTop
		}
	}
</script>
<style lang="scss" scoped>

.box{
	width: 100%;
	font-family: PingFang-SC-Regular;		
	background: #F8F8F8;

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
    .header-title{
      display: inline-block;
      width:100% ;
      // font-weight: bold;
      text-align: right;
      color: #FFC475;
    }
  }

  .title{
  	font-family: PingFang-SC-Bold;
  	text-align: left;
  	background: #ffffff;
  	padding: 1.5rem 2rem;
  	margin-bottom: 1rem;
  	h2{
		font-size: 2.4rem;
		color: #333333;
		margin: 0.8rem 0 1.8rem;
		font-weight: bold;
  	}
  	p{
		font-size: 1.6rem;
		color: #424242;
		margin-top: 0.7rem;
		font-weight: bold;
  		span{
			color: #754501;
			font-size: 1.5rem;
			font-weight: bold;
  		}
  	}
  }
  .lableNode{
  	background: #ffffff;
  	padding: 1.5rem 0.5rem 1rem 2rem;
  	margin-bottom: 1rem;
  	
  	>p{
  		@extend .labelTitle;
  	}
  	.lable{
  		display: flex;
  		justify-content: space-around;
  		flex-wrap:wrap;
  		p{
  			font-size: 1.3rem;
  			// width: 9.25rem;
  			width: 28%;
  			height: 2.75rem;
  			line-height:2.75rem;
  			text-align: center;
  			background: #F8F8F8;
  			margin-right: 1.5rem;
    		margin-bottom: 1rem;
    		border-radius: 0.5rem;
  		}
  	}
  }
  .textNode{
  	background: #ffffff;
  	padding: 1.5rem 2rem;
  	margin-bottom: 1rem;

  	p{
		@extend .labelTitle;
  	}
  	textarea{
  		width: 100%;
  		height: 23.5rem;
  		background: #F8F8F8;
  		font-size: 1.5rem;
  		color: #9a9c9d;
  		border-radius: 0.5rem;
  		padding: 2rem;
  	}
  }
}
	

.labelTitle{
	font-family: PingFang-SC-Bold;
	text-align: left;
	font-size: 1.6rem;
	margin-bottom: 1.5rem;
	font-weight: bold;
}

.select{
	background-color: #fbf6ee;
    color: #ffc16b;
}

</style>