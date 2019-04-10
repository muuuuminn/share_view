<template>
  <v-container class="songSearch" grid-list-xl text-xs-center>
    <v-layout row wrap>
      <v-flex>
        <h1 class="primary--text display-1 font-weight-medium my-3">曲検索</h1>
        <v-text-field
          v-model="keywords"
          label="キーワードを入力してください。"
          required
        ></v-text-field>
        <v-btn class="primary" @click="searchSongs(keywords)">検索</v-btn>
        <v-btn class="secondary" @click="clearForm()">クリア</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SongSearch',
  data: function() {
    return {
      keywords: '',
    };
  },
  methods: {
    ...mapActions('song', ['searchSongs']),
    clearForm() {
      this.keywords = '';
    },
  },
};
</script>
