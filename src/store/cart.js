import swal from "sweetalert";
let cart = window.localStorage.getItem("cart");
export default {
    namespaced: true,
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
        },
    },
    getters: {
        cartCount: (state) => state.cart.length,
    },
};