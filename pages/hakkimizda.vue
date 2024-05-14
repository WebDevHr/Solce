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
        <div>
            <h1>Biz Kimiz</h1>
            <p>HeroX, küresel topluluktaki herkesin bir meydan okuma yaratmasına veya yayımlanan bir meydan okumaya çözüm
                sunmasına olanak tanıyan bir kitlesel kaynak platformudur.</p>
            <p>Sorunları çözücülerle buluşturuyoruz ve küresel topluluğa başvurmanın, kendi ağınızın sağlayabileceğinden
                daha
                zengin ve geniş çözümler sunabileceğine inanıyoruz.</p>
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