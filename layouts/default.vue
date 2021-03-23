<template>
  <v-app>
    <v-main>
      <v-container>
        <nuxt />
        <v-overlay z-index="0" :value="overlay">
          <v-progress-circular indeterminate size="32"></v-progress-circular>
        </v-overlay>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      refCount: 0,
      overlay: false,
    };
  },
  methods: {
    setLoading(isLoading) {
      if (isLoading) {
        this.refCount++;
        this.isLoading = true;
      } else if (this.refCount > 0) {
        this.refCount--;
        this.isLoading = this.refCount > 0;
      }
    },
  },
  created() {
    this.$axios.interceptors.request.use(
      (config) => {
        this.setLoading(true);
        return config;
      },
      (error) => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    );

    this.$axios.interceptors.response.use(
      (response) => {
        this.setLoading(false);
        return response;
      },
      (error) => {
        this.setLoading(false);
        return Promise.reject(error);
      }
    );
  },
};
</script>
