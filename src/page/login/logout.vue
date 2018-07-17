<template>
	<div>
		<head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">退出</span>
        </h1>
		<div class="ifCheck">
			<img src="../../assets/icon/icon_questionmark@2x.png" alt="">
			<p style="margin-bottom: 0.7rem;">是否确认退出</p>
			<p>当前 135775858 的账号？</p>
			<el-button class="btn-checkOut" @click="confirmOut">确认退出</el-button>
		</div>

	</div>
</template>
<script>
	import api from '../../api/axios'
	import headTop from '../../components/header/head'
	import envConfig from '../../config/env.js'

	export default {
		// name:'checkOut',
		data(){
			return{

			}
		},
		methods:{
			confirmOut(){
				api.checkOut()
				.then(res=>{
					if(res.data.success){
						// 退出成功跳转到那个界面/user/weixin/menu/redirectType=account
						this.$toast({
		                    message: "退出成功",
		                    position: 'middle',
		                    duration: 3000
		                  })

						setTimeout(function(){
							window.location.href = envConfig.baseUrl + "/user/weixin/menu/redirectType=account";
						},1000)

					}else{
						this.$toast({
	                    message: res.data.errorMessage,
	                    // position: 'bottom',
	                    position: 'middle',
	                    duration: 3000
	                  })

					}

				})
				.catch(err=>{
					console.log(err);
				})
			}
		}
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

  .ifCheck{
  	text-align: center;
  	img{
  		width: 11.5rem;
  		height: 11.5rem;
  		margin-top: 5rem;
  		margin-bottom: 1.5rem;
  	}
  	p{
  		font-size:1.6rem;
  		color:#9c9a9d;
  		font-family:PingFang-SC-Regular;
  	}
  }

  .btn-checkOut{
    margin-top: 11.5rem;
    width: 32.3rem;
    height: 5rem;
    background-color: #ffc16b;
    font-size: 16px;
    color: #754501;
  }
</style>
