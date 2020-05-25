<template>
  <div class="home">
    <Hero
      title="In Caravans"
      subtitle="Energy-fueled psychedelic indie rock with mystique and intensity"
      video
      path="InC_HeroMovie.mp4"
    />

    <Row style="margin-top: -12px">
      <Section title="New single 'Sideways' is out!">
        <p>
          Our new single 'Sideways' is out! We're so stoked about this track as it marks a new turn for us. 
          <br>
          Ominous lyrics combine with a danceable groove to form this track.
        </p>
        <StreamPlayer dark :embedLink="{ 'src': 'https://song.link/pn2mq0cpwzk7c' }" />
      </Section>

      <Section title="'Real Emotion' drops 5/6">
        <p>We are releasing yet another single on the 5th of June 2020. In this video Magnus rambles (in Danish) about the thoughts and feelings he had when writing the song.</p>
        <iframe width="100%" height="350px" src="https://www.youtube.com/embed/KnVcDEgBY1U" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </Section>
      
    </Row>

    <Row dark>
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

    <Row>
      <Section prominent alignCenter title="Explore the music">
        <div style="text-align: justify">
        <p style="padding-top: 2rem">
          In Caravans is out on all major streaming services - and some smaller
          ones as well! We also have a music video available.
          <small class="disabled--text"
            >(and there's a new single coming out soon!)</small
          >
        </p>
        <p>The music of <strong class="accent--text">In Caravans</strong> is driven by lead singer Magnus Barslund's ability to express those <i>tough to describe</i> thoughts and emotions that we can all relate to. He does this using straight up pop melodies, fooling you to forget that you were just lost in deep thought. Funky bass lines and captivating guitar hooks compel you to move your feet while the vocals keep you focused on the struggles of navigating this dystopic world.</p>
        </div>
        <v-btn color="accent" outlined nuxt to="music"
          >Listen to In Caravans</v-btn
        >
      </Section>
    </Row>

    <Row dark align="center">
      <Section>
        <v-img :src="require('~/assets/MITPICK4-comp.jpg')" alt="In Caravans on the roof"></v-img>
      </Section>

      <Section title="Get to know us">
        <p>
          <strong class="accent--text">In Caravans</strong> consists of 5 people:
          <ul style="list-item-style: none">
            <li v-for="(member, i) in members" :key="i">
              {{ member.name }} <span class="disabled--text">({{ member.instrument }})</span>
            </li>    
          </ul>      
        </p>
        <p>
          We started out in an office building in western Aarhus. Since then we have moved to a rehearsal room, where the outside light bulbs don't get stolen, and we don't have to carry Søren's guitar amp <span class="disabled--text">(which is the heaviest object known to man)</span> up 3 flights of stairs.
        </p>
        <p>
          You can read the story behind In Caravans, how we met and what inspires
          us. You can also reach us through email or social media.
        </p>
        <v-btn color="accent" outlined nuxt to="about">Read more</v-btn>
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
          did our first EP, and our
          <i>other</i> good friend Anders Eske is doing our new stuff. Be sure
          to check them out as well if you enjoy the stuff they have helped us
          with!
        </p>

        <v-row justify="center" class="px-sm-12">
          <v-col cols="12" sm="4" v-for="(img, idx) in images" :key="idx">
            <v-img
              :src="require('@/assets/' + img.name + '.jpg')"
              :lazy-src="require('@/assets/' + img.name + '-thumbnail.jpg')"
              min-height="100%"
              :position="img.position"
              alt="Image of In Caravans"
            ></v-img>
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
import StreamPlayer from "@/components/StreamPlayer.vue";

export default {
  name: "home",
  components: {
    Hero,
    Section,
    Row,
    StreamPlayer
  },
  head: {
    title: "In Caravans",
    titleTemplate: "%s"
  },
  data: () => ({
    images: [
      {
        name: "MITPICK4-comp"
      },
      {
        name: "Vers6-comp"
      },
      {
        name: "Vers1-comp"
      }
    ],
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
};
</script>
