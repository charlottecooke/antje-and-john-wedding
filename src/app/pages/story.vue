<template>
    <main>
        <h1 class="h2">Our Story</h1>
        <p>Timeline of their lives :)</p>
    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'Our Story'
        };
    }
};
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;
  p {
      color: pink;
  }
}
</style>