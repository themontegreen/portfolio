import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import it from "./assets/content_IT.json";
import en from "./assets/content_EN.json";

const app = createApp(App)

app.use(router)

app.mount('#app')
