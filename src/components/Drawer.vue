<template>
  <v-navigation-drawer
    v-model="drawer"
    app
    clipped
  >
    <v-list dense>
      <v-list-item @click="1">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>All</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="1">
        <v-list-item-action>
          <v-icon>mdi-check_box</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>ToDo</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="1">
        <v-list-item-action>
          <v-icon>mdi-check</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Done</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import EventBus from '@/js/eventBus'

export default Vue.extend({
  data: () => ({
    drawer: false
  }),
  created () {
    EventBus.$on('changeDrawer', () => {
      this.drawer = !this.drawer
    })
  }
})
</script>

<style lang="scss" scoped>

</style>
