<script setup>
import ListOfItems from "../loopItems/ListOfItems.vue";
const items = [
  { value: "2-3 large eggs" },
  { value: "Salt, to taste" },
  { value: "Pepper, to taste" },
  { value: "1 tablespoon of butter or oil" },
  { value: "Optional fillings: cheese, diced vegetables, cooked meats, herbs" }
];
</script>
<template>
  <section>
    <h2>Ingredients</h2>
    <ListOfItems :items="items"  />
  </section>
</template>
