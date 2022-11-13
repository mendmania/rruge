<script setup>
console.log("article-lg");
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
          <p class="mc-card-main__excerpt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est pariatur nemo tempore repellat? Ullam sed officia iure architecto deserunt distinctio, pariatur&hellip;</p>
          <NuxtLink :to="'/article-url'" class="mc-card-main__read-more">Lexo me shume</NuxtLink>
        </summary>
      </div>
    </div>
  </NuxtLink>
  </article>
</template>


<style lang="scss" scoped>

.lusi {


.mc-main-wrapper {
  /* margin: 0 auto; */
  cursor: pointer;
  margin-bottom: var(--size-1);
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  /* padding: 0.5rem; */
}

.mc-card-main {
  border: 0px solid aqua;
  /* margin: 0.5rem; */
  position: relative;
  /* height: 20vh; */
  overflow: hidden;
  border-radius: 0.5rem;
  flex: 1;
  min-width: 100%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
  -webkit-backface-visibility: hidden;
  -moz-backface-visibility: hidden;
  -webkit-transform: translate3d(0, 0, 0);
  -moz-transform: translate3d(0, 0, 0);
}

/* @media (min-width: 900px) {
  .mc-card-main {
    height: 20rem;
  }
} */

.mc-card-main::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0)
    linear-gradient(to bottom, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 0.7) 80%);
  z-index: 0;
}

.mc-card-main__card-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.mc-card-main__image {
  width: 100%;
  height: 100%;
  display: block;
  object-fit: cover;
  transition: transform 3s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  position: relative;
  z-index: -1;
}

.mc-card-main__text-wrapper {
  position: absolute;
  bottom: 0rem;
  padding: 1rem;
  color: white;
  transition: background-color 1.5s ease;
}

.mc-card-main__title {
  transition: color 1s ease;
  margin-bottom: 0.5rem;
}

.mc-card-main__post-date {
  font-size: 0.7rem;
  margin-bottom: 0.5rem;
  color: #ccc;
}

.mc-card-main__details-wrapper {
  max-height: 0;
  opacity: 0;
  transition: max-height 1.5s ease, opacity 1s ease;
}

@media (min-width: 480px) {
  .mc-card-main:hover .mc-card-main__details-wrapper {
    max-height: 20rem;
    opacity: 1;
  }
  .mc-card-main:hover .mc-card-main__text-wrapper {
    background-color: rgba(0, 0, 0, 0.6);
  }
  .mc-card-main:hover .mc-card-main__title {
    color: yellow;
  }
  .mc-card-main:hover .mc-card-main__image {
    transform: scale(1.2);
    z-index: -1;
  }
}

.mc-card-main__excerpt {
  font-weight: 300;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.mc-card-main__read-more {
  background: black;
  color: #bbb;
  display: block;
  padding: 0.4rem 0.6rem;
  border-radius: 0.3rem;
  margin-top: 1rem;
  border: 1px solid #444;
  font-size: 0.8rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  text-decoration: none;
  width: 7rem;
  margin-left: auto;
  position: relative;
  z-index: 5;
}

.mc-card-main__read-more i {
  position: relative;
  left: 0.2rem;
  color: #888;
  transition: left 0.5s ease, color 0.6s ease;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
}

.mc-card-main__read-more:hover i {
  left: 0.5rem;
  color: yellow;
}
}
</style>