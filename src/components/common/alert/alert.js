import Vue from 'vue';
import alert from './alert.vue';
const AlertConstructor = Vue.extend(alert);
const alertInstance = new AlertConstructor();
document.body.appendChild(alertInstance.$mount().$el)
export default alertInstance;
