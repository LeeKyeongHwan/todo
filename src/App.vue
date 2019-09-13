<template>
  <v-app id="todo-app">
    <drawer></drawer>
    <app-header></app-header>

    <v-content>
      <router-view></router-view>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>

    <modal-to-do-create v-if="isCreateToDo"></modal-to-do-create>
    <modal-to-do-update v-if="isUpdateToDo"></modal-to-do-update>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Drawer from './components/Drawer.vue'
import AppHeader from './components/AppHeader.vue'
import ModalToDoCreate from './components/ModalToDoCreate.vue'
import ModalToDoUpdate from './components/ModalToDoUpdate.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Drawer,
    AppHeader,
    ModalToDoCreate,
    ModalToDoUpdate
  },
  data: () => ({
  }),
  computed: {
    isCreateToDo (): boolean {
      return this.$store.getters.getCreateToDo
    },
    isUpdateToDo (): boolean {
      return this.$store.getters.getUpdateToDo
    }
  },
  created () {
  }
})
</script>
