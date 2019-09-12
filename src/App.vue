<template>
  <v-app id="todo-app">
    <drawer></drawer>
    <app-header></app-header>

    <v-content>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col class="shrink">
            <v-card
              color="#385F73"
              dark
            >
              <v-card-text class="white--text">
                <div class="headline mb-2">Unlimited music now</div>
                Listen to your favorite artists and albums whenever and wherever, online and offline.
              </v-card-text>

              <v-card-actions>
                <v-btn text>Listen Now</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>

    <v-footer app>
      <span>&copy; 2019</span>
    </v-footer>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import Drawer from './components/Drawer.vue'
import AppHeader from './components/AppHeader.vue'

export default Vue.extend({
  name: 'App',
  components: {
    Drawer,
    AppHeader
  },
  data: () => ({
    source: ''
  }),
  created () {
  }
})
</script>
