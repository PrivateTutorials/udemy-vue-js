<template>
    <div>
        <!-- check if we have content for header slot in parent component -->
        <header v-if="$slots.header">
            <slot name="header">
                <!-- slot fallback. will be displayed if in parent Comp we don't pass anything inside -->
                <h2>Default Slot content</h2>
            </slot>
        </header>
        <!-- slot - the same as react props.children -->
        <slot></slot>
    </div>
</template>

<script>
    export default {
        mounted() {
            // console.log(this.$slots.header);
        }
    }
</script>

<style scoped>
    div {
        margin: 2rem auto;
        max-width: 30rem;
        border-radius: 12px;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
    }

    header {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
</style>
