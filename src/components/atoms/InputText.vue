<template>
  <input
    type="text"
    :value="value"
    :input="$emit('input', event.target.value)"
  >
</template>

<script>
export default {
  name: 'InputText',
  props: ['value'],
}
</script>

<style lang="scss" scoped>
input {
  background: #F1F1F1;
  border-radius: 5px;
}
</style>
