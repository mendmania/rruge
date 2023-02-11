<script setup>
console.log("article-lg");

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
  excerpt: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <article class="mc-main-wrapper">
    <NuxtLink :to="slug">
      <div class="mc-card-main">
        <img
          src="https://images.pexels.com/photos/127513/pexels-photo-127513.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
          alt=""
          class="mc-card-main__image"
        />
        <div class="mc-card-main__text-wrapper">
          <h2 class="mc-card-main__title">{{title}}</h2>
          <time class="mc-card-main__post-date">{{date}}</time>
          <summary class="mc-card-main__details-wrapper">
            <div class="mc-card-main__excerpt" v-html="excerpt">
            </div>
            <!-- <p class="mc-card-main__excerpt">
              {{excerpt}}
            </p> -->
            <NuxtLink :to="slug" class="mc-card-main__read-more"
              >Lexo me shume</NuxtLink
            >
          </summary>
        </div>
      </div>
    </NuxtLink>
  </article>
</template>

