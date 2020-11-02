<template>
  <div class="card-event">
    <div class="_left-side">
      <img v-if="starred" src="../assets/icons/star.svg" alt="">
      <span>{{title}}</span>
    </div>
    <div class="_right-side">
      <span :class="statusStyle">{{ status }}</span>
      <div class="_dropdown">
        <img @click="showDropdown()" class="pointer" src="../assets/icons/more.svg">
        <div class="_dropdown-content">
          <slot name="dropdown"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardEvent',
  props: ['title', 'status', 'starred'],
  computed: {
    statusStyle () {
      let status = ''
      if (this.status === 'cleared') {
        status = 'cleared'
      } else if (this.status === 'on progress') {
        status = 'on-progress'
      } else if (this.status === 'canceled') {
        status = 'cancel'
      }
      return status
    }
  },
  methods: {
    showDropdown () {
      // document.querySelectorAll('._dropdown-content')[3].style.display = 'flex'
    }
  }
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
      border: 3px solid #0378b8;
      cursor: pointer;
    }

    &.active {
      border: 3px solid #0378b8;
      cursor: pointer;
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

  .cleared {
    color: #219653;
  }

  .on-progress {
    color: #D56400;
  }

  .cancel {
    color: #EB5757;
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