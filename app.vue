<script setup>

</script>

<template>
    <NuxtLayout name="header" />
    <NuxtLayout name="category-header" />
    <NuxtLayout name="body" >
      <NuxtPage/>
    </NuxtLayout>
    <NuxtLayout name="footer" />
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>