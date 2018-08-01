<template>
  <div class="box">
    <!--头部标题-->
    <div class="nav-header">
      <span class="go-back" @click="$router.go(-1)"><i class="icon iconfont go-back-icon">&#xe60f;</i></span>
      <span class="header-title">对比清单</span>
      <span class="nav-header-right" v-if="!complete">
        <i class="icon iconfont icon-add" @click="sheetVisible = !sheetVisible">&#xe61a;</i>
        <i class="icon iconfont icon-modify"  @click="change">&#xe62e;</i>
      </span>
      <span class="nav-header-right" v-if="complete">
        <label class="modify-text" @click="completed">完成</label>
      </span>
    </div>
    <!--房源结果列表-->
    <div class="house-list">
      <ul>
        <li v-for="item in houseLists" :key="item.id" @click="selectedHouse(item.id)">
          <house-item :item="item" :houseType="1" :checkBox="true">
            <div slot="checkBox" class="check-box-div">
              <span class="check-box" :class="{'check-active':beginCompared.indexOf(item.id)>=0}"></span>
            </div>
          </house-item>
        </li>
      </ul>
    </div>
    <!--添加弹出层-->
    <mt-actionsheet
      :actions="actions"
      v-model="sheetVisible">
    </mt-actionsheet>
    <!--底部编辑菜单-->
    <div  v-if="complete" class="modify-bottom-menu">
      <div class="select-all" @click="selectAll">
        <span class="check-box" :class="{'check-active':isSelectedAll}"></span>
        <span class="select-all-text">全选</span>
      </div>
      <div class="clear-invalid-house" @click="clearInvalidHouse">清除失效房源</div>
      <div class="delete" @click="deleteComparedList">删除</div>
    </div>
    <!--开始对比-->
    <div  v-if="!complete" class="begin-to-compared" :class="{'add-active':beginCompared.length>1}" @click="beginToComparedList">开始对比</div>
  </div>
</template>
<script>
  import api from '../../api/axios'
  import houseItem from '../../components/common/houseItem.vue'

  export default {
    data(){
      return{
        actions:[//底部下拉选项
            {name:"从关注房源添加", method:()=>this.addFromCareHouse(1)},
            {name:"从看房记录添加", method:()=>this.addFromCareHouse(2)}
        ],
        sheetVisible:false,//是否展示底部下拉选项
        houseLists:{},//房源列表
        loginName:"",//登录账号
        beginCompared:[],//开始对比房源数据
        complete:false,//选项完成
        isSelectedAll:false,//是否全选
      }
    },
    components:{
      houseItem,
    },
    created(){
        this.getloginName();

    },
    mounted(){

    },
    methods:{
      //获取用户名
      getloginName(){
        api.isLogin()
          .then(res=>{
            if(res.data.success){
              this.loginName = res.data.result
              this.getComparedList();
            }
          })
      },
      completed(){
        //保存数据
        localStorage.setItem("comparedList_hz_"+this.loginName,JSON.stringify(this.houseLists));
        this.complete = !this.complete
        //清空选择的房源
        this.beginCompared = [];
      },
        //切换功能
      change(){
        this.complete = !this.complete
        //清空选择的房源
        this.beginCompared = [];
      },
       //从关注房源添加
      addFromCareHouse(addType){
        this.$store.commit("setActiveInfo",{addType:addType})

        this.$router.push({
          params:{addType:addType},
          name: addType == 1?'careHouseList': 'careHouseList' ,
        });
      },
//      //从看房记录添加
//      addFromLookHouse(){
//        this.$store.commit("setActiveInfo",{addType:2})
//        this.$router.push({
//          params:{addType:2},
//          name: 'careHouseList',
//        });
//      },
      //获取对比清单
      getComparedList(){
        if(this.loginName && localStorage.getItem("comparedList_hz_"+this.loginName)){
          this.houseLists = JSON.parse(localStorage.getItem("comparedList_hz_"+this.loginName));
        }
      },
      //开始对比
      beginToComparedList(){
        if (this.beginCompared.length<2){
            return
        }
        //跳转对比页面
//        let _data = [{'cityId':'hz','houseId':'36979'},{'cityId':'hz','houseId':'36980'}];
//        this.beginCompared = [36979,36980];
        let comparedData = [];//房源对比接口参数
        this.beginCompared.forEach((item)=>{
            let itemObj = {};
            itemObj.cityId = 'hz';
            itemObj.houseId = item;
          comparedData.push(itemObj)
        })
        this.$router.push({
          params:{data:comparedData},
          name: 'comparedResult',
        });
      },
       //选中房源
      selectedHouse(houseId){
        /*if(!this.complete&&this.beginCompared.length>3){
          this.$toast({
            message: "最多可同时对比4条房源",
            position: 'middle',
            duration: 3000
          })
          return
        }*/
        let indexId = this.beginCompared.indexOf(houseId);
        if (indexId>=0){
          this.beginCompared.splice(indexId,1);
        }else{

          if(!this.complete&&this.beginCompared.length>3){
            this.$toast({
              message: "最多可同时对比4条房源",
              position: 'middle',
              duration: 3000
            })
            return
          }else{
            this.beginCompared.push (houseId);
          }
        }
      },
      //全选
      selectAll(){
          this.isSelectedAll = !this.isSelectedAll;
          if(this.isSelectedAll){
            let selectHouseIdArr = [];
            Object.keys(this.houseLists).forEach((key)=>{
              selectHouseIdArr.push(this.houseLists[key].id)
            })
            this.beginCompared = selectHouseIdArr;
          }else{
            this.beginCompared = [];
          }

      },
      //清除失效房源
      clearInvalidHouse(){
          let data = [];
          Object.keys(this.houseLists).forEach((key)=>{
            let item = {};
            item.cityId = 'hz';
            item.houseId = this.houseLists[key].id;
            data.push(item)
          })
          api.clearInvalidHouse(data)
            .then(res=>{
                if (res.data.success){
                    //返回的失效房源清除
                  let invalidHouse = res.data.result;
                  invalidHouse.forEach((value)=>{
                    delete this.houseLists[value.houseId];
//                      let _index = this.beginCompared.indexOf(value.houseId);
//                      if (_index>=0){
//                          //删除存储
//                        this.beginCompared.splice(_index,1)
//                        delete this.houseLists[value.houseId];
//                      }
                  })
//                  localStorage.setItem("comparedList_hz_"+this.loginName,JSON.stringify(this.houseLists));
                  //从新渲染
                  this.houseLists = Object.assign({},this.houseLists);

                  this.$toast({
                    message: "已清除失效房源",
                    position: 'bottom',
                    duration: 3000
                  })
                }else{
                  this.$toast({
                    message: res.data.errorMessage,
                    position: 'bottom',
                    duration: 3000
                  })
                }
            })
            .catch(res=>{
              this.$toast({
                message: res,
                position: 'bottom',
                duration: 3000
              })
            })
      },
      //删除对比清单
      deleteComparedList(){
        if(this.beginCompared.length < 1){
          this.$toast({
            message: '未选择要清除的房源',
            position: 'middle',
            duration: 3000
          })
          return
        }
        let beginCompared = [].concat(this.beginCompared)
        beginCompared.forEach((value)=>{
          let _index = this.beginCompared.indexOf(value);
          if (_index>=0){
            //删除存储
            this.beginCompared.splice(_index,1)
            delete this.houseLists[value];
          }
        })
//        localStorage.setItem("comparedList_hz_"+this.loginName,JSON.stringify(this.houseLists));
        //从新渲染
        this.houseLists = Object.assign({},this.houseLists);
      }
    }
  }
