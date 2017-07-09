import MyReposTable from './../../components/repos-table/repos-table.vue';

export default {
  computed: {
    repos() {
      return this.$root.repos;
    }
  },

  mounted() {
    this.$root.closeSideNav();
  },

  components: {
    MyReposTable
  }

};
