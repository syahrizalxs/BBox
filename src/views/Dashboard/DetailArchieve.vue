<template>
	<div class="archieve">
		<div class="_left">
			<div class="_left-heading">
				<Heading style="margin-right: 200px" />
			</div>
			<div class="_tittle">
				<span>Event : {{ event.title }}</span>
			</div>
			<div class="_button">
				<div></div>
				<div class="_btn-right">
					<Button
            v-if="isStaff"
						title="Tambah Proses"
						style="margin-left: 16px; width: 132px; height: 39px"
						type="primary"
						@click="addData()"
					>
						<template slot="icon">
							<img src="../../assets/icons/button/plus-white.svg" />
						</template>
					</Button>
				</div>
			</div>
			<div style="overflow-y: auto; margin-top: 16px">
				<table class="styled-table">
					<thead>
						<tr>
							<th style="text-align: left">Process Name</th>
							<th style="text-align: left">Type</th>
              <th style="text-align: left">Status</th>
							<th style="text-align: left">Last Update</th>
							<th />
						</tr>
					</thead>
					<tbody>
            <tr v-for="(item, index) in listProcess" :key="index">
              <td>{{ item.name }}</td>
              <td><span :class="item.type === 'MAIN'? 'label-table-main-process' : 'label-table-sub-process'">{{ item.type === 'MAIN'? 'Main Process' : 'Sub Process' }}</span></td>
              <td>{{ item.status }}</td>
              <td>{{ item.modifiedDate | convertDate }}</td>
              <td><img @click="editData(item)" src="../../assets/icons/more.svg" /></td>
              <!-- <td><More :options="action"/></td> -->
            </tr>
					</tbody>
				</table>
			</div>
		</div>
		<div class="_right" style="overflow-y: auto">
			<div class="_detail-event">
				<h2 style="margin-bottom: 40px">Detail Event</h2>

				<span class="parent">Judul</span>
				<span class="child">{{ event.title || '-' }}</span>

				<span class="parent">Tanggal dibuat</span>
				<span class="child">{{ event.createdDate | convertDate }}</span>

				<span class="parent">Terakhir diubah</span>
				<span class="child">{{ event.modifiedDate | convertDate }}</span>

				<span class="parent">Status</span>
				<span v-if="event.currentStatus" class="child">{{
					event.currentStatus | convertStatus
				}}</span>
				<span v-if="!event.currentStatus" class="child">-</span>

				<span class="parent">File Business Plan</span>
				<span v-if="event.businessPlanDoc" class="child">
					<a
						:href="event.businessPlanDoc.url"
						v-text="event.businessPlanDoc.name"
					/>
				</span>
				<span v-if="!event.businessPlanDoc" class="child">-</span>

				<span class="parent">File Financial Model</span>
				<span v-if="event.financialModelDoc" class="child">
					<a
						:href="event.financialModelDoc.url"
						v-text="event.financialModelDoc.name"
					/>
				</span>
				<span v-if="!event.financialModelDoc" class="child">-</span>

				<span class="parent">File Kajian Legal</span>
				<span v-if="event.kajianLegalDoc" class="child">
					<a
						:href="event.kajianLegalDoc.url"
						v-text="event.kajianLegalDoc.name"
					/>
				</span>
				<span v-if="!event.kajianLegalDoc" class="child">-</span>

				<span class="parent">File Kajian Resiko</span>
				<span v-if="event.kajianResikoDoc" class="child">
					<a
						:href="event.kajianResikoDoc.url"
						v-text="event.kajianResikoDoc.name"
					/>
				</span>
				<span v-if="!event.kajianResikoDoc" class="child">-</span>

				<span class="parent">File Lampiran Dokumen</span>
				<span
					v-for="(item, index) in event.additionalDocs"
					:key="index"
					class="child"
				>
					<a :href="item.url" v-text="item.name" />
				</span>
				<span
					v-if="!event.additionalDocs || event.additionalDocs.length === 0"
					class="child"
					>-</span
				>
			</div>
			<div class="_participans">
				<b>Daftar Peserta</b>
				<div class="_participants-ava">
					<Avatar
						v-for="(item, index) in event.participants"
						:key="index"
						class="_ava"
						:path="item.avatar"
					/>
					<div
						v-if="event && event.participants && event.participants.length > 5"
						class="_over-ava"
					>
						<span class="_ava-number">+3</span>
					</div>
					<div v-if="event && event.participants && !event.participants.length">
						Belum ada peserta.
					</div>
				</div>
			</div>
		</div>

		<Modal ref="addProcess" :title="isEdit? 'Ubah Proses' : 'Tambah Proses'">
			<template slot="body">
				<label class="custom-label" for="process">Nama</label><br />
				<input
					id="process"
					v-model="dataModal.name"
					class="custom-input"
					type="text"
					name="process"
          :disabled="isEdit"
				/><br />
				<label class="custom-label" for="tipe">Tipe</label><br />
				<div style="margin-bottom: 15px">
					<input
						id="main"
						v-model="dataModal.type"
						type="radio"
						name="tipe"
						checked="MAIN"
						value="MAIN"
						style="margin-right: 14px"
            :disabled="isEdit"
					/>
					<label
						class="custom-label-radio"
						for="main"
						style="margin-right: 30px"
						>Main Process</label
					>
					<input
						id="sub"
						v-model="dataModal.type"
						type="radio"
						checked="SUB"
						name="tipe"
						value="SUB"
						style="margin-right: 14px"
            :disabled="isEdit"
					/>
					<label class="custom-label-radio" for="sub">Sub Process</label>
				</div>
				<label class="custom-label" for="description">Deskripsi</label><br />
				<textarea
					id="description"
					v-model="dataModal.description"
					rows="100"
					class="custom-input"
					type="text-area"
					name="description"
				/><br />
				<label class="custom-label" for="tipe">Status</label><br />
				<div style="margin-bottom: 15px">
					<input
						id="pending"
						v-model="dataModal.status"
						type="radio"
						name="status"
						checked="PENDING"
						value="PENDING"
						style="margin-right: 14px"
					/>
					<label
						class="custom-label-radio"
						for="pending"
						style="margin-right: 30px"
						>Tertunda</label
					>
					<input
						id="onprogress"
						v-model="dataModal.status"
						type="radio"
						name="status"
						checked="ON_PROGRESS"
						value="ON_PROGRESS"
						style="margin-right: 14px"
					/>
					<label
						class="custom-label-radio"
						for="onprogress"
						style="margin-right: 30px"
						>Dalam Proses</label
					>
					<input
						id="completed"
						v-model="dataModal.status"
						type="radio"
						checked="COMPLETED"
						name="status"
						value="COMPLETED"
						style="margin-right: 14px"
					/>
					<label class="custom-label-radio" for="completed">Selesai</label>
				</div>
				<br />
				<label
					class="custom-label"
					style="margin-bottom: 10px"
					for="lampiranDokumen"
					>Lampiran Dokumen</label
				>
				<div class="files-list-name">
					<span
						v-for="(item, index) in fileHolder"
						:key="index"
						class="files-tag-name"
						@click="fileHolder.splice(index, 1)"
						>{{ item.name }}</span
					>
				</div>
				<Upload
					style="margin-top: 10px !important; margin-bottom: 10px"
					@change="handleUpload"
				/>
			</template>
			<template slot="footer">
				<Button
					title="Save"
					type="primary"
					style="padding: 15px 25px"
					@click="saveProcess"
				/>
			</template>
		</Modal>

		<Modal ref="timeline" :title="'Partnership dengan Brightspace'">
			<template slot="body">
				<Tab :tabs="tabs" :initial-tab="initialTab">
					<template slot="tab-head-activity"> Activity </template>
					<template slot="tab-panel-activity">
						<Timeline />
					</template>

					<template slot="tab-head-contact"> Contact </template>
					<template slot="tab-head-file"> File </template>
				</Tab>
			</template>
		</Modal>
	</div>
