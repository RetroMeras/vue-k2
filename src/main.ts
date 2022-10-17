import './style.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router'
import store, { key } from './store/store'


const app = createApp(App)

app.use(store, key)
app.use(router)
app.mount('#app')
