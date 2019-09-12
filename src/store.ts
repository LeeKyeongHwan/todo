import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: true
  },
  getters: {

  },
  mutations: {
    changeDrawer (state): void {
      state.drawer = !state.drawer
    }
  },
  actions: {

  },
  modules: {

  }
})
