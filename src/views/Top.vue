<template>
  <v-app id="top" v-if="isLoggedin">
    <v-container class="my-4">
      <v-layout row wrap>
        <v-flex text-xs-center>
          <SongSearch></SongSearch>
          <SongList></SongList>
        </v-flex>
      </v-layout>
    </v-container>
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
