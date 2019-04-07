const functions = require('firebase-functions');
const { geniusAPI } = require('./client_secret.json');
const Lyricist = require('lyricist/node6');

exports.fetchSongs = functions.https.onCall((data, context) => {
  const accessToken = geniusAPI.access_token;
  const lyricist = new Lyricist(accessToken);
  return lyricist.search(encodeURI(data.query)).then(songs => {
    const serchResult = songs.map(song => {
      return {
        song_id: song.id,
        full_title: song.full_title,
      };
    });
    return serchResult;
  });
});

exports.fetchLyrics = functions.https.onCall((data, context) => {
  const accessToken = geniusAPI.access_token;
  const lyricist = new Lyricist(accessToken);
  return lyricist.song(data.song_id, { fetchLyrics: true }).then(lyrics => {
    return lyrics;
  });
});

const admin = require('firebase-admin');
admin.initializeApp();
const firestore = admin.firestore();
const DOCUMENT_PATH = 'users/{user_id}/posts/{post_id}';

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
  const post_id = snapshot.id;
  const user_id = context.params.user_id;
  const post = snapshot.data();
  post.authorRef = firestore.collection('users').doc(user_id);
  firestore
    .collection('posts')
    .doc(post_id)
    .set(post, { merge: true });
};
