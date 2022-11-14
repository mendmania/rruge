<script setup>
console.log("header");
</script>

<template>
  <header class="m-header m-category-header">
    <ul class="m-header__navigation">
      <nuxt-link to="/kategoria/tregime">
        <li class="m-header__navigation--item text-sm">
          <span />
          <h3>
            Tregime
          </h3>
        </li>
      </nuxt-link>
      <nuxt-link to="/kategoria/artikuj">
        <li class="m-header__navigation--item text-sm">
          <span />
          <h3>
            Artikuj
          </h3>
        </li>
      </nuxt-link>
      <nuxt-link to="/kategoria/motivim">
        <li class="m-header__navigation--item text-sm">
          <span />
          <h3>

            Motivim
          </h3>
        </li>
      </nuxt-link>
    </ul>
  </header>
</template>

<style>
</style>