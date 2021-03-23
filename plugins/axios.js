export default ({ $axios, redirect }) => {
  const auth = {
    username: "MKUSERNAME",
    password: "Freedom798",
  };
  $axios.onRequest(config => {
    config.auth = auth;
    //this.$store.dispatch("changeLoadingState", true);
  })

  $axios.onError(error => {
    const code = parseInt(error.response && error.response.status)
    //this.$store.dispatch("changeLoadingState", false);
    if (code === 400) {
      redirect('/400')
    }
  })
}
