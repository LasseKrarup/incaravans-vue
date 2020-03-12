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
            <v-icon size="24px">mdi-{{ icon.icon }}</v-icon>
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
          <span class="text--disabled">Design by Lasse Krarup</span>
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
