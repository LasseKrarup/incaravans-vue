<template>
  <v-footer dark padless class="mt-12">
    <v-container>
      <v-row>
        <v-col class="text-center">
          <v-btn
            v-for="(icon, idx) in icons"
            :key="idx"
            class="mx-4 white--text"
            icon
            :href="icon.href"
            :target="icon.icon != 'home' ? '_blank' : undefined"
          >
            <span class="iconify" :data-icon="'mdi:'+ icon.icon" style="font-size:24px"></span>
          </v-btn>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="text-center">
          <span class="text--secondary">
            {{ new Date().getFullYear() }} -
            In Caravans
          </span>
          <br />
          <span class="text--disabled">Design by <a id="admin-link" href="https://www.lassekrarup.com" target="_blank">Lasse Krarup</a></span>
        </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Footer",
  props: {
    icons: Array
  }
});
</script>

<style lang="sass" scoped>
#admin-link
  color: white
  font-weight: 500
  text-decoration: none
</style>