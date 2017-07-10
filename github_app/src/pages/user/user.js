import MyUserCard from './../../components/user-card/user-card.vue';

export default {

  computed: {
    user() {
      return this.$root.user;
    }
  },

  mounted() {
    this.$root.closeSideNav();
  },

  components: {
    MyUserCard
  }
};
