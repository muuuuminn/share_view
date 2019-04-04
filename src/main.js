import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import store from './store/index';
import './registerServiceWorker';
import './plugins/element.js';
// eslint-disable-next-line no-unused-vars
import firebase from './firebase';
// eslint-disable-next-line no-unused-vars
import auth from './auth';

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
