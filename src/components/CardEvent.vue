<template>
  <div class="card-event">
    <div class="_left-side">
      <img v-if="starred" src="../assets/icons/star.svg" alt="">
      <span>{{title}}</span>
    </div>
    <div class="_right-side">
      <span :class="statusStyle">{{ status }}</span>
      <img class="pointer" src="../assets/icons/more.svg">
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
    border: 2px solid #0077B5;
    box-sizing: border-box;
    border-radius: 5px;
    padding: 9px 15px;
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
</style>