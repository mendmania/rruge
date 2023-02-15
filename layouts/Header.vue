<script setup>
console.log("header");
</script>

<template>
  <header class="m-header skew">
    <div class="m-header-logo-wrapper"> 
      <nuxt-link to="/">
        <img class="m-header__logo" src="../assets/images/logo/rruge250x250.png" /> Rruge
      </nuxt-link>
    </div> 
    <ul class="m-header__navigation row">
      <li class="m-header__navigation--item text-xsm">
        <nuxt-link to="/about">Rreth Nesh</nuxt-link>
      </li>
      |
      <li class="m-header__navigation--item text-xsm">
        <nuxt-link to="/contact">Kontakti</nuxt-link>
      </li>
    </ul>

    <search-input />
  </header>
</template>

<style>
</style>