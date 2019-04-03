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
  querySongs({ commit }, { keywords }) {
    const fetchSongs = firebase.functions().httpsCallable('fetchSongs');
    fetchSongs({ query: keywords }).then(result => {
      commit('setSongList', result);
    });
  },
  fetchLyrics({ commit }, payload) {
    const fetchLyrics = firebase.functions().httpsCallable('fetchLyrics');
    fetchLyrics({ song_id: payload.song_id }).then(result => {
      console.log(result);
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
