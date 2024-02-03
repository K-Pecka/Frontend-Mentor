<script setup>
const props = defineProps(['items', 'typeList']);
const items = props?.items || [];
const typeList = props?.typeList || 'ul';
</script>

<template>
  <typeList v-if="items.length > 0">
    <li v-for="(item, index) of items" :key="index">
      <span v-if="item.title">{{ item.title }}:</span>{{ item.value }}
    </li>
  </typeList>
</template>

<style scoped>
span {
  font-weight: bold;
}
</style>
