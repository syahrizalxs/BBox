<template>
  <div
    v-if="visible"
    id="myModal"
    class="alert"
  >
    <!-- alert content -->
    <div class="alert-content">
      <div class="alert-header">
        <span class="title">{{ message }}</span>
        <span
          class="close"
          @click="visible = false"
        >&times;</span>
      </div>
      <div class="line" />
      <div class="alert-body">
        <slot name="body" />
      </div>
      <div class="alert-footer">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: ['message'],
  data: () => ({
    visible: false,
  }),
  methods: {
    show(message) {
      this.message = message
      this.visible = true
    },
  },
}
</script>

<style lang="scss" scoped>

.alert {
  display: block; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 1; /* Sit on top */
  padding-top: 100px; /* Location of the box */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0,0,0); /* Fallback color */
  background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

  /* alert Content */
  .alert-content {
    background-color: #fefefe;
    border-radius: 10px;
    margin: auto;
    border: 1px solid #888;
    width: 50%;
    min-height: 30%;

    .alert-header {
      display: flex;
      justify-content: space-between;
      padding: 20px 24px 6px 24px;

      .title {
        font-weight: bold;
        font-size: 24px;
        line-height: 33px;
        color: #333333;
      }

      .close {
        cursor: pointer;
        font-size: 24px;
        color: rgb(179, 176, 176);
        &:hover {
          color:#333333;
        }
      }
    }

    .line {
      height: 1px;
      background-color: #C4C4C4;
      margin: 0px 24px;
    }
    .alert-body {
      height: 100%;
      width: 100%;
      padding: 26px;
    }

    .alert-footer {
      width: 100%;
      padding: 26px;
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }
}

</style>
