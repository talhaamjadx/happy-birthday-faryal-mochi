import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    currentLyrics: "*main chorus*",
  },
  mutations: {
    setCurrentLyrics(state, payload){
        state.currentLyrics = payload
    }
  },
  getters:{
      getCurrentLyrics(state){
          return state.currentLyrics
      }
  }
})

export default store