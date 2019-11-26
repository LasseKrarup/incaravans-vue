<template>
  <v-container>
    <v-row cols="12" justify="space-around">
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Row"
});
</script>
