<template>
  <div :class="`w-[120px] relative mr-[20px] flex justify-center items-center ${chipStatus.done ? 'bg-gray-400' : 'bg-white'}`">
    <p class="text-sm text-center text-black">
      {{chipStatus.label}}
    </p>
    <div class="arrow w-[20px] h-full absolute"></div>
  </div>
</template>

<script setup lang="ts">
import type {ChipStatus} from "~/types/Resume";

const props = defineProps<{
  chipStatus: ChipStatus;
}>();
</script>

<style scoped>
.arrow {
  width: 0;
  height: 0;
  border-top: 20px solid transparent;
  border-bottom: 20px solid transparent;
  border-left: 17px solid #ffffff;
  right: -17px;
}
</style>