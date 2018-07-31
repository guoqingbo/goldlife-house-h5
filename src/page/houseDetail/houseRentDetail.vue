<template>
  <div class="houseRentDetail">
    <!--<head-top goBack="true"/>-->
    <div id="nav-rent">
      <ul>
        <li class="menu"><span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span></li>
        <span class="village">房源</span>
      </ul>
    </div>
    <div class="content-rent">
      <!--顶部轮播图片-->
      <div class="imgDiv">
        <router-link :to="{ name:'imgIncrease',params: { imgs: imgHouseAttr,title:title}}">
          <div v-if="imgHouseAttr.length>0" class="swiper-container">

            <mt-swipe :auto="0" @change="handleChange" :show-indicators="false">
              <mt-swipe-item v-for="(item,index) in imgHouseAttr" :key="index">
                <img :src="item" >
              </mt-swipe-item>
            </mt-swipe>

          </div>
          <div v-else><img src="../../../static/bg_bigphotonormal拷贝@3x.png"></div>
          <div class="showNum" v-if="imgHouseAttr.length>0">{{indexNum}}/{{imgHouseAttr.length}}</div>
        </router-link>
      </div>


      <div class="house-content">
        <h2 class="villageName">{{title}}</h2>
        <div class="div-houseDes">
          <el-row>
            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">{{price}}</p>
              </el-row>
              <el-row class="el-houseDes">
                <p class="des">租金</p>
              </el-row>
            </el-col>

            <el-col :span="1">
              <el-row>
                <div class="div-line"></div>
              </el-row>
            </el-col>

            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">{{buildarea}}</p>
              </el-row>
              <el-row class="el-houseDes">
                <p class="des">建筑面积</p>
              </el-row>
            </el-col>

          </el-row>
        </div>
      </div>
      <!--分割-->
      <div class="divide">
      </div>
      <!--详细描述-->
      <div class="detailDes">
        <el-row>
          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>朝向： <span class="data-show">{{forward}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>类型： <span class="data-show">{{sell_type}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>年代： <span class="data-show">{{buildyear}}</span></p>
            </el-row>
          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>挂牌： <span class="data-show">{{createtime}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>装修： <span class="data-show">{{fitment}}</span></p>
            </el-row>
            <br>
            <el-row class="el-detailDes">
              <p></p>
            </el-row>

          </el-col>
        </el-row>
        <el-row>
          <el-col :span="18">
            <el-row class="el-detailDes">
              <router-link
                :to="{ name:'villageDetail',params: {blockId:blockId,cityId:cityId,userType:userType,houseType:houseType}}">
                <p>小区： <span style="color: #ffc16b" >{{block_name}}</span></p>
              </router-link>
            </el-row>
          </el-col>
          <el-col :span="6">
            <el-row class="el-detailDes">
              <router-link
                :to="{ name:'villageDetail',params: {blockId:blockId,cityId:cityId,userType:userType,houseType:houseType}}">
                <p><span class="span-bold"><i class="icon iconfont right">&#xe6da;</i></span></p>
              </router-link>
            </el-row>
          </el-col>
        </el-row>

      </div>
      <!--百度地图-->
      <div class="homeMap">
        <router-link :to="{ name:'mapIncrease',params: { x: center.lng,y:center.lat}}">
          <div id="allmap" class="allmap"></div>
        </router-link>
      </div>
      <!--同小区房源-->
      <div class="sameArea">
        <el-row>
          <el-col :span="16">
            <p>同小区房源</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isRent}" @click="clickRent()">在租</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isSell}" @click="clickSell()">在售</p>
          </el-col>
        </el-row>
        <ul class="category-head" ref="ulDisplay">
          <li v-if="isSell" v-for='sellImg in sellList' >
            <router-link :to="{ name:'houseBuyDetail',params: {cityId:cityId,houseId:sellImg.id,userType:userType,houseType:houseType}}">
              <img :src="sellImg.pic?sellImg.pic:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
              <p>{{sellImg.room_type}}|{{sellImg.buildarea}}|{{sellImg.forward}}</p>
              <p><span style="color: #e10000">{{sellImg.price}}</span>&nbsp;&nbsp;&nbsp;{{sellImg.avgprice}}</p>
            </router-link>
          </li>
          <li v-if="isRent" v-for='rentImg in rentList' @click="getHomeDetail(rentImg.id)">
            <img :src="rentImg.pic?rentImg.pic:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
            <p>{{rentImg.room_type}}|{{rentImg.buildarea}}|{{rentImg.forward}}</p>
            <p><span style="color: #e10000">{{rentImg.price}}</span></p>
          </li>
        </ul>
      </div>

      <!--同小区在售10套-->
      <div ref="sameSell" class="sameSells" @click="clkVillage()">
        <div v-if="isSell">
          同小区在售{{sellLength}}套
        </div>
        <div v-else-if="isRent">
          同小区在租{{rentLength}}套
        </div>
      </div>
      <!--分割2-->
      <div class="divide2">
      </div>
      <!--周边房源-->
      <div class="sameArea" v-if="communityAround.length>0">
        <p>周边小区</p>
        <ul class="category-head">
          <li v-for="ortherImg in communityAround">
            <router-link
              :to="{ name:'villageDetail',params: {blockId:ortherImg.id,cityId:cityId,userType:userType,houseType:houseType}}">
              <img
                :src="ortherImg.surface_img?ortherImg.surface_img:require('../../../static/bg_smallphotonormal@2x.png')"><br/>
              <p style="color: #885D24;">{{ortherImg.build_date}}年建</p>
              <p>{{ortherImg.cmt_name}}</p>
              <p class="p-bottom"><span style="color: #e10000">{{ortherImg.averprice}}元/平</span></p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="empty" v-if="communityAround.length>0"></div>
      <div class="empty2" v-else></div>
      <!--底部按钮-->
      <div class="button-bottom">
        <el-row class="el-bt">
          <el-col :span="12" class="grid-bt-content bg-bt-light">
            <div @click="clkAttention()"><i class="icon iconfont xl">&#xe657;</i><br><span class="span-icon" ref="spanIcon">{{attentionStatus}}</span>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-bt-content bg-bt centenr" @click="phoneCall()"><span>联系经纪人</span></div>
          </el-col>
        </el-row>
      </div>
    </div>
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</template>


<script>
  import api from '../../api/axios'
  import BMap from 'BMap'
  import { MessageBox } from 'mint-ui';

  export default {
    data() {
      return {
        type: 'tab',
        address_detail: null,
        center: {lng: 116.40387397, lat: 39.91488908},
        //房源
        houseDetail: '',
        houseId: this.$route.params.houseId?this.$route.params.houseId:this.$store.state.activeInfo.rentHouseId,
        isSell: false,//是否在售
        isRent: true,//是否在租
        title: '',//小区名+户型
        price: '',//售价
        buildarea: '',//建筑面积
        avgprice: '',//单价
        forward: '',//朝向
        sell_type: '',//类型
        floor: '',//楼层
        block_name: '',//小区
        createtime: '',//挂牌
        fitment: '',//装修
        buildyear: '',//年代
        maplng: '',//坐标x
        maplat: '',//坐标y
        center: {lng: 120.12, lat: 30.16},
        imgHouseAttr: [],//房源照片
        //同小区
        sellList: [],//在售
        rentList: [],//在租
        //周边小区
        communityAround: [],//周边小区
        attentionStatus: '关注',
        cityId: 'hz',
        userType:'customer',
        houseType:'2',
        blockId:'1',
        brokerPhone: '',
        address: '',//地图标注地址
        sellLength:'',
        rentLength:'',
        indexNum:'1',
      }
    },
    created() {
      this.menu();
      this.getHouseDetail();
      //this.getCommunityDetail();
      //设置当前活动房源id
      console.log(this.houseId)
      console.log(this.houseType)
      this.$store.commit("setActiveInfo",{rentHouseId:this.houseId})
    },
    components: {

    },
    mounted() {
      this.ready();
    },

    methods: {
      //房源详情
      getHouseDetail() {

        let params = {
          cityId: this.cityId,
          houseId: this.houseId,
          userType: this.userType,
          houseType: this.houseType
        };
        api.getHouseDetail(params)
          .then(res => {
            console.log(params)
            console.log(res)
            if (res.data.success) {
              console.log(res.data.result);
              var resultHouse = res.data.result;
              this.houseDetail = resultHouse;
              console.log('houseDetail')
              console.log(this.houseDetail);
              this.title = resultHouse.title;
              this.price = resultHouse.price;
              this.buildarea = resultHouse.buildarea;
              this.avgprice = resultHouse.avgprice;
              this.forward = resultHouse.forward;
              this.sell_type = resultHouse.sell_type;
              this.floor = resultHouse.floor;
              this.block_name = resultHouse.block_name;
              this.createtime = resultHouse.createtime;
              this.fitment = resultHouse.fitment;
              this.buildyear = resultHouse.buildyear;
              this.maplng = resultHouse.communityLocation.b_map_x;
              this.maplat = resultHouse.communityLocation.b_map_y;
              this.imgHouseAttr = resultHouse.img;
              this.center.lng = resultHouse.communityLocation.b_map_x;
              this.center.lat = resultHouse.communityLocation.b_map_y;
              this.cityId = resultHouse.cityId;
              this.blockId = resultHouse.block_id;
              this.brokerPhone = resultHouse.brokerPhone;
              if (resultHouse.attentionState === '1') {
                this.attentionStatus = '已关注'
                this.$refs.spanIcon.style.left = '7.4rem'

              } else if (resultHouse.attentionState === '0') {
                this.attentionStatus = '关注'
                this.$refs.spanIcon.style.left = '8rem'
              }
              this.address = resultHouse.disrictName + ',' + resultHouse.streetName;
              //重置地图
              this.resetMap();
              //初始化轮播

              this.sellList = resultHouse.houseInBlock.sell.lists;
              this.sellLength = resultHouse.houseInBlock.sell.tatalCount;
              this.rentList = resultHouse.houseInBlock.rent.lists;
              this.rentLength = resultHouse.houseInBlock.rent.tatalCount;
              this.communityAround = resultHouse.communityAround;
              //房源小区
              //this.getCommunityDetail();

            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
            this.$message.error('房源详情=' + res.data.errorMessage);
          });
      },
      //小区详情
      getCommunityDetail() {

        let params = {
          blockId: this.blockId,
          city: this.cityId,
          userType: this.userType,
          houseType: this.houseType
        };
        api.getCommunityDetail(params)
          .then(res => {
            if (res.data.success) {
              console.log('小区');
              console.log(res.data.result);
              var resultHouse = res.data.result;
              this.sellList = resultHouse.houseInblock.sell.lists;
              this.rentList = resultHouse.houseInblock.rent.lists;
              console.log(this.sellList);
              this.communityAround = resultHouse.communityAround;
            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
            this.$message.error('小区详情' + res.data.errorMessage);
          });
      },
      handleChange(index){
        this.indexNum = index+1;
      },
      clickSell() {
        this.houseType = 1;
        this.isSell = true;
        this.isRent = false;
        if (this.sellLength > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }

      },
      clickRent() {
        this.houseType = 2;
        this.isSell = false;
        this.isRent = true;
        if (this.rentLength > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }
      },
      clkAttention() {
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              if (this.attentionStatus === '关注') {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.houseId,
                  businessType: '租房',
                  sysType: 1,
                  attentionState: 1,
                };
                console.log(attentionnfo);
                api.attention(attentionnfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                      console.log('关注成功')
                      this.attentionStatus = '已关注';
                      this.$refs.spanIcon.style.left = '7.4rem'
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
                return
              } else if (this.attentionStatus === '已关注') {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.houseId,
                  businessType: '租房',
                  sysType: 1,
                  attentionState: 0,
                };
                api.attention(attentionnfo)
                  .then(res => {
                    console.log(res.data)
                    if (res.data.success) {
                      console.log('取消关注')
                      this.attentionStatus = '关注';
                      this.$refs.spanIcon.style.left = '8rem'
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
              }
            }else{
              MessageBox({
                title: '',
                message: '请登录查看',
                showCancelButton: true,
                confirmButtonText:"登录"
              }).then(action => {
                if(action == "confirm"){
                  this.$router.replace({ //跳转到登录页面
                    path: 'login',
                    query: {
                      redirect: this.$router.currentRoute.fullPath, //将跳转的路由path作为参数，登录成功后跳转到该路由
                    }
                  });
                }
              })
            }
          });

      },
      menu() {
        window.scrollTo(0,0);
      },
      isAndroid_ios(){
        var u = navigator.userAgent, app = navigator.appVersion;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Linux') > -1; //android终端或者uc浏览器
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        return isAndroid==true?true:false;
      },
      phoneCall() {
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              if(this.isAndroid_ios){
                MessageBox({
                  title: '',
                  message: '呼叫：'+this.brokerPhone,
                  showCancelButton: true,
                }).then(action => {
                  if(action == "confirm"){
                    window.location.href = 'tel:'+this.brokerPhone
                  }
                })
              }else{
                window.location.href = 'tel://'+this.brokerPhone
              }

            }else{
              MessageBox({
                title: '',
                message: '请登录查看',
                showCancelButton: true,
                confirmButtonText:"登录"
              }).then(action => {
                if(action == "confirm"){
                  this.$router.replace({ //跳转到登录页面
                    path: 'login',
                    query: {
                      redirect: this.$router.currentRoute.fullPath, //将跳转的路由path作为参数，登录成功后跳转到该路由
                    }
                  });
                }
              })
            }
          });
        /*MessageBox({
          title: '',
          message: '呼叫：'+this.brokerPhone,
          showCancelButton: true,
        }).then(action => {
          if(action == "confirm"){
            window.location.href = 'tel://'+this.brokerPhone
          }
        })*/
      },
      clkVillage(){
        if((this.isSell&&this.sellLength>0)||(this.isRent&&this.rentLength>0)){
          console.log(this.isSell)
          this.$router.push({ name:'villageMore',params: { more: this.isSell?this.sellList:this.rentList,villageName:this.title,id:this.blockId,houseType:this.houseType}});
        }

      },
      getHomeDetail(data){
        if(data == this.houseId){

        }else {
          this.houseId = data;
          this.houseType = '2';
          this.getHouseDetail();
        }

        this.menu();
      },
      ready() {
        var map = new BMap.Map('allmap');
        window.map = map;
        var point = new BMap.Point(this.maplng, this.maplat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);
      },
      resetMap(){
        var point = new BMap.Point(this.maplng, this.maplat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);
        map.panTo(point);
        let lableInfor = new BMap.Label(this.address, {
          position: point,
          offset: new BMap.Size(-26, 0)
        });
        lableInfor.setStyle({backgroundColor: '#fff', padding: '0.5rem', border: '', fontSize: '.1rem',});
        map.addOverlay(lableInfor);
      },
    }
  }


