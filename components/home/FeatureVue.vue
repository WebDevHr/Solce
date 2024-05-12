<template>
    <div class="overflow-hidden bg-white py-24 sm:py-32">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">
            <div
                class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                <div class="lg:pr-8 lg:pt-4">
                    <div class="lg:max-w-lg">
                        <h2 class="text-base font-semibold leading-7 text-indigo-600">Deploy faster</h2>
                        <p class="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">crowdsourcing
                            kullanımı, güvenilir ve sürekli yenilik için</p>
                        <p class="mt-6 text-lg leading-8 text-gray-600">Sorun çözücülerimizden oluşan crowd, 200'den
                            fazla farklı projeye çözümler ve fikirler ile katkıda bulunmuştur.</p>
                        <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                            <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                <dt class="inline font-semibold text-gray-900">
                                    <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-indigo-600"
                                        aria-hidden="true" />
                                    {{ feature.name }}
                                </dt>
                                {{ ' ' }}
                                <dd class="inline">{{ feature.description }}</dd>
                            </div>
                        </dl>
                    </div>
                </div>
                <img src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                    alt="Product screenshot"
                    class="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                    width="2432" height="1442" />
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { CircleStackIcon, LockClosedIcon, ServerIcon, UserGroupIcon } from '@heroicons/vue/20/solid'

const features = [
    {
        name: 'Sonuç varsa öde',
        description:
            'Sorununuz başarıyla çözüldüğünde ödeme yaparsınız! Belirli sonuçlarınızı elde etmek için risksiz bir yol.',
        icon: CircleStackIcon,
    },
    {
        name: 'Takımı oluştur',
        description: 'Biz, katılım için engel olmayan açık bir platformuz. Crowd Oluşturma metodolojimiz bizi farklı kılar.',
        icon: UserGroupIcon,
    },
    {
        name: 'Toplama noktası',
        description: 'Solce, ödül kaydı, yarışma başvuruları, çözüm ekibi oluşturma ve resmi değerlendirme için bir merkez olarak hizmet vermektedir.',
        icon: ServerIcon,
    },
]
</script>