<template>
  <div id="login">
		<div class="_left">
			<div class="content">
				<div class="logo-content">
					<img src="../assets/logo.svg" style="width: 24px;">
					<span>BBOX</span>
				</div>
				<div class="tagline">
					<span>All documents are stored and monitored on the screen</span>
				</div>
				<div class="action">
					<button><span> More About Us </span></button>
				</div>
				<div class="line-group">
					<div class="line"></div>
					<img class="twitter-logo" src="../assets/icons/twitter.svg">
					<img class="facebook-logo" src="../assets/icons/facebook.svg">
				</div>
			</div>
		</div>
		<div class="_right">
			<div class="form">
				<div class="headline">
					<img src="../assets/logo.svg">
					<img src="../assets/bbox-text.svg">
				</div>
				<div class="form-input">
					<span>Sign in to your Account</span>
					<div class="input-container">
						<input type="email" class="email" placeholder="Your Email">
						<img src="../assets/icons/email.svg" aria-hidden="true">
					</div>
					<div class="input-container" style="margin-top: 24px">
						<input :type="isShownPassword ? 'text' : 'password'" class="password" placeholder="Your Password">
						<img src="../assets/icons/password.svg">
						<img class="eye" src="../assets/icons/eye.svg" @click="isShownPassword = !isShownPassword">
					</div>
					<button @click.prevent="login">SIGN IN</button>
					<span class="atau">ATAU</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Login',
	data: () => ({
		email: '',
		password: '',
		isShownPassword: false
	}),
	methods: {
		login () {
			this.$router.push('/')
		}
	}
}
</script>

<style lang="scss" scoped>
#login {
	width: 100vw;
	height: 100vh;
	display: flex;
}
._left {
  background-image: url("../assets/banner-login.png");
	background-size: cover;
	min-height: 100vh !important;
	min-width: 784px;
	z-index: 1;
	&:before {
		content: '';
		position: absolute;
		min-width: 784px;
		height: 100vh;
    top:0;
    left: 0;
    bottom: 0;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.82) 0%, rgba(255, 255, 255, 0) 65.17%);
		z-index: -1;
	}

	.content {
		width: 100%;

		.logo-content {
			padding: 10px;
			display: flex;
			margin-top: 334px !important;
				img {
					align-items: center;
					margin-left: 63px;
					width: 24px;
					height: 33px;
					left: 63px;
					top: 448px;
				}
				span {
					margin-left: 11px;
					width: 72px;
					height: 33px;
					left: 98px;
					top: 444px;

					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 24px;
					line-height: 33px;

					letter-spacing: 0.04em;

					color: #FFFFFF;
				}
		}

		.tagline {
			margin-top: 8px;
			margin-left: 63px;
			width: 521px;
			height: 88px;
			left: 63px;
			top: 485px;

			font-family: Helvetica;
			font-style: normal;
			font-weight: bold;
			font-size: 32px;
			line-height: 44px;
			color: #ffffff;
		}

		.action {
			margin-top: 20px;
			margin-left: 63px;
			button {
				width: 236px;
				height: 58px;
				left: 63px;
				top: 593px;

				background: #0077B5;
				border-radius: 5px;
				font-weight: 500;
				font-size: 18px;
				line-height: 24px;
				/* identical to box height */

				letter-spacing: 0.04em;
				color: #ffffff;
			}
		}

		.line-group {
			width: 100%;
			display: flex;
			margin-top: 40px;
			.line {
				width: 364px;
				height: 1px;
				left: 63px;
				top: 691px;
				background: #C4C4C4;
				margin-left: 63px;
				margin-top: 6px;
			}
			
			.twitter-logo {
				margin-left: 15.69px;
			}

			.facebook-logo {
				margin-left: 9.69px;
			}
		}
	}
}
._right {
	height: 100%;
	width: 100%;
	display: flex;
	.form {
		width: 100%;
		.headline {
			display: flex;
			justify-content: center;
			margin-top: 64px;
			width: 100%;
		}
		img {
			margin-left: 20px;
		}
	}
	.form-input {
		margin-top: 52px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		span {
			width: 271px;
			height: 33px;
			left: 940px;
			top: 182px;

			margin-bottom: 35px;

			font-family: Helvetica;
			font-style: normal;
			font-weight: bold;
			font-size: 24px;
			line-height: 33px;
			/* identical to box height */

			text-align: center;

			color: #333333;
		}

		.input-container {
			position: relative;
			padding:0;
			margin:0;
			input {
				width: 368px;
				height: 48px;
				padding-left: 40px;
				outline: none;
				margin: 0;

				border: 1px solid #828282;
				box-sizing: border-box;
				border-radius: 5px;
				font-size: 12px;
				letter-spacing: 0.01em;
			}
			img {
				position:absolute;
				top: 34%;
				left: -5px;
				width: 15px;
				height:15px;
			}

			.eye {
				right: 0 !important;
				left: 87% !important;
				cursor: pointer;
			}
		}
		
		button {
			margin-top: 24px;
			width: 368px;
			height: 48px;
			left: 891px;
			top: 394px;
			background: #0077B5;
			border-radius: 5px;

			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			line-height: 22px;
			/* identical to box height */

			text-align: center;
			letter-spacing: 0.05em;

			color: #FBFBFB;
		}
		.atau {
			margin-top: 40px;
			font-weight: 600;
			font-size: 12px;
			line-height: 16px;
			/* identical to box height */

			text-align: center;
			letter-spacing: 0.01em;

			/* Gray 1 */

			color: #333333;
		}
	}
}

</style>