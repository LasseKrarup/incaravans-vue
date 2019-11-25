<template>
  <v-col cols="12" sm="5" offset-md="1" class="col pa-xs-8">
    <div>
      <h3 :class="titleStyle + '--text'">{{title}}</h3>
      <slot>
        <p></p>
      </slot>
    </div>
  </v-col>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Section",
  props: {
    title: String,
    titleStyle: {
      type: String,
      default: "primary"
    }
  }
});
</script>

<style lang="scss" scoped>
h3 {
  font-weight: 500;
  font-size: 1.8rem;
  letter-spacing: 2pt;
}

p {
  font-weight: 200;
}

.col {
  margin-top: 100px;
}

@media only screen and (min-width: 601px) {
  .col {
    margin: 0;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
}
</style>