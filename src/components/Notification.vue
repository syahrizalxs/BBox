<template>
  <div class="_notification">
    <span>You have 2 notifications</span>
    <img src="../assets/icons/bell.svg" alt="">
  </div>
</template>

<script>
export default {
  name: 'Notification'
}
</script>

<style lang="scss" scoped>
  ._notification {
    display: flex;
    justify-content: flex-end;
    width: 100%;
    span {
      margin-right: 20px;
      font-family: Helvetica;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 21px;
      text-align: right;
      letter-spacing: 0.01em;

      color: #0077B5;
    }
  }
</style>