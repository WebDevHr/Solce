<template>
    <div>
        <div class="relative background-gradient-black-to-bottom">
            <NuxtParticles id="tsparticles11" :options="options"></NuxtParticles>
            <div class="bg-[url('/pictures/yarismalar-header-image.webp')] bg-cover bg-center">
                <div class="bg-black/30">
                    <PagesHeader />
                    <BreadCrumbsVue />
                </div>
            </div>
            <ChallengesListOfChallenges />
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