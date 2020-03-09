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
        <p>
          A concert with In Caravans is like a 200 MPH road trip through the
          desert in a truck without brakes, passing through eerie and mysterious
          sceneries. Atmospheric, yet straight to the point, In Caravans
          alternates between fleeting emotion and no-nonsense indie rock.
        </p>
      </Section>
      <Section title="Love, solitude and anxiety">
        <p>
          Love, addiction, loneliness, stress and friendship - those are the
          themes of In Caravans' music. Though at times mysterious and hard to
          decipher, the lyrics often describe the hardest emotions like jealousy
          and insecurity with a unique clarity.
        </p>
      </Section>
    </Row>

    <Row dark>
      <Section title="Explore the music">
        <p>
          In Caravans is out on all major streaming services - and some smaller
          ones as well! We also have a music video available.
          <small class="disabled--text">
            (and there's a new single coming out soon!)
          </small>
        </p>
        <v-btn color="accent" outlined to="music">Listen to In Caravans</v-btn>
      </Section>
      <Section title="Get to know us">
        <p>
          You can read the story behind the band, how we met and what inspires
          us. You can also reach us through email or social media.
        </p>
        <v-btn color="accent" outlined to="about">Read more</v-btn>
      </Section>
    </Row>

    <Row>
      <Section title="We are In Caravans" prominent align-center>
        <p style="text-align: left">
          ...but we wouldn't have come very far without help from our amazing
          friends. Most of our photos, for example, are taken by
          <a
            href="https://www.instagram.com/madsterix/"
            target="_blank"
            class="white--text"
            >@madsterix</a
          >. Our good friend Rasmus Bredvig of
          <a
            href="https://www.tapetownstudio.com/"
            target="_blank"
            class="white--text"
            >Tapetown Studios</a
          >
          did our first EP, and our <i>other</i> good friend Anders Eske is
          doing our new stuff. Be sure to check them out as well if you enjoy
          the stuff they have helped us with!
        </p>

        <v-row justify="center" class="px-sm-12">
          <v-col cols="12" sm="4" v-for="(img, idx) in images" :key="idx">
            <v-img
              :src="require('@/assets/' + img.path)"
              min-height="100%"
              :position="img.position"
              alt="Image of In Caravans"
            >
            </v-img>
          </v-col>
        </v-row>
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
  },
  data: () => ({
    images: [
      {
        path: "MITPICK4.jpg"
      },
      {
        path: "Vers6.jpg"
      },
      {
        path: "Vers1.jpg"
      }
    ]
  })
});
</script>
