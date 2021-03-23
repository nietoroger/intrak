<template>
  <v-layout align-center justify-center column="9">
    <v-col cols="5" md="5" sm="10" xs="10">
      <v-card elevation="1">
        <v-card-title primary-title>Inicio de sesión</v-card-title>
        <v-card-text>
          <v-form v-model="valid" ref="form" lazy-validation>
            <v-text-field
              ref="username"
              autocomplete="username"
              label="Correo electrónico"
              v-model.trim="form.username"
              :rules="[this.$required, this.$email]"
              @keydown="resetValidation"
              required
            ></v-text-field>
            <v-text-field
              ref="password"
              autocomplete="current-password"
              label="Contraseña"
              :counter="50"
              maxlength="50"
              v-model.trim="form.password"
              :rules="[this.$required]"
              type="password"
              required
            ></v-text-field>
            <v-card-actions>
              <v-btn @click="submit" :loading="loading" color="primary" block>Iniciar sesión</v-btn>
            </v-card-actions>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <v-col cols="6" md="6" sm="10" xs="10">
      <v-alert type="warning" v-if="errorText" :value="hasError">{{ this.errorText }}</v-alert>
    </v-col>
    <!-- <pre> {{ this.user }}</pre> -->
  </v-layout>
</template>

<script>
import { mapState } from "vuex";
import BotonAceptar from "@/components/base/BotonAceptar.vue";

export default {
  components: { BotonAceptar },
  data() {
    return {
      valid: true,
      loading: false,
      errorText: "",
      form: {
        username: "nietoroger@gmail.com",
        password: "blacky",
      },
    };
  },
  computed: {
    ...mapState({
      user: (state) => state.auth,
      locale: (state) => state.locale,
    }),
  },
  methods: {
    async submit() {
      if (this.$refs.form.validate()) {
        this.loading = true;
        await this.$fire.auth
          .signInWithEmailAndPassword(this.form.username, this.form.password)
          .then((data) => {
            this.loading = false;
            this.$router.push("/principal");
          });
      } else {
        this.loading = false;
      }
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style>
</style>
