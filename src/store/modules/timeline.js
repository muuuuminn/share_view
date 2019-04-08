import { firestoreAction } from 'vuexfire';
import db from '@/db';

const posts = db.collection('posts');

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
};

export default {
  namespaced: true,
  state,
  actions,
  getters,
};