</script>

<style lang="scss">
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";
  .houseRentDetail{
    font-size: 1.6rem;

    #nav-rent{
      height: 4.4rem;
      width:100%;
      position:fixed;/*固定作用*/
      top:0;
      z-index: 9999;
      text-align: center;
      background-color: #fff;
      font-size: 1.6rem;
      color: #424242;
      height: 4.4rem;
      line-height: 4.4rem;
      border-bottom: solid .6rem #f8f8f8;
      .menu{
        overflow-y:hidden;
        cursor:hand;
        display:inline;
        list-style:none;
        font-weight:bold;
        float:left;
      }
      .go-back {
        position: absolute;
        left: $contentPadding;
      }
      span{
        font-weight: bold;
      }
    }
    .content-rent{
      margin-top: 4.4rem;
    }

    .imgDiv {
      .swiper-container {
        width: 100%;
        height: 20rem;
      }
      .showNum{
        height: 4rem;
        width: 4rem;
        border-radius: 2rem;
        position: absolute;
        top: 20rem;
        right: 1rem;
        z-index: 1;
        color: #f0f0f0;
        background-color: #303133;
        opacity: 0.7;
        text-align: center;
        line-height: 4rem;
      }
      img {
        width: 100%;
        height: 20rem;
      }

    }

    .el-row {
      margin-bottom: 1.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }

    .grid-content {
      height: 3rem;
      border-radius: 0.5rem;
      text-align: center;
      line-height: 3rem;
    }

    //售价和建筑面积
    .house-content {
      .div-houseDes {
        margin-top: 2rem;
        .div-line {
          width: 0.2rem;
          height: 6rem;
          background: #f5f5f5;
        }
        .des {
          font-size: 14px;
        }
      }
      .el-row {
        //margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .el-houseDes {
        height: 2rem;
        text-align: center;
        line-height: 2rem;
      }
      p {
        font-size: 20px;
      }
      .villageName {
        margin-top: 1.5rem;
        font-weight: bold;
        margin-left: 2rem;
      }
    }

    //分割
    .divide {
      margin-top: 1rem;
      height: 2rem;
      width: 100%;
      background-color: #f5f5f5;
    }

    //详细描述
    .detailDes {
      margin-top: 2rem;
      margin-left: 2rem;
      .el-row {
        //margin-bottom: 20px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      p {
        color: #9c9a9d;
      }
      .data-show{
        color: #424242;
      }
      .span-bold{
        i{
          margin-top: 0.5rem;
          font-weight: bold;
          margin-right: 2rem;
        }
      }
    }

    //地图
    .homeMap {
      margin-top: 2rem;
      #allmap {
        width: 100%;
        height: 22rem;
      }
    }

    //同小区房源
    .sameArea {
      margin-top: 1.5rem;
      margin-left: 2rem;
      .class-color {
        color: #ffc16b;
      }
      .category-head {
        width: 100%;
        display: inline;
        white-space: nowrap; /*规定段落中的文本不进行换行*/
        overflow-x: scroll; /*水平方向，超出部分添加滚动机制*/
        float: left; /*一定要设置左侧浮动*/
        overflow-y: hidden;
        li {
          img {
            height: 9rem;
            width: 12rem;
            border-radius: 0.5rem;
          }
          p {
            font-size: 1rem;
            width: 12rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
            span {
              font-size: 1rem;
            }
          }
          margin-top: 1rem;
          display: inline-block; /*既可以水平排列，又可以设置宽高和边距*/
          padding-left: 1.5rem;
        }
        li:first-child {
          padding-left: 0rem;
        }
        .p-bottom {
          margin-top: 0.5rem;
        }
      }
    }

    /*同小区在售*/
    .sameSells {
      height: 3rem;
      background-color: #f5f5f5;
      margin-top: 16rem;
      margin-left: 2rem;
      margin-right: 2rem;
      text-align: center;
      line-height: 3rem;
      color: #885D24;
    }

    .divide2 {
      height: 1rem;
      margin-top: 1rem;
      background-color: #f5f5f5;
    }

    .empty {
      margin-top: 18rem;
      height: 3rem;
    }
    .empty2 {
      margin-top: 1rem;
      height: 3rem;
    }

    .button-bottom {
      width: 100%;
      position: fixed;
      bottom: 0;
      .grid-bt-content {
        height: 5rem;
        line-height: 2rem;
      }
      .icon {
        color: #ffc16b;
        position: absolute;
        bottom: 2.4rem;
        left: 8.4rem;
        padding-bottom: 0.1rem;
      }
      .span-icon {
        color: #ffc16b;
        font-size: 1.3rem;
        position: absolute;
        left: 7.4rem;
        bottom: 0.6rem;
      }
      .centenr {
        text-align: center;
        line-height: 5rem;
        span {
          color: #754501;
        }
      }
      .bg-bt-light {
        background-color: #424242;
        text-align: center;
      }
      .bg-bt {
        background-color: #ffc16b;
      }
    }
  }

</style>
