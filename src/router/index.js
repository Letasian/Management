import Vue from 'vue'
import Router from 'vue-router'
import Gamecenter from '../pages/Gamecenter.vue'
Vue.use(Router)
export default new Router({
    base: '/',
    routes: [{
        path: '/',
        name: 'Gamecenter',
        name_cn: "活动管理中心",
        component: Gamecenter
    } ]
})