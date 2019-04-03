import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import firebase from './firebase';
import store from './store/index';
import './registerServiceWorker';
import './plugins/element.js';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  firebase,
  render: h => h(App),
}).$mount('#app');
