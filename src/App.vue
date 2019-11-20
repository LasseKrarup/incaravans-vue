<template>
  <v-app>
    <NavigationDrawer :items="navigationLinks"></NavigationDrawer>
    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavigationDrawer
  },

  data: () => ({
    navigationLinks: [
      {
        name: "Home",
        path: "/",
        icon: "home"
      },
      {
        name: "About",
        path: "/about",
        icon: "information"
      },
      {
        name: "The Music",
        path: "/music",
        icon: "music-note"
      },
      {
        name: "Contact",
        path: "/contact",
        icon: "phone"
      }
    ]
  })
});
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Montserrat:300,400|Roboto+Mono:300,400&display=swap");

* {
  box-sizing: border-box;
}

h1 {
  font-family: "Montserrat", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  font-size: 38pt;
  font-weight: 300;
  letter-spacing: 12pt;
  text-align: center;
}
</style>
