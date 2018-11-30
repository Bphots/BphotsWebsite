// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import Axios from 'axios';
import store from './store'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
//axios.defaults.baseURL=''
Vue.config.productionTip = false;
Vue.use(iView)
Vue.prototype.$axios = Axios
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
});
