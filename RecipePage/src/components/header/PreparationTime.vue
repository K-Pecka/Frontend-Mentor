<script setup>
import ListOfItems from "../loopItems/ListOfItems.vue";
const items = [
  { title: "Total", value: "Approximately 10 minutes" },
  { title: "Preparation", value: "5 minutes" },
  { title: "Cooking", value: "5 minutes" },
];
</script>

<template>
  <section>
    <h3>Preparation time</h3>
    <ListOfItems :items="items" />
  </section>
</template>

<style scoped></style>
