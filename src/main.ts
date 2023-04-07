import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PortalVue from 'portal-vue'

import App from './App.vue'
import router from './router'

import './assets/main.scss'
const app = createApp(App)

app.use(createPinia())
app.use(PortalVue)
app.use(router)

app.mount('#app')
