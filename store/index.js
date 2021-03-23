export const state = () => ({
  locale: "es-CL",
  weekDays: [1, 2, 3, 4, 5, 6, 0],
  firstDayOfWeek: 1,
  authenticated: false,
  auth: undefined,
});

export const getters = {
  // user: (state) => {
  //   return state.user;
  // },
  // locale: (state) => {
  //   return state.locale;
  // }
}

export const mutations = {
  SET_USER: (state, { authUser, claims }) => {
    if (authUser) {
      console.log('set_user_start');

      state.authenticated = true;
      const { uid, email, emailVerified, displayName } = authUser
      state.auth = { uid, email, emailVerified, displayName, claims }
      console.log('set_user_end');
    } else {
      state.authenticated = false;
      state.auth = undefined;
    }
  },
  RESET_USER: (state) => {
    state.authenticated = false;
    state.auth = undefined;
  }
}

export const actions = {
  onAuthStateChangedAction(ctx, { authUser, claims }) {
    console.log('store_user', authUser);
    if (!authUser) {
      ctx.commit("RESET_USER");
    } else {
      return ctx.commit("SET_USER", { authUser, claims });
    }
  }
}
