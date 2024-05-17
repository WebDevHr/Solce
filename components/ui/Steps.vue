<template>
    <div class="w-full py-5">
        <div class="flex items-center justify-between">
            <div v-for="(step, index) in steps" :key="index" class="flex-1">
                <!-- Step Icon and Line -->
                <div class="flex items-center">
                    <!-- Circle and Icon -->
                    <div :class="stepClass(step, index)">
                        <span v-if="!step.completed" class="text-white text-sm font-medium">
                            {{ index + 1 }}
                        </span>
                        <CheckIcon v-else class="w-5 h-5 text-white" />
                    </div>
                    <!-- Connecting Line -->
                    <div v-if="index < steps.length - 1" class="flex-auto border-t-2 transition duration-500"
                        :class="{ 'border-gray-200': !steps[index + 1].active, 'border-blue-500': steps[index + 1].active }">
                    </div>
                </div>
                <!-- Step Label -->
                <div class="text-center mt-2 text-sm font-medium">
                    {{ step.label }}
                </div>
            </div>
        </div>
    </div>
</template>
  
<script setup>
import { CheckIcon } from '@heroicons/vue/24/solid'

defineProps({
    steps: Array
})

const stepClass = (step, index) => {
    return [
        'w-10 h-10 flex items-center justify-center rounded-full transition duration-500',
        {
            'bg-sky-600': step.active,
            'bg-sky-400': !step.active
        }
    ]
}
</script>
  
<style scoped>
/* Additional styling if needed */
</style>
  