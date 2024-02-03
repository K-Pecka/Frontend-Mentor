<script setup>
import RecipeHeader from "./header/RecipeHeader.vue";
import IngredientsSection from "./section/IngredientsSection.vue"
import InstructionsSection from "./section/InstructionsSection.vue"
import NutritionSection from './section/NutritionSection.vue'
</script>
<template>
  <article>
    <RecipeHeader />
    <IngredientsSection />
    <InstructionsSection />
    <NutritionSection />
  </article>
</template>

<style scoped></style>
