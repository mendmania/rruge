<script setup>
console.log("header");
</script>

<template>
  <header class="m-header skew">
    <div>
      <nuxt-link to="/">
        <img
          class="m-header__logo"
          src="../assets/images/logo/rruge250x250.png"
          alt="rruge_logo"
        />
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