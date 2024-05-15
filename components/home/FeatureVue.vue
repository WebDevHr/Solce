<template>
    <div class="overflow-hidden bg-gradient-to-b from-[#06021f] to-transparent">
        <div class="bg-gradient-to-t from-[#06021f] to-transparent py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div
                    class="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div class="lg:pr-8 lg:pt-4">
                        <div class="lg:max-w-lg">
                            <h1 class="text-base font-semibold leading-7 text-sky-500 my-5">Fikirleri gerçekleştirelim</h1>
                            <h1 class="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                                Kitle Kaynak kullanımı, güvenilir ve sürekli yenilik için
                            </h1>
                            <p class="mt-6 text-lg leading-8 text-gray-300">
                                Çözümcülerimizden oluşan kitle, farklı sektörlerden projelere çözümler ve fikirler ile
                                katkıda bulunmayı hedefliyoruz.
                            </p>
                            <dl class="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-200 lg:max-w-none">
                                <div v-for="feature in features" :key="feature.name" class="relative pl-9">
                                    <dt class="inline font-bold text-lg text-white ">
                                        <component :is="feature.icon" class="absolute left-1 top-1 h-5 w-5 text-sky-500"
                                            aria-hidden="true" />
                                        {{ feature.name }}
                                    </dt>
                                    {{ ' ' }}
                                    <dd class="inline">{{ feature.description }}</dd>
                                </div>
                            </dl>
                        </div>
                    </div>
                    <div>
                        <img src="/assets/pictures/crowdsourcing.png" alt="Product screenshot"
                            class="w-[48rem] max-w-none rounded-xl sm:w-[57rem] md:-ml-4 lg:-ml-0" width="2432"
                            height="1442">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

  
<script setup>
import { CircleStackIcon, LockClosedIcon, ServerIcon, UserGroupIcon, ArrowsPointingInIcon, BanknotesIcon } from '@heroicons/vue/20/solid'

const features = [
    {
        name: 'Sonuç varsa öde',
        description:
            'Sorununuz başarıyla çözüldüğünde ödeme yaparsınız! Belirli sonuçlarınızı elde etmek için risksiz bir yol.',
        icon: BanknotesIcon,
    },
    {
        name: 'Takımı oluştur',
        description: 'Biz, katılım için engel olmayan açık bir platformuz. Kitle Oluşturma metodolojimiz bizi farklı kılar.',
        icon: UserGroupIcon,
    },
    {
        name: 'Toplama noktası',
        description: 'SOLCE, ödül kaydı, yarışma başvuruları, çözüm ekibi oluşturma ve resmi değerlendirme için bir merkez olarak hizmet vermektedir.',
        icon: ArrowsPointingInIcon,
    },
]
</script>