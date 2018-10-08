import Vue from 'vue';
import Router from 'vue-router';
import Home from '../pages/Home/Home.vue';
//英雄模板
const Template = () => import('../pages/template.vue');
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Home',
      name: 'Home',
      component: Home
    },
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
});
