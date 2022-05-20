import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// import "datatables.net-bs5";
// import "datatables.net-buttons-bs5";
// import "datatables.net-searchpanes-bs5";
// import "datatables.net-select-bs5";
// import "jquery";
// import "jszip";
// import "pdfmake";
import "chart.js"


createApp(App).use(router).use(store).mount('#app')
