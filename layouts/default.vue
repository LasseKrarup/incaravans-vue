<template>
  <v-app>
    <NavigationDrawer :items="navigationLinks"></NavigationDrawer>
    <v-content>
      <nuxt />
    </v-content>
    <Footer :icons="footerIcons"></Footer>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import NavigationDrawer from "@/components/NavigationDrawer.vue";
import Footer from "@/components/Footer.vue";

export default Vue.extend({
  name: "App",

  components: {
    NavigationDrawer,
    Footer
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
    ],
    footerIcons: [
      {
        icon: "home",
        href: "/"
      },
      {
        icon: "facebook",
        href: "https://www.facebook.com/InCaravans/"
      },
      {
        icon: "instagram",
        href: "https://www.instagram.com/incaravans/"
      }
    ]
  })
});
</script>
