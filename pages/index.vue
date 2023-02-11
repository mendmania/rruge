<script setup>
const { data: smallCardPosts, error } = await useAsyncData("cafes", () =>
  $fetch(
    `/posts?_fields[]=author&_fields[]=id&_fields[]=slug&_fields[]=title&_fields[]=link`,
    {
      method: "GET",
      baseURL: "https://describedlife.com/wp-json/wp/v2",
    }
  )
);
</script>

<template>
  <div class="m-page m-page-home">
    <HeroSection />
    <!-- <pre>
      {{ smallCardPosts }}
    </pre> -->
    <WrapperSection>
      <SectionSmall>
        <CardSmall
          v-for="(smallPost, index) in smallCardPosts"
          :key="index"
          :title="smallPost.title.rendered"
          :slug="smallPost.slug"
        />
      </SectionSmall>

      <SectionLarge>
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
        <CardLarge />
      </SectionLarge>

      <SectionMedium> </SectionMedium>
    </WrapperSection>
  </div>
</template>

<style>
</style>