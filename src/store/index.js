import Vue from 'vue';
import Vuex from 'vuex';
import user from './modules/user';
import song from './modules/song';
import timeline from './modules/timeline';
import modal from './modules/modal';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    song,
    timeline,
    modal,
  },
});
