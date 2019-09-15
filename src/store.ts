import Vue from 'vue'
import Vuex from 'vuex'
import firebase from 'firebase'
import * as todo from '@/api/todos'

Vue.use(Vuex)

const DB = firebase.firestore()

export default new Vuex.Store({
  state: {
    createToDo: false,
    updateToDo: false,
    todos: []
  },
  getters: {
    getCreateToDo (state): boolean {
      return state.createToDo
    },
    getUpdateToDo (state): boolean {
      return state.updateToDo
    },
    getToDos (state): Array<any> {
      return state.todos
    }
  },
  mutations: {
    openModal (state, payload: string) {
      (state as any)[payload] = true
    },
    closeModal (state, payload: string) {
      (state as any)[payload] = false
    },
    getToDos (state, payload: Array<any>) {
      (state as any).todos = payload
    }
  },
  actions: {
    async getToDos ({ commit }) {
      let data = await todo.GET_ALL()
      commit('getToDos', data)
    }
  },
  modules: {
  }
})
