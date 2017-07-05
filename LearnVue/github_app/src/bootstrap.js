import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import Axios from 'axios';

Axios.defaults.baseURL = process.env.API_LOCATION;
Axios.defaults.headers.common.Accept = 'application/vnd.github.v3+json';

// It's same thing as:
// Vue.prototype.$http = Axios;
// But it's safer this way:
Object.defineProperty(Vue.prototype, '$http', { get() { return Axios;} });

import VueRouter from 'vue-router';
import myroutes from './routes';

Vue.use(VueRouter);

export const myrouter = new VueRouter({
  routes: myroutes
});

import VueMaterial from 'vue-material';

Vue.use(VueMaterial);

// Copied from http://vuematerial.io/#/themes/configuration
Vue.material.registerTheme('default', {
  primary: 'blue',
  accent: 'red',
  warn: 'red',
  background: 'grey'
});

import './assets/sass/app.scss';
