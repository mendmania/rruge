<script setup>
console.log("article-lg");
</script>

<template>
  <article class="m-card m-card-lg">
    <nuxt-link :to="'/article-url'">
      <figure>
        <img alt="card-img-large"
             src="https://images.pexels.com/photos/13918680/pexels-photo-13918680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1">
        <figcaption></figcaption>
      </figure>
      <summary>
        <h2>lMarketing winners and losers of the week</h2>
        <time class="text-xsm"
              datetime="2017-10-31T11">Tuesday, 31 October 2017</time>
      </summary>
    </nuxt-link>
  </article>
</template>
