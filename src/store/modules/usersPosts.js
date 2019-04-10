import { firestoreAction } from 'vuexfire';
import db from '@/db';

const users = db.collection('users');

const state = {
  usersPosts: [],
};
const getters = {
  sortUsersPosts: state => {
    return state.usersPosts.sort(function(a, b) {
      return b.created_at.toDate().getTime() - a.created_at.toDate().getTime();
    });
  },
};
const mutations = {};
const actions = {
  fetchUsersPosts: firestoreAction(({ bindFirestoreRef }, user) => {
    const usersPosts = users
      .doc(user.user_id)
      .collection('posts')
      .orderBy('updated_at', 'desc');
    bindFirestoreRef('usersPosts', usersPosts);
  }),
  fetchUsersPosts2(user) {
    const userRef = users
      .doc(user.user_id)
      .collection('posts')
      .orderBy('updated_at', 'desc');
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
