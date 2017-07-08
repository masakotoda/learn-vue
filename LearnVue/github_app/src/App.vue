<template>
  <div>
    <md-toolbar class="md-medium">
      <md-button class="md-icon-button"
                 @click.native="toggleSideNav">
        <md-icon>menu</md-icon>
      </md-button>

      <h2 class="md-title">GitHub</h2>

      <md-input-container style="flex: 1">
        <md-input placeholder="Search username"
                  v-model="username">
        </md-input>
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
      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'route_repositories' }">
            Repositories
          </router-link>
        </md-list-item>
      </md-list>
      <md-list>
        <md-list-item>
          <router-link :to="{ name: 'route_user' }">
            User
          </router-link>
        </md-list-item>
      </md-list>
    </md-sidenav>

    <md-layout>
      <router-view></router-view>
    </md-layout>
  </div>
</template>

<script>
  import _ from 'lodash';
  import { myrouter } from './bootstrap';

  export default {
    name: 'GitHubApplication',
    router: myrouter,

    data() {
      return {
        myrepos: null,
        user: null,
        repos: null,
        username: null,
      };
    },

    watch: {
      username(value) {
        this.setUsername(value);
      },
    },

    methods: {
      fetchUser(username) {
        this.$http.get(`users/${username}`)
        .then(({ data }) => { this.user = data; });
      },
      fetchRepos(username) {
        this.$http.get(`users/${username}/repos`)
        .then(({ data }) => { this.repos = data; });
      },
      fetchMyRepos() {
        this.$http.defaults.headers.common.Authorization = "Basic " + btoa("myname:mypassword");
        this.$http.get('user/repos')
        .then(({ data }) => { this.myrepos = data; });
      },
      toggleSideNav() {
        this.$refs.sidenav.toggle();
      },
      setUsername: _.debounce(function(username) {
        if (username)
        {
          this.fetchUser(username);
          this.fetchRepos(username);
        }
        else
        {
          this.user = null;
          this.repos = null;
        }
      }, 500)
    },

    mounted() {
      this.fetchUser('masakotoda');
    }
  }
</script>
