import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const getComponents = name => () => import(/* webpackChunkName: "view/[request]" */ `_views/${name}.vue`)

export default new Router({
    mode: 'history',
    scrollBehavior: () => ({ y: 0 }),
    routes: [
        {
            path: '/',
            component: getComponents('Home')
        }
    ]
})
