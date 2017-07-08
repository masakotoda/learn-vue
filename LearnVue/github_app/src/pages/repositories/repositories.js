export default {
  computed: {
    repos() {
      return this.$root.repos;
    }
  },

  methods: {
    sortRepos(sorting) {
      this.repos.sort((a, b) => {
        console.log(sorting);
        if (a[sorting.name] < b[sorting.name])
          return sorting.type == "asc" ? 1 : -1;
        else if (a[sorting.name] > b[sorting.name])
          return sorting.type == "asc" ? -1 : 1;
        else
          return 0;
      });
    }
  }
};
