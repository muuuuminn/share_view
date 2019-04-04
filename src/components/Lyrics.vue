<template>
  <v-card flat class="container">
    <v-card-title>
      <h2>{{ song.full_title }}</h2>
    </v-card-title>
    <v-card-text class="lyrics">
      <strong @mouseup="getSelectedWords()">
        {{ song.lyrics }}
      </strong>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'Lyrics',
  computed: {
    ...mapState('song', ['song']),
  },
  methods: {
    ...mapMutations('form', ['setSelectedWords']),
    getSelectedWords() {
      this.setSelectedWords(window.getSelection().toString());
    },
  },
};
</script>

<style scoped lang="scss">
.lyrics {
  height: 70vh;
  white-space: pre-wrap;
  word-wrap: break-word;
  overflow-y: scroll;
}
</style>
