<template>
  <div>
    <section>
      FILTER
    </section>
    <section>
      <div class="controls">
        <button>Refresh</button>
        <router-link to="/register">Register as a Coach</router-link>
      </div>
      <ul v-if="hasCoaches">
        <li v-for="coach in filteredCoaches" :key="coach.id">{{coach.firstName}}</li>
      </ul>
      <h3 v-else>No Coaches Found</h3>
    </section>
  </div>
</template>


<script>
export default {
  computed: {
    filteredCoaches(){
      return this.$store.getters['coachesModules/coaches'];
    },
    hasCoaches(){
      return this.$store.getters['coachesModules/hasCoaches'];
    }
  }
}
</script>
