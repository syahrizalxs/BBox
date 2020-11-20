<template>
  <v-app>
    <Loading
      v-if="isLoading"
      ref="loader"
    />
    <router-view />
  </v-app>
</template>

<script>
import Loading from './components/Loading'

export default {
	name: 'App',

	components: {
		Loading,
	},

	data: () => ({
		isLoading: false,
	}),
}
</script>

<style lang="scss">
@import url('./assets/style/base.scss');
  #app {
    font-family: Helvetica, sans-serif !important;
  }
  .pointer {
    cursor: pointer;
  }
</style>
