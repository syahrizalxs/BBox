<template>
  <div class="archieve">
    <div class="_left">
      <div class="_left-heading">
        <Heading style="margin-right: 200px" />
        <Search />
      </div>
      <div class="_left-starred">
        <div class="_left-heading-starred">
          <!-- <span>Starred Event</span> -->
          <span></span>
          <Button title="Add Event" @click="$refs.addEvent.visible = true" style="width: 115px; height: 39px;" :type="'outline-primary'">
            <template slot="icon">
              <img src="../../assets/icons/button/plus.svg">
            </template>
          </Button>
        </div>
        <!-- <div class="_left-heading-starred-card">
          <div v-for="(item, index) in starred" :key="index">
            <CardEvent :starred="item.starred" style="margin-bottom: 10px;" :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span @click="toDetail('1')">Detail</span>
                <span @click="item.starred = false">Unstar this event</span>
              </template>
            </CardEvent>
          </div>
          <span style="opacity: 0.5;" v-if="starred.length === 0">
            There is no starred event.
          </span>
        </div> -->
      </div>
      <!-- <div class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Cards</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in notStarred" :key="index" style="margin-top: 10px;">
            <CardEvent :starred="false" :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span @click="toDetail('2')">Detail</span>
                <span @click="item.starred = true">Star this event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div> -->
      <div v-if="listDraft.length > 0" class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Draft</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in listDraft" :key="index" style="margin-top: 10px;">
            <CardEvent :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span @click="editData(item)">Edit</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div v-if="listRequested.length > 0" class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Requested</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in listRequested" :key="index" style="margin-top: 10px;">
            <CardEvent :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>No Action</span>
                <span @click="$refs.approvalRequest.visible = true">Open Request</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div v-if="listAccepted.length > 0" class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Accepted</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in listAccepted" :key="index" style="margin-top: 10px;">
            <CardEvent :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>Detail</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div v-if="listRejected.length > 0" class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event Rejected</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in listRejected" :key="index" style="margin-top: 10px;">
            <CardEvent :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>No Action</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div v-if="listOnProgress.length > 0" class="_left-event-cards">
        <div class="_left-event-cards-heading">
          <span>Event On Progress</span>
        </div>
        <div class="_left-event-cards-content">
          <div v-for="(item, index) in listOnProgress" :key="index" style="margin-top: 10px;">
            <CardEvent :title="item.title" :status="item.status">
              <template slot="dropdown">
                <span>Detail</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
    </div>
    <div class="_right">
      <div class="_notification-slot">
        <Notification />
      </div>
      <div class="_detail-event">
        <h2 style="margin-bottom: 40px;">Detail Event</h2>

        <span class="parent">Event Title</span>
        <span class="child">Partnership Dengan Brightspace</span>
        
        <span class="parent">Created</span>
        <span class="child">Jan 01, 2020 at 8:00 AM</span>
        
        <span class="parent">Last Update</span>
        <span class="child">Sep 27, 2020 at 1:29 PM</span>
        
        <span class="parent">Status</span>
        <span class="child">Cleared</span>
      </div>
      <div class="_participans">
        <b>Participants</b>
        <div class="_participants-ava">
          <Avatar class="_ava" path="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg/230px-Natalie_Portman_Cannes_2015_5_%28cropped%29.jpg"/>
          <Avatar class="_ava" path="https://1.bp.blogspot.com/-7osU1A9QpAE/Tcf0jD5KoDI/AAAAAAAAAIs/AFEsHouE14w/s1600/travis-barker-profile.png"/>
          <Avatar class="_ava" path="https://media.suara.com/pictures/970x544/2019/08/18/23065-niki-zefanya.jpg"/>
          <Avatar class="_ava" path="https://p01.lacasting.com.castingnetworks.io/photos/mm/4/0/e0e9cde28b3542dfab980f9ed9046d04.jpg "/>
          <div class="_over-ava">
            <span class="_ava-number">+3</span>
          </div>
        </div>
      </div>
    </div>

    <Modal :title="'Add Event'" ref="addEvent">
      <template slot="body">
        <label class="custom-label" for="title">Event Title</label><br>
        <input v-model="title" class="custom-input" type="text" id="title" name="title"><br>
        <label class="custom-label" for="manager">Manager</label><br>
        <select class="custom-input" v-model="managerId" name="manager" id="manager">
          <template v-for="item in listManager">
            <option v-bind:key="item.id" :value="item.id">{{item.name}}</option>
          </template>
        </select><br>
        <label class="custom-label" for="description">Description</label><br>
        <textarea v-model="description" rows="100" class="custom-input" type="text-area" id="description" name="description"></textarea><br>
        <label class="custom-label" style="margin-bottom: 10px;" for="description">Lampiran Dokumen</label><br>
        <div class="files-list-name">
          <span class="files-tag-name">Document MOM dengan tesla</span>
        </div>
        <Upload style="margin-top: 10px !important; margin-bottom: 10px;" />
        <!-- <label class="custom-label" for="tanggal">Tanggal Butuh Mitra</label>
        <input class="custom-input" type="date"> -->
        <label class="custom-label" for="expired">Event Duration</label><br>
        <input v-model="expired" class="custom-input" type="number" id="expired" name="expired" min="30">
      </template>

      <template slot="footer">
        <Button @click="clientCreate()" title="Save as Draft" type="primary" style="padding: 15px 25px; margin-right:10px"></Button>
        <Button @click="clientSubmit()" title="Submit" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>

    <Modal :title="'Event Approval'" ref="approvalRequest">
      <template slot="body">
        
      </template>

      <template slot="footer">
        <Button @click="($refs.rejection.visible = true).then($refs.approvalRequest.visible = false)" title="Reject" type="primary" style="padding: 15px 25px; margin-right:10px"></Button>
        <Button @click="($refs.assignTeam.visible = true).then($refs.approvalRequest.visible = false)" title="Assign Team Member" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>

    <Modal :title="'Assign Team Member'" ref="assignTeam">
      <template slot="body">
        
      </template>

      <template slot="footer">
        <Button @click="($refs.assignTeam.visible = false).then($refs.approvalRequest.visible = true)" title="Cancel" type="primary" style="padding: 15px 25px; margin-right:10px"></Button>
        <Button title="Approve" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>

    <Modal :title="'Rejection'" ref="rejection">
      <template slot="body">
        
      </template>

      <template slot="footer">
        <Button @click="($refs.rejection.visible = false).then($refs.approvalRequest.visible = true)" title="Cancel" type="primary" style="padding: 15px 25px; margin-right:10px"></Button>
        <Button title="Send Rejection" type="primary" style="padding: 15px 25px;"></Button>
      </template>
    </Modal>
  </div>
