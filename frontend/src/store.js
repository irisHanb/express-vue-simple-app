import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: null,
    accessToken: null
  },
  getters: {},
  mutations: {
    join(state, user) {
      localStorage.user = JSON.stringify(user);
      console.log(localStorage.user);
      state.user = user;
    },
    login(state, user) {
      // console.log(user.id);
      localStorage.user = JSON.stringify(user);
      state.user = user;
    },
    logout(state, user) {
      delete localStorage.user;
      console.log('logout> ', localStorage.user);
      state.user = null;
    }
  },
  actions: {
    join({ commit }, user) {
      console.log(user);
      return axios.post('/join', { user }).then(res => {
        console.log(res);
        commit('join', res.data.user);
      });
    },
    login({ commit }, user) {
      return axios.post('/login', { user }).then(res => {
        // console.log(res.data);
        const data = res.data;
        if (data.status === 'matched') {
          commit('login', res.data.user);
        } else {
          alert(data.msg);
          return;
        }
      });
    },
    logout({ commit }) {
      return axios.post('/logout', {}).then(res => {
        console.log(res.data);
        commit('logout');
      });
    }
  }
});
