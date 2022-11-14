<script setup>
console.log("article-lg")
</script>

<template>
  <article class="mc-main-wrapper">
    <NuxtLink :to="'/article-url'">
    <div class="mc-card-main">
      <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
           alt=""
           class="mc-card-main__image">
      <div class="mc-card-main__text-wrapper">
        <h2 class="mc-card-main__title">Amazing First Title</h2>
        <time class="mc-card-main__post-date">Jan 29, 2018</time>
        <summary class="mc-card-main__details-wrapper">
          <p class="mc-card-main__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur</p>
          <NuxtLink :to="'/article-url'" class="mc-card-main__read-more">Lexo me shume</NuxtLink>
        </summary>
      </div>
    </div>
  </NuxtLink>
  </article>
</template>

