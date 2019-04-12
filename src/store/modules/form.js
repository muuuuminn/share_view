import firebase from '@/firebase';
import db from '@/db';
import store from '@/store';

const state = {
  selectedWords: '',
};

const mutations = {
  setSelectedWords(state, payload) {
    state.selectedWords = payload;
  },
  clearSelectedWords(state) {
    state.selectedWords = '';
  },
};

const actions = {
  async sendForm(_, { selectedWords, typedText, song }) {
    store.commit('loading');
    const posts = db.collection('posts');
    const result = posts.doc();
    const post = {
      post_id: result.id,
      created_at: firebase.firestore.FieldValue.serverTimestamp(),
      updated_at: firebase.firestore.FieldValue.serverTimestamp(),
      lyrics: selectedWords,
      view: typedText,
      song_id: song.song_id,
    };
    const uid = firebase.auth().currentUser.uid;
    const users = db.collection('users');
    await users
      .doc(uid)
      .collection('posts')
      .doc(post.post_id)
      .set(post, { merge: true });
    store.commit('completeLoad');
    store.dispatch('snackbar/fireSnackbar', {
      message: 'メッセージ投稿完了！！',
      color: 'success',
    });
  },
  clearSelectedWords({ commit }) {
    commit('clearSelectedWords');
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
