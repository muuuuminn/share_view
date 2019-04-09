<template>
  <v-dialog
    v-model="isShow"
    :fullscreen="isFullscreen"
    transition="dialog-bottom-transition"
    hide-overlay
  >
    <component v-if="isShow" :is="modalName"></component>
  </v-dialog>
</template>

<script>
import { mapState } from 'vuex';
import ModalForLyrics from './ModalForLyrics';
import ModalForUser from './ModalForUser';
export default {
  name: 'MultiModalView',
  components: { ModalForLyrics, ModalForUser },
  computed: {
    ...mapState('modal', ['modalName', 'isFullscreen']),
    isShow() {
      return this.modalName !== '';
    },
  },
};
</script>
