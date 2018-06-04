import Vue from 'vue';
import Router from 'vue-router';

const Template = () => import('../pages/template.vue');

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/template',
      name: 'Template',
      component: Template
    }
  ]
});
