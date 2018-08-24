// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import element from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import storage from './tools/storage';
import AxiosPlugin from '../src/tools/axios';

Vue.prototype.Storage = storage;
Vue.use(AxiosPlugin);
Vue.use(element);
Vue.config.productionTip = false;
/*eslint-disable-next-line eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
