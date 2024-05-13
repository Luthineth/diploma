import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'MainPage',
        component: () => import('@/pages/main/MainPage.vue')
    },
    {
        path: '/params_current',
        name: 'ParamsCurrent',
        component: () => import('@/pages/params/ParamsCurrent.vue')
    },
    {
        path: '/params_total',
        name: 'ParamsTotal',
        component: () => import('@/pages/params/ParamsTotal.vue')
    },
    {
        path: '/params_adjustable',
        name: 'ParamsAdjustable',
        component: () => import('@/pages/params/ParamsAdjustable.vue')
    },
    {
        path: '/archive_interval',
        name: 'ArchiveInterval',
        component: () => import('@/pages/archive/ArchiveInterval.vue')
    },
    {
        path: '/archive_control',
        name: 'ArchiveControl',
        component: () => import('@/pages/archive/ArchiveControl.vue')
    },
    {
        path: '/archive_ns',
        name: 'ArchiveNS',
        component: () => import('@/pages/archive/ArchiveNS.vue')
    },
    {
        path: '/archive_database',
        name: 'ArchiveDatabase',
        component: () => import('@/pages/archive/ArchiveDatabase.vue')
    },
    {
        path: '/:pathMatch(.*)',
        name: 'NotFound',
        component: () => import('@/pages/NotFoundPage.vue')
    }
];

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: routes
});

export default router;