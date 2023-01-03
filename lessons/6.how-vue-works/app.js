// Vue wraps all properties with JS Proxies

const app = Vue.createApp({
    data() {
        return {
            currentUserInput: '',
            message: 'Vue is great!',
        };
    },
    methods: {
        saveInput(event) {
            this.currentUserInput = event.target.value;
        },
        setText() {
            // this was used with @input approach:
            // this.message = this.currentUserInput;

            // refs approach:
            const inputElement = this.$refs.userText;
            this.message = inputElement.value;
        },
    },
    // App Lifecycle hooks
    beforeCreate(){
        console.log('Before Create hook');
    },
    created(){
        console.log('Created');
    },
    beforeMount(){
        console.log('Before mount');

    },
    mounted(){
        console.log('Mounted');
    },
    beforeUpdate(){
        'Before update'.localeCompare()
    },
    updated(){
        console.log('Updated');
    },
    beforeUnmount(){

    },
    unmount(){

    }
});

app.mount('#app');

// html template indicated here
const app2 = Vue.createApp({
    template: `
     <h2>{{meal}}</h2>
`,
    data() {
        return {
            meal: 'Pizza'
        }
    }
});

app2.mount('#app2');
// app2.unmount();
