<template>
  <div class="archieve">
    <div class="_left">
      <div class="_left-heading">
        <Heading style="margin-right: 200px" />
      </div>
      <div
        v-if="isRequester"
        class="_left-starred"
      >
        <div class="_left-heading-starred">
          <!-- <span>Starred Event</span> -->
          <span />
          <Button
            title="Tambah Event"
            style="width: 115px; height: 39px"
            :type="'outline-primary'"
            @click="addData()"
          >
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
      <div
        v-if="listDraft.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Draft</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listDraft"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isRequester"
                  @click="editData(item)"
                >Ubah Event</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listRequested.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Requested</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listRequested"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isManager"
                  @click="openRequest(item)"
                >Open Request</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listAcceptedManager.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Accepted Manager</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listAcceptedManager"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isVP"
                  @click="openRequest(item)"
                >Open Request</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listAcceptedVP.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Accepted VP</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listAcceptedVP"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isDirectors"
                  @click="openRequest(item)"
                >Open Request</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listAcceptedDirectors.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Accepted Directors</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listAcceptedDirectors"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isManager"
                  @click="openAssign(item)"
                >Assign Team</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listRejectedManager.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Rejected Manager</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listRejectedManager"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listRejectedVP.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Rejected VP</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listRejectedVP"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listRejectedDirectors.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Rejected Directors</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listRejectedDirectors"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listOnProgress.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event On Progress</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listOnProgress"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="toDetail(item.id)">Detail</span>
                <span
                  v-if="isStaff"
                  @click="completedEvent(item.id)"
                >Completed The Event</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listCompleted.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Completed</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listCompleted"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isManager"
                  @click="openApproval(item)"
                >Open Approval</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listApprovedManager.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Approved Manager</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listApprovedManager"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isVP"
                  @click="openApproval(item)"
                >Open Approval</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listApprovedVP.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Approved VP</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listApprovedVP"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span
                  v-if="isDirectors"
                  @click="openApproval(item)"
                >Open Approval</span>
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listFinished.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Finished</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listFinished"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listDisapprovedManager.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Disapproved Manager</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listDisapprovedManager"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listDisapprovedVP.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Disapproved VP</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listDisapprovedVP"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
      <div
        v-if="listDisapprovedDirectors.length > 0"
        class="_left-event-cards"
      >
        <div class="_left-event-cards-heading">
          <span>Event Disapproved Directors</span>
        </div>
        <div class="_left-event-cards-content">
          <div
            v-for="(item, index) in listDisapprovedDirectors"
            :key="index"
            style="margin-top: 10px"
          >
            <CardEvent
              :class="item.id === detailActivity.id ? 'active' : ''"
              :data="item"
              :title="item.title"
              :status="item.currentStatus"
              @click="handleCardClicked"
            >
              <template slot="dropdown">
                <span @click="viewHistory(item)">Lihat Riwayat Event</span>
              </template>
            </CardEvent>
          </div>
        </div>
      </div>
    </div>
    <div class="_right" style="overflow-y:auto;">
      <div class="_detail-event">
        <h2 style="margin-bottom: 40px">
          Detail Event
        </h2>

        <span class="parent">Judul</span>
        <span class="child">{{ detailActivity.title || '-' }}</span>

        <span class="parent">Tanggal dibuat</span>
        <span class="child">{{
          detailActivity.createdDate | convertDate
        }}</span>

        <span class="parent">Terakhir diubah</span>
        <span class="child">{{
          detailActivity.modifiedDate | convertDate
        }}</span>

        <span class="parent">Status</span>
        <span
          v-if="detailActivity.currentStatus"
          class="child"
        >{{
          detailActivity.currentStatus | convertStatus
        }}</span>
        <span
          v-if="!detailActivity.currentStatus"
          class="child"
        >-</span>

        <span class="parent">File Business Plan</span>
        <span
          v-if="detailActivity.businessPlanDoc"
          class="child"
        >
          <a
            :href="detailActivity.businessPlanDoc.url"
            v-text="detailActivity.businessPlanDoc.name"
          />
        </span>
        <span
          v-if="!detailActivity.businessPlanDoc"
          class="child"
        >-</span>

        <span class="parent">File Financial Model</span>
        <span
          v-if="detailActivity.financialModelDoc"
          class="child"
        >
          <a
            :href="detailActivity.financialModelDoc.url"
            v-text="detailActivity.financialModelDoc.name"
          />
        </span>
        <span
          v-if="!detailActivity.financialModelDoc"
          class="child"
        >-</span>

        <span class="parent">File Kajian Legal</span>
        <span
          v-if="detailActivity.kajianLegalDoc"
          class="child"
        >
          <a
            :href="detailActivity.kajianLegalDoc.url"
            v-text="detailActivity.kajianLegalDoc.name"
          />
        </span>
        <span
          v-if="!detailActivity.kajianLegalDoc"
          class="child"
        >-</span>

        <span class="parent">File Kajian Resiko</span>
        <span
          v-if="detailActivity.kajianResikoDoc"
          class="child"
        >
          <a
            :href="detailActivity.kajianResikoDoc.url"
            v-text="detailActivity.kajianResikoDoc.name"
          />
        </span>
        <span
          v-if="!detailActivity.kajianResikoDoc"
          class="child"
        >-</span>

        <span class="parent">File Lampiran Dokumen</span>
        <span
          v-for="(item, index) in detailActivity.additionalDocs"
          :key="index"
          class="child"
        >
          <a
            :href="item.url"
            v-text="item.name"
          />
        </span>
        <span
          v-if="
            !detailActivity.additionalDocs ||
              detailActivity.additionalDocs.length === 0
          "
          class="child"
        >-</span>
      </div>
      <div class="_participans">
        <b>Daftar Peserta</b>
        <div class="_participants-ava">
          <Avatar
            v-for="(item, index) in detailActivity.participants"
            :key="index"
            class="_ava"
            :path="item.avatar"
          />
          <div
            v-if="
              detailActivity &&
                detailActivity.participants &&
                detailActivity.participants.length > 5
            "
            class="_over-ava"
          >
            <span class="_ava-number">+3</span>
          </div>
          <div
            v-if="
              detailActivity &&
                detailActivity.participants &&
                !detailActivity.participants.length
            "
          >
            Belum ada peserta.
          </div>
        </div>
      </div>
    </div>

    <Modal
      ref="addEvent"
      :title="'Tambah Event'"
    >
      <template slot="body">
        <label
          class="custom-label"
          for="title"
        >Judul</label>
        <input
          id="title"
          v-model="title"
          class="custom-input"
          type="text"
          name="title"
        >
        <label
          class="custom-label"
          for="manager"
        >Manager</label>
        <select
          id="manager"
          v-model="managerId"
          class="custom-input"
          name="manager"
        >
          <template v-for="item in listManager">
            <option
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </template>
        </select>
        <label
          class="custom-label"
          for="description"
        >Deskripsi</label>
        <textarea
          id="description"
          v-model="description"
          rows="100"
          class="custom-input"
          type="text-area"
          name="description"
        />
        <label
          class="custom-label"
          for="businessPlan"
        >Business Plan</label>
        <div
          v-if="businessPlanHolder"
          class="files-list-name"
        >
          <span class="files-tag-name2">{{ businessPlanHolder }}</span>
        </div>
        <Upload
          type="businessPlan"
          style="margin-top: 10px !important; margin-bottom: 10px"
          @change="handleUpload"
        />
        <label
          class="custom-label"
          for="financialModel"
        >Financial Model</label>
        <div
          v-if="financialModelHolder"
          class="files-list-name"
        >
          <span class="files-tag-name2">{{ financialModelHolder }}</span>
        </div>
        <Upload
          type="financialModel"
          style="margin-top: 10px !important; margin-bottom: 10px"
          @change="handleUpload"
        />
        <label
          class="custom-label"
          for="kajianLegal"
        >Kajian Legal</label>
        <div
          v-if="kajianLegalHolder"
          class="files-list-name"
        >
          <span class="files-tag-name2">{{ kajianLegalHolder }}</span>
        </div>
        <Upload
          type="kajianLegal"
          style="margin-top: 10px !important; margin-bottom: 10px"
          @change="handleUpload"
        />
        <label
          class="custom-label"
          for="kajianResiko"
        >Kajian Resiko</label>
        <div
          v-if="kajianResikoHolder"
          class="files-list-name"
        >
          <span class="files-tag-name2">{{ kajianResikoHolder }}</span>
        </div>
        <Upload
          type="kajianResiko"
          style="margin-top: 10px !important; margin-bottom: 10px"
          @change="handleUpload"
        />
        <label
          class="custom-label"
          style="margin-bottom: 10px"
          for="description"
        >Lampiran Dokumen</label>
        <div class="files-list-name">
          <span
            v-for="(item, index) in attachmentHolder"
            :key="index"
            class="files-tag-name"
            @click="attachmentHolder.splice(index, 1)"
          >{{ item.name }}</span>
        </div>
        <Upload
          style="margin-top: 10px !important; margin-bottom: 10px"
          type="attachment"
          @change="handleUpload"
        />
        <div class="_date">
          <div>
            <label
              class="custom-label"
              for="start"
            >Perkiraan Mulai</label>
            <input
              v-model="expectedStartDate"
              class="custom-input"
              type="date"
            >
          </div>
          <div>
            <label
              class="custom-label"
              for="end"
            >Perkiraan Selesai</label>
            <input
              v-model="expectedFinishDate"
              class="custom-input"
              type="date"
            >
          </div>
        </div>
      </template>

      <template slot="footer">
        <Button
          title="Simpan sebagai draft"
          type="success"
          style="padding: 15px 25px; margin-right: 10px; color: white"
          @click="clientCreate()"
        />
        <Button
          title="Kirim"
          type="primary"
          style="padding: 15px 25px"
          @click="clientSubmit()"
        />
      </template>
    </Modal>

    <Modal
      ref="viewHistory"
      :title="'Detail Riwayat Event [' + title + ']'"
      size="sm"
      :is-liner="true"
    >
      <template
        slot="body"
        style="overflow: auto"
      >
        <TimelineHistoryEvent :data="histories" />
      </template>
    </Modal>

    <Modal
      ref="acceptanceRequest"
      :title="
        isManager
          ? 'Event Acceptance Manager'
          : isVP
            ? 'Event Acceptance VP'
            : 'Event Acceptance Directors'
      "
    >
      <template slot="body">
        <span>Event Tittle</span><br>
        <p>
          <b>{{ title }}</b>
        </p>
        <span>Description</span><br>
        <p>
          <b>{{ description }}</b>
        </p>
        <span>Documents</span><br>
        <span><b>{{ businessPlan.name }}</b></span><br>
        <span><b>{{ financialModel.name }}</b></span><br>
        <span><b>{{ kajianLegal.name }}</b></span><br>
        <span><b>{{ kajianResiko.name }}</b></span><br><br>
        <span>Sisa Hari</span><br>
        <p>
          <b>{{ estimatedDaysLeft }}</b>
        </p>
      </template>

      <template slot="footer">
        <Button
          title="Reject"
          type="primary"
          style="padding: 15px 25px; margin-right: 10px"
          @click="
            $refs.rejection.visible = true
            $refs.acceptanceRequest.visible = false
          "
        />
        <Button
          title="Accept"
          type="primary"
          style="padding: 15px 25px"
          @click="acceptEvent()"
        />
      </template>
    </Modal>

    <Modal
      ref="assignTeam"
      :title="'Assign Team Member'"
    >
      <template slot="body">
        <span>Event Tittle</span><br>
        <p>
          <b>{{ this.title }}</b>
        </p>
        <span>Description</span><br>
        <p>
          <b>{{ this.description }}</b>
        </p>
        <label
          class="custom-label"
          for="employee"
        >Assign</label><br>
        <div class="files-list-name">
          <span
            v-for="(item, index) in employee"
            :key="item.id"
            class="files-tag-name"
            @click="delEmp(index)"
          >{{ item.name }}</span>
        </div>
        <span
          v-if="duplicateEmp"
          style="color: red"
        >Team sudah ditambahkan</span>
        <select
          id="employee"
          v-model="selectEmp"
          class="custom-input"
          name="employee"
          @change="addEmp($event)"
        >
          <template v-for="item in listEmployee">
            <option
              :key="item.id"
              :value="item.id"
            >
              {{ item.name }}
            </option>
          </template>
        </select><br>
      </template>

      <template slot="footer">
        <Button
          title="Cancel"
          type="primary"
          style="padding: 15px 25px; margin-right: 10px"
          @click="$refs.assignTeam.visible = false"
        />
        <Button
          title="Assign Team Member"
          type="primary"
          style="padding: 15px 25px"
          @click="assignTeam()"
        />
      </template>
    </Modal>

    <Modal
      ref="rejection"
      :title="
        isManager
          ? 'Rejection Manager'
          : isVP
            ? 'Rejection VP'
            : 'Rejection Directors'
      "
    >
      <template slot="body">
        <span>Event Tittle</span><br>
        <p>
          <b>{{ title }}</b>
        </p>
        <span>Description</span><br>
        <p>
          <b>{{ description }}</b>
        </p>
        <label
          class="custom-label"
          for="notes"
        >Notes</label><br>
        <input
          id="notes"
          v-model="notes"
          class="custom-input"
          type="text"
          name="notes"
        ><br>
      </template>

      <template slot="footer">
        <Button
          title="Cancel"
          type="primary"
          style="padding: 15px 25px; margin-right: 10px"
          @click="
            $refs.rejection.visible = false
            $refs.acceptanceRequest.visible = true
          "
        />
        <Button
          title="Send Rejection"
          type="primary"
          style="padding: 15px 25px"
          @click="RejectEvent()"
        />
      </template>
    </Modal>

    <Modal
      ref="approvalRequest"
      :title="
        isManager
          ? 'Event Approval Manager'
          : isVP
            ? 'Event Approval VP'
            : 'Event Approval Directors'
      "
    >
      <template slot="body">
        <span>Event Tittle</span><br>
        <p>
          <b>{{ title }}</b>
        </p>
        <span>Description</span><br>
        <p>
          <b>{{ description }}</b>
        </p>
        <span>Documents</span><br>
        <span><b>{{ businessPlan.name }}</b></span><br>
        <span><b>{{ financialModel.name }}</b></span><br>
        <span><b>{{ kajianLegal.name }}</b></span><br>
        <span><b>{{ kajianResiko.name }}</b></span><br><br>
        <span>Sisa Hari</span><br>
        <p>
          <b>{{ estimatedDaysLeft }}</b>
        </p>
      </template>

      <template slot="footer">
        <Button
          title="Disapprove"
          type="primary"
          style="padding: 15px 25px; margin-right: 10px"
          @click="
            $refs.disapprove.visible = true
            $refs.approvalRequest.visible = false
          "
        />
        <Button
          title="Approve"
          type="primary"
          style="padding: 15px 25px"
          @click="approveEvent()"
        />
      </template>
    </Modal>

    <Modal
      ref="disapprove"
      :title="
        isManager
          ? 'Disapprove Manager'
          : isVP
            ? 'Disapprove VP'
            : 'Disapprove Directors'
      "
    >
      <template slot="body">
        <span>Event Tittle</span><br>
        <p>
          <b>{{ title }}</b>
        </p>
        <span>Description</span><br>
        <p>
          <b>{{ description }}</b>
        </p>
        <label
          class="custom-label"
          for="notes"
        >Notes</label><br>
        <input
          id="notes"
          v-model="notes"
          class="custom-input"
          type="text"
          name="notes"
        ><br>
      </template>

      <template slot="footer">
        <Button
          title="Cancel"
          type="primary"
          style="padding: 15px 25px; margin-right: 10px"
          @click="
            $refs.disapprove.visible = false
            $refs.approvalRequest.visible = true
          "
        />
        <Button
          title="Disapprove Event"
          type="primary"
          style="padding: 15px 25px"
          @click="disApproveEvent()"
        />
      </template>
    </Modal>
  </div>
