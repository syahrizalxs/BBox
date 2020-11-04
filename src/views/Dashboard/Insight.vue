<template>
  <div class="insight">
    <div class="_profile-highlight">
			<Heading />
			<div class="_bio">
				<Avatar class="avatar" :path="'https://freedesignfile.com/upload/2017/06/HD-picture-Female-face-photo.jpg'" />
				<div>
					<span class="name">{{authenticatedUser.fullName}}</span>
					<span class="job">{{authenticatedUser.jobField}}</span>
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
			<div class="_search-container">
        <Search />
      </div>
      <div class="_event-activity">
        <div class="_activity-tag">
          <div class="tag-main">
            <span>Event's Activity</span>
            <p>Track every activity you've made</p>
          </div>
          <div class="sort">
            <span>Latest</span>
            <img src="../../assets/icons/chevron-down.svg">
          </div>
        </div>
        <div v-for="(item, index) in eventList" :key="index">
          <CardActivity style="margin: 15px 0px;" />
        </div>
      </div>
    </div>
    <div class="_right-activity">
      <div class="_notification-slot">
        <Notification />
      </div>
      <div class="_event-information">
        <span>Event Information</span>
        <div class="_card-information">
          <div class="cleared">
            <img src="../../assets/icons/success-box.svg">
            <span class="desc">Event Cleared</span>
            <span class="total">10</span>
          </div>
          <div class="on-progress">
            <img src="../../assets/icons/pending-box.svg">
            <span class="desc">Event On Progress</span>
            <span class="total">121</span>
          </div>
          <div class="canceled">
            <img src="../../assets/icons/cancel-box.svg">
            <span class="desc">Event Canceled</span>
            <span class="total">1</span>
          </div>
        </div>
        <div class="_help-care">
          <span>About</span>
          <span>Help Center</span>
          <span>Privacy & Terms</span>
          <span>More</span>
        </div>
      </div>
      <div class="_powered-by">
        <img src="../../assets/iconplus-bbox.svg">
        <span>PT Indonesia Comnets Plus © 2020</span>
      </div>
    </div>
  </div>
</template>

<script>
import Avatar from '../../components/atoms/Avatar'
import Search from '../../components/atoms/Search'
import Heading from '../../components/Heading'
import CardActivity from '../../components/CardActivity'
import Notification from '../../components/Notification'

import { mapGetters } from 'vuex'

// import VueApexCharts from 'vue-apexcharts'
export default {
	name: 'insight',
	components: {
		Avatar,
		Search,
		Heading,
    CardActivity,
    Notification
		// VueApexCharts
	},
	data: () => ({
		eventList: [
			{ status: 'success', title: 'Partnership dengan Brightspace' },
			{ status: 'pending', title: 'Partnership dengan Google' },
			{ status: 'pending', title: 'Partnership dengan Facebook' },
			{ status: 'pending', title: 'Partnership dengan Tesla' }
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
  computed: mapGetters('auth', ['authenticatedUser']),
	methods: {
		test () {
			console.log('haha')
		}
	},
	created () {}
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
  position:fixed;
	display: flex;
	flex-direction: column;
	min-width: 309px;
	height: 100vh;
	left: 72px;
	top: -1px;
	padding-top: 27px;

	background-color: #F5F5F5;

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
  margin-left: 304px;
  display: flex;
  flex-direction: column;
  height: 100%;
  min-width: 55%;
	padding: 32px;

  ._search-container {
    // position: fixed;
    // min-width: 50% !important;
  }

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
          color: #0077B5;
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

      border: 1px solid #D9D9D9;
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
              color: #0077B5;
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

        background: #FFFFFF;
        border: 1px solid #E6E6E6;
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
  margin-right: 20px;
  
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
      background: #FFFFFF;
      border: 1px solid #D9D9D9;
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