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
    userId: null,
    userPw: null,
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
    login(state, userId) {
      localStorage.userId = userId;
      state.userId = userId;

      console.log('store>   ', userId);
    },
    logout(state) {
      state.userId = null;
      delete localStorage.userId;
    }
  },
  actions: {
    join({ commit, dispatch }, { userId, pw }) {
      return axios.post('/api/users/join', { userId, pw }).then(res => {
        dispatch('login', { userId, pw });
      });
    },
    login({ commit }, { userId, pw }) {
      return axios.post('/api/users/login', { userId, pw }).then(res => {
        const data = res.data;
        if (data.status === 'logined') {
          alert(data.msg);
          commit('login', data.userId);
        } else {
          alert(data.msg);
          return;
        }
      });
    },
    logout({ commit }) {
      return axios.get('/api/users/logout').then(res => {
        alert(res.data.msg);
        commit('logout');
      });
    }
  }
});
