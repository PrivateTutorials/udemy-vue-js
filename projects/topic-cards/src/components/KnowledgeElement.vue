<template>
    <li>
        <h3>{{ topicName }}</h3>
        <p>{{ description }}</p>
        <button @click="selectTopic(id)">Learn More</button>
    </li>
</template>

<script>
    export default {
        inject: ['selectTopic'], // replace emit chain to parent with injected f() handler from App parent
        props: ['id', 'topicName', 'description'],
        emits: ['select-topic'],
    };
</script>
