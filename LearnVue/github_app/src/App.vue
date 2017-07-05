<template>
  <div>
    <pre>{{ user }}</pre>
    <router-view></router-view>
  </div>
</template>

<script>
  import { myrouter } from './bootstrap';
  export default {
    name: 'GitHubApplication',
    router: myrouter,

    data() {
      return {
        user: null,
      };
    },

    methods: {
      fetchUser(username) {
        this.$http.get(`https://api.github.com/users/${username}`)
        .then((res) => { this.user = res.data; });
      }
    },

    mounted() {
      this.fetchUser('masakotoda');
    }
  }
</script>
