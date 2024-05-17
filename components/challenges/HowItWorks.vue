<template>
    <div>
        <h1>Peki yarışmalara nasıl katılabiliriz?</h1>
        <!-- <UiSteps :steps="steps" /> -->
        <UiStepper :steps="enrollmentSteps" />
    </div>
</template>

<script setup>
const enrollmentSteps = [
    { label: 'Register', description: 'Create your account.' },
    { label: 'Verify', description: 'Verify your email address.' },
    { label: 'Profile', description: 'Complete your profile information.' },
    { label: 'Complete', description: 'Finish the setup and start using our platform.' }
]
</script>