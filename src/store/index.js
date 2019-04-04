import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import song from './modules/song';
import timeline from './modules/timeline';
import modal from './modules/modal';
import form from './modules/form';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    song,
    timeline,
    modal,
    form,
  },
});
