<template>
  <div class="insight">
    <div class="_profile-highlight">
			<div class="heading">
				<img class="logo" src="../../assets/logo.svg">
				<img class="text" src="../../assets/bbox-text.svg">
			</div>
			<div class="_bio">
				<Avatar class="avatar" :path="'https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg'" />
				<div>
					<span class="name">Jane Doe</span>
					<span class="job">UI/UX Designer</span>
				</div>
			</div>
			<div class="_events">
				<div class="_event-tag">
					<span>Your Event</span>
					<a>See More</a>
				</div>
				<div class="_event-list">
					<div class="_event-item pointer" v-for="(item, index) in eventList" :key="index">
						<img class="_event-sign" :src="item.status === 'success' ? require('../../assets/icons/success-box.svg') : require('../../assets/icons/pending-box.svg')">
						<span>{{ item.title }}</span>
						<img class="_event-detail" src="../../assets/icons/chevron-right.svg">
					</div>
				</div>
			</div>
			<div class="_charts">
				<!-- <VueApexCharts class="_charts" width="500" type="line" :options="options" :series="series"></VueApexCharts> -->
			</div>
		</div>
    <div class="_main-home">
			<Search />
    </div>
  </div>
</template>

<script>
import Avatar from '../../components/atoms/Avatar'
import Search from '../../components/atoms/Search'
// import VueApexCharts from 'vue-apexcharts'
export default {
	name: 'insight',
	components: {
		Avatar,
		Search
		// VueApexCharts
	},
	data: () => ({
		eventList: [
			{ status: 'success', title: 'Partnership dengan Brightspace' },
			{ status: 'pending', title: 'Partnership dengan Google' },
			{ status: 'pending', title: 'Partnership dengan Facebook' }
		],
		options: {
			chart: {
				id: 'vuechart-example',
				toolbar: {
					show: false
				},
				height: '20px',
				width: '20px'
			},
			xaxis: {
				categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998]
			}
		},
		series: [{
			name: 'series-1',
			data: [30, 40, 45, 50, 49, 60, 70, 91]
		}]
	}),
	methods: {}
}
</script>

<style lang="scss" scoped>
.insight {
	display: flex;
	height: 100%;
}
._profile-highlight {
	padding: 0 32px 0 32px;
	display: flex;
	flex-direction: column;
	min-width: 309px;
	height: 100%;
	left: 72px;
	top: -1px;

	background-color: #F5F5F5;

	.heading {
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

	._bio {
		margin-top: 50px;
		display: flex;
		flex-direction: row;

		div {
			display: flex;
			flex-direction: column;
			margin-right: 10px;
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

	
	._events {
		margin-top: 38px;
		width: 100%;
		._event-tag {
		display: flex;
		justify-content: space-between;
		margin-bottom: 25px;
			span {
				font-weight: bold;
				font-size: 16px;
				line-height: 22px;
				/* identical to box height */
				letter-spacing: 0.01em;
				color: #333333;
			}
			a {
				font-weight: 500;
				font-size: 10px;
				line-height: 13px;
				text-align: right;
				letter-spacing: 0.01em;
				align-self: center;
				/* Blue 1 */

				color: #2F80ED;
			}
		}
		._event-list {
			display: flex;
			flex-direction: column;
			._event-item {
				display: flex;
				width: 100%;
				margin: 10px 0;
				justify-content: space-between;
				._event-sign {
					width: 21px;
					height: 21px;
					margin-right: 10px;
				}
				span {
					align-self: center;
					font-weight: 500;
					font-size: 12px;
					line-height: 16px;
					/* identical to box height */
					letter-spacing: 0.03em;
					color: #333333;
					margin-right: auto;
				}
				._event-detail {
					width: 21px;
					height: 21px;
					right: 0;
				}
			}
		}
	}

	._charts {
	}
}
._main-home {
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 606px;
	padding: 32px;
}
</style>