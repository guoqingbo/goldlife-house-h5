<template>
    <div class="box">
        <head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">登录</span>
        </h1>
        <form class="loginForm">
          <div class="input-telpnone">
            <input   placeholder="请输入手机号" v-model="loginName" />
            <span class="right" @click="getCode" v-show="!computedTime">获取验证码</span>
            <span class="right"  v-show="computedTime">已发送({{computedTime}}s)</span>
          </div>
          <div class="input-code">
            <input  placeholder="请输入验证码" v-model="mobileCodeInput"/>
          </div>
          <el-button class="btn-login" @click="userLogin">立即登录</el-button>
        </form>
    </div>
</template>

<script>
    import api from '../../api/axios' //后台数据接口
    import headTop from '../../components/header/head'
//    import $alert from '../../components/common/alert/alert.js'
//    import { Toast } from 'mint-ui';
//    import { MessageBox } from 'mint-ui';
    export default {
        data(){
            return {
              computedTime: 0, //倒数记时
              loginName:'',//用户输入手机号
              mobileCodeInput:'',//输入的验证码
//              mobileCodeGet:'',//获取的验证码
//              alertText:'',//提示内容
//              token: ''
//              redirect:"",//登录成功后要跳转的页面
            }
        },
        created(){
//          console.log(this.$route.params);
        },
        components: {
          headTop,
          alert,
        },
        computed: {

        },
        methods: {
//          ...mapMutations([
//            'setUserInfo', // 将 `this.setUserInfo()` 映射为 `this.$store.commit('setUserInfo')`
//          ]),
          getCode(){
              if (!this.loginName){
//                this.alertText = '请输入手机号';
//                $alert.open('请输入手机号');
                this.$toast({
                  message: '请输入手机号',
                  position: 'bottom',
                  duration: 3000
                });
                return

              }else if (!/^1\d{10}$/gi.test(this.loginName)) {
                this.$toast({
                  message: '手机号号码格式错误',
                  position: 'bottom',
                  duration: 3000
                });
                return
              }else{
                this.computedTime = 30;
                this.timer = setInterval(() => {
                  this.computedTime --;
                  if (this.computedTime == 0) {
                    clearInterval(this.timer)
                  }
                }, 1000)
                //发送短信验证码
                api.getCode(this.loginName)
                  .then( res =>{
                      if (res.data.success == false){
                        this.$toast({
                          message: res.data.errorMessage,
                          position: 'bottom',
                          duration: 3000
                        })
                      }
                      console.log(res)
                  })
                  .catch(function (res) {
                    this.$toast({
                      message: res.error_msg,
                      position: 'bottom',
                      duration: 3000
                    })
                  })
              }
          },
          userLogin(){
            if (!this.mobileCodeInput){
//              MessageBox.alert("请输入验证码", "回掉地址");
              this.$toast({
                message: "请输入验证码",
                position: 'bottom',
                duration: 3000
              })
              return
            }
            let loginInfo = {
              loginName:this.loginName,
              password:this.mobileCodeInput,
              type:2, // 1:密码登录 2：验证码登录
              redirectType:this.$route.query ? this.$route.query.redirectType:"",
              openId:this.$route.query ? this.$route.query.openId:"",
              code:this.$route.query ? this.$route.query.code:"",
            }
            console.log(loginInfo)
            api.userLogin(loginInfo)
              .then(res =>{
                  console.log(res.data)
                if (res.data.success){
                  //保存用户信息
                  this.$store.commit('setUserInfo',{loginName:this.loginName,});
                  //获取登录后的跳转地址
                  let redirectUrl = res.data.result;
                  //弹框确认登录后的跳回地址
                  let redirect = decodeURIComponent(this.$route.query.redirect || '/home');
//                  this.$messageBox.alert(redirectUrl, "回掉地址");
                  if (redirectUrl){ //请求中有跳转则跳转
                      window.location.href = redirectUrl;
                  }else if(redirect){
                    this.$router.push({
                      path: redirect
                    });
                  }
                }else{
                  this.$toast({
                    message: res.data.errorMessage,
                    position: 'bottom',
                    duration: 3000
                  })
                }
//                this.$store.dispatch('setUserInfo', userInfo);
              })
              .catch(function (res) {
//                  this.$message.error(response.error_msg);
                console.log(res)
              });
          },
        }
    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  .box{
    font-size: 1.6rem;
  }
  /**登录导航*/
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

  /**登录表单*/
    .loginForm{
      background-color: #ffffff;
      padding:0 2.4rem;
      .input-telpnone{
        padding-top:4rem ;
        padding-bottom:1.45rem;
        font-size: 16px;
        border-bottom: 1px solid #f5f5f5;
        input::placeholder{
          color: #424242;
        }
        span{
          font-size: 15px;
          color: #ffc16b;
        }
      }
      .input-code{
        padding-top: 2rem;
        padding-bottom: 1.45rem;
        font-size: 16px;
        border-bottom: 1px solid #f5f5f5;
        input::placeholder{
          color: #9a9c9d;
        }
      }
      .btn-login{
        margin-top: 3rem;
        width: 100%;
        height: 5rem;
        background-color: #ffc16b;
        font-size: 16px;
        color: #754501;
      }
    }
</style>