</template>

<script>
import Heading from '../../components/Heading'
import Modal from '../../components/Modal'
import Notification from '../../components/Notification'
import Tab from '../../components/Tab'
import Timeline from '../../components/Timeline'

// Atoms Components
import Button from '../../components/atoms/Button'
// import CardEvent from '../../components/CardEvent'
import Avatar from '../../components/atoms/Avatar'
import Upload from '../../components/atoms/Upload'
// import More from '../../components/atoms/More'

import ProcessService from '../../service/ProcessService'
import UploadService from '../../service/UploadService'
import EventService from '../../service/EventService'

import { convertDate, convertStatus } from '../../commons/utils/filter'

const processService = ProcessService.build()
const uploadService = UploadService.build()
const eventService = EventService.build()

export default {
	name: 'Archieve',
	filters: {
		convertDate,
		convertStatus
	},
	components: {
		Heading,
		// Search,
		Button,
		// CardEvent,
		Modal,
		Notification,
		Avatar,
		Tab,
		Timeline,
    Upload,
    // More
	},
	data: () => ({
    userID: '',
    isRequester: false,
		isStaff: false,
		isManager: false,
		isVP: false,
    isDirectors: false,
    
		initialTab: 'activity',
		tabs: ['activity', 'contact', 'file'],
		dataModal: {
			description: '',
			docs: [],
			eventId: '',
			name: '',
			status: 'PENDING',
			type: 'MAIN'
		},
		fileHolder: [],
    event: {},
    listProcess: [],
    isEdit: false,
    // action: [
    //   { title: 'Edit Data', function: 'editData(item)'}
    // ]
	}),
	computed: {
		starred() {
			return this.eventList.filter((item) => item.starred)
		},
		notStarred() {
			return this.eventList.filter((item) => !item.starred)
		}
	},
	methods: {
		async handleUpload(e) {
			const formdataBP = new FormData()
			formdataBP.append('file', e)
			const tempRes = await uploadService.uploadFile(formdataBP)
			this.fileHolder.push({
				name: e.name,
				url: tempRes.fileDownloadUri
			})
		},
		async uploadFile() {
			this.fileHolder.forEach(async (item) => {
				const formdataBP = new FormData()
				formdataBP.append('file', item.url)
				const tempRes = await uploadService.uploadFile(formdataBP)
				item.url = tempRes.fileDownloadUri
			})
		},
		async saveProcess() {
			this.$parent.isLoading = true
      // await this.uploadFile()
      if (this.isEdit) {
        const param = Object.assign({
          description: this.dataModal.description,
          docs: this.fileHolder,
          id: this.dataModal.eventId,
          status: this.dataModal.status
        })
        const response = await processService.editProcess(param)
        if (response) {
          this.resetFormProcess()
          this.$refs.addProcess.visible = false
          this.$parent.isLoading = false
          this.findEventById(this.$route.params.id)
        }
      } else {
        this.dataModal.docs = this.fileHolder
        this.dataModal.eventId = this.$route.params.id
        console.log('before', { param: this.dataModal })
        const response = await processService.saveProcess(this.dataModal)
        console.log({ param: this.dataModal })
        if (response) {
          this.resetFormProcess()
          this.$refs.addProcess.visible = false
          this.$parent.isLoading = false
          this.findEventById(this.$route.params.id)
        }
      }
    },
    addData () {
      this.resetFormProcess()
      this.$refs.addProcess.visible = true
    },
    editData(data) {
			this.dataModal.description = data.description
			this.dataModal.docs = data.docs
			this.dataModal.eventId = data.id
			this.dataModal.name = data.name
			this.dataModal.status = data.status
      this.dataModal.type = data.type
      this.fileHolder = data.docs
      if (this.userID === data.assignee.id) {
        this.$refs.addProcess.visible = true
        this.isEdit = true
      }
		},
		async findEventById(idEvent) {
			const param = { id: idEvent }
			const response = await eventService.findById(param)
      this.event = response.data
      this.listProcess = response.data.processes
    },
    getRole() {
      const dataUser = JSON.parse(localStorage.getItem('user_detail'))
      console.log('user nya', dataUser)
      this.userID = dataUser.id
			const { role } = dataUser
			if (role === 'CLIENT') {
				this.isRequester = true
			} else if (role === 'STAFF') {
				this.isStaff = true
			} else if (role === 'MANAGER') {
				this.isManager = true
			} else if (role === 'VP') {
				this.isVP = true
			} else if (role === 'DIRECTOR') {
				this.isDirectors = true
			}
		},
		resetFormProcess() {
			this.dataModal = {
				description: '',
				docs: [],
				eventId: '',
				name: '',
				status: 'PENDING',
				type: 'MAIN'
      },
      this.isEdit = false
		}
	},
	created() {
    this.getRole()
    this.findEventById(this.$route.params.id)
	}
}
</script>

