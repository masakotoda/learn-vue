import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import Axios from 'axios';

Axios.defaults.baseURL = 'https://api.github.com/'
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

import './assets/sass/app.scss';
