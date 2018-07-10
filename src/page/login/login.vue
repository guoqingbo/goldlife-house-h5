<template>
    <div>
        <head-top />
        <h1 class="nav-header">
          <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
          <span class="header-title">登录</span>
        </h1>
        <form class="loginForm">
          <div class="input-telpnone">
            <input   placeholder="请输入手机号" v-model="telphone" />
            <span class="right" @click="getCode" v-show="!computedTime">获取验证码</span>
            <span class="right"  v-show="computedTime">已发送({{computedTime}}s)</span>
          </div>
          <div class="input-code">
            <input  placeholder="请输入验证码" v-model="mobileCodeInput"/>
          </div>
          <el-button class="btn-login" @click="userLogin">立即登录</el-button>
        </form>
        <div class="alert-tip" v-if="showAlert">
          <span class = 'alert-tip-text'>
            {{alertText}}
          </span>
        </div>
    </div>
</template>

<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    export default {
        data(){
            return {
              computedTime: 0, //倒数记时
              telphone:'',//用户输入手机号
              mobileCodeInput:'',//输入的验证码
              mobileCodeGet:'',//获取的验证码
              showAlert:true, //展示提示框
              alertText:'密码错误',//提示内容
              token: ''
            }
        },
        created(){

        },
        components: {
          headTop,
        },
        computed: {

        },
        methods: {
          userLogin(){
//              if (this.mobileCodeInput){
//                this.$message.error('请输入验证码');
//                return
//              }else if(this.mobileCodeInput != this.mobileCodeGet){
//                this.$message.error('验证码输入错误');
//                return
//              }
              let loginInfo = {
                loginName:this.loginName,
                password:this.mobileCodeInput,
                type:2 // 1:密码登录 2：验证码登录
              }
              api.userLogin(loginInfo)
                .then(function (response) {
                  let userInfo = {
                    loginname: response.loginname,
                    avatar_url: response.avatar_url,
                    userId: response.id,
                    token: response.token
                  };
                  this.$store.dispatch('setUserInfo', userInfo);
                  let redirect = decodeURIComponent(this.$route.query.redirect || '/');
                  this.$router.push({
                    path: redirect
                  });
                })
                .catch(function (response) {
//                  this.$message.error(response.error_msg);
                  console.log(response)
                });
          },
          getCode(){
              if (!this.telphone){
                this.$message.error('请输入手机号');

              }else if (!/^1\d{10}$/gi.test(this.telphone)) {
                this.$message.error('手机号号码格式错误');
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
                api.getCode(this.telphone)
                  .then(function (res) {
                    this.mobileCodeGet = res.mobileCodeGet
                  })
                  .catch(function (res) {
                    this.$message.error(response.error_msg);
                  })
              }
          }
        }
    }

</script>

<style lang="scss" scoped>
  @import '../../style/mixin';

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
    }

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
    width: 32.3rem;
    height: 5rem;
    background-color: #ffc16b;
    font-size: 16px;
    color: #754501;
  }
  /*提示框*/
  /*@keyframes tipMove{*/
    /*0%   { opacity:1 }*/
    /*100% { opacity:0}*/
  /*}*/
  .alert-tip{
    position: absolute;
    bottom: 5rem;
    text-align: center;
    width: 100%;
    /*animation: tipMove .4s;*/
    span{
      color:#fff;
      height: 3.6rem;
      padding: 1rem 3rem;
      line-height: 3.6rem;
      border-radius: 1.8rem;
      background-color: rgba(0,0,0,0.6);
    }

  }

</style>
