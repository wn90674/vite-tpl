import { createApp } from 'vue'
import { createPinia } from 'pinia'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate'
import i18n from './i18n'
import App from './App.vue'
import './index.css'

import router from './router'
createApp(App)
  .use(i18n)
  .use(router)
  .use(createPinia().use(piniaPluginPersistedstate))
  .mount('#app')
