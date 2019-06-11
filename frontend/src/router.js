import Vue from 'vue';
import Router from 'vue-router';
// import { nesting } from 'postcss-selector-parser';
// import Home from './views/Home.vue';

Vue.use(Router);

const reuquireAuth = (from, to, next) => {
  const isAuthenticated = true;
  if (isAuthenticated) return next;
  // next('/login?returnPath=me');
  // console.log('인증되지 않았음');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: reuquireAuth(),
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () =>
        import(/* webpackChunkName: "about" */ './components/Login.vue')
    },
    {
      path: '/me',
      name: 'me',
      // beforeEnter: reuquireAuth(),
      component: () =>
        import(/* webpackChunkName: "about" */ './components/Me.vue')
    },
    {
      path: '/todos',
      name: 'todos',
      component: () => import('./components/todos/TodoList.vue')
    },

    {
      path: '/users',
      name: 'users',

      component: () =>
        import(/* webpackChunkName: "movieList" */ './components/User.vue')
    },
    {
      path: '/movie',
      name: 'movieList',

      component: () =>
        import(/* webpackChunkName: "movieList" */ './components/MovieList.vue')
    },
    {
      path: '/movie/:id',
      name: 'movieDetail',
      component: () =>
        import(
          /* webpackChunkName: "movieDetail" */ './components/MovieDetail.vue'
        )
    }
  ]
});
