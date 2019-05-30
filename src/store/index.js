import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

// Modules
import common from './modules/common'

Vue.use(Vuex)

export default new Vuex.Store({
  /**
   * Assign the modules to the store
   */
  modules: {
    common
  },
  plugins: [createPersistedState({
    key: 'jwt',
    // paths: ['common.email']
    paths: ['']
  })]
})
