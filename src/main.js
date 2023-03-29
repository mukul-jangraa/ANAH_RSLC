import "bootstrap/dist/css/bootstrap.css"
import { BootstrapIconsPlugin } from 'bootstrap-icons-vue';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)
app.use(BootstrapIconsPlugin);
app.use(router)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"
