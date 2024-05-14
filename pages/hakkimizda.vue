<template>
    <div>
        <div class="relative md:h-[800px] sm:h-[500px] h-[400px] background-gradient-black-to-bottom">
            <NuxtParticles id="tsparticles11" :options="options"></NuxtParticles>
            <h1 class="text-white">
                hakkimizda
            </h1>
        </div>
    </div>
</template>
  
<script setup>
import options from '~/assets/particles/particles-color.json'

// import { tsParticles } from 'tsparticles-engine'
import { loadFull } from 'tsparticles'
if (process.client) {
    await loadFull(tsParticles)
}
</script>