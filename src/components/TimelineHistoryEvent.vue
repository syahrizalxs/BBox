<template>
	<div class="wrapper-timeline">
		<section class="_timeline-history-container">
			<div
				v-for="(item, index) in data"
				:key="index"
				class="_timeline-history-content"
			>
				<div class="_timeline-history-content-left">
					<img
						class="_timeline-history-content-left-symbol"
						:src="
							index % 2 !== 0
								? require('../assets/icons/timeline/blue.svg')
								: require('../assets/icons/timeline/orange-circle.svg')
						"
						alt=""
					/>
					<div
						v-if="index + 1 - data.length !== 0"
						class="_timeline-history-content-left-vertical-line"
						style="margin-top: 10px"
					/>
				</div>
				<div class="_timeline-history-content-right">
					<div class="_timeline-history-content-right-user-activity">
						<span class="user-name">Status </span>
						<span class="activity">event </span>
						<span class="process-type">{{ item.status }} </span>
					</div>
					<div class="_timeline-history-content-right-document-activity">
						<span class="document-type">Tanggal</span>
						<span class="small-circle">&nbsp;</span>
						<span class="document-time">{{
							item.createdDate | convertDate
						}}</span>
					</div>
					<div
						class="_timeline-history-content-right-document-activity"
						v-if="
							item.status === 'REJECTED_MANAGER' ||
							item.status === 'REJECTED_VP' ||
							item.status === 'REJECTED_DIREKSI' ||
							item.status === 'DISAPPROVED_MANAGER' ||
							item.status === 'DISAPPROVED_VP' ||
							item.status === 'DISAPPROVED_DIREKSI'
						"
					>
						<span class="document-type" style="color: red">Alasan</span>
						<span class="small-circle">&nbsp;</span>
						<span class="document-time">{{ item.description }}</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script>
import { convertDate } from '../commons/utils/filter'

export default {
	name: 'TimelIneHistory',
	filters: {
		convertDate
	},
	props: ['data']
}
</script>

<style lang="scss" scoped>
._timeline-history-container {
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	._timeline-history-activity-time {
		font-weight: bold;
		font-size: 24px;
		line-height: 33px;
		margin-top: 20px;

		letter-spacing: 0.01em;

		color: #333333;
	}

	._timeline-history-content {
		min-height: 80px;
		margin-left: 18px;
		display: flex;
		._timeline-history-content-left {
			width: 22px;
			min-height: 100% !important;
			// padding: 10px;
			display: flex;
			flex-direction: column;
			._timeline-history-content-left-vertical-line {
				width: 1px;
				height: 100%;
				border-bottom: 1px;
				border: 1px solid #c4c4c4;
				margin: 0 auto;
				margin-bottom: 10px !important;
			}
		}

		._timeline-history-content-right {
			margin-left: 24px;
			height: 100%;
			width: 100%;
			._timeline-history-content-right-user-activity {
				margin-bottom: 5px;
			}
		}
	}

	.user-name {
		font-weight: bold;
		font-size: 12px;
		line-height: 16px;
		letter-spacing: 0.01em;

		color: #333333;
		margin-right: 4px;
	}

	.activity {
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		/* identical to box height */

		letter-spacing: 0.01em;

		/* Gray 3 */

		color: #828282;
		margin-right: 4px;
	}
	.process-type {
		font-style: normal;
		font-weight: 500;
		font-size: 12px;
		line-height: 16px;
		/* identical to box height */

		letter-spacing: 0.01em;

		/* Blue 2 */

		color: #2d9cdb;
	}

	.document-type {
		font-weight: bold;
		font-size: 10px;
		line-height: 14px;
		/* identical to box height */

		letter-spacing: 0.01em;

		/* Orange */

		color: #f2994a;
		margin-right: 5px;
	}

	.small-circle {
		display: inline-block;
		min-height: 5px;
		background-color: #c4c4c4;
		border-radius: 50%;
		min-width: 5px;
		margin-right: 5px;
	}

	.document-time {
		font-weight: 500;
		font-size: 10px;
		line-height: 13px;
		letter-spacing: 0.01em;

		/* Gray 3 */

		color: #828282;
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
}
</style>
