<template>
  <v-card flat class="container">
    <v-card-title>
      <h2>{{ song.full_title }}</h2>
    </v-card-title>
    <v-card-text class="lyrics">
      <strong>
        {{ song.lyrics }}
      </strong>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'Lyrics',
  computed: {
    ...mapState('song', ['song']),
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
