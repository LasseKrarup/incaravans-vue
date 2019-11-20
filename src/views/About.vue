<template>
  <div class="about">
    <Hero title="About" subtitle="Information about In Caravans" path="courier-min.jpg" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";

export default Vue.extend({
  name: "About",
  components: {
    Hero
  }
});
</script>

<style lang="scss" scoped>
</style>