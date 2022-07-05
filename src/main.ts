import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import App from './App.vue'
import './index.css'

import router from './router'
createApp(App)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .mount('#app')
