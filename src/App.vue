<template>
  <v-app id="app">
    <v-content>
      <Navigation></Navigation>
      <router-view></router-view>
      <MultiModalView></MultiModalView>
      <Snackbar></Snackbar>
    </v-content>
  </v-app>
</template>

<script>
import MultiModalView from './components/MultiModalView';
import Navigation from './components/Navigation';
import Snackbar from './components/Snackbar';

export default {
  name: 'app',
  components: {
    MultiModalView,
    Navigation,
    Snackbar,
  },
};
</script>

<style></style>
