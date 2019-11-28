<template>
  <div>
    <Hero
      title="The Music"
      subtitle="Listen to the music on your favorite streaming service"
      path="incarava-train2.jpg"
    ></Hero>

    <Row>
      <Section
        title="Mystique and power"
      >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aut, odio commodi? Explicabo nobis nulla accusantium facere vel ea, nesciunt expedita maxime reprehenderit maiores, voluptates dolore minus ut placeat et assumenda sed doloribus veritatis reiciendis modi sapiente laborum recusandae atque illum? Atque consectetur inventore ipsum quasi ipsam similique fugiat adipisci esse.</Section>

      <Section title="Concerts">
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
        title: "'Courier' Single",
        src: "https://song.link/8nsbzvb3prbvs"
      },
      {
        title: "'Sunken Streets' EP",
        src: "https://album.link/WkRwWTQHwG5rB"
      }
    ]
  })
});
</script>