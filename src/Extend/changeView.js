export default {
  methods: {
    changeView(view, id) {
      this.$router.push({
        name: view,
        params: { id }
      });
    }
  }
}