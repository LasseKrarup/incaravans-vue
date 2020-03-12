<template>
  <div class="hero-container">
    <div class="video-container">
      <v-img v-if="video" min-height="100%" min-width="100%">
        <video
          id="hero-vid"
          alt="Background video for the In Caravans header"
          autoplay="true"
          loop="true"
          :muted="isMuted"
          :src="require('@/assets/' + path)"
          type="video/mp4"
        ></video>
      </v-img>
      <v-img
        v-else
        :src="require('@/assets/' + path)"
        min-height="100%"
        :position="position"
        alt="Background image for the In Caravans header"
      ></v-img>
    </div>
    <div class="overlay" :style="{backgroundColor: 'rgba(0,0,0,' + overlayOpacity + ')'}"></div>
    <div class="hero-content">
      <h1>{{title}}</h1>
      <h2>{{subtitle}}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Hero",
  data: () => ({
    isMuted: true
  }),
  props: {
    title: String,
    subtitle: String,
    video: {
      type: Boolean,
      default: false
    },
    path: {
      type: String,
      required: true
    },
    overlayOpacity: {
      type: String,
      default: "0.4"
    },
    position: String
  },
  mounted() {}
});
</script>

<style lang="scss" scoped>
html {
  font-family: "Montserrat", "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

h1 {
  font-size: 38pt;
  font-weight: 300;
  letter-spacing: 12pt;
  text-align: center;
}

h2 {
  font-size: 12pt;
  font-weight: 400;
  letter-spacing: 2pt;
  text-align: center;
  color: #bbbbbb;
}

.hero-container {
  display: flex;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 100vh;
  width: 100vw;
}

.video-container {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;

  video {
    min-width: 100%;
    min-height: 100%;
  }
}

.overlay {
  width: 100%;
  height: 100vh;
  z-index: 1;
  position: absolute;
  top: 0;
  left: 0;
}

.hero-content {
  z-index: 2;
  width: 100%;
  height: 100%;
  justify-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  transform: translate(6pt, 0);

  @media only screen and (max-width: 600px) {
    padding: 10%;
  }
}
</style>