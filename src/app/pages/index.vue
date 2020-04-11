<template>
    <main>

        <div class="container-for-image">
            <img class="main-image" alt="An image of Jon and Antje on the night of the proposal" src="../assets/images/jon-and-antje.jpg">
            <div class="h2">JON AND ANTJE</div>
        </div>
        <p>Some more info in here</p>
        <p>This is a great page</p>

    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'Jon and Antje\'s Wedding'
        };
    }
};
</script>

<style lang="scss">
main {
  display: flex;
  align-items: center;
  flex-direction: column;

  .container-for-image {
    position: relative;
    text-align: center;
    color: white;
  }

  .main-image {
      height: 1100px;
      opacity: 0.7;
  }

  .h2 {
    position: absolute;
    font-size: 120px;
    top: 50%;
    left: 40%;
    transform: translate(-50%, -50%);
    line-height: 1.8em;
  }

  p {
      color: pink;
  }
}
</style>
