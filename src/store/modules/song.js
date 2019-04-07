import firebase from '@/firebase';

const state = {
  songList: [],
  song: {},
};

const getters = {
  getLyrics: state => song_id => {
    return state.songs.find(song => song.song_id === song_id);
  },
};

const mutations = {
  setSongList(state, payload) {
    state.songList = payload.data;
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
};

const actions = {
  async searchSongs({ commit }, keywords) {
    console.log(keywords);
    const fetchSongs = firebase.functions().httpsCallable('fetchSongs');
    await fetchSongs({ query: keywords }).then(result => {
      commit('setSongList', result);
    });
  },
  async fetchLyrics({ commit }, payload) {
    const fetchLyrics = firebase.functions().httpsCallable('fetchLyrics');
    await fetchLyrics({ song_id: payload.song_id }).then(result => {
      const song = {
        song_id: payload.song_id,
        full_title: payload.full_title,
        lyrics: result.data.lyrics,
      };
      commit('addLyricsToSongList', song);
      commit('setSong', song);
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
