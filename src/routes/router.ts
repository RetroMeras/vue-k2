import * as VueRouter from "vue-router";
import Create from "./Create.vue";
import Main from "./Main.vue";
import Item from "./Item.vue";

const routes = [
    {path: '/', name: "Main", component: Main},
    {path: '/item/:id', name: "Item", component: Item},
    {path: '/create', name: "Create", component: Create},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

export default router