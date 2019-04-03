<template>
  <div id="top">
    <SongSearch></SongSearch>
    <SongList></SongList>
    <MultiModalView></MultiModalView>
  </div>
</template>

<script>
import SongSearch from '../components/SongSearch';
import SongList from '../components/SongList';
import MultiModalView from '../components/MultiModalView';

export default {
  name: 'top',
  components: {
    SongSearch,
    SongList,
    MultiModalView,
  },
};
</script>

<style></style>
