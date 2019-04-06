import firebase from '@/firebase';
import db from '@/db';

const state = {
  selectedWords: '',
};

const mutations = {
  setSelectedWords(state, payload) {
    state.selectedWords = payload;
  },
};

const actions = {
  sendForm(_, { selectedWords, typedText, song }) {
    const users = db.collection('users');
    const posts = db.collection('posts');
    const result = posts.doc();
    const post = {
      postId: result.id,
      createdDate: firebase.firestore.FieldValue.serverTimestamp(),
      updatedDate: firebase.firestore.FieldValue.serverTimestamp(),
      lyrics: selectedWords,
      view: typedText,
      songId: song.song_id,
    };
    const uid = firebase.auth().currentUser.uid;
    users
      .doc(uid)
      .collection('posts')
      .doc(post.postId)
      .set(post, { merge: true });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
