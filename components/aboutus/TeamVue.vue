<template>
    <div class=" mx-auto max-w-7xl px-6 lg:px-8 py-20">
        <h1>SOLCE Takımı</h1>
        <div class="flex flex-wrap gap-x-3 gap-y-10 justify-evenly">
            <AboutusMemberCard v-for="(member, index) in  managementMembers " :key="index" :member="member" />
        </div>
    </div>
</template>

<script setup>

const managementMembers = [
    {
        name: 'Gökberk SAVAŞ',
        title: 'Founder',
        picture: '/pictures/gokberk-savas.jpg',
        links: {
            gmail: 'gokberk0652@gmail.com',
            linkedIn: 'https://www.linkedin.com/company/solce/',
            instagram: ''
        }
    }
]
</script>