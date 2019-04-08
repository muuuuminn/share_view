import { firestoreAction } from 'vuexfire';
import db from '@/db';

const posts = db.collection('posts');

const state = {
  posts: [],
};

const getters = {
  sortPosts: state => {
    return state.posts;
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
};
