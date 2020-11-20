<template>
  <nav class="sideNav">
    <a class="closeBtn"><img
      :src="isCollapsible ? require('../assets/sidebar/times.svg') : require('../assets/sidebar/hamburger.svg')"
      @click.prevent="collapsible()"
    ></a>
    <div class="links">
      <router-link to="/">
        <img
          class="__icon"
          :class="$route.name === 'Home' ? 'active' : ''"
          src="../assets/sidebar/home.svg"
        >
      </router-link>
      <router-link to="/archieve">
        <img
          class="__icon"
          :class="$route.name === 'Archieve' || $route.name === 'Detail Archieve' ? 'active' : ''"
          src="../assets/sidebar/archive.svg"
        >
      </router-link>
      <a href="#"><img
        class="__icon"
        src="../assets/sidebar/bookmark.svg"
      ></a>
      <a href="#"><img
        class="__icon"
        src="../assets/sidebar/message.svg"
      ></a>
    </div>
    <div class="bottom-links">
      <a href="#"><img src="../assets/sidebar/cog.svg"> <span @click="onLogout()">Logout</span></a>
      <div class="line" />
      <a href="#"><img src="../assets/sidebar/flag-id.svg"></a>
    </div>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'

export default {
	name: 'Sidebar',
	data: () => ({
		isCollapsible: false,
	}),
	methods: {
		...mapActions('auth', [
			'logout',
		]),
		onLogout() {
			this.logout()
		},
		collapsible() {
			this.isCollapsible = !this.isCollapsible
			document.querySelector('.sideNav').style.width = this.isCollapsible ? '300px' : '72px'
		},
	},
}
</script>

<style lang="scss" scoped>
.sideNav {
  height: 100vh;
  width: 72px;
	display: flex;
	flex-direction: column;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color:#0077B5;
  overflow-x: hidden;
  padding-top: 60px;
  transition: 0.5s;
	justify-content: center;
	.closeBtn {
		padding:  8px;
		position: absolute;
		margin-left: 16px;
		width: 100%;
		top: 0;
		font-size: 30px;
	}
	.links {
		margin-top: 0px;
		display: flex;
		flex-direction: column;
		height: 80%;
		a {
			margin-left: 16px;
			padding: 8px 8px 8px 8px;
			text-decoration: none;
			font-size: 25px;
			color: #ffff;
			display: inline-block;
			transition: 0.3s;
		}
	}
	.bottom-links {
		display: flex;
		flex-direction: column;
		a {
			margin-left: 16px;
			padding: 8px;
			display: flex;
			span {
				width: 100%;
				border-radius: 8px;
				text-align: center;
				padding: 5px;
				color: rgb(255, 255, 255);
				margin-left: 24px;
				font-size: 14px;
				letter-spacing: .7px;
				font-weight: bold;
				align-self: center;

				&:hover {
					background-color: #018eda;
					padding: 5px;
				}
			}
		}
		.line {
			width: 24px;
			height: 1px;
			margin: 18px 25px;
			background: #949494;
		}
	}
}

.active {
	background-color: #018eda;
	border-radius: 30%;
	padding: 6px;
	margin-left: -6px;
	transition: .4s;
}
</style>
