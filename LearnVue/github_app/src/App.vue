<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button"
                 @click.native="toggleSideNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input placeholder="Search username"></md-input>
      </md-input-container>
    </md-toolbar>

    <md-sidenav class="md-left"
                ref="sidenav">
      <md-toolbar class="md-medium">
        <md-button class="md-icon-button"
                   @click.native="toggleSideNav">
          <md-icon>menu</md-icon>
        </md-button>
        <h2 class="md-title">GitHub</h2>
      </md-toolbar>
    </md-sidenav>

    <md-layout>
      <router-view></router-view>
    </md-layout>
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
        this.$http.get(`users/${username}`)
        .then((res) => { this.user = res.data; });
      },
      toggleSideNav() {
        this.$refs.sidenav.toggle();
      }
    },

    mounted() {
      this.fetchUser('masakotoda');
    }
  }
</script>
