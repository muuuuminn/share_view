const state = {
  modalName: '',
};

const mutations = {
  setModalName(state, payload) {
    state.modalName = payload;
  },
  clearModalName(state) {
    state.modalName = '';
  },
};

const actions = {
  showModalForLyrics({ commit }) {
    commit('setModalName', 'ModalForLyrics');
  },
  showModalForUser({ commit }) {
    commit('setModalName', 'ModalForUser');
  },
  hideModal({ commit }) {
    commit('clearModalName');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
