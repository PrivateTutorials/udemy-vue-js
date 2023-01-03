import { createApp } from 'vue';

// global components. vue needs to load them all when app is being initialised
import App from './App.vue';
import BaseBadge from './components/BaseBadge.vue';
import BaseCard from './components/BaseCard.vue';

const app = createApp(App);

// global Comp registration
app.component('base-badge', BaseBadge);
app.component('base-card', BaseCard);

app.mount('#app');
