<!--
ways to get originalObjectWithData from form:
1. via v-model 2 way binding + originalObjectWithData property. Good for validation
2. via refs. Good for taking value only once
-->

<template>
    <!-- @close - emitted event from base-dialog comp -->
    <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="closeDialog">
        <template #default>
            <p>At least 1 input value is invalid</p>
            <p>Please check all the inputs if they are not empty</p>
        </template>

        <!-- named slot value -->
        <template #actions>
            <base-button @click="closeDialog">OK</base-button>
        </template>
    </base-dialog>

    <base-card>
        <form @submit.prevent="submitData">
            <div class="form-control">
                <label for="title">Title</label>
                <input id="title" name="title" type="text" ref="titleInput">
            </div>
            <div class="form-control">
                <label for="description">Title</label>
                <textarea id="description" name="description" rows="3" ref="descriptionInput"> </textarea>
            </div>
            <div class="form-control">
                <label for="link">Title</label>
                <input id="link" name="link" type="url" ref="linkInput">
            </div>
            <div>
                <base-button type="submit">Add Resource</base-button>
            </div>
        </form>
    </base-card>
</template>

<script>
    export default {
        inject: ['addLearningResource'],
        data() {
            return {
                inputIsInvalid: false
            }
        },
        methods: {
            submitData() {
                const enteredTitle = this.$refs.titleInput.value;
                const enteredDescription = this.$refs.descriptionInput.value;
                const enteredUrl = this.$refs.linkInput.value;

                if (!enteredUrl.trim() || !enteredDescription.trim() || !enteredUrl.trim()) {
                    this.inputIsInvalid = true;
                    return;
                }

                this.addLearningResource(enteredTitle, enteredDescription, enteredUrl);
            },
            closeDialog() {
                this.inputIsInvalid = false;
            }

        }
    }
</script>

<style scoped>
    label {
        font-weight: bold;
        display: block;
        margin-bottom: 0.5rem;
    }

    input,
    textarea {
        display: block;
        width: 100%;
        font: inherit;
        padding: 0.15rem;
        border: 1px solid #ccc;
    }

    input:focus,
    textarea:focus {
        outline: none;
        border-color: #3a0061;
        background-color: #f7ebff;
    }

    .form-control {
        margin: 1rem 0;
    }
</style>
