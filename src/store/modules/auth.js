import firebase from '@/firebase';

const state = {
  user: {},
  isLoggedin: false,
};

const mutations = {
  setUser(state, payload) {
    if (payload) {
      state.user = payload;
      state.isLoggedin = true;
    } else {
      state.user = {};
      state.isLoggedin = false;
    }
  },
};

const actions = {
  async login() {
    const provider = new firebase.auth.GoogleAuthProvider();
    await firebase.auth().signInWithPopup(provider);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
