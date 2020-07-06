import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedstate from 'vuex-persistedstate'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: ''
  },
  mutations: {
    login (state, data) {
      state.user = data
    },
    // 登出後清空資料
    logout (state) {
      state.user = ''
    }
  },
  getters: {
    user (state) {
      return state.user
    }
  },
  plugins: [createPersistedstate()]
})
