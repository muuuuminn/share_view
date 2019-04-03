<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="isShow"
      :fullscreen="modalName == 'ModalForLyrics'"
      width="600"
      transition="dialog-bottom-transition"
    >
      <component v-if="isShow" :is="modalName"></component>
    </v-dialog>
  </div>
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
