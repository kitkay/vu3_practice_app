import { createRouter, createWebHistory } from "vue-router";
import AboutPage from "@/views/AboutPage.vue";
import ContactPage from "@/views/ContactPage.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/about',
            component: AboutPage
        },
        {
            path: '/contact',
            component: ContactPage,
        }
    ]
});

export default router;