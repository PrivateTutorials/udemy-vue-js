export default {
    incrementByOne(currentState) {
        currentState.counter++;
    },
    increaseByPassedValue(currentState, payload) {
        currentState.counter = currentState.counter + payload.value;
    },
}
