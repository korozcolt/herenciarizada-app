import { RouteRecordRaw, createRouter, createWebHistory } from 'vue-router';

import Clients from '../views/Clients.vue';
import Dashboard from '../views/Dashboard.vue';
import Surveys from '../views/Surveys.vue';
import Treatments from '../views/Treatments.vue';

const routes: Array<RouteRecordRaw> = [
  { path: '/', component: Dashboard },
  { path: '/clients', component: Clients },
  { path: '/surveys', component: Surveys },
  { path: '/treatments', component: Treatments },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;