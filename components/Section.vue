<template>
  <v-col cols="12" :sm="prominent === true ? 11 : 5" class="pa-8 pa-sm-12 intersect-wrapper" ref="wrapper" :style="isIntersected ? 'opacity: 1' : ''">
      <div :style="alignCenter === true ? 'text-align: center' : ''">
        <h3 v-if="title !== undefined" :class="titleStyle + '--text'">
          {{ title }}
        </h3>
        <slot></slot>
      </div>
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
    isIntersected: false
  }),
  mounted () {
    const options = {
      threshold: 0
    }
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].intersectionRatio > 0) {
        // @ts-ignore
        this.isIntersected = true
      }
    }, options)

    // @ts-ignore
    observer.observe(this.$refs.wrapper)
  }
});
</script>

<style lang="scss" scoped>
.intersect-wrapper {
  transition: opacity ease-in 0.5s;
  transition-delay: 0.2s;
  opacity: 0;
}

h3 {
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 2pt;
}

p {
  font-weight: 200;
}
</style>
