// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import './config/rem'

// import FastClick from 'fastclick'
// //
// if ('addEventListener' in document) {
//   document.addEventListener('DOMContentLoaded', function() {
//     FastClick.attach(document.body);
//   }, false);
// }


// 引入时间格式化模块
Vue.use(require('vue-moment'));


//引入store
import store from './store'

//引入ui框架
import Mint from 'mint-ui';
// import 'mint-ui/lib/style.css';
Vue.use(Mint);

//引入ElementUI框架(目前不用)
import {Row,Col,TimePicker,Button,MessageBox} from 'element-ui';
Vue.use(Row);
Vue.use(Col);
Vue.use(TimePicker);
Vue.use(Button);
Vue.use(MessageBox);
import 'element-ui/lib/theme-chalk/index.css';

//引入阿里图标库
import './assets/iconfont/iconfont.css'

//在应用启动时，可以通过设置 Vue.config.productionTip = false 来关闭生产模式下给出的提示
Vue.config.productionTip = true
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
