<template>
  <v-card width="40vw">
    <v-card-title class="secondary">
      投稿フォーム
    </v-card-title>
    <v-expansion-panel expand v-model="isExpand">
      <v-expansion-panel-content>
        <template v-slot:header>
          {{ expandMessage }}
        </template>
        <v-card-text>
          <v-form>
            <v-textarea v-model="selectedWords" label="選択中の歌詞" readonly></v-textarea>
            <v-textarea v-model="typedText" label="歌詞へのコメント" outline></v-textarea>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn class="accent" @click="sendForm({ selectedWords, typedText, song })">投稿</v-btn>
          <v-spacer></v-spacer>
          <v-btn>クリア</v-btn>
        </v-card-actions>
      </v-expansion-panel-content>
    </v-expansion-panel>
  </v-card>
</template>

<script>
import { mapState, mapActions } from 'vuex';
export default {
  data: () => ({
    typedText: '',
    isExpand: [false],
  }),
  computed: {
    ...mapState('form', ['selectedWords']),
    ...mapState('song', ['song']),
    expandMessage() {
      return this.isExpand[0] ? '閉じる' : '開く';
    },
  },
  methods: {
    ...mapActions('form', ['sendForm']),
  },
};
</script>

<style>
.selectedWords {
  white-space: pre-wrap;
  word-wrap: break-word;
}
</style>
