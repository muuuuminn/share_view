<template>
  <v-card class="modalForLyrics">
    <v-toolbar color="primary">
      <v-btn dark icon @click="hideModal()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title class="white--text">曲詳細</v-toolbar-title>
    </v-toolbar>
    <v-container>
      <v-layout row>
        <v-flex md6>
          <Lyrics></Lyrics>
        </v-flex>
        <v-flex md6>
          <Form></Form>
          <Timeline></Timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </v-card>
</template>

<script>
import { mapActions } from 'vuex';
import Timeline from './Timeline';
import Lyrics from './Lyrics';
import Form from './Form';

export default {
  name: 'ModalForLyrics',
  components: { Timeline, Lyrics, Form },
  methods: {
    ...mapActions('modal', ['hideModal']),
  },
};
</script>

<style scoped></style>
