<template>
  <div class="about">
    <Hero
      title="About"
      subtitle="Information about In Caravans"
      path="incaravans-train1.jpg"
      overlay-opacity="0.6"
    />
    <Row>
      <Section title="The Band">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, ea debitis! Tempora beatae veniam quo impedit officiis aspernatur quam a omnis praesentium laborum incidunt fuga delectus doloremque reprehenderit ducimus, dolorum dignissimos quidem! Excepturi id est adipisci neque accusantium, eius veniam, exercitationem suscipit
        <span
          class="accent--text"
        >expedita</span> quia doloribus provident facilis? Ratione, possimus. Quis!
      </Section>
      <Section
        title="The Vision"
      >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nobis eveniet facilis impedit repellat. Ut totam obcaecati veritatis quaerat unde, quos deserunt, ex qui doloremque culpa harum tempore facere aspernatur dolore vitae sit a atque quasi. Aliquam animi, repellat ducimus dicta quisquam illum incidunt temporibus blanditiis officia laborum natus, dolorum ratione!</Section>
      <!-- </Row>
      <Row>-->
      <Section title="The Crew">
        <p>
          <span class="text-capitalise accent--text">Lasse Krarup</span> - drums &amp; SPD-SX
          <br />
          <span class="text-capitalise accent--text">Sebastian Krogh</span> - bass
          <br />
          <span class="text-capitalise accent--text">Magnus Barslund</span> - vocals
          <br />
          <span class="text-capitalise accent--text">Søren Larsen</span> - guitar and boat
          <br />
          <span class="text-capitalise accent--text">Niels Langeland</span>
          - guitar &amp; keys
        </p>
      </Section>
      <Section>
        <v-img alt="In Caravans in a pavillion" src="@/assets/incaravans-pavillon.jpg" width="100%"></v-img>
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
  }
});
</script>

<style lang="scss" scoped>
</style>