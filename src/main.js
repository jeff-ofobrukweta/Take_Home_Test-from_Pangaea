import Vue from 'vue';
import { apolloProvider } from "./utils/apollo";
import App from './App';
import './registerServiceWorker';
import router from './router';
import store from './store';

Vue.config.productionTip = false;





new Vue({
  router,
  store,
  apolloProvider,
  render: (h) => h(App)
}).$mount('#app');
