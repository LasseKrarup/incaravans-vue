<template>
  <v-container fluid>
    <v-row justify="space-around" :align="align" :align-content="alignContent" class="pa-sm-12" :style="dark === true ? 'background-color: #212121' : ''">
      <slot></slot>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Row",
  props: {
    dark: {
      type: Boolean,
      default: false
      },
    alignContent: {
      type: String,
      default: undefined
    },
    align: {
      type: String,
      default: undefined
    }
  }
});
</script>
