<template>
  <div class="about">
    <Hero
      title="About"
      subtitle="Information about In Caravans"
      path="IN_CARAVANS_HEADER-comp.jpg"
      overlay-opacity="0.5"
    />
    <Row align="center">
      <Section title="The Music">
        <p>
          The rough psych-rock elements that characterize the sound, are
          presented in a blanket of melodic, synthesizer-sounding bass, dreaming
          soundscapes and creativity. With the catchiness of pop, and
          aggressiveness of rock, the guitars, and the shifting vocals, draw you
          into a world of mystery.
        </p>

        <p>
          The lyrics are ambiguous and often two-sided, leaving you to decide
          how your world should be like. Often wrapped up in groovyness, the
          music is suitable for those new to neo-psychedelia alike, with
          fleeting emotions, reflection and life, thematically presented.
        </p>
        <v-btn class="my-12" x-large color="accent" outlined nuxt to="music"
          >Listen to the music</v-btn
        >
      </Section>

      <Section>
        <v-img
          alt="Press photo of In Caravans"
          :src="require('~/assets/Vers3-comp.jpg')"
          :lazy-src="require('~/assets/Vers3-comp-thumbnail.jpg')"
          width="100%"
        ></v-img>
      </Section>
    </Row>
    <Row dark>
      <Section title="The Band" prominent>
        <p>
          In Caravans was formed in 2017 by drummer Lasse Herold Krarup and
          guitarist Søren Larsen, with a dream of making a modern psychedelic
          rock band. Bassist Sebastian was promptly given the opportunity to
          join this new indie-endeavor. The choice of lead singer Magnus would
          later come to define the expression of
          <span class="accent--text">In Caravans</span>. The music would be
          conveyed with the characteristics of his ever-shifting nature.
        </p>
        <p>
          The first task consisted of acquiring not only a synthethizer, but
          someone who could play it well. Niels was the last to join, and
          brought with him his capabilities as a guitarist, as well as a 12 year
          old Micro Korg covered in duct tape and labels. The name
          <span class="accent--text">In Caravans</span> was originally a tribute
          to the shared love of going off-route, amongst the members. Their
          music aspired to promote ideas, thoughts and sentiments that would
          acknowledge the value of here-and-now moments.
        </p>
        <p>
          With five completely different lives and interests, they all found
          common ground in these ideas. They would come to agree that whatever
          your life consisted of, what your opinions were and however high you
          would rank in society, there was always the opportunity of living in
          the moment, letting go of it all. And how better to do it, than with 4
          of your best friends in a caravan, somewhere off-route.
        </p>
      </Section>
    </Row>
    <Row>
      <Section prominent>
        <v-img
          alt="Press photo of In Caravans"
          :src="require('~/assets/incaravans-pressfoto1.jpg')"
          :lazy-src="require('~/assets/incaravans-pressfoto1-thumbnail.jpg')"
          width="100%"
        ></v-img>
        <p class="member-paragraph">
          <span class="l2r">Left to right:</span>
          <span
            v-for="(member, idx) in members"
            :key="idx"
            cols="12"
            sm="4"
            dense
          >
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
  }),
  head: {
    title: "About",
    link: [
      {rel: "canonical", href: "https://www.incaravans.com/about/"}
    ]
  }
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
