<template>
	<div>
        <h1 class="nav-header">
          <!--<span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>-->
          <span class="header-title">退出</span>
        </h1>
		<div class="ifCheck">
			<img src="../../assets/icon/icon_questionmark@2x.png" alt="">
			<p style="margin-bottom: 0.7rem;">是否确认退出</p>
			<p>当前 {{loginName}} 的账号？</p>
			<button class="btn-logout" @click.prevent="confirmOut">确认退出</button>
		</div>

	</div>
</template>
<script>
	import api from '../../api/axios'
	import envConfig from '../../config/env.js'

	export default {
		// name:'logout',
		data(){
			return{
        loginName:''
      }
		},
		created(){
		    this.getUserName();
      document.title = '金品生活'
    },
		methods:{
			confirmOut(){
				//从url获取openId和code
				let _data = {
					 openId:this.$route.query.openId,
					 code:this.$route.query.code
//					openId:'test_open_id',
//					code:2334
				};
				//清空本地用户信息
//        this.$store.commit('setUserInfo',{});

				api.logout(_data)
				.then(res=>{
					if(res.data.success){
						this.$toast({
		                    message: "退出成功",
		                    position: 'middle',
		                    duration: 3000
		                  })
						var openURL = res.data.result;

						// 退出成功跳转
						setTimeout(function(){
							window.location.href = openURL;
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
			},
      getUserName(){//获取用户名
			    api.isLogin()
            .then(res=>{
                if(res.data.success){
                  this.loginName = res.data.result
                }
            })
            .catch(res=>{

            })
      }
		},
		components: {

        },
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
    padding: 0 2rem;
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

  .btn-logout{
    margin-top: 11.5rem;
    width: 100%;
    height: 5rem;
    background-color: #ffc16b;
    font-size: 1.6rem;
    color: #754501;
  }
</style>
