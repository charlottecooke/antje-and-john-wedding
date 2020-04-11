<template>
    <main>
        <h1 class="h2">RSVP</h1>
        <p>Here we will have a little form:
            and it will hopefully send to a mini database, or directly fill out a google sheets,
            if that is possible?
        </p>
    </main>
</template>

<script>

export default {
    head() {
        return {
            title: 'RSVP'
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
