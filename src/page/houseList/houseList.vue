<template>
  <div class="containt">
    <head-top goBack="true"/>
    <div class="content">
      <!--<el-col :span="16">-->
      <div class="my-search clear">
        <div class="my-searchbar-inner left clear">
          <div class="my-search-select left">
            <el-dropdown id="elDown">
              <span class="el-dropdown-link" id="zfty">
                {{chosetype}}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown" >
                <el-dropdown-item ><span @click='cltype()'>二手房</span></el-dropdown-item>
                <el-dropdown-item ><span @click='cltype()'>租房</span></el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
          <div class="my-search-input left">
            <input type="search" placeholder="请输入商圈或小区名" class="my-search-input">
          </div>
        </div>
        <div class="my-search-more right">

        </div>
      </div>
      <!--</el-col>-->
      <div class="condition-filter clear">
        <ul class="left clear">
          <li @click='recommendList'>区域<i class="icon iconfont">&#xe65e;</i></li>
          <li >价格<i class="icon iconfont">&#xe65e;</i></li>
          <li @click='show("homesId")' >房型<i class="icon iconfont">&#xe65e;</i></li>
          <li @click='show("chooseId")'>筛选<i class="icon iconfont">&#xe65e;</i></li>
        </ul>
        <span class="right clear"> <i class="icon iconfont">&#xe656;</i></span>

      </div>
      <div class="downli">

      </div>
      <div class="list clear">
        <ul>
          <li v-for="sellhous in selllist" class="showhouse">
            <router-link to="/sellDetail" >

              <!--<div class="img left">-->
                <img class="img left" :src="sellhous.pic" >
              <!--</div>-->
              <p class="right">
                <span class="title">{{sellhous.title}}</span>
                <span class="title">室内</span>
                <span class="dicrible">9dshdhgkjgukdgsdthh</span>
                <span class="dicrible">240</span>
                <span class="dicrible">444</span>
              </p>
            </router-link>
          </li>
          <hr>
        </ul>
      </div>

      <!--房型-->
      <div class="homes" id="homesId">
        <el-row :gutter="30">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">一室</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">二室</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">三室</div></el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">四室</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">五室</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">五室以上</div></el-col>
        </el-row>
        <el-row class="el-bt">
          <el-col :span="12"><div class="grid-bt-content bg-bt-light">不限</div></el-col>
          <el-col :span="12"><div class="grid-bt-content bg-bt">确定</div></el-col>
        </el-row>
      </div>
      <!--价格-->
      <div class="price" id="priceId">
        <el-row>
          <p>价格区间（万）</p>
        </el-row>
        <el-row>
          <el-col :xs="11" :sm="6" :md="4" :lg="3" :xl="1"><el-input class="input-content" v-model="priceStart" maxlength="4"></el-input></el-col>
          <el-col :xs="2" :sm="6" :md="4" :lg="3" :xl="1"><div class="line-div"><i class="el-icon-minus"></i></div></el-col>
          <el-col :xs="11" :sm="6" :md="4" :lg="3" :xl="1"><el-input v-model="priceEnd" class="input-content" maxlength="4"></el-input></el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">200以下</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">200-300</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">300-400</div></el-col>
        </el-row>
        <el-row :gutter="30">
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">400-500</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">500-800</div></el-col>
          <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">800-1000</div></el-col>
        </el-row>
        <el-row class="el-bt">
          <el-col :span="12"><div class="grid-bt-content bg-bt-light">不限</div></el-col>
          <el-col :span="12"><div class="grid-bt-content bg-bt">确定</div></el-col>
        </el-row>
      </div>
      <!--排序-->
      <div class="sort" id="sortId">
        <el-row class="el-sort">
          <p>最新发布</p>
        </el-row >
        <hr>
        <el-row class="el-sort">
          <p>总价从低到高</p>
        </el-row>
        <hr>
        <el-row class="el-sort">
          <p>总价从高到低</p>
        </el-row>
        <hr>
        <el-row class="el-sort">
          <p>单价从低到高</p>
        </el-row>
        <hr>
        <el-row class="el-sort">
          <p>面积从大到小</p>
        </el-row>

      </div>
      <!--区域-->
      <div class="area" id="areaId">
        <el-row>
          <el-col :span="12" class="area-left">
            <el-row class="el-area ">
              <p>不限</p>
            </el-row>
            <el-row class="el-area ">
              <p>上城</p>
            </el-row>
            <el-row class="el-area">
              <p>上城</p>
            </el-row>
          </el-col>
          <el-col :span="12" class="area-right">
            <el-row class="el-area ">
              <p>不限</p>
            </el-row>
            <el-row class="el-area ">
              <p>半山</p>
            </el-row>
            <el-row class="el-area">
              <p>大关</p>
            </el-row>
          </el-col>
        </el-row>
      </div>
      <!--筛选-->
      <div class="choose" id="chooseId">
        <el-row>
          <el-row>
            <p>建筑面积（㎡）</p>
          </el-row>

          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">50以下</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">50-70</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">70-90</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">90-110</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">110-140</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">140-170</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">170-200</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">200以上</div></el-col>
          </el-row>
        </el-row>
        <el-row class="el-area-son">
          <el-row>
            <p>楼龄</p>
          </el-row>

          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">5年以内</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">10年以内</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">15年以内</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">20年以内</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">20年以上</div></el-col>
          </el-row>
        </el-row>
        <el-row class="el-area-son">
          <el-row>
            <p>朝向</p>
          </el-row>

          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">朝东</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">朝南</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">朝西</div></el-col>
          </el-row>
          <el-row :gutter="20">
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple-light">朝北</div></el-col>
            <el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1"><div class="grid-content bg-purple">南北</div></el-col>
          </el-row>
        </el-row>
        <el-row class="el-bt">
          <el-col :span="12"><div class="grid-bt-content bg-bt-light">重置</div></el-col>
          <el-col :span="12"><div class="grid-bt-content bg-bt">确定</div></el-col>
        </el-row>
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
        chosetype:'二手房',
        selllist: [],
        priceStart:'',
        priceEnd:'',
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
      getHouseList(){
        api.getHouseList({})
          .then(function (response) {
            console.log(response);
            priceList = response.result.price;
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

      //推荐房源
      recommendList(){
        api.recommendList({})
          .then(response=>{
            console.log(response);
            console.log(response.data.result.sell);
            this.selllist = response.data.result.sell;
            console.log(this.selllist);
          })
          .catch(function (response) {
            console.log(response);
            var error = JSON.parse(response.responseText);
            this.$alert(response.error_msg);
          });
      },
      //获取房源类型
      cltype(){
        var el = event.currentTarget;
        this.chosetype= el.innerText;
      },

      show(domId){
        document.getElementById(domId).style.display="block";
      }


    }

  }

  function hidden(domId){
    document.getElementById(domId).style.display="none";
  }

</script>

<style lang="scss" scoped>
  .choose{
    display:none;
    position: absolute;
    top: 19%;
    left: 4%;
    width: 92%;
    height: 50%;
    background-color: white;
    z-index:1002;
    overflow: auto;
  }
  .el-area-son{
    margin-top: 40px;
  }
  .area{
    display: none;
  }
  .el-area {
    height: 80px;
    line-height: 80px;
    margin-left: 40px;
  }
  .area-left{
    background-color: #f8f8f8;
  }
  .area-right{
    background-color: #f2f2f2;
  }
  .sort{
    display: none;
  }
  .el-sort{
    height: 80px;
    text-align:center;
    line-height: 80px;
  }
  .price{
    display: none;
  }
  .line-div{
    height: 50px;
    text-align:center;
    line-height: 50px;
    font-size: 2px;

  }
  .input-content{
    height: 50px;
    text-align:center;
    max:9999;
    min:0;
  }
  .homes{
    display: none;
  }
  .grid-content{
    height: 30px;
    background-color: #fbf6ee;
    border-radius: 5px;
    text-align:center;
    line-height: 30px;
  }

  .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-bt{
    margin-bottom: 20px;
  }
  .bg-bt-light{
    background-color:#f5f7fa;
  }
  .bg-bt{
    background-color: #ffc16b;
  }
  .grid-bt-content{
    height: 40px;
    text-align:center;
    line-height: 40px;
  }
  .bg-purple-light{
    //background-color: #ffffff;
    background-color: #fbf6ee;
  }
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
    padding-top: 1.5rem;
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
