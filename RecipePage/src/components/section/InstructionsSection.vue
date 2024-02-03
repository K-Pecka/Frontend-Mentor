<script setup>
import ListOfItems from "../loopItems/ListOfItems.vue";;
const items = [
  { title:"Beat the eggs",value: "In a bowl, beat the eggs with a pinch of salt and pepper until they are well mixed. You can add a tablespoon of water or milk for a fluffier texture." },
  { title:"Heat the pan",value: "Place a non-stick frying pan over medium heat and add butter or oil." },
  { title:"Cook the omelette",value: "Once the butter is melted and bubbling, pour in the eggs. Tilt the pan to ensure the eggs evenly coat the surface." },
  { title:"Add fillings (optional)",value: "When the eggs begin to set at the edges but are still slightly runny in the middle, sprinkle your chosen fillings over one half of the omelette." },
  { title:"Fold and serve",value: "As the omelette continues to cook, carefully lift one edge and fold it over the fillings. Let it cook for another minute, then slide it onto a plate." },
  { title:"Enjoy",value: "Serve hot, with additional salt and pepper if needed." }
];
</script>
<template>
  <section>
    <h2>Instructions</h2>
    <ListOfItems :items="items" typeList="ol"/>
  </section>
</template>
