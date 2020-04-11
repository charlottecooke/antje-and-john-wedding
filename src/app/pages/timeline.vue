<template>
    <main>
        <h1 class="h2">Timeline of the Day</h1>
        <p>
            Classy timeline of the Day
            Eat food,
            get married,
            everyone dances and gets drunk.
            Lots of photos
        </p>
        <img class="rings-image" alt="Two rings on a bed of flowers" src="../assets/images/rings.jpg">

    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'Timeline of the Day'
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

  .rings-image {
      height: 500px;
  }
}
</style>