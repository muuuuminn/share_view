import { firestoreAction } from 'vuexfire';
import db from '@/db';

const users = db.collection('users');

const state = {
  usersPosts: [],
};
const getters = {};
const mutations = {};
const actions = {
  fetchUsersPosts: firestoreAction(({ bindFirestoreRef }, user) => {
    console.log('fire');
    // const userRef = users.doc(user.user_id);
    const usersPosts = users
      .doc(user.user_id)
      .collection('posts')
      .orderBy('updated_at', 'desc');
    console.log(usersPosts);
    bindFirestoreRef('usersPosts', usersPosts);
  }),
  fetchUsersPosts2(user) {
    const userRef = users
      .doc(user.user_id)
      .collection('posts')
      .orderBy('updated_at', 'desc');
    console.log(userRef);
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};
