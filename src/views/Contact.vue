<template>
  <div>
    <Hero
      title="Contact"
      subtitle="Get in touch with In Caravans"
      path="incarava-train2.jpg"
      position="0px -100px"
    ></Hero>

    <Row>
      <Section prominent align-center title="Booking In Caravans">
        You can contact us for booking, interviews or if you have any questions
        in general.
        <br />Contact us through any one of the services listed here.
      </Section>

      <v-row justify="center" class="px-12">
        <v-col v-for="(icon, idx) in contactIcons" :key="idx" cols="12" sm="3">
          <a
            class="disabled--text text-center"
            v-if="icon.link !== undefined"
            :href="icon.link"
            target="_blank"
          >
            <v-icon size="80">mdi-{{ icon.icon }}</v-icon>
            <br />
            {{ icon.text }}
          </a>

          <p v-else class="disabled--text text-center">
            <v-icon size="80">mdi-{{ icon.icon }}</v-icon>
            <br />
            {{ icon.text }}
          </p>
        </v-col>
      </v-row>
    </Row>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";
import Row from "@/components/Row.vue";
import Section from "@/components/Section.vue";

export default Vue.extend({
  name: "Contact",
  components: {
    Hero,
    Row,
    Section
  },
  data: () => ({
    contactIcons: [
      {
        icon: "email",
        text: "mail@incaravans.com",
        link: "mailto:mail@incaravans.com"
      },
      {
        icon: "facebook",
        text: "facebook.com/incaravans",
        link: "https://www.facebook.com/InCaravans/"
      },
      {
        icon: "phone",
        text: "+45 4162 1410"
      }
    ]
  })
});
</script>

<style lang="scss" scoped>
a {
  display: block;
  text-decoration: none;
  &:hover {
    text-shadow: 0px 0px 10px black;
  }
}
</style>
