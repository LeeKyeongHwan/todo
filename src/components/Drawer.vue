<template>
  <v-navigation-drawer
    :value="drawer"
    app
    clipped
  >
    <v-list dense>
      <v-list-item @click="1">
        <v-list-item-action>
          <v-icon>mdi-view-dashboard</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Dashboard</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item @click="1">
        <v-list-item-action>
          <v-icon>mdi-settings</v-icon>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title>Settings</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts">
import Vue from 'vue'
import { mapState } from 'vuex'

export default Vue.extend({
  data: () => ({
  }),
  computed: {
    ...mapState([
      'drawer'
    ])
  }
})
</script>

<style lang="scss" scoped>

</style>
