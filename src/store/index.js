import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import song from './modules/song';
import timeline from './modules/timeline';
import modal from './modules/modal';
import form from './modules/form';
import myPosts from './modules/myPosts';
import { vuexfireMutations } from 'vuexfire';

Vue.use(Vuex);

const state = {
  isLoading: false,
};

const mutations = {
  ...vuexfireMutations,
  loading(state) {
    state.isLoading = true;
  },
  completeLoad(state) {
    state.isLoading = false;
  },
};

export default new Vuex.Store({
  modules: {
    auth,
    song,
    timeline,
    modal,
    form,
    myPosts,
  },
  mutations,
  state,
});
