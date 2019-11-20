<template>
  <div class="home">
    <Hero
      title="In Caravans"
      subtitle="Energy-fueled psychedelic indie rock with mystique and intensity"
      video
      path="InC_HeroMovie.mp4"
    />

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur ipsum, corrupti quo nobis ratione dolor? Repudiandae sapiente mollitia ea eaque accusamus excepturi, quia praesentium modi corporis deserunt harum eligendi dolore optio eos quis magni? Magnam distinctio necessitatibus sint. Quae autem perferendis et obcaecati unde, velit quas debitis ipsam nemo doloremque veniam molestias dolorum tempora excepturi aspernatur porro laboriosam necessitatibus ex minus! Fuga, nisi! Laudantium, eos. Assumenda eum cum nam voluptatibus nobis suscipit sed ab et error id, laboriosam illo laborum. Assumenda quibusdam quod porro obcaecati est. Corporis voluptatem vitae velit ipsam rerum consequuntur nobis aspernatur, exercitationem possimus corrupti voluptate. Ipsam!</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Hero from "@/components/Hero.vue";

export default Vue.extend({
  name: "home",
  components: {
    Hero
  }
});
</script>
