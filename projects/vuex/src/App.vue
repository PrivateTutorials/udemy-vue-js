<template>
  <div>
    <base-container title="Auth">
      <UserAuth/>
    </base-container>

    <base-container title="Vuex" v-if="isAuth">
      <TheCounter/>
      <FavouriteValue/>
      <button @click="addOne">Add 10: App Comp</button>
      <ChangeCounter/>
    </base-container>
  </div>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter.vue';
import ChangeCounter from './components/ChangeCounter.vue';
import FavouriteValue from './components/FavouriteValue.vue';
import UserAuth from './components/UserAuth.vue';

export default {
  components: {
    BaseContainer,
    TheCounter,
    ChangeCounter,
    FavouriteValue,
    UserAuth
  },
  computed: {
    isAuth() {
      return this.$store.getters.userIsAuthenticated;
    }
  },
  methods: {
    addOne() {
      // this.$store.state.counter++; // working with store directly. Not good approach
      // mutation - is better:
      this.$store.commit('numbers/increaseByPassedValue', {value: 10}); // numbers - namespace name
    }
  }
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
</style>
