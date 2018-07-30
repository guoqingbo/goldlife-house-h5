<template>
	<div class="box">
		<!-- <head-top /> -->
    <!-- <div class="compared-box"> -->
      <h1 class="nav-header">
        <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
        <span class="header-title">房源对比</span>
      </h1>

      <div class="house-common houseInfo">
        <div class="house-decrible">
          <h2>房源名称</h2>
          <h3  class="h3">核心信息</h3>
        </div>
        <ul class="house-ul">
          <li>建筑面积</li>
          <li>单价</li>
          <li>户型</li>
          <li>朝向</li>
          <li>装修</li>
          <li>楼层</li>
          <li class="h3" >基础信息</li>
        </ul>
        <ul>
          <li>板块</li>
          <li>小区</li>
          <li>类型</li>
        </ul>
      </div>
      <div class="house-common houseDetail">
        <div class="compared" v-for="item in houseList">
          <div class="house-decrible">
            <h4>{{ !!item.title?item.title:'暂无信息'}}</h4>
            <p>{{ !!item.price?item.price:'无' }}万</p>
            <img :src="!!item.pic?item.pic:'./static/bg_smallphotonormal@2x.png'" alt="">
          </div>
          <ul class="house-ul first_ul">
            <li>{{ !!item.buildarea?item.buildarea:'无' }}㎡</li>
            <li>{{ !!item.avgprice?(item.avgprice+'元/平'):'无' }}</li>
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

      </div>
    <!-- </div> -->
  </div>
</template>
<script>
	import api from '../../api/axios'
	// import headTop from '../../components/header/head'

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
		mounted(){},
		methods:{
			getCompareData(){
				// _data为从上一页获取到的数据,最少2条，最多4条
         let _data = this.$route.params.data;
//        let _data = [{"cityId":"hz","houseId":"36979"},{"cityId":"hz","houseId":"36980"}];
        // console.log(_data)
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
	}
</script>
<style lang="scss" scoped>
	// @import '../../style/mixin';

  .box{
    position: relative;
    // width: 100%;
    // height: 100%;
    padding-top: 4.4rem;

  }
  .nav-header{
      // position: relative;
      position: fixed;
    z-index: 1;
      top: 0;
      width: 100%;
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

    // .box{
    // 	position: relative;
    // }
  .house-common{
    .house-decrible{
      height: 16rem;
    }
    .house-ul{
      height: 24rem;
    }
  }
  .houseInfo{
  	width: 10rem;
  	// height:100%;
  	background:#424242;
  	padding-left:2rem;
  	text-align: left;
  	padding-bottom:6rem;
	position: absolute;
	// top:8.8rem;
	left:0;
	overflow: hidden;

  	h2{
  		width: 5rem;
  		font-size:2.1rem;
  		color:#ffffff;
  		margin-top: 1.5rem;
  		margin-bottom: 7rem;
  	}
  	.h3{
  		font-size:1.6rem;
  		color:#ffffff;
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
        /*margin-bottom:3rem;*/
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
  }
</style>
