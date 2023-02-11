<script setup>
console.log("article-md");

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  date:{
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  }
});
</script>

<template>
  <article class="mc-second-wrapper">
    <NuxtLink :to="slug">
      <div class="mc-card-second">
        <img src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
             alt=""
             class="mc-card-second__image">
        <summary class="mc-card-second__text-wrapper">
          <h2 class="mc-card-second__title">{{title}}</h2>
          <time class="mc-card-second__post-date">{{date}}</time>
        </summary>
      </div>
    </NuxtLink>
  </article>
</template>
