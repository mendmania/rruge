<script setup>
import { toRefs } from 'vue';
console.log("article-sm");

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true
  }
})

</script>

<template>
  <article class="m-card m-card-sm">
    <nuxt-link :to="slug">
      {{title}}
    </nuxt-link>

    <time class="text-xsm" datetime="2017-10-31T11:21:00+02:00">Tuesday, 31 October 2017</time>
  </article>
</template>
