<template>
  <v-app id="top">
    <v-container class="my-4">
      <v-layout row wrap>
        <v-flex text-xs-center>
          <SongSearch></SongSearch>
          <SongList></SongList>
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
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
