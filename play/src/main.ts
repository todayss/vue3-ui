import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Icon from '@wan-xiang/components/icon'

const plugins = [Icon]

const app = createApp(App)

for(let comp of plugins) {
  app.use(comp)
}


app.mount('#app')
