import {createStore} from 'vuex';

import coachesModules from './modules/coaches/index';
import requestsModules from './modules/requests/index';

const store = createStore({
    modules: {
        coachesModules
    }
})

export default store;
