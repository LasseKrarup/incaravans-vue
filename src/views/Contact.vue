<template>
  <div>
    <Hero title="Contact" subtitle="Get in touch with In Caravans" path="drums-closeup.jpg"></Hero>

    <Row>
      <Section
        title="Booking In Caravans"
      >Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio aliquam rem provident delectus, officiis ex porro deserunt ab a dolorem nam labore ea. Asperiores nobis quae deserunt tempora cupiditate facilis perspiciatis, repudiandae iusto. Aut, ratione expedita atque recusandae quam tempora sed magni natus molestiae, cumque illum libero cum deleniti aliquid.</Section>
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
  }
});
</script>