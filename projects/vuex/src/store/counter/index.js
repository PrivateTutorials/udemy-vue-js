import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// each module has local state, without access to other modules states
// way to access main state - rootState, rootGetters
export const counterStoreModule = {
    namespaced: true, // detaches this store from global one, preventing it merging there
    state() {
        return {
            counter: 0,
        }
    },
    mutations,
    actions,
    getters,
};
