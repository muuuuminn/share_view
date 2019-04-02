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
