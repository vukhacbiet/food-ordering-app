import {createRouter , createWebHistory } from "vue-router";
import RouterComponent from "../components/RouterComponent.vue";
import FetchApi from "../components/apiFetch.vue";
import DataTable from "../components/datatables.vue";
import Chart from "../components/Chart.vue"
import VUEX from "../components/vuex.vue"
import Forms from "../components/forms.vue"


const routes = [
    {
        path:"/firstroute",
        name:"First Path",
        component:RouterComponent
    },
    {
        path:"/fetchapi",
        name:"Fetch API",
        component:FetchApi
    },
    {
        path:"/datatable",
        name:"DataTable",
        component:DataTable
    },
    {
        path:"/chart",
        name:"Chart",
        component:Chart
    },
    {
        path:"/vuex",
        name:"VUEX",
        component:VUEX
    },
    {
        path:"/forms",
        name:"Forms",
        component:Forms
    }
]

const router = createRouter({
    history: createWebHistory(process.env.Base_URL),
    routes
})

export default router