<template>
    <div>
        <div v-if="open" class="backdrop" @click="$emit('close')"></div>
        <transition name="modal">
            <dialog open v-if="open">
                <slot></slot>
            </dialog>
        </transition>
    </div>
</template>

<script>
    export default {
        emits: ['close'],
        props: ['open']
    };
</script>

<style scoped>
    .backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
        z-index: 10;
        background-color: rgba(0, 0, 0, 0.75);
    }

    dialog {
        position: fixed;
        top: 30vh;
        width: 30rem;
        left: calc(50% - 15rem);
        margin: 0;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        border-radius: 12px;
        padding: 1rem;
        background-color: white;
        z-index: 100;
        border: none;
        /* before transition used. Downside - can't animate closing modal action
        animation: modal-appear 0.3s ease-out forwards; */
    }

    @keyframes modal-appear {
        from {
            opacity: 0;
            transform: translateY(-50px) scale(0.9);
        }

        to {
            opacity: 1;
            transform: translateY(0px) scale(1);
        }
    }

    .modal-enter-active {
        animation: modal-appear 0.3s ease-out;
    }

    .modal-leave-active {
        /* reverse - play animation if reverse: from 100% to 0% */
        animation: modal-appear 0.3s ease-in reverse;
    }
</style>