<style lang="scss" scoped>
.label-table-sub-process {
	// position: absolute;
	width: 120px;
	padding: 10px 30px;
	font-size: 12px;
	line-height: 16px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 0.01em;

	color: #b54100;
	// left: 454px;
	// top: 306px;

	background: rgba(181, 65, 0, 0.2);
	border: 1px solid #b54100;
	box-sizing: border-box;
	border-radius: 20px;
}

.label-table-main-process {
	width: 120px;
	padding: 10px 30px;
	font-size: 12px;
	line-height: 16px;
	/* identical to box height */

	text-align: center;
	letter-spacing: 0.01em;

	color: #ffffff;
	// left: 454px;
	// top: 306px;

	background: #0077b5;
	border-radius: 20px;
	box-sizing: border-box;
	border-radius: 20px;
}

.styled-table {
	border-collapse: collapse;
	border: 1px solid #c1c1c1;
	box-sizing: border-box;
	border-radius: 5px;
	// margin: 25px 0;
	font-size: 0.9em;
	font-family: sans-serif;
	width: 100%;
	// padding: 18px 32px 18px 32px;
	// box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
	background-color: #ffffff;
	// color: #ffffff;
	// text-align: left;
	border-bottom: 1px solid #838383;
	height: 67px;
	font-family: Helvetica;
	font-style: normal;
	font-weight: bold;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.01em;
	color: #333333;
}
.styled-table th,
.styled-table td {
	padding: 12px 15px;
	font-size: 14px;
	font-weight: 500;
	line-height: 19px;
	/* identical to box height */

	letter-spacing: 0.01em;

	color: #333333 !important;
}
.styled-table tbody tr {
	border-bottom: 1px solid #e2e2e2;
	height: 99px;
	font-family: Helvetica;
	font-style: normal;
	font-weight: 500;
	font-size: 14px;
	line-height: 19px;
	letter-spacing: 0.01em;
	color: #333333;
}

