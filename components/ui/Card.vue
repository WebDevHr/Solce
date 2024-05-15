<template>
    <div class="max-w-sm rounded-lg overflow-hidden shadow-lg bg-white">
        <img class="w-full h-48 object-cover" :src="card.image" alt="Card image">
        <div class="px-6 py-4">
            <div class="font-bold text-lg mb-2 h-[60px]">{{ card.title }}</div>
            <p class="text-gray-700 text-base h-[120px]">{{ card.description }}</p>
        </div>
        <div class="px-6 pt-4 pb-2 flex justify-between items-center">
            <span class="text-gray-500 text-sm">{{ card.date }}</span>
            <span class="text-sm font-semibold text-purple-600">{{ card.prize }}</span>
        </div>
        <div class="px-6 py-4">
            <div class="text-sm flex items-center">
                <img class="w-10 h-10 rounded-full mr-4" :src="card.authorImage" alt="Author image">
                <div>
                    <p class="text-gray-900 font-semibold">{{ card.author }}</p>
                    <p class="text-gray-600">{{ card.authorRole }}</p>
                </div>
            </div>
        </div>
        <div class="px-6 py-4 flex justify-between items-center">
            <span class="text-gray-600 text-sm">{{ card.category }}</span>
            <span class="text-gray-600 text-sm flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clip-rule="evenodd" />
                </svg>
                {{ card.status }}
            </span>
        </div>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    card: {
        type: Object,
        required: true
    }
});
</script>

<style scoped>
/* Add any scoped styles here */
</style>
