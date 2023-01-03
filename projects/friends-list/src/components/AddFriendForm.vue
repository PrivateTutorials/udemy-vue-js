<template>
    <form @submit.prevent="submitFormHandler">
        <div>
            <label>Name</label>
            <input type="text" v-model="enteredName">
        </div>
        <div>
            <label>Phone</label>
            <input type="text" v-model="enteredPhoneNumber">
        </div>
        <div>
            <label>Email</label>
            <input type="email" v-model="enteredEmail">
        </div>

        <button>Add Contact</button>
    </form>
</template>

<script>
    export default {
        data(){
            return {
                enteredName: '',
                enteredPhoneNumber: '',
                enteredEmail: ''
            }
        },
        emits: ['add-friend'],
        methods: {
            submitFormHandler(){
                this.$emit('add-friend', this.enteredName, this.enteredPhoneNumber, this.enteredEmail);
            }
        }
    }
</script>
