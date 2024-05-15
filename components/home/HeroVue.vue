<template>
    <div class="bg-white z-40 relative">
        <NuxtParticles id="tsparticles" :options="options" />
        <div class="relative isolate px-6 pt-14 lg:px-8 bg-gradient-to-t from-[#06021f] to-transparent">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#fefefe] to-[#1d0b77] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl py-28 sm:py-28 lg:py-32">
                <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding. <a href="#" class="font-semibold text-sky-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div> -->
                <div class="text-center">
                    <h1
                        class="text-4xl font-bold tracking-tight text-white sm:text-7xl lg:text-[84px] my-3 lg:ml-5 animate__animated animate__jackInTheBox">
                        SOL-<span class="text-sky-600">CE</span></h1>
                    <h1 class="text-4xl font-bold tracking-tight text-white sm:text-7xl lg:text-[84px] my-3 lg:mr-5">
                        SOLUTION
                        <span class="text-sky-600">CENTER</span>
                    </h1>

                    <p class="mt-6 lg:text-xl md:text-lg text-base leading-8 text-gray-400">Yeniliği Kucaklayın, Çözümleri
                        Birleştirin:
                        AR-GE'nizi Optimize Edin, Girişimci ve Yatırımcıları Bir Araya Getirin</p>
                    <div
                        class="mt-6 lg:text-lg md:text-base text-sm font-bold leading-8 text-sky-600 flex items-center gap-x-2 flex-wrap justify-center">
                        Problemi belirleyin
                        <ChevronRightIcon
                            class="animate__animated animate__infinite animate__heartBeat mt-1 lg:size-5 size-4 text-white"
                            aria-hidden="true" />
                        Yarışma oluşturun
                        <ChevronRightIcon
                            class="animate__animated animate__infinite animate__heartBeat mt-1 lg:size-5 size-4 text-white"
                            aria-hidden="true" />
                        Yarışmayı başlatın
                        <ChevronRightIcon
                            class="animate__animated animate__infinite animate__heartBeat mt-1 lg:size-5 size-4 text-white"
                            aria-hidden="true" />
                        En iyi fikirleri Ödüllendirin
                    </div>
                    <div class="mt-10 flex items-center justify-center lg:gap-x-6 md:gap-x-4 gap-x-2">
                        <nuxt-link to="/giris" class="lg:text-base text-sm font-semibold leading-6 text-sky-600 px-5 py-1 border-2 
                            border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white 
                            flex justify-center items-center gap-x-2">
                            Hemen Başlayın</nuxt-link>
                        <nuxt-link to="/hakkimizda"
                            class="flex items-center gap-x-2 lg:text-base text-sm font-semibold leading-6 text-white pr-3 pl-5 py-1 rounded-xl border-2 border-transparent hover:border-sky-600 transition-all duration-300">
                            Daha Fazla Bilgi
                            <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
                        </nuxt-link>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#f9faf9f7] to-[#0e1ac2] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ArrowRightIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'
import options from '~/assets/particles/particles-light.json'
import { tsParticles } from "@tsparticles/engine";
import { loadLightInteraction } from "@tsparticles/interaction-light";

(async () => {
    await loadLightInteraction(tsParticles);
})();

const mobileMenuOpen = ref(false)
</script>