<template>
  <v-toolbar class="primary white--text">
    <v-toolbar-title>
      Share Lyrics View
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn @click="login()">Googleログイン</v-btn>
    <v-avatar>
      <img :src="user.image" alt="プロフィール画像" />
    </v-avatar>
    <figcaption>{{ user.name }}</figcaption>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState('auth', ['user', 'isLoggedin']),
  },
  methods: {
    ...mapActions('auth', ['login']),
  },
};
</script>
