<template>
  <v-content class="timeline">
    <v-container fluid>
      <v-layout column>
        <v-flex v-if="message">
          <h2 class="warning--text">{{ message }}</h2>
        </v-flex>
        <v-flex v-for="(post, index) in posts" :key="index" v-else>
          <v-card flat>
            <v-responsive>
              <v-avatar>
                <v-img :src="post.authorRef ? post.authorRef.image : user.image"></v-img>
              </v-avatar>
              <span>
                {{ post.authorRef ? post.authorRef.name : user.name }}
              </span>
            </v-responsive>
            <v-card-title>
              <strong>『{{ post.lyrics }}』</strong>
            </v-card-title>
            <v-card-text>
              {{ post.view }}
            </v-card-text>
            <v-card-text>
              {{ post.created_at.toDate().toLocaleString() }}
              <v-icon color="red" @click="onDeletePost(post)" small>delete</v-icon>
            </v-card-text>
          </v-card>
          <v-divider :key="post.post_id"></v-divider>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  name: 'Timeline',
  computed: {
    ...mapState('auth', ['user']),
    ...mapState('song', ['song']),
    ...mapState('modal', ['modalName']),
    ...mapGetters('timeline', ['sortPosts']),
    ...mapGetters('usersPosts', ['sortUsersPosts']),
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
      if (this.posts.length == 0 && this.modalName == 'ModalForLyrics') {
        return 'この歌詞のはじめの投稿者になりませんか！？';
      } else if (this.posts.length == 0 && this.modalName == 'ModalForUser') {
        return '投稿はありません。';
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
    ...mapActions('timeline', ['fetchPosts', 'deletePost', 'nowLoading']),
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
