<template>
  <v-toolbar class="primary white--text">
    <v-toolbar-title>
      Share Lyrics View
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <template v-if="isLoggedin">
      <v-avatar>
        <img :src="user.image" alt="プロフィール画像" />
      </v-avatar>
      <figcaption>{{ user.name }}</figcaption>
      <v-btn @click="logout()">ログアウト</v-btn>
    </template>
    <v-btn @click="login()" v-else>ログイン</v-btn>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('auth', ['user', 'isLoggedin']),
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
  },
};
</script>
