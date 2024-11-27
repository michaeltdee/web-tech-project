import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TopStory from '@/views/TopStory.vue';


const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/MainStory',
        name: 'Story',
        component: TopStory,
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log(router.options.routes);

export default router;

