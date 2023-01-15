<template>
    <div>
        <base-card>
            <!-- @click handler is automatically passed to 1-st root element of custom component -->
            <base-button @click="setSelectedTab('stored-learning-resources')" :mode="storedLearningResButtonMode">Stored
                Resources
            </base-button>
            <base-button @click="setSelectedTab('add-resource')" :mode="addResButtonMode">Add Resource</base-button>
        </base-card>

        <!-- dynamic components
        :is - we pass actual html tag of component -->
        <keep-alive>
            <component :is="selectedTab">
            </component>
        </keep-alive>
    </div>
</template>

<script>
    import StoredLearningResources from './StoredLearningResources.vue';
    import AddResource from './AddResource.vue';

    export default {
        components: {
            StoredLearningResources,
            AddResource
        },
        data() {
            return {
                selectedTab: 'stored-learning-resources',
                storedResources: [
                    {
                        id: 'official-guide',
                        title: 'Official Guide',
                        description: 'The official Vue.js documentation',
                        link: 'https://vuejs.org'
                    },
                    {
                        id: 'google',
                        title: 'Google',
                        description: 'Learn to google...',
                        link: 'https://google.com'
                    },
                ]
            }
        },
        computed: {
            storedLearningResButtonMode() {
                return this.selectedTab === 'stored-learning-resources' ? null : 'flat';
            },
            addResButtonMode() {
                return this.selectedTab === 'add-resource' ? null : 'flat';
            }
        },
        provide() {
            return {
                resources: this.storedResources,
                addLearningResource: this.addLearningResource,
                deleteLearningResource: this.deleteLearningResource
            }
        },
        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },
            addLearningResource(title, description, url) {
                const newLearningResource = {
                    id: new Date().toISOString(),
                    title,
                    description,
                    link: url
                };

                this.storedResources.unshift(newLearningResource);
                this.selectedTab = 'stored-learning-resources';

            },
            deleteLearningResource(resId){
                const indexOfItemToDelete = this.storedResources.findIndex(res => res.id === resId);
                this.storedResources.splice(indexOfItemToDelete, 1);
            }
        }
    }
</script>
