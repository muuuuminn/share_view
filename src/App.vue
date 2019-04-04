<template>
  <v-app id="app">
    <Navigation></Navigation>
    <router-view></router-view>
    <MultiModalView></MultiModalView>
  </v-app>
</template>

<script>
import MultiModalView from './components/MultiModalView';
import Navigation from './components/Navigation';

export default {
  name: 'app',
  components: {
    MultiModalView,
    Navigation,
  },
};
</script>

<style></style>
