<script setup>
const props = defineProps(['items']);
const items = props?.items || [];
</script>

<template>
  <table>
    <tr v-for="(item, index) of items" :key="index">
      <td>{{ item.title }}:</td><td>{{ item.value }}</td>
    </tr>
  </table>
</template>

<style scoped>
span {
  font-weight: bold;
}
</style>
