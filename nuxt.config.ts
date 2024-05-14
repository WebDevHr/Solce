// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui', '@nuxtjs/google-fonts', 'nuxt-particles'],
  headlessui: {
    prefix: 'Headless'
  },
  css: [
    '~/assets/css/globals.css',
  ],
  googleFonts: {
    families: {
      Roboto: true,
      'Josefin+Sans': true,
      Lato: [100, 300],
      Raleway: {
        wght: [100, 400],
        ital: [100]
      },
      Inter: '200..700',
      'Crimson Pro': {
        wght: '200..900',
        ital: '200..700',
      },
      Ubuntu: [100, 200, 300, 400, 500],
      Oswald: [100, 200, 300, 400, 500, 600, 700],
    }
  },
  particles: {
    lazy: false,
    mode: 'slim'
  }
})