</script>
<style lang="scss" scoped>
  @import '../../style/mixin';
  /*导航头*/
  .nav-header{
    position: fixed;
    width: 100%;
    background-color: #fff;
    font-size: 1.6rem;
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
    .nav-header-right{
      position: absolute;
      right: $contentPadding;
      top: 0;
      .icon-add{
        font-size: 2.25rem;
        padding-right: 1rem;
      }
      .icon-modify{
        font-size: 2rem;
      }
      .modify-text{
        /*font-size: 2rem;*/
        color: #ffc16b;
      }
    }
  }
  /*房源列表*/
  .house-list{
    padding: 4.4rem 2rem;
    /*选中按钮*/
    .check-box-div{
      line-height: 8rem;
      padding-right:1rem;
    }
    .check-box{
      display: inline-block;
      background-color: #eee;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 1.6rem;
    }
    /*选中状态*/
    .check-active{
      background-color: #ffc16c;
      border: solid .2rem #eee;
      width: 1.6rem;
      height: 1.6rem;
      border-radius: 1.6rem;
    }
  }
  /*添加弹出层*/
  .mint-actionsheet{
    .mint-actionsheet-button{
      color: #ffc16b;
    }
  }
  /*开始对比*/
  .begin-to-compared{
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    background-color: #787878;
    color:#fccf94;
    font-size: 1.6rem;
    height: 5rem;
    line-height: 5rem;
  }
  .add-active{
    background-color: #424242;
    color: #fec26a;
  }
  /*底部编辑菜单*/
  .modify-bottom-menu{
    position: fixed;
    bottom: 0;
    text-align: center;
    width: 100%;
    background-color: #787878;
    color:#fccf94;
    font-size: 1.6rem;
    height: 5rem;
    line-height: 5rem;
    display: flex;
    justify-content:space-between;
    .select-all{
      color:#ffc16b;
      /*全选按钮*/
      .check-box{
        display: inline-block;
        background-color: #eee;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 1.6rem;
        margin-left: 2rem;
        vertical-align: middle;
      }
      /*选中状态*/
      .check-active{
        background-color: #ffc16c;
        border: solid .2rem #eee;
        width: 1.6rem;
        height: 1.6rem;
        border-radius: 1.6rem;
      }
      /*.select-all-text{*/
        /*margin: 0 3.5rem 0 1rem;*/
      /*}*/
    }
    .clear-invalid-house{
      color: #fff;
    }
    .delete{
      width: 11rem;
      background-color: #ffc16b;
      color:#754501;
      text-align: center;
    }
  }
</style>
