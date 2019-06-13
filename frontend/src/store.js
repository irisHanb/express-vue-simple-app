import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const enhanceAccessToeken = () => {
  const { accessToken } = localStorage;
  if (!accessToken) return;
  // axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`;
};
enhanceAccessToeken();

export default new Vuex.Store({
  state: {
    userName: null,
    userPw: null,
    user: null,
    accessToken: null
  },
  getters: {
    isAuthenticated(state) {
      state.accessToken = state.accessToken || localStorage.accessToken;
      return state.accessToken;
    }
  },
  mutations: {
    join(state) {
      localStorage.accessToken = 'ok';
      state.accessToken = 'ok';
    },
    login(state) {
      localStorage.accessToken = 'ok';
      state.accessToken = 'ok';
    },
    logout(state) {
      state.accessToken = null;
      delete localStorage.accessToken;
    }
  },
  actions: {
    join({ commit }, { name, pw }) {
      return axios.post('/join', { name, pw }).then(res => {
        commit('join');
      });
    },
    login({ commit }, { name, pw }) {
      return axios.post('/login', { name, pw }).then(res => {
        const data = res.data;
        if (data.status === 'matched') {
          commit('login');
        } else {
          alert(data.msg);
          return;
        }
      });
    },
    logout({ commit }) {
      return axios.post('/logout', {}).then(res => {
        commit('logout');
      });
    }
  }
});
