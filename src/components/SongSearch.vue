<template>
  <div class="songSearch">
    <h1>songSearch</h1>
    <el-form :model="form" ref="form">
      <el-form-item placeholder="キーワードを入力してください。">
        <el-input type="text" v-model="form.keywords"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="querySongs(form)">検索</el-button>
        <el-button @click="formClear()">クリア</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'SongSearch',
  props: {},
  data: function() {
    return { form: { keywords: '' } };
  },
  methods: {
    ...mapActions('song', ['querySongs']),
    formClear() {
      this.form.keywords = '';
    },
  },
};
</script>

<style scoped lang="scss"></style>
