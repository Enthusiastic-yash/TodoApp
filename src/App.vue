<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header class="w-full h-20 bg-indigo-700">
    <h1
      className="text-white text-3xl  text-center leading-loose md:leading-normal md:text-5xl md:text-left  font-thin uppercase"
    >
      Basic cruid
    </h1>
  </header>

  <RouterView />
</template>
