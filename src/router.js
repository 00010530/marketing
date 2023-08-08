import { createRouter, createWebHashHistory } from "vue-router";
import LoginComponent from "./views/login/components/LoginComponent.vue";
import AppComponent from "./views/dashboard/components/AppComponent.vue";
import TheMarketing from "./modules/marketing/pages/Marketing/TheMarketing.vue"

export default createRouter({
    history: createWebHashHistory(),
    routes: [
        {path: '/', component: LoginComponent},
        {path: '/main', component: AppComponent},
        {path: '/marketing', component: TheMarketing}
    ]
})