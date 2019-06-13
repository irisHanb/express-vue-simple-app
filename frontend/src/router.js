import Vue from 'vue';
import Router from 'vue-router';
import store from './store';

Vue.use(Router);

const requireAuth = () => (to, from, next) => {
  if (store.getters.isAuthenticated) return next();
  next('/register');
};

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      beforeEnter: requireAuth(),
      component: () =>
        import(/* webpackChunkName: "greeting" */ './views/Home.vue'),
      children: [
        {
          path: 'todos',
          component: () => import('./components/todos/TodoList.vue')
        },
        {
          path: 'memos',
          component: () => import('./components/memos/MemoList.vue')
        }
      ]
    },
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Register.vue')
    }
  ]
});
