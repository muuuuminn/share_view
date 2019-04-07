<template>
  <v-card class="modalForLyrics">
    <v-toolbar color="primary">
      <v-btn dark icon @click="hideModal()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">曲詳細</v-toolbar-title>
    </v-toolbar>
    <v-container grid-list-md fluid>
      <v-layout wrap row>
        <v-flex md6>
          <Loading v-if="isLoading" class="ml-4 mt-5"></Loading>
          <Lyrics v-else></Lyrics>
        </v-flex>
        <v-flex md6>
          <v-tabs v-model="tabs" centered>
            <v-tab> 投稿一覧 </v-tab>
            <v-tab> 投稿フォーム </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tabs">
            <v-tab-item>
              <Timeline></Timeline>
            </v-tab-item>
            <v-tab-item>
              <Form></Form>
            </v-tab-item>
          </v-tabs-items>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Timeline from './Timeline';
import Lyrics from './Lyrics';
import Form from './Form';
import Loading from './Loading';

export default {
  name: 'ModalForLyrics',
  components: { Timeline, Lyrics, Form, Loading },
  data() {
    return { tabs: 0 };
  },
  computed: {
    ...mapState({ isLoading: 'isLoading' }),
  },
  methods: {
    ...mapActions('modal', ['hideModal']),
  },
};
</script>

<style scoped></style>
