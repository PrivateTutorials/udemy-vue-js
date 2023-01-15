import {createRouter, createWebHistory} from 'vue-router';

import TeamsList from './pages/TeamsList.vue';
import TeamMembers from './components/teams/TeamMembers.vue';
import UsersList from './pages/UsersList.vue';
import NotFound from './pages/NotFound.vue';
import TeamsFooter from './components/teams/TeamsFooter.vue';
import UsersFooter from './components/users/UsersFooter.vue';

const router = createRouter({
    history: createWebHistory(), // use built-in browser support
    routes: [
        {
            path: '/',
            redirect: '/teams'
        },
        {
            name: 'teams', // named route
            path: '/teams',
            meta: {needsAuth: true},
            components: { // multiple components
                default: TeamsList,
                footer: TeamsFooter // component that should be loaded in the provided router view
            },
            children: [
                /* routes from children need to be added as a separate <router-view></router-view> inside the component */
                {
                    name: 'team-members',
                    path: ':teamId',
                    component: TeamMembers,
                    props: true
                },

            ]
        },
        {
            path: '/users',
            components: {
                default: UsersList,
                footer: UsersFooter
            },
            alias: '/members', // alias - load same comp for diff paths

            // guard for specific route. Runs after global guards
            beforeEnter(to, from, next) {
                next();
            }
        },
        {
            path: '/:notFound(.*)', // 404
            component: NotFound
        }
    ],
    linkActiveClass: 'active', // override default .router-link-active class

    // f() is called by Browser every time the page changes
    // page will be scrolled to top every time we use navigation
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        }

        return {
            left: 0,
            to: 0,
        }
    }
});


// global Router guard
// called every time before EACH navigation action
router.beforeEach((to, from, next) => {
    // programmatic navigation
    //  next({name: 'team-members', params: {teamId: 't2'}});

    // getting data from meta prop
    if (to.meta.needsAuth) {
        console.log('Auth is needed');
        next();
    } else {
        next();
    }
});

router.afterEach((to, from) => {
    // Global after guard. Good for sending analytics
});

export default router;
