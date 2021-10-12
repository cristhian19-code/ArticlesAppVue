import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import PrimeVue from 'primevue/config';
import 'primeflex/primeflex.css'
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";
import ToastService from 'primevue/toastservice'

createApp(App).use(PrimeVue).use(ToastService).use(store).use(router).mount('#app')
