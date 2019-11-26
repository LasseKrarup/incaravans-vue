<template>
  <v-col cols="12" :sm="prominent === true ? 12 : 5" class="mt-12 pa-xs-6">
    <div>
      <h3 :class="titleStyle + '--text'">{{ title }}</h3>
      <slot>
        <p></p>
      </slot>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Section",
  props: {
    title: String,
    titleStyle: {
      type: String,
      default: "primary"
    },
    prominent: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 2pt;
}

p {
  font-weight: 200;
}
</style>
