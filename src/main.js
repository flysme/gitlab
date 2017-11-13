// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'lib-flexible/flexible.js'
import { get,post } from './service/http';
import store from './vuex/store'
import VueLazyload from 'vue-lazyload'
import MintUI from 'mint-ui';
import 'mint-ui/lib/style.css';
import 'swiper/dist/css/swiper.css';
import VueAwesomeSwiper from 'vue-awesome-swiper';
Vue.config.productionTip = false;
Vue.prototype.$get = get;

Vue.prototype.$post = post;
Vue.use(MintUI)
Vue.use(VueAwesomeSwiper);
Vue.use(VueLazyload,{preLoad:0.4})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
