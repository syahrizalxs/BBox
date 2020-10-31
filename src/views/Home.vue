<template>
  <v-app id="inspire">
    <v-app-bar
      app
      clipped-right
      flat
      height="72"
    >
      <v-spacer></v-spacer>

      <v-responsive max-width="156">
        <v-text-field
          dense
          flat
          hide-details
          rounded
          solo-inverted
        ></v-text-field>
      </v-responsive>
    </v-app-bar>
      <v-navigation-drawer
        v-model="drawer"
        absolute
        app
        color="primary"
        mini-variant
      >
        <v-avatar
          class="d-block text-center mx-auto mt-4 pointer"
          color="transparent"
          size="36"
        >
        <img src="../assets/icons/hamburger.svg" style="max-width: 20px;" alt="">
        </v-avatar>

        <v-divider class="mx-3 my-5"></v-divider>

        <v-avatar
          v-for="n in 6"
          :key="n"
          class="d-block text-center mx-auto mb-9"
          color="grey lighten-1"
          size="28"
        ></v-avatar>
      </v-navigation-drawer>
    <v-main>
      <!--  -->
    </v-main>
  </v-app>
</template>

<script>
  export default {
    name: 'Home',
    components: {},
    data: () => ({ drawer: null }),
  }
</script>

<style lang="scss">

</style>
