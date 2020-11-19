<template>
  <div class="heading">
    <img
      class="logo"
      src="../assets/logo.svg"
    >
    <img
      class="text"
      src="../assets/bbox-text.svg"
    >
  </div>
</template>

<script>
export default {
  name: 'HeadingLogo',
}
</script>

<style lang="scss" scoped>
.heading {
  display: flex;
  .logo {
    width: 30px;
    height: 30px;
  }
  .text {
    margin-left: 10px;
    height: 34px;
    width: 74px;
  }
	}
</style>
