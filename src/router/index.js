import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import About from "../views/About";
import Cart from "../views/Cart";
import CardDetails from "../views/CardDetails";
import NotFoundPage from "../views/NotFoundPage";
import Shop from "../views/Shop";

Vue.use(VueRouter);

const routes = [{
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/contact",
        name: "Contact",
        component: Contact,
    },
    {
        path: "/about",
        name: "About",
        component: About,
    },
    {
        path: "/cart",
        name: "Cart",
        component: Cart,
    },
    {
        path: "/details/:id",
        name: "CardDetails",
        component: CardDetails,
    },
    {
        path: "/shop",
        name: "Shop",
        component: Shop,
    },
    { path: "*", name: "NotFoundPage", component: NotFoundPage },
];

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes,
});

export default router;