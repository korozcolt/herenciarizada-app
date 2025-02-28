import './style.css';

import App from './App.vue';
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import router from './router'; // Importa el router desde router/index.ts

const pinia = createPinia();
const app = createApp(App);

app.use(router); // Usa el router
app.use(pinia);
app.mount('#app');