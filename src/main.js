import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import it from "./assets/content/content_IT.json"
import en from "./assets/content/content_EN.json"

const app = createApp(App)
app.use(router)
app.config.globalProperties.$content = {
  'it': it.content,
  'en': en.content
}
app.config.globalProperties.$lang = 'it'
app.mount('#app')