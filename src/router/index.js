import Vue from 'vue'
import Router from 'vue-router'

// ATENTION, Code Splitting
// you should use () => import('_views/VIEWNAME.vue') directly on the 'component'
// prop for every top level view (the ones without children)
// for children views, use the normal import
// import Component from '_views/component.vue'

Vue.use(Router)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: r => require(['_views/Home.vue'], r)
        }
    ]
})