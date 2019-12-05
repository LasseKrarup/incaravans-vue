<template>
  <div class="home">
    <Hero
      title="In Caravans"
      subtitle="Energy-fueled psychedelic indie rock with mystique and intensity"
      video
      path="InC_HeroMovie.mp4"
    />

    <Row>
      <Section title="A road trip with broken brakes">
        <p>A concert with In Caravans is like a 200 MPH road trip through the desert in a truck without brakes, passing through eerie and mysterious sceneries. Atmospheric, yet straight to the point, In Caravans alternates between fleeting emotion and no-nonsense indie rock.</p>
      </Section>
      <Section title="Love, solitude and anxiety">
        <p>Love, addiction, loneliness, stress and friendship - those are the themes of In Caravans' music. Though at times mysterious and hard to decipher, the lyrics often describe the hardest emotions like jealousy and insecurity with a unique clarity.</p>
      </Section>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Section from "@/components/Section.vue";
import Row from "@/components/Row.vue";

export default Vue.extend({
  name: "home",
  components: {
    Hero,
    Section,
    Row
  }
});
</script>
