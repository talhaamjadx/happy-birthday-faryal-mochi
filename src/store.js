import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    currentLyrics: "",
  },
  mutations: {
    increment (state) {
      state.count++
    },
    setAudio (state, payload){
        state.audio = payload
    }
  },
  getters:{
      getIncrement(state){
          return state.count
      },
      getAudio(state){
          return state.audio
      }
  }
})

export default store