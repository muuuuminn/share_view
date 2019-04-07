<template>
  <v-container class="songList" grid-list-md>
    <h1 class="primary--text display-1 font-weight-medium my-3">検索結果</h1>
    <v-layout row wrap>
      <v-flex v-for="song in songList" :key="song.song_id" md4>
        <v-card hover @click="passSongIdToModal(song)">
          <v-card-title>
            {{ song.full_title }}
          </v-card-title>
          <v-card-text>
            snipets
          </v-card-text>
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
      isVisible: false,
      selectedSongId: '',
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

<style scoped lang="scss"></style>
