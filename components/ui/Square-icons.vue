<template>
  <div class="icon-wrapper">
    <UIcon :name="name" :size="30"/>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string;
}>();
</script>

<style scoped>
.icon-wrapper {
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: black;
  background-color: #A1AEBF;
  border-radius: 4px;
}
</style>