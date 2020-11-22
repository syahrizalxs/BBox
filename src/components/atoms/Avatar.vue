<template>
  <div class="avatar">
    <img :src="path">
  </div>
</template>

<script>
export default {
	name: 'Avatar',
	props: ['path'],
}
</script>

<style lang="scss" scoped>
.avatar {
	img {
		width: 37px;
		height: 37px;
		border-radius: 50%;
		background-size: cover;
		object-fit: cover;
		cursor: pointer;
	}
}
</style>
