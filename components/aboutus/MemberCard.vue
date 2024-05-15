<template>
    <div class="managerCard flex flex-col justify-center items-center w-[250px] p-3 rounded-3xl 
                                hover:bg-white/30 transition-all duration-300 relative">
        <div class="overflow-hidden rounded-full h-44 w-44 bg-black flex justify-center items-center">
            <img v-if="member.picture != ''" class="h-44 w-44 object-cover" :src="member.picture" :alt="member.name">
            <UserIcon v-else class="text-white/50 w-1/2 h-1/2" />
        </div>
        <div class="relative flex flex-col justify-center items-center">
            <h3 class="title mt-3 text-center transition-all duration-500 font-bold">{{ member.name }}</h3>
            <h4 class="title my-2 font-extralight text-gray-400 text-center transition-all duration-500 select-none">{{
                member.title
            }}</h4>
            <div class="links text-white flex flex-row gap-x-1 absolute top-0 opacity-0 transition-all duration-500">
                <a v-if="member.links.linkedIn" :href="member.links.linkedIn" class="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M18.72 4H5.37A1.31 1.31 0 0 0 4 5.25v13.38A1.41 1.41 0 0 0 5.37 20h13.35A1.34 1.34 0 0 0 20 18.63V5.25A1.23 1.23 0 0 0 18.72 4M9 17.34H6.67v-7.13H9ZM7.89 9.13A1.18 1.18 0 0 1 6.67 7.9a1.18 1.18 0 0 1 1.24-1.23A1.18 1.18 0 0 1 9.13 7.9a1.18 1.18 0 0 1-1.24 1.23m9.45 8.21H15v-3.9c0-.93-.33-1.57-1.16-1.57a1.25 1.25 0 0 0-1.17.84a1.43 1.43 0 0 0-.08.57v4.06h-2.3v-7.13h2.3v1a2.32 2.32 0 0 1 2.1-1.21c1.51 0 2.65 1 2.65 3.13Z" />
                    </svg>
                </a>
                <a v-if="member.links.instagram" :href="member.links.instagram" class="p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M12 8.75a3.25 3.25 0 1 0 0 6.5a3.25 3.25 0 0 0 0-6.5" />
                        <path fill="currentColor" fill-rule="evenodd"
                            d="M6.77 3.082a47.472 47.472 0 0 1 10.46 0c1.899.212 3.43 1.707 3.653 3.613a45.67 45.67 0 0 1 0 10.61c-.223 1.906-1.754 3.401-3.652 3.614a47.468 47.468 0 0 1-10.461 0c-1.899-.213-3.43-1.708-3.653-3.613a45.672 45.672 0 0 1 0-10.611C3.34 4.789 4.871 3.294 6.77 3.082M17 6a1 1 0 1 0 0 2a1 1 0 0 0 0-2m-9.75 6a4.75 4.75 0 1 1 9.5 0a4.75 4.75 0 0 1-9.5 0"
                            clip-rule="evenodd" />
                    </svg>
                </a>
                <a v-if="member.links.gmail" :href="`mailto:${member.links.gmail}`" class="p-1 opacit">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M20 18h-2V9.25L12 13L6 9.25V18H4V6h1.2l6.8 4.25L18.8 6H20m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2" />
                    </svg>
                </a>
            </div>
        </div>

    </div>
</template>

<script setup>
import {
    UserIcon
} from '@heroicons/vue/24/outline'

const props = defineProps({
    member: {
        type: Object,
        required: true
    }
})
</script>

<style scoped>
.managerCard:hover .links {
    @apply -translate-y-[55px] opacity-100;
}

.managerCard:hover .title {
    @apply text-black;
}
</style>