import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import devicePage from './devicePage/index'

const store=new Vuex.Store({
    modules:{
      devicePage
    }
})

export default store
