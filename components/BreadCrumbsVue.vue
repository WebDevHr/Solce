<template>
    <nav aria-label="breadcrumb" class="border-t border-b py-5">
        <ol class="flex space-x-2 text-sm text-sky-600 mx-auto max-w-7xl px-6 lg:px-8">
            <li v-for="(breadcrumb, index) in breadcrumbs" :key="breadcrumb.path" class="flex items-center">
                <nuxt-link v-if="breadcrumb.clickable" :to="breadcrumb.path"
                    class="flex gap-x-1 justify-center items-center text-sky-600 hover:text-sky-400">
                    <component v-if="breadcrumb.icon" :is="breadcrumb.icon" class="h-6 w-6 mb-[2px]" aria-hidden="true" />
                    <div v-if="breadcrumb.name != 'Anasayfa'">{{ breadcrumb.name }}</div>
                </nuxt-link>
                <span v-else class="flex gap-x-1 justify-center items-center text-gray-200">
                    {{ breadcrumb.name }}
                </span>
                <span v-if="index < breadcrumbs.length - 1" class="mx-2">
                    <ChevronRightIcon class="h-6 w-6" />
                </span>
            </li>
        </ol>
    </nav>
</template>
  
<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'
import { HomeIcon, ChevronRightIcon } from '@heroicons/vue/24/outline'

const route = useRoute()

const breadcrumbs = computed(() => {
    const paths = route.path.split('/').filter(p => p)
    const breadcrumbArray = paths.map((segment, index) => {
        const path = '/' + paths.slice(0, index + 1).join('/')
        return {
            path,
            name: segment.charAt(0).toUpperCase() + segment.slice(1), // Capitalize the first letter
            clickable: index < paths.length - 1
        }
    })
    return [{ path: '/', name: 'Anasayfa', clickable: true, icon: HomeIcon }, ...breadcrumbArray]
})
</script>