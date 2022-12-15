// Global object, that we've imported via CDN in HTML
const app = Vue.createApp({
    data(){
        return {
            // these props are being merged into global Vue app Obj, thus they are reachable in "methods" props with "this"
            courseGoalVue: 'Finish Vue.js course',
            courseGoalAngular: 'Learn Angular',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            return randomNumber < 0.5 ? this.courseGoalAngular : 'Learn React';
        },
        outputGoalWithHtmlTags(){
            return "<em>Learn Basics</em>"
        }
    }
});

app.mount('#user-goal');
