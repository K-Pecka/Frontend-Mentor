<script setup>
import PreparationTime from "./PreparationTime.vue";
</script>

<template>
  <header>
    <img
        :src="'src/assets/images/image-omelette.jpeg'"
        alt="omelette picture"
      />
      <h1>Simple Omelette Recipe</h1>
      <p>
        An easy and quick dish, perfect for any meal. This classic omelette
        combines beaten eggs cooked to perfection, optionally filled with your
        choice of cheese, vegetables, or meats.
      </p>
      <PreparationTime />
  </header>
</template>

<style>

</style>