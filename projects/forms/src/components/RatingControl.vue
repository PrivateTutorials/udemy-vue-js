<template>
    <ul>
        <li :class="{active: activeOption === 'poor'}">
            <button type="button" @click="setActiveButton('poor')">Poor</button>
        </li>
        <li :class="{active: activeOption === 'average'}">
            <button type="button" @click="setActiveButton('average')">Average</button>
        </li>
        <li :class="{active: activeOption === 'great'}">
            <button type="button" @click="setActiveButton('great')">Great</button>
        </li>
    </ul>
</template>

<script>
    export default {
        props: ['modelValue'], // a specific prop that is passed to a custom comp, when in parent we use "v-model"
        emits: ['update:modelValue'], // special event that custom comp emits, when in parent we use "v-model"
        /*
        // reset on parent comp doesn't reflect changes here
        data() {
            return {
                activeOption: this.modelValue // initial value is passed from parent comp
            }
        },*/
        computed: {
            activeOption(){
                return this.modelValue;
            }
        },
        methods: {
            setActiveButton(option) {
                this.activeOption = option;
                this.$emit('update:modelValue', option)
            }
        }
    }
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0.5rem 0;
        padding: 0;
        display: flex;
    }

    li {
        margin: 0 1rem;
        border: 1px solid #ccc;
        padding: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .active {
        border-color: #a00078;
    }

    .active button {
        color: #a00078;
    }

    button {
        font: inherit;
        border: none;
        background-color: transparent;
        cursor: pointer;
    }
</style>
