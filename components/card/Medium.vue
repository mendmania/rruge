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
  },
  img: {
    type: String,
    required: false,
    default: 'https://describedlife.com/wp-content/uploads/2019/07/p1-optimized.jpg',
  },
});
</script>

<template>
  <article class="mc-second-wrapper">
    <NuxtLink :to="slug">
      <div class="mc-card-second">
        <img :src="img ? img : 'https://describedlife.com/wp-content/uploads/2019/07/p1-optimized.jpg'"
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
