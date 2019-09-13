import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    createToDo: false,
    updateToDo: false
  },
  getters: {
    getCreateToDo (state): boolean {
      return state.createToDo
    },
    getUpdateToDo (state): boolean {
      return state.updateToDo
    }
  },
  mutations: {
    openModal (state, payload: string) {
      state[payload] = true
    },
    closeModal (state, payload: String) {
      state[payload] = false
    }
  },
  actions: {
  },
  modules: {
  }
})
