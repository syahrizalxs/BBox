<template>
  <div class="card">
    <header class="card-header">
      <ul class="tab-heads">
        <li
          v-for="tab in tabs"
          :key="tab"
          class="tab-head"
          :class="{
            'tab-head--active': activeTab === tab
          }"
          @click="switchTab(tab);"
        >
          <slot :name="tabHeadSlotName(tab)">
            {{ tab }}
          </slot>
        </li>
      </ul>
    </header>
    <main class="card-body">
      <div class="tab-panel">
        <slot :name="tabPanelSlotName" />
      </div>
    </main>
  </div>
</template>

<script>

export default {
  props: {
    initialTab: String,
    tabs: Array,
  },
  data() {
    return {
      activeTab: this.initialTab,
    }
  },
  computed: {
    tabPanelSlotName() {
      return `tab-panel-${this.activeTab}`
    },
  },
  methods: {
    tabHeadSlotName(tabName) {
      return `tab-head-${tabName}`
    },

    switchTab(tabName) {
      this.activeTab = tabName
    },
  },
}
</script>

<style scoped>
.card {
  background-color: #fff;
  width: 100%;
  min-height: 400px;
}

.card-header {
  height: 100%;
  display: flex;
  align-items: flex-start;
  height: 30px;
  border-bottom: 1px solid #C4C4C4;
  font-weight: 500;
  font-size: 16px;
  line-height: 21px;
  letter-spacing: 0.01em;

  /* Gray 2 */

  color: #4F4F4F;
}

.tab-heads {
  width: 100%;
  display: flex;
  justify-content: flex-start;
  margin: 0;
  padding: 0;
  height: 100%;
  list-style: none;
}

.tab-head {
  text-align: center;
  min-width: 132px;
  height: 100%;
  cursor: pointer;
}

.tab-head--active {
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  /* identical to box height */

  letter-spacing: 0.01em;

  /* main-blue */

  color: #0077B5;
  border-bottom: 2px solid #0077B5;
}

.card-body {
  padding: 5px 16px;
  height: 100% !important;
}
</style>
