<template>
  <v-container fluid >
    <v-row>
      <v-col
        v-for="(item, index) in todos"
        :key="index"
        cols="6"
        md="4"
        lg="2"
      >
        <v-card>
          <v-card-text class="white--text" @click.stop>
            <div class="headline mb-2">{{ item.title }}</div>
            {{ item.contents }}
          </v-card-text>

          <v-card-actions>
            <div class="pl-2 body-2">{{ item.date | dateFormat }}</div>
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
import moment from 'moment'

export default Vue.extend({
  name: 'ToDo',
  components: {
  },
  filters: {
    dateFormat (value: [number, string]) {
      return moment(value).format('YYYY-MM-DD')
    }
  },
  data: () => ({
  }),
  computed: {
    todos () {
      return this.$store.getters.getToDos
    }
  },
  methods: {
    openUpdateToDo () {
      this.$store.commit('openModal', 'updateToDo')
    }
  },
  created () {
    this.$store.dispatch('getToDos')
  }
})
</script>
