// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import '../node_modules/element-ui/lib/theme-default/index.css'

import Home from './home.vue'
import Music from './music.vue'

Vue.use(ElementUI);
Vue.use(router);

router.add([
  {name:'home', path:'/index', components:Home},
  {name:'music', path:'/music', components:Music}
]);

/* eslint-disable no-new */
/*
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
*/
new Vue({
  el:"#app",
  // 将路由实例对象配置给Vue实例来控制
  router:router,
  render:c=>c(App)
})
