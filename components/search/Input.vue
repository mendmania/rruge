<script setup>
import { ref } from 'vue'

const searchInputActive = ref(false)

function onClickSearchInputAction(data) {
    searchInputActive.value = data
} 

</script>


<template>
  <div class="search-wrapper" :class="searchInputActive ? 'active' : null">
    <div class="input-holder">
      <input type="text"
             class="search-input"
             placeholder="Type to search" />
      <button class="search-icon" @click="onClickSearchInputAction(true)"><span></span></button>
    </div>
    <span class="close" @click="onClickSearchInputAction(false)"></span>
  </div>
</template>


<style lang="scss" scoped>


::selection {
  background: var(--color-first);
  color: var(--color-light);
}

.search-wrapper .input-holder {
  height: 30px;
  width: 30px;
  overflow: hidden;
  border-radius: 6px;
  position: relative;
  transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder {
  width: 450px;
  border-radius: 50px;
border: solid .1vw var(--color-first);
  transition: all 0.5s cubic-bezier(0, 0.105, 0.035, 1.57);
}
.search-wrapper .input-holder .search-input {
  width: 100%;
  height: 30px;
  padding: 0px 70px 0 20px;
  opacity: 0;
  position: absolute;
  top: -10px;
  left: 0px;
  background: transparent;
  box-sizing: border-box;
  border: none;
  outline: none;
  font-family: "Open Sans", Arial, Verdana;
  font-size: 16px;
  font-weight: 400;
  line-height: 20px;
  color: var(--color-dark);
  transform: translate(0, 60px);
  transition: all 0.3s cubic-bezier(0, 0.105, 0.035, 1.57);
  transition-delay: 0.3s;
}
.search-wrapper.active .input-holder .search-input {
  opacity: 1;
  transform: translate(0, 10px);
}
.search-wrapper .input-holder .search-icon {
  width: 30px;
  height: 30px;
  border: none;
  border-radius: 6px;
  background: var(--color-light);
  padding: 0px;
  outline: none;
  position: relative;
  z-index: 2;
  float: right;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
}
.search-wrapper.active .input-holder .search-icon {
  width: 30px;
  height: 30px;
  margin: 0 10px;
  border-radius: 30px;
}
.search-wrapper .input-holder .search-icon span {
  width: 22px;
  height: 22px;
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
  width: 4px;
  height: 11px;
  left: 9px;
  top: 18px;
  border-radius: 2px;
  background: var(--color-first);
}
.search-wrapper .input-holder .search-icon span::after {
  width: 14px;
  height: 14px;
  left: 0px;
  top: 0px;
  border-radius: 16px;
  border: 4px solid var(--color-first);
}
.search-wrapper .close {
  position: absolute;
  z-index: 1;
  top: 30px;
  right: 20px;
  width: 25px;
  height: 25px;
  cursor: pointer;
  transform: rotate(-180deg);
  transition: all 0.3s cubic-bezier(0.285, -0.45, 0.935, 0.11);
  transition-delay: 0.2s;
}
.search-wrapper.active .close {
  right: 480px;
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
  width: 5px;
  height: 25px;
  left: 10px;
  top: 0px;
}
.search-wrapper .close::after {
  width: 25px;
  height: 5px;
  left: 0px;
  top: 10px;
}
</style>
