<template>
  <div class="detail">
    <h1>Detail</h1>
    <Lyrics></Lyrics>
    <Timeline></Timeline>
  </div>
</template>

<script>
import Lyrics from '../components/Lyrics';
import Timeline from '../components/Timeline';
export default {
  name: 'detail',
  components: {
    Lyrics,
    Timeline,
  },
};
</script>

<style></style>
