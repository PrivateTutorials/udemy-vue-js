<template>
    <section class="container">
        <UserData :firstName="firstName" :age="user.age"></UserData>
        <button @click="changeAge">Change Age</button>
        <div>
            <p>{{fullName}}</p>
            <input type="text" placeholder="First Name" @input="setFirstName">
            <input type="text" placeholder="Last Name" v-model="secondName">

            <br>
            <br>
            <h2>Set Nickname</h2>
            <p>{{nickname}}</p>
            <!-- ref="nicknameInputElement"  -  defined in setup() f() -->
            <input type="text" placeholder="Refs managed Nickname" ref="nicknameInputElement">
            <button @click="setNickname">Set Refs Name</button>
        </div>
    </section>
</template>

<!--
replaces setup(){...} f()
you also don't need to return exported values from setup(), that have to be used in template
-->

<script setup>
    const components = {
        UserData
    }

    import {ref, reactive, isReactive, isRef, toRefs, computed, watch, provide} from "vue";
    import UserData from './components/UserData.vue';

    /*
     ref() - creates reference not to DOM el, but ref to a value that we may use further
     basically - creates reactive variable

     with objects - to change it, we need access "value" prop:
     user.value.name = 'Bob'
    */

    const nicknameInputElement = ref(null); // initially we don't have DOM elem to bind to

    const firstName = ref('');
    const secondName = ref('');
    const nickname = ref('');

    provide('lastName', secondName);

    // Watch multiple vars:
    // watch([firstName, secondName], (newValues, oldValues)=> {
    watch(firstName, (newVal, oldVal) => {
    });

    // computed() f() re-executed every time each of its dependencies changes
    // fullName - readpnly ref
    const fullName = computed(() => {
        return `${firstName.value} ${secondName.value}`
    });

    // reactive() - the same as ref(), but specially for objects. Doesn't create wrapper "ref" obj
    const user = reactive({
        name: 'Igor',
        age: 32
    });

    /*
    make obj props reactive:
    const userRefs = toRefs(user);
    console.log(isRef(userRefs.name));
    */

    setTimeout(() => {
        user.name = 'Bob';
    }, 1000);

    const changeAge = () => {
        user.age--;
    };

    const setFirstName = (e) => {
        firstName.value = e.target.value;
    };

    const setNickname = () => {
        // to get value from DOM ref:
        nickname.value = nicknameInputElement.value.value;
        console.log(nickname.value);
    }
</script>

<style>
    * {
        box-sizing: border-box;
    }

    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }

    .container {
        margin: 3rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        text-align: center;
    }
</style>

<!--
benefits of Composition vs Option API
1. Can watch multiple vars simultaneously with 1 handler f().
In options API - watch separately per var, because you need to use the same name
-->
