import '_sass/main.scss'
import Vue from 'vue'
import * as filters from '_common/filters/index.js'

import { sync } from 'vuex-router-sync'
import store from './store'
import router from './router'

import App from './App.vue'

// register global utility filters
Object.keys(filters).forEach(key => {
    Vue.filter(key, filters[key])
})

sync(store, router)

new Vue({
    store,
    router,
    ...App
}).$mount('#app')