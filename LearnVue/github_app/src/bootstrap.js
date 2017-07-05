import Vue from 'vue';

Vue.config.debug = process.env.NODE_ENV !== 'production';

import VueRouter from 'vue-router';
import myroutes from './routes';

Vue.use(VueRouter);

export const myrouter = new VueRouter({
  routes: myroutes
});

import './assets/sass/app.scss';
