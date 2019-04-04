<template>
  <strong class="selectedWords">
    {{ selectedWords }}
  </strong>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState('form', ['selectedWords']),
  },
};
</script>

<style>
.selectedWords {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
