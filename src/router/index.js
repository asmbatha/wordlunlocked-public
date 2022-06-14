import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        name: 'home',
        component: HomeView
    },
    {
        path: '/play',
        name: 'play',
        component: () => import(/* webpackChunkName: "play" */ '../views/PlayView.vue')
    },
    {
        path: '/daily',
        name: 'daily',
        component: () => import(/* webpackChunkName: "play" */ '../views/DailyView.vue')
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
