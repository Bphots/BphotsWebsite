import Vue from 'Vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export  default new Vuex.Store({
  state:{
    picAuthor:'123'
  },
  mutations: {
   setpicAuthor(state,name){
     state.picAuthor = name
   }
  },
  actions:{

  },
})
