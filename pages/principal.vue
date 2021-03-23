<template>
  <div>
    <h1>Hola {{user.displayName}}</h1>
    <v-btn color="success" @click="logout">Cerrar sesión</v-btn>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "principal",
  layout: "plantilla",
  middleware: "middleAuth",
  computed: {
    ...mapState({
      user: (state) => state.auth,
    }),
  },
  methods: {
    async logout() {
      this.$fire.auth.signOut();
      this.$router.push("/");
    },
  },
};
</script>

<style>
</style>
