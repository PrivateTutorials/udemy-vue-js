export default {
    counterMultipliedByTwo(currentState, otherGetters, rootState, rootGetters) {
        return currentState.counter * 2;
    },
    // reusing another getter
    normalizedCounter(_currentState, otherGetters) {
        const finalCounter = otherGetters.counterMultipliedByTwo;

        if (finalCounter < 0) return 0;
        else if (finalCounter > 100) return 100;

        return finalCounter;
    },
}
