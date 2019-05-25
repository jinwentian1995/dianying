import Vue from 'vue'
import App from './App.vue'
import router from './routers' // 设置路由
import store from './stores'// 状态管理

import axios from 'axios'
Vue.prototype.axios = axios;
Vue.config.productionTip = false;

Vue.filter('setWH',(url , arg)=>{
  return url.replace(/w\.h/,arg);
});
// 全局组件
import Scroller from './components/Scroller'
Vue.component('Scroller',Scroller);

import Loading from './components/Loading'
Vue.component('Loading',Loading);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
