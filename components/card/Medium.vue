<script setup>
console.log('article-md')
</script>

<template>
  <article class="m-card m-card-md">
    <nuxt-link :to="'/article-url'">    
    <figure>
      <img alt="card-img-medium"
           src="https://images.pexels.com/photos/13918680/pexels-photo-13918680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
      <figcaption></figcaption>
    </figure>
    <summary>
      <h2>mMarketing winners and losers of the week</h2>
    </summary>
  </nuxt-link>
  </article>
</template>
