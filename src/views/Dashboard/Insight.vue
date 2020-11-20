<template>
  <div class="insight">
    <div class="_profile-highlight">
      <Heading />
      <div class="_bio">
        <Avatar
          class="avatar"
          :path="
            authenticatedUser.avatar ||
              'https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg'
          "
        />
        <div>
          <span class="name">{{ authenticatedUser.fullName }}</span>
          <span
            class="job"
          >{{ authenticatedUser.role }} -
            {{ authenticatedUser.division }}</span>
        </div>
      </div>
    </div>
    <div class="_main-home">
      <div class="_charts">
        <AreaChart
          v-if="dataChart && dataChart.length"
          :width="250"
          :height="230"
          :data="dataChart"
          :label="labelChart"
        />
      </div>
    </div>
    <!-- <div class="_right-activity">
    </div> -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Avatar from '../../components/atoms/Avatar'
import Heading from '../../components/Heading'
import AreaChart from '../../components/Chart'

// Service
import EventService from '../../service/EventService'

const eventService = EventService.build()

export default {
	name: 'Insight',
	components: {
		Avatar,
		Heading,
		AreaChart,
	},
	data: () => ({
		eventList: [
			{ status: 'success', title: 'Partnership dengan Brightspace' },
			{ status: 'pending', title: 'Partnership dengan Google' },
			{ status: 'pending', title: 'Partnership dengan Facebook' },
			{ status: 'pending', title: 'Partnership dengan Tesla' },
		],
		dataChart: [],
		labelChart: [],

		isRequester: false,
		isManager: false,
		isVP: false,
		isDirectors: false,
	}),
	computed: mapGetters('auth', ['authenticatedUser']),
	created() {
		this.getRole()
		this.getChart()
	},
	methods: {
		async getChart() {
			const res = await eventService.getSummary()
			res.data.forEach((item) => {
				this.dataChart.push(item.value)
				this.labelChart.push(item.label)
			})
		},
		getRole() {
			const dataUser = JSON.parse(localStorage.getItem('user_detail'))
			const { role } = dataUser
			if (role === 'CLIENT') {
				this.isRequester = true
			} else if (role === 'MANAGER') {
				this.isManager = true
			} else if (role === 'VP') {
				this.isVP = true
			} else if (role === 'DIREKSI') {
				this.isDirectors = true
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.insight {
	display: flex;
	height: 100%;
	width: 100%;
}

._profile-highlight {
	padding: 0 32px 0 32px;
	position: fixed;
	display: flex;
	flex-direction: column;
	min-width: 309px;
	height: 100vh;
	left: 72px;
	top: -1px;
	padding-top: 27px;

	background-color: #f5f5f5;

	._bio {
		margin-top: 30px;
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

				color: #2f80ed;
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
		max-height: 100%;
		padding: 3px;
		max-width: 254px;
		background-color: rgba(255, 255, 255, 0.411);
		border-radius: 7px;
	}
}

._main-home {
	margin-left: 304px;
	display: flex;
	flex-direction: column;
	height: 100%;
	min-width: 55%;
	padding: 32px;

	._event-activity {
		margin-top: 40px;
		width: 100%;

		._activity-tag {
			display: flex;
			margin-bottom: 16px;

			.tag-main {
				display: flex;
				flex-direction: column;
				width: 50%;

				span {
					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 16px;
					line-height: 22px;
					letter-spacing: 0.01em;
					color: #333333;
				}

				p {
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 10px;
					line-height: 13px;
					letter-spacing: 0.01em;
					color: #828282;
				}
			}

			.sort {
				display: flex;
				width: 50%;
				align-items: center;

				span {
					margin-left: auto;
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 12px;
					line-height: 16px;
					text-align: right;
					letter-spacing: 0.01em;
					color: #0077b5;
				}

				img {
					margin: 0px 12px 0px 12px;
				}
			}
		}

		._card {
			width: 100%;
			height: 256px;
			padding: 16px 24px 0px 24px;

			border: 1px solid #d9d9d9;
			box-sizing: border-box;
			border-radius: 5px;

			._head {
				display: flex;
				flex-direction: row;

				.avatar {
					width: 32px;
					height: 32px;
					border-radius: 31px;
					background-size: cover;
					margin-right: 8px;
				}

				div {
					display: flex;
					flex-direction: column;
					// margin-right: 8px;

					.activity {
						.name {
							font-family: Helvetica;
							font-style: normal;
							font-weight: bold;
							font-size: 12px;
							line-height: 16px;
							letter-spacing: 0.01em;
							color: #333333;
						}

						.doing {
							font-family: Helvetica;
							font-style: normal;
							font-weight: 500;
							font-size: 12px;
							line-height: 16px;
							letter-spacing: 0.01em;
							color: #828282;
						}

						.partner {
							font-family: Helvetica;
							font-style: normal;
							font-weight: 500;
							font-size: 12px;
							line-height: 16px;
							letter-spacing: 0.01em;
							color: #0077b5;
						}
					}

					.date {
						font-family: Helvetica;
						font-style: normal;
						font-weight: 500;
						font-size: 10px;
						line-height: 13px;
						letter-spacing: 0.01em;
						color: #828282;
					}
				}

				.more {
					margin-left: auto;
				}
			}

			._main-card {
				display: flex;
				flex-direction: column;
				margin-top: 16px;

				.tittle {
					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 12px;
					line-height: 16px;
					letter-spacing: 0.01em;
					color: #333333;
					margin-bottom: 4px;
				}

				.desc {
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 12px;
					line-height: 16px;
					letter-spacing: 0.01em;
					color: #333333;
				}
			}

			._box-doc {
				width: 100%;
				height: 48px;
				margin-top: 16px;

				background: #ffffff;
				border: 1px solid #e6e6e6;
				box-sizing: border-box;
				box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
				border-radius: 5px;

				div {
					display: flex;
					flex-direction: row;
					margin-left: 16px;
					margin-top: 12px;

					.icon-file {
						margin-right: 8px;
					}

					.nama-file {
						font-family: Helvetica;
						font-style: normal;
						font-weight: 500;
						font-size: 12px;
						line-height: 16px;
						letter-spacing: 0.01em;
						color: #333333;
						margin-top: 4px;
					}

					.more {
						margin-left: auto;
						margin-right: 22px;
					}
				}
			}

			._keterangan {
				display: flex;
				flex-direction: row;
				justify-content: space-between;
				margin-top: 20px;

				.category {
					display: flex;
					flex-direction: column;

					span {
						font-family: Helvetica;
						font-style: normal;
						font-weight: bold;
						font-size: 12px;
						line-height: 16px;
						letter-spacing: 0.01em;
						color: #333333;
					}

					p {
						margin-top: 5px;
						font-family: Helvetica;
						font-style: normal;
						font-weight: 500;
						font-size: 12px;
						line-height: 16px;
						letter-spacing: 0.01em;
						color: #333333;
					}
				}

				.expired {
					display: flex;
					flex-direction: column;

					span {
						font-family: Helvetica;
						font-style: normal;
						font-weight: bold;
						font-size: 12px;
						line-height: 16px;
						text-align: right;
						letter-spacing: 0.01em;
						color: #333333;
					}

					p {
						margin-top: 5px;
						font-family: Helvetica;
						font-style: normal;
						font-weight: 500;
						font-size: 12px;
						line-height: 16px;
						text-align: right;
						letter-spacing: 0.01em;
						color: #333333;
					}
				}
			}
		}
	}
}

._right-activity {
	height: 100%;
	position: fixed;
	right: 0;
	top: 0;
	margin-right: 50px;

	._notification-slot {
		width: 100%;
		margin-top: 25px;
		padding: 20px;
	}

	._event-information {
		display: flex;
		margin-top: 45px;
		flex-direction: column;

		span {
			font-family: Helvetica;
			font-style: normal;
			font-weight: bold;
			font-size: 16px;
			line-height: 22px;
			letter-spacing: 0.01em;
			color: #333333;
		}

		._card-information {
			position: absolute;
			width: 250px;
			height: 170px;
			margin: inherit;
			background: #ffffff;
			border: 1px solid #d9d9d9;
			box-sizing: border-box;
			border-radius: 5px;

			.cleared {
				display: flex;
				flex-direction: row;
				margin: 24px 0px 0px 24px;

				img {
					margin-right: 16px;
				}

				.desc {
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 21px;
					letter-spacing: 0.01em;
					color: #333333;
				}

				.total {
					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 16px;
					line-height: 22px;
					text-align: right;
					letter-spacing: 0.01em;
					color: #333333;
					margin: auto;
				}
			}

			.on-progress {
				display: flex;
				flex-direction: row;
				margin: 24px 0px 0px 24px;

				img {
					margin-right: 16px;
				}

				.desc {
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 21px;
					letter-spacing: 0.01em;
					color: #333333;
				}

				.total {
					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 16px;
					line-height: 22px;
					text-align: right;
					letter-spacing: 0.01em;
					color: #333333;
					margin: auto;
				}
			}

			.canceled {
				display: flex;
				flex-direction: row;
				margin: 24px 0px 0px 24px;

				img {
					margin-right: 16px;
					width: 21px;
					height: 22px;
				}

				.desc {
					font-family: Helvetica;
					font-style: normal;
					font-weight: 500;
					font-size: 16px;
					line-height: 21px;
					letter-spacing: 0.01em;
					color: #333333;
				}

				.total {
					font-family: Helvetica;
					font-style: normal;
					font-weight: bold;
					font-size: 16px;
					line-height: 22px;
					text-align: right;
					letter-spacing: 0.01em;
					color: #333333;
					margin: auto;
				}
			}
		}

		._help-care {
			display: flex;
			justify-content: space-between;
			margin-top: 210px;

			span {
				font-family: Helvetica;
				font-style: normal;
				font-weight: 500;
				font-size: 12px;
				line-height: 16px;
				letter-spacing: 0.01em;
				color: #333333;
			}
		}
	}

	._powered-by {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin-top: 25px;

		span {
			font-family: Helvetica;
			font-style: normal;
			font-weight: 500;
			font-size: 12px;
			line-height: 16px;
			letter-spacing: 0.01em;
			color: #333333;
			margin-top: 8px;
		}
	}
}
</style>
