<template>
  <v-toolbar class="primary white--text" fixed>
    <v-toolbar-title>
      Share Lyrics View
    </v-toolbar-title>
    <v-btn class="" :href="github.url" target="_blank" rel="noopener" icon flat>
      <v-icon>
        {{ github.icon }}
      </v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <template v-if="isLoggedin">
      <v-avatar class="mr-2">
        <img :src="user.image" alt="プロフィール画像" />
      </v-avatar>
      <figcaption>{{ user.name }}</figcaption>
      <v-btn dark flat @click="showModalForUser()">マイページ</v-btn>
      <v-btn dark flat @click="logout()">ログアウト</v-btn>
    </template>
    <v-btn dark flat @click="login()" v-else>ログイン</v-btn>
  </v-toolbar>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data() {
    return {
      github: {
        url: 'https://github.com/muuuuminn/share_view',
        icon: 'fab fa-github',
      },
    };
  },
  computed: {
    ...mapState('auth', ['user', 'isLoggedin']),
  },
  methods: {
    ...mapActions('auth', ['login', 'logout']),
    ...mapActions('modal', ['showModalForUser']),
  },
};
</script>
