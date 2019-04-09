<template>
  <v-container class="songList" grid-list-md>
    <v-layout row wrap>
      <template v-if="isLoading">
        <v-flex class="ma-5">
          <Loading></Loading>
        </v-flex>
      </template>
      <template v-else-if="message">
        <v-flex class="ma-5">
          <h2 class="warning--text">{{ message }}</h2>
        </v-flex>
      </template>
      <template v-else>
        <v-flex v-for="song in songList" :key="song.song_id" md3>
          <v-card class="ma-1" @click="openModalWithSong(song)" hover>
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
      </template>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from './Loading';

export default {
  name: 'songList',
  components: { Loading },
  props: {},
  data() {
    return {
      gradient: '0deg, rgba(59, 19, 19, 0.7), rgba(0, 0, 0, 0.5)',
      hover: 'true',
    };
  },
  computed: {
    ...mapState('song', ['songList', 'message']),
    ...mapState({ isLoading: 'isLoading' }),
  },
  methods: {
    ...mapActions('song', ['fetchLyrics']),
    ...mapActions('modal', ['showModalForLyrics']),
    openModalWithSong(song) {
      this.fetchLyrics(song);
      this.showModalForLyrics();
    },
  },
};
</script>
