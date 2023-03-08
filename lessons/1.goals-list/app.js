// Global object, that we've imported via CDN in HTML
Vue.createApp({
    // value stored in "originalObjectWithData" property - is a f()
    // the same as === originalObjectWithData: function(){}
    data() {
        // these properties are used inside HTML, via "v-..." attributes or {{...}}
        return {
            goals: [],
            enteredValue: ''
        }
    },
    // these f()s can be called inside HTML code
    methods: {
        addGoal() {
            if (!this.enteredValue) return;
            this.goals.push(this.enteredValue);
            this.enteredValue = '';
        }
    }
}).mount('#app');
// Vue controls specific element with all its children
