<template>
  <div style="max-width:100%;">
    <div style="position:relative;padding-bottom:calc(56.25% + 52px);height: 0;">
      <iframe
        style="position:absolute;top:0;left:0;"
        width="100%"
        height="100%"
        :src="'https://embed.song.link/?url=https%3A%2F%2F' + linkType + '%2F' + embedID + (dark == true ? '&theme=dark' : '')"
        frameborder="0"
        allowfullscreen
        sandbox="allow-same-origin allow-scripts allow-presentation allow-popups allow-popups-to-escape-sandbox"
      ></iframe>
    </div>
  </div>
</template>


                                
<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "StreamPlayer",
  props: {
    embedLink: {
      type: Object,
      required: true
    },
    dark: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    embedID: function() {
      return this.embedLink.src.split("/")[3];
    },
    linkType: function() {
      return this.embedLink.src.split("/")[2];
    }
  }
});
</script>