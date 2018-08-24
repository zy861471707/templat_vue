import Vue from 'vue';
import Router from 'vue-router';
import storage from '@/tools/storage';
Vue.use(Router)
const constantRouterMap = [
  {
    path: '/login',
    name: 'login',
    component: (resolve) => require(['@/page/login'], resolve),
  },
  {
    path: '/',
    name: 'HelloWorld',
    component: (resolve) => require(['@/components/HelloWorld'], resolve),
  },
];
const RouterConfig = {
  routes: constantRouterMap
};
const router = new Router(RouterConfig);
router.beforeEach((to, from, next) => {
  let flag = function(){    
    return storage.get('userid')?true:false;
  }
  if (to.path !== '/login' && !flag()) {
    next('/login');
  } else {
    next();
  }
});
export default router;
