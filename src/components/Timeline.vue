<template>
  <v-content id="timeline">
    <v-list three-line>
      <template v-for="(post, index) in posts">
        <v-list-tile :key="post.post_id" avatar>
          <v-list-tile-avatar>
            <img :src="post.authorRef.image" />
          </v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-sub-title class="text--primary">
              <strong>『{{ post.lyrics }}』</strong>
            </v-list-tile-sub-title>
            <v-list-tile-sub-title class="text--primary">
              {{ post.view }}
            </v-list-tile-sub-title>
            <v-list-tile-sub-title>
              {{ post.created_at.toDate().toLocaleString() }}
              <!-- <v-icon color="red" @click="deletePost(post.post_id)" small>delete</v-icon> -->
            </v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-divider :key="index"></v-divider>
      </template>
    </v-list>
  </v-content>
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
