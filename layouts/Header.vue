<script setup>
console.log('header')
</script>

<template>
  <header class="m-header">
    <h1>Rruge</h1>
    <ul class="m-header__navigation">
      <li class="m-header__navigation--item text-sm"><a href="/">Home</a></li>
      <li class="m-header__navigation--item text-sm"><a href="/about">About</a></li>
      <li class="m-header__navigation--item text-sm"><a href="/contact">Contact us</a></li>
    </ul>
    <form target="/search" class="m-header__action">
      <input class="m-header__action--input" name="q" type="search" />
      <input class="m-header__action--btn" type="submit" />
    </form>
  </header>
</template>

<style>

</style>