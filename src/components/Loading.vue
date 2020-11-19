<template>
  <div class="wrapper">
    <section class="loading">
      <div class="circle-wrapper">
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
        <div class="circle" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'Loading',
}
</script>

<style lang="scss" scoped>
.wrapper {
	position: fixed;
  overflow: hidden;
	width: 100%;
  min-height: 100vh;
	background-color: rgba($color: #000000, $alpha: 0.4);
  z-index: 3;
}
.loading {
  display: flex;
	margin: 0 auto;
	top: 50%;
  position: absolute;
	width: 100%;
}
.circle-wrapper {
	position: relative;
	width: 300px;
	height: 300px;
	display: flex;
	left: 50%;
	top: 50%;
	transform: translateY(-50%);
}
.circle {
	position: relative;
  width: 10px;
  height: 10px;
  background-color: white;
  border-radius: 50%;
	top: 50%;
	transform: translateY(-50%);
  margin: 3px;
  animation: jump 0.5s ease-in infinite;
}
.circle:nth-of-type(1) {
  background-color: #0077B5;
}
.circle:nth-of-type(2) {
  animation-delay: 0.1s;
  background-color: #0077B5;
}
.circle:nth-of-type(3) {
  animation-delay: 0.2s;
  background-color: #0077B5;
}
.circle:nth-of-type(4) {
  animation-delay: 0.3s;
  background-color: #0077B5;
}
@keyframes jump {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}
</style>
