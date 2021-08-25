import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Search from '../views/Search.vue'
import List from '../views/List.vue'
import Detail from '../views/Detail.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/home', component: Home },
    { path: '/search', component: Search },
    { path: '/list/:sortName', component: List },
    { path: '/detail/:sortName/:id', component: Detail },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router