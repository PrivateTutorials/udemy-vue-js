<template>
    <div>
        <h2>Manage Goals</h2>
        <input type="text" ref="goal"> <!-- used in this.$refs.goal -->
        <button @click="setGoal">Set Goal</button>

        <!-- teleport - built-in vue component
        initially <error-alert> will be at the bottom of <body> for good semantic -->
        <teleport to="body">
            <error-alert v-if="inputIsInvalid">
                <h2>Input is Invalid</h2>
                <p>Please Enter smth</p>
                <button @click="confirmError">OK</button>
            </error-alert>
        </teleport>

    </div>
</template>

<script>
    import ErrorAlert from './ErrorAlert.vue';

    export default {
        // local components
        components: {
            ErrorAlert
        },
        data() {
            return {
                inputIsInvalid: false
            }
        },
        methods: {
            setGoal() {
                const enteredGoal = this.$refs.goal.value;
                if (enteredGoal === '') {
                    this.inputIsInvalid = true;
                }
            },
            confirmError() {
                this.inputIsInvalid = false;
            }
        }
    }
</script>
