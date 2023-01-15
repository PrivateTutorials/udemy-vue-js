<template>
    <div>
        <button @click="saveChanges">Save Changes</button>
        <ul>
            <user-item v-for="user in users" :key="user.id" :name="user.fullName" :role="user.role"></user-item>
        </ul>
    </div>
</template>

<script>
    import UserItem from '../components/users/UserItem.vue';

    export default {
        components: {
            UserItem,
        },
        inject: ['users'],
        data(){
          return {
              changesSaved: false
          }
        },
        methods: {
            programmaticNavigation() {
                // programmatic router navigation
                this.$router.push('/teams')
            },
            saveChanges(){
                this.changesSaved = true;
            }
        },
        // component router Guard. Runs after global and route personal guards
        beforeRouteUpdate(to, from, next) {
            next();
        },
        beforeRouteEnter(to, from, next) {
            next();
        },
        // router guard for leave
        beforeRouteLeave(to, from, next){
            if(this.changesSaved) {
                next();
            } else {
               const isUserLeaving = confirm('Are you sure? Changes are not saved');
               next(isUserLeaving);
            }
        },
        // runs after navigation has been confirmed
        unmounted() {

        }
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 2rem auto;
        max-width: 20rem;
        padding: 0;
    }
</style>
