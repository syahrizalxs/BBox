<template>
  <div id="home">
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
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

<style lang="scss" scoped>
  #home {
    height: 100%;
  }
  .main-content {
    margin-left: 75px;
    height: 100%;
  }
</style>
