import Vue from 'vue';
import Router from 'vue-router';

import Index from './pages/Index';
import Test from './pages/Test';

Vue.use(Router);

export function createRouter() {
    return new Router({
        linkExactActiveClass: 'active',
        mode: 'history',
        routes: [
            {
                path: '/',
                name: 'index',
                components: {
                    default: Index,
                },
            },
            {
                path: '/test',
                name: 'test',
                components: {
                    default: Test,
                },
            },
        ],
        scrollBehavior: to => {
            if (to.hash) {
                return { selector: to.hash };
            } else {
                return { x: 0, y: 0 };
            }
        },
    });
}
