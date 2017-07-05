export default [
  {
    path: '/repositories',
    name: 'route_repositories',
    component: require('./../pages/repositories/repositories.vue'),
  },
  {
    path: '/user',
    name: 'route_user',
    component: require('./../pages/user/user.vue'),
  },
  {
    path: '/',
    redirect: './repositories'
  },
  {
    path: '/*',
    redirect: './repositories'
  }
];
