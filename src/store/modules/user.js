const state = {
  test: [],
};

const getters = {
  test: state => data => {
    return state;
  },
};

const mutations = {
  test(state, payload) {},
};

const actions = {
  async test({ commit }) {},
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
