<template>
  <div class="home">
    <Hero
      title="In Caravans"
      subtitle="Energy-fueled psychedelic indie rock with mystique and intensity"
      video
      path="InC_HeroMovie.mp4"
    />

    <Row>
      <Section title="Explosive indie psych rock">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse, dignissimos asperiores! Voluptatum ab dolor, quam quae dolores suscipit quo in.</p>
      </Section>
      <Section title="Melodic and atmospheric">
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam placeat illum ea fuga nesciunt mollitia maiores sequi, et eum, ab repudiandae eligendi excepturi quasi pariatur, dolores error quo commodi eos.</p>
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
