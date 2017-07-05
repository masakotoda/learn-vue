<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
  import { myrouter } from './bootstrap';
  export default {
    name: 'GitHubApplication',
    router: myrouter,
  }
</script>
