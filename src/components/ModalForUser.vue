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
          基本情報
          <v-btn @click="fetchUsersPosts(user)">押す</v-btn>
        </v-flex>
        <v-flex md6>
          <v-tabs v-model="tabs" centered>
            <v-tab> 投稿一覧 </v-tab>
            <v-tab> 投稿フォーム </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              {{ usersPosts }}
              あなたの投稿
            </v-tab-item>
            <v-tab-item>
              なにか情報
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

export default {
  name: 'ModalForUser',
  components: { Loading },
  data() {
    return { tabs: 0 };
  },
  computed: {
    ...mapState({ isLoading: 'isLoading' }),
    ...mapState('myPosts', ['usersPosts']),
    ...mapState('auth', ['user']),
  },
  methods: {
    ...mapActions('modal', ['hideModal']),
    ...mapActions('myPosts', ['fetchUsersPosts']),
  },
};
</script>

<style scoped></style>
