<template>
  <div id="timeline">
    <h1>timeline</h1>
    <li v-for="post in posts" :key="post.id">{{ post.view }}</li>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Timeline',
  computed: {
    ...mapState('timeline', ['posts']),
    ...mapState('song', ['song']),
  },
  watch: {
    song() {
      this.fetchPosts(this.song.song_id);
    },
  },
  methods: {
    ...mapActions('timeline', ['fetchPosts']),
  },
};
</script>

<style scoped lang="scss"></style>
