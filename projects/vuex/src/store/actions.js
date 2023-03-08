// actions call mutations by committing their name through "context"

export default {
    loginAction(context) {
        context.commit('setAuth', {isLoggedIn: true})
    },
    logoutAction(context) {
        context.commit('setAuth', {isLoggedIn: false})
    },
}
