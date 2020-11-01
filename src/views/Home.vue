<template>
  <div id="home">
    <Loading v-if="isLoading"/>
    <Sidebar />
    <div class="main-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Loading from '@/components/Loading'
  export default {
    name: 'Home',
    components: {
      Sidebar,
      Loading
    },
    data: () => ({ 
      drawer: null,
      isLoading: true
    }),
  }
</script>

<style lang="scss" scoped>
  #home {
    height: 100vh;
  }
  .main-content {
    margin-left: 75px;
    height: 100%;
  }
</style>
