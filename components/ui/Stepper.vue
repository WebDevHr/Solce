<template>
    <div class="w-full py-5">
        <div class="flex items-center justify-between">
            <!-- Steps and Connecting Lines -->
            <div v-for="(step, index) in steps" :key="index" class=" flex flex-grow flex-col">
                <!-- Connecting Line -->
                <div class="relative w-full flex justify-center">
                    <div v-if="index !== 0" class="absolute top-1/2 -left-1/2 w-full h-0.5 bg-gray-200 -z-20"></div>
                    <!-- Progress Line -->
                    <div v-if="index !== 0 && index <= currentStep"
                        class="absolute top-1/2 -left-1/2 w-full h-0.5 bg-sky-600 -z-10">
                    </div>
                    <!-- Step Circle -->
                    <div @click="setCurrentStep(index)" :class="stepClass(index)"
                        class="cursor-pointer z-30 flex items-center justify-center w-10 h-10 rounded-full">
                        <span v-if="index > currentStep" class="text-gray-500 text-sm">{{ index + 1 }}</span>
                        <CheckIcon v-else class="w-5 h-5 text-white" />
                    </div>
                </div>
                <!-- Step Label -->
                <div class="mt-1 text-sm text-gray-700 text-center">
                    {{ step.label }}
                </div>
            </div>
        </div>
        <!-- Active Step Content -->
        <div class="mt-6 p-4 rounded-lg text-sm text-gray-700 flex justify-center items-center">
            <div class="w-[80%] border p-10 rounded-lg">
                <h2 class="text-sky-600 font-semibold text-2xl my-5">{{ steps[currentStep].label }}</h2>
                <p class="text-base my-5">{{ steps[currentStep].description }}</p>
                <div class="felx" v-if="steps[currentStep].route != ''">
                    <nuxt-link to="/giris"
                        class="text-sm font-semibold leading-6 text-sky-600 px-5 py-2 border-2 border-sky-600 rounded-xl hover:shadow-md transition-all duration-300 hover:bg-sky-600 hover:text-white">
                        Giriş Yap
                    </nuxt-link>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { ref } from 'vue'
import { CheckIcon } from '@heroicons/vue/24/solid'

const steps = ref([
    { label: 'Giriş yap', description: 'İlk başta sitemize giriş yapmanız gerekir. sitemize giriş yapmak için aşağadaki linke tıklayın.', route: '/giris' },
    { label: 'Yarış bul', description: 'Farklı kategorilerden sizin yetkinlik alanınıza göre bir yarışma bulun ve kayıt yapın.', route: '' },
    { label: 'Çözümleri keşfet', description: 'Yarışmayı kurallar içinde tamamlayın ve rakiplerinize fark yaratın.', route: '' },
    { label: 'Ödülünü al', description: 'Yarışmayı kazanın ve Ödül sahibi olun', route: '' }
])
const currentStep = ref(0)

const stepClass = (index) => {
    return [
        'flex items-center justify-center rounded-full transition-colors duration-300',
        {
            'bg-sky-600 text-white': index <= currentStep.value,
            'bg-white border-2 border-gray-300 text-gray-500': index > currentStep.value
        }
    ]
}

const setCurrentStep = (index) => {
    currentStep.value = index
}
</script>
  
<style scoped>
/* Style adjustments as needed */
</style>
  