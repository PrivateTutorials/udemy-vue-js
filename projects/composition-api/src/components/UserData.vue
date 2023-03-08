<template>
    <h2>{{fullName}}</h2>
    <h3>{{age}}</h3>
</template>

<script>
    import {
        computed,
        inject,
        onBeforeMount,
        onMounted,
        onBeforeUpdate,
        onUpdated,
        onBeforeUnmount,
        onUnmounted
    } from 'vue';


    export default {
        props: ['firstName', 'age'],

        setup(props, context) {
            // injected values should be changed in the component where they are provided from
            const lastName = inject('lastName');

            const fullName = computed(() => {
                return `${props.firstName} ${lastName.value}`;
            });

            // emit events in composition api:
            // context.emit('eventName', 1)

            onBeforeMount(() =>{
                console.log('On before mount');
            });

            return {
                fullName
            }
        }

    }
</script>
