<script setup>
const { data: homePage, error } = await useAsyncData("cafes", async () => {
  const smallPosts = await $fetch(
    `/posts?_fields[]=author&_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=link&_fields[]=date`,
    {
      method: "GET",
      baseURL: "https://describedlife.com/wp-json/wp/v2",
    }
  );

  const largePosts = await $fetch(
    `/posts?_fields[]=author&_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=link&_fields[]=excerpt&_fields[]=date`,
    {
      method: "GET",
      baseURL: "https://describedlife.com/wp-json/wp/v2",
    }
  );

  // const largePostsMedia = await $fetch(
  //   `/media/473`,
  //   {
  //     method: "GET",
  //     baseURL: "https://describedlife.com/wp-json/wp/v2",
  //   }
  // );

  const mediumPosts = await $fetch(
    `/posts?_fields[]=author&_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=link&_fields[]=date`,
    {
      method: "GET",
      baseURL: "https://describedlife.com/wp-json/wp/v2",
    }
  );

  return { smallPosts, largePosts, mediumPosts };
});
</script>

<template>
  <div class="m-page m-page-home">
    <HeroSection />
    <!-- <pre>
      {{ homePage.largePosts }}
    </pre> -->

    <WrapperSection>
      <SectionSmall>
        <CardSmall
          v-for="(smallPost, index) in homePage.smallPosts"
          :key="index"
          :title="smallPost.title.rendered"
          :slug="smallPost.slug"
          :date="smallPost.date"
        />
      </SectionSmall>

      <SectionLarge>
        <CardLarge
          v-for="(largePost, index) in homePage.largePosts"
          :key="index"
          :title="largePost.title.rendered"
          :slug="largePost.slug"
          :excerpt="largePost.excerpt.rendered"
          :date="largePost.date"
        />
      </SectionLarge>

      <SectionMedium>
        <CardMedium
          v-for="(mediumPost, index) in homePage.mediumPosts"
          :key="index"
          :title="mediumPost.title.rendered"
          :slug="mediumPost.slug"
          :date="mediumPost.date"
        />
      </SectionMedium>
    </WrapperSection>
  </div>
</template>

<style>
</style>