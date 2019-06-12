import Vue from 'vue';
import Router from 'vue-router';
// import { nesting } from 'postcss-selector-parser';
// import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/register',
      name: 'register',
      component: () =>
        import(/* webpackChunkName: "about" */ './views/Register.vue')
    },
    {
      path: '/',
      name: 'home',
      // beforeEnter: requireAuth(),
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
    }
  ]
});
