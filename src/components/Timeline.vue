<template>
  <v-list class="timeline" three-line>
    <h2 class="warning--text" v-if="message">{{ message }}</h2>
    <template v-for="(post, index) in posts" v-else>
      <v-list-tile :key="post.post_id" avatar>
        <v-list-tile-avatar>
          <v-avatar>
            <v-img :src="post.authorRef ? post.authorRef.image : user.image"></v-img>
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
            <span>
              {{ post.authorRef ? post.authorRef.name : user.name }}
            </span>
            <v-spacer></v-spacer>
            {{ post.created_at.toDate().toLocaleString() }}
            <v-icon color="red" @click="onDeletePost(post)" small>delete</v-icon>
          </v-list-tile-sub-title>
        </v-list-tile-content>
      </v-list-tile>
      <v-divider :key="index"></v-divider>
    </template>
  </v-list>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Timeline',
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('song', ['song']),
    ...mapGetters('timeline', ['sortPosts']),
    ...mapGetters('usersPosts', ['sortUsersPosts']),
    ...mapState('modal', ['modalName']),
    posts() {
      switch (this.modalName) {
        case 'ModalForLyrics':
          return this.sortPosts;
        case 'ModalForUser':
          return this.sortUsersPosts;
        default:
          return [];
      }
    },
    message() {
      if (this.posts.length == 0) {
        return 'この歌詞のはじめの投稿者になりませんか！？';
      }
      return '';
    },
  },
  watch: {
    song() {
      this.fetchPosts(this.song.song_id);
    },
  },
  methods: {
    ...mapActions('timeline', ['fetchPosts', 'deletePost']),
    onDeletePost(post) {
      const isDelete = confirm(`${post.view}を削除しますか`);
      if (isDelete) {
        this.deletePost(post.post_id);
      }
    },
  },
};
</script>

<style>
.timeline {
  height: 70vh;
  overflow-y: scroll;
}
</style>
