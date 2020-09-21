import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { createWebHashHistory, createRouter } from 'vue-router'
import index from './components/index.vue'
import to from './components/to.vue'

const history = createWebHashHistory()
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      component: index,
    },
    {
      path: '/to',
      component: to,
    },
  ],
})

const app = createApp(App)
app.use(router)
app.mount('#app')
