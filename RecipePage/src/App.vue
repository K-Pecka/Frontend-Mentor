<script setup>
import RecipeContainer from './components/RecipeContainer.vue'
import FooterMain from './components/FooterMain.vue'
</script>

<template>
  <main>
    <RecipeContainer />
    <FooterMain />
  </main>
  
</template>

<style scoped>
main{
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
  flex-wrap: wrap;
}
</style>
