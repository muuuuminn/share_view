const functions = require('firebase-functions');
const { geniusAPI } = require('./client_secret.json');
const Lyricist = require('lyricist/node6');

exports.fetchSongs = functions.https.onCall((data, context) => {
  const accessToken = geniusAPI.access_token;
  const lyricist = new Lyricist(accessToken);
  console.log(encodeURI(data.query));
  return lyricist.search(encodeURI(data.query)).then(songs => {
    console.log(songs);
    const serchResult = songs.map(song => {
      return {
        song_id: song.id,
        full_title: song.full_title,
      };
    });
    console.log(serchResult);
    return serchResult;
  });
});

exports.fetchLyrics = functions.https.onCall((data, context) => {
  console.log(data);
  const accessToken = geniusAPI.access_token;
  const lyricist = new Lyricist(accessToken);
  return lyricist.song(data.song_id, { fetchLyrics: true }).then(lyrics => {
    console.log(lyrics);
    return lyrics;
  });
});

const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const DOCUMENT_PATH = 'users/{userId}/posts/{postId}';

exports.copyUsersPostCreate = functions.firestore
  .document(DOCUMENT_PATH)
  .onCreate((snapshot, context) => {
    copyUsersPostToRootPosts(snapshot, context);
  });

exports.copyUsersPostUpdate = functions.firestore
  .document(DOCUMENT_PATH)
  .onUpdate((change, context) => {
    copyUsersPostToRootPosts(change.after, context);
  });

const copyUsersPostToRootPosts = function(snapshot, context) {
  const postId = snapshot.id;
  const userId = context.params.userId;
  const post = snapshot.data();
  post.authorRef = firestore.collection('users').doc(userId);
  firestore
    .collection('posts')
    .doc(postId)
    .set(post, { merge: true });
};

exports.copyUserToFirestore = functions.auth.user().onCreate(user => {
  console.log(user);
  const setUser = {
    id: '',
    name: '',
    image: '',
    createdDate: '',
  };
  firestore()
    .collection('users')
    .doc()
    .set(setUser)
    .then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    });
});

exports.deleteUserFromFirestore = functions.auth.user().onDelete(user => {
  console.log(user);
});
