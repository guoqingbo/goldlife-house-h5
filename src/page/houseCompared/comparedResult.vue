<template>
	<div class="box">
      <div class="nav-header">
        <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
        <span class="header-title">房源对比</span>
      </div>
        <div class="houseInfo">
        	<h2>房源名称</h2>
        	<div>
        		<h3>核心信息</h3>
        		<ul>
        			<li>建筑面积</li>
        			<li>单价</li>
        			<li>户型</li>
        			<li>朝向</li>
        			<li>装修</li>
        			<li>楼层</li>
        		</ul>
        		<h3>基础信息</h3>
        		<ul>
        			<li>板块</li>
        			<li>小区</li>
        			<li>类型</li>
        		</ul>
        	</div>
        </div>
        <div class="houseDetail">
        	<!-- <div class="swiper-container">
        				  <div class="swiper-wrapper">
        				    <div class="swiper-slide">slider1</div>
        				    <div class="swiper-slide">slider2</div>
        				    <div class="swiper-slide">slider3</div>
        				  </div>
        				</div> -->

        	<div class="compared" v-for="item in houseList">
        		<h4>{{ !!item.title?item.title:'暂无信息'}}</h4>
	              <p>{{ !!item.price?item.price:'无' }}万</p>
	              <img :src="!!item.pic?item.pic:'./static/searcherror@2x.png'" alt="">
	              <ul class="first_ul">
	              	  <li>{{ !!item.buildarea?item.buildarea:'无' }}</li>
		              <li>{{ !!item.avgprice?item.avgprice:'无' }}</li>
		              <li>{{ item.room }}室{{ item.hall }}厅{{ item.toilet }}卫</li>
		              <li>{{ !!item.forward?item.forward:'无' }}</li>
		              <li>{{ !!item.fitment?item.fitment:'无' }}</li>
		              <li>{{ item.floor_name }}/共{{ item.totalfloor }}层</li>
	              </ul>
	              <ul>
	              	  <li>{{ !!item.district_name?item.district_name:'无' }}</li>
		              <li>{{ !!item.block_name?item.block_name: '无'}}</li>
		              <li>{{ !!item.sell_type?item.sell_type:'无' }}</li>
	              </ul>
        	</div>

        	<!--
        	<div class="compared">
        		<h4>武林府</h4>
        		              <p>650万</p>
        		              <img src="../../assets/icon/icon_topbar_hclist@3x.png" height="140" width="120" alt="">
        		              <ul class="first_ul">
        		              	  <li>67.99</li>
        			              <li>38888</li>
        			              <li>两室一厅</li>
        			              <li>南</li>
        			              <li>精装</li>
        			              <li>高楼层/共19层</li>
        		              </ul>
        		              <ul>
        		              	  <li>拱墅</li>
        			              <li>朝晖五区</li>
        			              <li>住宅</li>
        		              </ul>
        	</div> -->
        </div>
	</div>
</template>
<script>
	import api from '../../api/axios'
	import headTop from '../../components/header/head'
	import Swiper from 'swiper'
	export default {
    name:'comparedResult',
		data(){
			return{
				houseList:[],
				cityId:'',
				houseId:''
			}
		},
		created(){
			this.getCompareData();
		},
		mounted(){
			/*var mySwiper = new Swiper('.swiper-container', {loop: false,});*/
		},
		methods:{

			getCompareData(){
				// data为从上一页获取到的数据,最少2条，最多4条
				var _data = [{'cityId':'hz','houseId':'36979'},{'cityId':'hz','houseId':'36980'}];

				api.houseCompared(_data)
				.then(res=>{
					if(res.data.success){
						this.houseList = res.data.result;
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

			}
		},
		components: {
          headTop
        },
	}
</script>
<style lang="scss" scoped>
	@import '../../style/mixin';

    .box{
    	position: relative;
    }
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
  .houseInfo{
  	width: 10rem;
  	// height:100%;
  	background:#424242;
  	padding-left:2rem;
  	text-align: left;
  	padding-bottom:6rem;
	// position: fixed;
	position: absolute;
	top:8.8rem;
	left:0;
	overflow: hidden;

  	h2{
  		width: 5rem;
  		font-size:2.1rem;
  		color:#ffffff;
  		margin-top: 1.5rem;
  		margin-bottom: 7rem;
  	}
  	h3{
  		font-size:1.6rem;
  		color:#ffffff;
  		margin-bottom: 2.5rem;
  	}
	ul>li{
		font-size:1.3rem;
  		color:#ffc16b;
  		margin-bottom: 2rem;
	}
  }

  .houseDetail{
  	display:flex;
  	flex-direction: row;
  	align-items: center;
  	padding-left:10rem;
  	background:#F8F8F8;
  	overflow: scroll;

  	.compared{
  		display:table-cell;
  		width: 14rem;
  		margin-left:1rem;
  		background:#fff;
  		padding:1.5rem 1rem 0;
  		font-family:PingFang-SC-Regular;
		text-align: left;
  		h4{
			font-size:1.5rem;
			color:#424242;
			overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
  		}
  		p{
			font-size:1.21rem;
			color:#e10000;
  		}
  		img{
  			display: inline-block;
  			width: 12rem;
  			height:9rem;
  			margin-top:1.5rem;
  			margin-bottom:3rem;
  		}
  		ul > li{
			font-size:1.3rem;
	  		color:#424242;
	  		margin-bottom: 2rem;
	  		padding-left:1.2rem;
	  		background:url(../../assets/icon/circle2@2x.png) no-repeat left center;
	  		background-size:0.5rem 0.5rem;
  		}
  		/* ul:first-child{
			margin-bottom:9rem;
		} */
  	}
  	.first_ul{
  		margin-bottom:6.1rem;
  	}
  }
</style>
