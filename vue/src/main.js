// main.js

import { createApp } from 'vue';
import App from './App.vue';
import { createRouter, createWebHistory } from 'vue-router';
import CoreuiVue from '@coreui/vue';
import '@coreui/coreui/dist/css/coreui.min.css'

// Import your components that will serve as different views/pages
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Register from './views/Register.vue';

const routes = [
  { path: '/Home', component: Home },
  { path: '/', component: Login },
  { path: '/Register', component: Register }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

const app = createApp(App);
app.use(router);
app.mount('#app');
app.use(CoreuiVue);

