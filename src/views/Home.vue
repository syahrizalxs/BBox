<template>
  <div id="home">
    <Sidebar />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
  export default {
    name: 'Home',
    components: {
      Sidebar
    },
    data: () => ({ drawer: null }),
  }
</script>

<style lang="scss">

</style>
