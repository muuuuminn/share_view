<template>
  <v-snackbar v-model="show" :color="color" right>
    {{ message }}
  </v-snackbar>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState('snackbar', ['show', 'message', 'color']),
  },
};
</script>
