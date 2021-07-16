<template>
  <div>
    <div class="container">
      <nuxt-link class="link" to="/">Home</nuxt-link>
      <nuxt-link class="link" to="/about">About</nuxt-link>
    </div>
    <div>
      <nuxt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [
        {
          icon: "mdi-apps",
          title: "Welcome",
          to: "/",
        },
        {
          icon: "mdi-chart-bubble",
          title: "Inspire",
          to: "/inspire",
        },
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: "Vuetify.js",
    };
  },
};
</script>
<style scoped>
.container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

button {
    opacity: .85;
    transition: all .25s;
    border: none;

}

button:hover {
    cursor: pointer;
    opacity: 1;
}

</style>