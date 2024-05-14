<template>
    <footer class="bg-white border-gray-200">
        <div class="bg-[#06021f]">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div class="md:flex md:items-center md:justify-between">
                    <div class="mb-6 md:mb-0">
                        <nuxt-link to="/" class="flex items-center">
                            <img src="~/assets/pictures/logo.png" alt="solce Logosu"
                                class="h-20 w-auto bg-[#06021f] rounded-full">
                        </nuxt-link>
                        <p class="text-gray-200 text-base font-semibold ml-3">Sizin Fikirleriniz, Dünyamızı Şekillendiriyor.
                        </p>
                        <div class="flex space-x-4 mt-16 justify-center text-white">
                            <a href="https://www.instagram.com/" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Instagram</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                                    <path fill="currentColor" fill-rule="evenodd"
                                        d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                                        clip-rule="evenodd" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/company/solce/" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Linkedin</span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                                    <path fill="currentColor"
                                        d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" />
                                </svg>
                            </a>
                            <a href="https://twitter.com/" class="text-gray-400 hover:text-gray-500">
                                <span class="sr-only">Twitter</span>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50" width="3em" height="3em">
                                    <path fill="currentColor"
                                        d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                    <div class="grid grid-cols-2 gap-8 sm:grid-cols-4">
                        <div v-for="section in footerLinks" :key="section.title">
                            <h3 class="text-white uppercase text-sm font-semibold">{{ section.title }}</h3>
                            <ul class="mt-10 space-y-4">
                                <li v-for="link in section.links" :key="link.name">
                                    <nuxt-link :to="link.url" class="text-gray-400 hover:text-gray-200 text-sm">
                                        {{ link.name }}
                                    </nuxt-link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="flex items-center justify-center text-gray-200 text-sm border-t py-3 bg-black">
            © 2024 Solce, A.Ş. Tüm hakları saklıdır.
        </div>
    </footer>
</template>
  
<script setup>
import { } from '@heroicons/vue/20/solid'
const footerLinks = [
    {
        title: 'Çözümler',
        links: [
            { name: 'Pazarlama', url: '' },
            { name: 'Analiz', url: '' },
            { name: 'Ticaret', url: '' },
            { name: 'İçgörüler', url: '' },
        ],
    },
    {
        title: 'Destek',
        links: [
            { name: 'Fiyatlandırma', url: '' },
            { name: 'Dokümantasyon', url: '' },
            { name: 'Rehberler', url: '' },
            { name: 'API Durumu', url: '' },
        ],
    },
    {
        title: 'Şirket',
        links: [
            { name: 'Hakkında', url: '' },
            { name: 'Blog', url: '' },
            { name: 'İş Olanakları', url: '' },
            { name: 'Basın', url: '' },
            { name: 'Ortaklar', url: '' },
        ],
    },
    {
        title: 'Hukuki',
        links: [
            { name: 'Talep', url: '' },
            { name: 'Gizlilik', url: '' },
            { name: 'Şartlar', url: '' },
        ],
    },
];
</script>
  