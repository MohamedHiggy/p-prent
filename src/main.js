import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import axios from "axios";

import Vuelidate from "vuelidate";
Vue.use(Vuelidate);

import Notifications from "vue-notification";
Vue.use(Notifications);

import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);

import jQuery from "jquery";
window.$ = window.jQuery = jQuery;

import "popper.js";
import "bootstrap";
import "./assets/app.scss";

Vue.config.productionTip = false;
const reqInterceptor = axios.interceptors.request.use((config) => {
    console.log("Request Interceptor", config);
    return config;
});
const resInterceptor = axios.interceptors.response.use((res) => {
    console.log("Response Interceptor", res);
    return res;
});

axios.interceptors.request.eject(reqInterceptor);
axios.interceptors.response.eject(resInterceptor);

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");