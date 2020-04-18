<template>
    <div>
      <header>
        <ul>
          <li class="header-button"><a href="/">Home</a></li>
          <li class="header-button"><a href="/timeline">Timeline</a></li>
          <li class="header-button"><a href="/rsvp">RSVP</a></li>
          <li class="header-button"><a href="/story">Life Story</a></li>
          <li class="header-button"><a href="/info">Info</a></li>
        </ul>
      </header>
      <nuxt/>
      <!-- Do we even need this? -->
      <footer class="footer-layout">
        <hr>
        <p class="footer-text">Made by Charlotte Cooke - holla at your girl </p>
      </footer>
    </div>
</template>

<style lang="scss">
@font-face {
  font-family: 'skinny-font';
  src: url('../assets/fonts/quicksand.ttf');
}

body {
  font-family: 'skinny-font';
  font-size: 15px;
  line-height: 1.8em;
}

ul {
  position: -webkit-sticky; /* Safari */
  position: sticky;
  top: 0;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: white;
}

li {
  float: left;
}

li a {
  display: block;
  color: #6e7f80;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
}

li a:hover:not(.active) {
  background-color: #d3d3d3;
}

hr {
  color: #6e7f80;
}

.footer-layout {
  position: absolute;
  width: 100%;
  height: 4rem;
}

.footer-text {
  padding-left: 10px;
  color: #6e7f80;
}


</style>