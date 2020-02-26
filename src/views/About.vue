<template>
  <div class="about">
    <Hero
      title="About"
      subtitle="Information about In Caravans"
      path="incaravans-train1.jpg"
      overlay-opacity="0.5"
    />
    <Row>
      <Section title="The Band">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        Aliquid recusandae at possimus, earum adipisci rem deleniti sequi
        <span
          class="accent--text"
        >voluptates</span>.
        Ab quisquam vel repellat delectus nulla itaque quibusdam deleniti, voluptates et.
        Accusantium exercitationem amet corrupti, repudiandae, reiciendis aperiam dolores, necessitatibus earum facilis animi recusandae.
        Ullam atque inventore quisquam dolorum perspiciatis deserunt amet.
      </Section>
      <Section title="The Vision">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis
        eveniet facilis impedit repellat. Ut totam obcaecati veritatis
        quaerat unde, quos deserunt, ex qui doloremque culpa harum
        tempore facere aspernatur dolore vitae sit a atque quasi.
        Aliquam animi, repellat ducimus dicta quisquam illum incidunt
        temporibus blanditiis officia laborum natus, dolorum
        ratione!
      </Section>
      <Section prominent>
        <v-img
          alt="Press photo of In Caravans"
          src="@/assets/incaravans-pressfoto1.jpg"
          width="100%"
        ></v-img>
        <p class="member-paragraph">
          <span class="l2r">Left to right:</span>
          <span v-for="(member, idx) in members" :key="idx" cols="12" sm="4" dense>
            <span class="accent--text">{{ member.name }}</span>
            <span class="disabled--text">({{ member.instrument }})</span>
          </span>
        </p>
      </Section>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Row from "@/components/Row.vue";
import Section from "@/components/Section.vue";

export default Vue.extend({
  name: "About",
  components: {
    Hero,
    Row,
    Section
  },
  data: () => ({
    members: [
      {
        name: "Magnus Barslund",
        instrument: "vocals"
      },
      {
        name: "Lasse Herold Krarup",
        instrument: "drums"
      },
      {
        name: "Søren Larsen",
        instrument: "guitar"
      },
      {
        name: "Sebastian Gall Hede Krogh",
        instrument: "bass"
      },
      {
        name: "Niels Langeland",
        instrument: "guitar & synths"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
.member-paragraph {
  padding-top: 0px;
  display: flex;
  flex-wrap: wrap;

  > span {
    margin-right: 12px;
  }
}
.l2r {
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
}
</style>
