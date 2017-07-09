export default {

  computed: {
    user() {
      return this.$root.user;
    }
  },

  mounted() {
    this.$root.closeSideNav();
  }
};
