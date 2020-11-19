<template>
  <button
    class="button"
    :class="type"
    @click="callback($event)"
  >
    <slot name="icon" />
    <span>{{ title }}</span>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    title: {
      type: String,
      default: 'Save',
    },
    type: {
      type: String,
      default: 'primary',
    },
  },
  data: () => ({}),
  methods: {
    callback(e) {
      this.$emit('click', e)
    },
  },
}
</script>

<style lang="scss" scoped>
  .button {
    border: none;
    outline: none;
    min-width: 50px;
    height: 28px;
    border-radius: 5px;
    display: flex;
    justify-content: center;

    span {
      align-self: center;
      font-family: Helvetica;
      font-style: normal;
      font-weight: 500;
      font-size: 12px;
      line-height: 16px;
      /* identical to box height */

      letter-spacing: 0.01em;
    }

    img {
      margin-right: 6px;
      align-self: center;
    }
  }
  .primary {
    background-color: #0077B5;
    color: #ffffff;
    &:hover {
      background-color: #00659b !important;
    }
  }

  .green {
    background-color: #00820D;
    color: #ffffff;
    &:hover {
      background-color: #00870d !important;
    }
  }

  .outline-primary {
    background-color: rgba(0, 119, 181, 0.1);
    border: 1px solid #0077B5;
    color: #0077B5 !important;

    &:hover {
      background-color: #0076b536;
    }
  }

  .danger {
    background-color: red;
    color: #ffffff;
  }

  .purple {
    background-color: #610085;
    color: #ffffff;
    &:hover {
      background-color: #620085f5 !important;
    }
  }
</style>
