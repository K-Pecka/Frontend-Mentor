<script setup>
import TableOfItems from "../loopItems/TableOfItems.vue";
const items = [
  { title: "Calories",value:"277kcal" },
  { title: "Carbs",value:"0g" },
  { title: "Protein",value:"20g" },
  { title: "Fat",value:"22g" }
];
</script>
<template>
  <section>
    <h2>Nutrition</h2>
    <p>The table below shows nutritional values per serving without the additional fillings.</p>
    <TableOfItems :items="items" />
  </section>
</template>
