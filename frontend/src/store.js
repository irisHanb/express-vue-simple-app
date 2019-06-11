import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);
const enhanceAccessToeken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
enhanceAccessToeken();

export default new Vuex.Store({
  state: {
    isUser: false,
    accessToken: null
  },
  getters: {},
  mutations: {
    LOGIN(state, { accessToken }) {
      state.accessToken = accessToken;
      localStorage.accessToken = accessToken;
    },
    LOGOUT(state) {
      state.accessToken = null;
    }
  },
  actions: {
    LOGIN({ commit }, { email, password }) {
      return axios.post('/login', { email, password }).then(({ data }) => {
        console.log(data);
        // axios.defaults.headers.common['Authorization'] = `Bearer ${
        //   data.accessToken
        // }`;
      });
    },
    LOGOUT({ commit }) {
      commit('LOGOUT');
    }
  }
});
