import {createRouter, createWebHistory} from "vue-router";

import CoachDetails from "./pages/coaches/CoachDetails.vue";
import CoachesList from "./pages/coaches/CoachesList.vue";
import CoachRegistration from "./pages/coaches/CoachRegistration.vue";
import RequestsReceived from "./pages/requests/RequestsReceived.vue";
import ContactCoach from "./pages/requests/ContactCoach.vue";
import NotFound from "./pages/NotFound.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', redirect: '/coaches'},
        {path: '/coaches', component: CoachesList},
        {
            path: '/coaches/:id',
            component: CoachDetails,
            children: [
                // for children routes, a <router-view> needs to be added in parent Comp. e.g.: CoachDetails comp.
                // because we are not replacing a page/route, but appending it
                {path: 'contact', component: ContactCoach} // URL example: coaches/c1/contact
            ]
        },
        {path: '/register', component: CoachRegistration},
        {path: '/requests', component: RequestsReceived},
        {path: '/:notFound(.*)', component: NotFound},
    ],
})

export default router;