</template>

<script>
import Heading from '../../components/Heading'
import Search from '../../components/atoms/Search'
import Modal from '../../components/Modal'
import Notification from '../../components/Notification'

// Atoms Components
import Button from '../../components/atoms/Button'
import CardEvent from '../../components/CardEvent'
import Avatar from '../../components/atoms/Avatar'
import Upload from '../../components/atoms/Upload'

import EventService from '../../service/EventService'
import AuthService from '../../service/AuthService'

// client/list/{status} untuk list di event nya

const eventService = EventService.build()
const authService = AuthService.build()

export default {
  name: 'Archieve',
  components: {
    Heading,
    Search,
    Button,
    CardEvent,
    Modal,
    Notification,
    Avatar,
    Upload
  },
  data: () => ({
    eventList: [
      { status: 'cleared', title: 'Partnership dengan SpaceX', starred: true },
      { status: 'on progress', title: 'Partnership dengan Tesla', starred: true },
      { status: 'cleared', title: 'Partnership dengan Icon', starred: false },
      { status: 'canceled', title: 'Partnership dengan Facebook', starred: false }
    ],

    isRequester: false,
    isManager: false,

    listDraft: [],
    listRequested: [],
    listAccepted: [],
    listRejected: [],
    listOnProgress: [],

    listManager: [],
    id: '',
    title: '',
    description: '',
    expired: 30,
    managerId: '',
    businessPlan: {
      name: "business_plan.docx",
      url: "http://localhost/file/business_plan"
    },
    financialModel: {
      name: "financial_model.docx",
      url: "http://localhost/file/financial_model"
    },
    kajianLegal: {
      name: "kajian_legal.docx",
      url: "http://localhost/file/kajian_legal"
    },
    kajianResiko: {
      name: "kajian_resiko.docx",
      url: "http://localhost/file/kajian_resiko"
    },
    addtionalDocuments: [
      {
        name: "adds.docx",
        url: "http://localhost/file/adds"
      }
    ]
  }),
  computed: {
    starred () {
      return this.eventList.filter(item => item.starred)
    },
    notStarred () {
      return this.eventList.filter(item => !item.starred)
    }
  },
  methods: {
    toDetail (val) {
      this.$router.push('/archieve/' + val)
    },
    editData (data) {
      this.id = data.id,
      this.title = data.title,
      this.description = data.description,
      this.expired = data.expired,
      this.managerId = data.manager.id,
      this.businessPlan.name = data.businessPlanDoc.name
      this.businessPlan.url = data.businessPlanDoc.url
      this.financialModel.name = data.financialModelDoc.name
      this.financialModel.url = data.financialModelDoc.url
      this.kajianLegal.name = data.kajianLegalDoc.name
      this.kajianLegal.url = data.kajianLegalDoc.url
      this.kajianResiko.name = data.kajianResikoDoc.name
      this.kajianResiko.url = data.kajianResikoDoc.url
      this.addtionalDocuments = data.additionalDocs

      this.$refs.addEvent.visible = true
    },
    async clientCreate () { // id null kan u/ create baru, id terisi jika update data save as draft
      this.$parent.isLoading = true
      let param
      if (this.id) {
        param = Object.assign({
          id: this.id,
          title: this.title,
          description: this.description,
          expired: this.expired,
          managerId: this.managerId,
          businessPlan: {
            name: this.businessPlan.name,
            url: this.businessPlan.url
          },
          financialModel: {
            name: this.financialModel.name,
            url: this.financialModel.url
          },
          kajianLegal: {
            name: this.kajianLegal.name,
            url: this.kajianLegal.url
          },
          kajianResiko: {
            name: this.kajianResiko.name,
            url: this.kajianResiko.url
          },
          addtionalDocuments: [
            {
              name: "adds.docx",
              url: "http://localhost/file/adds"
            }
          ]
        })
      } else {
        param = Object.assign({
          title: this.title,
          description: this.description,
          expired: this.expired,
          managerId: this.managerId,
          businessPlan: {
            name: this.businessPlan.name,
            url: this.businessPlan.url
          },
          financialModel: {
            name: this.financialModel.name,
            url: this.financialModel.url
          },
          kajianLegal: {
            name: this.kajianLegal.name,
            url: this.kajianLegal.url
          },
          kajianResiko: {
            name: this.kajianResiko.name,
            url: this.kajianResiko.url
          },
          addtionalDocuments: [
            {
              name: "adds.docx",
              url: "http://localhost/file/adds"
            }
          ]
        })
      }
      const response = await eventService.clientCreate(param)
      if (response) {
        console.log('create', response)
        this.$refs.addEvent.visible = false
        this.$parent.isLoading = false
        this.getListEvent()
      }
    },
    async clientSubmit () { // id null jika submit, id terisi jika data dari draft ke submit
      this.$parent.isLoading = true
      let param
      if (this.id) {
        param = Object.assign({
          id: this.id,
          title: this.title,
          description: this.description,
          expired: this.expired,
          managerId: this.managerId,
          businessPlan: {
            name: this.businessPlan.name,
            url: this.businessPlan.url
          },
          financialModel: {
            name: this.financialModel.name,
            url: this.financialModel.url
          },
          kajianLegal: {
            name: this.kajianLegal.name,
            url: this.kajianLegal.url
          },
          kajianResiko: {
            name: this.kajianResiko.name,
            url: this.kajianResiko.url
          },
          addtionalDocuments: [
            {
              name: "adds.docx",
              url: "http://localhost/file/adds"
            }
          ]
        })
      } else {
        param = Object.assign({
          title: this.title,
          description: this.description,
          expired: this.expired,
          managerId: this.managerId,
          businessPlan: {
            name: this.businessPlan.name,
            url: this.businessPlan.url
          },
          financialModel: {
            name: this.financialModel.name,
            url: this.financialModel.url
          },
          kajianLegal: {
            name: this.kajianLegal.name,
            url: this.kajianLegal.url
          },
          kajianResiko: {
            name: this.kajianResiko.name,
            url: this.kajianResiko.url
          },
          addtionalDocuments: [
            {
              name: "adds.docx",
              url: "http://localhost/file/adds"
            }
          ]
        })
      }
      const response = await eventService.clientSubmit(param)
      if (response) {
        console.log('submit', response)
        this.$refs.addEvent.visible = false
        this.$parent.isLoading = false
        this.getListEvent()
      }
    },
    async getManager () {
      // const param = this.body
      this.$parent.isLoading = true
      const response = await authService.getListManager()
      if (response) {
        this.listManager = response.data
        this.$parent.isLoading = false
      }
    },
    async getListEvent () {
      this.$parent.isLoading = true
      const paramDraft = Object.assign({ status: 'draft' })
      const resDraft = await eventService.getEvent(paramDraft)
      if (resDraft) {
        this.listDraft = resDraft.data.content
      }

      const paramRequested = Object.assign({ status: 'requested' })
      const resRequested = await eventService.getEvent(paramRequested)
      if (resRequested) {
        this.listRequested = resRequested.data.content
      }

      const paramAccepted = Object.assign({ status: 'accepted' })
      const resAccepted = await eventService.getEvent(paramAccepted)
      if (resAccepted) {
        this.listAccepted = resAccepted.data.content
      }

      const paramRejected = Object.assign({ status: 'rejected' })
      const resRejected = await eventService.getEvent(paramRejected)
      if (resRejected) {
        this.listRejected = resRejected.data.content
      }

      const paramOnProgress = Object.assign({ status: 'on_progress' })
      const resOnProgress = await eventService.getEvent(paramOnProgress)
      if (resOnProgress) {
        this.listOnProgress = resOnProgress.data.content
      }
      this.$parent.isLoading = false
    },
    getRole () {
      const dataUser = JSON.parse(localStorage.getItem('user_detail'))
      console.log(dataUser)
      const role = dataUser.role
      if (role === 'CLIENT') {
        this.isRequester = true
      } else if (role === 'MANAGER') {
        this.isManager = true
      }
    }
  },
  async mounted () {
    this.getRole()
    await this.getListEvent()
    await this.getManager()
  }
}
</script>

