<template>
    <header class="absolute inset-x-0 top-0 z-50">
        <div :class="['fixed w-full transition-all duration-300', hasScrolled ? 'bg-white shadow-md' : 'bg-transparent']">
            <nav class="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
                <div class="flex lg:flex-1">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">SOLCE</span>
                        <img class="h-12 w-auto" src="~/assets/pictures/logo.jpg" alt="" />
                    </a>
                </div>
                <div class="flex lg:hidden">
                    <button type="button"
                        class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-900"
                        @click="mobileMenuOpen = true">
                        <span class="sr-only">Open main menu</span>
                        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <PopoverGroup class="hidden lg:flex lg:gap-x-5">
                    <template v-for="item in navItems" :key="item.name">
                        <Popover v-if="item.subItems" class="relative">
                            <template v-slot="{ open }">
                                <PopoverButton
                                    class="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 pr-3 pl-5 py-1 rounded-xl border-2 border-transparent hover:border-indigo-600 transition-all duration-300">
                                    {{ item.name }}
                                    <ChevronDownIcon
                                        :class="['h-5 w-5 flex-none transition-transform duration-300', open ? 'rotate-180' : '']"
                                        aria-hidden="true" />
                                </PopoverButton>
                                <PopoverPanel
                                    class="absolute z-10 mt-5 bg-white shadow-lg rounded-xl w-52 overflow-hidden focus:border-none">
                                    <template v-for="subItem in item.subItems" :key="subItem.name">
                                        <a :href="subItem.href" class="block px-4 py-2 text-sm hover:bg-gray-50">
                                            {{ subItem.name }}
                                        </a>
                                    </template>
                                </PopoverPanel>
                            </template>
                        </Popover>
                        <a v-else :href="item.href"
                            class="text-sm font-semibold leading-6 text-gray-900 hover:text-indigo-600 px-5 py-1 border-2 rounded-xl border-transparent hover:border-indigo-600 transition-all duration-300">
                            {{ item.name }}
                        </a>
                    </template>
                </PopoverGroup>
                <div class="hidden lg:flex lg:flex-1 lg:justify-end">
                    <a href="#"
                        class="text-sm font-semibold leading-6 text-indigo-600 px-5 py-1 border-2 border-indigo-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-indigo-600 hover:text-white">
                        Log in <span aria-hidden="true">&rarr;</span>
                    </a>
                </div>
            </nav>
        </div>
        <div class="h-20"></div>

        <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
            <div class="fixed inset-0 z-10" />
            <DialogPanel
                class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                <div class="flex items-center justify-between">
                    <a href="#" class="-m-1.5 p-1.5">
                        <span class="sr-only">Your Company</span>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                            alt="" />
                    </a>
                    <button type="button" class="-m-2.5 rounded-md p-2.5 text-gray-700" @click="mobileMenuOpen = false">
                        <span class="sr-only">Close menu</span>
                        <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                    </button>
                </div>
                <div class="mt-6 flow-root">
                    <div class="-my-6 divide-y divide-gray-500/10">
                        <div class="space-y-2 py-6">
                            <Disclosure as="div" class="-mx-3" v-slot="{ open }">
                                <DisclosureButton
                                    class="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                    Product
                                    <ChevronDownIcon :class="[open ? 'rotate-180' : '', 'h-5 w-5 flex-none']"
                                        aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel class="mt-2 space-y-2">
                                    <DisclosureButton v-for="item in [...products, ...callsToAction]" :key="item.name"
                                        as="a" :href="item.href"
                                        class="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                                        {{ item.name }}</DisclosureButton>
                                </DisclosurePanel>
                            </Disclosure>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Features</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Marketplace</a>
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Company</a>
                        </div>
                        <div class="py-6">
                            <a href="#"
                                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">Log
                                in</a>
                        </div>
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
    XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, PhoneIcon, PlayCircleIcon } from '@heroicons/vue/20/solid'
const navItems = ref([
    { name: 'Anasayfa', href: '#' },
    {
        name: 'Ürünler',
        href: '#',
        subItems: [
            { name: 'Analytics', description: 'Get a better understanding of your traffic', href: '#' },
            { name: 'Engagement', description: 'Speak directly to your customers', href: '#' },
            { name: 'Security', description: 'Your customers’ data will be safe and secure', href: '#' },
            { name: 'Integrations', description: 'Connect with third-party tools', href: '#' },
            { name: 'Automations', description: 'Build strategic funnels that will convert', href: '#' }
        ]
    },
    { name: 'Hakkımızda', href: '#' }
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
</script>