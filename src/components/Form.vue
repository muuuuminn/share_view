<template>
  <v-card>
    <template v-if="isLoggedin">
      <v-card-text>
        <v-form>
          <v-textarea
            v-model="selectedWords"
            label="選択中の歌詞"
            readonly
            placeholder="表示されている歌詞を選択すると自動的にかきこまれます！"
          ></v-textarea>
          <v-textarea
            v-model="typedText"
            label="歌詞へのコメント"
            outline
            placeholder="歌詞に対する感想・考察かきましょう！"
          ></v-textarea>
          <Loading v-if="isLoading"></Loading>
          <template v-else>
            <v-btn class="accent" @click="onSendForm()">投稿</v-btn>
            <v-btn @click="clearForm()">クリア</v-btn>
          </template>
        </v-form>
      </v-card-text>
    </template>
    <template v-else>
      <v-card-title>投稿するにはログインする必要があります。</v-card-title>
      <v-card-actions>
        <v-btn class="primary" @click="login()">ログイン</v-btn>
      </v-card-actions>
    </template>
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
    ...mapState('auth', ['isLoggedin']),
    ...mapState({ isLoading: 'isLoading' }),
  },
  mounted() {
    this.clearSelectedWords();
    this.typedText = '';
  },
  methods: {
    ...mapActions('form', ['sendForm', 'clearSelectedWords']),
    ...mapActions('auth', ['login']),
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
