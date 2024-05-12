<template>
    <div class="bg-white z-40">
        <div class="relative isolate px-6 pt-14 lg:px-8">
            <div class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                aria-hidden="true">
                <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
            <div class="mx-auto max-w-2xl pb-32 pt-10 sm:pb-48 sm:pt-16 lg:pb-56 lg:pt-24">
                <!-- <div class="hidden sm:mb-8 sm:flex sm:justify-center">
                    <div
                        class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                        Announcing our next round of funding. <a href="#" class="font-semibold text-indigo-600"><span
                                class="absolute inset-0" aria-hidden="true" />Read more <span
                                aria-hidden="true">&rarr;</span></a>
                    </div>
                </div> -->
                <div class="text-center">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">SOL-CE</h1>
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">SOLUTION CENTER</h1>

                    <p class="mt-6 text-lg leading-8 text-gray-600">Yeniliği Kucaklayın, Çözümleri Birleştirin: AR-GE'nizi
                        Optimize Edin, Girişimci ve Yatırımcıları Bir Araya Getirin</p>
                    <div class="mt-10 flex items-center justify-center gap-x-6">
                        <a href="#" class="text-sm font-semibold leading-6 text-indigo-600 px-5 py-1 border-2 border-indigo-600 rounded-xl
                            hover:shadow-md transition-all duration-300 hover:bg-indigo-600 hover:text-white flex justify-center
                            items-center gap-x-2">
                            Hemen Başlayın</a>
                        <a href="#"
                            class="flex items-center gap-x-2 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 pr-3 pl-5 py-1 rounded-xl border-2 border-transparent hover:border-indigo-600 transition-all duration-300">
                            Daha Fazla Bilgi
                            <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
                        </a>
                    </div>
                </div>
            </div>
            <div class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true">
                <div class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon, ArrowRightIcon } from '@heroicons/vue/24/outline'

const mobileMenuOpen = ref(false)
</script>