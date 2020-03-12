<template>
  <v-col cols="12" :sm="prominent === true ? 11 : 5" class="pa-8 pa-sm-12">
    <v-lazy
      v-model="isActive"
      :options="{
        threshold: 0.5
      }"
      transition="scroll-y-reverse-transition"
    >
      <div :style="alignCenter === true ? 'text-align: center' : ''">
        <h3 v-if="title !== undefined" :class="titleStyle + '--text'">
          {{ title }}
        </h3>
        <slot></slot>
      </div>
    </v-lazy>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Section",
  props: {
    title: {
      type: String,
      default: undefined
    },
    titleStyle: {
      type: String,
      default: "primary"
    },
    prominent: {
      type: Boolean,
      default: false
    },
    alignCenter: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    isActive: false
  })
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
