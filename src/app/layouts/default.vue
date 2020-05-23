<template>
    <div>
      <header>
      </header>
      <nuxt/>
      <footer class="footer-layout">
        <hr>
        <p class="footer-text">Made by Charlotte Cooke</p>
      </footer>
    </div>
</template>

<style lang="scss">
hr {
  color: #6e7f80;
}

.footer-layout {
  position: absolute;
  width: 100%;
  height: 4rem;
  bottom: 0;
  background: white;
}

.footer-text {
  padding-left: 10px;
  color: #6e7f80;
}


</style>