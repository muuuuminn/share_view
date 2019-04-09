import { firestoreAction } from 'vuexfire';
import db from '@/db';

const state = {
  usersPosts: [],
};
const getters = {};
const mutations = {};
const actions = {
  fetchUsersPosts(user) {},
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
