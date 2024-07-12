import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

import { createMemoryHistory, createRouter } from 'vue-router'
import Page1 from './components/Page1.vue'
import Page2 from './components/Page2.vue'

const routes = [
  { path: '/', component: Page1 },
  { path: '/about', component: Page2 },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(App).use(router).mount('#app')

