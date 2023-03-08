export default {
    // name may be the same or different from mutations
    incrementActionName(context) {
        setTimeout(() => {
            context.commit('incrementByOne');
        }, 1000)
    },
}
