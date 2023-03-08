import {createStore} from "vuex";

import productsModule from './modules/products';
import cartModule from './modules/cart';

export const store = createStore({
    modules: {
        productsStoreNamespace: productsModule,
        cartStoreNamespace: cartModule,
    },
    state() {
        return {
            isLoggedIn: false,
        }
    },
    mutations: {
        loginMutation(currentState) {
            currentState.isLoggedIn = true;
        },
        logoutMutation(currentState) {
            currentState.isLoggedIn = false;
        },
    },
    actions: {
        loginAction(context) {
            context.commit('loginMutation');
        },
        logoutAction(context) {
            context.commit('logoutMutation');
        }
    },
    getters: {
        isAuthenticated(currentState) {
            return currentState.isLoggedIn;
        }
    }
});
