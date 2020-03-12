<template>
  <div class="err-container">
    <h1 v-if="error.statusCode === 404">{{ pageNotFound }}</h1>
    <h1 v-else>{{ otherError }}</h1>
    <p class="text--secondary">
      Try heading back to our
      <NuxtLink to="/">home page</NuxtLink>, and let's take it from there!
    </p>
  </div>
</template>

<script>
export default {
  layout: "default",
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      pageNotFound: "404: Page not found!",
      otherError: "An error occurred"
    };
  },
  head() {
    const title =
      this.error.statusCode === 404 ? this.pageNotFound : this.otherError;
    return {
      title: "In Caravans - " + title
    };
  }
};
</script>

<style lang="scss" scoped>
.err-container {
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  align-items: center;
}

h1 {
  font-size: 2rem;
}
</style>