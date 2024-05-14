<template>
    <div class="pt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <h1 class="text-white lg:py-10 py-5 lg:text-4xl text-2xl  tracking-wide font-[700]">{{ headerAddress }}
        </h1>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const headerAddress = computed(() => {
    const paths = route.path.split('/').filter(p => p)
    const headerAddress = paths[paths.length - 1]
    return headerAddress.toUpperCase().replace("_", " ")
})
</script>