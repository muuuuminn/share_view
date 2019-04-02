<template>
  <div class="top">
    <SongSearch></SongSearch>
    <SongList></SongList>
  </div>
</template>

<script>
import SongSearch from '../components/SongSearch';
import SongList from '../components/SongList';

export default {
  name: 'top',
  components: {
    SongSearch,
    SongList,
  },
};
</script>

<style></style>
