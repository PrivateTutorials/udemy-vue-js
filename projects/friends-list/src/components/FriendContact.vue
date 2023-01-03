<template>
    <li>
        <!-- prop is used. Careful with name collision in "data" prop -->
        <h2>{{name}} {{isFavourite ? '(Favourite)' : ''}}</h2>
        <button @click="toggleFavourite">Toggle Favourite</button>
        <button @click="toggleDetails">{{detailsAreVisible ? 'Hide' : 'Show'}} Details</button>
        <ul v-if="detailsAreVisible">
            <ul>
                <li><strong>Phone:</strong> {{phoneNumber}}</li>
                <li><strong>Email:</strong> {{email}}</li>
            </ul>
        </ul>
        <button @click="deleteFriend">Delete</button>
    </li>
</template>

<script>
    export default {
        // In a form of array of strings
        // props: ['name', 'phoneNumber', 'email', 'isFavourite'],
        props:
            {
                id: {type: String, required: true},
                name: {type: String, required: true},
                phoneNumber: String,
                email: String,
                isFavourite: {
                    type: Boolean,
                    required: false,
                    default: false,
                    /* validator: (value) => {
                        return value === '1' || value === '0';
                    }*/
                },
            },
        // list of events this component may emit. Basically - document for other developers
        // emits: ['toggleFavourite'], // simple form
        emits: {
            'toggle-favourite': (id) => {
                if (id) return true;
                console.log('Id is missing!');
                return false;
            },
            'delete-friend': (id) =>{}
        },
        data() {
            return {
                detailsAreVisible: false,
                // this.isFavourite prop from parent is used once, only for initial value
                // we are reassigning prop, because passed props from parent can't be mutated
                // (mutation was happening in "toggleFavourite()" before emit was added)
                // this.friendIsFavourite === !this.friendIsFavourite;
                // now with emiting event, we could remove it and just use passed prop "isFavourite"
                // friendIsFavourite: this.isFavourite
            }
        },
        methods: {
            toggleDetails() {
                this.detailsAreVisible = !this.detailsAreVisible;
            },
            toggleFavourite() {
                this.$emit('toggle-favourite', this.id); // kebab-case convention
            },
            deleteFriend(){
                this.$emit('delete-friend', this.id);
            }
        }
    }
</script>
