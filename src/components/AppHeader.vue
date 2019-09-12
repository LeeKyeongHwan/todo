<template>
  <v-app-bar
    app
    clipped-left
  >
    <v-app-bar-nav-icon @click.stop="clickDrawer"></v-app-bar-nav-icon>

    <v-toolbar-title>ToDo</v-toolbar-title>

    <div class="flex-grow-1"></div>

    <v-btn icon>
      <v-icon>mdi-plus</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data: () => ({
  }),
  methods: {
    clickDrawer (): void {
      this.$store.commit('changeDrawer')
    }
  }
})
</script>
