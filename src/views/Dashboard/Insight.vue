<template>
  <div class="insight">
    <div class="_profile-highlight">
			<div class="heading">
				<img class="logo" src="../../assets/logo.svg">
				<img class="text" src="../../assets/bbox-text.svg">
			</div>
			<div class="bio">
				<Avatar class="avatar" :path="'https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg'" />
				<div>
					<span class="name">Jane Doe</span>
					<span class="job">UI/UX Designer</span>
				</div>
			</div>
		</div>
  </div>
</template>

<script>
import Avatar from '../../components/atoms/Avatar'

export default {
	name: 'insight',
	components: {
		Avatar
	}
}
</script>

<style lang="scss" scoped>
.insight {
	display: flex;
	height: 100%;
}
._profile-highlight {
	display: flex;
	flex-direction: column;
	min-width: 309px;
	height: 100%;
	left: 72px;
	top: -1px;

	background-color: #F5F5F5;

	.heading {
		margin-left: 32px;
		margin-top: 24px;
		.logo {
			width: 30px;
		}
		.text {
			margin-left: 10px;
			height: 34px;
			width: 74px;
		}
	}

	.bio {
		margin-top: 52px;
		display: flex;
		flex-direction: row;
		
		.avatar {
			margin-left: 32px;
		}
		div {
			display: flex;
			flex-direction: column;
			margin-left: 10px;
			
			.name {
				font-style: normal;
				font-weight: bold;
				font-size: 14px;
				line-height: 19px;
				letter-spacing: 0.01em;
			}

			.job {
				font-weight: 500;
				font-size: 10px;
				line-height: 13px;
				letter-spacing: 0.01em;

				/* Gray 3 */

				color: #828282;
			}
		}
	}
}
</style>