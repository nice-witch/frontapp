<template>
  <div :class="`chip w-[140px] p-2 text-wrap text-center ${chip.active ? 'text-cyan-400 cursor-pointer' : 'text-cyan-700'} ${chip.done && 'bg-green-600 text-white'}`">
    {{chip.done ? chip.labelDone : chip.label}}
  </div>
</template>

<script setup lang="ts">
interface Chip {
  label: string,
  labelDone: string,
  done: boolean,
  active: boolean,
}
const props = defineProps<{
  chip: Chip;
}>();
</script>

<style scoped>
.chip {
  border: 2px solid #366150;
}
</style>