import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    myAudio: null,
    check1: false,
    currentLyrics: "I can't sing but I guess this explains what i wanna say, So here it goes...",
  },
  mutations: {
    setCurrentLyrics(state, payload){
        state.currentLyrics = payload
    },
    setCheck1(state, payload){
      state.check1 = payload
    },
    setMyAudio(state, payload){
      state.myAudio = payload
    }
  },
  getters:{
      getCurrentLyrics(state){
          return state.currentLyrics
      },
      getCheck1(state){
        return state.check1
      },
      getMyAudio(state){
        return state.myAudio
      }
  }
})

export default store