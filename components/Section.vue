<template>
  <v-col cols="12" :sm="prominent === true ? 11 : 5" :class="'pa-8 pa-sm-12 intersection-wrapper' + (isIntersected ? ' is-active' : '')" ref="wrapper">
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
  // ========== ANIMATION ON INTERSECTION REMOVED BECAUSE OF SEO ==========
  // mounted () {
  //   const options = {
  //     threshold: 0
  //   }
  //   const observer = new IntersectionObserver((entries) => {
  //     if (entries[0].intersectionRatio > 0) {
  //       // @ts-ignore
  //       this.isIntersected = true
  //     } else {
  //       this.isIntersected = false
  //     }
  //   }, options)

  //   // @ts-ignore
  //   observer.observe(this.$refs.wrapper)
  // }
  // ======================================================================
});
</script>

<style lang="scss" scoped>
// ========== ANIMATION ON INTERSECTION REMOVED BECAUSE OF SEO ==========
// @keyframes fadeup {
//   0% { transform: translateY(25%) }
//   100% { transform: none }
// }

// .intersection-wrapper {
//   animation-name: fadeup;
//   animation-fill-mode: both;
//   animation-duration: 1s;
//   animation-delay: 0.3s;
//   animation-play-state: paused;
//   animation-timing-function: cubic-bezier(.02,.98,.59,.99);
// }

// .is-active {
//   animation-play-state: running;
// }
// ======================================================================

h3 {
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 2pt;
}

p {
  font-weight: 200;
}
</style>
