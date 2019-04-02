import firebase from '@/firebase';

const state = {
  songs: [],
};

const getters = {
  test: state => data => {
    return state;
  },
};

const mutations = {
  setSongs(state, payload) {
    state.songs = payload.data;
  },
};

const actions = {
  async querySongs({ commit }, { keywords }) {
    const fetchSongs = firebase.functions().httpsCallable('fetchSongs');
    fetchSongs({ query: keywords }).then(result => {
      commit('setSongs', result);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
