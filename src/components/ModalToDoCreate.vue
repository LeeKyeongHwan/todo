<template>
   <v-dialog :value="dialog" max-width="600px" @click:outside.once="closeModal">
    <v-card>
      <v-card-title>
        <span class="headline">To Do Create</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12">
              <v-text-field
                label="제목 *"
                hint="제목을 입력하세요"
                required
              ></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea
                label="내용 *"
                hint="내용을 입력하세요"
                name="contents"
                required
              ></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-menu
                v-model="menuDate"
                :close-on-content-click="false"
                :nudge-right="20"
                transition="scale-transition"
                offset-y
                full-width
                min-width="290px"
              >
                <template v-slot:activator="{ on }">
                  <v-text-field
                    v-model="forms.date"
                    label="날짜 선택"
                    readonly
                    v-on="on"
                  ></v-text-field>
                </template>
                <v-date-picker v-model="forms.date" @input="menuDate = false"></v-date-picker>
              </v-menu>
            </v-col>
          </v-row>
        </v-container>
        <small>*필수 입력</small>
      </v-card-text>
      <v-card-actions>
        <div class="flex-grow-1"></div>
        <v-btn color="primary" text @click="closeModal">Close</v-btn>
        <v-btn color="primary" text @click="closeModal">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'ModalToDoCreate',
  components: {
  },
  data: () => ({
    forms: {
      date: '2019-09-13'
    },
    menuDate: false
  }),
  computed: {
    dialog (): boolean {
      return this.$store.state.createToDo
    }
  },
  methods: {
    closeModal () {
      this.$store.commit('closeModal', 'createToDo')
    }
  },
  created () {
  }
})
</script>
