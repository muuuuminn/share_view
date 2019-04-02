<template>
  <div class="lyrics">
    <h1>Lyrics</h1>
    <div class="container">
      {{ song.lyrics }}
    </div>
  </div>
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

<style scoped lang="scss"></style>
