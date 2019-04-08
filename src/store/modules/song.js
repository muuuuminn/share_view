import firebase from '@/firebase';
import store from '@/store';

const state = {
  songList: [],
  song: {},
  message: '',
};

const getters = {
  getLyrics: state => song_id => {
    return state.songs.find(song => song.song_id === song_id);
  },
};

const mutations = {
  setSongList(state, payload) {
    state.songList = payload;
  },
  setSong(state, payload) {
    state.song = payload;
  },
  addLyricsToSongList(state, payload) {
    const targetSong = state.songList.find(song => song.song_id === payload.song_id);
    if (!targetSong.lyrics) {
      targetSong.lyrics = payload.lyrics;
    }
  },
  setMessage(state) {
    state.message = '申し訳ありませんが、検索結果が見つかりませんでした。';
  },
  clearMessage(state) {
    state.message = '';
  },
};

const actions = {
  async searchSongs({ commit }, keywords) {
    store.commit('loading');
    const fetchSongs = firebase.functions().httpsCallable('fetchSongs');
    await fetchSongs({ query: keywords }).then(result => {
      if (result.data.length != 0) {
        commit('clearMessage');
        commit('setSongList', result.data);
      } else {
        commit('setMessage');
      }
    });
    store.commit('completeLoad');
  },
  async fetchLyrics({ commit }, payload) {
    store.commit('loading');
    const fetchLyrics = firebase.functions().httpsCallable('fetchLyrics');
    await fetchLyrics({ song_id: payload.song_id }).then(result => {
      const song = {
        song_id: payload.song_id,
        full_title: payload.full_title,
        lyrics: result.data.lyrics,
      };
      commit('addLyricsToSongList', song);
      commit('setSong', song);
      store.commit('completeLoad');
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
