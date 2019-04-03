<template>
  <div class="songList">
    <h1>songList</h1>
    <div v-for="song in songList" :key="song.song_id">
      <el-button @click="passSongIdToModal(song)">
        {{ song.full_title }}
      </el-button>
    </div>
  </div>
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