</template>

<script>
import Heading from '../../components/Heading'
import Modal from '../../components/Modal'

// Atoms Components
import Button from '../../components/atoms/Button'
import CardEvent from '../../components/CardEvent'
import Avatar from '../../components/atoms/Avatar'
import Upload from '../../components/atoms/Upload'
import TimelineHistoryEvent from '../../components/TimelineHistoryEvent'

import EventService from '../../service/EventService'
import AuthService from '../../service/AuthService'
import UploadService from '../../service/UploadService'

import { convertDate, convertStatus } from '../../commons/utils/filter'

// client/list/{status} untuk list di event nya

const eventService = EventService.build()
const authService = AuthService.build()
const uploadService = UploadService.build()

export default {
	name: 'Archieve',
	filters: {
		convertDate,
		convertStatus,
	},
	components: {
		Heading,
		Button,
		CardEvent,
		TimelineHistoryEvent,
		Modal,
		Avatar,
		Upload,
	},
	data: () => ({
		eventList: [
			{ status: 'cleared', title: 'Partnership dengan SpaceX', starred: true },
			{
				status: 'on progress',
				title: 'Partnership dengan Tesla',
				starred: true,
			},
			{ status: 'cleared', title: 'Partnership dengan Icon', starred: false },
			{
				status: 'canceled',
				title: 'Partnership dengan Facebook',
				starred: false,
			},
		],

		detailActivity: {},

		isRequester: false,
		isStaff: false,
		isManager: false,
		isVP: false,
		isDirectors: false,

		listDraft: [],
		listRequested: [],
		listAcceptedManager: [],
		listAcceptedVP: [],
		listAcceptedDirectors: [],
		listRejectedManager: [],
		listRejectedVP: [],
		listRejectedDirectors: [],
		listOnProgress: [],
		listCompleted: [],
		listApprovedManager: [],
		listApprovedVP: [],
		listFinished: [],
		listDisapprovedManager: [],
		listDisapprovedVP: [],
		listDisapprovedDirectors: [],

		listManager: [],
		listEmployee: [],
		notes: '',
		selectEmp: '',
		duplicateEmp: false,
		employee: [],

		id: '',
		title: '',
		description: '',
		// expired: 30,
		expectedStartDate: '',
		expectedFinishDate: '',
		estimatedDaysLeft: '',
		managerId: '',
		businessPlan: {
			name: '',
			url: '',
		},
		financialModel: {
			name: '',
			url: '',
		},
		kajianLegal: {
			name: '',
			url: '',
		},
		kajianResiko: {
			name: '',
			url: '',
		},
		additionalDocuments: [],
		businessPlanHolder: '',
		financialModelHolder: '',
		kajianLegalHolder: '',
		kajianResikoHolder: '',
		attachmentHolder: [],
		histories: [],
	}),
	computed: {
		starred() {
			return this.eventList.filter((item) => item.starred)
		},
		notStarred() {
			return this.eventList.filter((item) => !item.starred)
		},
	},
	async created() {
		await this.getRole()
		await this.getListEvent()
	},
	methods: {
		async uploadFile() {
			this.$parent.isLoading = true

			this.attachmentHolder.forEach(async (item) => {
				const formdataBP = new FormData()
				formdataBP.append('file', item.url)
				const tempRes = await uploadService.uploadFile(formdataBP)
				item.url = tempRes.fileDownloadUri
			})

			if (this.businessPlan.name !== this.businessPlanHolder) {
				this.businessPlan.name = this.businessPlanHolder
				const formdataBP = new FormData()
				formdataBP.append('file', this.businessPlan.url)
				const tempRes = await uploadService.uploadFile(formdataBP)
				this.businessPlan.url = tempRes.fileDownloadUri
			} else if (!this.businessPlanHolder) {
				console.log('file businessPlan tidak boleh kosong')
			}

			if (this.financialModel.name !== this.financialModelHolder) {
				this.financialModel.name = this.financialModelHolder
				const formdataFM = new FormData()
				formdataFM.append('file', this.financialModel.url)
				const tempRes = await uploadService.uploadFile(formdataFM)
				this.financialModel.url = tempRes.fileDownloadUri
			} else if (!this.financialModelHolder) {
				console.log('file financialModel tidak boleh kosong')
			}

			if (this.kajianLegal.name !== this.kajianLegalHolder) {
				this.kajianLegal.name = this.kajianLegalHolder
				const formdataKL = new FormData()
				formdataKL.append('file', this.kajianLegal.url)
				const tempRes = await uploadService.uploadFile(formdataKL)
				this.kajianLegal.url = tempRes.fileDownloadUri
			} else if (!this.kajianLegalHolder) {
				console.log('file kajianLegal tidak boleh kosong')
			}

			if (this.kajianResiko.name !== this.kajianResikoHolder) {
				this.kajianResiko.name = this.kajianResikoHolder
				const formdataKR = new FormData()
				formdataKR.append('file', this.kajianResiko.url)
				const tempRes = await uploadService.uploadFile(formdataKR)
				this.kajianResiko.url = tempRes.fileDownloadUri
			} else if (!this.kajianResikoHolder) {
				console.log('file kajianLegal tidak boleh kosong')
			}
			this.$parent.isLoading = false
		},
		handleUpload(e, type) {
			if (type === 'attachment') {
				// Method Upload
				this.attachmentHolder.push({
					name: e.name,
					url: e, // ganti jadi url: dari method
				})
			} else if (type === 'businessPlan') {
				this.businessPlanHolder = e.name
				this.businessPlan.url = e
			} else if (type === 'financialModel') {
				this.financialModelHolder = e.name
				this.financialModel.url = e
			} else if (type === 'kajianLegal') {
				this.kajianLegalHolder = e.name
				this.kajianLegal.url = e
			} else if (type === 'kajianResiko') {
				this.kajianResikoHolder = e.name
				this.kajianResiko.url = e
			}
		},
		handleCardClicked(e) {
			this.detailActivity = e
		},
		toDetail(val) {
			this.$router.push(`/archieve/${val}`)
		},
		assignData(data) {
			this.id = data.id
			this.title = data.title
			this.description = data.description
			this.expectedStartDate = data.expectedStartDate
			this.expectedFinishDate = data.expectedFinishDate
			this.estimatedDaysLeft = data.estimatedDaysLeft
			this.managerId = data.manager.id
			this.businessPlan.name = data.businessPlanDoc.name
			this.businessPlanHolder = data.businessPlanDoc.name
			this.businessPlan.url = data.businessPlanDoc.url
			this.financialModel.name = data.financialModelDoc.name
			this.financialModelHolder = data.financialModelDoc.name
			this.financialModel.url = data.financialModelDoc.url
			this.kajianLegal.name = data.kajianLegalDoc.name
			this.kajianLegalHolder = data.kajianLegalDoc.name
			this.kajianLegal.url = data.kajianLegalDoc.url
			this.kajianResiko.name = data.kajianResikoDoc.name
			this.kajianResikoHolder = data.kajianResikoDoc.name
			this.kajianResiko.url = data.kajianResikoDoc.url
			this.additionalDocuments = data.additionalDocs
			this.histories = data.histories
		},
		resetData() {
			this.id = ''
			this.title = ''
			this.description = ''
			this.expectedStartDate = ''
			this.expectedFinishDate = ''
			this.estimatedDaysLeft = ''
			this.managerId = ''
			this.businessPlan.name = ''
			this.businessPlanHolder = ''
			this.businessPlan.url = ''
			this.financialModel.name = ''
			this.financialModelHolder = ''
			this.financialModel.url = ''
			this.kajianLegal.name = ''
			this.kajianLegalHolder = ''
			this.kajianLegal.url = ''
			this.kajianResiko.name = ''
			this.kajianResikoHolder = ''
			this.kajianResiko.url = ''
			this.additionalDocuments = []
			this.notes = ''
			this.selectEmp = ''
			this.employee = []
			this.businessPlanHolder = ''
			this.financialModelHolder = ''
			this.kajianLegalHolder = ''
			this.kajianResikoHolder = ''
			this.attachmentHolder = []
			this.histories = []
		},
		async approveEvent() {
			this.$refs.approvalRequest.visible = false
			this.$parent.isLoading = true
			const param = { id: this.id }
			let response
			if (this.isManager) {
				response = await eventService.approveByManager(param)
			} else if (this.isVP) {
				response = await eventService.approveByVP(param)
			} else if (this.isDirectors) {
				response = await eventService.approveByDirectors(param)
			}
			if (response) {
				this.resetData()
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async disApproveEvent() {
			this.$refs.disapprove.visible = false
			this.$parent.isLoading = true
			const param = {
				id: this.id,
				reason: this.notes,
			}
			let response
			if (this.isManager) {
				response = await eventService.disapproveByManager(param)
			} else if (this.isVP) {
				response = await eventService.disapproveByVP(param)
			} else if (this.isDirectors) {
				response = await eventService.disapproveByDirectors(param)
			}
			if (response) {
				this.resetData()
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async completedEvent(val) {
			this.$parent.isLoading = true
			const param = { id: val }
			const response = await eventService.completedByEmployee(param)
			if (response) {
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async acceptEvent() {
			this.$refs.acceptanceRequest.visible = false
			this.$parent.isLoading = true
			const param = { id: this.id }
			let response
			if (this.isManager) {
				response = await eventService.acceptByManager(param)
			} else if (this.isVP) {
				response = await eventService.acceptByVP(param)
			} else if (this.isDirectors) {
				response = await eventService.acceptByDirectors(param)
			}
			if (response) {
				this.resetData()
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async RejectEvent() {
			this.$refs.rejection.visible = false
			this.$parent.isLoading = true
			const param = {
				id: this.id,
				reason: this.notes,
			}
			let response
			if (this.isManager) {
				response = await eventService.rejectByManager(param)
			} else if (this.isVP) {
				response = await eventService.rejectByVP(param)
			} else if (this.isDirectors) {
				response = await eventService.rejectByDirectors(param)
			}
			if (response) {
				this.resetData()
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async assignTeam() {
			this.$refs.assignTeam.visible = false
			this.$parent.isLoading = true
			const emp = this.employee.map((item) => item.id)
			const param = {
				eventId: this.id,
				participants: emp,
			}
			const response = await eventService.assignTeam(param)
			if (response) {
				this.resetData()
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		addEmp(event) {
			const checkEmp = this.employee.find(
				(item) => item.id === event.target.value,
			)
			if (!checkEmp) {
				const emp = this.listEmployee.find(
					(item) => item.id === event.target.value,
				)
				this.employee.push(emp)
				this.duplicateEmp = false
			} else {
				this.duplicateEmp = true
			}
		},
		delEmp(index) {
			this.employee.splice(index, 1)
		},
		openAssign(data) {
			this.assignData(data)
			this.$refs.assignTeam.visible = true
		},
		openRequest(data) {
			this.assignData(data)
			this.$refs.acceptanceRequest.visible = true
		},
		openApproval(data) {
			this.assignData(data)
			this.$refs.approvalRequest.visible = true
		},
		editData(data) {
			this.assignData(data)
			this.$refs.addEvent.visible = true
		},
		viewHistory(data) {
			this.assignData(data)
			this.$refs.viewHistory.visible = true
		},
		addData() {
			this.resetData()
			this.$refs.addEvent.visible = true
		},
		async clientCreate() {
			// id null kan u/ create baru, id terisi jika update data save as draft
			this.$parent.isLoading = true
			await this.uploadFile()
			let param
			if (this.id) {
				param = {
					id: this.id,
					title: this.title,
					description: this.description,
					expectedStartDate: this.expectedStartDate,
					expectedFinishDate: this.expectedFinishDate,
					managerId: this.managerId,
					businessPlan: {
						name: this.businessPlan.name,
						url: this.businessPlan.url,
					},
					financialModel: {
						name: this.financialModel.name,
						url: this.financialModel.url,
					},
					kajianLegal: {
						name: this.kajianLegal.name,
						url: this.kajianLegal.url,
					},
					kajianResiko: {
						name: this.kajianResiko.name,
						url: this.kajianResiko.url,
					},
					additionalDocuments: this.additionalDocuments,
				}
			} else {
				param = {
					title: this.title,
					description: this.description,
					expectedStartDate: this.expectedStartDate,
					expectedFinishDate: this.expectedFinishDate,
					managerId: this.managerId,
					businessPlan: {
						name: this.businessPlan.name,
						url: this.businessPlan.url,
					},
					financialModel: {
						name: this.financialModel.name,
						url: this.financialModel.url,
					},
					kajianLegal: {
						name: this.kajianLegal.name,
						url: this.kajianLegal.url,
					},
					kajianResiko: {
						name: this.kajianResiko.name,
						url: this.kajianResiko.url,
					},
					additionalDocuments: this.attachmentHolder,
				}
			}
			const response = await eventService.clientCreate(param)
			if (response) {
				this.resetData()
				this.$refs.addEvent.visible = false
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async clientSubmit() {
			// id null jika submit, id terisi jika data dari draft ke submit
			this.$parent.isLoading = true
			await this.uploadFile()
			let param
			if (this.id) {
				param = {
					id: this.id,
					title: this.title,
					description: this.description,
					expectedStartDate: this.expectedStartDate,
					expectedFinishDate: this.expectedFinishDate,
					managerId: this.managerId,
					businessPlan: {
						name: this.businessPlan.name,
						url: this.businessPlan.url,
					},
					financialModel: {
						name: this.financialModel.name,
						url: this.financialModel.url,
					},
					kajianLegal: {
						name: this.kajianLegal.name,
						url: this.kajianLegal.url,
					},
					kajianResiko: {
						name: this.kajianResiko.name,
						url: this.kajianResiko.url,
					},
					additionalDocuments: this.additionalDocuments,
				}
			} else {
				param = {
					title: this.title,
					description: this.description,
					expectedStartDate: this.expectedStartDate,
					expectedFinishDate: this.expectedFinishDate,
					managerId: this.managerId,
					businessPlan: {
						name: this.businessPlan.name,
						url: this.businessPlan.url,
					},
					financialModel: {
						name: this.financialModel.name,
						url: this.financialModel.url,
					},
					kajianLegal: {
						name: this.kajianLegal.name,
						url: this.kajianLegal.url,
					},
					kajianResiko: {
						name: this.kajianResiko.name,
						url: this.kajianResiko.url,
					},
					additionalDocuments: this.attachmentHolder,
				}
			}
			const response = await eventService.clientSubmit(param)
			if (response) {
				this.resetData()
				this.$refs.addEvent.visible = false
				this.$parent.isLoading = false
				this.getListEvent()
			}
		},
		async getManager() {
			this.$parent.isLoading = true
			const response = await authService.getListManager()
			if (response) {
				this.listManager = response.data
				this.$parent.isLoading = false
			}
		},
		async getEmployee() {
			this.$parent.isLoading = true
			const response = await authService.getListEmployee()
			if (response) {
				this.listEmployee = response.data
				this.$parent.isLoading = false
			}
		},
		async getListEvent() {
			this.$parent.isLoading = true
			const paramDraft = { status: 'draft' }
			const resDraft = await eventService.getEvent(paramDraft)
			if (resDraft) {
				this.listDraft = resDraft.data.content
			}

			const paramRequested = { status: 'requested' }
			const resRequested = await eventService.getEvent(paramRequested)
			if (resRequested) {
				this.listRequested = resRequested.data.content
			}

			const paramAcceptedManager = { status: 'accepted_manager' }
			const resAcceptedManager = await eventService.getEvent(
				paramAcceptedManager,
			)
			if (resAcceptedManager) {
				this.listAcceptedManager = resAcceptedManager.data.content
			}

			const paramAcceptedVP = { status: 'accepted_vp' }
			const resAcceptedVP = await eventService.getEvent(paramAcceptedVP)
			if (resAcceptedVP) {
				this.listAcceptedVP = resAcceptedVP.data.content
			}

			const paramAcceptedDirectors = { status: 'accepted_director' }
			const resAcceptedDirectors = await eventService.getEvent(
				paramAcceptedDirectors,
			)
			if (resAcceptedDirectors) {
				this.listAcceptedDirectors = resAcceptedDirectors.data.content
			}

			const paramRejectedManager = { status: 'rejected_manager' }
			const resRejectedManager = await eventService.getEvent(
				paramRejectedManager,
			)
			if (resRejectedManager) {
				this.listRejectedManager = resRejectedManager.data.content
			}

			const paramRejectedVP = { status: 'rejected_vp' }
			const resRejectedVP = await eventService.getEvent(paramRejectedVP)
			if (resRejectedVP) {
				this.listRejectedVP = resRejectedVP.data.content
			}

			const paramRejectedDirectors = { status: 'rejected_director' }
			const resRejectedDirectors = await eventService.getEvent(
				paramRejectedDirectors,
			)
			if (resRejectedDirectors) {
				this.listRejectedDirectors = resRejectedDirectors.data.content
			}

			const paramOnProgress = { status: 'on_progress' }
			const resOnProgress = await eventService.getEvent(paramOnProgress)
			if (resOnProgress) {
				this.listOnProgress = resOnProgress.data.content
			}

			const paramCompleted = { status: 'completed' }
			const resCompleted = await eventService.getEvent(paramCompleted)
			if (resCompleted) {
				this.listCompleted = resCompleted.data.content
			}

			const paramApprovedManager = { status: 'approved_manager' }
			const resApprovedManager = await eventService.getEvent(
				paramApprovedManager,
			)
			if (resApprovedManager) {
				this.listApprovedManager = resApprovedManager.data.content
			}

			const paramApprovedVP = { status: 'approved_vp' }
			const resApprovedVP = await eventService.getEvent(paramApprovedVP)
			if (resApprovedVP) {
				this.listApprovedVP = resApprovedVP.data.content
			}

			const paramFinished = { status: 'finished' }
			const resFinished = await eventService.getEvent(paramFinished)
			if (resFinished) {
				this.listFinished = resFinished.data.content
			}

			const paramDisapprovedManager = { status: 'disapproved_manager' }
			const resDisapprovedManager = await eventService.getEvent(
				paramDisapprovedManager,
			)
			if (resDisapprovedManager) {
				this.listDisapprovedManager = resDisapprovedManager.data.content
			}

			const paramDisapprovedVP = { status: 'disapproved_vp' }
			const resDisapprovedVP = await eventService.getEvent(paramDisapprovedVP)
			if (resDisapprovedVP) {
				this.listDisapprovedVP = resDisapprovedVP.data.content
			}

			const paramDisapprovedDirectors = { status: 'disapproved_director' }
			const resDisapprovedDirectors = await eventService.getEvent(
				paramDisapprovedDirectors,
			)
			if (resDisapprovedDirectors) {
				this.listDisapprovedDirectors = resDisapprovedDirectors.data.content
			}
			this.$parent.isLoading = false
		},
		getRole() {
			const dataUser = JSON.parse(localStorage.getItem('user_detail'))
			const { role } = dataUser
			if (role === 'CLIENT') {
				this.isRequester = true
				this.getManager()
			} else if (role === 'STAFF') {
				this.isStaff = true
			} else if (role === 'MANAGER') {
				this.isManager = true
				this.getEmployee()
			} else if (role === 'VP') {
				this.isVP = true
			} else if (role === 'DIRECTOR') {
				this.isDirectors = true
			}
		}
	}
}
</script>

<style lang="scss" scoped>
._date {
	display: flex;
	justify-content: space-between;

	div {
		width: 48%;
	}
}

.files-list-name {
	width: 100%;
	display: flex;
	padding-top: 5px;

	.files-tag-name {
		cursor: pointer;
		border: 1px solid #0077b5;
		border-radius: 6px;
		padding: 3px 5px;
		font-size: 10px !important;
		color: #0077b5;
		margin-right: 5px;

		&:hover {
			color: #f5f5f5;
			background-color: rgb(228, 50, 50);
			border: none;

			&:after {
				cursor: pointer;
				content: 'X';
				font-weight: bold;
				margin-left: 10px;
			}
		}
	}

	.files-tag-name2 {
		cursor: pointer;
		border: 1px solid #0077b5;
		border-radius: 6px;
		padding: 3px 5px;
		font-size: 10px !important;
		color: #0077b5;
		margin-right: 5px;
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
			margin-bottom: 10px;
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
		position: fixed;
		right: 0;
		width: 27%;
		height: 100vh;
		display: flex;
		flex-direction: column;
		padding: 30px;
		background-color: #f5f5f5;
		overflow: auto;

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
