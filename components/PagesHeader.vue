<template>
    <div class="pt-32 mx-auto max-w-7xl px-6 lg:px-8">
        <div class="text-white lg:py-10 py-5 lg:text-4xl text-2xl  tracking-wide font-oswald font-[700]">HAKKIMIZDA</div>
    </div>
</template>

<script setup>
import { useRoute } from 'vue-router'
import { computed } from 'vue'

const route = useRoute()
const headerAddress = computed(() => {
    const paths = route.path.split('/').filter(p => p)
    const headerAddress = paths[paths.length - 1]
    console.log(paths)
    return headerAddress.charAt(0).toUpperCase() + headerAddress.slice(1)
})
</script>