<script setup>
import { ref } from "vue";

const searchInputActive = ref(true);

function onClickSearchInputAction(data) {
  searchInputActive.value = data;
}
</script>


<template>
  <div class="search-wrapper" :class="searchInputActive ? 'active' : null">
    <div class="input-holder">
      <input type="text" class="search-input" placeholder="Kerko..." />
      <button class="search-icon" @click="onClickSearchInputAction(true)">
        <span></span>
      </button>
    </div>
    <span class="close" @click="onClickSearchInputAction(false)"></span>
  </div>
</template>


<style lang="scss" scoped>
::selection {
  background: var(--color-first);
  color: var(--color-light);
}

::placeholder {
  color: var(--color-dark);
}

.search-wrapper .input-holder {
  height: 2.1vw;
  width: 2.1vw;
  overflow: hidden;
  // border-radius: 6px;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder {
  width: 70vw;
  border: solid 0.1vw var(--color-first);
  transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.57);
}
.search-wrapper .input-holder .search-input {
  width: 100%;
  height: 1.5vw;
  padding: 0px 3vw 0 1vw;
  opacity: 0;
  position: absolute;
  top: -0.4vw;
  left: 0;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-size: 1vw;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-dark);
  transform: translate(0, 60px);
  transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
  transition-delay: 0.3s;
}

@media (min-width: 480px) {
  .search-wrapper .input-holder .search-input {
    color: var(--color-first);
  }
}
.search-wrapper.active .input-holder .search-input {
  opacity: 1;
  transform: translate(0, 0.6vw);
}
.search-wrapper .input-holder .search-icon {
  height: 2vw;
  width: 2vw;
  border: none;
  border-radius: 100%;
  padding: 0px;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder .search-icon {
  width: 2vw;
  height: 2vw;
  margin: 0 0.5vw;
  border-radius: 100%;
}
.search-wrapper .input-holder .search-icon span {
  width: 1.4vw;
  height: 1.4vw;
  display: inline-block;
  vertical-align: middle;
  position: relative;
  transform: rotate(45deg);
  transition: all 0.4s cubic-bezier(0.65, -0.6, 0.24, 1.65);
}
.search-wrapper.active .input-holder .search-icon span {
  transform: rotate(-45deg);
}
.search-wrapper .input-holder .search-icon span::before,
.search-wrapper .input-holder .search-icon span::after {
  position: absolute;
  content: "";
}
.search-wrapper .input-holder .search-icon span::before {
  width: 0.3vw;
  height: 0.8vw;
  left: 0.6vw;
  top: 1.3vw;
  //   border-radius: 2px;
  background: var(--color-first);
}
.search-wrapper .input-holder .search-icon span::after {
  width: 1vw;
  height: 1vw;
  left: 0;
  top: 0;
  border-radius: 100%;
  border: 0.23vw solid var(--color-first);
}
.search-wrapper .close {
  position: absolute;
  z-index: 1;
  top: 20vw;
  right: 47vw;
  width: 7vw;
  height: 7vw;
  cursor: pointer;
  transform: rotate(-180deg);
  transition: all 0.3s cubic-bezier(0.285, -0.45, 0.935, 0.11);
  transition-delay: 0.2s;
}
.search-wrapper.active .close {
  right: 90vw;
  top: 21vw;
  transform: rotate(45deg);
  transition: all 0.6s cubic-bezier(0, 0.105, 0.035, 1.57);
  transition-delay: 0.1s;
}
.search-wrapper .close::before,
.search-wrapper .close::after {
  position: absolute;
  content: "";
  background: var(--color-first);
  border-radius: 2px;
}
.search-wrapper .close::before {
  width: 0.35vw;
  height: 1.6vw;
  left: 0.6vw;
  top: 0;
}
.search-wrapper .close::after {
  width: 1.6vw;
  height: 0.35vw;
  left: 0vw;
  top: 0.6vw;
}
.search-wrapper .input-holder {
  height: 5.5vw;
}

.search-wrapper .input-holder .search-input {
  height: 5.5vw;
  font-size: 2vw;
}

@media (min-width: 480px) {
  .search-wrapper.active .close {
    right: 34vw;
    top: 0.8vw;
  }
  .search-wrapper .input-holder {
    height: 2.1vw;
  }

  .search-wrapper .input-holder .search-input {
    height: 2.1vw;
    font-size: 1vw;
  }
  .search-wrapper .close {
    top: 0.3vw;
    right: 0.2vw;
    width: 2vw;
    height: 2vw;
  }
  .search-wrapper.active .input-holder {
    width: 33vw;
  }
}
</style>