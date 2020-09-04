import axios from "axios";
export default {
    namespaced: true,
    state: {
        token: null,
        user: null,
    },
    mutations: {
        SET_TOKEN(state, token) {
            state.token = token;
        },
        SET_USER(state, data) {
            state.user = data;
        },
    },
    getters: {
        authenticated(state) {
            return state.token;
        },
        user(state) {
            return state.user;
        }
    },
    actions: {
        async signIn({ dispatch }, loginData) {
            let res = await axios.post("auth/login", loginData);
            return dispatch("attempt", res.data.access_token);
        },

        async attempt({ commit }, token) {
            commit("SET_TOKEN", token);
            try {
                let res = await axios.post("auth/me", {
                    headers: {
                        Authorization: "Bearer " + token,
                    },
                });
                console.log(res);
                commit("SET_USER", res.data);
            } catch (error) {
                commit("SET_TOKEN", null);
                commit("SET_USER", null);
            }
        },
    },
};