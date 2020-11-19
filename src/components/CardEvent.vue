<template>
  <div
    class="card-event"
    @click="handleClick($event)"
  >
    <div class="_left-side">
      <img
        v-if="starred"
        src="../assets/icons/star.svg"
        alt=""
      >
      <span>{{ title }}</span>
    </div>
    <div class="_right-side">
      <span :class="statusStyle">{{ status | convertStatus }}</span>
      <div class="_dropdown">
        <img
          class="pointer"
          src="../assets/icons/more.svg"
        >
        <div class="_dropdown-content">
          <slot name="dropdown" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { convertStatus } from '../commons/utils/filter'

export default {
  name: 'CardEvent',
  filters: {
    convertStatus,
  },
  props: ['title', 'status', 'starred', 'data'],
  computed: {
    statusStyle() {
      let status = ''
      if (this.status === 'DRAFT') {
        status = 'draft'
      } else if (this.status === 'REQUESTED') {
        status = 'requested'
      } else if (this.status === 'ACCEPTED_MANAGER' || this.status === 'ACCEPTED_VP' || this.status === 'ACCEPTED_DIREKSI') {
        status = 'accepted'
      } else if (this.status === 'REJECTED_MANAGER' || this.status === 'REJECTED_VP' || this.status === 'REJECTED_DIREKSI') {
        status = 'rejected'
      } else if (this.status === 'ON_PROGRESS') {
        status = 'on-progress'
      } else if (this.status === 'COMPLETED') {
        status = 'completed'
      } else if (this.status === 'APPROVED_MANAGER' || this.status === 'APPROVED_VP') {
        status = 'approved'
      } else if (this.status === 'DISAPPROVED_MANAGER' || this.status === 'DISAPPROVED_VP' || this.status === 'DISAPPROVED_DIREKSI') {
        status = 'disapproved'
      } else if (this.status === 'FINISHED') {
        status = 'finished'
      }
      return status
    },
  },
  methods: {
    handleClick() {
      this.$emit('click', this.data)
    },
  },
}
</script>

<style lang="scss" scoped>
  .card-event {
    height: 54px;
    width: 100%;
    display: flex;
    flex-direction: row;
    background: #FFFFFF;
    border: 2px solid #5bc0f7;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 9px 15px;

    &:hover {
      border: 2px solid #0378b8;
      cursor: pointer;
      transition: .1s;
    }

    &.active {
      border: 3px solid #0075b4;
      cursor: pointer;
      background-color: rgba(253, 253, 253, 0.644);
      box-shadow: 2px 4px rgba(0, 0, 0, 0.097);
      transition: .3s;
    }
    ._left-side {
      display: flex;
      width: 50%;
      align-self: center;
      span {
        margin-left: 17.33px;
      }
    }

    ._right-side {
      display: flex;
      width: 50%;
      align-self: center;
      justify-content: space-between;
      span {
        text-transform: capitalize;
        font-size: 16px;
      }
    }
  }

  .draft {
    color: #D56400;
    font-weight: bold;
  }

  .requested {
    color: #d424e4;
    font-weight: bold;
  }

  .accepted {
    color: #219653;
    font-weight: bold;
  }

  .rejected {
    color: rgb(207, 70, 70);
    font-weight: bold;
  }

  .on-progress {
    color: rgb(62, 133, 199);
    font-weight: bold;
  }

  .completed {
    color: rgb(13, 134, 74);
    font-weight: bold;
  }

  .approved {
    color: #4adb89;
    font-weight: bold;
  }

  .disapproved {
    color: rgb(172, 17, 17);
    font-weight: bold;
  }

  .finished {
    color: #3ce237;
    font-weight: bold;
  }

  ._dropdown {
    position: relative;
    display: flex;
    &:hover ._dropdown-content {
      display: flex;
    }
    ._dropdown-content {
      display: none;
      flex-direction: column;
      position: absolute;
      margin-left: 20px;
      background-color: #f1f1f1;
      min-width: 130px;
      box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
      z-index: 1;
      span {
        color:#535151;
        font-size: 12px;
        padding: 12px 16px;
        text-decoration: none;
        display: block;
        &:hover {
          background-color: rgb(224, 224, 224);
        }
      }
    }
  }
</style>
