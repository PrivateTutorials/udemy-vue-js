<template>
  <div>
    <button @click="addOne">Add 1: Mutation: ChangeCounter Comp</button>
    <button @click="addOneWithAction">Add 1 with Delay: Dispatch Action: ChangeCounter Comp</button>
    <button @click="incrementActionName">Add 1 with delay: Action Mapper: ChangeCounter Comp</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  methods: {
    addOne() {
      // this.$store.state.counter++;
      // but instead of changing store directly, better to use mutations:
      this.$store.commit('numbers/incrementByOne'); // name of namespace / mutation in createStore() in main.js
    },
    // better to use actions rather than mutations directly. Mutation has to be triggered inside Action
    addOneWithAction() {
      this.$store.dispatch('numbers/incrementActionName');
    },
    // alternative to dispatch Actions - use Actions mapper
    ...mapActions('numbers', ['incrementActionName'])
  }
}
</script>
