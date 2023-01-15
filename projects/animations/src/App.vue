<template>
    <div>
        <div class="container">
            <div class="block" :class="{animateBox : animatedBlock}"></div>
            <button @click="animateBLock">Animate</button>
        </div>
        <div class="container">
            <!-- <transition> - must contain only 1 child
             .v-enter-from, .v-enter-active, .v-enter-to
             .v-leave-from, v-leave-active, v-leave-to classes applied automatically
              name="..." -adds prefix to these classes
              not prefix, but whole class rename: "enter-to(active/from)-class="..." -->
            <transition name="paragraph">
                <p v-if="paragraphIsVisible">Sometimes visible</p>
            </transition>
            <button @click="toggleParagraph">Toggle Paragraph</button>
        </div>
        <base-modal @close="hideDialog" :open="dialogIsVisible">
            <p>This is a test dialog!</p>
            <button @click="hideDialog">Close it!</button>
        </base-modal>
        <div class="container">
            <button @click="showDialog">Show Dialog</button>
        </div>
        <div class="container">
            <!-- <transition> - must contain only 1 child, even if there are 2, but only 1 will be rendered at the same time -->
            <!-- mode="out-in" - fading transition will be performed first, adding new DOM element - 2-nd -->
            <transition name="users-fade-button" mode="out-in">
                <button @click="showUsers" v-if="usersAreVisible === false">Show Users</button>
                <button @click="hideUsers" v-else>Hide Users</button>
            </transition>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                dialogIsVisible: false,
                animatedBlock: false,
                paragraphIsVisible: false,
                usersAreVisible: false
            };
        },
        methods: {
            animateBLock() {
                this.animatedBlock = true;
            },
            showDialog() {
                this.dialogIsVisible = true;
            },
            hideDialog() {
                this.dialogIsVisible = false;
            },
            toggleParagraph() {
                this.paragraphIsVisible = !this.paragraphIsVisible;
            },
            showUsers() {
                this.usersAreVisible = true;
            },
            hideUsers() {
                this.usersAreVisible = false;
            }
        },
    };
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

    .animateBox {
        /* transform: translateX(-150px) scale(1.2) rotate(90deg);

         default behavior of css animation - they return to the initial values when animation ends
         forwards - to leave animation where it ended */
        animation: slide-box 2s linear forwards;
    }

    @keyframes slide-box {
        0% {
            transform: translateX(0) scale(1) rotate(0deg);
        }
        70% {
            transform: translateX(-120px) scale(1.2) rotate(20deg);
        }
        100% {
            transform: translateX(-150px) scale(1) rotate(90deg);
        }
    }

    .paragraph-enter-from, .paragraph-leave-to {
        opacity: 0;
        transform: translateY(-50px);
    }

    .paragraph-enter-active, .paragraph-leave-active {
        transition: all 0.3s ease-out;

        /*
        If yoy have more complex behavior than "transition", - use animation.
        in animation "forwards" is not needed and .v-enter-from, .v-enter-to classes may be removed:
        animation: slide-fade 0.3s ease-out;
        */
    }

    .paragraph-enter-to, .paragraph-leave-from {
        opacity: 1;
        transform: translateY(0);
    }

    .users-fade-button-enter-from, .users-fade-button-leave-to {
        opacity: 0;
    }

    .users-fade-button-enter-active {
        transition: opacity 0.3s ease-out;
    }

    .users-fade-button-leave-active {
        transition: opacity 0.3s ease-in;
    }

    .users-fade-button-enter-to, .users-fade-button-leave-from {
        opacity: 1;
    }

    button {
        font: inherit;
        padding: 0.5rem 2rem;
        border: 1px solid #810032;
        border-radius: 30px;
        background-color: #810032;
        color: white;
        cursor: pointer;
    }

    button:hover,
    button:active {
        background-color: #a80b48;
        border-color: #a80b48;
    }

    .block {
        width: 8rem;
        height: 8rem;
        background-color: #290033;
        margin-bottom: 2rem;
        /* transition: transform 2s linear;*/
    }

    .container {
        max-width: 40rem;
        margin: 2rem auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        padding: 2rem;
        border: 2px solid #ccc;
        border-radius: 12px;
    }
</style>
