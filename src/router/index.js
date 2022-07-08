import Vue from 'vue'
import VueRouter from 'vue-router'
import i18next from "@/plugins/i18n.js";

Vue.use(VueRouter);

const createRouter = () => new VueRouter({
    routes: [
        {
            path: '/',
            name: '',
            component: () => import("@/views/Home.vue")
        },
        {
            path: '/dashboard',
            name: 'dashboard',
            component: () => import("@/views/Dashboard.vue")
        }
    ]
})

const router = createRouter();
router.beforeEach(async (to, from, next) => {
    const {name} = to;
    if (name) await i18next.loadNamespaces([name]);
    next();
})

export default router;
