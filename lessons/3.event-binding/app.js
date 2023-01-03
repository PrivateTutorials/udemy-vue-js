const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            userName: '',
            confirmedUserName: '',
            userFullName: ''
        };
    },
    // f()s inside have the same name as in "data" or "computed" props
    // when "data" prop changes, then watcher f() with the same name - is being run
    watch: {
        userName(newVal, oldVa,) {
            // newVal - the latest value of the watched prop
            if (newVal === '') {
                this.userFullName = '';
            } else {
                this.userFullName = newVal + ' Gonchar';
            }
        },
        counter(val) {
            if (val > 10) {
                this.counter = 0;
            }
        }
    },
    methods: {
        incrementCounter(num) {
            this.counter = this.counter + num;
        },
        outputFullName() {
            if (this.confirmedUserName === '') return '';
            return `${this.confirmedUserName} Gonchar`;
        },
        decrementCounter(num) {
            this.counter = this.counter - num;
        },
        setUserName(e) {
            this.userName = e.target.value;
        },
        resetUserNameInput() {
            this.userName = '';
        },
        confirmInputWithEnter() {
            this.confirmedUserName = this.userName;
        },
        submitFormHandler(e) {
            // this was replaced in html with vue E modifier => v-on:submit.prevent
            // e.preventDefault();
            console.log('Form was submitted');
        }
    },
    // computed - Vue knows what dependencies does f() has, so it knows when to re-render component
    // used like props, and not like f()s. Thus - name them as variables
    computed: {
        fullName() {
            if (this.confirmedUserName === '') return '';
            return `${this.confirmedUserName} Gonchar`;
        }

    }
});

app.mount('#events');

// events are not binded to computed props, only to regular methods
// computed props - only for outputting data

// watchers are good for:
// - timers
// http requests


// shorthands
// v-on:click => @click
// v-bind:value => :value
