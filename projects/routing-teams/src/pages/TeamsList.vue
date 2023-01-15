<template>
    <div>
        <!-- this router - for children routes
        it will render separate component here, above <ul>, instead or redirecting -->
        <router-view></router-view>
        <ul>
            <teams-item
                    v-for="team in teams"
                    :key="team.id"
                    :id="team.id"
                    :name="team.name"
                    :member-count="team.members.length"
            ></teams-item>
        </ul>
    </div>
</template>

<script>
    import TeamsItem from '../components/teams/TeamsItem.vue';

    export default {
        components: {
            TeamsItem,
        },
        inject: ['teams'],
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 2rem auto;
        max-width: 40rem;
        padding: 0;
    }
</style>
