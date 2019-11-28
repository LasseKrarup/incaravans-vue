<template>
  <a
    href="https://www.songkick.com/artists/9873434"
    class="songkick-widget"
    data-theme="dark"
    data-detect-style="true"
    data-background-color="#363636"
    data-locale="en"
  >In Caravans concerts</a>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "TourWidget",
  mounted() {
    let songkickScript = document.createElement("script");
    songkickScript.setAttribute(
      "src",
      "//widget.songkick.com/9873434/widget.js"
    );
    document.head.appendChild(songkickScript);
  }
});
</script>

<style lang="scss" scoped>
</style>