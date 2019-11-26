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
  name: "TheMusic",
  components: {
    Hero,
    Row,
    Section
  }
});
</script>