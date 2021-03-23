<template>
  <v-app id="inspire">
    <v-navigation-drawer permanent app class="pt-4" color="grey lighten-3" mini-variant>
      <v-avatar
        v-for="n in 6"
        :key="n"
        :color="`grey ${n === 1 ? 'darken' : 'lighten'}-1`"
        :size="n === 1 ? 36 : 20"
        class="d-block text-center mx-auto mb-9"
      ></v-avatar>
    </v-navigation-drawer>

    <v-main class="ml-3">
      <nuxt />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "plantilla",
  data() {
    return {
    };
  },
};
</script>

<style>
</style>
