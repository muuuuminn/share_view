import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyAQe0ctD8yABZxdev1apQIvQCN2thiSpMw',
  authDomain: 'share-lyrics-view.firebaseapp.com',
  databaseURL: 'https://share-lyrics-view.firebaseio.com',
  projectId: 'share-lyrics-view',
  storageBucket: 'share-lyrics-view.appspot.com',
  messagingSenderId: '49423697571',
});

// //キーワードから曲を検索し、結果を取得
// const query = 'kiminokokorowa';
// const fetchSongs = firebase.functions().httpsCallable('fetchSongs');
// fetchSongs({ query: query }).then(result => {
//   console.log(result);
// });

// //曲の一覧から選択した曲の歌詞を取得
// const song_id = '3691930';
// const fetchLyrics = firebase.functions().httpsCallable('fetchLyrics');
// fetchLyrics({ song_id: song_id }).then(result => {
//   console.log(result);
//   console.log(result.databaseURL.lyrics);
// });

export default firebase;
