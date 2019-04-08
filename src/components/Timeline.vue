<template>
  <v-list class="timeline" three-line>
    <template v-for="(post, index) in posts">
      <v-list-tile :key="post.post_id" avatar>
        <v-list-tile-avatar>
          <v-avatar>
            <v-img :src="post.authorRef.image"></v-img>
          </v-avatar>
        </v-list-tile-avatar>
        <v-list-tile-content>
          <v-list-tile-sub-title class="text--primary font-italic ma-1">
            <strong>『{{ post.lyrics }}』</strong>
          </v-list-tile-sub-title>
          <v-list-tile-sub-title class="text--primary font-weight-bold ma-1">
            {{ post.view }}
          </v-list-tile-sub-title>
          <v-list-tile-sub-title>
            {{ post.authorRef.name }}
            <v-spacer></v-spacer>
            {{ post.created_at.toDate().toLocaleString() }}
            <!-- <v-icon color="red" @click="deletePost(post.post_id)" small>delete</v-icon> -->
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="index"></v-divider>
    </template>
  </v-list>
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

<style>
.timeline {
  height: 70vh;
  overflow-y: scroll;
}
</style>
