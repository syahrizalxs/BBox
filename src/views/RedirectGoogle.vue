<template>
	<div>Hello</div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'RedirectGoogle',
	async created() {
		this.$parent.$parent.isLoading = true
		await this.loginSSO({ code: this.$route.query.code })
		this.$parent.$parent.isLoading = false
	},
	methods: {
		...mapActions('auth', ['loginSSO'])
	}
}
</script>

<style lang="scss" scoped></style>
