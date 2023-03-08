import {createStore} from "vuex";

import rootMutations from './mutations';
import rootActions from './actions';
import rootGetters from './getters';
import {counterStoreModule} from './counter/index';

export const store = createStore({
    modules: {
        numbers: counterStoreModule // if "namespaced" is enabled in local store, then "numbers" - a namespace name
    },
    state() {
        return {
            userLoggedIn: false
        }
    },
    // myst be synchronous. Solution - ACTIONS
    mutations: rootMutations,
    actions: rootActions,
    getters: rootGetters
});

// context.commit - calling mutations
// context.dispatch - calling other actions

// context - access to all store data, even from other modules

// mutations and getters - have access to state
// actions - have access to context
