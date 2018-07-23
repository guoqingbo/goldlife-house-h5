<template>
  <div class="houseAppointment">
    <!--<head-top goBack="true"/>-->
    <h1 class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">
        看房预约
      </span>

    </h1>

    <div class="houseDetail">
      <!--<li>
        <div >
          <span class="span-top">广厦天都城天星苑 3室1厅卫</span>
          <br>
          <span class="span-small">100平方/南 北/中楼层 共20层</span>
          <span class="span-bottom"><span style="color: #e10000">350万</span>&nbsp;&nbsp;&nbsp;45000元/平</span>
        </div>

        <img src="http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"><br/>
      </li>-->
      <li>
        <div>
          <span class="span-top">{{$route.params.homes.title}}</span>
          <br>
          <span class="span-small">{{$route.params.homes.describe}}</span>
          <span class="span-bottom"><span style="color: #e10000">{{$route.params.homes.price}}</span>&nbsp;&nbsp;&nbsp;{{$route.params.homes.avgprice}}</span>
        </div>

        <img src="http://image.qmango.com/hotelimg/dl1210/109490/109.jpeg"><br/>
      </li>
    </div>
    <div class="form">
      <div>
        <div class="span-input centenr">
          <span class="span-left ">姓名：</span>
          <input class="input-right name" placeholder="看房人" v-model="name" ref="name">
        </div>
        <div class="span-input dark centenr">
          <span class="span-left">看房时间：</span>
          <input class="input-right date dark" placeholder="请选择看房时间" v-model="dateValue" ref="date">
          <i class="icon iconfont go-back-icon i-right">&#xe6da;</i>
          <div class="dateDiv">
            <span class="input-right">
              <el-date-picker
                v-model="dateValue"
                type="datetime"
                placeholder="请选择看房时间"
                :picker-options="pickerOptions0"
                value-format="yyyy/MM/dd HH:mm"
                align="right"
                size="small">
              </el-date-picker>
            </span>
          </div>
        </div>
        <div class="span-input centenr">
          <span class="span-left">联系方式：</span>
          <input class="input-right phone" placeholder="请填写联系方式" v-model="phone" ref="phone" maxlength="11">
        </div>
        <div class="span-input dark centenr">
          <span class="span-left">验证码：</span>
          <input class="yan dark" v-model="verCode">
          <button class="input-right button" ref="button" @click="getCode()">发送验证码</button>
          <br>
          <span class="xh"><span>_</span><span>_</span><span>_</span><span>_</span><span>_</span><span>_</span></span>
        </div>
        <div class="span-input centenr">
          <span class="span-left">备注：</span><br>
        </div>
        <div class="span-input dark noteDiv">
          <textarea class="span-left dark" placeholder="请填写备注" v-model="desc"></textarea>
        </div>
      </div>
      <div class="button-bottom" @click="sendAppointment()">提交</div>
    </div>

    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  import api from '../../api/axios'
  import headTop from '../../components/header/head'

  export default {
    //参数
    data() {
      return {
        pickerOptions0: {
          disabledDate(time) {
            return time.getTime() < Date.now();
          }
        },
        name: '',
        date: '',
        phone: '',
        inputLength: '',
        dateValue: '',
        desc: '',
        brokerId: '',
        houseId: '',
        verCode: '',
        datestamp: '',
      }
    },
    watch: {
      name() {
        var text_length = this.name.length;//获取当前文本框的长度
        var current_width = parseInt(text_length) * 1.7;
        if (current_width > 0) {
          this.$refs.name.style.width = current_width + 'rem';
        } else {
          this.$refs.name.style.width = 5 + 'rem';
        }
      },
      phone() {
        var text_length = this.phone.length;//获取当前文本框的长度
        var current_width = parseInt(text_length);
        if (current_width > 0) {
          this.$refs.phone.style.width = current_width + 'rem';
        } else {
          this.$refs.phone.style.width = 12 + 'rem';
        }
      },
      /*date(){
        var text_length = this.date.length;//获取当前文本框的长度
        var current_width = parseInt(text_length);
        if(current_width > 0){
          this.$refs.date.style.width = current_width+'rem';
        }else{
          this.$refs.date.style.width = 12+'rem';
        }
      }*/
    },
    created() {

    },
    components: {
      headTop,
    },
    mounted() {

    },

    methods: {
      getCode() {
        var num = 60;
        var elementButton = this.$refs.button;
        var timer = setInterval(function () {
          num--;
          elementButton.innerHTML = num + '秒';
          elementButton.disabled = ' disabled';
          if (num === 0) {
            elementButton.disabled = '';
            elementButton.innerHTML = '重新获取';
            clearInterval(timer)
          }
        }, 1000);
        api.getCode(this.phone)
          .then(res => {
            console.log(res);
            if (res.data.success == false) {
              this.$toast({
                message: res.data.errorMessage,
                position: 'bottom',
                duration: 3000
              });
            }
          });
      },

      sendAppointment() {
        if (!this.name) {
          this.$toast({
            message: '请输入看房人姓名',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        if (!this.dateValue) {
          this.$toast({
            message: '请选择看房时间',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
        if (!this.phone) {
          this.$toast({
            message: '请输入手机号',
            position: 'bottom',
            duration: 3000
          });
          return
        } else if (!reg.test(this.phone)) {
          this.$toast({
            message: '手机号号码格式错误',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        if (!this.verCode) {
          this.$toast({
            message: '请输入验证码',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        if (!this.desc) {
          this.$toast({
            message: '请填写备注',
            position: 'bottom',
            duration: 3000
          });
          return
        }
        var timestamp2 = Date.parse(new Date(this.dateValue));
        this.datestamp = timestamp2 / 1000;
        console.log(this.datestamp);
        let appointmentInfo = {
          cityId: this.$route.params.homes.cityId,
          houseId: this.$route.params.homes.id,
          phoneNum: this.phone,
          verCode: this.verCode,
          time: this.datestamp,
          desc: this.desc,
          brokerId: this.$route.params.homes.broker_id,
          userName: this.name,
        };
        api.houseAppointment(appointmentInfo)
          .then(res => {
            console.log(res.data)
            if (res.data.success) {
              console.log('提交成功')
              //跳转看房日程
              this.$router.push({ name: 'lookHouseIndex', params: {}});
            }
          })
          .catch(function (response) {
            console.log(response)
          });

      },
    }
  }


</script>

<style lang="scss" scoped>
  @import '../../style/mixin';
  @import "../../../static/css/swiper.min.css";

  .houseAppointment{
    font-size: 1.6rem;
  }
  /**导航*/
  .nav-header {
    position: relative;
    background-color: #fff;
    font-size: 1.6rem;
    color: #424242;
    height: 4.4rem;
    line-height: 4.4rem;
    //border-bottom: solid .6rem #f8f8f8;
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
  }

  .houseDetail {
    margin-top: 2rem;
    height: 10rem;
    margin-left: 1rem;
    .span-top {
      font-weight: bold;
    }
    .span-small {
      font-size: 15px;
      color: #A19FA2;
    }
    .span-bottom {
      position: absolute;
      top: 13.5rem;
      left: 1rem;
    }
    div {
      float: left;
    }
    img {
      height: 9rem;
      width: 12rem;
      border-radius: 0.5rem;
      position: absolute;
      right: 2rem;
    }
  }

  .form {
    margin-top: 2rem;

    .span-input {
      height: 3.5rem;
      padding-top: 0.6rem;
      .center {
        line-height: 3.5rem;
      }
      .span-left {
        margin-left: 1rem;
      }
      .i-right {
        position: absolute;
        right: 1rem;
      }
      .input-right {
        position: absolute;
        right: 1rem;
      }
      .el-date-editor {
        border: none;
      }
      .name {
        width: 5rem;
      }
      .phone {
        width: 12rem;
      }
      .date {
        width: 15rem;
      }
      button {
        color: #ffc16b;
        background-color: #424242;
        height: 3.4rem;
        width: 10rem;
        margin-top: -0.5rem;
      }
      .yan {
        position: absolute;
        width: 6rem;
        right: 14rem;
        z-index: 10;
      }
      .xh {
        position: absolute;
        top: 30.5rem;
        right: 14rem;
        span {
          padding-left: 0.3rem;
        }
      }
      .dateDiv {
        position: absolute;
        top: 22rem;
        right: 0;
        opacity: 0;
        z-index: 10;

      }
    }
    .dark {
      background-color: #f8f8f8;
    }
    .noteDiv {
      height: 18rem;
      width: 100%;
    }
    .button-bottom {
      height: 4rem;
      width: 100%;
      position: absolute;
      bottom: 0;
      background-color: #424242;
      text-align: center;
      line-height: 4rem;
      color: #ffc16b;
      font-size: 2rem;
    }

  }


</style>
