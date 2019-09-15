<template>
  <v-container fluid>
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
            <v-btn icon @click="openDeleteToDo(item.id)">
              <v-icon>mdi-delete</v-icon>
            </v-btn>
            <v-btn icon @click="openUpdateToDo">
              <v-icon>mdi-pencil</v-icon>
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    <v-dialog :value="dialogDelete" persistent  max-width="300px">
      <v-card>
        <v-card-title>
          <span class="headline">ToDo Delete</span>
        </v-card-title>
        <v-card-text>
          해당 ToDo를 지울까요?
        </v-card-text>
        <v-card-actions>
          <div class="flex-grow-1"></div>
          <v-btn color="primary" text @click="dialogDelete = false">Close</v-btn>
          <v-btn color="primary" text @click="deleteToDo">Delete</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue'
import moment from 'moment'
import * as todo from '@/api/todos'

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
    dialogDelete: false,
    dialogId: ''
  }),
  computed: {
    todos () {
      return this.$store.getters.getToDos
    }
  },
  methods: {
    openUpdateToDo () {
      this.$store.commit('openModal', 'updateToDo')
    },
    openDeleteToDo (id: string) {
      this.dialogId = id
      this.dialogDelete = true
    },
    async deleteToDo () {
      await todo.DELETE(this.dialogId)
      this.$store.dispatch('getToDos')
      this.dialogId = ''
      this.dialogDelete = false
    }
  },
  created () {
    this.$store.dispatch('getToDos')
  }
})
</script>
