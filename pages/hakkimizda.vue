<template>
    <div>
        <div class="relative background-gradient-black-to-bottom">
            <NuxtParticles id="tsparticles11" :options="options"></NuxtParticles>
            <div class="bg-[url('/pictures/aboutus-header-image.png')] bg-cover bg-center">
                <div class="bg-black/50">
                    <PagesHeader />
                    <BreadCrumbsVue />
                </div>
            </div>
        </div>
        <AboutusAboutUsHeroVue />
        <AboutusTeamVue />
    </div>
</template>
  
<script setup>
import options from '~/assets/particles/particles-color.json'

import { loadFull } from 'tsparticles'
if (process.client) {
    await loadFull(tsParticles)
}
</script>