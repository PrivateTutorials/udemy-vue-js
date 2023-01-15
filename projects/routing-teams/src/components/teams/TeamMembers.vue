<template>
    <section>
        <h2>{{ teamName }}</h2>
        <ul>
            <user-item
                    v-for="member in membersPerTeam"
                    :key="member.id"
                    :name="member.fullName"
                    :role="member.role"
            ></user-item>
        </ul>
        <router-link to="/teams/t3">Team 3</router-link>
    </section>
</template>

<script>
    import UserItem from '../users/UserItem.vue';

    export default {
        components: {
            UserItem
        },
        inject: ['users', 'teams'],
        props: ['teamId'], // now we can not only get it from $router, but also as a regular prop
        data() {
            return {
                teamName: '',
                membersPerTeam: []
            };
        },
        methods: {
            loadTeamMembers(passedRoute) {
                const teamId = passedRoute.params.teamId;

                const selectedTeam = this.teams.find(team => team.id === teamId);
                const memberIds = selectedTeam.members;

                const selectedTeamMembers = memberIds.map(memberId => {
                    const foundUser = this.users.find(user => user.id === memberId);
                    return foundUser;
                });

                this.membersPerTeam = selectedTeamMembers;
                this.teamName = selectedTeam.name;
            }
        },
        watch: {
            $route(newRouteValue) {
                this.loadTeamMembers(newRouteValue);
            }
        },
        // data received, but not yet rendered
        created() {
            this.loadTeamMembers(this.$route);
            // access query params:
            // this.$route.query;
        }
    };
</script>

<style scoped>
    section {
        margin: 2rem auto;
        max-width: 40rem;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 1rem;
        border-radius: 12px;
    }

    h2 {
        margin: 0.5rem 0;
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
    }
</style>
