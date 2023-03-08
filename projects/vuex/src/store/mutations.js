export default {
    setAuth(currentState, payload) {
        currentState.userLoggedIn = payload.isLoggedIn;
    }
}
