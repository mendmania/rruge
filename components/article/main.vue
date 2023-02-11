<script setup>

const props = defineProps({
  date:{
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  thumbnail: {
    type: String,
    required: true,
  }
})
</script>

<template>
    <article>
        <h1>{{title}}</h1>
        <time class="text-xsm" datetime="2017-10-31T11:21:00+02:00">{{new Date(date).toLocaleString()}}</time>
        <figure>
        <img alt="card-img-large"
             :src="thumbnail">
        <figcaption></figcaption>
      </figure>

      
      <div v-html="content" ></div>
    </article>
</template>

<style>
</style>