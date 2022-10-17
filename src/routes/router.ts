import * as VueRouter from "vue-router";
import Create from "./Create.vue";
import Main from "./Main.vue";
import Item from "./Item.vue";
import Edit from "./Edit.vue";
import NotFound from "./NotFound.vue";

const routes = [
    {path: '/', name: "Main", component: Main},
    {path: '/item/:id', name: "Item", component: Item},
    {path: '/create', name: "Create", component: Create},
    {path: '/edit/:id', name: "Edit", component: Edit},
    {path: '/:matcher(.*)*', name: "NotFound", component: NotFound},
]

const router = VueRouter.createRouter({
    history: VueRouter.createWebHistory(),
    routes
});

export default router