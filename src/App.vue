<template>
  <v-app id="app">
    <router-view></router-view>
    <MultiModalView></MultiModalView>
  </v-app>
</template>

<script>
import MultiModalView from './components/MultiModalView';

export default {
  name: 'app',
  components: {
    MultiModalView,
  },
};
</script>

<style></style>
