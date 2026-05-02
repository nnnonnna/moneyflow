import {createRouter, createWebHistory} from "vue-router";
import DefaultLayout from "./src/components/DefaultLayout.vue";
import Home from "./src/pages/Home.vue";
import MyImages from "./src/pages/MyImages.vue";
import Login from "./src/pages/Login.vue";
import Signup from "./src/pages/Signup.vue";
import NotFound from "./src/pages/NotFound.vue";

const routes = [
    {
        path: "/",
        component: DefaultLayout,
        children:[

            {path: "/", name: "Home", component: Home},
            {path: "/images", name: "MyImages", component: MyImages},

        ]
    },
    {
        path: "/login", name: "Login", component: Login,
    },
    {
        path: "/signup", name: "Signup", component: Signup,
    },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
];
const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router
