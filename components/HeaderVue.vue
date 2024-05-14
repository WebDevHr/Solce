<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <div :class="['fixed w-full transition-all duration-300', hasScrolled ? 'bg-white shadow-md' : 'bg-transparent']">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div class="flex rounded-full bg-[#06021f]">
                    <nuxt-link to="/" class="-m-1.5 p-1.5">
                        <span class="sr-only">SOLCE</span>
                        <img class="h-12 w-auto" src="~/assets/pictures/logo.png" alt="" />
                    </nuxt-link>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-sky-600"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Ana menüyü aç</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup class="hidden lg:flex lg:gap-x-5">
                    <template v-for="item in navItems" :key="item.name">
                        <Popover v-if="item.subItems" class="relative">
                            <template v-slot="{ open }">
                                <PopoverButton
                                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-sky-600 hover:text-sky-600 pr-3 pl-5 py-1 rounded-xl border-2 border-transparent hover:border-sky-600 transition-all duration-300">
                                    {{ item.name }}
                                    <ChevronDownIcon
                                        :class="['h-5 w-5 flex-none transition-transform duration-300', open ? 'rotate-180' : '']"
                                        aria-hidden="true" />
                                </PopoverButton>
                                <transition enter-active-class="transition duration-200 ease-out"
                                    enter-from-class="translate-y-1 opacity-0" enter-to-class="translate-y-0 opacity-100"
                                    leave-active-class="transition duration-150 ease-in"
                                    leave-from-class="translate-y-0 opacity-100" leave-to-class="translate-y-1 opacity-0">
                                    <PopoverPanel
                                        class="absolute z-10 mt-[22px] border-t-8 border-sky-600 bg-white shadow-lg rounded-xl w-52 overflow-hidden focus:border-none"
                                        v-slot="{ close }">
                                        <template v-for="subItem in item.subItems" :key="subItem.name">
                                            <nuxt-link :to="subItem.href" class="block px-4 py-2 text-sm hover:bg-gray-50"
                                                @click="accept(close)">
                                                {{ subItem.name }}
                                            </nuxt-link>
                                        </template>
                                    </PopoverPanel>
                                </transition>
                            </template>
                        </Popover>
                        <nuxt-link v-else :to="item.href"
                            class="text-sm font-semibold leading-6 text-sky-600 hover:text-sky-600 px-5 py-1 border-2 rounded-xl border-transparent hover:border-sky-600 transition-all duration-300">
                            {{ item.name }}
                        </nuxt-link>
                    </template>
                </PopoverGroup>
                <div class="hidden lg:flex lg:justify-end">
                    <nuxt-link to="/giris"
                        class="text-sm font-semibold leading-6 text-sky-600 px-5 py-1 border-2 border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white flex justify-center items-center gap-x-2">
                        Giriş Yap
                        <ArrowRightIcon class="h-4 w-4" aria-hidden="true" />
                    </nuxt-link>
                </div>
            </nav>
        </div>

        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 w-full z-50 overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-sky-600/10">
                <div class="flex items-center justify-between">
                    <div class="flex rounded-full bg-[#06021f]">
                        <nuxt-link to="/" class="-m-1.5 p-1.5" @click="mobileMenuOpen = false">
                            <span class="sr-only">SOLCE</span>
                            <img class="h-12 w-auto" src="~/assets/pictures/logo.png" alt="SOLCE" />
                        </nuxt-link>
                    </div>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Menüyü kapat</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6 mt-10">
                            <!-- Dynamic navItems for mobile -->
                            <template v-for="item in navItems" :key="item.name">
                                <div v-if="item.subItems">
                                    <Disclosure as="div" v-slot="{ open }">
                                        <DisclosureButton
                                            class="flex w-full items-center justify-between rounded-xl py-1 px-5 text-sm font-semibold leading-6 text-sky-600 hover:bg-gray-50 hover:text-sky-600 border-2 border-transparent hover:border-sky-600 transition-all duration-300">
                                            {{ item.name }}
                                            <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                                                aria-hidden="true" />
                                        </DisclosureButton>
                                        <DisclosurePanel class="mt-2 ml-5 space-y-2">
                                            <nuxt-link v-for="subItem in item.subItems" :key="subItem.name"
                                                :to="subItem.href"
                                                class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-sky-600 hover:bg-gray-50 hover:text-sky-600"
                                                @click="mobileMenuOpen = false">
                                                {{ subItem.name }}
                                            </nuxt-link>
                                        </DisclosurePanel>
                                    </Disclosure>
                                </div>
                                <nuxt-link v-else :to="item.href"
                                    class="block text-sm font-semibold leading-6 text-sky-600 hover:text-sky-600 px-5 py-1 border-2 rounded-xl border-transparent hover:border-sky-600 transition-all duration-300"
                                    @click="mobileMenuOpen = false">
                                    {{ item.name }}
                                </nuxt-link>
                            </template>
                        </div>
                        <nuxt-link to="/giris"
                            class="block text-sm font-semibold leading-6 text-sky-600 hover:text-sky-600 px-5 py-2 transition-all duration-300"
                            @click="mobileMenuOpen = false">
                            Giriş Yap
                        </nuxt-link>
                    </div>
                </div>
            </DialogPanel>
        </Dialog>

    </header>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
// Import components and icons as previously done
import {
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from '@headlessui/vue'
import {
    ArrowPathIcon,
    Bars3Icon,
    ChartPieIcon,
    CursorArrowRaysIcon,
    FingerPrintIcon,
    SquaresPlusIcon,
    ArrowRightIcon,
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
const navItems = ref([
    { name: 'ANASAYFA', href: '/' },
    {
        name: 'ÜRÜNLER',
        href: '#',
        subItems: [
            { name: 'YARIŞMALAR', description: 'Bir projeyi gerçekleştirmek mi istiyorsunuz?', href: '/yarismalar' },
            { name: 'GİRİŞİMCİLERE DESTEK', description: 'Aklında bir fikir mi var?', href: '/girisimcilere_destek' },
        ],
    },
    { name: 'HAKKIMIZDA', href: '/hakkimizda' }
]);

const mobileMenuOpen = ref(false)
const hasScrolled = ref(false)

const handleScroll = () => {
    hasScrolled.value = window.scrollY > 0
}

onMounted(() => {
    window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
    window.removeEventListener('scroll', handleScroll)
})

async function accept(close) {
    await fetch('/accept-terms', { method: 'POST' })
    close()
}
</script>