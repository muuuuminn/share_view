<template>
  <v-card class="modalForUser">
    <v-toolbar color="primary">
      <v-btn dark icon @click="hideModal()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">ユーザー詳細</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-md fluid>
      <v-layout wrap row>
        <v-flex md6>
          <Loading v-if="isLoading" class="ml-4 mt-5"></Loading>
          <v-card>
            <v-card-title>
              マイプロフィール
            </v-card-title>
            <v-card-media>
              <v-avatar class="mr-2">
                <img :src="user.image" alt="プロフィール画像" />
              </v-avatar>
            </v-card-media>
            <v-card-text>
              {{ user.name }}
            </v-card-text>
          </v-card>
        </v-flex>
        <v-flex md6>
          <v-tabs v-model="tabs" centered>
            <v-tab> 自分の過去の投稿 </v-tab>
            <v-tab> 開発中 </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <Timeline></Timeline>
            </v-tab-item>
            <v-tab-item>
              <h2 class="warning--text">開発中</h2>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from './Loading';
import Timeline from './Timeline';

export default {
  name: 'ModalForUser',
  components: { Loading, Timeline },
  data() {
    return { tabs: 0 };
  },
  mounted() {
    this.fetchUsersPosts(this.user);
  },
  computed: {
    ...mapState({ isLoading: 'isLoading' }),
    ...mapState('usersPosts', ['usersPosts']),
    ...mapState('auth', ['user']),
  },
  methods: {
    ...mapActions('modal', ['hideModal']),
    ...mapActions('usersPosts', ['fetchUsersPosts']),
  },
};
</script>

<style scoped></style>
