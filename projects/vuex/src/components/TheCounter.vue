<template>
  <!--  counterWithRegularComputedApproach - computed prop -->
  <!--  <h3>{{ counterWithRegularComputedApproach }}</h3>-->
  <h3>{{ counterMultipliedByTwo }}</h3>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
  computed: {
    counterWithRegularComputedApproach() {
      // return this.$store.state.counter; // getting from store directly. Not good approach
      // better - getters:
      return this.$store.getters.counterMultipliedByTwo;
    },

    // we spread Obj, that is returned from mapGetters() f(), and merge it to "computed" props Obj
    // counterMultipliedByTwo - getter from store
    // ...mapGetters(['counterMultipliedByTwo']) // non-named space
    ...mapGetters('numbers', ['counterMultipliedByTwo']) // numbers - named space
  }
}
</script>
