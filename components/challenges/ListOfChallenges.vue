<template>
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <h1>Yarışmaları Keşfet</h1>
        <div class="my-5 text-xl font-semibold">
            Bir yarışma bul, çöz, fark yarat
        </div>
        <div class="flex justify-between">
            <h2>
                İlgi alanına göre sırala
            </h2>
            <button @click="toggleFilter"
                class="text-sm font-semibold leading-6 text-sky-600 px-5 py-1 border-2 border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white flex justify-center items-center gap-x-2">
                Filtrele
                <component :is="filterIcon" class="h-5 w-5" aria-hidden="true" />
            </button>
        </div>
        <div v-if="selectedCategory" class="flex items-center gap-3 my-10">
            <CheckIcon class="h-5 w-5 text-green-600" aria-hidden="true" />
            <span class="text-sm font-semibold leading-6 text-green-600">{{ selectedCategory.name }}</span>
            <button @click="clearSelection"
                class="text-sm font-semibold leading-6 text-sky-600 px-3 py-1 hover:text-blue-400 transition-all duration-300">
                Sil
            </button>
        </div>
        <div v-if="(!selectedCategory && !filterActive) || selectedCategory" class="flex flex-wrap gap-x-3 gap-y-3 my-10">
            <button v-for="(category, index) in categories" :key="index" @click="selectCategory(category)"
                :class="{ 'bg-sky-600 text-white': selectedCategory && selectedCategory.name === category.name }"
                class="text-sm font-semibold leading-6 text-sky-600 px-5 py-1 border-2 border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white flex justify-center items-center gap-x-2">
                {{ category.name }}
            </button>
        </div>
        <div v-if="filterActive">
            <UiComboBox :items="categories" @update:selectedItem="handleSelectedItem" />
        </div>
        <div v-if="selectedCategory" class="flex flex-wrap gap-x-6 gap-y-6 my-20">
            <template v-if="filteredCards.length > 0">
                <UiCard v-for="(card, index) in filteredCards" :key="index" :card="card" />
            </template>
            <template v-else>
                <div class="w-full">
                    <div class="w-full flex flex-col items-center justify-center text-gray-700 text-lg">
                        <ExclamationCircleIcon class="h-10 w-10" aria-hidden="true" />
                        <p>Bu kategori için sonuç bulunamadı.</p>
                    </div>
                </div>
            </template>
        </div>
    </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import {
    FunnelIcon,
    XMarkIcon,
    CheckIcon,
    ExclamationCircleIcon
} from '@heroicons/vue/24/outline'

const filterActive = ref(false)
const selectedCategory = ref({ id: 1, name: 'Hepsi' })

const filterIcon = computed(() => {
    return !filterActive.value ? FunnelIcon : XMarkIcon
})

const toggleFilter = () => {
    filterActive.value = !filterActive.value
}

const selectCategory = (category) => {
    selectedCategory.value = category
    filterActive.value = false
}

const clearSelection = () => {
    selectedCategory.value = null
}

const handleSelectedItem = (item) => {
    selectCategory(item)
}

// Filtered cards based on selected category
const filteredCards = computed(() => {
    if (selectedCategory.value.name === 'Hepsi') {
        return cards;
    }
    return cards.filter(card => card.category === selectedCategory.value.name);
});

const categories = [
    { id: 1, name: 'Hepsi' },
    { id: 2, name: 'Teknoloji' },
    { id: 3, name: 'Sanat ve Tasarıım' },
    { id: 4, name: 'Enerji, Çevre ve Kaynak ihtiyacı' },
    { id: 5, name: 'Öğretim' },
    { id: 6, name: 'Mühendislik' },
    { id: 7, name: 'Veri Bilimi' },
    { id: 8, name: 'Sağlık' },
    { id: 9, name: 'Devlet' },
    { id: 10, name: 'COVID-19' },
    { id: 11, name: 'Finans' },
    { id: 12, name: 'Uzay' },
    { id: 13, name: 'Altyapı' },
    { id: 14, name: 'SOLCE tarafından desteklenen' },
]


// Cards data
const cards = [
    {
        id: 1,
        title: 'Dönüşüm oranını artırma',
        description: 'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla.',
        date: '16 Mart 2020',
        category: 'Teknoloji',
        author: 'Michael Foster',
        authorRole: 'Kurucu Ortak / CTO',
        authorImage: 'https://via.placeholder.com/50',
        image: '/pictures/challenges-card1.webp',
        prize: '1,4M₺ Ödül',
        status: 'Katıl'
    },
    {
        id: 2,
        title: 'Arama motoru optimizasyonunu',
        description: 'Optio cum necessitatibus dolor voluptatum provident commodi et. Qui aperiam fugiat nemo cumque.',
        date: '10 Mart 2020',
        category: 'Finans',
        author: 'Lindsay Walton',
        authorRole: 'Front-end Geliştirici',
        authorImage: 'https://via.placeholder.com/50',
        image: '/pictures/challenges-card2.webp',
        prize: '30B₺ Ödül',
        status: 'Değerlendirme Kapalı'
    },
    {
        id: 3,
        title: 'Müşteri deneyimini geliştirme',
        description: 'Cupiditate maiores ullam eveniet adipisci in dolores nulla minus. Voluptas iusto libero adipisci rem et corporis. Nostrum sint animi sunt aliqua. Nulla eu labore irure.',
        date: '12 Şubat 2020',
        category: 'Finans',
        author: 'Tom Cook',
        authorRole: 'Ürün Direktörü',
        authorImage: 'https://via.placeholder.com/50',
        image: '/pictures/challenges-card3.webp',
        prize: '2M₺ Ödül',
        status: 'Katıl'
    },
    // Add more cards here
];



</script>
