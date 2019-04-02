<template>
  <div class="songList">
    <h1>songList</h1>
    <div v-for="song in songs" :key="song.song_id">
      {{ song.full_title }}
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'songList',
  props: {},
  computed: {
    ...mapState('song', ['songs']),
  },
};
</script>

<style scoped lang="scss"></style>
