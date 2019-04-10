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
        artist_name: song.primary_artist.name,
        song_art: song.song_art_image_thumbnail_url,
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
const USERS_POSTS_PATH = 'users/{user_id}/posts/{post_id}';

exports.copyUsersPostCreate = functions.firestore
  .document(USERS_POSTS_PATH)
  .onCreate((snapshot, context) => {
    copyUsersPostToRootPosts(snapshot, context);
  });

exports.copyUsersPostUpdate = functions.firestore
  .document(USERS_POSTS_PATH)
  .onUpdate((change, context) => {
    copyUsersPostToRootPosts(change.after, context);
  });

exports.usersPostDelete = functions.firestore
  .document(USERS_POSTS_PATH)
  .onDelete((snapshot, context) => {
    deleteRootPost(snapshot, context);
  });

const deleteRootPost = function(snapshot, context) {
  const post_id = context.params.post_id;
  console.log(context);
  firestore
    .collection('posts')
    .doc(post_id)
    .delete();
};

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

// const ROOT_POSTS_PATH = 'posts/{post_id}';

// exports.deleteUsersPosts = functions.firestore
//   .document(ROOT_POSTS_PATH)
//   .onDelete((snapshot, context) => {
//     console.log(context.auth);
//     const user_id = context.auth.id;
//     const post_id = context.params.post_id;
//     console.log(user_id);
//     console.log(post_id);
//     firestore
//       .collection('users')
//       .doc(user_id)
//       .collection('post')
//       .doc(post_id)
//       .delete();
//   });
