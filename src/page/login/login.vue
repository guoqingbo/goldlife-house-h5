<template>
    <div>
        <head-top />
        <mt-header title="登录" class="nav-header">
          <mt-button icon="back" slot="left" @click="$router.go(-1)"></mt-button>
        </mt-header>
        <form class="loginForm">
          <mt-field class="input-telpnone"  placeholder="请输入手机号" v-model="telphone">
            <span @click="getCode">获取验证码</span>
          </mt-field>
          <mt-field class="input-code"  placeholder="请输入验证码" v-model="mobileCode"></mt-field>
          <mt-button class="btn-login" @click="userLogin">立即登录</mt-button>
        </form>
    </div>
</template>

<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    export default {
        data(){
            return {
              telphone:'',
              mobileCode:'',
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
            api.userLogin({})
              .then(function (response) {
                console.log(response);
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
                console.log(response);
                var error = JSON.parse(response.responseText);
                this.$alert(response.error_msg);
              });
          },
          getCode(){

          }
        }
    }

</script>

<style lang="scss">
    .nav-header{
      height: 4.4rem;
      font-size: 16px;
      color: #424242;
      background-color: #ffffff;
      margin-bottom: .6rem;
      h1{
        font-weight: bold;
      }
    }

    .loginForm{
      background-color: #ffffff;
      padding:0 2.4rem;
    }
  .input-telpnone{
    padding-top:4rem ;
    padding-bottom:1.45rem;
    font-size: 16px;
    color: #424242;
    border-bottom: 1px solid #f5f5f5;
    span{
      font-size: 15px;
      color: #ffc16b;
    }
  }
  .input-code{
    padding-top: 2rem;
    padding-bottom: 1.45rem;
    font-size: 16px;
    color: #9a9c9d;
    border-bottom: 1px solid #f5f5f5;
  }
  .btn-login{
    margin-top: 3rem;
    width: 32.3rem;
    height: 5rem;
    background-color: #ffc16b;
    font-size: 16px;
    color: #754501;
  }

</style>
