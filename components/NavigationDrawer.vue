<template>
  <nav>
    <!-- <v-app-bar app inverted-scroll>
      <v-toolbar-title>in caravans</v-toolbar-title>
    <v-spacer></v-spacer>-->
    <div class="menu-button">
      <v-icon large @click.stop="drawer = !drawer">mdi-menu</v-icon>
    </div>
    <!-- </v-app-bar> -->
    <v-navigation-drawer floating right temporary v-model="drawer" app>
      <v-lazy>
        <v-img
          :src="require('~/assets/courier-min.jpg')"
          :lazy-src="require('~/assets/courier-thumbnail.jpg')"
        ></v-img>
      </v-lazy>

      <v-list>
        <v-list-item v-for="(item, index) in items" :key="index" nuxt :to="item.path">
          <v-list-item-icon>
            <v-icon>mdi-{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-content>{{ item.name }}</v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "NavigationDrawer",
  props: {
    items: Array
  },
  data: () => ({
    drawer: false,
    hover: false
  })
});
</script>

<style lang="scss" scoped>
* {
  font-family: "Montserrat", sans-serif;
  color: #d9d9d9;
  line-height: 1.5rem;
  letter-spacing: 2pt;
}

.menu-button {
  position: fixed;
  top: 0;
  right: 0;
  padding: 12px;
  z-index: 3;

  .v-icon::before,
  .v-icon:hover::before {
    display: flex;
    width: 52px;
    height: 52px;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
  }

  .v-icon::before {
    color: #aaa;
    transition: all 0.2s ease-in-out;
  }

  .v-icon:hover::before {
    background-color: rgba(0, 0, 0, 0.4);
    transition: all 0.2s ease-in-out;
    color: #fff;
  }
}
</style>
