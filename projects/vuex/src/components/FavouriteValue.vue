<template>
  <!--  counter - computed prop -->
  <div>
    <h3>{{ counter }}</h3>
    <p>Some additional logic</p>
  </div>
</template>

<script>
export default {
  computed: {
    counter() {
      // return this.$store.state.counter; // getting from store directly. Not good approach
      // better - getters:
      // return this.$store.getters.normalizedCounter; // this is for simple non-namespaced store
      return this.$store.getters['numbers/normalizedCounter']; // namespaced store: [namespaceName / getterName]
    }
  }
}
</script>
