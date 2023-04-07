<script setup lang="ts">
  import { RouterLink, RouterView } from 'vue-router';
  import Home from './components/Home.vue';
  import GlobeVue from './components/Globe.vue';
  import StarsBackgroundVue from './components/StarsBackground.vue';
</script>

<template>
  <GlobeVue />
  <div id="viewport">
    <StarsBackgroundVue />
    <header>
      <div alt="Atlanta development exchange logo"  class="logo">
      </div>
      <div class="wrapper">
        <Home msg="Altanta Development Exchange" />
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/services">Our Services</RouterLink>
          <RouterLink to="/products">Our Products</RouterLink>
          <RouterLink to="/more">Learn More</RouterLink>
        </nav>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
  z-index: 3;
}

.logo {
  background-image: var(--logo);
  display: block;
  position: relative;
  width: 300px;
  height: 87.5px;
  background-size: 100% 100%;
  z-index: 3;
}

@media only screen and (max-width: 1024px)  {
  .logo {
    background-image: var(--logo);
    display: block;
    position: relative;
    margin: 0 auto 2rem;
    width: 150px;
    height: 100px;
    background-size: 100% 100%;
    animation: fadeInOut 2.5s infinite;
    z-index: 3;
  }
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    position: sticky;
    top: 0rem;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
    animation: fadeInOut 2.5s infinite;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}

@keyframes fadeInOut {
  0% {
    transform: none;
    opacity: .9;
  }
  50% {
    transform: none;
    opacity: .75;
  }
  100% {
    transform: none;
    opacity: .9;
  }
}

</style>

