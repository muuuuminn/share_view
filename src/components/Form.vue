<template>
  <v-card>
    <v-card-text>
      <v-form>
        <v-textarea v-model="selectedWords" label="選択中の歌詞" readonly></v-textarea>
        <v-textarea v-model="typedText" label="歌詞へのコメント" outline></v-textarea>
        <Loading v-if="isLoading"></Loading>
        <template v-else>
          <v-btn class="accent" @click="onSendForm()">投稿</v-btn>
          <v-btn @click="clearForm()">クリア</v-btn>
        </template>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import Loading from './Loading';

export default {
  components: { Loading },
  data: () => ({
    typedText: '',
  }),
  computed: {
    ...mapState('form', ['selectedWords']),
    ...mapState('song', ['song']),
    ...mapState({ isLoading: 'isLoading' }),
  },
  mounted() {
    this.clearSelectedWords();
    this.typedText = '';
  },
  methods: {
    ...mapActions('form', ['sendForm', 'clearSelectedWords']),
    onSendForm() {
      if (this.selectedWords && this.typedText) {
        const fromInfo = {
          selectedWords: this.selectedWords,
          typedText: this.typedText,
          song: this.song,
        };
        this.sendForm(fromInfo);
        this.clearSelectedWords();
        this.typedText = '';
      }
    },
    clearForm() {
      this.clearSelectedWords();
      this.typedText = '';
    },
  },
};
</script>

<style></style>
