<template>
    <div>
        <the-header></the-header>
        <badge-list></badge-list>
        <user-info
                :full-name="activeUser.name"
                :info-text="activeUser.description"
                :role="activeUser.role"
        ></user-info>

        <!-- <course-goals #default="slotProps"> - only allowed if we have only 1 slot in component -->
        <course-goals>
            <!-- slotProps - Obj where all props of <slot> tag from child component are its keys -->
            <template #default="slotProps">
                <h2>{{slotProps.item}}</h2>
                <p>{{slotProps['anotherProp']}}</p>
            </template>
        </course-goals>

        <button @click="setSelectedDynamicComponent('active-goals')">Active Goals</button>
        <button @click="setSelectedDynamicComponent('manage-goals')">Manage Goals</button>
        <!--
        not scalable v-if approach:
        <ActiveGoals v-if="selectedDynamicComponent === 'active-goals'"/>
        <ManageGoals v-if="selectedDynamicComponent === 'manage-goals'"/>
        -->

        <!-- Dynamic Components -->
        <!-- keep-alive - saves state of dynamic Comp -->
        <keep-alive>
            <component :is="selectedDynamicComponent">
            </component>
        </keep-alive>
    </div>
</template>

<!-- scoped slots - passing "data" value UP:
from child component with defined <slot> to parent where you have "markup" for slot -->

<script>
    import TheHeader from './components/TheHeader.vue';
    import BadgeList from './components/BadgeList.vue';
    import UserInfo from './components/UserInfo.vue';
    import CourseGoals from './components/CourseGoals.vue';
    import ActiveGoals from './components/ActiveGoals.vue';
    import ManageGoals from './components/ManageGoals.vue';

    export default {
        // local components. used ONLY here, not even in child components
        components: {
            'the-header': TheHeader,
            'badge-list': BadgeList,
            'user-info': UserInfo,
            CourseGoals, // another way of declaration. Can be self-closed tag then
            ActiveGoals, // can be used either: <ActiveGoals/> or <active-goals><active-goals/>
            ManageGoals
        },

        data() {
            return {
                selectedDynamicComponent: 'active-goals',
                activeUser: {
                    name: 'Maximilian Schwarzmüller',
                    description: 'Site owner and admin',
                    role: 'admin',
                },
            };
        },
        methods: {
            setSelectedDynamicComponent(component) {
                this.selectedDynamicComponent = component;
            }
        }
    };
</script>

<style>
    html {
        font-family: sans-serif;
    }

    body {
        margin: 0;
    }
</style>
