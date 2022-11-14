<script setup>
console.log("article-md");
</script>

<template>
  <article class="mc-second-wrapper">
    <NuxtLink :to="'/article-url'">
      <div class="mc-card-second">
        <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
             alt=""
             class="mc-card-second__image">
        <summary class="mc-card-second__text-wrapper">
          <h2 class="mc-card-second__title">Amazing First Title</h2>
          <time class="mc-card-second__post-date">Jan 29, 2018</time>
        </summary>
      </div>
    </NuxtLink>
  </article>
</template>
