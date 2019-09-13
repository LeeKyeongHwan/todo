<template>
  <v-container fluid >
    <v-row>
      <v-col
        v-for="item in 12"
        :key="item"
        cols="6"
        md="4"
        lg="2"
      >
        <v-card>
          <v-card-text class="white--text" @click.stop>
            <div class="headline mb-2">제목 {{ item }}</div>
            내용........<br>adsadasda
          </v-card-text>

          <v-card-actions>
            <div class="pl-2 body-2">2019-09-13</div>
            <div class="flex-grow-1"></div>
            <v-btn icon>
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click="openUpdateToDo">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ToDo',
  components: {
  },
  data: () => ({
  }),
  methods: {
    openUpdateToDo () {
      this.$store.commit('openModal', 'updateToDo')
    }
  },
  created () {
  }
})
</script>
