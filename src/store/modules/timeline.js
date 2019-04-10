import { firestoreAction } from 'vuexfire';
import firebase from '@/firebase';
import db from '@/db';

const posts = db.collection('posts');
const users = db.collection('users');

const state = {
  posts: [],
};

const getters = {
  sortPosts: state => {
    return state.posts.sort(function(a, b) {
      return b.created_at.toDate().getTime() - a.created_at.toDate().getTime();
    });
  },
};

const actions = {
  fetchPosts: firestoreAction(({ bindFirestoreRef }, song_id) => {
    const query = posts.where('song_id', '==', song_id);
    bindFirestoreRef('posts', query);
  }),
  deletePost(_, post_id) {
    const uid = firebase.auth().currentUser.uid;
    users
      .doc(uid)
      .collection('posts')
      .doc(post_id)

      .delete()
      .then(function() {
        console.log('削除に成功しました');
      })
      .catch(function(error) {
        console.log(error);
      });
  },
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
