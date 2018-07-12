<template>
  <div class="containt">
    <head-top goBack="true"/>
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">小区名称 <i class="icon iconfont xl">&#xe657;</i><i
        class="icon iconfont right">&#xe656;</i></span>

    </h1>
    <div class="content">
      <div class="imgDiv">
        <a href="#">
          <img src="#">
        </a>
      </div>
      <div class="house-content">
        <h2>小区名+户型</h2>
        <div class="div-houseDes">
          <el-row>
            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">300万</p>
              </el-row>
              <el-row class="el-houseDes">
                <p>售价</p>
              </el-row>

            </el-col>
            <el-col :span="1">
              <el-row>
                <div style="width: 1px;height: 100px; background: #000;" class="divide"></div>
              </el-row>


            </el-col>
            <el-col :span="11">
              <el-row class="el-houseDes">
                <p style="color: red">100㎡</p>
              </el-row>
              <el-row class="el-houseDes">
                <p>建筑面积</p>
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
              <p >单价： 4000元/平</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >朝向： 朝南</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >类型： 住宅</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >楼层： 高层</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >小区： <span style="color: #ffc16b">万象新园</span></p>
            </el-row>

          </el-col>

          <el-col :span="11">
            <el-row class="el-detailDes">
              <p >挂牌： 2017.07.07</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >装修： 精装</p>
            </el-row>
            <el-row class="el-detailDes">
              <p >年代： 2016年</p>
            </el-row>
          </el-col>
        </el-row>
      </div>

      <div class="BMap_mask" style="position: absolute; left: 0px; top: 0px; z-index: 9; overflow: hidden; user-select: none; width: 375px; height: 592px;"></div>

    </div>
  </div>

</template>


<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head'

  export default {
    data() {
      return {}
    },
    created() {

    },
    components: {
      headTop,
    },
    computed: {},
    methods: {}

  }
</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 16px;
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
    }
    .xl {
      position: absolute;
      right: 50px;
    }

    .right {
      transform: rotate(90deg);
      position: absolute;
      right: 10px;
    }
    .iconfont {
      font-size: 20px;
    }
  }

  .imgDiv {
    img {
      height: 200px;
      width: 100%;
    }
  }

  .el-row {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }

  .grid-content {
    height: 30px;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
  }

  //售价和建筑面积
  .house-content {
    .div-houseDes {
      margin-top: 30px;
    }
    .el-row {
      //margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    .el-houseDes {
      height: 40px;
      text-align: center;
      line-height: 40px;
    }
    p {
      font-size: 20px;
    }
  }

  //分割
  .divide {
    margin-top: 10px;
    height: 20px;
    width: 100%;
    background-color: #8c939d;
  }

  //详细描述
  .detailDes {
    margin-top: 20px;
    margin-left: 20px;
    .el-row {
      //margin-bottom: 20px;
      &:last-child {
        margin-bottom: 0;
      }
    }
    p{
      color: #9c9a9d;
    }

  }


</style>


