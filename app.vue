<template>
  <NuxtLayout>
    <HeaderVue />
    <NuxtPage />
    <FooterVue />
  </NuxtLayout>
</template>

<style>
h1 {
  @apply text-3xl font-bold my-10;
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