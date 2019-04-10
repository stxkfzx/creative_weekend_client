import Vue from 'vue'
import Router from 'vue-router'
import Share from './views/Share.vue'
import Strategy from './views/Strategy.vue'
import OutActivity from './views/OutActivity.vue'
import Mine from './views/Mine.vue'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/share',
        name: 'share',
        component: Share
    }, {
        path: '/strategy',
        name: 'strategy',
        component: Strategy
    }, {
        path: '/outactivity',
        name: 'outactivity',
        component: OutActivity
    }, {
        path: '/mine',
        name: 'mine',
        component: Mine
    }]
})