<script setup>
const desc = ref('My amazing about page.')
useHead({
  meta: [
    { name: 'description', content: desc }
  ],
})
</script>

<template>
    <div class="m-about-page">
        About
    </div>
</template>

<style>
</style>