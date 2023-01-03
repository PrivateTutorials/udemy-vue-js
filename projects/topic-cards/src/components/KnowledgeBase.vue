<template>
    <section>
        <h2>Select a Topic</h2>
        <!-- Chain of emitting event up to parent:
        <knowledge-grid @select-topic="$emit('select-topic', $event)"></knowledge-grid> -->
        <knowledge-grid></knowledge-grid>
    </section>
</template>

<script>
    export default { };
</script>
