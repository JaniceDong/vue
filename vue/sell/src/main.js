// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
<<<<<<< HEAD
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
Vue.use(VueResource);

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
=======
import VueRouter from 'vue-router';
import App from './App';
import goods from './components/goods/goods.vue';
import ratings from './components/ratings/ratings.vue';
import seller from './components/seller/seller.vue';

Vue.use(VueRouter);

Vue.config.productionTip = false;

let app = Vue.extend(App);

let router = new VueRouter();

router.map({
  '/goods': {
    components: goods
  },
  '/ratings': {
    components: ratings
  },
  '/seller': {
    components: seller
  }
});
router.start(app, '#app');
>>>>>>> 3d2370d0a99e0982e70d8a588f14aeb57703c446
