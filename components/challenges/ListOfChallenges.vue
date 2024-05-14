<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1>Yarışmaları Keşfet</h1>
        <h1 class="my-5 text-xl">
            Bir yarışma bul, çöz, fark yarat
        </h1>
        <div class="flex justify-between">
            <h2>
                İlgi alanına göre sırala
            </h2>
            <button
                class="text-sm font-semibold leading-6 text-sky-600 px-5 py-1 border-2 border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white flex justify-center items-center gap-x-2">
                Filtrele
                <FunnelIcon class="h-4 w-4" aria-hidden="true" />
            </button>
        </div>
    </div>
</template>


<script setup>
import {
    FunnelIcon,
} from '@heroicons/vue/24/outline'
</script>