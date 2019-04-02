<template>
  <div class="songList">
    <h1>songList</h1>
    <div v-for="song in songList" :key="song.song_id">
      <el-button @click="passSongIdToModal(song)">
        {{ song.full_title }}
      </el-button>
    </div>
    <el-button @click="show()">Show</el-button>
    <Modal :isVisible="isVisible" :songId="selectedSongId"></Modal>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Modal from './Modal';

export default {
  name: 'songList',
  components: { Modal },
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
    passSongIdToModal(song) {
      this.fetchLyrics(song);
      this.isVisible = true;
    },
  },
};
</script>

<style scoped lang="scss"></style>
