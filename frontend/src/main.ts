import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.ts';
import vuetify from './plugins/vuetify';

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app');