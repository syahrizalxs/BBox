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
    <div class="row">
      <div class="col-8 _activity">
        <div class="input-container">
          <input type="text" class="text" placeholder="Type here..">
          <img src="../../assets/icons/email.svg" aria-hidden="true">
        </div>
        <button class="_search">Search</button>
      </div>
      <div class="col-4 _information">
        <h4>hihi</h4>
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
._activity {
  padding: 10px 30px 10px 30px;
  
  .input-container {
    position: relative;
    padding:0;
    margin-top: 10px;
  
    input {
      width: 500px;
      height: 40px;
      padding-left: 50px;
      outline: none;
      margin: 0;

      border: none;
      border-radius: 5px;
      background-color: #eeeeee;
      box-sizing: border-box;
      font-size: 12px;
      letter-spacing: 0.01em;
    }
  
    img {
      position:absolute;
      top: 27%;
      left: 15px;
      width: 20px;
      height: 20px;
    }
  }

  ._search {
    width: 60px;
    height: 40px;

    background: #0077B5;
    border-radius: 5px;
    font-size: 12px;

    letter-spacing: 0.04em;
    color: #ffffff;
  }
}
._information {
  padding: 10px 30px 10px 30px;
}
</style>