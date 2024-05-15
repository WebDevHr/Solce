<template>
    <div>
        <div class="relative">
            <NuxtParticles id="tsparticles11" :options="options"></NuxtParticles>
            <div class="bg-[url('/pictures/girisimciler-header-image.webp')] bg-cover bg-center">
                <div class="bg-black/50">
                    <PagesHeader />
                    <BreadCrumbsVue />
                </div>
            </div>
            <div>
                <EntrepreneurHero />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import options from '~/assets/particles/particles-color.json'

import { loadFull } from 'tsparticles'
if (process.client) {
    await loadFull(tsParticles)
}
</script>