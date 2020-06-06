<template>
  <div>
    <Hero
      title="The Music"
      subtitle="Listen to the music on your favorite streaming service"
      path="Vers8-comp.jpg"
    ></Hero>

    <Row>
      <Section prominent title="New single 'Real Emotion' out now!" id="realemotion">
        <p>
          Our newest single 'Real Emotion' has just landed on the 5th of June! This track features honest lyrics, a groovy verse and an <strong>explosive</strong> chorus. <br>Check it out and please throw us a like on <a href="www.facebook.com/InCaravans" target="_blank">facebook</a>.
        </p>
        <StreamPlayer dark :embedLink="{ 'src': 'https://song.link/tfqkcgtz6knfx' }" />
      </Section>
    </Row>

    <Row>
      <Section prominent title="Concerts">
        When we're touring, you can find the dates for our concerts below.
        <TourWidget></TourWidget>
      </Section>

      <Section
        v-for="(embedLink, idx) in embedLinks"
        :key="idx"
        :title="embedLink.title"
        :prominent="embedLink.prominent ? true : false"
      >
        <StreamPlayer dark :embedLink="embedLink"></StreamPlayer>
      </Section>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Row from "@/components/Row.vue";
import Section from "@/components/Section.vue";
import StreamPlayer from "@/components/StreamPlayer.vue";
import TourWidget from "@/components/TourWidget.vue";

export default Vue.extend({
  name: "TheMusic",
  components: {
    Hero,
    Row,
    Section,
    StreamPlayer,
    TourWidget
  },
  data: () => ({
    embedLinks: [
      {
        title: "Watch 'Maybe'",
        src: "https://song.link/9bbsBj8J0dq30",
        prominent: true
      },
      {
        title: "'Sideways' May 2020",
        src: "https://song.link/pn2mq0cpwzk7c",
        prominent: false
      },
      {
        title: "'Courier' Single",
        src: "https://song.link/8nsbzvb3prbvs"
      },
      {
        title: "'Sunken Streets' EP",
        src: "https://album.link/WkRwWTQHwG5rB"
      }
    ]
  }),
  head: {
    title: "The Music",
    link: [
      {rel: "canonical", href: "https://www.incaravans.com/music/"}
    ]
  }
});
</script>
