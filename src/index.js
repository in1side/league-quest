import Vue from 'vue';
import App from 'components/App';
import VueResource from 'vue-resource';
import VueMaterial from 'vue-material';
import { sync } from 'vuex-router-sync';
import store from './store/store.js';
import router from './router';
require('vue-material/dist/vue-material.css');

sync(store, router);

Vue.use(VueResource);
Vue.use(VueMaterial);

new Vue({
  router,
  store,
  // sync,
  render: (h) => h(App)
}).$mount('#app');

if (process.env.NODE_ENV === 'production') {
  require('./pwa');
}
