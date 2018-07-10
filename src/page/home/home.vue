<template>
    <div class="containt">
      <head-top goBack="true"/>
      <div class="content">
        <div class="my-search clear">
            <div class="my-searchbar-inner left clear">
              <div class="my-search-select left">
                <span>二手房 <i class="icon iconfont">&#xe65e;</i></span>
                <ul class="my-search-option">
                  <option checked>二手房</option>
                  <option>租房</option>
                </ul>
              </div>
              <div class="my-search-input left">
                <input type="search" placeholder="请输入商圈或小区名" class="my-search-input">
              </div>
            </div>
            <div class="my-search-more right">
                <i class="icon iconfont iconfont-more">&#xe641;</i>
            </div>
          </div>
        <div class="condition-filter clear">
          <ul class="left clear">
            <li>区域<i class="icon iconfont">&#xe65e;</i></li>
            <li>价格<i class="icon iconfont">&#xe65e;</i></li>
            <li>房型<i class="icon iconfont">&#xe65e;</i></li>
            <li>筛选<i class="icon iconfont">&#xe65e;</i></li>
          </ul>
          <span class="right clear"> <i class="icon iconfont">&#xe656;</i></span>
        </div>
        <div class="list clear">
          <ul>
            <li>
              <router-link to="/sellDetail">
                <div class="img left">
                  <img src="" >
                </div>
                <p class="right">
                  <span class="title">广厦天都城天星苑 2室1厅</span>
                  <span class="title">室内</span>
                  <span class="dicrible">9dshdhgkjgukdgsdthh</span>
                  <span class="dicrible">240</span>
                  <span class="dicrible">444</span>
                </p>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script>
    import api from '../../api/axios'
    import headTop from '../../components/header/head'
    export default {
        data(){
            return {

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
          getSellHoseLists(){
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
        }
    }

</script>

<style lang="scss" scoped>
    .content{
      padding:0 2rem;
    }
    /**搜索样式*/
    .my-search{
      margin-top: 1.2rem;
      height: 3.5rem;
      font-size: 13px;
      div{
        height: 3.5rem;
        line-height: 3.5rem;
      }
    }
  .my-searchbar-inner{
    background-color: #f5f5f5;
    border-radius: 6px;
    padding-left: 1rem;

    width: 29rem;
    select:{
      border: 0;
      background-color: #ababab;
      appearance:none;
    }
    option{
      border:0;
    }
  }
  .my-search-select{
    font-size: 13px;
    .my-search-option{
      display: none;
      position: absolute;
    }
  }
  .my-search-input{
    border: 0;
    padding-left: 6px;
    background-color: transparent;
    color: #424242;
  }
  .my-search-more{
    .iconfont-more{font-size: 2.5rem};
  }

    /**条件过滤*/
    .condition-filter{
      padding-top: 3rem;
      ul{
        padding-bottom: 1.5rem;
      }
      li{
        float: left;
        width: 7.8rem;
      }
    }
    /**列表*/
  .list{
    ul{
      li{
        border-top: 1px solid #f5f5f5;
        padding: 1.5rem 0;
        .img,img{
          width: 12rem;
          height: 9rem;
          border-radius: 10px;
        }
        p{
          span{
            display: block;
            width: 18.9rem;
            margin-bottom: 0.2rem;
          }
          .title{
            font-weight: bold;
            font-size: 14px;
          }
          .dicrible{
            font-size: 12px;
            color: #9b999c;
          }
        }
      }
    }

  }

</style>