<style lang="scss" scoped>
.files-list-name {
  width: 100%;
  display: flex;
  padding-top: 5px;
  .files-tag-name {
    border: 1px solid #0077B5;
    border-radius: 6px;
    padding: 3px 5px;
    font-size: 10px !important;
    color: #0077B5;
    &:hover {
      color: #F5F5F5;
      background-color: rgb(228, 50, 50);
      border: none;
      cursor: pointer;
      &:after {
        content: 'X';
        font-weight: bold;
        margin-left: 10px;    
      }
    }
  }
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

    ._left-starred {
      margin-top: 52px;
      display: flex;
      flex-direction: column;
      ._left-heading-starred {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        width: 100%;

        span {
          font-weight: bold;
          font-size: 24px;
          line-height: 33px;
          /* identical to box height */

          letter-spacing: 0.01em;

          color: #333333;
        }
      }

      ._left-heading-starred-card {
        padding-top: 24px;
      }
    }

    ._left-event-cards {
      margin-top: 20px;
      display: flex;
      flex-direction: column;
      width: 100%;

      ._left-event-cards-heading {
        margin-bottom: 5px;
        span {
          font-weight: bold;
          font-size: 24px;
          line-height: 33px;
          letter-spacing: 0.01em;

          color: #333333;
        }
      }
    }
  }
  ._right {
    width: 30%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    background-color: #F5F5F5;
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
        /* identical to box height */

        letter-spacing: 0.01em;

        /* Gray 2 */

        color: #4F4F4F;
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
          border: 2px solid #0077B5;
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

            color: #0077B5;
          }
        }
      }
    }
  }
}
</style>