<template>
  <v-container class="songList" grid-list-md>
    <h1 class="primary--text display-1 font-weight-medium my-3">検索結果</h1>
    <v-layout row wrap>
      <v-flex v-for="song in songList" :key="song.song_id" md3>
        <v-card class="ma-1" @click="passSongIdToModal(song)" hover>
          <v-responsive :aspect-ratio="1">
            <v-img :src="song.song_art" :gradient="gradient">
              <v-container fill-height>
                <v-layout wrap row align-center>
                  <v-flex>
                    <h3 class="mb-4 white--text">
                      {{ song.full_title }}
                    </h3>
                    <h4 class="white--text">
                      {{ song.artist_name }}
                    </h4>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-img>
          </v-responsive>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'songList',
  components: {},
  props: {},
  data() {
    return {
      gradient: '0deg, rgba(59, 19, 19, 0.7), rgba(0, 0, 0, 0.5)',
      hover: 'true',
    };
  },
  computed: {
    ...mapState('song', ['songList']),
  },
  methods: {
    ...mapActions('song', ['fetchLyrics']),
    ...mapActions('modal', ['showModalForLyrics']),
    passSongIdToModal(song) {
      this.fetchLyrics(song);
      this.showModalForLyrics();
    },
  },
};
</script>
