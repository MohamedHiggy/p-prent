import Vue from "vue";
import Vuex from "vuex";
import auth from "./auth";
import swal from "sweetalert";

Vue.use(Vuex);

let cart = window.localStorage.getItem("cart");
export default new Vuex.Store({
    state: {
        cart: cart ? JSON.parse(cart) : [],
    },
    mutations: {
        addToCart(state, item) {
            let found = state.cart.find(
                (product) => product.productId == item.productId
            );
            if (found) {
                found.productQuantity++;
            } else {
                state.cart.push(item);
            }
            this.commit("saveData");
        },
        saveData(state) {
            window.localStorage.setItem("cart", JSON.stringify(state.cart));
        },
        removeFromCart(state, item) {
            let index = state.cart.indexOf(item);
            state.cart.splice(index, 1);
            this.commit("saveData");
            swal({
                title: "product deleted successfully!",
                icon: "success",
                button: "close",
            });
        },
        emptyCart(state) {
            state.cart = [];
            this.commit("saveData");
        }
    },
    actions: {},
    modules: { auth },
    getters: {
        cartCount: (state) => state.cart.length,
    },
});