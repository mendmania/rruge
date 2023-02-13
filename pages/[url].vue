<script setup>
const { data: singlePost, error } = await useAsyncData("cafes", async () => {
  const route = useRoute();
  console.log("cucamalevev", route.params.url);
  console.log("cucamalevev", route.fullPath);
  const slug = route.params.url;

  const [post] = await $fetch(`/posts?slug=${slug}`, {
    method: "GET",
    baseURL: "https://describedlife.com/wp-json/wp/v2",
  });

  const thumbnail = await $fetch(
    `${post["_links"]["wp:featuredmedia"][0].href}`,
    {
      method: "GET",
    }
  );

  return { post, thumbnail };
});

// const { data: thumbnail } = await useAsyncData("cafes", () => {

//   const slug = route.params.url

//   return $fetch(`${singlePost[0]['_links']['wp:featuredmedia'][0].href}`, {
//     method: "GET",
//   });
// });
</script>

<template>
  <div class="m-page m-page-article">
    <SectionLarge>
      <!-- <pre>
      {{ singlePost}}
    </pre> -->

      <ArticleMain
        :title="singlePost.post.title.rendered"
        :content="singlePost.post.content.rendered"
        :date="singlePost.post.date"
        :thumbnail="
          singlePost.thumbnail.media_details.sizes.medium.source_url
        "
      />
    </SectionLarge>

    <SectionSmall>
      <CardMedium />
    </SectionSmall>
  </div>
</template>

<style>
</style>