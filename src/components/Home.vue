<script setup lang="ts">
  defineProps<{
    msg: string
  }>()
</script>

<template>
  <div class="greetings">
    <h1 class="blue">{{ msg }}</h1>
    <h3>
      A project by Matthew Grady. Technology can unify us. Get in contact at
      <a href="https://www.linkedin.com/in/matthew-grady-orlando" title="Linked in link" target="_blank" rel="noopener">LinkedIn</a> +
      <a href="https://github.com/coffeestained" title="github link" target="_blank" rel="noopener">GitHub</a>.
    </h3>
  </div>
</template>

<style scoped lang="scss">
  h1 {
    font-weight: 500;
    font-size: 2.6rem;
    top: -10px;
  }

  h3 {
    font-size: 1.2rem;
  }

  .greetings h1,
  .greetings h3 {
    text-align: center;
  }

  @media (min-width: 1024px) {
    .greetings h1,
    .greetings h3 {
      text-align: left;
    }
  }
</style>