.styled-table tbody tr:nth-of-type(even) {
	// background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
	// border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
	// font-weight: bold;
	// color: #009879;
	box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15);
}

.styled-table tbody tr:hover {
	box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.15);
}

.upload-btn-wrapper {
	position: relative;
	overflow: hidden;
	display: inline-block;
	height: 45px;
	width: 100%;
}

.btn {
	font-family: Helvetica;
	font-style: normal;
	font-weight: 500;
	font-size: 12px;
	line-height: 16px;
	letter-spacing: 0.01em;
	color: #0077b5;

	width: 100%;
	height: 45px;
	background: #ffffff;
	border: 1px dashed #008fdb;
	box-sizing: border-box;
	border-radius: 5px;
}

.upload-btn-wrapper input[type='file'] {
	font-size: 100px;
	position: absolute;
	left: 0;
	top: 0;
	opacity: 0;
}

.archieve {
	display: flex;
	width: 100vw;
	height: 100vh;
	._left {
		display: flex;
		flex-direction: column;
		padding: 27px 32px;
		width: 66%;

		._left-heading {
			display: flex;
			flex-direction: row;
			width: 100%;
			justify-content: space-between;
		}

		._tittle {
			display: flex;
			margin-top: 37px;

			span {
				font-family: Helvetica;
				font-style: normal;
				font-weight: bold;
				font-size: 24px;
				line-height: 33px;
				letter-spacing: 0.01em;
				color: #333333;
			}
		}

		._button {
			margin-top: 24px;
			display: flex;
			flex-direction: row;
			justify-content: space-between;

			._btn-left {
				button {
					align-items: center;
					width: 39px;
					height: 39px;
					display: flex;
					justify-content: center;
					background: #ffffff;
					border: 1px solid #c1c1c1;
					box-sizing: border-box;
					border-radius: 5px;
					transform: matrix(-1, 0, 0, 1, 0, 0);
				}
			}

			._btn-right {
				display: flex;
				flex-direction: row;
			}
		}
	}
	._right {
		width: 30%;
		display: flex;
		flex-direction: column;
		padding: 30px;
		background-color: #f5f5f5;
		._notification-slot {
			width: 100%;
			padding-right: 20px;
		}
		._detail-event {
			margin-top: 70px;
			display: flex;
			flex-direction: column;
			.parent {
				font-weight: 500;
				font-size: 12px;
				line-height: 16px;
				letter-spacing: 0.01em;
				color: #4f4f4f;
			}
			.child {
				margin-top: 4px;
				margin-bottom: 24px;
				font-weight: bold;
				font-size: 14px;
				line-height: 19px;
				letter-spacing: 0.01em;
				color: #333333;
			}
		}

		._participans {
			height: 100%;
			margin-bottom: 12px;
			display: flex;
			flex-direction: column;
			justify-content: flex-end;
			._participants-ava {
				display: flex;
				._ava {
					margin: 10px 10px 0 0;
				}
				._over-ava {
					margin: 10px 10px 0 0;
					width: 37px;
					height: 37px;
					display: flex;
					justify-content: center;
					background: rgba(0, 168, 255, 0.1);
					border: 2px solid #0077b5;
					box-sizing: border-box;
					border-radius: 31px;
					._ava-number {
						display: flex;
						align-self: center;
						font-weight: bold;
						text-align: center;
						font-size: 13px;
						line-height: 16px;
						letter-spacing: 0.01em;
						color: #0077b5;
					}
				}
			}
		}
	}
}
</style>
