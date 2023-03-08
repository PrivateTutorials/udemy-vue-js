<template>
    <div>
        <!-- has replaced <ul> native tag -->
        <transition-group tag="ul" name="user-list">
            <li v-for="user in users" :key="user" @click="removeUser(user)">{{user}}</li>
        </transition-group>
        <div>
            <input type="text" ref="userInputEl">
            <button @click="addUser">Add User</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                users: ['Igor', 'Max', 'Bob', 'Tom']
            }
        },
        methods: {
            removeUser(userName) {
                console.log('AAA');
                this.users = this.users.filter(user => user !== userName);
            },
            addUser() {
                const enteredUserName = this.$refs.userInputEl.value;
                this.users.unshift(enteredUserName);
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 1rem 0;
        padding: 0;
    }

    li {
        margin: 2px 0;
        border: 1px solid #ccc;
        padding: 1rem;
        text-align: center;
    }

    li:hover {
        cursor: pointer;
    }

    .user-list-enter-from {
        opacity: 0;
        transform: translateX(-30px);
    }

    .user-list-enter-active {
        transition: all 1s ease-out;
    }

    .user-list-enter-to, .user-list-leave-from {
        opacity: 1;
        transform: translateX(0);
    }

    .user-list-leave-active {
        transition: all 1s ease-in;
        position: absolute; /* fix for .user-list-move items when Delete action is done */
    }

    .user-list-leave-to {
        opacity: 0;
        transform: translateX(30px);
    }

    /* if there is <transition-group>, this class is added to other elems in group that are not actively moving
     vue will user "transform" prop under the hood */
    .user-list-move {
        transition: transform 0.5s ease-out;
    }
</style>
