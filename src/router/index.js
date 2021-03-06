import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home/home.vue'
import Login from '../components/login/login.vue'
import About from '../components/About/about.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/Login',
        name: 'Login',
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        component: About
    }
]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router