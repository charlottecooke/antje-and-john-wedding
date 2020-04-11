<template>
    <main>
        <h1 class="h2">Infomation</h1>
        <p>Some information about the day and what's good to do in Oxford:</p>
        <ul>
            <li> One cool thing </li>
            <li> One other cool thing </li>
            <li> and another cool thing </li>
        </ul>
        <img class="oxford-image" alt="The Radcliff Camera Library in Oxford" src="../assets/images/oxford.jpg">
    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'Information'
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

  .oxford-image {
    height: 500px;
  }
}
</style>
