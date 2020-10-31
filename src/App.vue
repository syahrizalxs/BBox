<template>
  <v-app>
    <router-view />
  </v-app>
</template>

<script>

export default {
  name: 'App',

  components: {},

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  #app {
    font-family: Helvetica, sans-serif;
  }
  .pointer {
    cursor: pointer;
  }
</style>
