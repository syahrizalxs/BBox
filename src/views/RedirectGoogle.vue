<template>
  <div></div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Redirect-google',
  async created () {
    console.log(this)
    this.$parent.$parent.isLoading = true
    await this.loginSSO({ code: this.$route.query.code })
    this.$parent.$parent.isLoading = false
  },
  methods: {
    ...mapActions('auth', [
      'loginSSO'
    ])
  }
}
</script>

<style lang="scss" scoped>

</style>