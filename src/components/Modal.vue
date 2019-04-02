<template>
  <div class="modal">
    <el-dialog title="Modal" :visible.sync="isVisible">
      <h1>Modal</h1>
      <div class="container">
        <Lyrics></Lyrics>
        <Timeline></Timeline>
      </div>
      <span slot="footer" class="">
        <el-button>Close</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import Timeline from './Timeline';
import Lyrics from './Lyrics';

export default {
  name: 'Modal',
  components: { Timeline, Lyrics },
  props: ['isVisible'],
};
</script>

<style scoped lang="scss"></style>
