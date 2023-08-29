import './assets/main.css'

import { createApp } from 'vue'
import {createRouter , createWebHistory} from 'vue-router'
import particles from 'vue3-particles'
import App from './App.vue'
import second from './components/second.vue'

const router=createRouter({
    history:createWebHistory(),
    routes:[
        {path:'/',component: second},

    ]

})

createApp(App)
    .use(particles)
    .use(router)
    .mount('#app')
