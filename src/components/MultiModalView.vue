<template>
  <v-dialog
    v-model="isShow"
    :fullscreen="modalName == 'ModalForLyrics'"
    transition="dialog-bottom-transition"
    hide-overlay
  >
    <component v-if="isShow" :is="modalName"></component>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import ModalForLyrics from './ModalForLyrics';
export default {
  name: 'MultiModalView',
  components: { ModalForLyrics },
  computed: {
    ...mapState('modal', ['modalName']),
    isShow() {
      return this.modalName !== '';
    },
  },
};
</script>
