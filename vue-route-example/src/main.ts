import {createApp} from 'vue'
import App from './App.vue'
import FirstPage from "./components/FirstPage.vue";
import SecondPage from "./components/SecondPage.vue";
import ThirdPage from "./components/ThirdPage.vue";
import {createRouter, createWebHashHistory} from "vue-router";

const routes = [
    {path: '/', component: FirstPage},
    {path: '/second', component: SecondPage},
    {path: '/third', component: ThirdPage},
];

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

const app = createApp(App);
app.use(router);

app.mount('#app')
