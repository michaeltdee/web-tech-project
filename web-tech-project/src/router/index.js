import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
 //   { path: '/mainstory', component: () => import('@/views/mainstory.vue') },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log(router.options.routes);

export default router;

