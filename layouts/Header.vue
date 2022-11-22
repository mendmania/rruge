<script setup>
console.log("header");
</script>

<template>
  <header class="m-header skew">
    <h1>Rruge</h1>
    <ul class="m-header__navigation">
      <li class="m-header__navigation--item text-xsm">
        <nuxt-link to="/about">About</nuxt-link>
      </li>
      <li class="m-header__navigation--item text-xsm">
        <nuxt-link to="/contact">Contact us</nuxt-link>
      </li>
    </ul>

    <search-input />

  </header>
</template>

<style>
</style>