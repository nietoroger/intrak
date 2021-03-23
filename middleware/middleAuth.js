export default function ({ store, redirect }) {
  //If the user is not authenticated
  if (!store.state.authenticated) {
    console.log('middleware no');
    return redirect('/login')
  } else {
    console.log("middleware si");
  }
}
