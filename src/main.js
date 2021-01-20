import Vue from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import 'element-theme-chalk';
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';

import './components/common/directives';
import 'babel-polyfill';
import './mock.js'
import Utils from './components/common/utils'


Vue.config.productionTip = false

Vue.use(ElementUI, {
  size: 'small'
});



Vue.prototype.$http = axios
Vue.prototype.Utils = Utils

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
