const state = {
  selectedWords: '',
};

const mutations = {
  setSelectedWords(state, payload) {
    state.selectedWords = payload;
  },
};

const actions = {};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
