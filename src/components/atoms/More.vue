<template>
  <div class="_dropdown">
    <img
      class="pointer"
      src="../../assets/icons/more.svg"
      @click="showDropdown()"
    >
    <div class="_dropdown-content">
      <div
        v-for="(item, index) in options"
        :key="index"
      >
        <span @click="callback(item.function)">{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
	name: 'More',
	props: ['options'],
	methods: {
		callback(e) {
			this.$emit('click', e)
		},
	},
}
</script>

<style lang="scss" scoped>
._dropdown {
    position: relative;
    display: flex;
    &:hover ._dropdown-content {
      display: flex;
    }
    ._dropdown-content {
      display: none;
      flex-direction: column;
      position: absolute;
      margin-left: 20px;
      background-color: #f1f1f1;
      min-width: 130px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      div {
        span {
          color:#535151;
          font-size: 12px;
          padding: 12px 16px;
          text-decoration: none;
          display: block;
          &:hover {
            background-color: rgb(224, 224, 224);
          }
        }
      }
    }
  }
</style>
