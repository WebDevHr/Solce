// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui'
  ],
  headlessui: {
    prefix: 'Headless'
  },
  css: [
    '~/assets/css/main.css',
    '~/assets/css/globals.css',
  ],
})
