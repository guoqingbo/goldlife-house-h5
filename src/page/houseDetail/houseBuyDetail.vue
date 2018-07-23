<template>
  <div class="houseBuyDetail">
    <!--<head-top goBack="true"/>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title"><span class="village">{{block_name}}</span>
        <i v-if="attentionStatus" @click="attention()" class="icon iconfont xl">&#xe609;</i>
        <i v-else @click="attention()" class="icon iconfont xl">&#xe657;</i>
        <div class="badge" @click="toCompare()">
          <!--<router-link :to="{ name:'houseCompared',params: { }}">-->
            <img src="../../assets/icon/icon_topbar_hclist@2x.png">
            <div v-if="compareNum!=''" class="div2">{{compareNum}}</div>
          <!--</router-link>-->
        </div>
      </span>

    </h1>
    <div class="content">
      <!--顶部轮播图片-->
      <div class="imgDiv">
        <router-link :to="{ name:'imgIncrease',params: { imgs: imgHouseAttr,title:title}}">
          <div v-if="imgHouseAttr.length>0" class="swiper-container">
            <div class="swiper-wrapper">
              <div v-for='i in imgHouseAttr' class="swiper-slide">
                <img :src="i">
              </div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>
          </div>
          <div v-else><img src="../../assets/img/bg_bigphotonormal@2x.png"></div>
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
                <p class="des">售价</p>
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
              <p>单价： <span class="data-show">{{avgprice}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>朝向： <span class="data-show">{{forward}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>类型： <span class="data-show">{{sell_type}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>楼层： <span class="data-show">{{floor}}/{{totalfloor}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <router-link
                :to="{ name:'villageDetail',params: {blockId:blockId,cityId:cityId,userType:userType,houseType:houseType}}">
                <p>小区： <span style="color: #ffc16b">{{block_name}}</span></p>
              </router-link>
            </el-row>

          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p>挂牌： <span class="data-show">{{createtime}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>装修： <span class="data-show">{{fitment}}</span></p>
            </el-row>
            <el-row class="el-detailDes">
              <p>年代： <span class="data-show">{{buildyear}}</span></p>
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
            <p :class="{ 'class-color': isSell}" @click="clickSell()">在售</p>
          </el-col>
          <el-col :span="4">
            <p :class="{ 'class-color': isRent}" @click="clickRent()">在租</p>
          </el-col>
        </el-row>
        <ul class="category-head" ref="ulDisplay">
          <li v-if="isSell" v-for='sellImg in sellList' @click="getHomeDetail(sellImg.id)">
            <img :src="sellImg.pic?sellImg.pic:require('../../assets/img/bg_smallphotonormal@3x.png')"><br/>
            <p>{{sellImg.room_type}}|{{sellImg.buildarea}}|{{sellImg.forward}}</p>
            <p><span style="color: #e10000">{{sellImg.price}}</span>&nbsp;&nbsp;&nbsp;{{sellImg.avgprice}}</p>
          </li>
          <li v-if="isRent" v-for='rentImg in rentList'>
            <router-link
              :to="{ name:'houseRentDetail',params: {cityId:cityId,houseId:houseId,userType:userType,houseType:houseType}}">
              <img :src="rentImg.pic?rentImg.pic:require('../../assets/img/bg_smallphotonormal@3x.png')"><br/>
              <p>{{rentImg.room_type}}|{{rentImg.buildarea}}|{{rentImg.forward}}</p>
              <p><span style="color: #e10000">{{rentImg.price}}</span></p>
            </router-link>
          </li>

        </ul>
      </div>

      <!--同小区在售10套-->
      <div ref="sameSell" class="sameSells">
        <div v-if="isSell">
          同小区在售{{sellList.length}}套
        </div>
        <div v-else-if="isRent">
          同小区在租{{rentList.length}}套
        </div>
      </div>

      <!--分割2-->
      <div class="divide2">
      </div>
      <!--周边房源-->
      <div class="sameArea">
        <p>周边小区</p>
        <ul class="category-head">
          <li v-for="ortherImg in communityAround">
            <router-link
              :to="{ name:'villageDetail',params: {blockId:blockId,cityId:cityId,userType:userType,houseType:houseType}}">
              <img
                :src="ortherImg.surface_img?ortherImg.surface_img:require('../../assets/img/bg_smallphotonormal@3x.png')"><br/>
              <p style="color: #885D24;">{{ortherImg.build_date}}年建</p>
              <p>{{ortherImg.cmt_name}}</p>
              <p class="p-bottom"><span style="color: #e10000">{{ortherImg.averprice}}元/平</span></p>
            </router-link>
          </li>
        </ul>
      </div>
      <div class="empty"></div>
      <!--底部按钮-->
      <div class="button-bottom">
        <el-row class="el-bt">
          <el-col :span="8" class="grid-bt-content bg-bt-light">
            <div @click="addCompare()"><img src="../../assets/icon/icon_addtolist@2x.png"><br><span class="span-icon span-left">{{compareDesc}}</span>
            </div>
          </el-col>
          <!--<router-link :to="{ name:'houseAppointment',params: { homes: houseDetail}}">-->
            <el-col :span="8" class="grid-bt-content bg-bt-m centenr">
              <div @click="appoint()"><span class="span-icon">预约看房</span></div>
            </el-col>
          <!--</router-link>-->
          <el-col :span="8">
            <div class="grid-bt-content bg-bt centenr" @click="phoneCall"><span>联系经纪人</span></div>
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
  import headTop from '../../components/header/head'
  import BMap from 'BMap'
  import Swiper from 'swiper'

  export default {
    beforeCreate() {

    },
    //参数
    data() {
      return {
        type: 'tab',
        address_detail: null,
        //房源
        houseDetail: '',
        houseId: this.$route.params.houseId?this.$route.params.houseId:this.$store.state.activeInfo.houseId,
        isSell: true,//是否在售
        isRent: false,//是否在租
        title: '',//小区名+户型
        price: '',//售价
        buildarea: '',//建筑面积
        avgprice: '',//单价
        forward: '',//朝向
        sell_type: '',//类型
        floor: '',//楼层
        totalfloor:'',//总楼层
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
        attentionStatus: false,
        cityId: 'hz',
        userType: 'customer',
        houseType: '1',
        blockId: '1',
        compareNum: '',
        compareDesc: '加入对比',
        brokerPhone: '',
        address: '',//地图标注地址
      }
    },
    created() {
      this.getHouseDetail();
      this.getCompareNum();
      //存储当前房源id
      this.$store.commit("setActiveInfo",{houseId:this.houseId,houseType:this.houseType})

    },
    components: {
      headTop,
    },
    mounted() {
      this.getBaiduMap();
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
            if (res.data.success) {
              var resultHouse = res.data.result;
              this.houseDetail = resultHouse;
              console.log('二手房params')
              console.log(params)
              console.log('二手房result')
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
              this.houseId = resultHouse.id;
              this.cityId = resultHouse.cityId;
              this.blockId = resultHouse.block_id;
              this.brokerPhone = resultHouse.brokerPhone;
              this.totalfloor = resultHouse.totalfloor;
              if (resultHouse.attentionState == '0') {
                this.attentionStatus = false;
              } else if (resultHouse.attentionState == '1') {
                this.attentionStatus = true;
              }
              this.center.lng = resultHouse.communityLocation.b_map_x;
              this.center.lat = resultHouse.communityLocation.b_map_y;
              this.address = resultHouse.disrictName + ',' + resultHouse.streetName;
              //重置地图
              this.resetMap();
              //对比按钮
              var loginName = this.$store.state.userInfo.loginName;
              var list = localStorage.getItem("comparedList_hz_" + loginName);
              if (list != null) {
                if (JSON.parse(list)[this.houseId]) {
                  this.compareDesc = '取消对比'
                } else {
                  this.compareDesc = '加入对比'
                }
              }else{
                this.compareDesc = '加入对比'
              }
              //初始化轮播
              this.$nextTick(function () {
                var mySwiper = new Swiper('.swiper-container', {
                  loop: true,
                  autoplay: {
                    delay: 3000,//3秒切换一次
                  },
                  // 如果需要分页器
                  pagination: {
                    el: '.swiper-pagination',
                    type: 'fraction',
                  },
                });
              });
              //房源小区
              this.getCommunityDetail();

            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
              console.log(res)
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
              console.log('二手房小区params');
              console.log(params)
              var resultHouse = res.data.result;
              console.log('二手房小区res');
              console.log(resultHouse)
              this.sellList = resultHouse.houseInblock.sell.lists;
              this.rentList = resultHouse.houseInblock.rent.lists;
              this.communityAround = resultHouse.communityAround;
            } else {
              this.$message.error(res.data.errorMessage);
            }
          })
          .catch(res => {
            this.$message.error(res);
          });
      },
      getBaiduMap() {
        var map = new BMap.Map('allmap');
        window.map = map;
        var point = new BMap.Point(this.maplng, this.maplat);
        var marker = new BMap.Marker(point);
        map.addOverlay(marker);
        map.disableDragging();
        map.centerAndZoom(point, 16);

      },
      clickSell() {
        this.isSell = true;
        this.isRent = false;
        if (this.sellList.length > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }

      },
      clickRent() {
        this.isSell = false;
        this.isRent = true;
        if (this.rentList.length > 0) {
          this.$refs.ulDisplay.style.display = '';
          this.$refs.sameSell.style.marginTop = '16rem';
        } else {
          this.$refs.ulDisplay.style.display = 'none';
          this.$refs.sameSell.style.marginTop = '2rem';
        }
      },
      //关注
      attention() {
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              if (!this.attentionStatus) {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.houseId,
                  businessType: '二手房',
                  sysType: 1,
                  attentionState: 1,
                };
                api.attention(attentionnfo)
                  .then(res => {
                    if (res.data.success) {
                      console.log('关注成功')
                      this.attentionStatus = true;
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
                return
              } else if (this.attentionStatus) {
                let attentionnfo = {
                  cityId: this.cityId,
                  businessNum: this.houseId,
                  businessType: '二手房',
                  sysType: 1,
                  attentionState: 0,
                };
                api.attention(attentionnfo)
                  .then(res => {
                    if (res.data.success) {
                      console.log('取消关注')
                      this.attentionStatus = false;
                    }
                  })
                  .catch(function (response) {
                    console.log(response)
                  });
              }
            }
          });

      },
      toCompare(){
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              this.$router.push({ name: 'houseCompared', params: {}});
            }
          });
      },
      getHomeDetail(data) {
        this.houseId = data;
        this.houseType = '1';
        this.getHouseDetail();
      },
      getCompareNum() {
        //获取用户名
        let loginName = this.$store.state.userInfo.loginName;
        //在该用户获取对比清单
        var compareArr = localStorage.getItem("comparedList_hz_" + loginName);
        console.log('aompareArr');
        console.log(compareArr)
        var len = 0;
        if(compareArr != null){
          len = Object.keys(compareArr).length;
          console.log(Object.keys(compareArr))
          console.log(len)
        }
        //var _length = Object.keys(localStorage.getItem("comparedList_hz_" + loginName));
        if (len>0) {
          this.compareNum = len;
        } else {
          this.compareNum = '';
        }
      },
      addCompare() {
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              var loginName = this.$store.state.userInfo.loginName;
              var list = Object.assign({},JSON.parse(localStorage.getItem("comparedList_hz_" + loginName)));
              console.log('localStorage-compare')
              console.log(list)
              if (this.compareDesc == '加入对比') {
                list[this.houseId] =  this.houseDetail;

                console.log(list)
                //加入对比清单
                localStorage.setItem("comparedList_hz_" + loginName, JSON.stringify(list));
                this.compareDesc = '取消对比';
                this.getCompareNum();
              } else if (this.compareDesc == '取消对比') {
                delete list[this.houseId]
                //对比清单移除
                localStorage.setItem("comparedList_hz_" + loginName, JSON.stringify(list));
                this.compareDesc = '加入对比';
                this.getCompareNum();
              }
            }
          });
      },
      phoneCall() {
        this.$confirm('呼叫：'+this.brokerPhone,  {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          cancelButtonClass: 'cancelButtonClass',
          confirmButtonClass: 'confirmButtonClass',
          customClass: 'customClass',
          center: true
        }).then(() => {
          window.location.href = 'tel://'+this.brokerPhone
        }).catch(() => {

        });
      },
      appoint(){
        api.isLogin()
          .then(res => {
            if (res.data.success) {
              console.log(res)
              //跳转看房预约{ name:'houseAppointment',params: { homes: houseDetail}}
              this.$router.push({ name:'houseAppointment',params: { homes: this.houseDetail}});
            }
          });
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

<style lang="scss" >
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";

  .houseBuyDetail {
    font-size: 1.6rem;
  }
  .customClass{
    width: 80%;
    padding-bottom:4rem;
    p{
      font-weight: bold;
    }
    .cancelButtonClass{
      width: 40%;
      height: 4rem;
    }
    .confirmButtonClass{
      width: 40%;
      height: 4rem;
    }
  }
  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 1.6rem;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    border-bottom: solid .6rem #f8f8f8;
    .go-back {
      position: absolute;
      left: $contentPadding;
    }
    .go-back-icon {
      font-size: 2rem;
    }
    .header-title {
      display: inline-block;
      width: 100%;
      font-weight: bold;
      text-align: center;
      .village {
        position: absolute;
        left: 41%;
        font-weight: bold;
      }
      .xl {
        position: absolute;
        right: 5rem;
        color: #ffc16b;
      }
      .badge {
        width: 3rem;
        height: 4rem;
        margin-right: 2rem;
        float: left;
        img {
          height: 2rem;
          width: 2rem;
          margin-top: 1rem;
          position: absolute;
          right: 1.5rem;
        }
        .div2 {
          margin-top: 1rem;
          background: #ffc16b;
          height: 1rem;
          width: 1.5rem;
          border-radius: 0.3rem;
          line-height: 1rem;
          position: absolute;
          right: 0.6rem;
          text-align: center;
          font-size: 0.9rem;
        }
      }
      img {
        margin-top: 0.8rem;
        height: 2.4rem;
        width: 2rem;
      }
      .right {
        //transform: rotate(90deg);
        position: absolute;
        right: 1.4rem;
      }

      .iconfont {
        font-size: 20px;
      }
    }

  }

  .imgDiv {
    .swiper-container {
      width: 100%;
      height: 20rem;
    }
    .swiper-pagination {
      height: 4rem;
      width: 4rem;
      border-radius: 2rem;
      background-color: #303133;
      opacity: 0.7;
      text-align: center;
      line-height: 4rem;
      left: 85%;
      color: #f0f0f0;
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

  .button-bottom {
    width: 100%;
    position: fixed;
    bottom: 0;
    .grid-bt-content {
      height: 6rem;
      line-height: 2rem;
    }
    img {
      height: 2.7rem;
      width: 3rem;
    }
    .span-icon {
      color: #ffc16b;
      font-size: 1.6rem;
    }
    .centenr {
      text-align: center;
      line-height: 6rem;
      span {
        color: #754501;
      }
    }
    .bg-bt-light {
      background-color: #424242;
      text-align: center;
    }
    .bg-bt-m {
      background-color: #F39B77;
    }
    .bg-bt {
      background-color: #ffc16b;
    }
    .span-left{
      position: absolute;
      bottom: 1rem;
      left: 3rem;
      font-size: 1.4rem;
    }
  }


</style>
