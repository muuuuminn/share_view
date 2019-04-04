<template>
  <v-app id="top" v-if="isLoggedin">
    <SongSearch></SongSearch>
    <SongList></SongList>
  </v-app>
  <v-app v-else>Not Login</v-app>
</template>

<script>
import { mapState } from 'vuex';
import SongSearch from '../components/SongSearch';
import SongList from '../components/SongList';

export default {
  name: 'top',
  components: {
    SongSearch,
    SongList,
  },
  computed: {
    ...mapState('auth', ['isLoggedin']),
  },
};
</script>

<style></style>
