<template>
  <NuxtLayout>
    <HeaderVue />
    <NuxtPage />
    <FooterVue />
  </NuxtLayout>
</template>

<script>
import 'animate.css'
</script>

<style>
@import url("animate.css");

h1 {
  @apply text-3xl font-bold my-10 text-gray-700;
  font-family: oswald;
}

h3 {
  @apply text-xl font-bold my-5 text-gray-700;
  font-family: oswald;
}

.font-family-oswald {
  font-family: oswald;
}

p,
div,
button {
  font-family: raleway;
}
</style>