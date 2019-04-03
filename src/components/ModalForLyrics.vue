<template>
  <div class="modalForLyrics">
    <v-toolbar dark color="primary">
      <v-btn icon dark @click="hideModal()">
        <v-icon>close</v-icon>
      </v-btn>
      <v-toolbar-title>曲詳細</v-toolbar-title>
    </v-toolbar>
    <h1>ModalForLyrics</h1>
    <v-container fluid>
      <v-layout row>
        <v-flex xs6>
          <Lyrics></Lyrics>
        </v-flex>
        <v-flex xs6>
          <Timeline></Timeline>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Timeline from './Timeline';
import Lyrics from './Lyrics';

export default {
  name: 'ModalForLyrics',
  components: { Timeline, Lyrics },
  props: ['isVisible'],
  methods: {
    ...mapActions('modal', ['hideModal']),
  },
};
</script>

<style scoped lang="scss"></style>
