const state = {
  show: false,
  message: '',
  color: 'info',
};

const mutations = {
  showSnackbar(state, { message, color }) {
    state.show = true;
    state.message = message;
    state.color = color;
  },
  hideSnackbar(state) {
    state.show = false;
    state.message = '';
  },
};

const actions = {
  fireSnackbar({ commit }, payload) {
    commit('showSnackbar', payload);
    setTimeout(function() {
      commit('hideSnackbar');
    }, 3000);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
