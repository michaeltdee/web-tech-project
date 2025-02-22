import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import TopStory from '@/views/TopStory.vue';
import LoginForm from "@/views/LoginForm.vue";
import AdminView from "@/views/AdminView.vue";
import AdminArticle from "@/views/AdminArticle.vue";


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
    {
        path: '/Login',
        name: 'Login',
        component: LoginForm,
    },
    {
        path: '/AdminView',
        name: 'AdminView',
        component: AdminView,
    },
    {
        path: '/AdminArticle',
        name: 'AdminArticle',
        component: AdminArticle,
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

console.log(router.options.routes);

export default router;

